goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___25245 = arguments.length;
var i__5877__auto___25246 = (0);
while(true){
if((i__5877__auto___25246 < len__5876__auto___25245)){
args__5882__auto__.push((arguments[i__5877__auto___25246]));

var G__25247 = (i__5877__auto___25246 + (1));
i__5877__auto___25246 = G__25247;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"%cshadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+"shadow-cljs: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg))], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq24822){
var G__24823 = cljs.core.first(seq24822);
var seq24822__$1 = cljs.core.next(seq24822);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24823,seq24822__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__24828 = cljs.core.seq(sources);
var chunk__24829 = null;
var count__24830 = (0);
var i__24831 = (0);
while(true){
if((i__24831 < count__24830)){
var map__24839 = chunk__24829.cljs$core$IIndexed$_nth$arity$2(null,i__24831);
var map__24839__$1 = cljs.core.__destructure_map(map__24839);
var src = map__24839__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24839__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24839__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24839__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24839__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e24841){var e_25249 = e24841;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_25249);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_25249.message))));
}

var G__25250 = seq__24828;
var G__25251 = chunk__24829;
var G__25252 = count__24830;
var G__25253 = (i__24831 + (1));
seq__24828 = G__25250;
chunk__24829 = G__25251;
count__24830 = G__25252;
i__24831 = G__25253;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24828);
if(temp__5823__auto__){
var seq__24828__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24828__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__24828__$1);
var G__25254 = cljs.core.chunk_rest(seq__24828__$1);
var G__25255 = c__5673__auto__;
var G__25256 = cljs.core.count(c__5673__auto__);
var G__25257 = (0);
seq__24828 = G__25254;
chunk__24829 = G__25255;
count__24830 = G__25256;
i__24831 = G__25257;
continue;
} else {
var map__24843 = cljs.core.first(seq__24828__$1);
var map__24843__$1 = cljs.core.__destructure_map(map__24843);
var src = map__24843__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24843__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24843__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24843__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24843__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js)+"\n//# sourceURL="+cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)));
}catch (e24847){var e_25258 = e24847;
if(shadow.cljs.devtools.client.env.log){
console.error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)),e_25258);
} else {
}

throw (new Error((""+"Failed to load "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)+": "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_25258.message))));
}

var G__25259 = cljs.core.next(seq__24828__$1);
var G__25260 = null;
var G__25261 = (0);
var G__25262 = (0);
seq__24828 = G__25259;
chunk__24829 = G__25260;
count__24830 = G__25261;
i__24831 = G__25262;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call async "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__24848 = cljs.core.seq(js_requires);
var chunk__24849 = null;
var count__24850 = (0);
var i__24851 = (0);
while(true){
if((i__24851 < count__24850)){
var js_ns = chunk__24849.cljs$core$IIndexed$_nth$arity$2(null,i__24851);
var require_str_25264 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_25264);


var G__25265 = seq__24848;
var G__25266 = chunk__24849;
var G__25267 = count__24850;
var G__25268 = (i__24851 + (1));
seq__24848 = G__25265;
chunk__24849 = G__25266;
count__24850 = G__25267;
i__24851 = G__25268;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24848);
if(temp__5823__auto__){
var seq__24848__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24848__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__24848__$1);
var G__25271 = cljs.core.chunk_rest(seq__24848__$1);
var G__25272 = c__5673__auto__;
var G__25273 = cljs.core.count(c__5673__auto__);
var G__25274 = (0);
seq__24848 = G__25271;
chunk__24849 = G__25272;
count__24850 = G__25273;
i__24851 = G__25274;
continue;
} else {
var js_ns = cljs.core.first(seq__24848__$1);
var require_str_25275 = (""+"var "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+" = shadow.js.require(\""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)+"\");");
shadow.cljs.devtools.client.browser.script_eval(require_str_25275);


var G__25276 = cljs.core.next(seq__24848__$1);
var G__25277 = null;
var G__25278 = (0);
var G__25279 = (0);
seq__24848 = G__25276;
chunk__24849 = G__25277;
count__24850 = G__25278;
i__24851 = G__25279;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__24853){
var map__24854 = p__24853;
var map__24854__$1 = cljs.core.__destructure_map(map__24854);
var msg = map__24854__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24854__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24854__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5628__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24855(s__24856){
return (new cljs.core.LazySeq(null,(function (){
var s__24856__$1 = s__24856;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__24856__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var map__24861 = cljs.core.first(xs__6383__auto__);
var map__24861__$1 = cljs.core.__destructure_map(map__24861);
var src = map__24861__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24861__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24861__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5624__auto__ = ((function (s__24856__$1,map__24861,map__24861__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__24854,map__24854__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24855_$_iter__24857(s__24858){
return (new cljs.core.LazySeq(null,((function (s__24856__$1,map__24861,map__24861__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__24854,map__24854__$1,msg,info,reload_info){
return (function (){
var s__24858__$1 = s__24858;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__24858__$1);
if(temp__5823__auto____$1){
var s__24858__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24858__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__24858__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__24860 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__24859 = (0);
while(true){
if((i__24859 < size__5627__auto__)){
var warning = cljs.core._nth(c__5626__auto__,i__24859);
cljs.core.chunk_append(b__24860,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__25283 = (i__24859 + (1));
i__24859 = G__25283;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24860),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24855_$_iter__24857(cljs.core.chunk_rest(s__24858__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24860),null);
}
} else {
var warning = cljs.core.first(s__24858__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24855_$_iter__24857(cljs.core.rest(s__24858__$2)));
}
} else {
return null;
}
break;
}
});})(s__24856__$1,map__24861,map__24861__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__24854,map__24854__$1,msg,info,reload_info))
,null,null));
});})(s__24856__$1,map__24861,map__24861__$1,src,resource_name,warnings,xs__6383__auto__,temp__5823__auto__,map__24854,map__24854__$1,msg,info,reload_info))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(warnings));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__24855(cljs.core.rest(s__24856__$1)));
} else {
var G__25284 = cljs.core.rest(s__24856__$1);
s__24856__$1 = G__25284;
continue;
}
} else {
var G__25285 = cljs.core.rest(s__24856__$1);
s__24856__$1 = G__25285;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__24863_25286 = cljs.core.seq(warnings);
var chunk__24864_25287 = null;
var count__24865_25288 = (0);
var i__24866_25289 = (0);
while(true){
if((i__24866_25289 < count__24865_25288)){
var map__24869_25290 = chunk__24864_25287.cljs$core$IIndexed$_nth$arity$2(null,i__24866_25289);
var map__24869_25291__$1 = cljs.core.__destructure_map(map__24869_25290);
var w_25292 = map__24869_25291__$1;
var msg_25293__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24869_25291__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_25294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24869_25291__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24869_25291__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_25296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24869_25291__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_25296)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_25294)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_25295)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_25293__$1)));


var G__25297 = seq__24863_25286;
var G__25298 = chunk__24864_25287;
var G__25299 = count__24865_25288;
var G__25300 = (i__24866_25289 + (1));
seq__24863_25286 = G__25297;
chunk__24864_25287 = G__25298;
count__24865_25288 = G__25299;
i__24866_25289 = G__25300;
continue;
} else {
var temp__5823__auto___25301 = cljs.core.seq(seq__24863_25286);
if(temp__5823__auto___25301){
var seq__24863_25302__$1 = temp__5823__auto___25301;
if(cljs.core.chunked_seq_QMARK_(seq__24863_25302__$1)){
var c__5673__auto___25303 = cljs.core.chunk_first(seq__24863_25302__$1);
var G__25304 = cljs.core.chunk_rest(seq__24863_25302__$1);
var G__25305 = c__5673__auto___25303;
var G__25306 = cljs.core.count(c__5673__auto___25303);
var G__25307 = (0);
seq__24863_25286 = G__25304;
chunk__24864_25287 = G__25305;
count__24865_25288 = G__25306;
i__24866_25289 = G__25307;
continue;
} else {
var map__24870_25308 = cljs.core.first(seq__24863_25302__$1);
var map__24870_25309__$1 = cljs.core.__destructure_map(map__24870_25308);
var w_25310 = map__24870_25309__$1;
var msg_25311__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24870_25309__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_25312 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24870_25309__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_25313 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24870_25309__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_25314 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24870_25309__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn((""+"BUILD-WARNING in "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_25314)+" at ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_25312)+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_25313)+"]\n\t"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_25311__$1)));


var G__25315 = cljs.core.next(seq__24863_25302__$1);
var G__25316 = null;
var G__25317 = (0);
var G__25318 = (0);
seq__24863_25286 = G__25315;
chunk__24864_25287 = G__25316;
count__24865_25288 = G__25317;
i__24866_25289 = G__25318;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__24852_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__24852_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(rel_new)+"?"))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5140__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5140__auto____$1){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__24872 = node_uri;
G__24872.setQuery(null);

G__24872.setPath(new$);

return G__24872;
})()));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__24873){
var map__24874 = p__24873;
var map__24874__$1 = cljs.core.__destructure_map(map__24874);
var msg = map__24874__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24874__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24874__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__24879 = cljs.core.seq(updates);
var chunk__24881 = null;
var count__24882 = (0);
var i__24883 = (0);
while(true){
if((i__24883 < count__24882)){
var path = chunk__24881.cljs$core$IIndexed$_nth$arity$2(null,i__24883);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__25071_25319 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__25075_25320 = null;
var count__25076_25321 = (0);
var i__25077_25322 = (0);
while(true){
if((i__25077_25322 < count__25076_25321)){
var node_25323 = chunk__25075_25320.cljs$core$IIndexed$_nth$arity$2(null,i__25077_25322);
if(cljs.core.not(node_25323.shadow$old)){
var path_match_25324 = shadow.cljs.devtools.client.browser.match_paths(node_25323.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25324)){
var new_link_25325 = (function (){var G__25103 = node_25323.cloneNode(true);
G__25103.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25324)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__25103;
})();
(node_25323.shadow$old = true);

(new_link_25325.onload = ((function (seq__25071_25319,chunk__25075_25320,count__25076_25321,i__25077_25322,seq__24879,chunk__24881,count__24882,i__24883,new_link_25325,path_match_25324,node_25323,path,map__24874,map__24874__$1,msg,updates,reload_info){
return (function (e){
var seq__25104_25326 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__25106_25327 = null;
var count__25107_25328 = (0);
var i__25108_25329 = (0);
while(true){
if((i__25108_25329 < count__25107_25328)){
var map__25118_25330 = chunk__25106_25327.cljs$core$IIndexed$_nth$arity$2(null,i__25108_25329);
var map__25118_25331__$1 = cljs.core.__destructure_map(map__25118_25330);
var task_25332 = map__25118_25331__$1;
var fn_str_25333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25118_25331__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25118_25331__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25335 = goog.getObjectByName(fn_str_25333,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25334)));

(fn_obj_25335.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25335.cljs$core$IFn$_invoke$arity$2(path,new_link_25325) : fn_obj_25335.call(null,path,new_link_25325));


var G__25336 = seq__25104_25326;
var G__25337 = chunk__25106_25327;
var G__25338 = count__25107_25328;
var G__25339 = (i__25108_25329 + (1));
seq__25104_25326 = G__25336;
chunk__25106_25327 = G__25337;
count__25107_25328 = G__25338;
i__25108_25329 = G__25339;
continue;
} else {
var temp__5823__auto___25340 = cljs.core.seq(seq__25104_25326);
if(temp__5823__auto___25340){
var seq__25104_25341__$1 = temp__5823__auto___25340;
if(cljs.core.chunked_seq_QMARK_(seq__25104_25341__$1)){
var c__5673__auto___25342 = cljs.core.chunk_first(seq__25104_25341__$1);
var G__25343 = cljs.core.chunk_rest(seq__25104_25341__$1);
var G__25344 = c__5673__auto___25342;
var G__25345 = cljs.core.count(c__5673__auto___25342);
var G__25346 = (0);
seq__25104_25326 = G__25343;
chunk__25106_25327 = G__25344;
count__25107_25328 = G__25345;
i__25108_25329 = G__25346;
continue;
} else {
var map__25119_25347 = cljs.core.first(seq__25104_25341__$1);
var map__25119_25348__$1 = cljs.core.__destructure_map(map__25119_25347);
var task_25349 = map__25119_25348__$1;
var fn_str_25350 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25119_25348__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25351 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25119_25348__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25354 = goog.getObjectByName(fn_str_25350,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25351)));

(fn_obj_25354.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25354.cljs$core$IFn$_invoke$arity$2(path,new_link_25325) : fn_obj_25354.call(null,path,new_link_25325));


var G__25355 = cljs.core.next(seq__25104_25341__$1);
var G__25356 = null;
var G__25357 = (0);
var G__25358 = (0);
seq__25104_25326 = G__25355;
chunk__25106_25327 = G__25356;
count__25107_25328 = G__25357;
i__25108_25329 = G__25358;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25323);
});})(seq__25071_25319,chunk__25075_25320,count__25076_25321,i__25077_25322,seq__24879,chunk__24881,count__24882,i__24883,new_link_25325,path_match_25324,node_25323,path,map__24874,map__24874__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25324], 0));

goog.dom.insertSiblingAfter(new_link_25325,node_25323);


var G__25363 = seq__25071_25319;
var G__25364 = chunk__25075_25320;
var G__25365 = count__25076_25321;
var G__25366 = (i__25077_25322 + (1));
seq__25071_25319 = G__25363;
chunk__25075_25320 = G__25364;
count__25076_25321 = G__25365;
i__25077_25322 = G__25366;
continue;
} else {
var G__25367 = seq__25071_25319;
var G__25368 = chunk__25075_25320;
var G__25369 = count__25076_25321;
var G__25370 = (i__25077_25322 + (1));
seq__25071_25319 = G__25367;
chunk__25075_25320 = G__25368;
count__25076_25321 = G__25369;
i__25077_25322 = G__25370;
continue;
}
} else {
var G__25371 = seq__25071_25319;
var G__25372 = chunk__25075_25320;
var G__25373 = count__25076_25321;
var G__25374 = (i__25077_25322 + (1));
seq__25071_25319 = G__25371;
chunk__25075_25320 = G__25372;
count__25076_25321 = G__25373;
i__25077_25322 = G__25374;
continue;
}
} else {
var temp__5823__auto___25375 = cljs.core.seq(seq__25071_25319);
if(temp__5823__auto___25375){
var seq__25071_25376__$1 = temp__5823__auto___25375;
if(cljs.core.chunked_seq_QMARK_(seq__25071_25376__$1)){
var c__5673__auto___25377 = cljs.core.chunk_first(seq__25071_25376__$1);
var G__25378 = cljs.core.chunk_rest(seq__25071_25376__$1);
var G__25379 = c__5673__auto___25377;
var G__25380 = cljs.core.count(c__5673__auto___25377);
var G__25381 = (0);
seq__25071_25319 = G__25378;
chunk__25075_25320 = G__25379;
count__25076_25321 = G__25380;
i__25077_25322 = G__25381;
continue;
} else {
var node_25382 = cljs.core.first(seq__25071_25376__$1);
if(cljs.core.not(node_25382.shadow$old)){
var path_match_25383 = shadow.cljs.devtools.client.browser.match_paths(node_25382.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25383)){
var new_link_25384 = (function (){var G__25123 = node_25382.cloneNode(true);
G__25123.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25383)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__25123;
})();
(node_25382.shadow$old = true);

(new_link_25384.onload = ((function (seq__25071_25319,chunk__25075_25320,count__25076_25321,i__25077_25322,seq__24879,chunk__24881,count__24882,i__24883,new_link_25384,path_match_25383,node_25382,seq__25071_25376__$1,temp__5823__auto___25375,path,map__24874,map__24874__$1,msg,updates,reload_info){
return (function (e){
var seq__25124_25385 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__25126_25386 = null;
var count__25127_25387 = (0);
var i__25128_25388 = (0);
while(true){
if((i__25128_25388 < count__25127_25387)){
var map__25132_25389 = chunk__25126_25386.cljs$core$IIndexed$_nth$arity$2(null,i__25128_25388);
var map__25132_25390__$1 = cljs.core.__destructure_map(map__25132_25389);
var task_25391 = map__25132_25390__$1;
var fn_str_25392 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25132_25390__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25393 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25132_25390__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25394 = goog.getObjectByName(fn_str_25392,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25393)));

(fn_obj_25394.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25394.cljs$core$IFn$_invoke$arity$2(path,new_link_25384) : fn_obj_25394.call(null,path,new_link_25384));


var G__25395 = seq__25124_25385;
var G__25396 = chunk__25126_25386;
var G__25397 = count__25127_25387;
var G__25398 = (i__25128_25388 + (1));
seq__25124_25385 = G__25395;
chunk__25126_25386 = G__25396;
count__25127_25387 = G__25397;
i__25128_25388 = G__25398;
continue;
} else {
var temp__5823__auto___25399__$1 = cljs.core.seq(seq__25124_25385);
if(temp__5823__auto___25399__$1){
var seq__25124_25400__$1 = temp__5823__auto___25399__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25124_25400__$1)){
var c__5673__auto___25401 = cljs.core.chunk_first(seq__25124_25400__$1);
var G__25402 = cljs.core.chunk_rest(seq__25124_25400__$1);
var G__25403 = c__5673__auto___25401;
var G__25404 = cljs.core.count(c__5673__auto___25401);
var G__25405 = (0);
seq__25124_25385 = G__25402;
chunk__25126_25386 = G__25403;
count__25127_25387 = G__25404;
i__25128_25388 = G__25405;
continue;
} else {
var map__25133_25406 = cljs.core.first(seq__25124_25400__$1);
var map__25133_25407__$1 = cljs.core.__destructure_map(map__25133_25406);
var task_25408 = map__25133_25407__$1;
var fn_str_25409 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133_25407__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25410 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25133_25407__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25411 = goog.getObjectByName(fn_str_25409,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25410)));

(fn_obj_25411.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25411.cljs$core$IFn$_invoke$arity$2(path,new_link_25384) : fn_obj_25411.call(null,path,new_link_25384));


var G__25412 = cljs.core.next(seq__25124_25400__$1);
var G__25413 = null;
var G__25414 = (0);
var G__25415 = (0);
seq__25124_25385 = G__25412;
chunk__25126_25386 = G__25413;
count__25127_25387 = G__25414;
i__25128_25388 = G__25415;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25382);
});})(seq__25071_25319,chunk__25075_25320,count__25076_25321,i__25077_25322,seq__24879,chunk__24881,count__24882,i__24883,new_link_25384,path_match_25383,node_25382,seq__25071_25376__$1,temp__5823__auto___25375,path,map__24874,map__24874__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25383], 0));

goog.dom.insertSiblingAfter(new_link_25384,node_25382);


var G__25416 = cljs.core.next(seq__25071_25376__$1);
var G__25417 = null;
var G__25418 = (0);
var G__25419 = (0);
seq__25071_25319 = G__25416;
chunk__25075_25320 = G__25417;
count__25076_25321 = G__25418;
i__25077_25322 = G__25419;
continue;
} else {
var G__25420 = cljs.core.next(seq__25071_25376__$1);
var G__25421 = null;
var G__25422 = (0);
var G__25423 = (0);
seq__25071_25319 = G__25420;
chunk__25075_25320 = G__25421;
count__25076_25321 = G__25422;
i__25077_25322 = G__25423;
continue;
}
} else {
var G__25424 = cljs.core.next(seq__25071_25376__$1);
var G__25425 = null;
var G__25426 = (0);
var G__25427 = (0);
seq__25071_25319 = G__25424;
chunk__25075_25320 = G__25425;
count__25076_25321 = G__25426;
i__25077_25322 = G__25427;
continue;
}
}
} else {
}
}
break;
}


var G__25428 = seq__24879;
var G__25429 = chunk__24881;
var G__25430 = count__24882;
var G__25431 = (i__24883 + (1));
seq__24879 = G__25428;
chunk__24881 = G__25429;
count__24882 = G__25430;
i__24883 = G__25431;
continue;
} else {
var G__25432 = seq__24879;
var G__25433 = chunk__24881;
var G__25434 = count__24882;
var G__25435 = (i__24883 + (1));
seq__24879 = G__25432;
chunk__24881 = G__25433;
count__24882 = G__25434;
i__24883 = G__25435;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__24879);
if(temp__5823__auto__){
var seq__24879__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24879__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__24879__$1);
var G__25436 = cljs.core.chunk_rest(seq__24879__$1);
var G__25437 = c__5673__auto__;
var G__25438 = cljs.core.count(c__5673__auto__);
var G__25439 = (0);
seq__24879 = G__25436;
chunk__24881 = G__25437;
count__24882 = G__25438;
i__24883 = G__25439;
continue;
} else {
var path = cljs.core.first(seq__24879__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__25134_25440 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__25138_25441 = null;
var count__25139_25442 = (0);
var i__25140_25443 = (0);
while(true){
if((i__25140_25443 < count__25139_25442)){
var node_25444 = chunk__25138_25441.cljs$core$IIndexed$_nth$arity$2(null,i__25140_25443);
if(cljs.core.not(node_25444.shadow$old)){
var path_match_25445 = shadow.cljs.devtools.client.browser.match_paths(node_25444.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25445)){
var new_link_25446 = (function (){var G__25173 = node_25444.cloneNode(true);
G__25173.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25445)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__25173;
})();
(node_25444.shadow$old = true);

(new_link_25446.onload = ((function (seq__25134_25440,chunk__25138_25441,count__25139_25442,i__25140_25443,seq__24879,chunk__24881,count__24882,i__24883,new_link_25446,path_match_25445,node_25444,path,seq__24879__$1,temp__5823__auto__,map__24874,map__24874__$1,msg,updates,reload_info){
return (function (e){
var seq__25174_25447 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__25176_25448 = null;
var count__25177_25449 = (0);
var i__25178_25450 = (0);
while(true){
if((i__25178_25450 < count__25177_25449)){
var map__25182_25451 = chunk__25176_25448.cljs$core$IIndexed$_nth$arity$2(null,i__25178_25450);
var map__25182_25452__$1 = cljs.core.__destructure_map(map__25182_25451);
var task_25453 = map__25182_25452__$1;
var fn_str_25454 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25182_25452__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25455 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25182_25452__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25456 = goog.getObjectByName(fn_str_25454,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25455)));

(fn_obj_25456.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25456.cljs$core$IFn$_invoke$arity$2(path,new_link_25446) : fn_obj_25456.call(null,path,new_link_25446));


var G__25457 = seq__25174_25447;
var G__25458 = chunk__25176_25448;
var G__25459 = count__25177_25449;
var G__25460 = (i__25178_25450 + (1));
seq__25174_25447 = G__25457;
chunk__25176_25448 = G__25458;
count__25177_25449 = G__25459;
i__25178_25450 = G__25460;
continue;
} else {
var temp__5823__auto___25461__$1 = cljs.core.seq(seq__25174_25447);
if(temp__5823__auto___25461__$1){
var seq__25174_25462__$1 = temp__5823__auto___25461__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25174_25462__$1)){
var c__5673__auto___25463 = cljs.core.chunk_first(seq__25174_25462__$1);
var G__25464 = cljs.core.chunk_rest(seq__25174_25462__$1);
var G__25465 = c__5673__auto___25463;
var G__25466 = cljs.core.count(c__5673__auto___25463);
var G__25467 = (0);
seq__25174_25447 = G__25464;
chunk__25176_25448 = G__25465;
count__25177_25449 = G__25466;
i__25178_25450 = G__25467;
continue;
} else {
var map__25185_25468 = cljs.core.first(seq__25174_25462__$1);
var map__25185_25469__$1 = cljs.core.__destructure_map(map__25185_25468);
var task_25470 = map__25185_25469__$1;
var fn_str_25471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25185_25469__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25185_25469__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25473 = goog.getObjectByName(fn_str_25471,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25472)));

(fn_obj_25473.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25473.cljs$core$IFn$_invoke$arity$2(path,new_link_25446) : fn_obj_25473.call(null,path,new_link_25446));


var G__25474 = cljs.core.next(seq__25174_25462__$1);
var G__25475 = null;
var G__25476 = (0);
var G__25477 = (0);
seq__25174_25447 = G__25474;
chunk__25176_25448 = G__25475;
count__25177_25449 = G__25476;
i__25178_25450 = G__25477;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25444);
});})(seq__25134_25440,chunk__25138_25441,count__25139_25442,i__25140_25443,seq__24879,chunk__24881,count__24882,i__24883,new_link_25446,path_match_25445,node_25444,path,seq__24879__$1,temp__5823__auto__,map__24874,map__24874__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25445], 0));

goog.dom.insertSiblingAfter(new_link_25446,node_25444);


var G__25478 = seq__25134_25440;
var G__25479 = chunk__25138_25441;
var G__25480 = count__25139_25442;
var G__25481 = (i__25140_25443 + (1));
seq__25134_25440 = G__25478;
chunk__25138_25441 = G__25479;
count__25139_25442 = G__25480;
i__25140_25443 = G__25481;
continue;
} else {
var G__25482 = seq__25134_25440;
var G__25483 = chunk__25138_25441;
var G__25484 = count__25139_25442;
var G__25485 = (i__25140_25443 + (1));
seq__25134_25440 = G__25482;
chunk__25138_25441 = G__25483;
count__25139_25442 = G__25484;
i__25140_25443 = G__25485;
continue;
}
} else {
var G__25486 = seq__25134_25440;
var G__25487 = chunk__25138_25441;
var G__25488 = count__25139_25442;
var G__25489 = (i__25140_25443 + (1));
seq__25134_25440 = G__25486;
chunk__25138_25441 = G__25487;
count__25139_25442 = G__25488;
i__25140_25443 = G__25489;
continue;
}
} else {
var temp__5823__auto___25490__$1 = cljs.core.seq(seq__25134_25440);
if(temp__5823__auto___25490__$1){
var seq__25134_25491__$1 = temp__5823__auto___25490__$1;
if(cljs.core.chunked_seq_QMARK_(seq__25134_25491__$1)){
var c__5673__auto___25492 = cljs.core.chunk_first(seq__25134_25491__$1);
var G__25493 = cljs.core.chunk_rest(seq__25134_25491__$1);
var G__25494 = c__5673__auto___25492;
var G__25495 = cljs.core.count(c__5673__auto___25492);
var G__25496 = (0);
seq__25134_25440 = G__25493;
chunk__25138_25441 = G__25494;
count__25139_25442 = G__25495;
i__25140_25443 = G__25496;
continue;
} else {
var node_25497 = cljs.core.first(seq__25134_25491__$1);
if(cljs.core.not(node_25497.shadow$old)){
var path_match_25498 = shadow.cljs.devtools.client.browser.match_paths(node_25497.getAttribute("href"),path);
if(cljs.core.truth_(path_match_25498)){
var new_link_25499 = (function (){var G__25186 = node_25497.cloneNode(true);
G__25186.setAttribute("href",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_25498)+"?r="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())));

return G__25186;
})();
(node_25497.shadow$old = true);

(new_link_25499.onload = ((function (seq__25134_25440,chunk__25138_25441,count__25139_25442,i__25140_25443,seq__24879,chunk__24881,count__24882,i__24883,new_link_25499,path_match_25498,node_25497,seq__25134_25491__$1,temp__5823__auto___25490__$1,path,seq__24879__$1,temp__5823__auto__,map__24874,map__24874__$1,msg,updates,reload_info){
return (function (e){
var seq__25188_25500 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__25190_25501 = null;
var count__25191_25502 = (0);
var i__25192_25503 = (0);
while(true){
if((i__25192_25503 < count__25191_25502)){
var map__25202_25504 = chunk__25190_25501.cljs$core$IIndexed$_nth$arity$2(null,i__25192_25503);
var map__25202_25505__$1 = cljs.core.__destructure_map(map__25202_25504);
var task_25506 = map__25202_25505__$1;
var fn_str_25507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25202_25505__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25202_25505__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25509 = goog.getObjectByName(fn_str_25507,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25508)));

(fn_obj_25509.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25509.cljs$core$IFn$_invoke$arity$2(path,new_link_25499) : fn_obj_25509.call(null,path,new_link_25499));


var G__25510 = seq__25188_25500;
var G__25511 = chunk__25190_25501;
var G__25512 = count__25191_25502;
var G__25513 = (i__25192_25503 + (1));
seq__25188_25500 = G__25510;
chunk__25190_25501 = G__25511;
count__25191_25502 = G__25512;
i__25192_25503 = G__25513;
continue;
} else {
var temp__5823__auto___25514__$2 = cljs.core.seq(seq__25188_25500);
if(temp__5823__auto___25514__$2){
var seq__25188_25515__$1 = temp__5823__auto___25514__$2;
if(cljs.core.chunked_seq_QMARK_(seq__25188_25515__$1)){
var c__5673__auto___25516 = cljs.core.chunk_first(seq__25188_25515__$1);
var G__25517 = cljs.core.chunk_rest(seq__25188_25515__$1);
var G__25518 = c__5673__auto___25516;
var G__25519 = cljs.core.count(c__5673__auto___25516);
var G__25520 = (0);
seq__25188_25500 = G__25517;
chunk__25190_25501 = G__25518;
count__25191_25502 = G__25519;
i__25192_25503 = G__25520;
continue;
} else {
var map__25204_25521 = cljs.core.first(seq__25188_25515__$1);
var map__25204_25522__$1 = cljs.core.__destructure_map(map__25204_25521);
var task_25523 = map__25204_25522__$1;
var fn_str_25524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25204_25522__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_25525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25204_25522__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_25526 = goog.getObjectByName(fn_str_25524,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg((""+"call "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_25525)));

(fn_obj_25526.cljs$core$IFn$_invoke$arity$2 ? fn_obj_25526.cljs$core$IFn$_invoke$arity$2(path,new_link_25499) : fn_obj_25526.call(null,path,new_link_25499));


var G__25527 = cljs.core.next(seq__25188_25515__$1);
var G__25528 = null;
var G__25529 = (0);
var G__25530 = (0);
seq__25188_25500 = G__25527;
chunk__25190_25501 = G__25528;
count__25191_25502 = G__25529;
i__25192_25503 = G__25530;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_25497);
});})(seq__25134_25440,chunk__25138_25441,count__25139_25442,i__25140_25443,seq__24879,chunk__24881,count__24882,i__24883,new_link_25499,path_match_25498,node_25497,seq__25134_25491__$1,temp__5823__auto___25490__$1,path,seq__24879__$1,temp__5823__auto__,map__24874,map__24874__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_25498], 0));

goog.dom.insertSiblingAfter(new_link_25499,node_25497);


var G__25531 = cljs.core.next(seq__25134_25491__$1);
var G__25532 = null;
var G__25533 = (0);
var G__25534 = (0);
seq__25134_25440 = G__25531;
chunk__25138_25441 = G__25532;
count__25139_25442 = G__25533;
i__25140_25443 = G__25534;
continue;
} else {
var G__25535 = cljs.core.next(seq__25134_25491__$1);
var G__25536 = null;
var G__25537 = (0);
var G__25538 = (0);
seq__25134_25440 = G__25535;
chunk__25138_25441 = G__25536;
count__25139_25442 = G__25537;
i__25140_25443 = G__25538;
continue;
}
} else {
var G__25539 = cljs.core.next(seq__25134_25491__$1);
var G__25540 = null;
var G__25541 = (0);
var G__25542 = (0);
seq__25134_25440 = G__25539;
chunk__25138_25441 = G__25540;
count__25139_25442 = G__25541;
i__25140_25443 = G__25542;
continue;
}
}
} else {
}
}
break;
}


var G__25543 = cljs.core.next(seq__24879__$1);
var G__25544 = null;
var G__25545 = (0);
var G__25546 = (0);
seq__24879 = G__25543;
chunk__24881 = G__25544;
count__24882 = G__25545;
i__24883 = G__25546;
continue;
} else {
var G__25547 = cljs.core.next(seq__24879__$1);
var G__25548 = null;
var G__25549 = (0);
var G__25550 = (0);
seq__24879 = G__25547;
chunk__24881 = G__25548;
count__24882 = G__25549;
i__24883 = G__25550;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null))))))))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)+" ["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM)+"]"),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__25207 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__25207) : success.call(null,G__25207));
}catch (e25206){var e = e25206;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__25208,success,fail){
var map__25209 = p__25208;
var map__25209__$1 = cljs.core.__destructure_map(map__25209);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25209__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__25211 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__25211) : success.call(null,G__25211));
}catch (e25210){var e = e25210;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__25212,done,error){
var map__25213 = p__25212;
var map__25213__$1 = cljs.core.__destructure_map(map__25213);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25213__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__25214,done,error){
var map__25215 = p__25214;
var map__25215__$1 = cljs.core.__destructure_map(map__25215);
var msg = map__25215__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25215__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25215__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25215__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__25216){
var map__25217 = p__25216;
var map__25217__$1 = cljs.core.__destructure_map(map__25217);
var src = map__25217__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25217__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5140__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5140__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__25218 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__25218) : done.call(null,G__25218));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__25219){
var map__25220 = p__25219;
var map__25220__$1 = cljs.core.__destructure_map(map__25220);
var msg__$1 = map__25220__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25220__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e25221){var ex = e25221;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__25222){
var map__25223 = p__25222;
var map__25223__$1 = cljs.core.__destructure_map(map__25223);
var env = map__25223__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25223__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg((""+"#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))+" ready!"));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error((""+"Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."+" Is the watch for this build running?"));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__25230){
var map__25231 = p__25230;
var map__25231__$1 = cljs.core.__destructure_map(map__25231);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25231__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__25236){
var map__25237 = p__25236;
var map__25237__$1 = cljs.core.__destructure_map(map__25237);
var svc = map__25237__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__25237__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
