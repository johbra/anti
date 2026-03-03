goog.provide('re_com.text');
re_com.text.label_part_structure = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.text","wrapper","re-com.text/wrapper",-289659984),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.text","label-wrapper","re-com.text/label-wrapper",-1445905529),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.text","label","re-com.text/label",-18720248),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null)], null);
re_com.text.label_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.text.label_part_structure):null);
re_com.text.label_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.text.label_parts_desc)):null);
re_com.text.label_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the label is clicked"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a CSS width"], null),re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.text.label_parts),re_com.args.src,re_com.args.debug_as], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(re_com.theme.args_desc,re_com.part.describe_args(re_com.text.label_part_structure))):null);
/**
 * Returns markup for a basic label
 */
re_com.text.label = (function re_com$text$label(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17234 = arguments.length;
var i__5877__auto___17235 = (0);
while(true){
if((i__5877__auto___17235 < len__5876__auto___17234)){
args__5882__auto__.push((arguments[i__5877__auto___17235]));

var G__17237 = (i__5877__auto___17235 + (1));
i__5877__auto___17235 = G__17237;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.text.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.text.label.cljs$core$IFn$_invoke$arity$variadic = (function (p__17183){
var map__17184 = p__17183;
var map__17184__$1 = cljs.core.__destructure_map(map__17184);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17184__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17184__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17184__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var G__17240__delegate = function (p__17186){
var map__17187 = p__17186;
var map__17187__$1 = cljs.core.__destructure_map(map__17187);
var args = map__17187__$1;
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17187__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17187__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.text.label_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.text.label_part_structure,args);
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null)], null);
return part(new cljs.core.Keyword("re-com.label","wrapper","re-com.label/wrapper",775606281),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$1 = debug_as;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})()),args),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/text.cljs",new cljs.core.Keyword(null,"line","line",212345235),70], null)),new cljs.core.Keyword(null,"child","child",623967545),part(new cljs.core.Keyword("re-com.label","label-wrapper","re-com.label/label-wrapper",1750520098),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),(function (){var G__17190 = cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null));
if(cljs.core.truth_(on_click)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17190,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
(on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));

return null;
}));
} else {
return G__17190;
}
})(),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/text.cljs",new cljs.core.Keyword(null,"line","line",212345235),77], null)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.label","label","re-com.label/label",-1100821155),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/text.cljs",new cljs.core.Keyword(null,"line","line",212345235),80], null)),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1], null))], null)], null)], null))], null)], null));
}
};
var G__17240 = function (var_args){
var p__17186 = null;
if (arguments.length > 0) {
var G__17249__i = 0, G__17249__a = new Array(arguments.length -  0);
while (G__17249__i < G__17249__a.length) {G__17249__a[G__17249__i] = arguments[G__17249__i + 0]; ++G__17249__i;}
  p__17186 = new cljs.core.IndexedSeq(G__17249__a,0,null);
} 
return G__17240__delegate.call(this,p__17186);};
G__17240.cljs$lang$maxFixedArity = 0;
G__17240.cljs$lang$applyTo = (function (arglist__17250){
var p__17186 = cljs.core.seq(arglist__17250);
return G__17240__delegate(p__17186);
});
G__17240.cljs$core$IFn$_invoke$arity$variadic = G__17240__delegate;
return G__17240;
})()
;
}));

(re_com.text.label.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.text.label.cljs$lang$applyTo = (function (seq17177){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17177));
}));

re_com.text.title_part_structure = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.title","wrapper","re-com.title/wrapper",802123501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","v-box","re-com.box/v-box",-981983886,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.title","label-wrapper","re-com.title/label-wrapper",1757179334),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.title","label","re-com.title/label",-1075894079),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"impl","impl",1677848700),"empty"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.title","underline","re-com.title/underline",278795904),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","line","re-com.box/line",746788254,null)], null)], null)], null);
re_com.text.title_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.text.title_part_structure):null);
re_com.text.title_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.text.title_parts_desc)):null);
re_com.text.title_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.title_level_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"one of ",re_com.validate.title_levels_list,". If not provided then style the title using ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"underline?","underline?",-1123247603),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the title is underlined"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-top","margin-top",392161226),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"0.6em",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS size for space above the title"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"0.3em",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS size for space below the title"], null),re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.text.title_parts),re_com.args.src,re_com.args.debug_as], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(re_com.theme.args_desc,re_com.part.describe_args(re_com.text.title_part_structure))):null);
/**
 * A title with four preset levels
 */
re_com.text.title = (function re_com$text$title(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17257 = arguments.length;
var i__5877__auto___17258 = (0);
while(true){
if((i__5877__auto___17258 < len__5876__auto___17257)){
args__5882__auto__.push((arguments[i__5877__auto___17258]));

var G__17259 = (i__5877__auto___17258 + (1));
i__5877__auto___17258 = G__17259;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.text.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.text.title.cljs$core$IFn$_invoke$arity$variadic = (function (p__17202){
var map__17203 = p__17202;
var map__17203__$1 = cljs.core.__destructure_map(map__17203);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17203__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17203__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17203__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var G__17263__delegate = function (p__17205){
var map__17206 = p__17205;
var map__17206__$1 = cljs.core.__destructure_map(map__17206);
var args = map__17206__$1;
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17206__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var underline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17206__$1,new cljs.core.Keyword(null,"underline?","underline?",-1123247603));
var margin_top = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17206__$1,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"0.6em");
var margin_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17206__$1,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"0.3em");
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.text.title_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.text.title_part_structure,args);
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),level,new cljs.core.Keyword(null,"underline?","underline?",-1123247603),underline_QMARK_,new cljs.core.Keyword(null,"margin-top","margin-top",392161226),margin_top,new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),margin_bottom], null)], null);
return part(new cljs.core.Keyword("re-com.title","wrapper","re-com.title/wrapper",802123501),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$1 = debug_as;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})()], null),args),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/text.cljs",new cljs.core.Keyword(null,"line","line",212345235),137], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.title","label-wrapper","re-com.title/label-wrapper",1757179334),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/text.cljs",new cljs.core.Keyword(null,"line","line",212345235),142], null)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.title","label","re-com.title/label",-1075894079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null),new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/text.cljs",new cljs.core.Keyword(null,"line","line",212345235),147], null))], null))], null)], null)], null)),(cljs.core.truth_(underline_QMARK_)?part(new cljs.core.Keyword("re-com.title","underline","re-com.title/underline",278795904),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.line,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/text.cljs",new cljs.core.Keyword(null,"line","line",212345235),153], null)),new cljs.core.Keyword(null,"size","size",1098693007),"1px"], null)], null)):null)], null)], null)], null));
}
};
var G__17263 = function (var_args){
var p__17205 = null;
if (arguments.length > 0) {
var G__17271__i = 0, G__17271__a = new Array(arguments.length -  0);
while (G__17271__i < G__17271__a.length) {G__17271__a[G__17271__i] = arguments[G__17271__i + 0]; ++G__17271__i;}
  p__17205 = new cljs.core.IndexedSeq(G__17271__a,0,null);
} 
return G__17263__delegate.call(this,p__17205);};
G__17263.cljs$lang$maxFixedArity = 0;
G__17263.cljs$lang$applyTo = (function (arglist__17272){
var p__17205 = cljs.core.seq(arglist__17272);
return G__17263__delegate(p__17205);
});
G__17263.cljs$core$IFn$_invoke$arity$variadic = G__17263__delegate;
return G__17263;
})()
;
}));

(re_com.text.title.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.text.title.cljs$lang$applyTo = (function (seq17201){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17201));
}));

re_com.text.p_part_structure = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.p","wrapper","re-com.p/wrapper",1521043989),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.p","content","re-com.p/content",-1804804783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991)], null)], null)], null);
re_com.text.p_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.text.p_part_structure):null);
re_com.text.p_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.text.p_parts_desc)):null);
re_com.text.p_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.args.children,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),false], null)], 0)),re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.text.p_parts),re_com.args.src,re_com.args.debug_as], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(re_com.theme.args_desc,re_com.part.describe_args(re_com.text.p_part_structure))):null);
re_com.text.standard_impl_keys = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"src","src",-1651076051)], null);
/**
 * acts like [:p ] but uses a [:span] in place of the [:p] and adds bottom margin of 0.7ems which
 *   produces the same visual result.
 * 
 *   Creates a paragraph of body text, expected to have a font-size of 14px or 15px,
 *   which should have limited width.
 * 
 *   Why limited text width?  See http://baymard.com/blog/line-length-readability
 * 
 *   The actual font-size is inherited.
 * 
 *   At 14px, 450px will yield between 69 and 73 chars.
 *   At 15px, 450px will yield about 66 to 70 chars.
 *   So we're at the upper end of the preferred 50 to 75 char range.
 * 
 *   If the first child is a map, it is interpreted as a map of styles / attributes.
 * 
 *   The map can include a :children key. If you pass a sequence of hiccups for :children,
 *   its items will appear before the rest of the arguments. For instance:
 * 
 *   [rc/p {:children ["Hello"]} " World"]
 * 
 *   This will show a "Hello World" paragraph on the page.
 * 
 *   This component uses [:span] because React has become more unforgiving about nesting [:div]s under [:p]s and dumps
 *   a big red warning message in DevTools.
 * 
 *   By adding, for example, a [hyperlink] component within your `[:p]` (which contains a [:div]), you can get this warning message
 */
re_com.text.p = (function re_com$text$p(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17281 = arguments.length;
var i__5877__auto___17282 = (0);
while(true){
if((i__5877__auto___17282 < len__5876__auto___17281)){
args__5882__auto__.push((arguments[i__5877__auto___17282]));

var G__17283 = (i__5877__auto___17282 + (1));
i__5877__auto___17282 = G__17283;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.text.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.text.p.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var arg1 = cljs.core.first(args);
var vec__17214 = ((cljs.core.map_QMARK_(arg1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg1,cljs.core.rest(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null));
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17214,(0),null);
var hiccup_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17214,(1),null);
var map__17217 = m;
var map__17217__$1 = cljs.core.__destructure_map(map__17217);
var m__$1 = map__17217__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17217__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17217__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17217__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17217__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17217__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17217__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var args_map = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(m__$1,new cljs.core.Keyword(null,"parts","parts",849007691),parts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"debug-as","debug-as",283322354),debug_as,new cljs.core.Keyword(null,"src","src",-1651076051),src], 0));
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.text.p_part_structure,args_map);
var re_com_ctx = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentArrayMap.EMPTY], null);
var user_props = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,m__$1,re_com.text.standard_impl_keys);
var content_children = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(children,hiccup_children);
var or__5142__auto__ = (cljs.core.truth_((function (){var and__5140__auto__ = re_com.config.include_args_desc_QMARK_;
if(and__5140__auto__){
var or__5142__auto__ = pre_theme;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = theme__$1;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = parts;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = debug_as;
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
return src;
}
}
}
}
} else {
return and__5140__auto__;
}
})())?(((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.text.p_args_desc),args_map)):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return part(new cljs.core.Keyword("re-com.p","wrapper","re-com.p/wrapper",1521043989),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(user_props,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$1 = debug_as;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})()),args_map),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/text.cljs",new cljs.core.Keyword(null,"line","line",212345235),236], null)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.p","content","re-com.p/content",-1804804783),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/text.cljs",new cljs.core.Keyword(null,"line","line",212345235),241], null)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"children","children",-940561982),content_children], null)], null))], null)], null)], null));
}
}));

(re_com.text.p.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.text.p.cljs$lang$applyTo = (function (seq17212){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17212));
}));

re_com.text.p_span = re_com.text.p;

//# sourceMappingURL=re_com.text.js.map
