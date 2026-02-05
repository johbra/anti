// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('re_com.debug');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('reagent.impl.component');
goog.require('re_com.config');
goog.require('goog.object');
goog.scope(function(){
re_com.debug.goog$module$goog$object = goog.module.get('goog.object');
});
/**
 * Returns the interesting part of component-name
 */
re_com.debug.short_component_name = (function re_com$debug$short_component_name(component_name){
return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.last.call(null,clojure.string.split.call(null,component_name,/\./)),/_render/,""),/_/,"-");
});
/**
 * Return a version of args which is stripped of uninteresting values, suitable for logging.
 */
re_com.debug.loggable_args = (function re_com$debug$loggable_args(args){
if(cljs.core.map_QMARK_.call(null,args)){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.second),cljs.core.dissoc.call(null,args,new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"panel-1","panel-1",998274139),new cljs.core.Keyword(null,"panel-2","panel-2",244198907),new cljs.core.Keyword(null,"debug-as","debug-as",283322354))));
} else {
return args;
}
});
re_com.debug.__GT_attr = (function re_com$debug$__GT_attr(p__18183){
var map__18184 = p__18183;
var map__18184__$1 = cljs.core.__destructure_map.call(null,map__18184);
var args = map__18184__$1;
var src = cljs.core.get.call(null,map__18184__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var debug_as = cljs.core.get.call(null,map__18184__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
if((!(re_com.config.debug_QMARK_))){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var rc_component = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return re_com.debug.short_component_name.call(null,reagent.impl.component.component_name.call(null,reagent.core.current_component.call(null)));
}
})();
var rc_args = re_com.debug.loggable_args.call(null,(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(debug_as);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return args;
}
})());
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
re_com.debug.goog$module$goog$object.set.call(null,el,"__rc-args",rc_args);
} else {
}

var temp__5825__auto__ = cljs.core.get_in.call(null,args,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"ref","ref",1289896967)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var user_ref_fn = temp__5825__auto__;
if(cljs.core.fn_QMARK_.call(null,user_ref_fn)){
return user_ref_fn.call(null,el);
} else {
return null;
}
} else {
return null;
}
});
var map__18185 = src;
var map__18185__$1 = cljs.core.__destructure_map.call(null,map__18185);
var file = cljs.core.get.call(null,map__18185__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__18185__$1,new cljs.core.Keyword(null,"line","line",212345235));
var G__18186 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn,new cljs.core.Keyword(null,"data-rc","data-rc",1949262543),rc_component], null);
if(cljs.core.truth_(src)){
return cljs.core.assoc.call(null,G__18186,new cljs.core.Keyword(null,"data-rc-src","data-rc-src",-344701880),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''));
} else {
return G__18186;
}
}
});
re_com.debug.component_stack = (function re_com$debug$component_stack(var_args){
var G__18188 = arguments.length;
switch (G__18188) {
case 1:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$1 = (function (el){
return re_com.debug.component_stack.call(null,cljs.core.PersistentVector.EMPTY,el);
}));

(re_com.debug.component_stack.cljs$core$IFn$_invoke$arity$2 = (function (stack,el){
if(cljs.core.not.call(null,el)){
return stack;
} else {
var component = el.dataset.rc;
var parent = el.parentElement;
return re_com.debug.component_stack.call(null,((cljs.core._EQ_.call(null,"stack-spy",component))?stack:cljs.core.conj.call(null,stack,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"el","el",-1618201118),el,new cljs.core.Keyword(null,"src","src",-1651076051),el.dataset.rcSrc,new cljs.core.Keyword(null,"component","component",1555936782),component,new cljs.core.Keyword(null,"args","args",1315556576),re_com.debug.goog$module$goog$object.get.call(null,el,"__rc-args")], null))),parent);
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
console.groupCollapsed("\u2022 %c Component stack (click me)",re_com.debug.h2_style);

var seq__18192_18212 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,(function (p1__18191_SHARP_,p2__18190_SHARP_){
return cljs.core.assoc.call(null,p2__18190_SHARP_,new cljs.core.Keyword(null,"i","i",-1386841315),(p1__18191_SHARP_ + (1)));
}),stack));
var chunk__18193_18213 = null;
var count__18194_18214 = (0);
var i__18195_18215 = (0);
while(true){
if((i__18195_18215 < count__18194_18214)){
var map__18204_18216 = cljs.core._nth.call(null,chunk__18193_18213,i__18195_18215);
var map__18204_18217__$1 = cljs.core.__destructure_map.call(null,map__18204_18216);
var i_18218 = cljs.core.get.call(null,map__18204_18217__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_18219 = cljs.core.get.call(null,map__18204_18217__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_18220 = cljs.core.get.call(null,map__18204_18217__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_18221 = cljs.core.get.call(null,map__18204_18217__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_18222 = cljs.core.get.call(null,map__18204_18217__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_18220)){
if(cljs.core.truth_(src_18221)){
var vec__18205_18223 = clojure.string.split.call(null,src_18221,/:/);
var file_18224 = cljs.core.nth.call(null,vec__18205_18223,(0),null);
var line_18225 = cljs.core.nth.call(null,vec__18205_18223,(1),null);
if(cljs.core.truth_(args_18222)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_18218),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_18220)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_18224),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18225),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_18222,el_18219);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_18218),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_18220)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_18224),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18225),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_18219);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_18218),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_18220)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_18222,el_18219);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_18218),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_18219);
}


var G__18226 = seq__18192_18212;
var G__18227 = chunk__18193_18213;
var G__18228 = count__18194_18214;
var G__18229 = (i__18195_18215 + (1));
seq__18192_18212 = G__18226;
chunk__18193_18213 = G__18227;
count__18194_18214 = G__18228;
i__18195_18215 = G__18229;
continue;
} else {
var temp__5825__auto___18230 = cljs.core.seq.call(null,seq__18192_18212);
if(temp__5825__auto___18230){
var seq__18192_18231__$1 = temp__5825__auto___18230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18192_18231__$1)){
var c__5568__auto___18232 = cljs.core.chunk_first.call(null,seq__18192_18231__$1);
var G__18233 = cljs.core.chunk_rest.call(null,seq__18192_18231__$1);
var G__18234 = c__5568__auto___18232;
var G__18235 = cljs.core.count.call(null,c__5568__auto___18232);
var G__18236 = (0);
seq__18192_18212 = G__18233;
chunk__18193_18213 = G__18234;
count__18194_18214 = G__18235;
i__18195_18215 = G__18236;
continue;
} else {
var map__18208_18237 = cljs.core.first.call(null,seq__18192_18231__$1);
var map__18208_18238__$1 = cljs.core.__destructure_map.call(null,map__18208_18237);
var i_18239 = cljs.core.get.call(null,map__18208_18238__$1,new cljs.core.Keyword(null,"i","i",-1386841315));
var el_18240 = cljs.core.get.call(null,map__18208_18238__$1,new cljs.core.Keyword(null,"el","el",-1618201118));
var component_18241 = cljs.core.get.call(null,map__18208_18238__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src_18242 = cljs.core.get.call(null,map__18208_18238__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var args_18243 = cljs.core.get.call(null,map__18208_18238__$1,new cljs.core.Keyword(null,"args","args",1315556576));
if(cljs.core.truth_(component_18241)){
if(cljs.core.truth_(src_18242)){
var vec__18209_18244 = clojure.string.split.call(null,src_18242,/:/);
var file_18245 = cljs.core.nth.call(null,vec__18209_18244,(0),null);
var line_18246 = cljs.core.nth.call(null,vec__18209_18244,(1),null);
if(cljs.core.truth_(args_18243)){
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_18239),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_18241)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_18245),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18246),"%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",args_18243,el_18240);
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_18239),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_18241)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_18245),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_18246),"%c\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"",el_18240);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_18239),"%c ",re_com.debug.gear_icon," %c[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(component_18241)," ...]%c\n      Parameters: %O\n      DOM: %o"].join(''),re_com.debug.index_style,"",re_com.debug.code_style,"",args_18243,el_18240);
}
} else {
console.log(["%c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i_18239),"%c ",re_com.debug.globe_icon," %o"].join(''),re_com.debug.index_style,"",el_18240);
}


var G__18247 = cljs.core.next.call(null,seq__18192_18231__$1);
var G__18248 = null;
var G__18249 = (0);
var G__18250 = (0);
seq__18192_18212 = G__18247;
chunk__18193_18213 = G__18248;
count__18194_18214 = G__18249;
i__18195_18215 = G__18250;
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
var seq__18251 = cljs.core.seq.call(null,problems);
var chunk__18252 = null;
var count__18253 = (0);
var i__18254 = (0);
while(true){
if((i__18254 < count__18253)){
var map__18259 = cljs.core._nth.call(null,chunk__18252,i__18254);
var map__18259__$1 = cljs.core.__destructure_map.call(null,map__18259);
var problem = cljs.core.get.call(null,map__18259__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__18259__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__18259__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__18259__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__18259__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__18260_18263 = problem;
var G__18260_18264__$1 = (((G__18260_18263 instanceof cljs.core.Keyword))?G__18260_18263.fqn:null);
switch (G__18260_18264__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__18266 = seq__18251;
var G__18267 = chunk__18252;
var G__18268 = count__18253;
var G__18269 = (i__18254 + (1));
seq__18251 = G__18266;
chunk__18252 = G__18267;
count__18253 = G__18268;
i__18254 = G__18269;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__18251);
if(temp__5825__auto__){
var seq__18251__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18251__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__18251__$1);
var G__18270 = cljs.core.chunk_rest.call(null,seq__18251__$1);
var G__18271 = c__5568__auto__;
var G__18272 = cljs.core.count.call(null,c__5568__auto__);
var G__18273 = (0);
seq__18251 = G__18270;
chunk__18252 = G__18271;
count__18253 = G__18272;
i__18254 = G__18273;
continue;
} else {
var map__18261 = cljs.core.first.call(null,seq__18251__$1);
var map__18261__$1 = cljs.core.__destructure_map.call(null,map__18261);
var problem = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"problem","problem",1168155148));
var arg_name = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"arg-name","arg-name",6205923));
var expected = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"expected","expected",1583670997));
var actual = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"actual","actual",107306363));
var validate_fn_result = cljs.core.get.call(null,map__18261__$1,new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497));
var G__18262_18274 = problem;
var G__18262_18275__$1 = (((G__18262_18274 instanceof cljs.core.Keyword))?G__18262_18274.fqn:null);
switch (G__18262_18275__$1) {
case "unknown":
console.log(["\u2022 %cUnknown parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "required":
console.log(["\u2022 %cMissing required parameter: %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name)].join(''),re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn":
console.log(["\u2022 %cParameter %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg_name),"%c expected %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(expected)),"%c but got %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(actual)].join(''),re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style,re_com.debug.error_style,re_com.debug.code_style);

break;
case "validate-fn-map":
console.log(["\u2022 %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(validate_fn_result))].join(''),re_com.debug.error_style);

break;
default:
console.log("\u2022 ",re_com.debug.confused_icon," Unknown problem reported");

}


var G__18277 = cljs.core.next.call(null,seq__18251__$1);
var G__18278 = null;
var G__18279 = (0);
var G__18280 = (0);
seq__18251 = G__18277;
chunk__18252 = G__18278;
count__18253 = G__18279;
i__18254 = G__18280;
continue;
}
} else {
return null;
}
}
break;
}
});
re_com.debug.log_validate_args_error = (function re_com$debug$log_validate_args_error(element,problems,component_name,p__18281){
var map__18282 = p__18281;
var map__18282__$1 = cljs.core.__destructure_map.call(null,map__18282);
var src = map__18282__$1;
var file = cljs.core.get.call(null,map__18282__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__18282__$1,new cljs.core.Keyword(null,"line","line",212345235));
var source_url = (((!(cljs.core.empty_QMARK_.call(null,re_com.config.root_url_for_compiler_output))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.config.root_url_for_compiler_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):null);
console.group(["%c",re_com.debug.collision_icon," re-com validation error "].join(''),re_com.debug.h1_style);

if(cljs.core.truth_(src)){
if(cljs.core.truth_(source_url)){
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),"%c see ",source_url].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style,"");
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]%c in file %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file),"%c at line %c",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"",re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Add %cre-com.config/root-url-for-compiler-output%c to your %c:closure-defines%c to enable clickable source urls"].join(''),re_com.debug.code_style,"",re_com.debug.code_style,"");
}
} else {
console.log(["\u2022 ",re_com.debug.gear_icon,"%c[",re_com.debug.short_component_name.call(null,component_name)," ...]"].join(''),re_com.debug.code_style);

console.log(["\u2022 ",re_com.debug.blue_book_icon," Learn how to add source coordinates to your components at https://re-com.day8.com.au/#/debug"].join(''));
}

re_com.debug.log_validate_args_error_problems.call(null,problems);

re_com.debug.log_component_stack.call(null,re_com.debug.component_stack.call(null,cljs.core.deref.call(null,element)));

return console.groupEnd();
});
re_com.debug.validate_args_error = (function re_com$debug$validate_args_error(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18288 = arguments.length;
var i__5770__auto___18289 = (0);
while(true){
if((i__5770__auto___18289 < len__5769__auto___18288)){
args__5775__auto__.push((arguments[i__5770__auto___18289]));

var G__18290 = (i__5770__auto___18289 + (1));
i__5770__auto___18289 = G__18290;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.validate_args_error.cljs$core$IFn$_invoke$arity$variadic = (function (p__18284){
var map__18285 = p__18284;
var map__18285__$1 = cljs.core.__destructure_map.call(null,map__18285);
var problems = cljs.core.get.call(null,map__18285__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component = cljs.core.get.call(null,map__18285__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args = cljs.core.get.call(null,map__18285__$1,new cljs.core.Keyword(null,"args","args",1315556576));
var element = cljs.core.atom.call(null,null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_.call(null,element,el);
} else {
return null;
}
});
var internal_problems = cljs.core.atom.call(null,problems);
var internal_component = cljs.core.atom.call(null,component);
var internal_args = cljs.core.atom.call(null,args);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"validate-args-error",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
return re_com.debug.log_validate_args_error.call(null,element,cljs.core.deref.call(null,internal_problems),cljs.core.deref.call(null,internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_args)));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$,argv,old_state,snapshot){
return re_com.debug.log_validate_args_error.call(null,element,cljs.core.deref.call(null,internal_problems),cljs.core.deref.call(null,internal_component),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,internal_args)));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__18291__delegate = function (p__18286){
var map__18287 = p__18286;
var map__18287__$1 = cljs.core.__destructure_map.call(null,map__18287);
var problems__$1 = cljs.core.get.call(null,map__18287__$1,new cljs.core.Keyword(null,"problems","problems",2097327077));
var component__$1 = cljs.core.get.call(null,map__18287__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var args__$1 = cljs.core.get.call(null,map__18287__$1,new cljs.core.Keyword(null,"args","args",1315556576));
cljs.core.reset_BANG_.call(null,internal_problems,problems__$1);

cljs.core.reset_BANG_.call(null,internal_component,component__$1);

cljs.core.reset_BANG_.call(null,internal_args,args__$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.merge.call(null,re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(args__$1),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),component__$1,new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"re-com validation error. Look in the DevTools console.",new cljs.core.Keyword(null,"style","style",-496642736),re_com.debug.validate_args_problems_style.call(null)], null)),re_com.debug.collision_icon], null);
};
var G__18291 = function (var_args){
var p__18286 = null;
if (arguments.length > 0) {
var G__18292__i = 0, G__18292__a = new Array(arguments.length -  0);
while (G__18292__i < G__18292__a.length) {G__18292__a[G__18292__i] = arguments[G__18292__i + 0]; ++G__18292__i;}
  p__18286 = new cljs.core.IndexedSeq(G__18292__a,0,null);
} 
return G__18291__delegate.call(this,p__18286);};
G__18291.cljs$lang$maxFixedArity = 0;
G__18291.cljs$lang$applyTo = (function (arglist__18293){
var p__18286 = cljs.core.seq(arglist__18293);
return G__18291__delegate(p__18286);
});
G__18291.cljs$core$IFn$_invoke$arity$variadic = G__18291__delegate;
return G__18291;
})()
], null));
}));

(re_com.debug.validate_args_error.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.validate_args_error.cljs$lang$applyTo = (function (seq18283){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18283));
}));

re_com.debug.stack_spy = (function re_com$debug$stack_spy(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18299 = arguments.length;
var i__5770__auto___18300 = (0);
while(true){
if((i__5770__auto___18300 < len__5769__auto___18299)){
args__5775__auto__.push((arguments[i__5770__auto___18300]));

var G__18301 = (i__5770__auto___18300 + (1));
i__5770__auto___18300 = G__18301;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(re_com.debug.stack_spy.cljs$core$IFn$_invoke$arity$variadic = (function (p__18295){
var map__18296 = p__18295;
var map__18296__$1 = cljs.core.__destructure_map.call(null,map__18296);
var component = cljs.core.get.call(null,map__18296__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src = cljs.core.get.call(null,map__18296__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var element = cljs.core.atom.call(null,null);
var ref_fn = (function (el){
if(cljs.core.truth_(el)){
return cljs.core.reset_BANG_.call(null,element,el);
} else {
return null;
}
});
var log_fn = (function (){
var el = cljs.core.deref.call(null,element);
if(cljs.core.truth_(el)){
var first_child = cljs.core.first.call(null,el.children);
console.group("%c[stack-spy ...]",re_com.debug.code_style);

re_com.debug.log_component_stack.call(null,re_com.debug.component_stack.call(null,first_child));

return console.groupEnd();
} else {
return null;
}
});
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"stack-spy",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),log_fn,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),log_fn,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__18302__delegate = function (p__18297){
var map__18298 = p__18297;
var map__18298__$1 = cljs.core.__destructure_map.call(null,map__18298);
var component__$1 = cljs.core.get.call(null,map__18298__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var src__$1 = cljs.core.get.call(null,map__18298__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),re_com.debug.__GT_attr.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref_fn], null)], null)),component__$1], null);
};
var G__18302 = function (var_args){
var p__18297 = null;
if (arguments.length > 0) {
var G__18303__i = 0, G__18303__a = new Array(arguments.length -  0);
while (G__18303__i < G__18303__a.length) {G__18303__a[G__18303__i] = arguments[G__18303__i + 0]; ++G__18303__i;}
  p__18297 = new cljs.core.IndexedSeq(G__18303__a,0,null);
} 
return G__18302__delegate.call(this,p__18297);};
G__18302.cljs$lang$maxFixedArity = 0;
G__18302.cljs$lang$applyTo = (function (arglist__18304){
var p__18297 = cljs.core.seq(arglist__18304);
return G__18302__delegate(p__18297);
});
G__18302.cljs$core$IFn$_invoke$arity$variadic = G__18302__delegate;
return G__18302;
})()
], null));
}));

(re_com.debug.stack_spy.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.debug.stack_spy.cljs$lang$applyTo = (function (seq18294){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq18294));
}));


//# sourceMappingURL=debug.js.map
