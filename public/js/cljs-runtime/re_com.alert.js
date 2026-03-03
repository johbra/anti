goog.provide('re_com.alert');
re_com.alert.part_structure = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.alert-box","wrapper","re-com.alert-box/wrapper",1740039663),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","v-box","re-com.core/v-box",-1193804420,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.alert-box","header","re-com.alert-box/header",-425376161),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","h-box","re-com.core/h-box",-920824865,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.alert-box","heading-wrapper","re-com.alert-box/heading-wrapper",1026430136),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"h4","h4",2004862993)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.alert-box","heading","re-com.alert-box/heading",-1856563180),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.alert-box","close-button","re-com.alert-box/close-button",-1685239864),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.close-button","close-button","re-com.close-button/close-button",225366466,null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.alert-box","body-wrapper","re-com.alert-box/body-wrapper",-1110142111),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","h-box","re-com.core/h-box",-920824865,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.alert-box","body","re-com.alert-box/body",1651106026),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null)], null);
re_com.alert.alert_box_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.alert.part_structure):null);
re_com.alert.alert_box_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.alert.alert_box_parts_desc)):null);
re_com.alert.alert_box_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"anything",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"a unique identifier, usually an integer or string."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.alert_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"one of ",re_com.validate.alert_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"15px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"padding surounding the alert"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"if true, render a close button. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-close"], null)," should be supplied"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),":id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when the user clicks the close 'X' button. Passed the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id"], null)," of the alert to close"], null)], null),re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.alert.alert_box_parts),re_com.args.src,re_com.args.debug_as], null),re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.alert.part_structure)], 0))):null);
/**
 * Displays one alert box. A close button allows the message to be removed
 */
re_com.alert.alert_box = (function re_com$alert$alert_box(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17054 = arguments.length;
var i__5877__auto___17055 = (0);
while(true){
if((i__5877__auto___17055 < len__5876__auto___17054)){
args__5882__auto__.push((arguments[i__5877__auto___17055]));

var G__17057 = (i__5877__auto___17055 + (1));
i__5877__auto___17055 = G__17057;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.alert.alert_box.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.alert.alert_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__17036){
var map__17037 = p__17036;
var map__17037__$1 = cljs.core.__destructure_map(map__17037);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17037__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17037__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var re_com$alert$alert_box_render__delegate = function (p__17038){
var map__17039 = p__17038;
var map__17039__$1 = cljs.core.__destructure_map(map__17039);
var props = map__17039__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17039__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17039__$1,new cljs.core.Keyword(null,"alert-type","alert-type",405751817),new cljs.core.Keyword(null,"info","info",-317069002));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17039__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17039__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17039__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.alert.alert_box_args_desc),props));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.alert.part_structure,(re_com.part.descend.cljs$core$IFn$_invoke$arity$2 ? re_com.part.descend.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("re-com","alert-box","re-com/alert-box",1832591239)) : re_com.part.descend.call(null,props,new cljs.core.Keyword("re-com","alert-box","re-com/alert-box",1832591239))));
var heading_QMARK_ = re_com.part.get_part(re_com.alert.part_structure,props,new cljs.core.Keyword("re-com.alert-box","heading","re-com.alert-box/heading",-1856563180));
var body_QMARK_ = re_com.part.get_part(re_com.alert.part_structure,props,new cljs.core.Keyword("re-com.alert-box","body","re-com.alert-box/body",1651106026));
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"alert-type","alert-type",405751817),alert_type,new cljs.core.Keyword(null,"body","body",-2049205669),body_QMARK_,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),closeable_QMARK_,new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null)], null);
var close_alert = part(new cljs.core.Keyword("re-com.alert-box","close-button","re-com.alert-box/close-button",-1685239864),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.close_button.close_button,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/alert.cljs",new cljs.core.Keyword(null,"line","line",212345235),81], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(id) : on_close.call(null,id));
}),new cljs.core.Keyword(null,"div-size","div-size",1661625995),(20),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(20)], null)], null));
return part(new cljs.core.Keyword("re-com.alert-box","wrapper","re-com.alert-box/wrapper",1740039663),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument((function (){var G__17040 = cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null));
if(cljs.core.truth_(padding)){
return re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(G__17040,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),padding], null)], 0));
} else {
return G__17040;
}
})(),props),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(heading_QMARK_)?part(new cljs.core.Keyword("re-com.alert-box","header","re-com.alert-box/header",-425376161),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/alert.cljs",new cljs.core.Keyword(null,"line","line",212345235),99], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.alert-box","heading-wrapper","re-com.alert-box/heading-wrapper",1026430136),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/alert.cljs",new cljs.core.Keyword(null,"line","line",212345235),104], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"h4","h4",2004862993),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.alert-box","heading","re-com.alert-box/heading",-1856563180),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null)], null))], null)], null)], null)),(cljs.core.truth_((function (){var and__5140__auto__ = closeable_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return on_close;
} else {
return and__5140__auto__;
}
})())?close_alert:null)], null)], null)], null)):null),(cljs.core.truth_(body_QMARK_)?part(new cljs.core.Keyword("re-com.alert-box","body-wrapper","re-com.alert-box/body-wrapper",-1110142111),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/alert.cljs",new cljs.core.Keyword(null,"line","line",212345235),116], null))], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.alert-box","body","re-com.alert-box/body",1651106026),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1], null)], null)),(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.not(heading_QMARK_);
if(and__5140__auto__){
var and__5140__auto____$1 = closeable_QMARK_;
if(cljs.core.truth_(and__5140__auto____$1)){
return on_close;
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())?close_alert:null)], null)], null)], null)):null)], null)], null)], null));
}
};
var re_com$alert$alert_box_render = function (var_args){
var p__17038 = null;
if (arguments.length > 0) {
var G__17058__i = 0, G__17058__a = new Array(arguments.length -  0);
while (G__17058__i < G__17058__a.length) {G__17058__a[G__17058__i] = arguments[G__17058__i + 0]; ++G__17058__i;}
  p__17038 = new cljs.core.IndexedSeq(G__17058__a,0,null);
} 
return re_com$alert$alert_box_render__delegate.call(this,p__17038);};
re_com$alert$alert_box_render.cljs$lang$maxFixedArity = 0;
re_com$alert$alert_box_render.cljs$lang$applyTo = (function (arglist__17059){
var p__17038 = cljs.core.seq(arglist__17059);
return re_com$alert$alert_box_render__delegate(p__17038);
});
re_com$alert$alert_box_render.cljs$core$IFn$_invoke$arity$variadic = re_com$alert$alert_box_render__delegate;
return re_com$alert$alert_box_render;
})()
;
}));

(re_com.alert.alert_box.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.alert.alert_box.cljs$lang$applyTo = (function (seq17035){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17035));
}));

re_com.alert.alert_list_part_structure = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.alert-list","wrapper","re-com.alert-list/wrapper",-679559358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.alert","alert-list","re-com.alert/alert-list",1789064913,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.alert-list","body","re-com.alert-list/body",-1834880443),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","border","re-com.box/border",1958512590,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.alert-list","scroller","re-com.alert-list/scroller",699334233),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","scroller","re-com.box/scroller",-1253593550,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.alert-list","v-box","re-com.alert-list/v-box",-1321226107),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","v-box","re-com.box/v-box",-981983886,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.alert-box","alert-box","re-com.alert-box/alert-box",-979449061),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.alert","alert-box","re-com.alert/alert-box",1581855100,null),new cljs.core.Keyword(null,"name-label","name-label",1051389241),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Use ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":alert-class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":alert-style"], null)," arguments instead."], null)], null)], null)], null)], null)], null);
re_com.alert.alert_list_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.alert.alert_list_part_structure):null);
re_com.alert.alert_list_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.alert.alert_list_parts_desc)):null);
re_com.alert.alert_list_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"alerts","alerts",-2121664427),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of maps | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.vector_of_maps_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"alerts to render (in the order supplied). Can also be a list of maps"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),":id -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"called when the user clicks the close 'X' button. Passed the alert's ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":id"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS style for maximum list height. By default, it grows forever"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"4px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS padding within the alert"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"border-style","border-style",-485574304),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"1px solid lightgrey",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS border style surrounding the list"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"alert-class","alert-class",97354097),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to each alert-box component)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"alert-style","alert-style",-768560399),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles (applies to each alert-box component)"], null),re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.alert.alert_list_parts),re_com.args.src,re_com.args.debug_as,re_com.args.src], null),re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.alert.alert_list_part_structure)], 0))):null);
/**
 * Displays a list of alert-box components in a v-box. Sample alerts object:
 *   [{:id 2
 *     :alert-type :warning
 *     :heading "Heading"
 *     :body "Body"
 *     :padding "8px"
 *     :closeable? true}
 *    {:id 1
 *     :alert-type :info
 *     :heading "Heading"
 *     :body "Body"}]
 */
re_com.alert.alert_list = (function re_com$alert$alert_list(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17060 = arguments.length;
var i__5877__auto___17061 = (0);
while(true){
if((i__5877__auto___17061 < len__5876__auto___17060)){
args__5882__auto__.push((arguments[i__5877__auto___17061]));

var G__17062 = (i__5877__auto___17061 + (1));
i__5877__auto___17061 = G__17062;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.alert.alert_list.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.alert.alert_list.cljs$core$IFn$_invoke$arity$variadic = (function (p__17042){
var map__17043 = p__17042;
var map__17043__$1 = cljs.core.__destructure_map(map__17043);
var props = map__17043__$1;
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17043__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var border_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17043__$1,new cljs.core.Keyword(null,"border-style","border-style",-485574304));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17043__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17043__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17043__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var alert_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17043__$1,new cljs.core.Keyword(null,"alert-style","alert-style",-768560399));
var alert_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17043__$1,new cljs.core.Keyword(null,"alert-class","alert-class",97354097));
var alerts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17043__$1,new cljs.core.Keyword(null,"alerts","alerts",-2121664427));
var padding = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17043__$1,new cljs.core.Keyword(null,"padding","padding",1660304693),"4px");
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.alert.alert_list_args_desc),props));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var alerts__$1 = re_com.util.deref_or_value(alerts);
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.alert.alert_list_part_structure,(re_com.part.descend.cljs$core$IFn$_invoke$arity$2 ? re_com.part.descend.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("re-com","alert-list","re-com/alert-list",-1180697284)) : re_com.part.descend.call(null,props,new cljs.core.Keyword("re-com","alert-list","re-com/alert-list",-1180697284))));
var re_com__$1 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height,new cljs.core.Keyword(null,"padding","padding",1660304693),padding,new cljs.core.Keyword(null,"border-style","border-style",-485574304),border_style,new cljs.core.Keyword(null,"alert-class","alert-class",97354097),alert_class,new cljs.core.Keyword(null,"alert-style","alert-style",-768560399),alert_style], null)], null);
return part(new cljs.core.Keyword("re-com.alert-list","wrapper","re-com.alert-list/wrapper",-679559358),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument(cljs.core.PersistentArrayMap.EMPTY,props),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"child","child",623967545),part(new cljs.core.Keyword("re-com.alert-list","body","re-com.alert-list/body",-1834880443),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.border,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(props,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),new cljs.core.Keyword(null,"border","border",1444987323),border_style,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"padding","padding",1660304693),padding], 0)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"child","child",623967545),part(new cljs.core.Keyword("re-com.alert-list","scroller","re-com.alert-list/scroller",699334233),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.scroller,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null)], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"child","child",623967545),part(new cljs.core.Keyword("re-com.alert-list","v-box","re-com.alert-list/v-box",-1321226107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com__$1,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__5628__auto__ = (function re_com$alert$iter__17047(s__17048){
return (new cljs.core.LazySeq(null,(function (){
var s__17048__$1 = s__17048;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17048__$1);
if(temp__5823__auto__){
var s__17048__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17048__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__17048__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__17050 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__17049 = (0);
while(true){
if((i__17049 < size__5627__auto__)){
var alert__$1 = cljs.core._nth(c__5626__auto__,i__17049);
cljs.core.chunk_append(b__17050,(function (){var map__17051 = alert__$1;
var map__17051__$1 = cljs.core.__destructure_map(map__17051);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17051__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17051__$1,new cljs.core.Keyword(null,"alert-type","alert-type",405751817));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17051__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17051__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var padding__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17051__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17051__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409));
return part(new cljs.core.Keyword("re-com.alert-list","alert-box","re-com.alert-list/alert-box",-1780043144),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.alert.alert_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),alert_class,new cljs.core.Keyword(null,"style","style",-496642736),alert_style], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"alert-type","alert-type",405751817),alert_type,new cljs.core.Keyword(null,"heading","heading",-1312171873),heading,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"padding","padding",1660304693),padding__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),closeable_QMARK_,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close], null)], null));
})());

var G__17064 = (i__17049 + (1));
i__17049 = G__17064;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17050),re_com$alert$iter__17047(cljs.core.chunk_rest(s__17048__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17050),null);
}
} else {
var alert__$1 = cljs.core.first(s__17048__$2);
return cljs.core.cons((function (){var map__17052 = alert__$1;
var map__17052__$1 = cljs.core.__destructure_map(map__17052);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17052__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var alert_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17052__$1,new cljs.core.Keyword(null,"alert-type","alert-type",405751817));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17052__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17052__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var padding__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17052__$1,new cljs.core.Keyword(null,"padding","padding",1660304693));
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17052__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409));
return part(new cljs.core.Keyword("re-com.alert-list","alert-box","re-com.alert-list/alert-box",-1780043144),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.alert.alert_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"key","key",-1516042587),id,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),alert_class,new cljs.core.Keyword(null,"style","style",-496642736),alert_style], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"alert-type","alert-type",405751817),alert_type,new cljs.core.Keyword(null,"heading","heading",-1312171873),heading,new cljs.core.Keyword(null,"body","body",-2049205669),body,new cljs.core.Keyword(null,"padding","padding",1660304693),padding__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),closeable_QMARK_,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close], null)], null));
})(),re_com$alert$iter__17047(cljs.core.rest(s__17048__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(alerts__$1);
})()], null)], null))], null)], null))], null)], null))], null)], null));
}
}));

(re_com.alert.alert_list.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.alert.alert_list.cljs$lang$applyTo = (function (seq17041){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17041));
}));


//# sourceMappingURL=re_com.alert.js.map
