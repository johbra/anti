goog.provide('re_frame.query.alpha');
re_frame.query.alpha.legacy_lifecycle = (function re_frame$query$alpha$legacy_lifecycle(v){
if(cljs.core.vector_QMARK_(v)){
var or__5142__auto__ = (function (){var G__16528 = cljs.core.meta(v);
return (re_frame.query.alpha.lifecycle.cljs$core$IFn$_invoke$arity$1 ? re_frame.query.alpha.lifecycle.cljs$core$IFn$_invoke$arity$1(G__16528) : re_frame.query.alpha.lifecycle.call(null,G__16528));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"safe","safe",-125058214);
}
} else {
return null;
}
});
re_frame.query.alpha.legacy_query_id = (function re_frame$query$alpha$legacy_query_id(q){
if(cljs.core.vector_QMARK_(q)){
return cljs.core.first(q);
} else {
return null;
}
});
re_frame.query.alpha.id = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(re_frame.query.alpha.legacy_query_id,new cljs.core.Keyword("re-frame","q","re-frame/q",-1128715212));
re_frame.query.alpha.flow_lifecycle = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flow","flow",590489032),null], null), null),re_frame.query.alpha.id);
re_frame.query.alpha.lifecycle = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(re_frame.query.alpha.flow_lifecycle,re_frame.query.alpha.legacy_lifecycle,new cljs.core.Keyword("re-frame","lifecycle","re-frame/lifecycle",-2078095936),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.constantly(new cljs.core.Keyword(null,"safe","safe",-125058214))], 0));
re_frame.query.alpha.legacy__GT_map = (function re_frame$query$alpha$legacy__GT_map(q){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("re-frame","q","re-frame/q",-1128715212),re_frame.query.alpha.id(q),new cljs.core.Keyword("re-frame","query-v","re-frame/query-v",972533792),q,new cljs.core.Keyword("re-frame","lifecycle","re-frame/lifecycle",-2078095936),re_frame.query.alpha.lifecycle(q)], null),new cljs.core.Keyword("re-frame","query-m","re-frame/query-m",2120055083).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(q))], 0));
});
re_frame.query.alpha.method = (function re_frame$query$alpha$method(q){
var G__16537 = re_frame.query.alpha.lifecycle(q);
var fexpr__16536 = cljs.core.deref(re_frame.register.alpha.lifecycle__GT_method);
return (fexpr__16536.cljs$core$IFn$_invoke$arity$1 ? fexpr__16536.cljs$core$IFn$_invoke$arity$1(G__16537) : fexpr__16536.call(null,G__16537));
});
re_frame.query.alpha.clear_all_methods_BANG_ = (function re_frame$query$alpha$clear_all_methods_BANG_(){
return cljs.core.reset_BANG_(re_frame.register.alpha.lifecycle__GT_method,cljs.core.PersistentArrayMap.EMPTY);
});
re_frame.query.alpha.cache = re_frame.subs.query__GT_reaction;
re_frame.query.alpha.default_dynv = cljs.core.PersistentVector.EMPTY;
re_frame.query.alpha.cache_key = (function re_frame$query$alpha$cache_key(q){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [q,re_frame.query.alpha.default_dynv], null);
});
re_frame.query.alpha.cached = (function re_frame$query$alpha$cached(q){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.query.alpha.cache),re_frame.query.alpha.cache_key(q));
if((temp__5825__auto__ == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16183__auto___16560 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cached?","cached?",86081880),false], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__16183__auto___16560);

return null;
} else {
return null;
}
} else {
var r = temp__5825__auto__;
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16183__auto___16562 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id(r)], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cached?","cached?",86081880),true,new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id(r)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__16183__auto___16562);

} else {
}

return r;
}
});
re_frame.query.alpha.cache_BANG_ = (function re_frame$query$alpha$cache_BANG_(q,r){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.query.alpha.cache,cljs.core.assoc,re_frame.query.alpha.cache_key(q),r);

return r;
});
re_frame.query.alpha.clear_BANG_ = (function re_frame$query$alpha$clear_BANG_(var_args){
var G__16552 = arguments.length;
switch (G__16552) {
case 0:
return re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.reset_BANG_(re_frame.query.alpha.cache,cljs.core.PersistentArrayMap.EMPTY);
}));

(re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (q){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.query.alpha.cache,cljs.core.dissoc,re_frame.query.alpha.cache_key(q));
}));

(re_frame.query.alpha.clear_BANG_.cljs$lang$maxFixedArity = 1);

re_frame.query.alpha.handle = (function re_frame$query$alpha$handle(q){
var temp__5825__auto__ = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sub","sub",-2093760025),re_frame.query.alpha.id(q));
if((temp__5825__auto__ == null)){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16183__auto___16569 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__16183__auto___16569);

} else {
}

return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no subscription handler registered for: ",re_frame.query.alpha.id(q),". Returning a nil subscription."], 0));
} else {
var handler = temp__5825__auto__;
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(re_frame.db.app_db,q) : handler.call(null,re_frame.db.app_db,q));
}
});
re_frame.query.alpha.query_QMARK_ = (function re_frame$query$alpha$query_QMARK_(q){
return (!(((function (){var and__5140__auto__ = re_frame.query.alpha.id(q);
if(cljs.core.truth_(and__5140__auto__)){
return re_frame.query.alpha.lifecycle(q);
} else {
return and__5140__auto__;
}
})() == null)));
});

//# sourceMappingURL=re_frame.query.alpha.js.map
