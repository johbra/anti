goog.provide('re_com.horizontal_tabs.theme');
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.horizontal-tabs","wrapper","re-com.horizontal-tabs/wrapper",1429488860),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["nav","nav-tabs","noselect","rc-tabs"], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.horizontal-tabs","wrapper","re-com.horizontal-tabs/wrapper",1429488860),(function (props){
return re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.box.flex_child_style("none")], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.horizontal-tabs","tab","re-com.horizontal-tabs/tab",1738253563),(function (p__18303){
var map__18304 = p__18303;
var map__18304__$1 = cljs.core.__destructure_map(map__18304);
var props = map__18304__$1;
var map__18305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18304__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__18305__$1 = cljs.core.__destructure_map(map__18305);
var map__18306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18305__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__18306__$1 = cljs.core.__destructure_map(map__18306);
var enable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18306__$1,new cljs.core.Keyword(null,"enable","enable",-1839114332));
var selectable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18306__$1,new cljs.core.Keyword(null,"selectable","selectable",370587038));
var tab_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18304__$1,new cljs.core.Keyword(null,"tab-type","tab-type",-913444495));
var G__18307 = tab_type;
var G__18307__$1 = (((G__18307 instanceof cljs.core.Keyword))?G__18307.fqn:null);
switch (G__18307__$1) {
case "horizontal":
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"disabled","disabled",-1529784218),enable))?"disabled":null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selected","selected",574897764),selectable))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["active","rc-tab"], null):null)], 0));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18307__$1))));

}
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.horizontal-tabs","anchor","re-com.horizontal-tabs/anchor",-443086631),(function (p__18311){
var map__18312 = p__18311;
var map__18312__$1 = cljs.core.__destructure_map(map__18312);
var props = map__18312__$1;
var map__18313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18312__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__18313__$1 = cljs.core.__destructure_map(map__18313);
var map__18314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18313__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__18314__$1 = cljs.core.__destructure_map(map__18314);
var enable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18314__$1,new cljs.core.Keyword(null,"enable","enable",-1839114332));
var selectable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18314__$1,new cljs.core.Keyword(null,"selectable","selectable",370587038));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18312__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18312__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var G__18315 = props;
var G__18315__$1 = re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(G__18315,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], 0))
;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"enabled","enabled",1195909756),enable)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unselected","unselected",-1210198137),selectable)))){
return re_com.theme.util.attr.cljs$core$IFn$_invoke$arity$variadic(G__18315__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(id) : on_change.call(null,id));

return null;
})], null)], 0));
} else {
return G__18315__$1;
}
}));

//# sourceMappingURL=re_com.horizontal_tabs.theme.js.map
