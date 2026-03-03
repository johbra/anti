goog.provide('re_com.buttons');
re_com.buttons.part_structure = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.button","wrapper","re-com.button/wrapper",-295497979),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.button","popover-tooltip","re-com.button/popover-tooltip",-1983470375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.popover","popover-tooltip","re-com.popover/popover-tooltip",13188799,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.button","tooltip","re-com.button/tooltip",-96940809),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.button","button","re-com.button/button",-1090241154),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"button","button",1456579943)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.button","label","re-com.button/label",-25524663),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"part-required?","part-required?",-318215354),true], null)], null)], null)], null);
re_com.buttons.button_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.buttons.part_structure):null);
re_com.buttons.button_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.buttons.button_parts_desc)):null);
re_com.buttons.button_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the button is clicked",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't click the button",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom"], null)], null),re_com.args.std,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.buttons.part_structure)], 0)):null);
/**
 * Returns the markup for a basic button
 */
re_com.buttons.button = (function re_com$buttons$button(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17369 = arguments.length;
var i__5877__auto___17370 = (0);
while(true){
if((i__5877__auto___17370 < len__5876__auto___17369)){
args__5882__auto__.push((arguments[i__5877__auto___17370]));

var G__17371 = (i__5877__auto___17370 + (1));
i__5877__auto___17370 = G__17371;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.buttons.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.buttons.button.cljs$core$IFn$_invoke$arity$variadic = (function (p__17181){
var map__17182 = p__17181;
var map__17182__$1 = cljs.core.__destructure_map(map__17182);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17182__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17182__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var transition_BANG_ = (function (p1__17175_SHARP_){
var G__17185 = p1__17175_SHARP_;
var G__17185__$1 = (((G__17185 instanceof cljs.core.Keyword))?G__17185.fqn:null);
switch (G__17185__$1) {
case "show":
return cljs.core.reset_BANG_(showing_QMARK_,true);

break;
case "hide":
return cljs.core.reset_BANG_(showing_QMARK_,false);

break;
case "toggle":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17185__$1))));

}
});
return (function() { 
var G__17376__delegate = function (p__17188){
var map__17189 = p__17188;
var map__17189__$1 = cljs.core.__destructure_map(map__17189);
var props = map__17189__$1;
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17189__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17189__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17189__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17189__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.button_args_desc),props));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.buttons.part_structure,props);
var tooltip_QMARK_ = re_com.part.get_part(re_com.buttons.part_structure,props,new cljs.core.Keyword("re-com.buttons","tooltip","re-com.buttons/tooltip",-1357356648));
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition!","transition!",123167659),transition_BANG_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"tooltip?","tooltip?",-642753154),tooltip_QMARK_], null)], null);
var label_part = part(new cljs.core.Keyword("re-com.button","label","re-com.button/label",-25524663),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null)], null));
var button_part = part(new cljs.core.Keyword("re-com.button","button","re-com.button/button",-1090241154),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label_part], null),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_((function (){var and__5140__auto__ = on_click;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__5140__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
}

return null;
})], null),(cljs.core.truth_(tooltip_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),(function (event){
transition_BANG_(new cljs.core.Keyword(null,"show","show",-576705889));

return null;
}),new cljs.core.Keyword(null,"on-mouse-out","on-mouse-out",643448647),(function (event){
transition_BANG_(new cljs.core.Keyword(null,"hide","hide",-596913169));

return null;
})], null):null)], 0))], null)], null));
var tooltip_part = part(new cljs.core.Keyword("re-com.button","tooltip","re-com.button/tooltip",-96940809),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null)], null));
var popover_part = part(new cljs.core.Keyword("re-com.button","popover-tooltip","re-com.button/popover-tooltip",-1983470375),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/buttons.cljs",new cljs.core.Keyword(null,"line","line",212345235),118], null)),new cljs.core.Keyword(null,"label","label",1718410804),tooltip_part,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__5142__auto____$1 = tooltip_position;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"anchor","anchor",1549638489),button_part], null)], null));
if(cljs.core.truth_((function (){var or__5142__auto____$1 = disabled_QMARK___$1;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return cljs.core.not(tooltip_QMARK_);
}
})())){
transition_BANG_(new cljs.core.Keyword(null,"hide","hide",-596913169));
} else {
}

return part(new cljs.core.Keyword("re-com.button","wrapper","re-com.button/wrapper",-295497979),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),re_com.debug.__GT_attr(props)], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(tooltip_QMARK_)?popover_part:button_part)], null)], null));
}
};
var G__17376 = function (var_args){
var p__17188 = null;
if (arguments.length > 0) {
var G__17385__i = 0, G__17385__a = new Array(arguments.length -  0);
while (G__17385__i < G__17385__a.length) {G__17385__a[G__17385__i] = arguments[G__17385__i + 0]; ++G__17385__i;}
  p__17188 = new cljs.core.IndexedSeq(G__17385__a,0,null);
} 
return G__17376__delegate.call(this,p__17188);};
G__17376.cljs$lang$maxFixedArity = 0;
G__17376.cljs$lang$applyTo = (function (arglist__17386){
var p__17188 = cljs.core.seq(arglist__17386);
return G__17376__delegate(p__17188);
});
G__17376.cljs$core$IFn$_invoke$arity$variadic = G__17376__delegate;
return G__17376;
})()
;
}));

(re_com.buttons.button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.buttons.button.cljs$lang$applyTo = (function (seq17176){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17176));
}));

re_com.buttons.md_circle_icon_button_part_structure = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.md-circle-icon-button","wrapper","re-com.md-circle-icon-button/wrapper",-1177858652),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.md-circle-icon-button","popover-tooltip","re-com.md-circle-icon-button/popover-tooltip",1347347258),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.popover","popover-tooltip","re-com.popover/popover-tooltip",13188799,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Tooltip, if enabled by passing a :tooltip part"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.md-circle-icon-button","tooltip","re-com.md-circle-icon-button/tooltip",1169296214),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.md-circle-icon-button","button","re-com.md-circle-icon-button/button",345767711),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.md-circle-icon-button","icon","re-com.md-circle-icon-button/icon",-760454939),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"i","i",-1386841315)], null)], null)], null)], null);
re_com.buttons.md_circle_icon_button_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.buttons.md_circle_icon_button_part_structure):null);
re_com.buttons.md_circle_icon_button_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.buttons.md_circle_icon_button_parts_desc)):null);
re_com.buttons.md_circle_icon_button_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"default","default",-1987822328),"zmdi-plus",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the name of the icon.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"For example, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"\"zmdi-plus\""], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"\"zmdi-undo\""], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.button_size_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"one of ",re_com.validate.button_sizes_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, use emphasised styling so the button really stands out"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_class_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the button, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.buttons.md_circle_icon_button_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks.  A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null),re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.buttons.md_circle_icon_button_part_structure)], 0))):null);
/**
 * a circular button containing a material design icon
 */
re_com.buttons.md_circle_icon_button = (function re_com$buttons$md_circle_icon_button(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17392 = arguments.length;
var i__5877__auto___17393 = (0);
while(true){
if((i__5877__auto___17393 < len__5876__auto___17392)){
args__5882__auto__.push((arguments[i__5877__auto___17393]));

var G__17394 = (i__5877__auto___17393 + (1));
i__5877__auto___17393 = G__17394;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.buttons.md_circle_icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.buttons.md_circle_icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__17196){
var map__17197 = p__17196;
var map__17197__$1 = cljs.core.__destructure_map(map__17197);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17197__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17197__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17197__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var transition_BANG_ = (function (p1__17194_SHARP_){
var G__17198 = p1__17194_SHARP_;
var G__17198__$1 = (((G__17198 instanceof cljs.core.Keyword))?G__17198.fqn:null);
switch (G__17198__$1) {
case "show":
return cljs.core.reset_BANG_(showing_QMARK_,true);

break;
case "hide":
return cljs.core.reset_BANG_(showing_QMARK_,false);

break;
case "toggle":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17198__$1))));

}
});
return (function() { 
var re_com$buttons$md_circle_icon_button_render__delegate = function (p__17199){
var map__17200 = p__17199;
var map__17200__$1 = cljs.core.__destructure_map(map__17200);
var args = map__17200__$1;
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17200__$1,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-plus");
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17200__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17200__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var emphasise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17200__$1,new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17200__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17200__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.md_circle_icon_button_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.buttons.md_circle_icon_button_part_structure,args);
var tooltip_QMARK_ = re_com.part.get_part(re_com.buttons.md_circle_icon_button_part_structure,args,new cljs.core.Keyword("re-com.md-circle-icon-button","tooltip","re-com.md-circle-icon-button/tooltip",1169296214));
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition!","transition!",123167659),transition_BANG_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247),emphasise_QMARK_,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"tooltip?","tooltip?",-642753154),tooltip_QMARK_,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),md_icon_name,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null)], null);
var icon_part = part(new cljs.core.Keyword("re-com.md-circle-icon-button","icon","re-com.md-circle-icon-button/icon",-760454939),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"i","i",-1386841315)], null)], null));
var btn_part = part(new cljs.core.Keyword("re-com.md-circle-icon-button","button","re-com.md-circle-icon-button/button",345767711),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon_part], null)], null)], null));
var popover_part = part(new cljs.core.Keyword("re-com.md-circle-icon-button","tooltip-wrapper","re-com.md-circle-icon-button/tooltip-wrapper",277638851),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/buttons.cljs",new cljs.core.Keyword(null,"line","line",212345235),207], null)),new cljs.core.Keyword(null,"label","label",1718410804),part(new cljs.core.Keyword("re-com.md-circle-icon-button","tooltip","re-com.md-circle-icon-button/tooltip",1169296214),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null)], null)),new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__5142__auto____$1 = tooltip_position;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"anchor","anchor",1549638489),btn_part], null)], null));
if(cljs.core.truth_(tooltip_QMARK_)){
} else {
transition_BANG_(new cljs.core.Keyword(null,"hide","hide",-596913169));
}

return part(new cljs.core.Keyword("re-com.md-circle-icon-button","wrapper","re-com.md-circle-icon-button/wrapper",-1177858652),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),re_com.debug.__GT_attr(args)], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$1 = debug_as;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})(),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(tooltip_QMARK_)?popover_part:btn_part)], null)], null));
}
};
var re_com$buttons$md_circle_icon_button_render = function (var_args){
var p__17199 = null;
if (arguments.length > 0) {
var G__17417__i = 0, G__17417__a = new Array(arguments.length -  0);
while (G__17417__i < G__17417__a.length) {G__17417__a[G__17417__i] = arguments[G__17417__i + 0]; ++G__17417__i;}
  p__17199 = new cljs.core.IndexedSeq(G__17417__a,0,null);
} 
return re_com$buttons$md_circle_icon_button_render__delegate.call(this,p__17199);};
re_com$buttons$md_circle_icon_button_render.cljs$lang$maxFixedArity = 0;
re_com$buttons$md_circle_icon_button_render.cljs$lang$applyTo = (function (arglist__17428){
var p__17199 = cljs.core.seq(arglist__17428);
return re_com$buttons$md_circle_icon_button_render__delegate(p__17199);
});
re_com$buttons$md_circle_icon_button_render.cljs$core$IFn$_invoke$arity$variadic = re_com$buttons$md_circle_icon_button_render__delegate;
return re_com$buttons$md_circle_icon_button_render;
})()
;
}));

(re_com.buttons.md_circle_icon_button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.buttons.md_circle_icon_button.cljs$lang$applyTo = (function (seq17195){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17195));
}));

re_com.buttons.md_icon_button_part_structure = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.md-icon-button","wrapper","re-com.md-icon-button/wrapper",1373932963),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.md-icon-button","popover-tooltip","re-com.md-icon-button/popover-tooltip",1749295935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.popover","popover-tooltip","re-com.popover/popover-tooltip",13188799,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.md-icon-button","tooltip","re-com.md-icon-button/tooltip",498813781),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.md-icon-button","button","re-com.md-icon-button/button",1823063840),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.md-icon-button","icon","re-com.md-icon-button/icon",-90890010),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"i","i",-1386841315)], null)], null)], null)], null);
re_com.buttons.md_icon_button_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.buttons.md_icon_button_part_structure):null);
re_com.buttons.md_icon_button_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.buttons.md_icon_button_parts_desc)):null);
re_com.buttons.md_icon_button_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"default","default",-1987822328),"zmdi-plus",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the name of the icon.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"For example, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"\"zmdi-plus\""], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"\"zmdi-undo\""], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"regular","regular",-1153375582),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.button_size_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"one of ",re_com.validate.button_sizes_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, use emphasised styling so the button really stands out"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map -> map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Pre-theme function"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map -> map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Theme function"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_class_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the button, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.buttons.md_icon_button_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null),re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.buttons.md_icon_button_part_structure)], 0))):null);
/**
 * a square button containing a material design icon
 */
re_com.buttons.md_icon_button = (function re_com$buttons$md_icon_button(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17441 = arguments.length;
var i__5877__auto___17442 = (0);
while(true){
if((i__5877__auto___17442 < len__5876__auto___17441)){
args__5882__auto__.push((arguments[i__5877__auto___17442]));

var G__17443 = (i__5877__auto___17442 + (1));
i__5877__auto___17442 = G__17443;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.buttons.md_icon_button.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.buttons.md_icon_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__17232){
var map__17233 = p__17232;
var map__17233__$1 = cljs.core.__destructure_map(map__17233);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17233__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17233__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17233__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var transition_BANG_ = (function (p1__17228_SHARP_){
var G__17238 = p1__17228_SHARP_;
var G__17238__$1 = (((G__17238 instanceof cljs.core.Keyword))?G__17238.fqn:null);
switch (G__17238__$1) {
case "show":
return cljs.core.reset_BANG_(showing_QMARK_,true);

break;
case "hide":
return cljs.core.reset_BANG_(showing_QMARK_,false);

break;
case "toggle":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17238__$1))));

}
});
return (function() { 
var re_com$buttons$md_icon_button_render__delegate = function (p__17239){
var map__17241 = p__17239;
var map__17241__$1 = cljs.core.__destructure_map(map__17241);
var args = map__17241__$1;
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17241__$1,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-plus");
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17241__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17241__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17241__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var emphasise_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17241__$1,new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17241__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17241__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.md_icon_button_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.buttons.md_icon_button_part_structure,args);
var tooltip_QMARK_ = re_com.part.get_part(re_com.buttons.md_icon_button_part_structure,args,new cljs.core.Keyword("re-com.md-icon-button","tooltip","re-com.md-icon-button/tooltip",498813781));
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition!","transition!",123167659),transition_BANG_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"emphasise?","emphasise?",1618294247),emphasise_QMARK_,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"tooltip?","tooltip?",-642753154),tooltip_QMARK_,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),md_icon_name], null)], null);
var icon_part = part(new cljs.core.Keyword("re-com.md-icon-button","icon","re-com.md-icon-button/icon",-90890010),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null)], null));
var btn_part = part(new cljs.core.Keyword("re-com.md-icon-button","button","re-com.md-icon-button/button",1823063840),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon_part], null)], null)], null));
var tooltip_part = part(new cljs.core.Keyword("re-com.md-icon-button","tooltip","re-com.md-icon-button/tooltip",498813781),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null)], null));
var popover_part = part(new cljs.core.Keyword("re-com.md-icon-button","popover-tooltip","re-com.md-icon-button/popover-tooltip",1749295935),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/buttons.cljs",new cljs.core.Keyword(null,"line","line",212345235),300], null)),new cljs.core.Keyword(null,"label","label",1718410804),tooltip_part,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__5142__auto____$1 = tooltip_position;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"anchor","anchor",1549638489),btn_part], null)], null));
if(cljs.core.truth_(tooltip_QMARK_)){
} else {
transition_BANG_(new cljs.core.Keyword(null,"hide","hide",-596913169));
}

return part(new cljs.core.Keyword("re-com.md-icon-button","wrapper","re-com.md-icon-button/wrapper",1373932963),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),re_com.debug.__GT_attr(args)], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$1 = debug_as;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})(),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(tooltip_QMARK_)?popover_part:btn_part)], null)], null));
}
};
var re_com$buttons$md_icon_button_render = function (var_args){
var p__17239 = null;
if (arguments.length > 0) {
var G__17458__i = 0, G__17458__a = new Array(arguments.length -  0);
while (G__17458__i < G__17458__a.length) {G__17458__a[G__17458__i] = arguments[G__17458__i + 0]; ++G__17458__i;}
  p__17239 = new cljs.core.IndexedSeq(G__17458__a,0,null);
} 
return re_com$buttons$md_icon_button_render__delegate.call(this,p__17239);};
re_com$buttons$md_icon_button_render.cljs$lang$maxFixedArity = 0;
re_com$buttons$md_icon_button_render.cljs$lang$applyTo = (function (arglist__17459){
var p__17239 = cljs.core.seq(arglist__17459);
return re_com$buttons$md_icon_button_render__delegate(p__17239);
});
re_com$buttons$md_icon_button_render.cljs$core$IFn$_invoke$arity$variadic = re_com$buttons$md_icon_button_render__delegate;
return re_com$buttons$md_icon_button_render;
})()
;
}));

(re_com.buttons.md_icon_button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.buttons.md_icon_button.cljs$lang$applyTo = (function (seq17229){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17229));
}));

re_com.buttons.info_button_part_structure = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.info-button","popover-tooltip","re-com.info-button/popover-tooltip",1562803820),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.popover","popover-tooltip","re-com.popover/popover-tooltip",13188799,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("info-bn","info","info-bn/info",1630403297),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.info-button","button","re-com.info-button/button",472135725),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.info-button","icon","re-com.info-button/icon",-1489742345),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142)], null)], null)], null)], null);
re_com.buttons.info_button_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.buttons.info_button_part_structure):null);
re_com.buttons.info_button_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.buttons.info_button_parts_desc)):null);
re_com.buttons.info_button_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"what's shown in the popover"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"right-below","right-below",586981827),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"width in px"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map -> map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Pre-theme function"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map -> map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Theme function"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_class_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the button, not the popover wrapper)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the button, not the popover wrapper)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the button, not the popover wrapper)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.buttons.info_button_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null),re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.buttons.info_button_part_structure)], 0))):null);
/**
 * A tiny light grey button, with an 'i' in it. Meant to be unobtrusive.
 *   When pressed, displays a popup assumedly containing helpful information.
 *   Primarily designed to be nestled against the label of an input field, explaining the purpose of that field.
 *   Create a very small "i" icon via SVG
 */
re_com.buttons.info_button = (function re_com$buttons$info_button(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17467 = arguments.length;
var i__5877__auto___17468 = (0);
while(true){
if((i__5877__auto___17468 < len__5876__auto___17467)){
args__5882__auto__.push((arguments[i__5877__auto___17468]));

var G__17469 = (i__5877__auto___17468 + (1));
i__5877__auto___17468 = G__17469;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.buttons.info_button.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.buttons.info_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__17273){
var map__17274 = p__17273;
var map__17274__$1 = cljs.core.__destructure_map(map__17274);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17274__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17274__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var transition_BANG_ = (function (p1__17265_SHARP_){
var G__17275 = p1__17265_SHARP_;
var G__17275__$1 = (((G__17275 instanceof cljs.core.Keyword))?G__17275.fqn:null);
switch (G__17275__$1) {
case "show":
return cljs.core.reset_BANG_(showing_QMARK_,true);

break;
case "hide":
return cljs.core.reset_BANG_(showing_QMARK_,false);

break;
case "toggle":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17275__$1))));

}
});
return (function() { 
var re_com$buttons$info_button_render__delegate = function (p__17276){
var map__17277 = p__17276;
var map__17277__$1 = cljs.core.__destructure_map(map__17277);
var args = map__17277__$1;
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17277__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17277__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17277__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17277__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.info_button_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.buttons.info_button_part_structure,args);
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition!","transition!",123167659),transition_BANG_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"showing?","showing?",2094921488),cljs.core.deref(showing_QMARK_)], null)], null);
var info_part = part(new cljs.core.Keyword("re-com.info-button","info","re-com.info-button/info",-1305766524),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1], null));
var icon_part = part(new cljs.core.Keyword("re-com.info-button","icon","re-com.info-button/icon",-1489742345),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"11",new cljs.core.Keyword(null,"height","height",1025178622),"11"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cx","cx",1272694324),"5.5",new cljs.core.Keyword(null,"cy","cy",755331060),"5.5",new cljs.core.Keyword(null,"r","r",-471384190),"5.5"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cx","cx",1272694324),"5.5",new cljs.core.Keyword(null,"cy","cy",755331060),"2.5",new cljs.core.Keyword(null,"r","r",-471384190),"1.4",new cljs.core.Keyword(null,"fill","fill",883462889),"white"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"x1","x1",-1863922247),"5.5",new cljs.core.Keyword(null,"y1","y1",589123466),"5.2",new cljs.core.Keyword(null,"x2","x2",-1362513475),"5.5",new cljs.core.Keyword(null,"y2","y2",-718691301),"9.7",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"white",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"2.5"], null)], null)], null)], null)], null));
var button_part = part(new cljs.core.Keyword("re-com.info-button","button","re-com.info-button/button",472135725),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon_part], null)], null)], null));
return part(new cljs.core.Keyword("re-com.info-button","popover-tooltip","re-com.info-button/popover-tooltip",1562803820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"showing?","showing?",2094921488),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"anchor","anchor",1549638489),new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932)],[(function (){var or__5142__auto____$1 = width;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return "250px";
}
})(),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args),showing_QMARK_,(function (){var or__5142__auto____$1 = debug_as;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})(),new cljs.core.Keyword(null,"info","info",-317069002),info_part,(function (){var or__5142__auto____$1 = position;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"right-below","right-below",586981827);
}
})(),button_part,(function (event){
transition_BANG_(new cljs.core.Keyword(null,"toggle","toggle",1291842030));

return null;
})])], null));
}
};
var re_com$buttons$info_button_render = function (var_args){
var p__17276 = null;
if (arguments.length > 0) {
var G__17476__i = 0, G__17476__a = new Array(arguments.length -  0);
while (G__17476__i < G__17476__a.length) {G__17476__a[G__17476__i] = arguments[G__17476__i + 0]; ++G__17476__i;}
  p__17276 = new cljs.core.IndexedSeq(G__17476__a,0,null);
} 
return re_com$buttons$info_button_render__delegate.call(this,p__17276);};
re_com$buttons$info_button_render.cljs$lang$maxFixedArity = 0;
re_com$buttons$info_button_render.cljs$lang$applyTo = (function (arglist__17477){
var p__17276 = cljs.core.seq(arglist__17477);
return re_com$buttons$info_button_render__delegate(p__17276);
});
re_com$buttons$info_button_render.cljs$core$IFn$_invoke$arity$variadic = re_com$buttons$info_button_render__delegate;
return re_com$buttons$info_button_render;
})()
;
}));

(re_com.buttons.info_button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.buttons.info_button.cljs$lang$applyTo = (function (seq17270){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17270));
}));

re_com.buttons.row_button_part_structure = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.row-button","wrapper","re-com.row-button/wrapper",-1362685096),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.row-button","popover-tooltip","re-com.row-button/popover-tooltip",1234870534),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.popover","popover-tooltip","re-com.popover/popover-tooltip",13188799,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.row-button","tooltip","re-com.row-button/tooltip",983881994),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.row-button","button","re-com.row-button/button",-12035725),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.row-button","icon","re-com.row-button/icon",-608782567)], null)], null)], null)], null);
re_com.buttons.row_button_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.buttons.row_button_part_structure):null);
re_com.buttons.row_button_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.buttons.row_button_parts_desc)):null);
re_com.buttons.row_button_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"default","default",-1987822328),"zmdi-plus",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"the name of the icon.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"For example, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"\"zmdi-plus\""], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"\"zmdi-undo\""], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"mouse-over-row?","mouse-over-row?",-446703882),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"true if the mouse is hovering over the row"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_class_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the button, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the button, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.buttons.row_button_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null),re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.buttons.row_button_part_structure)], 0))):null);
/**
 * a small button containing a material design icon
 */
re_com.buttons.row_button = (function re_com$buttons$row_button(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17482 = arguments.length;
var i__5877__auto___17483 = (0);
while(true){
if((i__5877__auto___17483 < len__5876__auto___17482)){
args__5882__auto__.push((arguments[i__5877__auto___17483]));

var G__17484 = (i__5877__auto___17483 + (1));
i__5877__auto___17483 = G__17484;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.buttons.row_button.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.buttons.row_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__17289){
var map__17290 = p__17289;
var map__17290__$1 = cljs.core.__destructure_map(map__17290);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17290__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17290__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var transition_BANG_ = (function (p1__17286_SHARP_){
var G__17291 = p1__17286_SHARP_;
var G__17291__$1 = (((G__17291 instanceof cljs.core.Keyword))?G__17291.fqn:null);
switch (G__17291__$1) {
case "show":
return cljs.core.reset_BANG_(showing_QMARK_,true);

break;
case "hide":
return cljs.core.reset_BANG_(showing_QMARK_,false);

break;
case "toggle":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17291__$1))));

}
});
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var re_com$buttons$row_button_render__delegate = function (p__17293){
var map__17294 = p__17293;
var map__17294__$1 = cljs.core.__destructure_map(map__17294);
var args = map__17294__$1;
var md_icon_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17294__$1,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-plus");
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var mouse_over_row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,new cljs.core.Keyword(null,"mouse-over-row?","mouse-over-row?",-446703882));
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17294__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.row_button_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.buttons.row_button_part_structure,args);
var tooltip_QMARK_ = re_com.part.get_part(re_com.buttons.row_button_part_structure,args,new cljs.core.Keyword("re-com.row-button","tooltip","re-com.row-button/tooltip",983881994));
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition!","transition!",123167659),transition_BANG_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mouse-over-row?","mouse-over-row?",-446703882),re_com.util.deref_or_value(mouse_over_row_QMARK_),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),re_com.util.deref_or_value(disabled_QMARK_),new cljs.core.Keyword(null,"tooltip?","tooltip?",-642753154),tooltip_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),md_icon_name], null)], null);
var icon_part = part(new cljs.core.Keyword("re-com.row-button","icon","re-com.row-button/icon",-608782567),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/buttons.cljs",new cljs.core.Keyword(null,"line","line",212345235),464], null)),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null)], null));
var button_part = part(new cljs.core.Keyword("re-com.row-button","button","re-com.row-button/button",-12035725),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/buttons.cljs",new cljs.core.Keyword(null,"line","line",212345235),468], null)),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [icon_part], null)], null)], null));
var tooltip_part = part(new cljs.core.Keyword("re-com.row-button","tooltip","re-com.row-button/tooltip",983881994),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/buttons.cljs",new cljs.core.Keyword(null,"line","line",212345235),473], null)),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null)], null));
var popover_part = part(new cljs.core.Keyword("re-com.row-button","popover-tooltip","re-com.row-button/popover-tooltip",1234870534),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/buttons.cljs",new cljs.core.Keyword(null,"line","line",212345235),478], null)),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"label","label",1718410804),tooltip_part,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__5142__auto____$1 = tooltip_position;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"anchor","anchor",1549638489),button_part], null)], null));
if(cljs.core.truth_(tooltip)){
} else {
transition_BANG_(new cljs.core.Keyword(null,"hide","hide",-596913169));
}

return part(new cljs.core.Keyword("re-com.row-button","wrapper","re-com.row-button/wrapper",-1362685096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null),new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(tooltip_QMARK_)?popover_part:button_part)], null)], null));
}
};
var re_com$buttons$row_button_render = function (var_args){
var p__17293 = null;
if (arguments.length > 0) {
var G__17496__i = 0, G__17496__a = new Array(arguments.length -  0);
while (G__17496__i < G__17496__a.length) {G__17496__a[G__17496__i] = arguments[G__17496__i + 0]; ++G__17496__i;}
  p__17293 = new cljs.core.IndexedSeq(G__17496__a,0,null);
} 
return re_com$buttons$row_button_render__delegate.call(this,p__17293);};
re_com$buttons$row_button_render.cljs$lang$maxFixedArity = 0;
re_com$buttons$row_button_render.cljs$lang$applyTo = (function (arglist__17497){
var p__17293 = cljs.core.seq(arglist__17497);
return re_com$buttons$row_button_render__delegate(p__17293);
});
re_com$buttons$row_button_render.cljs$core$IFn$_invoke$arity$variadic = re_com$buttons$row_button_render__delegate;
return re_com$buttons$row_button_render;
})()
;
}));

(re_com.buttons.row_button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.buttons.row_button.cljs$lang$applyTo = (function (seq17288){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17288));
}));

re_com.buttons.hyperlink_part_structure = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.hyperlink","wrapper","re-com.hyperlink/wrapper",-341099269),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.hyperlink","popover-tooltip","re-com.hyperlink/popover-tooltip",917426935),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.popover","popover-tooltip","re-com.popover/popover-tooltip",13188799,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.hyperlink","tooltip","re-com.hyperlink/tooltip",-275621155),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.hyperlink","link","re-com.hyperlink/link",-216921323),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a","a",-2123407586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.hyperlink","label","re-com.hyperlink/label",871577683),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null)], null);
re_com.buttons.hyperlink_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.buttons.hyperlink_part_structure):null);
re_com.buttons.hyperlink_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.buttons.hyperlink_parts_desc)):null);
re_com.buttons.hyperlink_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_class_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the hyperlink, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the hyperlink, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the hyperlink, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.buttons.hyperlink_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null),re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.buttons.hyperlink_part_structure)], 0))):null);
/**
 * Renders an underlined text hyperlink component.
 * This is very similar to the button component above but styled to looks like a hyperlink.
 * Useful for providing button functionality for less important functions, e.g. Cancel
 */
re_com.buttons.hyperlink = (function re_com$buttons$hyperlink(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17506 = arguments.length;
var i__5877__auto___17507 = (0);
while(true){
if((i__5877__auto___17507 < len__5876__auto___17506)){
args__5882__auto__.push((arguments[i__5877__auto___17507]));

var G__17508 = (i__5877__auto___17507 + (1));
i__5877__auto___17507 = G__17508;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.buttons.hyperlink.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.buttons.hyperlink.cljs$core$IFn$_invoke$arity$variadic = (function (p__17305){
var map__17306 = p__17305;
var map__17306__$1 = cljs.core.__destructure_map(map__17306);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17306__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17306__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var transition_BANG_ = (function (p1__17299_SHARP_){
var G__17308 = p1__17299_SHARP_;
var G__17308__$1 = (((G__17308 instanceof cljs.core.Keyword))?G__17308.fqn:null);
switch (G__17308__$1) {
case "show":
return cljs.core.reset_BANG_(showing_QMARK_,true);

break;
case "hide":
return cljs.core.reset_BANG_(showing_QMARK_,false);

break;
case "toggle":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17308__$1))));

}
});
return (function() { 
var re_com$buttons$hyperlink_render__delegate = function (p__17309){
var map__17310 = p__17309;
var map__17310__$1 = cljs.core.__destructure_map(map__17310);
var args = map__17310__$1;
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17310__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17310__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17310__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.hyperlink_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.buttons.hyperlink_part_structure,args);
var tooltip_QMARK_ = re_com.part.get_part(re_com.buttons.hyperlink_part_structure,args,new cljs.core.Keyword("re-com.hyperlink","tooltip","re-com.hyperlink/tooltip",-275621155));
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition!","transition!",123167659),transition_BANG_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"tooltip?","tooltip?",-642753154),tooltip_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null)], null);
var label_part = part(new cljs.core.Keyword("re-com.hyperlink","label","re-com.hyperlink/label",871577683),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null)], null));
var link_part = part(new cljs.core.Keyword("re-com.hyperlink","link","re-com.hyperlink/link",-216921323),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label_part], null)], null)], null));
var tooltip_part = part(new cljs.core.Keyword("re-com.hyperlink","tooltip","re-com.hyperlink/tooltip",-275621155),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null)], null));
var popover_part = part(new cljs.core.Keyword("re-com.hyperlink","popover-tooltip","re-com.hyperlink/popover-tooltip",917426935),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/buttons.cljs",new cljs.core.Keyword(null,"line","line",212345235),565], null)),new cljs.core.Keyword(null,"label","label",1718410804),tooltip_part,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__5142__auto____$1 = tooltip_position;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"anchor","anchor",1549638489),link_part], null)], null));
if(cljs.core.truth_(tooltip_QMARK_)){
} else {
transition_BANG_(new cljs.core.Keyword(null,"hide","hide",-596913169));
}

return part(new cljs.core.Keyword("re-com.hyperlink","wrapper","re-com.hyperlink/wrapper",-341099269),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),re_com.debug.__GT_attr(args)], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$1 = new cljs.core.Keyword(null,"debug-as","debug-as",283322354).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})(),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(tooltip_QMARK_)?popover_part:link_part)], null)], null));
}
};
var re_com$buttons$hyperlink_render = function (var_args){
var p__17309 = null;
if (arguments.length > 0) {
var G__17518__i = 0, G__17518__a = new Array(arguments.length -  0);
while (G__17518__i < G__17518__a.length) {G__17518__a[G__17518__i] = arguments[G__17518__i + 0]; ++G__17518__i;}
  p__17309 = new cljs.core.IndexedSeq(G__17518__a,0,null);
} 
return re_com$buttons$hyperlink_render__delegate.call(this,p__17309);};
re_com$buttons$hyperlink_render.cljs$lang$maxFixedArity = 0;
re_com$buttons$hyperlink_render.cljs$lang$applyTo = (function (arglist__17519){
var p__17309 = cljs.core.seq(arglist__17519);
return re_com$buttons$hyperlink_render__delegate(p__17309);
});
re_com$buttons$hyperlink_render.cljs$core$IFn$_invoke$arity$variadic = re_com$buttons$hyperlink_render__delegate;
return re_com$buttons$hyperlink_render;
})()
;
}));

(re_com.buttons.hyperlink.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.buttons.hyperlink.cljs$lang$applyTo = (function (seq17304){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17304));
}));

re_com.buttons.hyperlink_href_part_structure = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.hyperlink-href","wrapper","re-com.hyperlink-href/wrapper",983151877),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.hyperlink-href","popover-tooltip","re-com.hyperlink-href/popover-tooltip",-847709479),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.popover","popover-tooltip","re-com.popover/popover-tooltip",13188799,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.hyperlink-href","tooltip","re-com.hyperlink-href/tooltip",-1098927369),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.hyperlink-href","link","re-com.hyperlink-href/link",1113604859),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a","a",-2123407586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.hyperlink-href","label","re-com.hyperlink-href/label",-1027608503),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null)], null);
re_com.buttons.hyperlink_href_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.buttons.hyperlink_href_part_structure):null);
re_com.buttons.hyperlink_href_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.buttons.hyperlink_href_parts_desc)):null);
re_com.buttons.hyperlink_href_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"if specified, the link target URL"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"_self",new cljs.core.Keyword(null,"type","type",1174270348),"string | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_atom_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"one of \"_self\" or \"_blank\""], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"below-center","below-center",-2126885397),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.position_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"relative to this anchor. One of ",re_com.validate.position_options_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't click the button"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_class_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the hyperlink, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the hyperlink, not the wrapping div)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to the hyperlink, not the wrapping div)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(re_com.buttons.hyperlink_href_parts),new cljs.core.Keyword(null,"description","description",-1428560544),"See Parts section below."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging. Source code coordinates map containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":file"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":line"], null),". See 'Debugging'."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Used in dev builds to assist with debugging, when one component is used implement another component, and we want the implementation component to masquerade as the original component in debug output, such as component stacks. A map optionally containing keys",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":component"], null),"and",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":args"], null),"."], null)], null)], null),re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.buttons.hyperlink_href_part_structure)], 0))):null);
/**
 * Renders an underlined text hyperlink component.
 * This is very similar to the button component above but styled to looks like a hyperlink.
 * Useful for providing button functionality for less important functions, e.g. Cancel
 */
re_com.buttons.hyperlink_href = (function re_com$buttons$hyperlink_href(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17527 = arguments.length;
var i__5877__auto___17528 = (0);
while(true){
if((i__5877__auto___17528 < len__5876__auto___17527)){
args__5882__auto__.push((arguments[i__5877__auto___17528]));

var G__17529 = (i__5877__auto___17528 + (1));
i__5877__auto___17528 = G__17529;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.buttons.hyperlink_href.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.buttons.hyperlink_href.cljs$core$IFn$_invoke$arity$variadic = (function (p__17343){
var map__17346 = p__17343;
var map__17346__$1 = cljs.core.__destructure_map(map__17346);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17346__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17346__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var showing_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var transition_BANG_ = (function (p1__17335_SHARP_){
var G__17348 = p1__17335_SHARP_;
var G__17348__$1 = (((G__17348 instanceof cljs.core.Keyword))?G__17348.fqn:null);
switch (G__17348__$1) {
case "show":
return cljs.core.reset_BANG_(showing_QMARK_,true);

break;
case "hide":
return cljs.core.reset_BANG_(showing_QMARK_,false);

break;
case "toggle":
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,cljs.core.not);

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17348__$1))));

}
});
return (function() { 
var re_com$buttons$hyperlink_href_render__delegate = function (p__17349){
var map__17350 = p__17349;
var map__17350__$1 = cljs.core.__destructure_map(map__17350);
var args = map__17350__$1;
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17350__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17350__$1,new cljs.core.Keyword(null,"target","target",253001721));
var tooltip_position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17350__$1,new cljs.core.Keyword(null,"tooltip-position","tooltip-position",936197013));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17350__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.buttons.hyperlink_href_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var href__$1 = re_com.util.deref_or_value(href);
var target__$1 = re_com.util.deref_or_value(target);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.buttons.hyperlink_href_part_structure,args);
var tooltip_QMARK_ = re_com.part.get_part(re_com.buttons.hyperlink_href_part_structure,args,new cljs.core.Keyword("re-com.hyperlink-href","tooltip","re-com.hyperlink-href/tooltip",-1098927369));
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"transition!","transition!",123167659),transition_BANG_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"tooltip?","tooltip?",-642753154),tooltip_QMARK_,new cljs.core.Keyword(null,"href","href",-793805698),href__$1,new cljs.core.Keyword(null,"target","target",253001721),target__$1], null)], null);
var label_part = part(new cljs.core.Keyword("re-com.hyperlink-href","label","re-com.hyperlink-href/label",-1027608503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null)], null));
var link_part = part(new cljs.core.Keyword("re-com.hyperlink-href","link","re-com.hyperlink-href/link",1113604859),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [label_part], null)], null)], null));
var tooltip_part = part(new cljs.core.Keyword("re-com.hyperlink-href","tooltip","re-com.hyperlink-href/tooltip",-1098927369),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null)], null));
var popover_part = part(new cljs.core.Keyword("re-com.hyperlink-href","popover-tooltip","re-com.hyperlink-href/popover-tooltip",-847709479),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.popover.popover_tooltip,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/buttons.cljs",new cljs.core.Keyword(null,"line","line",212345235),656], null)),new cljs.core.Keyword(null,"label","label",1718410804),tooltip_part,new cljs.core.Keyword(null,"position","position",-2011731912),(function (){var or__5142__auto____$1 = tooltip_position;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.Keyword(null,"below-center","below-center",-2126885397);
}
})(),new cljs.core.Keyword(null,"showing?","showing?",2094921488),showing_QMARK_,new cljs.core.Keyword(null,"anchor","anchor",1549638489),link_part], null)], null));
if(cljs.core.truth_(tooltip_QMARK_)){
} else {
transition_BANG_(new cljs.core.Keyword(null,"hide","hide",-596913169));
}

return part(new cljs.core.Keyword("re-com.hyperlink-href","wrapper","re-com.hyperlink-href/wrapper",983151877),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"attr","attr",-604132353),re_com.debug.__GT_attr(args)], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$1 = new cljs.core.Keyword(null,"debug-as","debug-as",283322354).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})(),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(tooltip_QMARK_)?popover_part:link_part)], null)], null));
}
};
var re_com$buttons$hyperlink_href_render = function (var_args){
var p__17349 = null;
if (arguments.length > 0) {
var G__17540__i = 0, G__17540__a = new Array(arguments.length -  0);
while (G__17540__i < G__17540__a.length) {G__17540__a[G__17540__i] = arguments[G__17540__i + 0]; ++G__17540__i;}
  p__17349 = new cljs.core.IndexedSeq(G__17540__a,0,null);
} 
return re_com$buttons$hyperlink_href_render__delegate.call(this,p__17349);};
re_com$buttons$hyperlink_href_render.cljs$lang$maxFixedArity = 0;
re_com$buttons$hyperlink_href_render.cljs$lang$applyTo = (function (arglist__17541){
var p__17349 = cljs.core.seq(arglist__17541);
return re_com$buttons$hyperlink_href_render__delegate(p__17349);
});
re_com$buttons$hyperlink_href_render.cljs$core$IFn$_invoke$arity$variadic = re_com$buttons$hyperlink_href_render__delegate;
return re_com$buttons$hyperlink_href_render;
})()
;
}));

(re_com.buttons.hyperlink_href.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.buttons.hyperlink_href.cljs$lang$applyTo = (function (seq17337){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17337));
}));


//# sourceMappingURL=re_com.buttons.js.map
