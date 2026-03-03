goog.provide('re_com.tag_dropdown.theme');
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.tag-dropdown","popover-anchor-wrapper","re-com.tag-dropdown/popover-anchor-wrapper",-1790254909),(function (props){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"below-center","below-center",-2126885397)], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.tag-dropdown","main","re-com.tag-dropdown/main",-286617352),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-tag-dropdown"], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.tag-dropdown","popover-content-wrapper","re-com.tag-dropdown/popover-content-wrapper",-1381540238),(function (p__18420){
var map__18421 = p__18420;
var map__18421__$1 = cljs.core.__destructure_map(map__18421);
var props = map__18421__$1;
var map__18422 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18421__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__18422__$1 = cljs.core.__destructure_map(map__18422);
var transition_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18422__$1,new cljs.core.Keyword(null,"transition!","transition!",123167659));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),true,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932),(function (event){
(transition_BANG_.cljs$core$IFn$_invoke$arity$1 ? transition_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"close","close",1835149582)) : transition_BANG_.call(null,new cljs.core.Keyword(null,"close","close",1835149582)));

return null;
})], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.tag-dropdown","popover-content-wrapper","re-com.tag-dropdown/popover-content-wrapper",-1381540238),(function (props){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arrow-length","arrow-length",934916707),(0),new cljs.core.Keyword(null,"arrow-width","arrow-width",1926673833),(0),new cljs.core.Keyword(null,"arrow-gap","arrow-gap",1490206257),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),"19px 19px"], null)], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.tag-dropdown","main","re-com.tag-dropdown/main",-286617352),(function (p__18424){
var map__18425 = p__18424;
var map__18425__$1 = cljs.core.__destructure_map(map__18425);
var props = map__18425__$1;
var map__18426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18425__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__18426__$1 = cljs.core.__destructure_map(map__18426);
var map__18427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18426__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__18427__$1 = cljs.core.__destructure_map(map__18427);
var interaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18427__$1,new cljs.core.Keyword(null,"interaction","interaction",-2143888916));
var transition_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18426__$1,new cljs.core.Keyword(null,"transition!","transition!",123167659));
return re_com.theme.util.attr.cljs$core$IFn$_invoke$arity$variadic(re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368)], null)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"cursor","cursor",1011937484),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(interaction,new cljs.core.Keyword(null,"enabled","enabled",1195909756)))?"pointer":"default")], null)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
(transition_BANG_.cljs$core$IFn$_invoke$arity$1 ? transition_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"open","open",-1763596448)) : transition_BANG_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448)));

return null;
})], null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.tag-dropdown","main","re-com.tag-dropdown/main",-286617352),(function (p__18429){
var map__18430 = p__18429;
var map__18430__$1 = cljs.core.__destructure_map(map__18430);
var props = map__18430__$1;
var map__18431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18430__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__18431__$1 = cljs.core.__destructure_map(map__18431);
var map__18432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18431__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var map__18432__$1 = cljs.core.__destructure_map(map__18432);
var white = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,new cljs.core.Keyword(null,"white","white",-483998618));
var background_disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18432__$1,new cljs.core.Keyword(null,"background-disabled","background-disabled",-844674170));
var map__18433 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18431__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__18433__$1 = cljs.core.__destructure_map(map__18433);
var interaction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18433__$1,new cljs.core.Keyword(null,"interaction","interaction",-2143888916));
return re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(interaction,new cljs.core.Keyword(null,"enabled","enabled",1195909756)))?white:background_disabled),new cljs.core.Keyword(null,"color","color",1011675173),"#BBB",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid lightgrey",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"2px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0px 6px"], null)], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.tag-dropdown","tags","re-com.tag-dropdown/tags",-656944674),(function (props){
return re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"1"], null)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.tag-dropdown","tags","re-com.tag-dropdown/tags",-656944674),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-tag-dropdown-tags"], 0));
}));
re_com.theme.default$.base.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.tag-dropdown","placeholder-tag","re-com.tag-dropdown/placeholder-tag",253989700),(function (p__18436){
var map__18437 = p__18436;
var map__18437__$1 = cljs.core.__destructure_map(map__18437);
var props = map__18437__$1;
var map__18438 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18437__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__18438__$1 = cljs.core.__destructure_map(map__18438);
var map__18439 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18438__$1,new cljs.core.Keyword(null,"variables","variables",1563680814));
var map__18439__$1 = cljs.core.__destructure_map(map__18439);
var background_disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18439__$1,new cljs.core.Keyword(null,"background-disabled","background-disabled",-844674170));
var transition_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18438__$1,new cljs.core.Keyword(null,"transition!","transition!",123167659));
return re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.theme.util.attr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Click to select tags",new cljs.core.Keyword(null,"hover-style","hover-style",976094077),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_disabled], null)], null)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
(transition_BANG_.cljs$core$IFn$_invoke$arity$1 ? transition_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"open","open",-1763596448)) : transition_BANG_.call(null,new cljs.core.Keyword(null,"open","open",-1763596448)));

return null;
})], null)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"1"], null)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.tag-dropdown","tag","re-com.tag-dropdown/tag",1648429332),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-tag-dropdown-tag","noselect","rc-text-tag"], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.tag-dropdown","counter","re-com.tag-dropdown/counter",-541799060),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-tag-dropdown-counter"], 0));
}));
re_com.theme.default$.main.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.tag-dropdown","counter","re-com.tag-dropdown/counter",-541799060),(function (props){
return re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"grey",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"12px",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"2px"], null)], 0));
}));
re_com.theme.default$.bootstrap.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("re-com.tag-dropdown","selection-list","re-com.tag-dropdown/selection-list",323223904),(function (props){
return re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["rc-tag-dropdown-selection-list"], 0));
}));

//# sourceMappingURL=re_com.tag_dropdown.theme.js.map
