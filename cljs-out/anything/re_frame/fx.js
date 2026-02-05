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
var _STAR_current_trace_STAR__orig_val__23955 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23956 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23956);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___23989 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___23989)){
var new_db_23990 = temp__5825__auto___23989;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_23990);
} else {
}

var seq__23957 = cljs.core.seq.call(null,effects_without_db);
var chunk__23958 = null;
var count__23959 = (0);
var i__23960 = (0);
while(true){
if((i__23960 < count__23959)){
var vec__23967 = cljs.core._nth.call(null,chunk__23958,i__23960);
var effect_key = cljs.core.nth.call(null,vec__23967,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23967,(1),null);
var temp__5823__auto___23991 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___23991)){
var effect_fn_23992 = temp__5823__auto___23991;
effect_fn_23992.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__23993 = seq__23957;
var G__23994 = chunk__23958;
var G__23995 = count__23959;
var G__23996 = (i__23960 + (1));
seq__23957 = G__23993;
chunk__23958 = G__23994;
count__23959 = G__23995;
i__23960 = G__23996;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__23957);
if(temp__5825__auto__){
var seq__23957__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23957__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__23957__$1);
var G__23997 = cljs.core.chunk_rest.call(null,seq__23957__$1);
var G__23998 = c__5568__auto__;
var G__23999 = cljs.core.count.call(null,c__5568__auto__);
var G__24000 = (0);
seq__23957 = G__23997;
chunk__23958 = G__23998;
count__23959 = G__23999;
i__23960 = G__24000;
continue;
} else {
var vec__23970 = cljs.core.first.call(null,seq__23957__$1);
var effect_key = cljs.core.nth.call(null,vec__23970,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23970,(1),null);
var temp__5823__auto___24001 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24001)){
var effect_fn_24002 = temp__5823__auto___24001;
effect_fn_24002.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24003 = cljs.core.next.call(null,seq__23957__$1);
var G__24004 = null;
var G__24005 = (0);
var G__24006 = (0);
seq__23957 = G__24003;
chunk__23958 = G__24004;
count__23959 = G__24005;
i__23960 = G__24006;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__17539__auto___24007 = re_frame.interop.now.call(null);
var duration__17540__auto___24008 = (end__17539__auto___24007 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__17540__auto___24008,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__17539__auto___24007);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23955);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.call(null,effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5825__auto___24009 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5825__auto___24009)){
var new_db_24010 = temp__5825__auto___24009;
re_frame.registrar.get_handler.call(null,re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false).call(null,new_db_24010);
} else {
}

var seq__23973 = cljs.core.seq.call(null,effects_without_db);
var chunk__23974 = null;
var count__23975 = (0);
var i__23976 = (0);
while(true){
if((i__23976 < count__23975)){
var vec__23983 = cljs.core._nth.call(null,chunk__23974,i__23976);
var effect_key = cljs.core.nth.call(null,vec__23983,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23983,(1),null);
var temp__5823__auto___24011 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24011)){
var effect_fn_24012 = temp__5823__auto___24011;
effect_fn_24012.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24013 = seq__23973;
var G__24014 = chunk__23974;
var G__24015 = count__23975;
var G__24016 = (i__23976 + (1));
seq__23973 = G__24013;
chunk__23974 = G__24014;
count__23975 = G__24015;
i__23976 = G__24016;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__23973);
if(temp__5825__auto__){
var seq__23973__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23973__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__23973__$1);
var G__24017 = cljs.core.chunk_rest.call(null,seq__23973__$1);
var G__24018 = c__5568__auto__;
var G__24019 = cljs.core.count.call(null,c__5568__auto__);
var G__24020 = (0);
seq__23973 = G__24017;
chunk__23974 = G__24018;
count__23975 = G__24019;
i__23976 = G__24020;
continue;
} else {
var vec__23986 = cljs.core.first.call(null,seq__23973__$1);
var effect_key = cljs.core.nth.call(null,vec__23986,(0),null);
var effect_value = cljs.core.nth.call(null,vec__23986,(1),null);
var temp__5823__auto___24021 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24021)){
var effect_fn_24022 = temp__5823__auto___24021;
effect_fn_24022.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__24023 = cljs.core.next.call(null,seq__23973__$1);
var G__24024 = null;
var G__24025 = (0);
var G__24026 = (0);
seq__23973 = G__24023;
chunk__23974 = G__24024;
count__23975 = G__24025;
i__23976 = G__24026;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24027){
var map__24028 = p__24027;
var map__24028__$1 = cljs.core.__destructure_map.call(null,map__24028);
var effect = map__24028__$1;
var ms = cljs.core.get.call(null,map__24028__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__24028__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__24029 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__24030 = null;
var count__24031 = (0);
var i__24032 = (0);
while(true){
if((i__24032 < count__24031)){
var effect = cljs.core._nth.call(null,chunk__24030,i__24032);
re_frame.fx.dispatch_later.call(null,effect);


var G__24033 = seq__24029;
var G__24034 = chunk__24030;
var G__24035 = count__24031;
var G__24036 = (i__24032 + (1));
seq__24029 = G__24033;
chunk__24030 = G__24034;
count__24031 = G__24035;
i__24032 = G__24036;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__24029);
if(temp__5825__auto__){
var seq__24029__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24029__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__24029__$1);
var G__24037 = cljs.core.chunk_rest.call(null,seq__24029__$1);
var G__24038 = c__5568__auto__;
var G__24039 = cljs.core.count.call(null,c__5568__auto__);
var G__24040 = (0);
seq__24029 = G__24037;
chunk__24030 = G__24038;
count__24031 = G__24039;
i__24032 = G__24040;
continue;
} else {
var effect = cljs.core.first.call(null,seq__24029__$1);
re_frame.fx.dispatch_later.call(null,effect);


var G__24041 = cljs.core.next.call(null,seq__24029__$1);
var G__24042 = null;
var G__24043 = (0);
var G__24044 = (0);
seq__24029 = G__24041;
chunk__24030 = G__24042;
count__24031 = G__24043;
i__24032 = G__24044;
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
var seq__24045 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24046 = null;
var count__24047 = (0);
var i__24048 = (0);
while(true){
if((i__24048 < count__24047)){
var vec__24055 = cljs.core._nth.call(null,chunk__24046,i__24048);
var effect_key = cljs.core.nth.call(null,vec__24055,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24055,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5823__auto___24061 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24061)){
var effect_fn_24062 = temp__5823__auto___24061;
effect_fn_24062.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__24063 = seq__24045;
var G__24064 = chunk__24046;
var G__24065 = count__24047;
var G__24066 = (i__24048 + (1));
seq__24045 = G__24063;
chunk__24046 = G__24064;
count__24047 = G__24065;
i__24048 = G__24066;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__24045);
if(temp__5825__auto__){
var seq__24045__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24045__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__24045__$1);
var G__24067 = cljs.core.chunk_rest.call(null,seq__24045__$1);
var G__24068 = c__5568__auto__;
var G__24069 = cljs.core.count.call(null,c__5568__auto__);
var G__24070 = (0);
seq__24045 = G__24067;
chunk__24046 = G__24068;
count__24047 = G__24069;
i__24048 = G__24070;
continue;
} else {
var vec__24058 = cljs.core.first.call(null,seq__24045__$1);
var effect_key = cljs.core.nth.call(null,vec__24058,(0),null);
var effect_value = cljs.core.nth.call(null,vec__24058,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: \":fx\" effect should not contain a :db effect");
} else {
}

var temp__5823__auto___24071 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5823__auto___24071)){
var effect_fn_24072 = temp__5823__auto___24071;
effect_fn_24072.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring.");
}


var G__24073 = cljs.core.next.call(null,seq__24045__$1);
var G__24074 = null;
var G__24075 = (0);
var G__24076 = (0);
seq__24045 = G__24073;
chunk__24046 = G__24074;
count__24047 = G__24075;
i__24048 = G__24076;
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
var seq__24077 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__24078 = null;
var count__24079 = (0);
var i__24080 = (0);
while(true){
if((i__24080 < count__24079)){
var event = cljs.core._nth.call(null,chunk__24078,i__24080);
re_frame.router.dispatch.call(null,event);


var G__24081 = seq__24077;
var G__24082 = chunk__24078;
var G__24083 = count__24079;
var G__24084 = (i__24080 + (1));
seq__24077 = G__24081;
chunk__24078 = G__24082;
count__24079 = G__24083;
i__24080 = G__24084;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__24077);
if(temp__5825__auto__){
var seq__24077__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24077__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__24077__$1);
var G__24085 = cljs.core.chunk_rest.call(null,seq__24077__$1);
var G__24086 = c__5568__auto__;
var G__24087 = cljs.core.count.call(null,c__5568__auto__);
var G__24088 = (0);
seq__24077 = G__24085;
chunk__24078 = G__24086;
count__24079 = G__24087;
i__24080 = G__24088;
continue;
} else {
var event = cljs.core.first.call(null,seq__24077__$1);
re_frame.router.dispatch.call(null,event);


var G__24089 = cljs.core.next.call(null,seq__24077__$1);
var G__24090 = null;
var G__24091 = (0);
var G__24092 = (0);
seq__24077 = G__24089;
chunk__24078 = G__24090;
count__24079 = G__24091;
i__24080 = G__24092;
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
var seq__24093 = cljs.core.seq.call(null,value);
var chunk__24094 = null;
var count__24095 = (0);
var i__24096 = (0);
while(true){
if((i__24096 < count__24095)){
var event = cljs.core._nth.call(null,chunk__24094,i__24096);
clear_event.call(null,event);


var G__24097 = seq__24093;
var G__24098 = chunk__24094;
var G__24099 = count__24095;
var G__24100 = (i__24096 + (1));
seq__24093 = G__24097;
chunk__24094 = G__24098;
count__24095 = G__24099;
i__24096 = G__24100;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__24093);
if(temp__5825__auto__){
var seq__24093__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24093__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__24093__$1);
var G__24101 = cljs.core.chunk_rest.call(null,seq__24093__$1);
var G__24102 = c__5568__auto__;
var G__24103 = cljs.core.count.call(null,c__5568__auto__);
var G__24104 = (0);
seq__24093 = G__24101;
chunk__24094 = G__24102;
count__24095 = G__24103;
i__24096 = G__24104;
continue;
} else {
var event = cljs.core.first.call(null,seq__24093__$1);
clear_event.call(null,event);


var G__24105 = cljs.core.next.call(null,seq__24093__$1);
var G__24106 = null;
var G__24107 = (0);
var G__24108 = (0);
seq__24093 = G__24105;
chunk__24094 = G__24106;
count__24095 = G__24107;
i__24096 = G__24108;
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
