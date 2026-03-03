goog.provide('re_com.close_button.theme');
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.close-button","wrapper","re-com.close-button/wrapper",-1217268950),(function (props){
var map__16879 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var map__16879__$1 = cljs.core.__destructure_map(map__16879);
var div_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16879__$1,new cljs.core.Keyword(null,"div-size","div-size",1661625995));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16879__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
return re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),re_com.util.px(div_size),new cljs.core.Keyword(null,"height","height",1025178622),re_com.util.px(div_size),new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),(cljs.core.truth_(disabled_QMARK_)?"none":null)], null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.close-button","button","re-com.close-button/button",169310161),(function (props){
var map__16880 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.Keyword(null,"state","state",-1988618099)], null));
var map__16880__$1 = cljs.core.__destructure_map(map__16880);
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16880__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var div_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16880__$1,new cljs.core.Keyword(null,"div-size","div-size",1661625995));
var top_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16880__$1,new cljs.core.Keyword(null,"top-offset","top-offset",1235816245));
var left_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16880__$1,new cljs.core.Keyword(null,"left-offset","left-offset",-331155643));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16880__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16880__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16880__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var hover_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16880__$1,new cljs.core.Keyword(null,"hover-color","hover-color",663962326));
return re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"cursor","cursor",1011937484),(cljs.core.truth_(disabled_QMARK_)?null:"pointer"),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),re_com.util.px(font_size),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(hover_QMARK_)?hover_color:color),new cljs.core.Keyword(null,"top","top",-1856271961),re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((((font_size - div_size) / (2)) - (function (){var or__5142__auto__ = top_offset;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"negative","negative",-1562068438)], 0)),new cljs.core.Keyword(null,"left","left",-399115937),re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((((font_size - div_size) / (2)) - (function (){var or__5142__auto__ = left_offset;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})()),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"negative","negative",-1562068438)], 0))], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.close-button","wrapper","re-com.close-button/wrapper",-1217268950),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-close-button"], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.close-button","icon","re-com.close-button/icon",-656828869),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-close-button-icon","zmdi","zmdi-hc-fw-rc","zmdi-close"], 0));
}));

//# sourceMappingURL=re_com.close_button.theme.js.map
