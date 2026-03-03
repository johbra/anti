goog.provide('re_com.nested_grid.theme');
re_com.nested_grid.theme.border_light = "thin solid #ccc";
re_com.nested_grid.theme.border_dark = "thin solid #aaa";
re_com.nested_grid.theme.style = (function re_com$nested_grid$theme$style(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18739 = arguments.length;
var i__5877__auto___18740 = (0);
while(true){
if((i__5877__auto___18740 < len__5876__auto___18739)){
args__5882__auto__.push((arguments[i__5877__auto___18740]));

var G__18741 = (i__5877__auto___18740 + (1));
i__5877__auto___18740 = G__18741;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return re_com.nested_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(re_com.nested_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic = (function (props,ms){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$5(cljs.core.update,props,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,ms);
}));

(re_com.nested_grid.theme.style.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.nested_grid.theme.style.cljs$lang$applyTo = (function (seq18659){
var G__18660 = cljs.core.first(seq18659);
var seq18659__$1 = cljs.core.next(seq18659);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18660,seq18659__$1);
}));

re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.nested-grid","wrapper","re-com.nested-grid/wrapper",-1866510015),(function (p__18666){
var map__18667 = p__18666;
var map__18667__$1 = cljs.core.__destructure_map(map__18667);
var props = map__18667__$1;
var sticky_child_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18667__$1,new cljs.core.Keyword(null,"sticky-child?","sticky-child?",932069231));
return re_com.nested_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),(cljs.core.truth_(sticky_child_QMARK_)?null:new cljs.core.Keyword(null,"auto","auto",-566279492)),new cljs.core.Keyword(null,"flex","flex",-1425124628),"0 0 auto",new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid","grid",402978600)], null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.nested-grid","cell-grid","re-com.nested-grid/cell-grid",-1747762926),(function (props){
return re_com.nested_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(2),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(2)], null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.nested-grid","column-header-grid","re-com.nested-grid/column-header-grid",926868360),(function (p__18713){
var map__18714 = p__18713;
var map__18714__$1 = cljs.core.__destructure_map(map__18714);
var props = map__18714__$1;
var sticky_top = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18714__$1,new cljs.core.Keyword(null,"sticky-top","sticky-top",-851837397),(0));
return re_com.nested_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"top","top",-1856271961),sticky_top], null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.nested-grid","row-header-grid","re-com.nested-grid/row-header-grid",-826916806),(function (p__18715){
var map__18716 = p__18715;
var map__18716__$1 = cljs.core.__destructure_map(map__18716);
var props = map__18716__$1;
var sticky_left = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18716__$1,new cljs.core.Keyword(null,"sticky-left","sticky-left",-1528709698),(0));
return re_com.nested_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"left","left",-399115937),sticky_left], null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.nested-grid","corner-header-grid","re-com.nested-grid/corner-header-grid",-1096937690),(function (p__18717){
var map__18718 = p__18717;
var map__18718__$1 = cljs.core.__destructure_map(map__18718);
var props = map__18718__$1;
var sticky_left = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18718__$1,new cljs.core.Keyword(null,"sticky-left","sticky-left",-1528709698),(0));
var sticky_top = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18718__$1,new cljs.core.Keyword(null,"sticky-top","sticky-top",-851837397),(0));
return re_com.nested_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(1),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(1),new cljs.core.Keyword(null,"left","left",-399115937),sticky_left,new cljs.core.Keyword(null,"top","top",-1856271961),sticky_top], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.nested-grid","corner-header","re-com.nested-grid/corner-header",-1624179948),(function (p__18735){
var map__18736 = p__18735;
var map__18736__$1 = cljs.core.__destructure_map(map__18736);
var props = map__18736__$1;
var edge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18736__$1,new cljs.core.Keyword(null,"edge","edge",919909153));
return re_com.nested_grid.theme.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961)) : edge.call(null,new cljs.core.Keyword(null,"top","top",-1856271961))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),re_com.nested_grid.theme.border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833)) : edge.call(null,new cljs.core.Keyword(null,"right","right",-452581833))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),re_com.nested_grid.theme.border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bottom","bottom",-1550509018)) : edge.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),re_com.nested_grid.theme.border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937)) : edge.call(null,new cljs.core.Keyword(null,"left","left",-399115937))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),re_com.nested_grid.theme.border_light], null):null)], 0));
}));

//# sourceMappingURL=re_com.nested_grid.theme.js.map
