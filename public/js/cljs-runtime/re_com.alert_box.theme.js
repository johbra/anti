goog.provide('re_com.alert_box.theme');
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.alert-box","wrapper","re-com.alert-box/wrapper",1740039663),(function (props){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"gap","gap",80255254),"10px"], null)], 0))], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"auto"], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.alert-box","wrapper","re-com.alert-box/wrapper",1740039663),(function (p__16990){
var map__16991 = p__16990;
var map__16991__$1 = cljs.core.__destructure_map(map__16991);
var props = map__16991__$1;
var map__16992 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16991__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__16992__$1 = cljs.core.__destructure_map(map__16992);
var map__16993 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16992__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__16993__$1 = cljs.core.__destructure_map(map__16993);
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16993__$1,new cljs.core.Keyword(null,"alert-type","alert-type",405751817));
var alert_class = (function (){var G__16995 = alert_type;
var G__16995__$1 = (((G__16995 instanceof cljs.core.Keyword))?G__16995.fqn:null);
switch (G__16995__$1) {
case "none":
return "";

break;
case "info":
return "alert-success";

break;
case "warning":
return "alert-warning";

break;
case "danger":
return "alert-danger";

break;
default:
return "alert-success";

}
})();
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-alert","alert","fade","in",alert_class], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.alert-box","header","re-com.alert-box/header",-425376161),(function (props){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368)], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.alert-box","header","re-com.alert-box/header",-425376161),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-alert-heading"], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.alert-box","heading-wrapper","re-com.alert-box/heading-wrapper",1026430136),(function (p__16999){
var map__17000 = p__16999;
var map__17000__$1 = cljs.core.__destructure_map(map__17000);
var props = map__17000__$1;
var map__17001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17000__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__17001__$1 = cljs.core.__destructure_map(map__17001);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17001__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var G__17002 = props;
var G__17002__$1 = re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(G__17002,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-alert-h4"], 0))
;
if(((cljs.core.contains_QMARK_(cljs.core.set(from),new cljs.core.Keyword("re-com","alert-list","re-com/alert-list",-1180697284))) && (cljs.core.contains_QMARK_(cljs.core.set(from),new cljs.core.Keyword("re-demo","alert-list","re-demo/alert-list",788222434))))){
return re_com.theme.util.attr.cljs$core$IFn$_invoke$arity$variadic(G__17002__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),(""+"This tooltip only appears on an alert-box "+"which descends from an alert-list!")], null)], 0));
} else {
return G__17002__$1;
}
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.alert-box","body-wrapper","re-com.alert-box/body-wrapper",-1110142111),(function (props){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368)], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.alert-box","body-wrapper","re-com.alert-box/body-wrapper",-1110142111),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-alert-body"], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.alert-box","close-button","re-com.alert-box/close-button",-1685239864),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-alert-close-button"], 0));
}));

//# sourceMappingURL=re_com.alert_box.theme.js.map
