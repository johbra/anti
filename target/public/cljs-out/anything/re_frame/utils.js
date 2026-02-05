// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('re_frame.loggers');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to itself if the path was never present
 */
re_frame.utils.dissoc_in = (function re_frame$utils$dissoc_in(m,p__17666){
var vec__17667 = p__17666;
var seq__17668 = cljs.core.seq.call(null,vec__17667);
var first__17669 = cljs.core.first.call(null,seq__17668);
var seq__17668__$1 = cljs.core.next.call(null,seq__17668);
var k = first__17669;
var ks = seq__17668__$1;
var keys = vec__17667;
if(ks){
var temp__5823__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5823__auto__)){
var nextmap = temp__5823__auto__;
var newmap = re_frame.utils.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: expected a vector, but got:",v);
}
});
/**
 * Like apply, but f takes keyword arguments and the last argument is
 *   not a seq but a map with the arguments for f
 */
re_frame.utils.apply_kw = (function re_frame$utils$apply_kw(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17672 = arguments.length;
var i__5770__auto___17673 = (0);
while(true){
if((i__5770__auto___17673 < len__5769__auto___17672)){
args__5775__auto__.push((arguments[i__5770__auto___17673]));

var G__17674 = (i__5770__auto___17673 + (1));
i__5770__auto___17673 = G__17674;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.map_QMARK_.call(null,cljs.core.last.call(null,args))){
} else {
throw (new Error("Assert failed: (map? (last args))"));
}

return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
}));

(re_frame.utils.apply_kw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.utils.apply_kw.cljs$lang$applyTo = (function (seq17670){
var G__17671 = cljs.core.first.call(null,seq17670);
var seq17670__$1 = cljs.core.next.call(null,seq17670);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17671,seq17670__$1);
}));


//# sourceMappingURL=utils.js.map
