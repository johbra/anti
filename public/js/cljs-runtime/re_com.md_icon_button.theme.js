goog.provide('re_com.md_icon_button.theme');
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.md-icon-button","wrapper","re-com.md-icon-button/wrapper",1373932963),(function (props){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.md-icon-button","wrapper","re-com.md-icon-button/wrapper",1373932963),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-md-icon-button-wrapper","display-inline-flex"], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.md-icon-button","popover-tooltip","re-com.md-icon-button/popover-tooltip",1749295935),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-md-icon-button-tooltip"], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.md-icon-button","button","re-com.md-icon-button/button",1823063840),(function (props){
var map__16988 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var map__16988__$1 = cljs.core.__destructure_map(map__16988);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16988__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var emphasise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16988__$1,new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16988__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["noselect","rc-md-icon-button",(function (){var G__16989 = size;
var G__16989__$1 = (((G__16989 instanceof cljs.core.Keyword))?G__16989.fqn:null);
switch (G__16989__$1) {
case "smaller":
return "rc-icon-smaller";

break;
case "larger":
return "rc-icon-larger";

break;
default:
return "";

}
})(),(cljs.core.truth_(emphasise_QMARK_)?"rc-icon-emphasis":null),(cljs.core.truth_(disabled_QMARK_)?"rc-icon-disabled":null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.md-icon-button","button","re-com.md-icon-button/button",1823063840),(function (p__16994){
var map__16996 = p__16994;
var map__16996__$1 = cljs.core.__destructure_map(map__16996);
var props = map__16996__$1;
var map__16997 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16996__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__16997__$1 = cljs.core.__destructure_map(map__16997);
var map__16998 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16997__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__16998__$1 = cljs.core.__destructure_map(map__16998);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16998__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var tooltip_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16998__$1,new cljs.core.Keyword(null,"tooltip?","tooltip?",-642753154));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16998__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var transition_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16997__$1,new cljs.core.Keyword(null,"transition!","transition!",123167659));
return re_com.theme.util.attr.cljs$core$IFn$_invoke$arity$variadic(re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK_)?"default":"pointer")], null)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
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
})], null),(cljs.core.truth_(tooltip_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
(transition_BANG_.cljs$core$IFn$_invoke$arity$1 ? transition_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"show","show",-576705889)) : transition_BANG_.call(null,new cljs.core.Keyword(null,"show","show",-576705889)));

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
(transition_BANG_.cljs$core$IFn$_invoke$arity$1 ? transition_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hide","hide",-596913169)) : transition_BANG_.call(null,new cljs.core.Keyword(null,"hide","hide",-596913169)));

return null;
})], null):null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.md-icon-button","icon","re-com.md-icon-button/icon",-90890010),(function (props){
var map__17053 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var map__17053__$1 = cljs.core.__destructure_map(map__17053);
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17053__$1,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863));
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zmdi","zmdi-hc-fw-rc",md_icon_name], 0));
}));

//# sourceMappingURL=re_com.md_icon_button.theme.js.map
