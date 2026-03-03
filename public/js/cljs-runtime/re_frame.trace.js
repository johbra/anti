goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 * @type {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__16213){
var map__16215 = p__16213;
var map__16215__$1 = cljs.core.__destructure_map(map__16215);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16215__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16215__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16215__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16215__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5142__auto__ = child_of;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__16218_16263 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__16219_16264 = null;
var count__16220_16265 = (0);
var i__16221_16266 = (0);
while(true){
if((i__16221_16266 < count__16220_16265)){
var vec__16233_16267 = chunk__16219_16264.cljs$core$IIndexed$_nth$arity$2(null,i__16221_16266);
var k_16268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16233_16267,(0),null);
var cb_16269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16233_16267,(1),null);
try{var G__16238_16274 = cljs.core.deref(re_frame.trace.traces);
(cb_16269.cljs$core$IFn$_invoke$arity$1 ? cb_16269.cljs$core$IFn$_invoke$arity$1(G__16238_16274) : cb_16269.call(null,G__16238_16274));
}catch (e16236){var e_16275 = e16236;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_16268,"while storing",cljs.core.deref(re_frame.trace.traces),e_16275], 0));
}

var G__16276 = seq__16218_16263;
var G__16277 = chunk__16219_16264;
var G__16278 = count__16220_16265;
var G__16279 = (i__16221_16266 + (1));
seq__16218_16263 = G__16276;
chunk__16219_16264 = G__16277;
count__16220_16265 = G__16278;
i__16221_16266 = G__16279;
continue;
} else {
var temp__5823__auto___16280 = cljs.core.seq(seq__16218_16263);
if(temp__5823__auto___16280){
var seq__16218_16281__$1 = temp__5823__auto___16280;
if(cljs.core.chunked_seq_QMARK_(seq__16218_16281__$1)){
var c__5673__auto___16282 = cljs.core.chunk_first(seq__16218_16281__$1);
var G__16283 = cljs.core.chunk_rest(seq__16218_16281__$1);
var G__16284 = c__5673__auto___16282;
var G__16285 = cljs.core.count(c__5673__auto___16282);
var G__16286 = (0);
seq__16218_16263 = G__16283;
chunk__16219_16264 = G__16284;
count__16220_16265 = G__16285;
i__16221_16266 = G__16286;
continue;
} else {
var vec__16245_16287 = cljs.core.first(seq__16218_16281__$1);
var k_16288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16245_16287,(0),null);
var cb_16289 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16245_16287,(1),null);
try{var G__16249_16290 = cljs.core.deref(re_frame.trace.traces);
(cb_16289.cljs$core$IFn$_invoke$arity$1 ? cb_16289.cljs$core$IFn$_invoke$arity$1(G__16249_16290) : cb_16289.call(null,G__16249_16290));
}catch (e16248){var e_16291 = e16248;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_16288,"while storing",cljs.core.deref(re_frame.trace.traces),e_16291], 0));
}

var G__16292 = cljs.core.next(seq__16218_16281__$1);
var G__16293 = null;
var G__16294 = (0);
var G__16295 = (0);
seq__16218_16263 = G__16292;
chunk__16219_16264 = G__16293;
count__16220_16265 = G__16294;
i__16221_16266 = G__16295;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
