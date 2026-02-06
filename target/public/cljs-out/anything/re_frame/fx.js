// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__18488 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__18489 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__18489);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___18522 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___18522)){
var new_db_18523 = temp__5825__auto___18522;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_18523);
} else {
}

var seq__18490 = cljs.core.seq.call(null,effects_without_db);
var chunk__18491 = null;
var count__18492 = (0);
var i__18493 = (0);
while(true){
if((i__18493 < count__18492)){
var vec__18500 = cljs.core._nth.call(null,chunk__18491,i__18493);
var effect_key = cljs.core.nth.call(null,vec__18500,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18500,(1),null);
var temp__5823__auto___18524 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___18524)){
var effect_fn_18525 = temp__5823__auto___18524;
effect_fn_18525.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18526 = seq__18490;
var G__18527 = chunk__18491;
var G__18528 = count__18492;
var G__18529 = (i__18493 + (1));
seq__18490 = G__18526;
chunk__18491 = G__18527;
count__18492 = G__18528;
i__18493 = G__18529;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__18490);
if(temp__5825__auto__){
var seq__18490__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18490__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__18490__$1);
var G__18530 = cljs.core.chunk_rest.call(null,seq__18490__$1);
var G__18531 = c__5568__auto__;
var G__18532 = cljs.core.count.call(null,c__5568__auto__);
var G__18533 = (0);
seq__18490 = G__18530;
chunk__18491 = G__18531;
count__18492 = G__18532;
i__18493 = G__18533;
continue;
} else {
var vec__18503 = cljs.core.first.call(null,seq__18490__$1);
var effect_key = cljs.core.nth.call(null,vec__18503,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18503,(1),null);
var temp__5823__auto___18534 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___18534)){
var effect_fn_18535 = temp__5823__auto___18534;
effect_fn_18535.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18536 = cljs.core.next.call(null,seq__18490__$1);
var G__18537 = null;
var G__18538 = (0);
var G__18539 = (0);
seq__18490 = G__18536;
chunk__18491 = G__18537;
count__18492 = G__18538;
i__18493 = G__18539;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__17539__auto___18540 = re_frame.interop.now.call(null);
var duration__17540__auto___18541 = (end__17539__auto___18540 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__17540__auto___18541,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__17539__auto___18540);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__18488);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___18542 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___18542)){
var new_db_18543 = temp__5825__auto___18542;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_18543);
} else {
}

var seq__18506 = cljs.core.seq.call(null,effects_without_db);
var chunk__18507 = null;
var count__18508 = (0);
var i__18509 = (0);
while(true){
if((i__18509 < count__18508)){
var vec__18516 = cljs.core._nth.call(null,chunk__18507,i__18509);
var effect_key = cljs.core.nth.call(null,vec__18516,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18516,(1),null);
var temp__5823__auto___18544 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___18544)){
var effect_fn_18545 = temp__5823__auto___18544;
effect_fn_18545.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18546 = seq__18506;
var G__18547 = chunk__18507;
var G__18548 = count__18508;
var G__18549 = (i__18509 + (1));
seq__18506 = G__18546;
chunk__18507 = G__18547;
count__18508 = G__18548;
i__18509 = G__18549;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__18506);
if(temp__5825__auto__){
var seq__18506__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18506__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__18506__$1);
var G__18550 = cljs.core.chunk_rest.call(null,seq__18506__$1);
var G__18551 = c__5568__auto__;
var G__18552 = cljs.core.count.call(null,c__5568__auto__);
var G__18553 = (0);
seq__18506 = G__18550;
chunk__18507 = G__18551;
count__18508 = G__18552;
i__18509 = G__18553;
continue;
} else {
var vec__18519 = cljs.core.first.call(null,seq__18506__$1);
var effect_key = cljs.core.nth.call(null,vec__18519,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18519,(1),null);
var temp__5823__auto___18554 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___18554)){
var effect_fn_18555 = temp__5823__auto___18554;
effect_fn_18555.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__18556 = cljs.core.next.call(null,seq__18506__$1);
var G__18557 = null;
var G__18558 = (0);
var G__18559 = (0);
seq__18506 = G__18556;
chunk__18507 = G__18557;
count__18508 = G__18558;
i__18509 = G__18559;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__18560){
var map__18561 = p__18560;
var map__18561__$1 = cljs.core.__destructure_map.call(null,map__18561);
var effect = map__18561__$1;
var ms = cljs.core.get.call(null,map__18561__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__18561__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
return re_frame.interop.set_timeout_BANG_.call(null,(function (){
return re_frame.router.dispatch.call(null,dispatch);
}),ms);
}
});
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_.call(null,value)){
return re_frame.fx.dispatch_later.call(null,value);
} else {
var seq__18562 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__18563 = null;
var count__18564 = (0);
var i__18565 = (0);
while(true){
if((i__18565 < count__18564)){
var effect = cljs.core._nth.call(null,chunk__18563,i__18565);
re_frame.fx.dispatch_later.call(null,effect);


var G__18566 = seq__18562;
var G__18567 = chunk__18563;
var G__18568 = count__18564;
var G__18569 = (i__18565 + (1));
seq__18562 = G__18566;
chunk__18563 = G__18567;
count__18564 = G__18568;
i__18565 = G__18569;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__18562);
if(temp__5825__auto__){
var seq__18562__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18562__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__18562__$1);
var G__18570 = cljs.core.chunk_rest.call(null,seq__18562__$1);
var G__18571 = c__5568__auto__;
var G__18572 = cljs.core.count.call(null,c__5568__auto__);
var G__18573 = (0);
seq__18562 = G__18570;
chunk__18563 = G__18571;
count__18564 = G__18572;
i__18565 = G__18573;
continue;
} else {
var effect = cljs.core.first.call(null,seq__18562__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__18574 = cljs.core.next.call(null,seq__18562__$1);
var G__18575 = null;
var G__18576 = (0);
var G__18577 = (0);
seq__18562 = G__18574;
chunk__18563 = G__18575;
count__18564 = G__18576;
i__18565 = G__18577;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_.call(null,seq_of_effects)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type.call(null,seq_of_effects));
} else {
var seq__18578 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__18579 = null;
var count__18580 = (0);
var i__18581 = (0);
while(true){
if((i__18581 < count__18580)){
var vec__18588 = cljs.core._nth.call(null,chunk__18579,i__18581);
var effect_key = cljs.core.nth.call(null,vec__18588,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18588,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5823__auto___18594 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___18594)){
var effect_fn_18595 = temp__5823__auto___18594;
effect_fn_18595.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__18596 = seq__18578;
var G__18597 = chunk__18579;
var G__18598 = count__18580;
var G__18599 = (i__18581 + (1));
seq__18578 = G__18596;
chunk__18579 = G__18597;
count__18580 = G__18598;
i__18581 = G__18599;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__18578);
if(temp__5825__auto__){
var seq__18578__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18578__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__18578__$1);
var G__18600 = cljs.core.chunk_rest.call(null,seq__18578__$1);
var G__18601 = c__5568__auto__;
var G__18602 = cljs.core.count.call(null,c__5568__auto__);
var G__18603 = (0);
seq__18578 = G__18600;
chunk__18579 = G__18601;
count__18580 = G__18602;
i__18581 = G__18603;
continue;
} else {
var vec__18591 = cljs.core.first.call(null,seq__18578__$1);
var effect_key = cljs.core.nth.call(null,vec__18591,(0),null);
var effect_value = cljs.core.nth.call(null,vec__18591,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5823__auto___18604 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___18604)){
var effect_fn_18605 = temp__5823__auto___18604;
effect_fn_18605.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__18606 = cljs.core.next.call(null,seq__18578__$1);
var G__18607 = null;
var G__18608 = (0);
var G__18609 = (0);
seq__18578 = G__18606;
chunk__18579 = G__18607;
count__18580 = G__18608;
i__18581 = G__18609;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value);
} else {
var seq__18610 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__18611 = null;
var count__18612 = (0);
var i__18613 = (0);
while(true){
if((i__18613 < count__18612)){
var event = cljs.core._nth.call(null,chunk__18611,i__18613);
re_frame.router.dispatch.call(null,event);


var G__18614 = seq__18610;
var G__18615 = chunk__18611;
var G__18616 = count__18612;
var G__18617 = (i__18613 + (1));
seq__18610 = G__18614;
chunk__18611 = G__18615;
count__18612 = G__18616;
i__18613 = G__18617;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__18610);
if(temp__5825__auto__){
var seq__18610__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18610__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__18610__$1);
var G__18618 = cljs.core.chunk_rest.call(null,seq__18610__$1);
var G__18619 = c__5568__auto__;
var G__18620 = cljs.core.count.call(null,c__5568__auto__);
var G__18621 = (0);
seq__18610 = G__18618;
chunk__18611 = G__18619;
count__18612 = G__18620;
i__18613 = G__18621;
continue;
} else {
var event = cljs.core.first.call(null,seq__18610__$1);
re_frame.router.dispatch.call(null,event);


var G__18622 = cljs.core.next.call(null,seq__18610__$1);
var G__18623 = null;
var G__18624 = (0);
var G__18625 = (0);
seq__18610 = G__18622;
chunk__18611 = G__18623;
count__18612 = G__18624;
i__18613 = G__18625;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__18626 = cljs.core.seq.call(null,value);
var chunk__18627 = null;
var count__18628 = (0);
var i__18629 = (0);
while(true){
if((i__18629 < count__18628)){
var event = cljs.core._nth.call(null,chunk__18627,i__18629);
clear_event.call(null,event);


var G__18630 = seq__18626;
var G__18631 = chunk__18627;
var G__18632 = count__18628;
var G__18633 = (i__18629 + (1));
seq__18626 = G__18630;
chunk__18627 = G__18631;
count__18628 = G__18632;
i__18629 = G__18633;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__18626);
if(temp__5825__auto__){
var seq__18626__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18626__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__18626__$1);
var G__18634 = cljs.core.chunk_rest.call(null,seq__18626__$1);
var G__18635 = c__5568__auto__;
var G__18636 = cljs.core.count.call(null,c__5568__auto__);
var G__18637 = (0);
seq__18626 = G__18634;
chunk__18627 = G__18635;
count__18628 = G__18636;
i__18629 = G__18637;
continue;
} else {
var event = cljs.core.first.call(null,seq__18626__$1);
clear_event.call(null,event);


var G__18638 = cljs.core.next.call(null,seq__18626__$1);
var G__18639 = null;
var G__18640 = (0);
var G__18641 = (0);
seq__18626 = G__18638;
chunk__18627 = G__18639;
count__18628 = G__18640;
i__18629 = G__18641;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
