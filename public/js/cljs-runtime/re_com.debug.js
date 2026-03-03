goog.provide('re_com.debug');
goog.scope(function(){
  re_com.debug.goog$module$goog$object = goog.module.get('goog.object');
});
re_com.debug.log = (function (){var G__16711 = (function (){var G__16712 = re_com.config.log_format;
if((G__16712 == null)){
return null;
} else {
return cljs.core.name(G__16712);
}
})();
switch (G__16711) {
case "pr-str":
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(console.log,cljs.core.pr_str);

break;
case "js":
return console.log;

break;
case "pretty":
return cljs.pprint.pprint;

break;
default:
return console.log;

}
})();
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace(clojure.string.replace(cljs.core.last(clojure.string.split.cljs$core$IFn$_invoke$arity$2(component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_(args)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"src","src",-1651076051),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.Keyword(null,"theme","theme",-1247880880),new cljs.core.Keyword(null,"cell","cell",764245084),new cljs.core.Keyword(null,"edge","edge",919909153)], 0))));
} else {
return args;
}
});
re_com.debug.log_on_alt_click_STAR_ = (function re_com$debug$log_on_alt_click_STAR_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16778 = arguments.length;
var i__5877__auto___16779 = (0);
while(true){
if((i__5877__auto___16779 < len__5876__auto___16778)){
args__5882__auto__.push((arguments[i__5877__auto___16779]));

var G__16780 = (i__5877__auto___16779 + (1));
i__5877__auto___16779 = G__16780;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return re_com.debug.log_on_alt_click_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(re_com.debug.log_on_alt_click_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (event,p__16715){
var map__16716 = p__16715;
var map__16716__$1 = cljs.core.__destructure_map(map__16716);
var args = map__16716__$1;
if(cljs.core.truth_(event.altKey)){
return (re_com.debug.log.cljs$core$IFn$_invoke$arity$1 ? re_com.debug.log.cljs$core$IFn$_invoke$arity$1(args) : re_com.debug.log.call(null,args));
} else {
return null;
}
}));

(re_com.debug.log_on_alt_click_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.debug.log_on_alt_click_STAR_.cljs$lang$applyTo = (function (seq16713){
var G__16714 = cljs.core.first(seq16713);
var seq16713__$1 = cljs.core.next(seq16713);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16714,seq16713__$1);
}));

re_com.debug.log_on_alt_click = (function re_com$debug$log_on_alt_click(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16781 = arguments.length;
var i__5877__auto___16782 = (0);
while(true){
if((i__5877__auto___16782 < len__5876__auto___16781)){
args__5882__auto__.push((arguments[i__5877__auto___16782]));

var G__16783 = (i__5877__auto___16782 + (1));
i__5877__auto___16782 = G__16783;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return re_com.debug.log_on_alt_click.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(re_com.debug.log_on_alt_click.cljs$core$IFn$_invoke$arity$variadic = (function (p__16719,p__16720){
var map__16721 = p__16719;
var map__16721__$1 = cljs.core.__destructure_map(map__16721);
var args = map__16721__$1;
var map__16722 = p__16720;
var map__16722__$1 = cljs.core.__destructure_map(map__16722);
var show_all_args_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16722__$1,new cljs.core.Keyword(null,"show-all-args?","show-all-args?",1990461040),false);
if(cljs.core.truth_(re_com.config.debug_QMARK_)){
return (function (event){
re_com.debug.log_on_alt_click_STAR_.cljs$core$IFn$_invoke$arity$variadic(event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__16723 = args;
if(cljs.core.not(show_all_args_QMARK_)){
return re_com.debug.loggable_args(G__16723);
} else {
return G__16723;
}
})()], 0));

return null;
});
} else {
if(re_com.config.debug_parts_QMARK_){
return (function (event){
re_com.debug.log_on_alt_click_STAR_.cljs$core$IFn$_invoke$arity$variadic(event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__16724 = args;
if(cljs.core.not(show_all_args_QMARK_)){
return re_com.debug.loggable_args(G__16724);
} else {
return G__16724;
}
})()], 0));

return null;
});
} else {
return null;
}
}
}));

(re_com.debug.log_on_alt_click.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.debug.log_on_alt_click.cljs$lang$applyTo = (function (seq16717){
var G__16718 = cljs.core.first(seq16717);
var seq16717__$1 = cljs.core.next(seq16717);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16718,seq16717__$1);
}));

re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__16725){
var map__16726 = p__16725;
var map__16726__$1 = cljs.core.__destructure_map(map__16726);
var args = map__16726__$1;
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16726__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16726__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if(cljs.core.not(re_com.config.debug_QMARK_)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component()));
}
})();
var rc_args = re_com.debug.loggable_args((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
re_com.debug.goog$module$goog$object.set(el,"__rc-args",rc_args);
} else {
}

var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5823__auto__)){
var user_ref_fn = temp__5823__auto__;
if(cljs.core.fn_QMARK_(user_ref_fn)){
return (user_ref_fn.cljs$core$IFn$_invoke$arity$1 ? user_ref_fn.cljs$core$IFn$_invoke$arity$1(el) : user_ref_fn.call(null,el));
} else {
return null;
}
} else {
return null;
}
});
var map__16727 = src;
var map__16727__$1 = cljs.core.__destructure_map(map__16727);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16727__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16727__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__16728 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__16728,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)));
} else {
return G__16728;
}
}
});
re_com.debug.instrument = (function re_com$debug$instrument(m,props){
if(cljs.core.not(re_com.config.debug_QMARK_)){
return m;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(m,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge,re_com.debug.__GT_attr(props));
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__16730 = arguments.length;
switch (G__16730) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not(el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("stack-spy",component))?stack:cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),re_com.debug.goog$module$goog$object.get(el,"__rc-args")], null))),parent);
}
}));

(re_com.debug.component_stack.cljs$lang$maxFixedArity = 2);

re_com.debug.validate_args_problems_style = (function re_com$debug$validate_args_problems_style(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"32px",new cljs.core.Keyword(null,"min-height","min-height",398480837),"32px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.4em",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"center",new cljs.core.Keyword(null,"background","background",-863952629),"#FF4136"], null);
});
re_com.debug.h1_style = "background: #FF4136; color: white; font-size: 1.4em; padding: 3px";
re_com.debug.h2_style = "background: #0074D9; color: white; padding: 0.25em";
re_com.debug.code_style = "font-family: monospace; font-weight: bold; background: #eee; color: #333; padding: 3px";
re_com.debug.error_style = "font-weight: bold";
re_com.debug.index_style = "font-weight: bold; font-size: 1.1em";
re_com.debug.collision_icon = "\uD83D\uDCA5";
re_com.debug.gear_icon = "\u2699\uFE0F";
re_com.debug.blue_book_icon = "\uD83D\uDCD8";
re_com.debug.confused_icon = "\uD83D\uDE15";
re_com.debug.globe_icon = "\uD83C\uDF10";
re_com.debug.log_component_stack = (function re_com$debug$log_component_stack(stack){
console.groupCollapsed((""+"\u2022 %c Component stack (click me)"),re_com.debug.h2_style);

var seq__16733_16785 = cljs.core.seq(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__16732_SHARP_,p2__16731_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__16731_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__16732_SHARP_ + (1)));
}),stack));
var chunk__16734_16786 = null;
var count__16735_16787 = (0);
var i__16736_16788 = (0);
while(true){
if((i__16736_16788 < count__16735_16787)){
var map__16745_16789 = chunk__16734_16786.cljs$core$IIndexed$_nth$arity$2(null,i__16736_16788);
var map__16745_16790__$1 = cljs.core.__destructure_map(map__16745_16789);
var i_16791 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16745_16790__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_16792 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16745_16790__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_16793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16745_16790__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_16794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16745_16790__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_16795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16745_16790__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_16793)){
if(cljs.core.truth_(src_16794)){
var vec__16746_16796 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_16794,/:/);
var file_16797 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16746_16796,(0),null);
var line_16798 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16746_16796,(1),null);
if(cljs.core.truth_(args_16795)){
console.log((""+"%c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_16791)+"%c "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.gear_icon)+" %c["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_16793)+" ...]%c in file %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_16797)+"%c at line %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_16798)+"%c\n      Parameters: %O\n      DOM: %o"),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_16795,el_16792);
} else {
console.log((""+"%c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_16791)+"%c "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.gear_icon)+" %c["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_16793)+" ...]%c in file %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_16797)+"%c at line %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_16798)+"%c\n      DOM: %o"),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_16792);
}
} else {
console.log((""+"%c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_16791)+"%c "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.gear_icon)+" %c["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_16793)+" ...]%c\n      Parameters: %O\n      DOM: %o"),re_com.debug.index_style,"",re_com.debug.code_style,"",args_16795,el_16792);
}
} else {
console.log((""+"%c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_16791)+"%c "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.globe_icon)+" %o"),re_com.debug.index_style,"",el_16792);
}


var G__16799 = seq__16733_16785;
var G__16800 = chunk__16734_16786;
var G__16801 = count__16735_16787;
var G__16802 = (i__16736_16788 + (1));
seq__16733_16785 = G__16799;
chunk__16734_16786 = G__16800;
count__16735_16787 = G__16801;
i__16736_16788 = G__16802;
continue;
} else {
var temp__5823__auto___16803 = cljs.core.seq(seq__16733_16785);
if(temp__5823__auto___16803){
var seq__16733_16804__$1 = temp__5823__auto___16803;
if(cljs.core.chunked_seq_QMARK_(seq__16733_16804__$1)){
var c__5673__auto___16805 = cljs.core.chunk_first(seq__16733_16804__$1);
var G__16806 = cljs.core.chunk_rest(seq__16733_16804__$1);
var G__16807 = c__5673__auto___16805;
var G__16808 = cljs.core.count(c__5673__auto___16805);
var G__16809 = (0);
seq__16733_16785 = G__16806;
chunk__16734_16786 = G__16807;
count__16735_16787 = G__16808;
i__16736_16788 = G__16809;
continue;
} else {
var map__16749_16810 = cljs.core.first(seq__16733_16804__$1);
var map__16749_16811__$1 = cljs.core.__destructure_map(map__16749_16810);
var i_16812 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749_16811__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_16813 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749_16811__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_16814 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749_16811__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_16815 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749_16811__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_16816 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16749_16811__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_16814)){
if(cljs.core.truth_(src_16815)){
var vec__16750_16819 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(src_16815,/:/);
var file_16820 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750_16819,(0),null);
var line_16821 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16750_16819,(1),null);
if(cljs.core.truth_(args_16816)){
console.log((""+"%c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_16812)+"%c "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.gear_icon)+" %c["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_16814)+" ...]%c in file %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_16820)+"%c at line %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_16821)+"%c\n      Parameters: %O\n      DOM: %o"),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_16816,el_16813);
} else {
console.log((""+"%c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_16812)+"%c "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.gear_icon)+" %c["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_16814)+" ...]%c in file %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_16820)+"%c at line %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_16821)+"%c\n      DOM: %o"),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_16813);
}
} else {
console.log((""+"%c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_16812)+"%c "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.gear_icon)+" %c["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_16814)+" ...]%c\n      Parameters: %O\n      DOM: %o"),re_com.debug.index_style,"",re_com.debug.code_style,"",args_16816,el_16813);
}
} else {
console.log((""+"%c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_16812)+"%c "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.globe_icon)+" %o"),re_com.debug.index_style,"",el_16813);
}


var G__16822 = cljs.core.next(seq__16733_16804__$1);
var G__16823 = null;
var G__16824 = (0);
var G__16825 = (0);
seq__16733_16785 = G__16822;
chunk__16734_16786 = G__16823;
count__16735_16787 = G__16824;
i__16736_16788 = G__16825;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
re_com.debug.log_validate_args_error_problems = (function re_com$debug$log_validate_args_error_problems(problems){
var seq__16753 = cljs.core.seq(problems);
var chunk__16754 = null;
var count__16755 = (0);
var i__16756 = (0);
while(true){
if((i__16756 < count__16755)){
var map__16761 = chunk__16754.cljs$core$IIndexed$_nth$arity$2(null,i__16756);
var map__16761__$1 = cljs.core.__destructure_map(map__16761);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16761__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16761__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16761__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16761__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16761__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__16762_16827 = problem;
var G__16762_16828__$1 = (((G__16762_16827 instanceof cljs.core.Keyword))?G__16762_16827.fqn:null);
switch (G__16762_16828__$1) {
case "unknown":
console.log((""+"\u2022 %cUnknown parameter: %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log((""+"\u2022 %cMissing required parameter: %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)),re_com.debug.error_style,re_com.debug.code_style);

break;
case "ref":
console.log((""+"\u2022 %cParameter %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c expected a reactive atom but got a %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log((""+"\u2022 %cParameter %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c expected %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected))+"%c but got %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log((""+"\u2022 %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))),re_com.debug.error_style);

break;
case "part-top-level-collision":
console.log((""+"\u2022 %cParameter %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c has been passed both as a top-level argument and within %c:parts%c"+"\n  - Re-com doesn't know which value to use for configuring the %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c part. \n  - Please delete one or the other."),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
case "part-top-level-unsupported":
console.log((""+"\u2022 %cParameter %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c has been passed as a top-level argument."+"\n  - This is unsupported. "+"However, it is supported within %c:parts%c \n  - Please declare %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c within the %c:parts%c map."),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
case "part-req-missing":
console.log((""+"\u2022 %cPart %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c is required but undeclared."+"\n - Please declare %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c within the %c:parts%c map."),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__16833 = seq__16753;
var G__16834 = chunk__16754;
var G__16835 = count__16755;
var G__16836 = (i__16756 + (1));
seq__16753 = G__16833;
chunk__16754 = G__16834;
count__16755 = G__16835;
i__16756 = G__16836;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16753);
if(temp__5823__auto__){
var seq__16753__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16753__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16753__$1);
var G__16837 = cljs.core.chunk_rest(seq__16753__$1);
var G__16838 = c__5673__auto__;
var G__16839 = cljs.core.count(c__5673__auto__);
var G__16840 = (0);
seq__16753 = G__16837;
chunk__16754 = G__16838;
count__16755 = G__16839;
i__16756 = G__16840;
continue;
} else {
var map__16763 = cljs.core.first(seq__16753__$1);
var map__16763__$1 = cljs.core.__destructure_map(map__16763);
var problem = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16763__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16763__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16763__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16763__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16763__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__16764_16841 = problem;
var G__16764_16842__$1 = (((G__16764_16841 instanceof cljs.core.Keyword))?G__16764_16841.fqn:null);
switch (G__16764_16842__$1) {
case "unknown":
console.log((""+"\u2022 %cUnknown parameter: %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log((""+"\u2022 %cMissing required parameter: %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)),re_com.debug.error_style,re_com.debug.code_style);

break;
case "ref":
console.log((""+"\u2022 %cParameter %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c expected a reactive atom but got a %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log((""+"\u2022 %cParameter %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c expected %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected))+"%c but got %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log((""+"\u2022 %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))),re_com.debug.error_style);

break;
case "part-top-level-collision":
console.log((""+"\u2022 %cParameter %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c has been passed both as a top-level argument and within %c:parts%c"+"\n  - Re-com doesn't know which value to use for configuring the %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c part. \n  - Please delete one or the other."),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
case "part-top-level-unsupported":
console.log((""+"\u2022 %cParameter %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c has been passed as a top-level argument."+"\n  - This is unsupported. "+"However, it is supported within %c:parts%c \n  - Please declare %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c within the %c:parts%c map."),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
case "part-req-missing":
console.log((""+"\u2022 %cPart %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c is required but undeclared."+"\n - Please declare %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)+"%c within the %c:parts%c map."),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__16848 = cljs.core.next(seq__16753__$1);
var G__16849 = null;
var G__16850 = (0);
var G__16851 = (0);
seq__16753 = G__16848;
chunk__16754 = G__16849;
count__16755 = G__16850;
i__16756 = G__16851;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__16765){
var map__16766 = p__16765;
var map__16766__$1 = cljs.core.__destructure_map(map__16766);
var src = map__16766__$1;
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16766__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16766__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_(re_com.config.root_url_for_compiler_output))))?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.config.root_url_for_compiler_output)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)):null);
console.group((""+"%c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.collision_icon)+" re-com validation error "),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log((""+"\u2022 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.gear_icon)+"%c["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.short_component_name(component_name))+" ...]%c in file %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)+"%c at line %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)+"%c see "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(source_url)),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log((""+"\u2022 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.gear_icon)+"%c["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.short_component_name(component_name))+" ...]%c in file %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)+"%c at line %c"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log((""+"\u2022 To enable clickable source urls, add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c. See https://re-com.day8.com.au/#/config"),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log((""+"\u2022 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.gear_icon)+"%c["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.debug.short_component_name(component_name))+" ...]"),re_com.debug.code_style);

console.log((""+"\u2022 Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"));
}

re_com.debug.log_validate_args_error_problems(problems);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16857 = arguments.length;
var i__5877__auto___16858 = (0);
while(true){
if((i__5877__auto___16858 < len__5876__auto___16857)){
args__5882__auto__.push((arguments[i__5877__auto___16858]));

var G__16859 = (i__5877__auto___16858 + (1));
i__5877__auto___16858 = G__16859;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__16768){
var map__16769 = p__16768;
var map__16769__$1 = cljs.core.__destructure_map(map__16769);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16769__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16769__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16769__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(problems);
var internal_component = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(component);
var internal_args = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(args);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error(element,cljs.core.deref(internal_problems),cljs.core.deref(internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__16861__delegate = function (p__16770){
var map__16771 = p__16770;
var map__16771__$1 = cljs.core.__destructure_map(map__16771);
var problems__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16771__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16771__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16771__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_(internal_problems,problems__$1);

cljs.core.reset_BANG_(internal_component,component__$1);

cljs.core.reset_BANG_(internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style()], null)], 0)),re_com.debug.collision_icon], null);
};
var G__16861 = function (var_args){
var p__16770 = null;
if (arguments.length > 0) {
var G__16862__i = 0, G__16862__a = new Array(arguments.length -  0);
while (G__16862__i < G__16862__a.length) {G__16862__a[G__16862__i] = arguments[G__16862__i + 0]; ++G__16862__i;}
  p__16770 = new cljs.core.IndexedSeq(G__16862__a,0,null);
} 
return G__16861__delegate.call(this,p__16770);};
G__16861.cljs$lang$maxFixedArity = 0;
G__16861.cljs$lang$applyTo = (function (arglist__16863){
var p__16770 = cljs.core.seq(arglist__16863);
return G__16861__delegate(p__16770);
});
G__16861.cljs$core$IFn$_invoke$arity$variadic = G__16861__delegate;
return G__16861;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq16767){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16767));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16864 = arguments.length;
var i__5877__auto___16865 = (0);
while(true){
if((i__5877__auto___16865 < len__5876__auto___16864)){
args__5882__auto__.push((arguments[i__5877__auto___16865]));

var G__16866 = (i__5877__auto___16865 + (1));
i__5877__auto___16865 = G__16866;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__16773){
var map__16774 = p__16773;
var map__16774__$1 = cljs.core.__destructure_map(map__16774);
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16774__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16774__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_(element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref(element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first(el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1(first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__16867__delegate = function (p__16775){
var map__16776 = p__16775;
var map__16776__$1 = cljs.core.__destructure_map(map__16776);
var component__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16776__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16776__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__16867 = function (var_args){
var p__16775 = null;
if (arguments.length > 0) {
var G__16868__i = 0, G__16868__a = new Array(arguments.length -  0);
while (G__16868__i < G__16868__a.length) {G__16868__a[G__16868__i] = arguments[G__16868__i + 0]; ++G__16868__i;}
  p__16775 = new cljs.core.IndexedSeq(G__16868__a,0,null);
} 
return G__16867__delegate.call(this,p__16775);};
G__16867.cljs$lang$maxFixedArity = 0;
G__16867.cljs$lang$applyTo = (function (arglist__16869){
var p__16775 = cljs.core.seq(arglist__16869);
return G__16867__delegate(p__16775);
});
G__16867.cljs$core$IFn$_invoke$arity$variadic = G__16867__delegate;
return G__16867;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq16772){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16772));
}));


//# sourceMappingURL=re_com.debug.js.map
