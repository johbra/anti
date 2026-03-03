goog.provide('re_frame.utils');
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 *   The key thing is that 'm' remains identical? to itself if the path was never present
 */
re_frame.utils.dissoc_in = (function re_frame$utils$dissoc_in(m,p__16201){
var vec__16203 = p__16201;
var seq__16204 = cljs.core.seq(vec__16203);
var first__16205 = cljs.core.first(seq__16204);
var seq__16204__$1 = cljs.core.next(seq__16204);
var k = first__16205;
var ks = seq__16204__$1;
var keys = vec__16203;
if(ks){
var temp__5821__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.truth_(temp__5821__auto__)){
var nextmap = temp__5821__auto__;
var newmap = (re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? re_frame.utils.dissoc_in.cljs$core$IFn$_invoke$arity$2(nextmap,ks) : re_frame.utils.dissoc_in.call(null,nextmap,ks));
if(cljs.core.seq(newmap)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,newmap);
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
}
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_(v)){
return cljs.core.first(v);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: expected a vector, but got:",v], 0));
}
});
/**
 * Like apply, but f takes keyword arguments and the last argument is
 *   not a seq but a map with the arguments for f
 */
re_frame.utils.apply_kw = (function re_frame$utils$apply_kw(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16297 = arguments.length;
var i__5877__auto___16298 = (0);
while(true){
if((i__5877__auto___16298 < len__5876__auto___16297)){
args__5882__auto__.push((arguments[i__5877__auto___16298]));

var G__16299 = (i__5877__auto___16298 + (1));
i__5877__auto___16298 = G__16299;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
if(cljs.core.map_QMARK_(cljs.core.last(args))){
} else {
throw (new Error("Assert failed: (map? (last args))"));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,cljs.core.butlast(args),cljs.core.last(args)));
}));

(re_frame.utils.apply_kw.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.utils.apply_kw.cljs$lang$applyTo = (function (seq16211){
var G__16212 = cljs.core.first(seq16211);
var seq16211__$1 = cljs.core.next(seq16211);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16212,seq16211__$1);
}));

re_frame.utils.map_vals = (function re_frame$utils$map_vals(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__16237){
var vec__16239 = p__16237;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16239,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16239,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v))], null);
})),m);
});
re_frame.utils.find_cycle = (function re_frame$utils$find_cycle(graph,visited,node){
var stack = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null);
var path = cljs.core.PersistentVector.EMPTY;
while(true){
var current = cljs.core.peek(stack);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([current]),path))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (stack,path,current){
return (function (p1__16244_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__16244_SHARP_,current);
});})(stack,path,current))
,cljs.core.reverse(path)),current);
} else {
var temp__5821__auto__ = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(graph,current));
if(temp__5821__auto__){
var neighbors = temp__5821__auto__;
var G__16300 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(stack,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.set(neighbors),visited));
var G__16301 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,current);
stack = G__16300;
path = G__16301;
continue;
} else {
var G__16302 = cljs.core.pop(stack);
var G__16303 = path;
stack = G__16302;
path = G__16303;
continue;
}
}
break;
}
});
re_frame.utils.topsort_kahn = (function re_frame$utils$topsort_kahn(graph){
var in_degree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__16255){
var vec__16258 = p__16255;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16258,(0),null);
var neighbors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16258,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,neighbor){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(a,neighbor,cljs.core.inc);
}),acc,neighbors);
}),cljs.core.PersistentArrayMap.EMPTY,graph);
var ks = cljs.core.keys(graph);
var q = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (in_degree,ks){
return (function (p1__16250_SHARP_){
return (cljs.core.get.cljs$core$IFn$_invoke$arity$3(in_degree,p1__16250_SHARP_,(0)) === (0));
});})(in_degree,ks))
,ks);
var sorted = re_frame.interop.empty_queue;
var in_degree__$1 = in_degree;
while(true){
if(cljs.core.seq(q)){
var current = cljs.core.first(q);
var neighbors = cljs.core.get.cljs$core$IFn$_invoke$arity$3(graph,current,cljs.core.PersistentVector.EMPTY);
var updated_in_degree = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (q,sorted,in_degree__$1,current,neighbors,in_degree,ks){
return (function (acc,neighbor){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(acc,neighbor,cljs.core.dec);
});})(q,sorted,in_degree__$1,current,neighbors,in_degree,ks))
,in_degree__$1,neighbors);
var new_q = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.rest(q),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (q,sorted,in_degree__$1,current,neighbors,updated_in_degree,in_degree,ks){
return (function (p1__16251_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.get.cljs$core$IFn$_invoke$arity$2(updated_in_degree,p1__16251_SHARP_));
});})(q,sorted,in_degree__$1,current,neighbors,updated_in_degree,in_degree,ks))
,neighbors));
var G__16304 = new_q;
var G__16305 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sorted,current);
var G__16306 = updated_in_degree;
q = G__16304;
sorted = G__16305;
in_degree__$1 = G__16306;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(sorted),cljs.core.count(ks))){
return sorted;
} else {
var unvisited = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(sorted),ks);
var cycle = cljs.core.some(((function (q,sorted,in_degree__$1,unvisited,in_degree,ks){
return (function (p1__16252_SHARP_){
return re_frame.utils.find_cycle(graph,cljs.core.set(sorted),p1__16252_SHARP_);
});})(q,sorted,in_degree__$1,unvisited,in_degree,ks))
,unvisited);
throw (new Error((""+"Graph has a cycle: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cycle))));

}
}
break;
}
});
re_frame.utils.remove_orphans = (function re_frame$utils$remove_orphans(graph){
return re_frame.utils.map_vals(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.filterv,cljs.core.set(cljs.core.keys(graph))),graph);
});
re_frame.utils.safe_update_in = (function re_frame$utils$safe_update_in(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16307 = arguments.length;
var i__5877__auto___16308 = (0);
while(true){
if((i__5877__auto___16308 < len__5876__auto___16307)){
args__5882__auto__.push((arguments[i__5877__auto___16308]));

var G__16309 = (i__5877__auto___16308 + (1));
i__5877__auto___16308 = G__16309;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return re_frame.utils.safe_update_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(re_frame.utils.safe_update_in.cljs$core$IFn$_invoke$arity$variadic = (function (m,path,f,args){
if(cljs.core.empty_QMARK_(path)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,m,args);
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in,m,path,f,args);
}
}));

(re_frame.utils.safe_update_in.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(re_frame.utils.safe_update_in.cljs$lang$applyTo = (function (seq16270){
var G__16271 = cljs.core.first(seq16270);
var seq16270__$1 = cljs.core.next(seq16270);
var G__16272 = cljs.core.first(seq16270__$1);
var seq16270__$2 = cljs.core.next(seq16270__$1);
var G__16273 = cljs.core.first(seq16270__$2);
var seq16270__$3 = cljs.core.next(seq16270__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16271,G__16272,G__16273,seq16270__$3);
}));

/**
 * Dissoces the map entry at the path, then recurs through the ancestors,
 *   dissocing each ancestor until one is found with a descendent outside the path.
 * 
 *   ```
 *   (deep-dissoc {:a {:b {:c {:d 1}}}}
 *             [:a :b :c :d])
 *   ```
 * 
 *   This yields an empty map, since each node has a sole descendant.
 * 
 *   ```
 *   (deep-dissoc {:a {:x 2 :b {:c {:d 1}}}}
 *             [:a :b :c :d])
 *   ```
 * 
 *   This yields `{:a {:x 2}}`, since `:a` has a descendent `:x` outside the path.
 *   
 */
re_frame.utils.deep_dissoc = (function re_frame$utils$deep_dissoc(m,path){
while(true){
if(cljs.core.empty_QMARK_(path)){
return m;
} else {
var new_data = re_frame.utils.safe_update_in.cljs$core$IFn$_invoke$arity$variadic(m,cljs.core.pop(path),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.peek(path)], 0));
if((!(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new_data,cljs.core.pop(path)))))){
return new_data;
} else {
var G__16311 = new_data;
var G__16312 = cljs.core.pop(path);
m = G__16311;
path = G__16312;
continue;
}
}
break;
}
});
/**
 * Based on clojure.core/memoize,
 *   except it can only remember a single value.
 */
re_frame.utils.memoize_one = (function re_frame$utils$memoize_one(f){
var mem = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
return (function() { 
var G__16315__delegate = function (args){
var temp__5821__auto__ = cljs.core.find(cljs.core.deref(mem),args);
if(cljs.core.truth_(temp__5821__auto__)){
var e = temp__5821__auto__;
return cljs.core.val(e);
} else {
var ret = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
cljs.core.reset_BANG_(mem,cljs.core.PersistentArrayMap.createAsIfByAssoc([args,ret]));

return ret;
}
};
var G__16315 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16316__i = 0, G__16316__a = new Array(arguments.length -  0);
while (G__16316__i < G__16316__a.length) {G__16316__a[G__16316__i] = arguments[G__16316__i + 0]; ++G__16316__i;}
  args = new cljs.core.IndexedSeq(G__16316__a,0,null);
} 
return G__16315__delegate.call(this,args);};
G__16315.cljs$lang$maxFixedArity = 0;
G__16315.cljs$lang$applyTo = (function (arglist__16317){
var args = cljs.core.seq(arglist__16317);
return G__16315__delegate(args);
});
G__16315.cljs$core$IFn$_invoke$arity$variadic = G__16315__delegate;
return G__16315;
})()
;
});

//# sourceMappingURL=re_frame.utils.js.map
