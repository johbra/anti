goog.provide('re_frame.subs.alpha');
re_frame.register.alpha.reg.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),(function (_,k,f){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.register.alpha.lifecycle__GT_method,cljs.core.assoc,k,(function (q){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16637 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16638 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.query.alpha.id(q),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","create","sub/create",-1301317560),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"query","query",-1288509510),q], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16638);

try{try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(q) : f.call(null,q));
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16181__auto___16740 = re_frame.interop.now();
var duration__16182__auto___16741 = (end__16181__auto___16740 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16182__auto___16741,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__16181__auto___16740);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16637);
}} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(q) : f.call(null,q));
}
}));
}));
re_frame.subs.alpha.sub = (function re_frame$subs$alpha$sub(var_args){
var G__16657 = arguments.length;
switch (G__16657) {
case 1:
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$1 = (function (q){
if((q instanceof cljs.core.Keyword)){
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$2(q,cljs.core.PersistentArrayMap.EMPTY);
} else {
var md = re_frame.query.alpha.method(q);
if(cljs.core.map_QMARK_(q)){
return (md.cljs$core$IFn$_invoke$arity$1 ? md.cljs$core$IFn$_invoke$arity$1(q) : md.call(null,q));
} else {
if(cljs.core.vector_QMARK_(q)){
var G__16666 = re_frame.query.alpha.legacy__GT_map(q);
return (md.cljs$core$IFn$_invoke$arity$1 ? md.cljs$core$IFn$_invoke$arity$1(G__16666) : md.call(null,G__16666));
} else {
return null;
}
}
}
}));

(re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$2 = (function (id,q){
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(q,new cljs.core.Keyword("re-frame","q","re-frame/q",-1128715212),id));
}));

(re_frame.subs.alpha.sub.cljs$lang$maxFixedArity = 2);

re_frame.register.alpha.reg.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sub","sub",-2093760025),(function() { 
var G__16749__delegate = function (kind,id,args){
var vec__16670 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(re_frame.subs.sugar,id,re_frame.subs.alpha.sub,re_frame.query.alpha.query_QMARK_,args);
var inputs_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16670,(0),null);
var computation_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16670,(1),null);
return re_frame.registrar.register_handler(kind,id,(function re_frame$subs$alpha$subs_handler_fn(_,q){
var q__$1 = (function (){var G__16676 = q;
if(cljs.core.vector_QMARK_(q)){
return re_frame.query.alpha.legacy__GT_map(G__16676);
} else {
return G__16676;
}
})();
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(q__$1,null) : inputs_fn.call(null,q__$1,null));
var rid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var r = re_frame.interop.make_reaction((function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16677 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16678 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.query.alpha.id(q__$1),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),q__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(rid)], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16678);

try{try{var subscription = (function (){var G__16680 = re_frame.subs.deref_input_signals(subscriptions,id);
var G__16681 = q__$1;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__16680,G__16681) : computation_fn.call(null,G__16680,G__16681));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16183__auto___16755 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__16183__auto___16755);

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16181__auto___16759 = re_frame.interop.now();
var duration__16182__auto___16760 = (end__16181__auto___16759 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16182__auto___16760,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__16181__auto___16759);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16677);
}} else {
var subscription = (function (){var G__16683 = re_frame.subs.deref_input_signals(subscriptions,id);
var G__16684 = q__$1;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__16683,G__16684) : computation_fn.call(null,G__16683,G__16684));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16183__auto___16761 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__16183__auto___16761);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_(rid,re_frame.interop.reagent_id(r));

return r;
}));
};
var G__16749 = function (kind,id,var_args){
var args = null;
if (arguments.length > 2) {
var G__16765__i = 0, G__16765__a = new Array(arguments.length -  2);
while (G__16765__i < G__16765__a.length) {G__16765__a[G__16765__i] = arguments[G__16765__i + 2]; ++G__16765__i;}
  args = new cljs.core.IndexedSeq(G__16765__a,0,null);
} 
return G__16749__delegate.call(this,kind,id,args);};
G__16749.cljs$lang$maxFixedArity = 2;
G__16749.cljs$lang$applyTo = (function (arglist__16766){
var kind = cljs.core.first(arglist__16766);
arglist__16766 = cljs.core.next(arglist__16766);
var id = cljs.core.first(arglist__16766);
var args = cljs.core.rest(arglist__16766);
return G__16749__delegate(kind,id,args);
});
G__16749.cljs$core$IFn$_invoke$arity$variadic = G__16749__delegate;
return G__16749;
})()
);
re_frame.subs.alpha.compat = (function re_frame$subs$alpha$compat(q){
if(cljs.core.map_QMARK_(q)){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$6((function (){var or__5142__auto__ = new cljs.core.Keyword("re-frame","query-v","re-frame/query-v",972533792).cljs$core$IFn$_invoke$arity$1(q);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.query.alpha.id(q)], null);
}
})(),cljs.core.assoc,new cljs.core.Keyword("re-frame","lifecycle","re-frame/lifecycle",-2078095936),re_frame.query.alpha.lifecycle(q),new cljs.core.Keyword("re-frame","query-m","re-frame/query-m",2120055083),q);
} else {
return q;
}
});
re_frame.register.alpha.reg.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"legacy-sub","legacy-sub",207431632),(function() { 
var G__16770__delegate = function (_,id,args){
var vec__16686 = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(re_frame.subs.sugar,id,re_frame.subs.alpha.sub,re_frame.query.alpha.query_QMARK_,args);
var inputs_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16686,(0),null);
var computation_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16686,(1),null);
return re_frame.registrar.register_handler(new cljs.core.Keyword(null,"sub","sub",-2093760025),id,(function re_frame$subs$alpha$subs_handler_fn(___$1,q){
var q__$1 = re_frame.subs.alpha.compat(q);
var subscriptions = (inputs_fn.cljs$core$IFn$_invoke$arity$2 ? inputs_fn.cljs$core$IFn$_invoke$arity$2(q__$1,null) : inputs_fn.call(null,q__$1,null));
var rid = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var r = re_frame.interop.make_reaction((function (){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__16689 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__16690 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),re_frame.query.alpha.id(q__$1),new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("sub","run","sub/run",-1821315581),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"query","query",-1288509510),q__$1,new cljs.core.Keyword(null,"reaction","reaction",490869788),cljs.core.deref(rid)], null)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__16690);

try{try{var subscription = (function (){var G__16697 = re_frame.subs.deref_input_signals(subscriptions,id);
var G__16698 = q__$1;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__16697,G__16698) : computation_fn.call(null,G__16697,G__16698));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16183__auto___16774 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__16183__auto___16774);

} else {
}

return subscription;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__16181__auto___16776 = re_frame.interop.now();
var duration__16182__auto___16777 = (end__16181__auto___16776 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__16182__auto___16777,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__16181__auto___16776);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__16689);
}} else {
var subscription = (function (){var G__16699 = re_frame.subs.deref_input_signals(subscriptions,id);
var G__16700 = q__$1;
return (computation_fn.cljs$core$IFn$_invoke$arity$2 ? computation_fn.cljs$core$IFn$_invoke$arity$2(G__16699,G__16700) : computation_fn.call(null,G__16699,G__16700));
})();
if(re_frame.trace.is_trace_enabled_QMARK_()){
var new_trace__16183__auto___16785 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.update.cljs$core$IFn$_invoke$arity$4(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),subscription], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977))], 0));
(re_frame.trace._STAR_current_trace_STAR_ = new_trace__16183__auto___16785);

} else {
}

return subscription;
}
}));
cljs.core.reset_BANG_(rid,re_frame.interop.reagent_id(r));

return r;
}));
};
var G__16770 = function (_,id,var_args){
var args = null;
if (arguments.length > 2) {
var G__16786__i = 0, G__16786__a = new Array(arguments.length -  2);
while (G__16786__i < G__16786__a.length) {G__16786__a[G__16786__i] = arguments[G__16786__i + 2]; ++G__16786__i;}
  args = new cljs.core.IndexedSeq(G__16786__a,0,null);
} 
return G__16770__delegate.call(this,_,id,args);};
G__16770.cljs$lang$maxFixedArity = 2;
G__16770.cljs$lang$applyTo = (function (arglist__16790){
var _ = cljs.core.first(arglist__16790);
arglist__16790 = cljs.core.next(arglist__16790);
var id = cljs.core.first(arglist__16790);
var args = cljs.core.rest(arglist__16790);
return G__16770__delegate(_,id,args);
});
G__16770.cljs$core$IFn$_invoke$arity$variadic = G__16770__delegate;
return G__16770;
})()
);
re_frame.subs.alpha.sub_reactive = (function re_frame$subs$alpha$sub_reactive(q){
re_frame.subs.warn_when_not_reactive();

var or__5142__auto__ = re_frame.query.alpha.cached(q);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var r = re_frame.query.alpha.handle(q);
re_frame.interop.add_on_dispose_BANG_(r,(function (){
return re_frame.query.alpha.clear_BANG_.cljs$core$IFn$_invoke$arity$1(q);
}));

return re_frame.query.alpha.cache_BANG_(q,r);
}
});
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"reactive","reactive",717758366),re_frame.subs.alpha.sub_reactive);
re_frame.subs.alpha.sync_input_signals_and_compute_BANG_ = reagent.ratom.run;
re_frame.subs.alpha.cleanup_input_signals_BANG_ = (function re_frame$subs$alpha$cleanup_input_signals_BANG_(r){
var seq__16702 = cljs.core.seq(r.watching);
var chunk__16703 = null;
var count__16704 = (0);
var i__16705 = (0);
while(true){
if((i__16705 < count__16704)){
var watch = chunk__16703.cljs$core$IIndexed$_nth$arity$2(null,i__16705);
if(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(watch.watches,r))){
} else {
if((((!((watch == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === watch.reagent$ratom$IDisposable$))))?true:(((!watch.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(reagent.ratom.IDisposable,watch):false)):cljs.core.native_satisfies_QMARK_(reagent.ratom.IDisposable,watch))){
re_frame.interop.dispose_BANG_(watch);
} else {
}
}


var G__16794 = seq__16702;
var G__16795 = chunk__16703;
var G__16796 = count__16704;
var G__16797 = (i__16705 + (1));
seq__16702 = G__16794;
chunk__16703 = G__16795;
count__16704 = G__16796;
i__16705 = G__16797;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16702);
if(temp__5823__auto__){
var seq__16702__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16702__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16702__$1);
var G__16799 = cljs.core.chunk_rest(seq__16702__$1);
var G__16800 = c__5673__auto__;
var G__16801 = cljs.core.count(c__5673__auto__);
var G__16802 = (0);
seq__16702 = G__16799;
chunk__16703 = G__16800;
count__16704 = G__16801;
i__16705 = G__16802;
continue;
} else {
var watch = cljs.core.first(seq__16702__$1);
if(cljs.core.seq(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(watch.watches,r))){
} else {
if((((!((watch == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === watch.reagent$ratom$IDisposable$))))?true:(((!watch.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(reagent.ratom.IDisposable,watch):false)):cljs.core.native_satisfies_QMARK_(reagent.ratom.IDisposable,watch))){
re_frame.interop.dispose_BANG_(watch);
} else {
}
}


var G__16806 = cljs.core.next(seq__16702__$1);
var G__16807 = null;
var G__16808 = (0);
var G__16809 = (0);
seq__16702 = G__16806;
chunk__16703 = G__16807;
count__16704 = G__16808;
i__16705 = G__16809;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.subs.alpha.sub_no_cache = (function re_frame$subs$alpha$sub_no_cache(q){
var G__16723 = re_frame.query.alpha.handle(q);
(re_frame.subs.alpha.sync_input_signals_and_compute_BANG_.cljs$core$IFn$_invoke$arity$1 ? re_frame.subs.alpha.sync_input_signals_and_compute_BANG_.cljs$core$IFn$_invoke$arity$1(G__16723) : re_frame.subs.alpha.sync_input_signals_and_compute_BANG_.call(null,G__16723));

re_frame.subs.alpha.cleanup_input_signals_BANG_(G__16723);

return G__16723;
});
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"no-cache","no-cache",1588056370),re_frame.subs.alpha.sub_no_cache);
re_frame.subs.alpha.sub_safe = (function re_frame$subs$alpha$sub_safe(q){
if(re_frame.interop.reactive_QMARK_()){
return re_frame.subs.alpha.sub_reactive(q);
} else {
var or__5142__auto__ = re_frame.query.alpha.cached(q);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = re_frame.query.alpha.cached(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(q,new cljs.core.Keyword("re-frame","lifecycle","re-frame/lifecycle",-2078095936),new cljs.core.Keyword(null,"reactive","reactive",717758366)));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return re_frame.subs.alpha.sub_no_cache(q);
}
}
}
});
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"safe","safe",-125058214),re_frame.subs.alpha.sub_safe);
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"default","default",-1987822328),re_frame.subs.alpha.sub_safe);
re_frame.subs.alpha.sub_forever = (function re_frame$subs$alpha$sub_forever(q){
var or__5142__auto__ = re_frame.query.alpha.cached(q);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return re_frame.query.alpha.cache_BANG_(q,(function (){var G__16732 = re_frame.query.alpha.handle(q);
(re_frame.subs.alpha.sync_input_signals_and_compute_BANG_.cljs$core$IFn$_invoke$arity$1 ? re_frame.subs.alpha.sync_input_signals_and_compute_BANG_.cljs$core$IFn$_invoke$arity$1(G__16732) : re_frame.subs.alpha.sync_input_signals_and_compute_BANG_.call(null,G__16732));

return G__16732;
})());
}
});
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"forever","forever",2103455015),re_frame.subs.alpha.sub_forever);
re_frame.subs.alpha.nil_ref = re_frame.interop.ratom(null);
re_frame.subs.alpha.sub_flow = (function re_frame$subs$alpha$sub_flow(q){
var or__5142__auto__ = (function (){var G__16736 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = cljs.core.second(new cljs.core.Keyword("re-frame","query-v","re-frame/query-v",972533792).cljs$core$IFn$_invoke$arity$1(q));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return q;
}
})());
var G__16736__$1 = (((G__16736 == null))?null:(function (p1__16735_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame.flow.alpha.flows),p1__16735_SHARP_);
})(G__16736));
var G__16736__$2 = (((G__16736__$1 == null))?null:cljs.core.meta(G__16736__$1));
if((G__16736__$2 == null)){
return null;
} else {
return new cljs.core.Keyword("re-frame.flow.alpha","ref","re-frame.flow.alpha/ref",854314016).cljs$core$IFn$_invoke$arity$1(G__16736__$2);
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return re_frame.subs.alpha.nil_ref;
}
});
re_frame.register.alpha.reg.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"sub-lifecycle","sub-lifecycle",-1044743020),new cljs.core.Keyword(null,"flow","flow",590489032),re_frame.subs.alpha.sub_flow);

//# sourceMappingURL=re_frame.subs.alpha.js.map
