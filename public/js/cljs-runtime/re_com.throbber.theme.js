goog.provide('re_com.throbber.theme');
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.throbber","wrapper","re-com.throbber/wrapper",-232048079),(function (props){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981)], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.throbber","throbber","re-com.throbber/throbber",218260494),(function (p__17608){
var map__17609 = p__17608;
var map__17609__$1 = cljs.core.__destructure_map(map__17609);
var props = map__17609__$1;
var map__17610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17609__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__17610__$1 = cljs.core.__destructure_map(map__17610);
var map__17611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17610__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__17611__$1 = cljs.core.__destructure_map(map__17611);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17611__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["loader","rc-throbber",(function (){var G__17612 = size;
var G__17612__$1 = (((G__17612 instanceof cljs.core.Keyword))?G__17612.fqn:null);
switch (G__17612__$1) {
case "smaller":
return "smaller";

break;
case "small":
return "small";

break;
case "large":
return "large";

break;
default:
return null;

}
})()], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.throbber","segment","re-com.throbber/segment",-529719489),(function (p__17615){
var map__17616 = p__17615;
var map__17616__$1 = cljs.core.__destructure_map(map__17616);
var props = map__17616__$1;
var map__17617 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17616__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__17617__$1 = cljs.core.__destructure_map(map__17617);
var map__17618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17617__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__17618__$1 = cljs.core.__destructure_map(map__17618);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17618__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(color)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),color], null):null)], 0));
}));

//# sourceMappingURL=re_com.throbber.theme.js.map
