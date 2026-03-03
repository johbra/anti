goog.provide('re_com.modal_panel');
re_com.modal_panel.part_structure = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.modal-panel","wrapper","re-com.modal-panel/wrapper",-1470202695),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Outer wrapper of the modal panel, backdrop, everything."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.modal-panel","backdrop","re-com.modal-panel/backdrop",-815444448),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Semi-transparent backdrop, which prevents other user interaction."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.modal-panel","child-container","re-com.modal-panel/child-container",-1347450892),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632)], null)], null)], null);
re_com.modal_panel.modal_panel_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.modal_panel.part_structure):null);
re_com.modal_panel.modal_panel_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.modal_panel.modal_panel_parts_desc)):null);
re_com.modal_panel.modal_panel_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"string | hiccup",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.string_or_hiccup_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"hiccup to be centered within in the browser window"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"if true, wrap ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":child"], null)," in a white, rounded panel"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"black",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS color of backdrop"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),0.6,new cljs.core.Keyword(null,"type","type",1174270348),"double | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"opacity of backdrop from:",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"0.0 (transparent) to 1.0 (opaque)"], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a function which takes no params and returns nothing. Called when the backdrop is clicked"], null),re_com.args.pre,re_com.args.theme,re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.modal_panel.modal_panel_parts),re_com.args.src,re_com.args.debug_as], null):null);
/**
 * Renders a modal window centered on screen. A dark transparent backdrop sits between this and the underlying
 * main window to prevent UI interactivity and place user focus on the modal window.
 * Parameters:
 *  - child:  The message to display in the modal (a string or a hiccup vector or function returning a hiccup vector)
 */
re_com.modal_panel.modal_panel = (function re_com$modal_panel$modal_panel(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18024 = arguments.length;
var i__5877__auto___18025 = (0);
while(true){
if((i__5877__auto___18025 < len__5876__auto___18024)){
args__5882__auto__.push((arguments[i__5877__auto___18025]));

var G__18026 = (i__5877__auto___18025 + (1));
i__5877__auto___18025 = G__18026;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.modal_panel.modal_panel.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.modal_panel.modal_panel.cljs$core$IFn$_invoke$arity$variadic = (function (p__18010){
var map__18011 = p__18010;
var map__18011__$1 = cljs.core.__destructure_map(map__18011);
var args = map__18011__$1;
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18011__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18011__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var re_com$modal_panel$modal_panel_render__delegate = function (p__18014){
var map__18016 = p__18014;
var map__18016__$1 = cljs.core.__destructure_map(map__18016);
var args__$1 = map__18016__$1;
var child = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18016__$1,new cljs.core.Keyword(null,"child","child",623967545));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18016__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var wrap_nicely_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18016__$1,new cljs.core.Keyword(null,"wrap-nicely?","wrap-nicely?",85012288),true);
var backdrop_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18016__$1,new cljs.core.Keyword(null,"backdrop-opacity","backdrop-opacity",1467395653),0.6);
var backdrop_color = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18016__$1,new cljs.core.Keyword(null,"backdrop-color","backdrop-color",1921200717),"black");
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18016__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18016__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18016__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18016__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var backdrop_on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18016__$1,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.modal_panel.modal_panel_args_desc),args__$1));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.modal_panel.part_structure,args__$1);
var re_com_ctx = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrap","wrap",851669987),(cljs.core.truth_(wrap_nicely_QMARK_)?new cljs.core.Keyword(null,"nicely","nicely",2127638739):new cljs.core.Keyword(null,"default","default",-1987822328))], null)], null);
return part(new cljs.core.Keyword("re-com.modal-panel","wrapper","re-com.modal-panel/wrapper",-1470202695),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument((function (){var G__18017 = cljs.core.PersistentArrayMap.EMPTY;
var G__18017__$1 = (cljs.core.truth_(class$)?re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(G__18017,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class$], 0)):G__18017);
var G__18017__$2 = (cljs.core.truth_(style)?re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(G__18017__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)):G__18017__$1);
if(cljs.core.truth_(attr)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18017__$2,new cljs.core.Keyword(null,"attr","attr",-604132353),attr);
} else {
return G__18017__$2;
}
})(),args__$1),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$1 = debug_as;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})(),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.modal-panel","backdrop","re-com.modal-panel/backdrop",-815444448),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),backdrop_color,new cljs.core.Keyword(null,"opacity","opacity",397153780),backdrop_opacity], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(cljs.core.truth_(backdrop_on_click)){
(backdrop_on_click.cljs$core$IFn$_invoke$arity$0 ? backdrop_on_click.cljs$core$IFn$_invoke$arity$0() : backdrop_on_click.call(null));
} else {
}

event.preventDefault();

event.stopPropagation();

return null;
})], null)], null)], null)),part(new cljs.core.Keyword("re-com.modal-panel","child-container","re-com.modal-panel/child-container",-1347450892),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [child], null)], null)], null))], null)], null)], null));
}
};
var re_com$modal_panel$modal_panel_render = function (var_args){
var p__18014 = null;
if (arguments.length > 0) {
var G__18030__i = 0, G__18030__a = new Array(arguments.length -  0);
while (G__18030__i < G__18030__a.length) {G__18030__a[G__18030__i] = arguments[G__18030__i + 0]; ++G__18030__i;}
  p__18014 = new cljs.core.IndexedSeq(G__18030__a,0,null);
} 
return re_com$modal_panel$modal_panel_render__delegate.call(this,p__18014);};
re_com$modal_panel$modal_panel_render.cljs$lang$maxFixedArity = 0;
re_com$modal_panel$modal_panel_render.cljs$lang$applyTo = (function (arglist__18031){
var p__18014 = cljs.core.seq(arglist__18031);
return re_com$modal_panel$modal_panel_render__delegate(p__18014);
});
re_com$modal_panel$modal_panel_render.cljs$core$IFn$_invoke$arity$variadic = re_com$modal_panel$modal_panel_render__delegate;
return re_com$modal_panel$modal_panel_render;
})()
;
}));

(re_com.modal_panel.modal_panel.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.modal_panel.modal_panel.cljs$lang$applyTo = (function (seq17966){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17966));
}));


//# sourceMappingURL=re_com.modal_panel.js.map
