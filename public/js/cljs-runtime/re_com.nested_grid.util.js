goog.provide('re_com.nested_grid.util');
re_com.nested_grid.util.keypath__GT_grid_line_name = (function re_com$nested_grid$util$keypath__GT_grid_line_name(keypath){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("-",cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(keypath)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rc-b"], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["rc"], null)),keypath));
});
re_com.nested_grid.util.path__GT_grid_line_name = (function re_com$nested_grid$util$path__GT_grid_line_name(path){
return (""+"rc"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.hash(path)));
});
re_com.nested_grid.util.branch_QMARK_ = cljs.core.sequential_QMARK_;
re_com.nested_grid.util.children = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.rest);
re_com.nested_grid.util.get_header_spec = cljs.core.first;
re_com.nested_grid.util.header_size = (function re_com$nested_grid$util$header_size(var_args){
var G__18627 = arguments.length;
switch (G__18627) {
case 1:
return re_com.nested_grid.util.header_size.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.nested_grid.util.header_size.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_com.nested_grid.util.header_size.cljs$core$IFn$_invoke$arity$1 = (function (header){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(header,new cljs.core.Keyword(null,"size","size",1098693007));
}));

(re_com.nested_grid.util.header_size.cljs$core$IFn$_invoke$arity$2 = (function (header,default_size){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(header,new cljs.core.Keyword(null,"size","size",1098693007),default_size);
}));

(re_com.nested_grid.util.header_size.cljs$lang$maxFixedArity = 2);

re_com.nested_grid.util.remove_size = (function re_com$nested_grid$util$remove_size(m){
var G__18632 = m;
if(cljs.core.map_QMARK_(m)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18632,new cljs.core.Keyword(null,"size","size",1098693007));
} else {
return G__18632;
}
});
re_com.nested_grid.util.ancestry = (function re_com$nested_grid$util$ancestry(path){
var acc = cljs.core.PersistentVector.EMPTY;
var ancestor = path;
while(true){
if(cljs.core.empty_QMARK_(ancestor)){
return acc;
} else {
var G__18801 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,ancestor);
var G__18802 = cljs.core.pop(ancestor);
acc = G__18801;
ancestor = G__18802;
continue;
}
break;
}
});
re_com.nested_grid.util.intersection_QMARK_ = (function re_com$nested_grid$util$intersection_QMARK_(x1,size,window_start,window_end){
return (((x1 <= window_end)) && (((x1 + size) >= window_start)));
});
re_com.nested_grid.util.evict_BANG_ = (function re_com$nested_grid$util$evict_BANG_(cache,tree,keypath){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,cache,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__18633_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(tree,p1__18633_SHARP_);
})),re_com.nested_grid.util.ancestry(keypath)));
});
re_com.nested_grid.util.window = (function re_com$nested_grid$util$window(p__18642){
var map__18643 = p__18642;
var map__18643__$1 = cljs.core.__destructure_map(map__18643);
var default_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18643__$1,new cljs.core.Keyword(null,"default-size","default-size",-56245282),(20));
var lookup_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18643__$1,new cljs.core.Keyword(null,"lookup-fn","lookup-fn",-862560609));
var show_branch_cells_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18643__$1,new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992));
var window_start = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18643__$1,new cljs.core.Keyword(null,"window-start","window-start",-1535255967),(0));
var hide_root_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18643__$1,new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034));
var skip_tail_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18643__$1,new cljs.core.Keyword(null,"skip-tail?","skip-tail?",449940680),true);
var size_cache = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18643__$1,new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY));
var header_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18643__$1,new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968));
var window_end = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18643__$1,new cljs.core.Keyword(null,"window-end","window-end",-1966160494),Infinity);
var cache_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18643__$1,new cljs.core.Keyword(null,"cache-fn","cache-fn",5561939));
var sum_size = cljs.core.volatile_BANG_((0));
var depth = cljs.core.volatile_BANG_((0));
var paths = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var keypaths = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var sizes = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var sums = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var nodes_traversed = cljs.core.volatile_BANG_(cljs.core.PersistentVector.EMPTY);
var spans = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var cache_BANG_ = (function (){var or__5142__auto__ = cache_fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (function (p1__18637_SHARP_,p2__18638_SHARP_){
return cljs.core._vreset_BANG_(size_cache,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core._deref(size_cache),p1__18637_SHARP_,p2__18638_SHARP_));
});
}
})();
var lookup_BANG_ = (function (){var or__5142__auto__ = lookup_fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (function (p1__18639_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(size_cache),p1__18639_SHARP_);
});
}
})();
var cached_sum_size = (lookup_BANG_.cljs$core$IFn$_invoke$arity$1 ? lookup_BANG_.cljs$core$IFn$_invoke$arity$1(header_tree) : lookup_BANG_.call(null,header_tree));
var cached_depth = (lookup_BANG_.cljs$core$IFn$_invoke$arity$1 ? lookup_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"depth","depth",1768663640)) : lookup_BANG_.call(null,new cljs.core.Keyword(null,"depth","depth",1768663640)));
var walk = (function() { 
var re_com$nested_grid$util$window_$_walk__delegate = function (path,node,p__18646){
var map__18648 = p__18646;
var map__18648__$1 = cljs.core.__destructure_map(map__18648);
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18648__$1,new cljs.core.Keyword(null,"keypath","keypath",1965534711),cljs.core.PersistentVector.EMPTY);
var collect_anyway_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword(null,"collect-anyway?","collect-anyway?",-1840373270));
var is_leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18648__$1,new cljs.core.Keyword(null,"is-leaf?","is-leaf?",-1290583332),true);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var last_child_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword(null,"last-child?","last-child?",772928468));
var hide_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18648__$1,new cljs.core.Keyword(null,"hide?","hide?",-988635670));
if(cljs.core.truth_(goog.DEBUG)){
nodes_traversed.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nodes_traversed.cljs$core$IDeref$_deref$arity$1(null),node));
} else {
}

var sum = cljs.core.deref(sum_size);
var passed_tail_QMARK_ = (function (){var and__5140__auto__ = skip_tail_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cached_sum_size;
if(cljs.core.truth_(and__5140__auto____$1)){
return (sum > window_end);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(passed_tail_QMARK_)){
return null;
} else {
if(cljs.core.truth_((re_com.nested_grid.util.branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_com.nested_grid.util.branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : re_com.nested_grid.util.branch_QMARK_.call(null,node)))){
var csize = (lookup_BANG_.cljs$core$IFn$_invoke$arity$1 ? lookup_BANG_.cljs$core$IFn$_invoke$arity$1(node) : lookup_BANG_.call(null,node));
var skippable_QMARK_ = (function (){var and__5140__auto__ = csize;
if(cljs.core.truth_(and__5140__auto__)){
return (!(re_com.nested_grid.util.intersection_QMARK_(sum,csize,window_start,window_end)));
} else {
return and__5140__auto__;
}
})();
var children = re_com.nested_grid.util.children(node);
var children_QMARK_ = cljs.core.seq(children);
var cacheable_QMARK_ = ((cljs.core.not(csize)) && (children_QMARK_));
var show_after_QMARK_ = (function (){var or__5142__auto__ = show_branch_cells_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2((re_com.nested_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1 ? re_com.nested_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1(node) : re_com.nested_grid.util.get_header_spec.call(null,node)),new cljs.core.Keyword(null,"show?","show?",1543842127));
}
})();
var add_after_QMARK_ = ((cljs.core.not(hide_QMARK_)) && (children_QMARK_));
var after_child = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(node)], null);
var children__$1 = cljs.core.vec(children);
var all_children = (function (){var G__18652 = children__$1;
if(cljs.core.truth_((function (){var and__5140__auto__ = show_after_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return add_after_QMARK_;
} else {
return and__5140__auto__;
}
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18652,after_child);
} else {
return G__18652;
}
})();
if(cljs.core.truth_(skippable_QMARK_)){
sum_size.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(sum_size.cljs$core$IDeref$_deref$arity$1(null) + csize));

return csize;
} else {
var is_leaf_QMARK___$1 = cljs.core.not(cljs.core.seq(all_children));
var own_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,(re_com.nested_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1 ? re_com.nested_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1(node) : re_com.nested_grid.util.get_header_spec.call(null,node)));
var own_size = re_com$nested_grid$util$window_$_walk.cljs$core$IFn$_invoke$arity$variadic(path,(re_com.nested_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1 ? re_com.nested_grid.util.get_header_spec.cljs$core$IFn$_invoke$arity$1(node) : re_com.nested_grid.util.get_header_spec.call(null,node)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"collect-anyway?","collect-anyway?",-1840373270),true,new cljs.core.Keyword(null,"is-leaf?","is-leaf?",-1290583332),is_leaf_QMARK___$1,new cljs.core.Keyword(null,"branch-path?","branch-path?",1002922587),(!(is_leaf_QMARK___$1)),new cljs.core.Keyword(null,"keypath","keypath",1965534711),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(keypath,(0)),new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"last-child?","last-child?",772928468),last_child_QMARK_], null)], 0));
var descend_tx = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,subtree){
return re_com$nested_grid$util$window_$_walk.cljs$core$IFn$_invoke$arity$variadic(own_path,subtree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"keypath","keypath",1965534711),(function (){var G__18655 = keypath;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(after_child,subtree)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18655,(i + (1)));
} else {
return G__18655;
}
})(),new cljs.core.Keyword(null,"is-leaf?","is-leaf?",-1290583332),true,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(after_child,subtree)], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,(cljs.core.count(children__$1) - ((add_after_QMARK_)?(1):null))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-child?","last-child?",772928468),true], null):null)], 0))], 0));
}));
var child_sizes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(descend_tx,cljs.core.conj,all_children));
var total_size = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(function (){var or__5142__auto__ = own_size;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.zero_QMARK_,child_sizes));
spans.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$4(spans.cljs$core$IDeref$_deref$arity$1(null),own_path,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,(0)),cljs.core.count(child_sizes)));

if(re_com.nested_grid.util.intersection_QMARK_(sum,total_size,window_start,window_end)){
} else {
paths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(paths.cljs$core$IDeref$_deref$arity$1(null)));

sums.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(sums.cljs$core$IDeref$_deref$arity$1(null)));

sizes.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(sizes.cljs$core$IDeref$_deref$arity$1(null)));

keypaths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.pop(keypaths.cljs$core$IDeref$_deref$arity$1(null)));
}

if(cacheable_QMARK_){
(cache_BANG_.cljs$core$IFn$_invoke$arity$2 ? cache_BANG_.cljs$core$IFn$_invoke$arity$2(node,total_size) : cache_BANG_.call(null,node,total_size));
} else {
}

return total_size;
}
} else {
var leaf_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,node);
var show_above_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"show-above?","show-above?",1907272108));
var show_QMARK_ = (function (){var or__5142__auto__ = is_leaf_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return show_above_QMARK_;
}
})();
var leaf_size = ((cljs.core.not((function (){var or__5142__auto__ = is_leaf_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return show_above_QMARK_;
}
})()))?(0):re_com.nested_grid.util.header_size.cljs$core$IFn$_invoke$arity$2(node,default_size));
if(cljs.core.truth_((function (){var or__5142__auto__ = re_com.nested_grid.util.intersection_QMARK_(sum,leaf_size,window_start,window_end);
if(or__5142__auto__){
return or__5142__auto__;
} else {
return collect_anyway_QMARK_;
}
})())){
var path_meta_18857 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(is_leaf_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"leaf?","leaf?",445442965),true], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"branch?","branch?",-999323007),true], null)),(cljs.core.truth_(show_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show?","show?",1543842127),true], null):null),(cljs.core.truth_(branch_end_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),true], null):null),(cljs.core.truth_(show_above_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-above?","show-above?",1907272108),true], null):null),(cljs.core.truth_(last_child_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"last-child?","last-child?",772928468),true], null):null)], 0));
var new_path_18858 = (function (){var G__18658 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(re_com.nested_grid.util.remove_size,leaf_path);
if(cljs.core.truth_((function (){var or__5142__auto__ = is_leaf_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return show_above_QMARK_;
}
})())){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(G__18658,cljs.core.merge,path_meta_18857);
} else {
return G__18658;
}
})();
depth.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.max.cljs$core$IFn$_invoke$arity$variadic(depth.cljs$core$IDeref$_deref$arity$1(null),(function (){var or__5142__auto__ = cached_depth;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(new_path_18858)], 0)));

paths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(paths.cljs$core$IDeref$_deref$arity$1(null),new_path_18858));

sums.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sums.cljs$core$IDeref$_deref$arity$1(null),sum));

sizes.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sizes.cljs$core$IDeref$_deref$arity$1(null),leaf_size));

keypaths.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(keypaths.cljs$core$IDeref$_deref$arity$1(null),cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$3(keypath,cljs.core.merge,path_meta_18857)));
} else {
}

sum_size.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,(sum_size.cljs$core$IDeref$_deref$arity$1(null) + leaf_size));

return leaf_size;

}
}
};
var re_com$nested_grid$util$window_$_walk = function (path,node,var_args){
var p__18646 = null;
if (arguments.length > 2) {
var G__18861__i = 0, G__18861__a = new Array(arguments.length -  2);
while (G__18861__i < G__18861__a.length) {G__18861__a[G__18861__i] = arguments[G__18861__i + 2]; ++G__18861__i;}
  p__18646 = new cljs.core.IndexedSeq(G__18861__a,0,null);
} 
return re_com$nested_grid$util$window_$_walk__delegate.call(this,path,node,p__18646);};
re_com$nested_grid$util$window_$_walk.cljs$lang$maxFixedArity = 2;
re_com$nested_grid$util$window_$_walk.cljs$lang$applyTo = (function (arglist__18862){
var path = cljs.core.first(arglist__18862);
arglist__18862 = cljs.core.next(arglist__18862);
var node = cljs.core.first(arglist__18862);
var p__18646 = cljs.core.rest(arglist__18862);
return re_com$nested_grid$util$window_$_walk__delegate(path,node,p__18646);
});
re_com$nested_grid$util$window_$_walk.cljs$core$IFn$_invoke$arity$variadic = re_com$nested_grid$util$window_$_walk__delegate;
return re_com$nested_grid$util$window_$_walk;
})()
;
walk(cljs.core.PersistentVector.EMPTY,header_tree,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide?","hide?",-988635670),hide_root_QMARK_], null));

var G__18664_18869 = new cljs.core.Keyword(null,"depth","depth",1768663640);
var G__18665_18870 = cljs.core.deref(depth);
(cache_BANG_.cljs$core$IFn$_invoke$arity$2 ? cache_BANG_.cljs$core$IFn$_invoke$arity$2(G__18664_18869,G__18665_18870) : cache_BANG_.call(null,G__18664_18869,G__18665_18870));

return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"window-start","window-start",-1535255967),new cljs.core.Keyword(null,"sizes","sizes",-273528126),new cljs.core.Keyword(null,"spans","spans",-1512938203),new cljs.core.Keyword(null,"keypaths","keypaths",1637512847),new cljs.core.Keyword(null,"window-end","window-end",-1966160494),new cljs.core.Keyword(null,"sum-size","sum-size",1340005431),new cljs.core.Keyword(null,"depth","depth",1768663640),new cljs.core.Keyword(null,"header-paths","header-paths",1334163001),new cljs.core.Keyword(null,"positions","positions",-1380538434),new cljs.core.Keyword(null,"nodes-traversed","nodes-traversed",683030719)],[window_start,cljs.core.deref(sizes),cljs.core.deref(spans),cljs.core.deref(keypaths),window_end,(function (){var or__5142__auto__ = cached_sum_size;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.deref(sum_size);
}
})(),cljs.core.deref(depth),cljs.core.deref(paths),cljs.core.deref(sums),cljs.core.deref(nodes_traversed)]);
});
re_com.nested_grid.util.grid_tokens = (function re_com$nested_grid$util$grid_tokens(p__18671){
var map__18673 = p__18671;
var map__18673__$1 = cljs.core.__destructure_map(map__18673);
var header_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword(null,"header-paths","header-paths",1334163001));
var keypaths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword(null,"keypaths","keypaths",1637512847));
var sizes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword(null,"sizes","sizes",-273528126));
var positions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword(null,"positions","positions",-1380538434));
var sum_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18673__$1,new cljs.core.Keyword(null,"sum-size","sum-size",1340005431));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[start]"], null),(function (){var G__18690 = header_paths;
var vec__18696 = G__18690;
var seq__18697 = cljs.core.seq(vec__18696);
var first__18698 = cljs.core.first(seq__18697);
var seq__18697__$1 = cljs.core.next(seq__18697);
var path = first__18698;
var rest_paths = seq__18697__$1;
var G__18691 = keypaths;
var vec__18699 = G__18691;
var seq__18700 = cljs.core.seq(vec__18699);
var first__18701 = cljs.core.first(seq__18700);
var seq__18700__$1 = cljs.core.next(seq__18700);
var keypath = first__18701;
var rest_keypaths = seq__18700__$1;
var G__18692 = sizes;
var vec__18702 = G__18692;
var seq__18703 = cljs.core.seq(vec__18702);
var first__18704 = cljs.core.first(seq__18703);
var seq__18703__$1 = cljs.core.next(seq__18703);
var size = first__18704;
var rest_sizes = seq__18703__$1;
var G__18693 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(positions,sum_size);
var vec__18705 = G__18693;
var seq__18706 = cljs.core.seq(vec__18705);
var first__18707 = cljs.core.first(seq__18706);
var seq__18706__$1 = cljs.core.next(seq__18706);
var position = first__18707;
var vec__18708 = seq__18706__$1;
var next_position = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18708,(0),null);
var rest_positions = vec__18708;
var result = cljs.core.PersistentVector.EMPTY;
var G__18690__$1 = G__18690;
var G__18691__$1 = G__18691;
var G__18692__$1 = G__18692;
var G__18693__$1 = G__18693;
var result__$1 = result;
while(true){
var vec__18746 = G__18690__$1;
var seq__18747 = cljs.core.seq(vec__18746);
var first__18748 = cljs.core.first(seq__18747);
var seq__18747__$1 = cljs.core.next(seq__18747);
var path__$1 = first__18748;
var rest_paths__$1 = seq__18747__$1;
var vec__18749 = G__18691__$1;
var seq__18750 = cljs.core.seq(vec__18749);
var first__18751 = cljs.core.first(seq__18750);
var seq__18750__$1 = cljs.core.next(seq__18750);
var keypath__$1 = first__18751;
var rest_keypaths__$1 = seq__18750__$1;
var vec__18752 = G__18692__$1;
var seq__18753 = cljs.core.seq(vec__18752);
var first__18754 = cljs.core.first(seq__18753);
var seq__18753__$1 = cljs.core.next(seq__18753);
var size__$1 = first__18754;
var rest_sizes__$1 = seq__18753__$1;
var vec__18755 = G__18693__$1;
var seq__18756 = cljs.core.seq(vec__18755);
var first__18757 = cljs.core.first(seq__18756);
var seq__18756__$1 = cljs.core.next(seq__18756);
var position__$1 = first__18757;
var vec__18758 = seq__18756__$1;
var next_position__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18758,(0),null);
var rest_positions__$1 = vec__18758;
var result__$2 = result__$1;
var map__18761 = cljs.core.peek(path__$1);
var map__18761__$1 = cljs.core.__destructure_map(map__18761);
var show_above_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18761__$1,new cljs.core.Keyword(null,"show-above?","show-above?",1907272108),new cljs.core.Keyword(null,"leaf?","leaf?",445442965).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(path__$1)));
var spacer_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(next_position__$1,(position__$1 + size__$1));
var next_result = (function (){var G__18762 = result__$2;
var G__18762__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18762,keypath__$1)
;
var G__18762__$2 = (cljs.core.truth_(show_above_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18762__$1,(function (){var or__5142__auto__ = size__$1;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()):G__18762__$1);
if(spacer_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(G__18762__$2,"[spacer]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((next_position__$1 - size__$1) - position__$1)], 0));
} else {
return G__18762__$2;
}
})();
if(cljs.core.empty_QMARK_(rest_sizes__$1)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(next_result,"[end]");
} else {
var G__18873 = rest_paths__$1;
var G__18874 = rest_keypaths__$1;
var G__18875 = rest_sizes__$1;
var G__18876 = rest_positions__$1;
var G__18877 = next_result;
G__18690__$1 = G__18873;
G__18691__$1 = G__18874;
G__18692__$1 = G__18875;
G__18693__$1 = G__18876;
result__$1 = G__18877;
continue;
}
break;
}
})());
});
re_com.nested_grid.util.grid_template = (function re_com$nested_grid$util$grid_template(header_traversal){
return clojure.string.replace(clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18763_SHARP_){
if(typeof p1__18763_SHARP_ === 'string'){
return p1__18763_SHARP_;
} else {
if(cljs.core.vector_QMARK_(p1__18763_SHARP_)){
return (""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.nested_grid.util.keypath__GT_grid_line_name(p1__18763_SHARP_))+"]");
} else {
if(typeof p1__18763_SHARP_ === 'number'){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__18763_SHARP_)+"px");
} else {
return null;
}
}
}
}),re_com.nested_grid.util.grid_tokens(header_traversal))),"] ["," ");
});
re_com.nested_grid.util.grid_cross_template = (function re_com$nested_grid$util$grid_cross_template(var_args){
var G__18770 = arguments.length;
switch (G__18770) {
case 1:
return re_com.nested_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5901__auto__ = [];
var len__5876__auto___18879 = arguments.length;
var i__5877__auto___18880 = (0);
while(true){
if((i__5877__auto___18880 < len__5876__auto___18879)){
args_arr__5901__auto__.push((arguments[i__5877__auto___18880]));

var G__18881 = (i__5877__auto___18880 + (1));
i__5877__auto___18880 = G__18881;
continue;
} else {
}
break;
}

var argseq__5902__auto__ = ((((1) < args_arr__5901__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5901__auto__.slice((1)),(0),null)):null);
return re_com.nested_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5902__auto__);

}
});

(re_com.nested_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$variadic = (function (tokens,more_tokens){
return re_com.nested_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,tokens,more_tokens));
}));

/** @this {Function} */
(re_com.nested_grid.util.grid_cross_template.cljs$lang$applyTo = (function (seq18767){
var G__18768 = cljs.core.first(seq18767);
var seq18767__$1 = cljs.core.next(seq18767);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18768,seq18767__$1);
}));

(re_com.nested_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1 = (function (tokens){
var rf = (function (s,group){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((typeof cljs.core.first(group) === 'number')?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.util.px,group)):((typeof cljs.core.first(group) === 'string')?clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",group):null))));
});
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(rf,"",cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.number_QMARK_,cljs.core.string_QMARK_),tokens))));
}));

(re_com.nested_grid.util.grid_cross_template.cljs$lang$maxFixedArity = (1));

re_com.nested_grid.util.upgrade_header_tree_schema = (function re_com$nested_grid$util$upgrade_header_tree_schema(var_args){
var G__18772 = arguments.length;
switch (G__18772) {
case 1:
return re_com.nested_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.nested_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_com.nested_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return re_com.nested_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"root","root",-448657453)], null),tree);
}));

(re_com.nested_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$2 = (function (acc,tree){
while(true){
if((!(cljs.core.sequential_QMARK_(tree)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tree], null);
} else {
var vec__18773 = tree;
var seq__18774 = cljs.core.seq(vec__18773);
var first__18775 = cljs.core.first(seq__18774);
var seq__18774__$1 = cljs.core.next(seq__18774);
var l = first__18775;
var vec__18776 = seq__18774__$1;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18776,(0),null);
var remainder = vec__18776;
if(cljs.core.not(l)){
return acc;
} else {
if(cljs.core.vector_QMARK_(l)){
var G__18888 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,re_com.nested_grid.util.upgrade_header_tree_schema.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,l));
var G__18889 = cljs.core.vec(remainder);
acc = G__18888;
tree = G__18889;
continue;
} else {
if((!(cljs.core.vector_QMARK_(r)))){
var G__18891 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l], null));
var G__18892 = cljs.core.vec(remainder);
acc = G__18891;
tree = G__18892;
continue;
} else {
var children = cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,remainder);
var new_remainder = cljs.core.vec(cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(children),remainder));
var G__18893 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [l], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.nested_grid.util.upgrade_header_tree_schema,cljs.core.PersistentVector.EMPTY),children)));
var G__18894 = new_remainder;
acc = G__18893;
tree = G__18894;
continue;

}
}
}
}
break;
}
}));

(re_com.nested_grid.util.upgrade_header_tree_schema.cljs$lang$maxFixedArity = 2);

re_com.nested_grid.util.make_tree = (function re_com$nested_grid$util$make_tree(tx){
var make_tree_STAR_ = (function re_com$nested_grid$util$make_tree_$_make_tree_STAR_(tx__$1){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18779){
var vec__18780 = p__18779;
var vec__18783 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18780,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18783,(0),null);
var paths = vec__18780;
var remainder = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.rest,paths));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),re_com$nested_grid$util$make_tree_$_make_tree_STAR_(remainder));
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.first,tx__$1));
});
return cljs.core.first(make_tree_STAR_(tx));
});
re_com.nested_grid.util.visible_to_sort_QMARK_ = (function re_com$nested_grid$util$visible_to_sort_QMARK_(p__18786){
var map__18787 = p__18786;
var map__18787__$1 = cljs.core.__destructure_map(map__18787);
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18787__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18787__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18787__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var and__5140__auto__ = cljs.core.not(branch_end_QMARK_);
if(and__5140__auto__){
var or__5142__auto__ = show_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return leaf_QMARK_;
}
} else {
return and__5140__auto__;
}
});
re_com.nested_grid.util.sort_header_tree = (function re_com$nested_grid$util$sort_header_tree(p__18789){
var map__18790 = p__18789;
var map__18790__$1 = cljs.core.__destructure_map(map__18790);
var sort_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18790__$1,new cljs.core.Keyword(null,"sort-fn","sort-fn",977815011));
var header_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18790__$1,new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968));
var dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18790__$1,new cljs.core.Keyword(null,"dimension","dimension",543254198));
var dim_k = (function (){var G__18792 = dimension;
var G__18792__$1 = (((G__18792 instanceof cljs.core.Keyword))?G__18792.fqn:null);
switch (G__18792__$1) {
case "row":
return new cljs.core.Keyword(null,"row-path","row-path",-709648669);

break;
case "column":
return new cljs.core.Keyword(null,"column-path","column-path",-733367618);

break;
default:
return new cljs.core.Keyword(null,"header-path","header-path",-1049050672);

}
})();
var map__18791 = re_com.nested_grid.util.window(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968),header_tree], null));
var map__18791__$1 = cljs.core.__destructure_map(map__18791);
var header_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18791__$1,new cljs.core.Keyword(null,"header-paths","header-paths",1334163001));
var path__GT_meta = cljs.core.zipmap(header_paths,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.meta,header_paths));
return re_com.nested_grid.util.make_tree(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(re_com.nested_grid.util.visible_to_sort_QMARK_,path__GT_meta),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__18788_SHARP_){
var G__18793 = cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"path","path",-188191168),p1__18788_SHARP_,dim_k,p1__18788_SHARP_]);
return (sort_fn.cljs$core$IFn$_invoke$arity$1 ? sort_fn.cljs$core$IFn$_invoke$arity$1(G__18793) : sort_fn.call(null,G__18793));
}),header_paths)));
});

//# sourceMappingURL=re_com.nested_grid.util.js.map
