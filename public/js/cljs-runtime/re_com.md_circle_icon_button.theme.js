goog.provide('re_com.md_circle_icon_button.theme');
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.button","md-circle-wrapper","re-com.button/md-circle-wrapper",372580802),(function (props){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.md-circle-icon-button","wrapper","re-com.md-circle-icon-button/wrapper",-1177858652),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["display-inline-flex","rc-md-circle-icon-button-wrapper"], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.md-circle-icon-button","popover-tooltip","re-com.md-circle-icon-button/popover-tooltip",1347347258),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-md-circle-icon-button-tooltip"], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.md-circle-icon-button","button","re-com.md-circle-icon-button/button",345767711),(function (p__16927){
var map__16928 = p__16927;
var map__16928__$1 = cljs.core.__destructure_map(map__16928);
var props = map__16928__$1;
var map__16929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16928__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__16929__$1 = cljs.core.__destructure_map(map__16929);
var map__16930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16929__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__16930__$1 = cljs.core.__destructure_map(map__16930);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16930__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16930__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var tooltip_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16930__$1,new cljs.core.Keyword(null,"tooltip?","tooltip?",-642753154));
var transition_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16929__$1,new cljs.core.Keyword(null,"transition!","transition!",123167659));
return re_com.theme.util.attr.cljs$core$IFn$_invoke$arity$variadic(re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK_)?null:"pointer")], null)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
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
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.md-circle-icon-button","button","re-com.md-circle-icon-button/button",345767711),(function (props){
var map__16933 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var map__16933__$1 = cljs.core.__destructure_map(map__16933);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16933__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var emphasise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16933__$1,new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16933__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["noselect","rc-md-circle-icon-button",(function (){var G__16934 = size;
var G__16934__$1 = (((G__16934 instanceof cljs.core.Keyword))?G__16934.fqn:null);
switch (G__16934__$1) {
case "smaller":
return "rc-circle-smaller";

break;
case "larger":
return "rc-circle-larger";

break;
default:
return "";

}
})(),(cljs.core.truth_(emphasise_QMARK_)?"rc-circle-emphasis":null),(cljs.core.truth_(disabled_QMARK_)?"rc-circle-disabled":null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.md-circle-icon-button","icon","re-com.md-circle-icon-button/icon",-760454939),(function (p__16937){
var map__16938 = p__16937;
var map__16938__$1 = cljs.core.__destructure_map(map__16938);
var props = map__16938__$1;
var map__16939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16938__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__16939__$1 = cljs.core.__destructure_map(map__16939);
var map__16940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16939__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__16940__$1 = cljs.core.__destructure_map(map__16940);
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16940__$1,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863));
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["zmdi","zmdi-hc-fw-rc",md_icon_name], 0));
}));

//# sourceMappingURL=re_com.md_circle_icon_button.theme.js.map
