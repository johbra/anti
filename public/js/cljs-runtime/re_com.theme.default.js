goog.provide('re_com.theme.default$');
re_com.theme.default$.golden_section_50 = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"sm-3","sm-3",1305919781),new cljs.core.Keyword(null,"lg-5","lg-5",567769477),new cljs.core.Keyword(null,"sm-2","sm-2",-1237201019),new cljs.core.Keyword(null,"lg-4","lg-4",-1041167353),new cljs.core.Keyword(null,"lg-1","lg-1",-1614525368),new cljs.core.Keyword(null,"md-6","md-6",-929946646),new cljs.core.Keyword(null,"sm-1","sm-1",687624747),new cljs.core.Keyword(null,"sm-5","sm-5",-1785481937),new cljs.core.Keyword(null,"md-1","md-1",361379632),new cljs.core.Keyword(null,"md-2","md-2",-1635087790),new cljs.core.Keyword(null,"sm-6","sm-6",113033042),new cljs.core.Keyword(null,"half","half",741990005),new cljs.core.Keyword(null,"lg-3","lg-3",-1353169097),new cljs.core.Keyword(null,"sm-4","sm-4",-1482733062),new cljs.core.Keyword(null,"md-5","md-5",-1045052261),new cljs.core.Keyword(null,"lg-6","lg-6",-1523328932),new cljs.core.Keyword(null,"md-4","md-4",363974045),new cljs.core.Keyword(null,"md-3","md-3",158887357),new cljs.core.Keyword(null,"lg-2","lg-2",295083487)],["100px","3px","2349px","2px","1452px","343px","212px","1px","7px","19px","31px","12px","25px","897px","5px","131px","3800px","81px","50px","554px"]);
re_com.theme.default$.colors = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"light-foreground","light-foreground",-759500766),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"white","white",-483998618),new cljs.core.Keyword(null,"background-disabled","background-disabled",-844674170),new cljs.core.Keyword(null,"neutral","neutral",-1941956087),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"dark","dark",1818973999),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"danger","danger",-624338030),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"foreground","foreground",499022036),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"border-dark","border-dark",-1486742501),new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"light-background","light-background",1498163900),new cljs.core.Keyword(null,"black","black",1294279647)],["#ccc","#0d6efd","#ffffff","#EEE","#555555","white","#6c757d","#212529","#ffc107","#dc3545","#198754","#767a7c","#0dcaf0","#bf1010","#aaa","#f8f9fa","#cccccc","rgba(0, 0, 0, 0.2)","#eee","#000000"]);
re_com.theme.default$.font_sizes = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("font-size","xx-small","font-size/xx-small",-1582096184),re_com.util.px((11)),new cljs.core.Keyword("font-size","x-small","font-size/x-small",615623467),re_com.util.px((12)),new cljs.core.Keyword("font-size","small","font-size/small",-576715279),re_com.util.px((13)),new cljs.core.Keyword("font-size","medium","font-size/medium",-296024665),re_com.util.px((14)),new cljs.core.Keyword("font-size","large","font-size/large",-1749281411),re_com.util.px((15)),new cljs.core.Keyword("font-size","x-large","font-size/x-large",943734384),re_com.util.px((16)),new cljs.core.Keyword("font-size","xx-large","font-size/xx-large",-218228378),re_com.util.px((17))], null);
re_com.theme.default$.static_variables = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.theme.default$.colors,re_com.theme.default$.golden_section_50,re_com.theme.default$.font_sizes], 0));
re_com.theme.default$.variables = (function re_com$theme$default$variables(props){
return cljs.core.assoc_in(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.Keyword(null,"variables","variables",1563680814)], null),re_com.theme.default$.static_variables);
});
if((typeof re_com !== 'undefined') && (typeof re_com.theme !== 'undefined') && (typeof re_com.theme.default !== 'undefined') && (typeof re_com.theme.default.base !== 'undefined')){
} else {
re_com.theme.default$.base = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__16363 = cljs.core.get_global_hierarchy;
return (fexpr__16363.cljs$core$IFn$_invoke$arity$0 ? fexpr__16363.cljs$core$IFn$_invoke$arity$0() : fexpr__16363.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-com.theme.default","base"),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (props){
return props;
}));
if((typeof re_com !== 'undefined') && (typeof re_com.theme !== 'undefined') && (typeof re_com.theme.default !== 'undefined') && (typeof re_com.theme.default.main !== 'undefined')){
} else {
re_com.theme.default$.main = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__16367 = cljs.core.get_global_hierarchy;
return (fexpr__16367.cljs$core$IFn$_invoke$arity$0 ? fexpr__16367.cljs$core$IFn$_invoke$arity$0() : fexpr__16367.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-com.theme.default","main"),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (props){
return props;
}));
if((typeof re_com !== 'undefined') && (typeof re_com.theme !== 'undefined') && (typeof re_com.theme.default !== 'undefined') && (typeof re_com.theme.default.bootstrap !== 'undefined')){
} else {
re_com.theme.default$.bootstrap = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__16370 = cljs.core.get_global_hierarchy;
return (fexpr__16370.cljs$core$IFn$_invoke$arity$0 ? fexpr__16370.cljs$core$IFn$_invoke$arity$0() : fexpr__16370.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-com.theme.default","bootstrap"),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (props){
return props;
}));

//# sourceMappingURL=re_com.theme.default.js.map
