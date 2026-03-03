goog.provide('re_com.error_modal');
re_com.error_modal.close_button = (function re_com$error_modal$close_button(_){
var hover_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (p__18035){
var map__18036 = p__18035;
var map__18036__$1 = cljs.core.__destructure_map(map__18036);
var props = map__18036__$1;
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18036__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reset_BANG_,hover_QMARK_,true),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reset_BANG_,hover_QMARK_,false),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),"12px 7px 7px 7px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.util.x_button,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),"12px",new cljs.core.Keyword(null,"height","height",1025178622),"12px",new cljs.core.Keyword(null,"hover?","hover?",-1201331489),hover_QMARK_,new cljs.core.Keyword(null,"stroke","stroke",1741823555),(cljs.core.truth_(cljs.core.deref(hover_QMARK_))?"#000000":"#ffffff"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1.2px"], null),props], 0))], null)], null);
});
});
re_com.error_modal.error_modal = (function re_com$error_modal$error_modal(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18049 = arguments.length;
var i__5877__auto___18050 = (0);
while(true){
if((i__5877__auto___18050 < len__5876__auto___18049)){
args__5882__auto__.push((arguments[i__5877__auto___18050]));

var G__18051 = (i__5877__auto___18050 + (1));
i__5877__auto___18050 = G__18051;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.error_modal.error_modal.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.error_modal.error_modal.cljs$core$IFn$_invoke$arity$variadic = (function (p__18040){
var map__18041 = p__18040;
var map__18041__$1 = cljs.core.__destructure_map(map__18041);
var args = map__18041__$1;
var closeable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18041__$1,new cljs.core.Keyword(null,"closeable?","closeable?",1490064409),true);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var engineers_notified_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18041__$1,new cljs.core.Keyword(null,"engineers-notified?","engineers-notified?",1421448285),true);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var heading = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"heading","heading",-1312171873));
var bug_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18041__$1,new cljs.core.Keyword(null,"bug?","bug?",1202760128),true);
var implications_title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18041__$1,new cljs.core.Keyword(null,"implications-title","implications-title",-936575167),"Implications");
var undone_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"undone?","undone?",-1342458015));
var implications = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"implications","implications",-1275270911));
var what_to_do = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"what-to-do","what-to-do",-1372507613));
var triangle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"triangle","triangle",-1828376667));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var inner_wrapper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"inner-wrapper","inner-wrapper",1366997544));
var proceedable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"proceedable?","proceedable?",1701539112));
var instructions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"instructions","instructions",1724333802));
var ask_to_report_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"ask-to-report?","ask-to-report?",-870526709));
var what_to_do_title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18041__$1,new cljs.core.Keyword(null,"what-to-do-title","what-to-do-title",1255991148),"What Should You Do Now?");
var what_happened = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"what-happened","what-happened",1302018349));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"header","header",119441134));
var modal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"modal","modal",-1031880850));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18041__$1,new cljs.core.Keyword(null,"title","title",636505583),"Sorry, you've hit a bug");
var details_title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18041__$1,new cljs.core.Keyword(null,"details-title","details-title",634180784),"Low-level Details (for developers):");
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var top_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"top-bar","top-bar",-1709393391));
var details = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"details","details",1956795411));
var what_happened_title = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18041__$1,new cljs.core.Keyword(null,"what-happened-title","what-happened-title",-1667989325),"What Just Happened?");
var defaults_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18041__$1,new cljs.core.Keyword(null,"defaults?","defaults?",-972070733),true);
var backdrop_on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426));
var severity = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18041__$1,new cljs.core.Keyword(null,"severity","severity",175684886),new cljs.core.Keyword(null,"error","error",-978969032));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var context = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var title_wrapper = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"title-wrapper","title-wrapper",-118118185));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18041__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var theme__$1 = re_com.theme.comp(pre_theme,theme);
var part = (function() { 
var G__18052__delegate = function (part_value,p__18046){
var map__18047 = p__18046;
var map__18047__$1 = cljs.core.__destructure_map(map__18047);
var opts = map__18047__$1;
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18047__$1,new cljs.core.Keyword(null,"props","props",453281727));
return re_com.part.part.cljs$core$IFn$_invoke$arity$2(part_value,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error-modal","error-modal",214887023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"severity","severity",175684886),severity], null)], null)], null),props], 0))], null)], 0)));
};
var G__18052 = function (part_value,var_args){
var p__18046 = null;
if (arguments.length > 1) {
var G__18053__i = 0, G__18053__a = new Array(arguments.length -  1);
while (G__18053__i < G__18053__a.length) {G__18053__a[G__18053__i] = arguments[G__18053__i + 1]; ++G__18053__i;}
  p__18046 = new cljs.core.IndexedSeq(G__18053__a,0,null);
} 
return G__18052__delegate.call(this,part_value,p__18046);};
G__18052.cljs$lang$maxFixedArity = 1;
G__18052.cljs$lang$applyTo = (function (arglist__18054){
var part_value = cljs.core.first(arglist__18054);
var p__18046 = cljs.core.rest(arglist__18054);
return G__18052__delegate(part_value,p__18046);
});
G__18052.cljs$core$IFn$_invoke$arity$variadic = G__18052__delegate;
return G__18052;
})()
;
var panel_padding = (31);
var arrow_midpoint = (12);
var arrow_side_length = ((2) * arrow_midpoint);
var arrow_points = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arrow_midpoint)+","+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arrow_midpoint)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arrow_side_length)+","+(0)+" "+"0,0");
var what_happened__$1 = (function (){var or__5142__auto__ = what_happened;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(defaults_QMARK_)){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Your app encountered an unexpected error. ","We currently don't have enough information to explain in more detail. ",(cljs.core.truth_(undone_QMARK_)?"Your last action has been undone. ":null),(cljs.core.truth_(engineers_notified_QMARK_)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"Our engineers have been notified. "], null),(cljs.core.truth_(bug_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"This is probably a bug, so we're looking into it."], null):null)], null):(cljs.core.truth_(bug_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"This is probably a bug."], null):null))], null);
} else {
return null;
}
}
})();
var implications__$1 = (function (){var or__5142__auto__ = implications;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(defaults_QMARK_)){
return "This app cannot continue on.";
} else {
return null;
}
}
})();
var what_to_do__$1 = (function (){var or__5142__auto__ = what_to_do;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.truth_(defaults_QMARK_)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(proceedable_QMARK_)?"You might be able to close this pop-up and continue on. Otherwise, restart this app.":"You'll have to restart this app.")));
} else {
return null;
}
}
})();
return part(modal,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","modal","re-com.error-modal/modal",-509132541),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.modal_panel.modal_panel,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"backdrop-on-click","backdrop-on-click",-1460240426),backdrop_on_click,new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-container","child-container",-1781402209),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(50)], null)], null)], null),new cljs.core.Keyword(null,"child","child",623967545),part(inner_wrapper,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","inner-wrapper","re-com.error-modal/inner-wrapper",983710789),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/error_modal.cljs",new cljs.core.Keyword(null,"line","line",212345235),107], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(top_bar,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","top-bar","re-com.error-modal/top-bar",-1123436494),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/error_modal.cljs",new cljs.core.Keyword(null,"line","line",212345235),113], null)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(title_wrapper,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","title-wrapper","re-com.error-modal/title-wrapper",65087224),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.title,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),part(title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","title","re-com.error-modal/title",415747024)], null)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830)], null)], null)),(cljs.core.truth_(closeable_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.error_modal.close_button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close,new cljs.core.Keyword(null,"height","height",1025178622),"12px",new cljs.core.Keyword(null,"width","width",-384071477),"12px"], null)], null):null)], null)], null)], null)),part(triangle,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","triangle","re-com.error-modal/triangle",1747759430),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),re_com.util.px(arrow_side_length),new cljs.core.Keyword(null,"height","height",1025178622),re_com.util.px(arrow_midpoint),new cljs.core.Keyword(null,"transform","transform",1381301764),(""+"translateX("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util.px((panel_padding - arrow_midpoint)))+")")], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",-1486596883),arrow_points], null)], null)], null)], null)], null)),part(body,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","body","re-com.error-modal/body",1623923708),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"size","size",1098693007),"19px"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"size","size",1098693007),"7px"], null)], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(header)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"size","size",1098693007),"19px"], null),part(header,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","header","re-com.error-modal/header",-330889011)], null))], null):null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(action)?part(heading,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","heading","re-com.error-modal/heading",-1816880514),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.title,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level2","level2",-2044031830),new cljs.core.Keyword(null,"label","label",1718410804),part(action,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","action","re-com.error-modal/action",-1300366519)], null))], null)], null)):null),(cljs.core.truth_(instructions)?part(text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","text","re-com.error-modal/text",-1974552512),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.p,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(instructions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","instructions","re-com.error-modal/instructions",1910422731)], null))], null)], null)], null)):null),(cljs.core.truth_(what_happened__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(what_happened_title)?part(heading,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","heading","re-com.error-modal/heading",-1816880514),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.title,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),part(what_happened_title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","what-happened-title","re-com.error-modal/what-happened-title",1602032276)], null)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null)):null),(cljs.core.truth_(what_happened__$1)?part(text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","text","re-com.error-modal/text",-1974552512),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.p,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(what_happened__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","what-happened","re-com.error-modal/what-happened",-492064060)], null))], null)], null)], null)):null)], null):null),(cljs.core.truth_(implications__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),part(heading,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","heading","re-com.error-modal/heading",-1816880514),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.title,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),part(implications_title,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","implications-title","re-com.error-modal/implications-title",-1596820126),new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),implications_title], null)], null)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null)),part(text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","text","re-com.error-modal/text",-1974552512),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.p,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(implications__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","implications","re-com.error-modal/implications",-685417880),new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),implications__$1], null)], null))], null)], null)], null))], null):null),(cljs.core.truth_(what_to_do__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),part(heading,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","heading","re-com.error-modal/heading",-1816880514),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.title,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),part(what_to_do_title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","what-to-do-title","re-com.error-modal/what-to-do-title",667249995)], null)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level3","level3",1192475079)], null)], null)),part(text,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","text","re-com.error-modal/text",-1974552512),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.p,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(what_to_do__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","what-to-do","re-com.error-modal/what-to-do",-2093370362),new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),what_to_do__$1], null)], null))], null)], null)], null))], null):null)], null),(cljs.core.truth_((function (){var or__5142__auto__ = details;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = error;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return context;
}
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),part(heading,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","heading","re-com.error-modal/heading",-1816880514),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),part(details_title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","details-title","re-com.error-modal/details-title",-1950984561)], null)),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"level4","level4",1467985519),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12)], null)], null),part(details_title,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","details-title","re-com.error-modal/details-title",-1950984561)], null))], null)], null)], null)], null)),part(code,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","code","re-com.error-modal/code",-2085263435),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(details)?part(details,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","details","re-com.error-modal/details",1468644914)], null)):null),(cljs.core.truth_(error)?part(error,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","error","re-com.error-modal/error",-1602445355)], null)):null),(cljs.core.truth_(context)?part(context,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","context","re-com.error-modal/context",2073815064)], null)):null)], null)], null)], null))], null):null),(cljs.core.truth_(footer)?part(footer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.error-modal","footer","re-com.error-modal/footer",2026363821)], null)):null)], null)], null)], null))], null)], null)], null))], null)], null));
}));

(re_com.error_modal.error_modal.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.error_modal.error_modal.cljs$lang$applyTo = (function (seq18039){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18039));
}));


//# sourceMappingURL=re_com.error_modal.js.map
