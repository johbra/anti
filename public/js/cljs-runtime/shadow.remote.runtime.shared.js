goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18352){
var map__18353 = p__18352;
var map__18353__$1 = cljs.core.__destructure_map(map__18353);
var runtime = map__18353__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18353__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5142__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18486 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18486)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__18356 = runtime;
var G__18357 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18486);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__18356,G__18357) : shadow.remote.runtime.shared.process.call(null,G__18356,G__18357));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18358,res){
var map__18359 = p__18358;
var map__18359__$1 = cljs.core.__destructure_map(map__18359);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18359__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18359__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18360 = res;
var G__18360__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18360,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18360);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18360__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18360__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18364 = arguments.length;
switch (G__18364) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18365,msg,handlers,timeout_after_ms){
var map__18367 = p__18365;
var map__18367__$1 = cljs.core.__destructure_map(map__18367);
var runtime = map__18367__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18367__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18544 = arguments.length;
var i__5877__auto___18545 = (0);
while(true){
if((i__5877__auto___18545 < len__5876__auto___18544)){
args__5882__auto__.push((arguments[i__5877__auto___18545]));

var G__18546 = (i__5877__auto___18545 + (1));
i__5877__auto___18545 = G__18546;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18372,ev,args){
var map__18373 = p__18372;
var map__18373__$1 = cljs.core.__destructure_map(map__18373);
var runtime = map__18373__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18373__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18374 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18377 = null;
var count__18378 = (0);
var i__18379 = (0);
while(true){
if((i__18379 < count__18378)){
var ext = chunk__18377.cljs$core$IIndexed$_nth$arity$2(null,i__18379);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18553 = seq__18374;
var G__18554 = chunk__18377;
var G__18555 = count__18378;
var G__18556 = (i__18379 + (1));
seq__18374 = G__18553;
chunk__18377 = G__18554;
count__18378 = G__18555;
i__18379 = G__18556;
continue;
} else {
var G__18557 = seq__18374;
var G__18558 = chunk__18377;
var G__18559 = count__18378;
var G__18560 = (i__18379 + (1));
seq__18374 = G__18557;
chunk__18377 = G__18558;
count__18378 = G__18559;
i__18379 = G__18560;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18374);
if(temp__5823__auto__){
var seq__18374__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18374__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18374__$1);
var G__18562 = cljs.core.chunk_rest(seq__18374__$1);
var G__18563 = c__5673__auto__;
var G__18564 = cljs.core.count(c__5673__auto__);
var G__18565 = (0);
seq__18374 = G__18562;
chunk__18377 = G__18563;
count__18378 = G__18564;
i__18379 = G__18565;
continue;
} else {
var ext = cljs.core.first(seq__18374__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18570 = cljs.core.next(seq__18374__$1);
var G__18571 = null;
var G__18572 = (0);
var G__18573 = (0);
seq__18374 = G__18570;
chunk__18377 = G__18571;
count__18378 = G__18572;
i__18379 = G__18573;
continue;
} else {
var G__18574 = cljs.core.next(seq__18374__$1);
var G__18575 = null;
var G__18576 = (0);
var G__18577 = (0);
seq__18374 = G__18574;
chunk__18377 = G__18575;
count__18378 = G__18576;
i__18379 = G__18577;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18368){
var G__18369 = cljs.core.first(seq18368);
var seq18368__$1 = cljs.core.next(seq18368);
var G__18370 = cljs.core.first(seq18368__$1);
var seq18368__$2 = cljs.core.next(seq18368__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18369,G__18370,seq18368__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18391,p__18392){
var map__18396 = p__18391;
var map__18396__$1 = cljs.core.__destructure_map(map__18396);
var runtime = map__18396__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18396__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18398 = p__18392;
var map__18398__$1 = cljs.core.__destructure_map(map__18398);
var msg = map__18398__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18398__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__18404 = cljs.core.deref(state_ref);
var map__18404__$1 = cljs.core.__destructure_map(map__18404);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18404__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18404__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18418,msg){
var map__18419 = p__18418;
var map__18419__$1 = cljs.core.__destructure_map(map__18419);
var runtime = map__18419__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18419__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18429,key,p__18430){
var map__18433 = p__18429;
var map__18433__$1 = cljs.core.__destructure_map(map__18433);
var state = map__18433__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18433__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18434 = p__18430;
var map__18434__$1 = cljs.core.__destructure_map(map__18434);
var spec = map__18434__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18434__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18434__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18445,key,spec){
var map__18446 = p__18445;
var map__18446__$1 = cljs.core.__destructure_map(map__18446);
var runtime = map__18446__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18446__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5827__auto___18630 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5827__auto___18630 == null)){
} else {
var on_welcome_18632 = temp__5827__auto___18630;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18632.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18632.cljs$core$IFn$_invoke$arity$0() : on_welcome_18632.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18450_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18450_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18451_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18451_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18452_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18452_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18453_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18453_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18454_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18454_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18459,key){
var map__18460 = p__18459;
var map__18460__$1 = cljs.core.__destructure_map(map__18460);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18460__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18464,msg){
var map__18465 = p__18464;
var map__18465__$1 = cljs.core.__destructure_map(map__18465);
var runtime = map__18465__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18465__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18469,p__18470){
var map__18471 = p__18469;
var map__18471__$1 = cljs.core.__destructure_map(map__18471);
var runtime = map__18471__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18471__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18472 = p__18470;
var map__18472__$1 = cljs.core.__destructure_map(map__18472);
var msg = map__18472__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18472__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18472__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18473 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18475 = null;
var count__18476 = (0);
var i__18477 = (0);
while(true){
if((i__18477 < count__18476)){
var map__18481 = chunk__18475.cljs$core$IIndexed$_nth$arity$2(null,i__18477);
var map__18481__$1 = cljs.core.__destructure_map(map__18481);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18481__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18725 = seq__18473;
var G__18726 = chunk__18475;
var G__18727 = count__18476;
var G__18728 = (i__18477 + (1));
seq__18473 = G__18725;
chunk__18475 = G__18726;
count__18476 = G__18727;
i__18477 = G__18728;
continue;
} else {
var G__18731 = seq__18473;
var G__18733 = chunk__18475;
var G__18735 = count__18476;
var G__18737 = (i__18477 + (1));
seq__18473 = G__18731;
chunk__18475 = G__18733;
count__18476 = G__18735;
i__18477 = G__18737;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__18473);
if(temp__5823__auto__){
var seq__18473__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18473__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__18473__$1);
var G__18747 = cljs.core.chunk_rest(seq__18473__$1);
var G__18748 = c__5673__auto__;
var G__18749 = cljs.core.count(c__5673__auto__);
var G__18750 = (0);
seq__18473 = G__18747;
chunk__18475 = G__18748;
count__18476 = G__18749;
i__18477 = G__18750;
continue;
} else {
var map__18482 = cljs.core.first(seq__18473__$1);
var map__18482__$1 = cljs.core.__destructure_map(map__18482);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18482__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18752 = cljs.core.next(seq__18473__$1);
var G__18753 = null;
var G__18754 = (0);
var G__18755 = (0);
seq__18473 = G__18752;
chunk__18475 = G__18753;
count__18476 = G__18754;
i__18477 = G__18755;
continue;
} else {
var G__18756 = cljs.core.next(seq__18473__$1);
var G__18757 = null;
var G__18758 = (0);
var G__18759 = (0);
seq__18473 = G__18756;
chunk__18475 = G__18757;
count__18476 = G__18758;
i__18477 = G__18759;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
