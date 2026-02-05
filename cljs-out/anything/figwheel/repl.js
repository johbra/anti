// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('figwheel.repl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.repl.logging');
goog.require('goog.storage.mechanism.mechanismfactory');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('goog.net.XhrIo');
goog.require('goog.json');
goog.require('goog.html.legacyconversions');
goog.require('goog.userAgent.product');
goog.require('goog.net.WebSocket');
goog.require('goog.debug.Console');
goog.require('goog.Uri.QueryData');
goog.require('goog.Promise');
goog.require('goog.storage.mechanism.HTML5SessionStorage');
goog.require('goog.object');
goog.scope(function(){
figwheel.repl.goog$module$goog$object = goog.module.get('goog.object');
});
goog.require('goog.array');
goog.scope(function(){
figwheel.repl.goog$module$goog$array = goog.module.get('goog.array');
});
figwheel.repl.default_port = (9500);
figwheel.repl.default_ssl_port = (9533);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.logger !== 'undefined')){
} else {
figwheel.repl.logger = figwheel.repl.logging.get_logger.call(null,"Figwheel REPL");
}

figwheel.repl.console_logging = (function figwheel$repl$console_logging(){
return figwheel.repl.logging.console_logging.call(null);
});
goog.exportSymbol('figwheel.repl.console_logging', figwheel.repl.console_logging);

figwheel.repl.debug = (function figwheel$repl$debug(msg){
return figwheel.repl.logging.debug.call(null,figwheel.repl.logger,msg);
});


figwheel.repl.unprovide_BANG_ = (function figwheel$repl$unprovide_BANG_(ns){
if((!((goog.debugLoader_ == null)))){
var path = goog.debugLoader_.getPathFromDeps_(ns);
figwheel.repl.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,path);

return figwheel.repl.goog$module$goog$object.remove.call(null,goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
} else {
var path = figwheel.repl.goog$module$goog$object.get.call(null,goog.dependencies_.nameToPath,ns);
figwheel.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.visited,path);

figwheel.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.written,path);

return figwheel.repl.goog$module$goog$object.remove.call(null,goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}
});

figwheel.repl.figwheel_require = (function figwheel$repl$figwheel_require(src,reload){
(goog.require = figwheel.repl.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = true);
} else {
}

if(cljs.core.truth_((function (){var or__5045__auto__ = reload;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.cljsReloadAll_;
}
})())){
figwheel.repl.unprovide_BANG_.call(null,src);
} else {
}

var res = goog.require_figwheel_backup_(src);
if(cljs.core._EQ_.call(null,reload,"reload-all")){
(goog.cljsReloadAll_ = false);
} else {
}

return res;
});

/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.repl.bootstrap_goog_base = (function figwheel$repl$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
if(cljs.core.truth_(goog.require_figwheel_backup_)){
} else {
(goog.require_figwheel_backup_ = (function (){var or__5045__auto__ = goog.require__;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.require;
}
})());
}

(goog.isProvided_ = (function (name){
return false;
}));

if((((typeof cljs !== 'undefined')) && ((typeof cljs !== 'undefined') && (typeof cljs.user !== 'undefined')))){
} else {
goog.constructNamespace_("cljs.user");
}

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.repl.queued_file_reload);

return (goog.require = figwheel.repl.figwheel_require);
}
});

figwheel.repl.patch_goog_base = (function figwheel$repl$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.repl.bootstrapped_cljs = (function (){
figwheel.repl.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});

figwheel.repl.add_cache_buster = (function figwheel$repl$add_cache_buster(url){
return goog.Uri.parse(url).makeUnique();
});

figwheel.repl.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__27100_SHARP_,p2__27101_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27100_SHARP_)),p2__27101_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__27102_SHARP_,p2__27103_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__27102_SHARP_),p2__27103_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));

figwheel.repl.reload_file_in_html_env = (function figwheel$repl$reload_file_in_html_env(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

var G__27111 = figwheel.repl.gloader.call(null,figwheel.repl.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__27111.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__27111.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__27111;
});

figwheel.repl.write_script_tag_import = figwheel.repl.reload_file_in_html_env;
goog.exportSymbol('figwheel.repl.write_script_tag_import', figwheel.repl.write_script_tag_import);

figwheel.repl.worker_import_script = (function figwheel$repl$worker_import_script(request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

return callback.call(null,(function (){try{self.importScripts(figwheel.repl.add_cache_buster.call(null,request_url));

return true;
}catch (e27112){if((e27112 instanceof Error)){
var e = e27112;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);

return false;
} else {
throw e27112;

}
}})());
});
goog.exportSymbol('figwheel.repl.worker_import_script', figwheel.repl.worker_import_script);

figwheel.repl.create_node_script_import_fn = (function figwheel$repl$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = figwheel.repl.goog$module$goog$object.findKey.call(null,require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){
if(typeof request_url === 'string'){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((!((callback == null)))),"\n","(string? request-url)"].join('')));
}

var cache_path = node_path_lib.resolve(root_path,request_url);
figwheel.repl.goog$module$goog$object.remove.call(null,require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e27113){if((e27113 instanceof Error)){
var e = e27113;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);

return false;
} else {
throw e27113;

}
}})());
});
});
goog.exportSymbol('figwheel.repl.create_node_script_import_fn', figwheel.repl.create_node_script_import_fn);

figwheel.repl.host_env = (((!((goog.nodeGlobalRequire == null))))?new cljs.core.Keyword(null,"node","node",581201198):(((!((goog.global.document == null))))?new cljs.core.Keyword(null,"html","html",-998796897):(((((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.navigator !== 'undefined')) && (cljs.core._EQ_.call(null,goog.global.navigator.product,"ReactNative"))))?new cljs.core.Keyword(null,"react-native","react-native",-1543085138):(((((goog.global.document == null)) && ((((typeof self !== 'undefined')) && ((!((self.importScripts == null))))))))?new cljs.core.Keyword(null,"worker","worker",938239996):null))));

figwheel.repl.reload_file_STAR_ = (function (){var pred__27114 = cljs.core._EQ_;
var expr__27115 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__27114.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27115))){
return figwheel.repl.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__27114.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__27115))){
return figwheel.repl.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__27114.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__27115))){
return figwheel.repl.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();

figwheel.repl.reload_file = (function figwheel$repl$reload_file(p__27117,callback){
var map__27118 = p__27117;
var map__27118__$1 = cljs.core.__destructure_map.call(null,map__27118);
var file_msg = map__27118__$1;
var request_url = cljs.core.get.call(null,map__27118__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
if(typeof request_url === 'string'){
} else {
throw (new Error("Assert failed: (string? request-url)"));
}

if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (not (nil? callback))"));
}

figwheel.repl.logging.fine.call(null,figwheel.repl.logger,["Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__5045__auto__ = figwheel.repl.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return figwheel.repl.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.repl.logging.fine.call(null,figwheel.repl.logger,["Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.repl.logging.error.call(null,figwheel.repl.logger,["Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.reload_promise_chain !== 'undefined')){
} else {
figwheel.repl.reload_promise_chain = cljs.core.atom.call(null,(new goog.Promise((function (p1__27104_SHARP_){
return p1__27104_SHARP_.call(null,true);
}))));
}

figwheel.repl.queued_file_reload = (function figwheel$repl$queued_file_reload(var_args){
var G__27120 = arguments.length;
switch (G__27120) {
case 1:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.repl.queued_file_reload.call(null,url,null);
}));

(figwheel.repl.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
if(clojure.string.ends_with_QMARK_.call(null,url,"goog/base.js")){
return true;
} else {
var temp__5825__auto__ = (cljs.core.truth_(opt_source_text)?(function (p1__27105_SHARP_){
return p1__27105_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
try{eval(opt_source_text);
}catch (e27121){if((e27121 instanceof Error)){
var e_27191 = e27121;
figwheel.repl.logging.error.call(null,figwheel.repl.logger,e_27191);
} else {
throw e27121;

}
}
return r.call(null,true);
})));
}));
}):(cljs.core.truth_(url)?(function (p1__27106_SHARP_){
return p1__27106_SHARP_.then((function (_){
return (new goog.Promise((function (r,___$1){
return figwheel.repl.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
return r.call(null,true);
}));
})));
}));
}):null));
if(cljs.core.truth_(temp__5825__auto__)){
var next_promise_fn = temp__5825__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,next_promise_fn);
} else {
return null;
}
}
}));

(figwheel.repl.queued_file_reload.cljs$lang$maxFixedArity = 2);


figwheel.repl.after_reloads = (function figwheel$repl$after_reloads(f){
return cljs.core.swap_BANG_.call(null,figwheel.repl.reload_promise_chain,(function (p1__27107_SHARP_){
return p1__27107_SHARP_.then(f);
}));
});
goog.exportSymbol('figwheel.repl.after_reloads', figwheel.repl.after_reloads);


/**
 * @define {string}
 */
figwheel.repl.print_output = goog.define("figwheel.repl.print_output","console,repl");

figwheel.repl.print_receivers = (function figwheel$repl$print_receivers(outputs){
return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.keyword,cljs.core.filter.call(null,cljs.core.complement.call(null,clojure.string.blank_QMARK_),cljs.core.map.call(null,clojure.string.trim,clojure.string.split.call(null,outputs,/,/)))));
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.out_print !== 'undefined')){
} else {
figwheel.repl.out_print = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","out-print"),(function (k,args){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.log.apply(console,figwheel.repl.goog$module$goog$array.clone.call(null,cljs.core.to_array.call(null,args)));
}));

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.err_print !== 'undefined')){
} else {
figwheel.repl.err_print = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","err-print"),(function (k,args){
return k;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"console","console",1228072057),(function (_,args){
return console.error.apply(console,figwheel.repl.goog$module$goog$array.clone.call(null,cljs.core.to_array.call(null,args)));
}));

figwheel.repl.setup_printing_BANG_ = (function figwheel$repl$setup_printing_BANG_(){
var printers = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output);
cljs.core.set_print_fn_BANG_.call(null,(function() { 
var G__27192__delegate = function (args){
var seq__27122 = cljs.core.seq.call(null,printers);
var chunk__27123 = null;
var count__27124 = (0);
var i__27125 = (0);
while(true){
if((i__27125 < count__27124)){
var p = cljs.core._nth.call(null,chunk__27123,i__27125);
figwheel.repl.out_print.call(null,p,args);


var G__27193 = seq__27122;
var G__27194 = chunk__27123;
var G__27195 = count__27124;
var G__27196 = (i__27125 + (1));
seq__27122 = G__27193;
chunk__27123 = G__27194;
count__27124 = G__27195;
i__27125 = G__27196;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__27122);
if(temp__5825__auto__){
var seq__27122__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27122__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__27122__$1);
var G__27197 = cljs.core.chunk_rest.call(null,seq__27122__$1);
var G__27198 = c__5568__auto__;
var G__27199 = cljs.core.count.call(null,c__5568__auto__);
var G__27200 = (0);
seq__27122 = G__27197;
chunk__27123 = G__27198;
count__27124 = G__27199;
i__27125 = G__27200;
continue;
} else {
var p = cljs.core.first.call(null,seq__27122__$1);
figwheel.repl.out_print.call(null,p,args);


var G__27201 = cljs.core.next.call(null,seq__27122__$1);
var G__27202 = null;
var G__27203 = (0);
var G__27204 = (0);
seq__27122 = G__27201;
chunk__27123 = G__27202;
count__27124 = G__27203;
i__27125 = G__27204;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__27192 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27205__i = 0, G__27205__a = new Array(arguments.length -  0);
while (G__27205__i < G__27205__a.length) {G__27205__a[G__27205__i] = arguments[G__27205__i + 0]; ++G__27205__i;}
  args = new cljs.core.IndexedSeq(G__27205__a,0,null);
} 
return G__27192__delegate.call(this,args);};
G__27192.cljs$lang$maxFixedArity = 0;
G__27192.cljs$lang$applyTo = (function (arglist__27206){
var args = cljs.core.seq(arglist__27206);
return G__27192__delegate(args);
});
G__27192.cljs$core$IFn$_invoke$arity$variadic = G__27192__delegate;
return G__27192;
})()
);

return cljs.core.set_print_err_fn_BANG_.call(null,(function() { 
var G__27207__delegate = function (args){
var seq__27126 = cljs.core.seq.call(null,printers);
var chunk__27127 = null;
var count__27128 = (0);
var i__27129 = (0);
while(true){
if((i__27129 < count__27128)){
var p = cljs.core._nth.call(null,chunk__27127,i__27129);
figwheel.repl.err_print.call(null,p,args);


var G__27208 = seq__27126;
var G__27209 = chunk__27127;
var G__27210 = count__27128;
var G__27211 = (i__27129 + (1));
seq__27126 = G__27208;
chunk__27127 = G__27209;
count__27128 = G__27210;
i__27129 = G__27211;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__27126);
if(temp__5825__auto__){
var seq__27126__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27126__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__27126__$1);
var G__27212 = cljs.core.chunk_rest.call(null,seq__27126__$1);
var G__27213 = c__5568__auto__;
var G__27214 = cljs.core.count.call(null,c__5568__auto__);
var G__27215 = (0);
seq__27126 = G__27212;
chunk__27127 = G__27213;
count__27128 = G__27214;
i__27129 = G__27215;
continue;
} else {
var p = cljs.core.first.call(null,seq__27126__$1);
figwheel.repl.err_print.call(null,p,args);


var G__27216 = cljs.core.next.call(null,seq__27126__$1);
var G__27217 = null;
var G__27218 = (0);
var G__27219 = (0);
seq__27126 = G__27216;
chunk__27127 = G__27217;
count__27128 = G__27218;
i__27129 = G__27219;
continue;
}
} else {
return null;
}
}
break;
}
};
var G__27207 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27220__i = 0, G__27220__a = new Array(arguments.length -  0);
while (G__27220__i < G__27220__a.length) {G__27220__a[G__27220__i] = arguments[G__27220__i + 0]; ++G__27220__i;}
  args = new cljs.core.IndexedSeq(G__27220__a,0,null);
} 
return G__27207__delegate.call(this,args);};
G__27207.cljs$lang$maxFixedArity = 0;
G__27207.cljs$lang$applyTo = (function (arglist__27221){
var args = cljs.core.seq(arglist__27221);
return G__27207__delegate(args);
});
G__27207.cljs$core$IFn$_invoke$arity$variadic = G__27207__delegate;
return G__27207;
})()
);
});


/**
 * @define {string}
 */
figwheel.repl.connect_url = goog.define("figwheel.repl.connect_url","ws://[[client-hostname]]:[[client-port]]/figwheel-connect");


/**
 * @define {number}
 */
figwheel.repl.heartbeat_interval = goog.define("figwheel.repl.heartbeat_interval",(10000));

figwheel.repl.state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);

figwheel.repl.storage = goog.storage.mechanism.mechanismfactory.createHTML5SessionStorage("figwheel.repl");

figwheel.repl.set_state = (function figwheel$repl$set_state(k,v){
cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,k,v);

if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.set(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k),v);
} else {
return null;
}
});

figwheel.repl.get_state = (function figwheel$repl$get_state(k){
if(cljs.core.truth_(figwheel.repl.storage)){
return figwheel.repl.storage.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.repl.state),k);
}
});

figwheel.repl.session_name = (function figwheel$repl$session_name(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102));
});
goog.exportSymbol('figwheel.repl.session_name', figwheel.repl.session_name);

figwheel.repl.session_id = (function figwheel$repl$session_id(){
return figwheel.repl.get_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955));
});
goog.exportSymbol('figwheel.repl.session_id', figwheel.repl.session_id);

figwheel.repl.response_for = (function figwheel$repl$response_for(p__27130,response_body){
var map__27131 = p__27130;
var map__27131__$1 = cljs.core.__destructure_map.call(null,map__27131);
var uuid = cljs.core.get.call(null,map__27131__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__27132 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),figwheel.repl.session_id.call(null),new cljs.core.Keyword(null,"session-name","session-name",-167167576),figwheel.repl.session_name.call(null),new cljs.core.Keyword(null,"response","response",-1068424192),response_body], null);
if(cljs.core.truth_(uuid)){
return cljs.core.assoc.call(null,G__27132,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),uuid);
} else {
return G__27132;
}
});

figwheel.repl.http_post = (function (){var pred__27133 = cljs.core._EQ_;
var expr__27134 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__27133.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27134))){
var http = require("http");
return (function (url,post_data){
var data = cljs.core.volatile_BANG_.call(null,"");
var uri = goog.Uri.parse(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url));
var G__27136 = http.request(({"host": uri.getDomain(), "port": uri.getPort(), "path": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri.getPath()),(function (){var temp__5825__auto__ = uri.getQuery();
if(cljs.core.truth_(temp__5825__auto__)){
var q = temp__5825__auto__;
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)].join('');
} else {
return null;
}
})()].join(''), "method": "POST", "headers": ({"Content-Length": Buffer.byteLength(post_data)})}),(function (x){
return null;
})).on("error",(function (p1__27108_SHARP_){
return console.error(p1__27108_SHARP_);
}));
G__27136.write(post_data);

G__27136.end();

return G__27136;
});
} else {
return (function (url,response){
return goog.net.XhrIo.send(url,(function (e){
return figwheel.repl.debug.call(null,"Response Posted");
}),"POST",response);
});
}
})();

figwheel.repl.respond_to = (function figwheel$repl$respond_to(p__27137,response_body){
var map__27138 = p__27137;
var map__27138__$1 = cljs.core.__destructure_map.call(null,map__27138);
var old_msg = map__27138__$1;
var websocket = cljs.core.get.call(null,map__27138__$1,new cljs.core.Keyword(null,"websocket","websocket",-1714963101));
var http_url = cljs.core.get.call(null,map__27138__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var response = figwheel.repl.response_for.call(null,old_msg,response_body);
if(cljs.core.truth_(websocket)){
return websocket.send(cljs.core.pr_str.call(null,response));
} else {
if(cljs.core.truth_(http_url)){
return figwheel.repl.http_post.call(null,http_url,cljs.core.pr_str.call(null,response));
} else {
return null;
}
}
});

figwheel.repl.respond_to_connection = (function figwheel$repl$respond_to_connection(response_body){
return figwheel.repl.respond_to.call(null,new cljs.core.Keyword(null,"connection","connection",-123599300).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.repl.state)),response_body);
});

if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.message !== 'undefined')){
} else {
figwheel.repl.message = (function (){var method_table__5642__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5643__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5644__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5645__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5646__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.repl","message"),new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5646__auto__,method_table__5642__auto__,prefer_table__5643__auto__,method_cache__5644__auto__,cached_hierarchy__5645__auto__));
})();
}

cljs.core._add_method.call(null,figwheel.repl.message,"naming",(function (msg){
var temp__5825__auto___27222 = new cljs.core.Keyword(null,"session-name","session-name",-167167576).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5825__auto___27222)){
var sn_27223 = temp__5825__auto___27222;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-name","figwheel.repl/session-name",2102143102),sn_27223);
} else {
}

var temp__5825__auto___27224 = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(msg);
if(cljs.core.truth_(temp__5825__auto___27224)){
var sid_27225 = temp__5825__auto___27224;
figwheel.repl.set_state.call(null,new cljs.core.Keyword("figwheel.repl","session-id","figwheel.repl/session-id",594324955),sid_27225);
} else {
}

figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Session ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_id.call(null))].join(''));

return figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Session Name: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.session_name.call(null))].join(''));
}));

cljs.core._add_method.call(null,figwheel.repl.message,"ping",(function (msg){
return figwheel.repl.respond_to.call(null,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pong","pong",-172484958),true], null));
}));

figwheel.repl.get_ua_product = (function figwheel$repl$get_ua_product(){
if((!((goog.nodeGlobalRequire == null)))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});

var print_to_console_QMARK__27226 = figwheel.repl.print_receivers.call(null,figwheel.repl.print_output).call(null,new cljs.core.Keyword(null,"console","console",1228072057));
figwheel.repl.eval_javascript_STAR__STAR_ = (function figwheel$repl$eval_javascript_STAR__STAR_(code){
var ua_product = figwheel.repl.get_ua_product.call(null);
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__27140 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__27141 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__27142 = true;
var _STAR_print_fn_STAR__temp_val__27143 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__27142);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__27143);

try{var result_value = eval(code);
var result_value__$1 = (((!(typeof result_value === 'string')))?(function (){try{return cljs.core.pr_str.call(null,result_value);
}catch (e27144){if((e27144 instanceof Error)){
var e = e27144;
return null;
} else {
throw e27144;

}
}})():result_value);
var output_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb);
if(cljs.core.truth_((function (){var and__5043__auto__ = print_to_console_QMARK__27226;
if(cljs.core.truth_(and__5043__auto__)){
return (!((sb.getLength() === (0))));
} else {
return and__5043__auto__;
}
})())){
setTimeout((function (){
return figwheel.repl.out_print.call(null,new cljs.core.Keyword(null,"console","console",1228072057),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [output_str], null));
}),(0));
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),output_str,new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__27141);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__27140);
}}catch (e27139){if((e27139 instanceof Error)){
var e = e27139;
if((((typeof console !== 'undefined')) && ((typeof console !== 'undefined') && (typeof console.error !== 'undefined')))){
console.error("REPL eval error",e);
} else {
}

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),e.stack], null);
} else {
var e = e27139;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),ua_product,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null);

}
}});

cljs.core._add_method.call(null,figwheel.repl.message,"eval",(function (p__27145){
var map__27146 = p__27145;
var map__27146__$1 = cljs.core.__destructure_map.call(null,map__27146);
var msg = map__27146__$1;
var code = cljs.core.get.call(null,map__27146__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var result = figwheel.repl.eval_javascript_STAR__STAR_.call(null,code);
return figwheel.repl.respond_to.call(null,msg,result);
}));

cljs.core._add_method.call(null,figwheel.repl.message,"messages",(function (p__27147){
var map__27148 = p__27147;
var map__27148__$1 = cljs.core.__destructure_map.call(null,map__27148);
var messages = cljs.core.get.call(null,map__27148__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var http_url = cljs.core.get.call(null,map__27148__$1,new cljs.core.Keyword(null,"http-url","http-url",-2043776269));
var seq__27149 = cljs.core.seq.call(null,messages);
var chunk__27150 = null;
var count__27151 = (0);
var i__27152 = (0);
while(true){
if((i__27152 < count__27151)){
var msg = cljs.core._nth.call(null,chunk__27150,i__27152);
figwheel.repl.message.call(null,(function (){var G__27155 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__27155,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__27155;
}
})());


var G__27227 = seq__27149;
var G__27228 = chunk__27150;
var G__27229 = count__27151;
var G__27230 = (i__27152 + (1));
seq__27149 = G__27227;
chunk__27150 = G__27228;
count__27151 = G__27229;
i__27152 = G__27230;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__27149);
if(temp__5825__auto__){
var seq__27149__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27149__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__27149__$1);
var G__27231 = cljs.core.chunk_rest.call(null,seq__27149__$1);
var G__27232 = c__5568__auto__;
var G__27233 = cljs.core.count.call(null,c__5568__auto__);
var G__27234 = (0);
seq__27149 = G__27231;
chunk__27150 = G__27232;
count__27151 = G__27233;
i__27152 = G__27234;
continue;
} else {
var msg = cljs.core.first.call(null,seq__27149__$1);
figwheel.repl.message.call(null,(function (){var G__27156 = cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
if(cljs.core.truth_(http_url)){
return cljs.core.assoc.call(null,G__27156,new cljs.core.Keyword(null,"http-url","http-url",-2043776269),http_url);
} else {
return G__27156;
}
})());


var G__27235 = cljs.core.next.call(null,seq__27149__$1);
var G__27236 = null;
var G__27237 = (0);
var G__27238 = (0);
seq__27149 = G__27235;
chunk__27150 = G__27236;
count__27151 = G__27237;
i__27152 = G__27238;
continue;
}
} else {
return null;
}
}
break;
}
}));

figwheel.repl.fill_url_template = (function figwheel$repl$fill_url_template(connect_url_SINGLEQUOTE_){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
return clojure.string.replace.call(null,clojure.string.replace.call(null,connect_url_SINGLEQUOTE_,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
} else {
return connect_url_SINGLEQUOTE_;
}
});

figwheel.repl.make_url = (function figwheel$repl$make_url(connect_url_SINGLEQUOTE_){
var uri = goog.Uri.parse(figwheel.repl.fill_url_template.call(null,(function (){var or__5045__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
var domain = uri.getDomain();
if(clojure.string.ends_with_QMARK_.call(null,domain,":")){
uri.setDomain(cljs.core.subs.call(null,domain,(0),(cljs.core.count.call(null,domain) - (1))));
} else {
}

var G__27157_27239 = uri.getQueryData().add("fwsid",(function (){var or__5045__auto__ = figwheel.repl.session_id.call(null);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.random_uuid.call(null);
}
})());
if(cljs.core.truth_(figwheel.repl.session_name.call(null))){
G__27157_27239.add("fwsname",figwheel.repl.session_name.call(null));
} else {
}

return uri;
});

figwheel.repl.exponential_backoff = (function figwheel$repl$exponential_backoff(attempt){
return ((1000) * (function (){var x__5133__auto__ = Math.pow((2),attempt);
var y__5134__auto__ = (20);
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})());
});

figwheel.repl.hook_repl_printing_output_BANG_ = (function figwheel$repl$hook_repl_printing_output_BANG_(respond_msg){
cljs.core._add_method.call(null,figwheel.repl.out_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"out","out",-910545517),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27109_SHARP_){
if(typeof p1__27109_SHARP_ === 'string'){
return p1__27109_SHARP_;
} else {
return goog.json.serialize(p1__27109_SHARP_);
}
}),args)], null));
}));

cljs.core._add_method.call(null,figwheel.repl.err_print,new cljs.core.Keyword(null,"repl","repl",-35398667),(function (_,args){
return figwheel.repl.respond_to.call(null,respond_msg,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"output","output",-1105869043),true,new cljs.core.Keyword(null,"stream","stream",1534941648),new cljs.core.Keyword(null,"err","err",-2089457205),new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__27110_SHARP_){
if(typeof p1__27110_SHARP_ === 'string'){
return p1__27110_SHARP_;
} else {
return goog.json.serialize(p1__27110_SHARP_);
}
}),args)], null));
}));

return figwheel.repl.setup_printing_BANG_.call(null);
});

figwheel.repl.connection_established_BANG_ = (function figwheel$repl$connection_established_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__27158 = (new Event("figwheel.repl.connected",target));
figwheel.repl.goog$module$goog$object.add.call(null,G__27158,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__27158;
})());
} else {
return null;
}
});

figwheel.repl.connection_closed_BANG_ = (function figwheel$repl$connection_closed_BANG_(url){
if(cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"html","html",-998796897))){
var target = goog.global.document.body;
return target.dispatchEvent((function (){var G__27159 = (new Event("figwheel.repl.disconnected",target));
figwheel.repl.goog$module$goog$object.add.call(null,G__27159,"data",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"url","url",276297046),url], null));

return G__27159;
})());
} else {
return null;
}
});

figwheel.repl.get_websocket_class = (function figwheel$repl$get_websocket_class(){
var or__5045__auto__ = figwheel.repl.goog$module$goog$object.get.call(null,goog.global,"WebSocket");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = figwheel.repl.goog$module$goog$object.get.call(null,goog.global,"FIGWHEEL_WEBSOCKET_CLASS");
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
var or__5045__auto____$2 = (function (){var and__5043__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198));
if(and__5043__auto__){
try{return require("ws");
}catch (e27160){if((e27160 instanceof Error)){
var e = e27160;
return null;
} else {
throw e27160;

}
}} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(or__5045__auto____$2)){
return or__5045__auto____$2;
} else {
var and__5043__auto__ = cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"worker","worker",938239996));
if(and__5043__auto__){
return figwheel.repl.goog$module$goog$object.get.call(null,self,"WebSocket");
} else {
return and__5043__auto__;
}
}
}
}
});

figwheel.repl.ensure_websocket = (function figwheel$repl$ensure_websocket(thunk){
if(cljs.core.truth_(figwheel.repl.goog$module$goog$object.get.call(null,goog.global,"WebSocket"))){
return thunk.call(null);
} else {
var temp__5823__auto__ = figwheel.repl.get_websocket_class.call(null);
if(cljs.core.truth_(temp__5823__auto__)){
var websocket_class = temp__5823__auto__;
figwheel.repl.goog$module$goog$object.set.call(null,goog.global,"WebSocket",websocket_class);

thunk.call(null);

return figwheel.repl.goog$module$goog$object.set.call(null,goog.global,"WebSocket",null);
} else {
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?"Can't connect!! Please make sure ws is installed\n do -> 'npm install ws'":"Can't connect!! This client doesn't support WebSockets"));
}
}
});

figwheel.repl.ws_connect = (function figwheel$repl$ws_connect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27240 = arguments.length;
var i__5770__auto___27241 = (0);
while(true){
if((i__5770__auto___27241 < len__5769__auto___27240)){
args__5775__auto__.push((arguments[i__5770__auto___27241]));

var G__27242 = (i__5770__auto___27241 + (1));
i__5770__auto___27241 = G__27242;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(figwheel.repl.ws_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__27162){
var vec__27163 = p__27162;
var websocket_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27163,(0),null);
return figwheel.repl.ensure_websocket.call(null,(function (){
var websocket = (new goog.net.WebSocket());
var url = cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.repl.make_url.call(null,websocket_url_SINGLEQUOTE_));
var heartbeat_job = cljs.core.atom.call(null,null);
var G__27166 = websocket;
G__27166.addEventListener(goog.net.WebSocket.EventType.MESSAGE,(function (e){
var temp__5825__auto__ = figwheel.repl.goog$module$goog$object.get.call(null,e,"message");
if(cljs.core.truth_(temp__5825__auto__)){
var msg = temp__5825__auto__;
try{figwheel.repl.debug.call(null,msg);

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,JSON.parse(msg),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket));
}catch (e27167){if((e27167 instanceof Error)){
var e__$1 = e27167;
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,e__$1);
} else {
throw e27167;

}
}} else {
return null;
}
}));

G__27166.addEventListener(goog.net.WebSocket.EventType.OPENED,(function (e){
figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));

cljs.core.reset_BANG_.call(null,heartbeat_job,setInterval((function (){
if(cljs.core.truth_(websocket.isOpen())){
websocket.send(cljs.core.pr_str.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"heartbeat"], null)));

return figwheel.repl.logging.fine.call(null,figwheel.repl.logger,"SENDING websocket heartbeat");
} else {
return null;
}
}),figwheel.repl.heartbeat_interval));

return figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"websocket","websocket",-1714963101),websocket], null));
}));

G__27166.addEventListener(goog.net.WebSocket.EventType.CLOSED,(function (e){
figwheel.repl.connection_closed_BANG_.call(null,url);

figwheel.repl.logging.fine.call(null,figwheel.repl.logger,"CLOSING websocket heartbeat");

return clearInterval(cljs.core.deref.call(null,heartbeat_job));
}));

G__27166.open(url);

return G__27166;
}));
}));

(figwheel.repl.ws_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.ws_connect.cljs$lang$applyTo = (function (seq27161){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27161));
}));


figwheel.repl.http_get = (function (){var pred__27168 = cljs.core._EQ_;
var expr__27169 = figwheel.repl.host_env;
if(cljs.core.truth_(pred__27168.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__27169))){
var http = require("http");
return (function (url){
return (new goog.Promise((function (succ,err){
var data = cljs.core.volatile_BANG_.call(null,"");
return http.get(cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),(function (response){
response.on("data",(function (chunk){
return cljs.core._vreset_BANG_.call(null,data,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core._deref.call(null,data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chunk)].join(''));
}));

return response.on("end",(function (){
return succ.call(null,(function (){try{return JSON.parse(cljs.core.deref.call(null,data));
}catch (e27171){if((e27171 instanceof Error)){
var e = e27171;
console.error(e);

return err.call(null,e);
} else {
throw e27171;

}
}})());
}));
})).on("error",err);
})));
});
} else {
return (function (url){
return (new goog.Promise((function (succ,err){
return goog.net.XhrIo.send(url,(function (e){
var xhr = figwheel.repl.goog$module$goog$object.get.call(null,e,"target");
if(cljs.core.truth_(xhr.isSuccess())){
return succ.call(null,xhr.getResponseJson());
} else {
return err.call(null,xhr);
}
}));
})));
});
}
})();



figwheel.repl.poll = (function figwheel$repl$poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return setTimeout((function (){
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(500));
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.long_poll = (function figwheel$repl$long_poll(msg_fn,connect_url_SINGLEQUOTE_){
return figwheel.repl.http_get.call(null,figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_)).then((function (msg){
msg_fn.call(null,msg);

return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}),(function (e){
figwheel.repl.connection_closed_BANG_.call(null,connect_url_SINGLEQUOTE_);

return figwheel.repl.http_connect.call(null,connect_url_SINGLEQUOTE_);
}));
});

figwheel.repl.http_connect_STAR_ = (function figwheel$repl$http_connect_STAR_(attempt,connect_url_SINGLEQUOTE_){
var url = figwheel.repl.make_url.call(null,connect_url_SINGLEQUOTE_);
var surl = cljs.core.str.cljs$core$IFn$_invoke$arity$1(url);
var msg_fn = (function (msg){
try{figwheel.repl.debug.call(null,cljs.core.pr_str.call(null,msg));

return figwheel.repl.message.call(null,cljs.core.assoc.call(null,cljs.core.js__GT_clj.call(null,msg,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true),new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl));
}catch (e27172){if((e27172 instanceof Error)){
var e = e27172;
return figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);
} else {
throw e27172;

}
}});
var G__27173_27243 = url.getQueryData();
G__27173_27243.add("fwinit","true");


return figwheel.repl.http_get.call(null,url).then((function (msg){
var typ = figwheel.repl.goog$module$goog$object.get.call(null,msg,"connection-type");
figwheel.repl.logging.info.call(null,figwheel.repl.logger,["Connected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(typ)].join(''));

msg_fn.call(null,msg);

figwheel.repl.connection_established_BANG_.call(null,url);

cljs.core.swap_BANG_.call(null,figwheel.repl.state,cljs.core.assoc,new cljs.core.Keyword(null,"connection","connection",-123599300),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

figwheel.repl.hook_repl_printing_output_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"http-url","http-url",-2043776269),surl], null));

if(cljs.core._EQ_.call(null,typ,"http-long-polling")){
return figwheel.repl.long_poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
} else {
return figwheel.repl.poll.call(null,msg_fn,connect_url_SINGLEQUOTE_);
}
}),(function (e){
if((e instanceof Error)){
figwheel.repl.logging.error.call(null,figwheel.repl.logger,e);
} else {
}

if(cljs.core.truth_((function (){var and__5043__auto__ = (e instanceof goog.net.XhrIo);
if(and__5043__auto__){
return e.getResponseBody();
} else {
return and__5043__auto__;
}
})())){
figwheel.repl.debug.call(null,e.getResponseBody());
} else {
}

var wait_time = figwheel.repl.exponential_backoff.call(null,attempt);
figwheel.repl.logging.info.call(null,figwheel.repl.logger,["HTTP Connection Error: next connection attempt in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((wait_time / (1000)))," seconds"].join(''));

return setTimeout((function (){
return figwheel.repl.http_connect_STAR_.call(null,(attempt + (1)),connect_url_SINGLEQUOTE_);
}),wait_time);
}));
});

figwheel.repl.http_connect = (function figwheel$repl$http_connect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27244 = arguments.length;
var i__5770__auto___27245 = (0);
while(true){
if((i__5770__auto___27245 < len__5769__auto___27244)){
args__5775__auto__.push((arguments[i__5770__auto___27245]));

var G__27246 = (i__5770__auto___27245 + (1));
i__5770__auto___27245 = G__27246;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(figwheel.repl.http_connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__27175){
var vec__27176 = p__27175;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27176,(0),null);
return figwheel.repl.http_connect_STAR_.call(null,(0),connect_url_SINGLEQUOTE_);
}));

(figwheel.repl.http_connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.http_connect.cljs$lang$applyTo = (function (seq27174){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27174));
}));


figwheel.repl.switch_to_http_QMARK_ = (function figwheel$repl$switch_to_http_QMARK_(url){
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(url,"http");
if(or__5045__auto__){
return or__5045__auto__;
} else {
return figwheel.repl.get_websocket_class.call(null);
}
})())){
return url;
} else {
figwheel.repl.logging.warning.call(null,figwheel.repl.logger,["No WebSocket implementation found! Falling back to http-long-polling",((cljs.core._EQ_.call(null,figwheel.repl.host_env,new cljs.core.Keyword(null,"node","node",581201198)))?":\n For a more efficient connection ensure that \"ws\" is installed :: do -> 'npm install ws'":null)].join(''));

return cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.Uri.parse(url).setScheme("http"));
}
});


/**
 * @define {string}
 */
figwheel.repl.client_log_level = goog.define("figwheel.repl.client_log_level","info");

figwheel.repl.init_log_level_BANG_ = (function figwheel$repl$init_log_level_BANG_(){
var seq__27179 = cljs.core.seq.call(null,(function (){var G__27184 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [figwheel.repl.logger], null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined')){
return cljs.core.conj.call(null,G__27184,figwheel.core.logger);
} else {
return G__27184;
}
})());
var chunk__27180 = null;
var count__27181 = (0);
var i__27182 = (0);
while(true){
if((i__27182 < count__27181)){
var logger_SINGLEQUOTE_ = cljs.core._nth.call(null,chunk__27180,i__27182);
figwheel.repl.logging.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__27247 = seq__27179;
var G__27248 = chunk__27180;
var G__27249 = count__27181;
var G__27250 = (i__27182 + (1));
seq__27179 = G__27247;
chunk__27180 = G__27248;
count__27181 = G__27249;
i__27182 = G__27250;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__27179);
if(temp__5825__auto__){
var seq__27179__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27179__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__27179__$1);
var G__27251 = cljs.core.chunk_rest.call(null,seq__27179__$1);
var G__27252 = c__5568__auto__;
var G__27253 = cljs.core.count.call(null,c__5568__auto__);
var G__27254 = (0);
seq__27179 = G__27251;
chunk__27180 = G__27252;
count__27181 = G__27253;
i__27182 = G__27254;
continue;
} else {
var logger_SINGLEQUOTE_ = cljs.core.first.call(null,seq__27179__$1);
figwheel.repl.logging.set_log_level.call(null,logger_SINGLEQUOTE_,figwheel.repl.client_log_level);


var G__27255 = cljs.core.next.call(null,seq__27179__$1);
var G__27256 = null;
var G__27257 = (0);
var G__27258 = (0);
seq__27179 = G__27255;
chunk__27180 = G__27256;
count__27181 = G__27257;
i__27182 = G__27258;
continue;
}
} else {
return null;
}
}
break;
}
});

figwheel.repl.connect_STAR_ = (function figwheel$repl$connect_STAR_(connect_url_SINGLEQUOTE_){
figwheel.repl.init_log_level_BANG_.call(null);

figwheel.repl.patch_goog_base.call(null);

var url = figwheel.repl.switch_to_http_QMARK_.call(null,clojure.string.trim.call(null,(function (){var or__5045__auto__ = connect_url_SINGLEQUOTE_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return figwheel.repl.connect_url;
}
})()));
if(goog.string.startsWith(url,"ws")){
return figwheel.repl.ws_connect.call(null,url);
} else {
if(goog.string.startsWith(url,"http")){
return figwheel.repl.http_connect.call(null,url);
} else {
return null;
}
}
});

figwheel.repl.connect = (function figwheel$repl$connect(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27259 = arguments.length;
var i__5770__auto___27260 = (0);
while(true){
if((i__5770__auto___27260 < len__5769__auto___27259)){
args__5775__auto__.push((arguments[i__5770__auto___27260]));

var G__27261 = (i__5770__auto___27260 + (1));
i__5770__auto___27260 = G__27261;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(figwheel.repl.connect.cljs$core$IFn$_invoke$arity$variadic = (function (p__27186){
var vec__27187 = p__27186;
var connect_url_SINGLEQUOTE_ = cljs.core.nth.call(null,vec__27187,(0),null);
if((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.connected !== 'undefined')){
return null;
} else {
return (
figwheel.repl.connected = (function (){
figwheel.repl.connect_STAR_.call(null,connect_url_SINGLEQUOTE_);

return true;
})()
)
;
}
}));

(figwheel.repl.connect.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.repl.connect.cljs$lang$applyTo = (function (seq27185){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27185));
}));


//# sourceMappingURL=repl.js.map
