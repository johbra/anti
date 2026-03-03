goog.provide('re_com.info_button.theme');
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.info-button","popover-tooltip","re-com.info-button/popover-tooltip",1562803820),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-info-button-popover-anchor-wrapper"], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.info-button","button","re-com.info-button/button",472135725),(function (props){
var map__16960 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var map__16960__$1 = cljs.core.__destructure_map(map__16960);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16960__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["noselect","rc-info-button",(cljs.core.truth_(disabled_QMARK_)?"rc-icon-disabled":null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.info-button","button","re-com.info-button/button",472135725),(function (p__16961){
var map__16962 = p__16961;
var map__16962__$1 = cljs.core.__destructure_map(map__16962);
var props = map__16962__$1;
var map__16963 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16962__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__16963__$1 = cljs.core.__destructure_map(map__16963);
var map__16964 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16963__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__16964__$1 = cljs.core.__destructure_map(map__16964);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16964__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var transition_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16963__$1,new cljs.core.Keyword(null,"transition!","transition!",123167659));
return re_com.theme.util.attr.cljs$core$IFn$_invoke$arity$variadic(re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK_)?null:"pointer")], null)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(cljs.core.truth_(disabled_QMARK_)?null:(function (event){
(transition_BANG_.cljs$core$IFn$_invoke$arity$1 ? transition_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"toggle","toggle",1291842030)) : transition_BANG_.call(null,new cljs.core.Keyword(null,"toggle","toggle",1291842030)));

return null;
}))], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.info-button","icon","re-com.info-button/icon",-1489742345),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-info-button-icon"], 0));
}));

//# sourceMappingURL=re_com.info_button.theme.js.map
