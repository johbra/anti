goog.provide('re_com.hyperlink_href.theme');
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.hyperlink-href","wrapper","re-com.hyperlink-href/wrapper",983151877),(function (props){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.hyperlink-href","wrapper","re-com.hyperlink-href/wrapper",983151877),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["display-inline-flex","rc-hyperlink-href-wrapper"], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.hyperlink-href","popover-tooltip","re-com.hyperlink-href/popover-tooltip",-847709479),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-hyperlink-href-tooltip"], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.hyperlink-href","link","re-com.hyperlink-href/link",1113604859),(function (p__17021){
var map__17022 = p__17021;
var map__17022__$1 = cljs.core.__destructure_map(map__17022);
var props = map__17022__$1;
var map__17023 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17022__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__17023__$1 = cljs.core.__destructure_map(map__17023);
var map__17024 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17023__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__17024__$1 = cljs.core.__destructure_map(map__17024);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17024__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17024__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17024__$1,new cljs.core.Keyword(null,"target","target",253001721));
var transition_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17023__$1,new cljs.core.Keyword(null,"transition!","transition!",123167659));
return re_com.theme.util.attr.cljs$core$IFn$_invoke$arity$variadic(re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK_)?"default":"pointer"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),(cljs.core.truth_(disabled_QMARK_)?"none":null),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(disabled_QMARK_)?"grey":null)], null)], 0))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),target], null),((cljs.core.not(disabled_QMARK_))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),href], null):null),(cljs.core.truth_(transition_BANG_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
(transition_BANG_.cljs$core$IFn$_invoke$arity$1 ? transition_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"show","show",-576705889)) : transition_BANG_.call(null,new cljs.core.Keyword(null,"show","show",-576705889)));

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
(transition_BANG_.cljs$core$IFn$_invoke$arity$1 ? transition_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide","hide",-596913169)) : transition_BANG_.call(null,new cljs.core.Keyword(null,"hide","hide",-596913169)));

return null;
})], null):null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.hyperlink-href","link","re-com.hyperlink-href/link",1113604859),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["noselect","rc-hyperlink-href"], 0));
}));

//# sourceMappingURL=re_com.hyperlink_href.theme.js.map
