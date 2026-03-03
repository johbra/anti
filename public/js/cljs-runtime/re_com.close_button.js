goog.provide('re_com.close_button');
re_com.close_button.close_button_part_structure = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.close-button","wrapper","re-com.close-button/wrapper",-1217268950),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.close-button","button","re-com.close-button/button",169310161),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.close-button","icon","re-com.close-button/icon",-656828869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"i","i",-1386841315)], null)], null)], null)], null);
re_com.close_button.close_button_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.close_button.close_button_part_structure):null);
re_com.close_button.close_button_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.close_button.close_button_parts_desc)):null);
re_com.close_button.close_button_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the button is clicked"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"div-size","div-size",1661625995),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(16),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"numeric px size of the div containing the close button (can be 0 because the 'x' button text is absolutely positioned and centered within the div)"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(16),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"numeric px font size of the 'x' button text"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"#ccc",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"HTML color of the 'x' button text"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hover-color","hover-color",663962326),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"#999",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"HTML color of the button text when the mouse is hovering over it"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"what to show in the tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"top-offset","top-offset",1235816245),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"offset the 'x' button text up or down from it's default position in the containing div (can be positive or negative)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"left-offset","left-offset",-331155643),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"offset the 'x' button text left or right from it's default position in the containing div (can be positive or negative)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't click the button"], null),re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.close_button.close_button_parts),re_com.args.src,re_com.args.debug_as], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(re_com.theme.args_desc,re_com.part.describe_args(re_com.close_button.close_button_part_structure))):null);
re_com.close_button.close_button = (function re_com$close_button$close_button(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17026 = arguments.length;
var i__5877__auto___17027 = (0);
while(true){
if((i__5877__auto___17027 < len__5876__auto___17026)){
args__5882__auto__.push((arguments[i__5877__auto___17027]));

var G__17028 = (i__5877__auto___17027 + (1));
i__5877__auto___17027 = G__17028;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.close_button.close_button.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.close_button.close_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__17015){
var map__17016 = p__17015;
var map__17016__$1 = cljs.core.__destructure_map(map__17016);
var props = map__17016__$1;
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17016__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17016__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17016__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var over_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function() { 
var G__17029__delegate = function (p__17017){
var map__17018 = p__17017;
var map__17018__$1 = cljs.core.__destructure_map(map__17018);
var args = map__17018__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17018__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17018__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var left_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17018__$1,new cljs.core.Keyword(null,"left-offset","left-offset",-331155643));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17018__$1,new cljs.core.Keyword(null,"color","color",1011675173),"#ccc");
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17018__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(16));
var div_size = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17018__$1,new cljs.core.Keyword(null,"div-size","div-size",1661625995),(16));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17018__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var top_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17018__$1,new cljs.core.Keyword(null,"top-offset","top-offset",1235816245));
var hover_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17018__$1,new cljs.core.Keyword(null,"hover-color","hover-color",663962326),"#999");
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.close_button.close_button_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.close_button.close_button_part_structure,args);
var re_com_ctx = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"div-size","div-size",1661625995),div_size,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),font_size,new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"hover-color","hover-color",663962326),hover_color,new cljs.core.Keyword(null,"top-offset","top-offset",1235816245),top_offset,new cljs.core.Keyword(null,"left-offset","left-offset",-331155643),left_offset,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK___$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),cljs.core.deref(over_QMARK_)], null)], null);
return part(new cljs.core.Keyword("re-com.close-button","wrapper","re-com.close-button/wrapper",-1217268950),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$1 = debug_as;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args], null);
}
})()], null),args),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/close_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),86], null)),new cljs.core.Keyword(null,"child","child",623967545),part(new cljs.core.Keyword("re-com.close-button","button","re-com.close-button/button",169310161),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.select_keys(args,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),tooltip,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_((function (){var and__5140__auto__ = on_click;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(disabled_QMARK___$1);
} else {
return and__5140__auto__;
}
})())){
(on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));

event.stopPropagation();
} else {
}

return null;
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (event){
cljs.core.reset_BANG_(over_QMARK_,true);

return null;
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (event){
cljs.core.reset_BANG_(over_QMARK_,false);

return null;
})], null)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/close_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),99], null)),new cljs.core.Keyword(null,"child","child",623967545),part(new cljs.core.Keyword("re-com.close-button","icon","re-com.close-button/icon",-656828869),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/close_button.cljs",new cljs.core.Keyword(null,"line","line",212345235),103], null)),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"i","i",-1386841315)], null)], null))], null)], null))], null)], null));
}
};
var G__17029 = function (var_args){
var p__17017 = null;
if (arguments.length > 0) {
var G__17033__i = 0, G__17033__a = new Array(arguments.length -  0);
while (G__17033__i < G__17033__a.length) {G__17033__a[G__17033__i] = arguments[G__17033__i + 0]; ++G__17033__i;}
  p__17017 = new cljs.core.IndexedSeq(G__17033__a,0,null);
} 
return G__17029__delegate.call(this,p__17017);};
G__17029.cljs$lang$maxFixedArity = 0;
G__17029.cljs$lang$applyTo = (function (arglist__17034){
var p__17017 = cljs.core.seq(arglist__17034);
return G__17029__delegate(p__17017);
});
G__17029.cljs$core$IFn$_invoke$arity$variadic = G__17029__delegate;
return G__17029;
})()
;
}));

(re_com.close_button.close_button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.close_button.close_button.cljs$lang$applyTo = (function (seq17014){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17014));
}));


//# sourceMappingURL=re_com.close_button.js.map
