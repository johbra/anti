goog.provide('re_com.hyperlink.theme');
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.hyperlink","wrapper","re-com.hyperlink/wrapper",-341099269),(function (props){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.hyperlink","wrapper","re-com.hyperlink/wrapper",-341099269),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["display-inline-flex","rc-hyperlink-wrapper"], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.hyperlink","popover-tooltip","re-com.hyperlink/popover-tooltip",917426935),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-hyperlink-tooltip"], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.hyperlink","link","re-com.hyperlink/link",-216921323),(function (p__17006){
var map__17007 = p__17006;
var map__17007__$1 = cljs.core.__destructure_map(map__17007);
var props = map__17007__$1;
var map__17008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17007__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__17008__$1 = cljs.core.__destructure_map(map__17008);
var map__17009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17008__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__17009__$1 = cljs.core.__destructure_map(map__17009);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17009__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17009__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var transition_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17008__$1,new cljs.core.Keyword(null,"transition!","transition!",123167659));
return re_com.theme.util.attr.cljs$core$IFn$_invoke$arity$variadic(re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK_)?"default":"pointer"),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),(cljs.core.truth_(disabled_QMARK_)?"none":null),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(disabled_QMARK_)?"grey":null)], null)], 0))], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_((function (){var and__5140__auto__ = on_click;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(disabled_QMARK_);
} else {
return and__5140__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
})], null),(cljs.core.truth_(transition_BANG_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
(transition_BANG_.cljs$core$IFn$_invoke$arity$1 ? transition_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"show","show",-576705889)) : transition_BANG_.call(null,new cljs.core.Keyword(null,"show","show",-576705889)));

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
(transition_BANG_.cljs$core$IFn$_invoke$arity$1 ? transition_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide","hide",-596913169)) : transition_BANG_.call(null,new cljs.core.Keyword(null,"hide","hide",-596913169)));

return null;
})], null):null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.hyperlink","link","re-com.hyperlink/link",-216921323),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["noselect","rc-hyperlink"], 0));
}));

//# sourceMappingURL=re_com.hyperlink.theme.js.map
