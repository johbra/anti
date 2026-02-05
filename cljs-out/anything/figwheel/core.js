// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('figwheel.core');
goog.require('cljs.core');
goog.require('figwheel.tools.heads_up');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.log');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('goog.debug.Console');
goog.require('goog.async.Deferred');
goog.require('goog.Promise');
goog.require('goog.events.EventTarget');
goog.require('goog.events.Event');
goog.require('goog.object');
goog.scope(function(){
figwheel.core.goog$module$goog$object = goog.module.get('goog.object');
});
figwheel.core.distinct_by = (function figwheel$core$distinct_by(f,coll){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.filter.call(null,(function (p1__27522_SHARP_){
var k = f.call(null,p1__27522_SHARP_);
var res = cljs.core.not.call(null,cljs.core.deref.call(null,seen).call(null,k));
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),k));

return res;
}),coll);
});
figwheel.core.map_keys = (function figwheel$core$map_keys(f,coll){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__27523){
var vec__27524 = p__27523;
var k = cljs.core.nth.call(null,vec__27524,(0),null);
var v = cljs.core.nth.call(null,vec__27524,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null,k),v], null);
})),coll);
});
figwheel.core._STAR_inline_code_message_max_column_STAR_ = (80);
figwheel.core.wrap_line = (function figwheel$core$wrap_line(text,size){
return cljs.core.re_seq.call(null,cljs.core.re_pattern.call(null,[".{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}\\s|.{1,",cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"}"].join('')),[clojure.string.replace.call(null,text,/\n/," ")," "].join(''));
});
figwheel.core.cross_format = (function figwheel$core$cross_format(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27528 = arguments.length;
var i__5770__auto___27529 = (0);
while(true){
if((i__5770__auto___27529 < len__5769__auto___27528)){
args__5775__auto__.push((arguments[i__5770__auto___27529]));

var G__27530 = (i__5770__auto___27529 + (1));
i__5770__auto___27529 = G__27530;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(figwheel.core.cross_format.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,goog.string.format,args);
}));

(figwheel.core.cross_format.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.core.cross_format.cljs$lang$applyTo = (function (seq27527){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27527));
}));

figwheel.core.pointer_message_lines = (function figwheel$core$pointer_message_lines(p__27533){
var map__27534 = p__27533;
var map__27534__$1 = cljs.core.__destructure_map.call(null,map__27534);
var message = cljs.core.get.call(null,map__27534__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var column = cljs.core.get.call(null,map__27534__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(((column + cljs.core.count.call(null,message)) > figwheel.core._STAR_inline_code_message_max_column_STAR_)){
return cljs.core.mapv.call(null,(function (p1__27532_SHARP_){
return cljs.core.vec.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27532_SHARP_], null)));
}),cljs.core.cons.call(null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s"].join('');
})(),"","^---"),cljs.core.map.call(null,(function (p1__27531_SHARP_){
return figwheel.core.cross_format.call(null,["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.core._STAR_inline_code_message_max_column_STAR_),"s"].join(''),p1__27531_SHARP_);
}),figwheel.core.wrap_line.call(null,message,(figwheel.core._STAR_inline_code_message_max_column_STAR_ - (10))))));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-message","error-message",1756021561),null,figwheel.core.cross_format.call(null,(function (){var col = (column - (1));
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((col === (0)))?null:col)),"s%s %s"].join('');
})(),"","^---",message)], null)], null);
}
});
figwheel.core.inline_message_display_data = (function figwheel$core$inline_message_display_data(p__27536){
var map__27537 = p__27536;
var map__27537__$1 = cljs.core.__destructure_map.call(null,map__27537);
var message_data = map__27537__$1;
var message = cljs.core.get.call(null,map__27537__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var line = cljs.core.get.call(null,map__27537__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27537__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var file_excerpt = cljs.core.get.call(null,map__27537__$1,new cljs.core.Keyword(null,"file-excerpt","file-excerpt",-1132330744));
if(cljs.core.truth_(file_excerpt)){
var map__27538 = file_excerpt;
var map__27538__$1 = cljs.core.__destructure_map.call(null,map__27538);
var start_line = cljs.core.get.call(null,map__27538__$1,new cljs.core.Keyword(null,"start-line","start-line",-41746654));
var path = cljs.core.get.call(null,map__27538__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var excerpt = cljs.core.get.call(null,map__27538__$1,new cljs.core.Keyword(null,"excerpt","excerpt",219850763));
var lines = cljs.core.map_indexed.call(null,(function (i,l){
var ln = (i + start_line);
return (new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[((cljs.core._EQ_.call(null,line,ln))?new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357):new cljs.core.Keyword(null,"code-line","code-line",-2138627853)),ln,l],null));
}),clojure.string.split_lines.call(null,excerpt));
var vec__27539 = cljs.core.split_with.call(null,(function (p1__27535_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),cljs.core.first.call(null,p1__27535_SHARP_));
}),lines);
var begin = cljs.core.nth.call(null,vec__27539,(0),null);
var end = cljs.core.nth.call(null,vec__27539,(1),null);
return cljs.core.concat.call(null,cljs.core.take_last.call(null,(5),begin),cljs.core.take.call(null,(1),end),figwheel.core.pointer_message_lines.call(null,message_data),cljs.core.take.call(null,(5),cljs.core.rest.call(null,end)));
} else {
return null;
}
});
figwheel.core.file_line_column = (function figwheel$core$file_line_column(p__27542){
var map__27543 = p__27542;
var map__27543__$1 = cljs.core.__destructure_map.call(null,map__27543);
var file = cljs.core.get.call(null,map__27543__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__27543__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__27543__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__27544 = "";
var G__27544__$1 = (cljs.core.truth_(file)?[G__27544,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__27544);
var G__27544__$2 = (cljs.core.truth_(line)?[G__27544__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__27544__$1);
if(cljs.core.truth_((function (){var and__5043__auto__ = line;
if(cljs.core.truth_(and__5043__auto__)){
return column;
} else {
return and__5043__auto__;
}
})())){
return [G__27544__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__27544__$2;
}
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.logger !== 'undefined')){
} else {
figwheel.core.logger = goog.log.getLogger.call(null,"Figwheel");
}

figwheel.core.glog_info = (function figwheel$core$glog_info(log,msg){
return goog.log.info.call(null,log,msg);
});

figwheel.core.glog_warning = (function figwheel$core$glog_warning(log,msg){
return goog.log.warning.call(null,log,msg);
});

figwheel.core.glog_error = (function figwheel$core$glog_error(log,msg){
return goog.log.error.call(null,log,msg);
});

figwheel.core.console_logging = (function figwheel$core$console_logging(){
if(cljs.core.truth_(figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance"))){
} else {
var c_27602 = (new goog.debug.Console());
var G__27551_27603 = c_27602.getFormatter();
figwheel.core.goog$module$goog$object.set.call(null,G__27551_27603,"showAbsoluteTime",false);

figwheel.core.goog$module$goog$object.set.call(null,G__27551_27603,"showRelativeTime",false);


figwheel.core.goog$module$goog$object.set.call(null,goog.debug.Console,"instance",c_27602);

}

var temp__5825__auto__ = figwheel.core.goog$module$goog$object.get.call(null,goog.debug.Console,"instance");
if(cljs.core.truth_(temp__5825__auto__)){
var console_instance = temp__5825__auto__;
console_instance.setCapturing(true);

return true;
} else {
return null;
}
});
goog.exportSymbol('figwheel.core.console_logging', figwheel.core.console_logging);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.log_console !== 'undefined')){
} else {
figwheel.core.log_console = figwheel.core.console_logging.call(null);
}

figwheel.core.event_target = (((typeof document !== 'undefined'))?document:(new goog.events.EventTarget()));
goog.exportSymbol('figwheel.core.event_target', figwheel.core.event_target);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.listener_key_map !== 'undefined')){
} else {
figwheel.core.listener_key_map = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}

figwheel.core.unlisten = (function figwheel$core$unlisten(ky,event_name){
var temp__5825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.core.listener_key_map),ky);
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return figwheel.core.event_target.removeEventListener(cljs.core.name.call(null,event_name),f);
} else {
return null;
}
});

figwheel.core.listen = (function figwheel$core$listen(ky,event_name,f){
figwheel.core.unlisten.call(null,ky,event_name);

figwheel.core.event_target.addEventListener(cljs.core.name.call(null,event_name),f);

return cljs.core.swap_BANG_.call(null,figwheel.core.listener_key_map,cljs.core.assoc,ky,f);
});

figwheel.core.dispatch_event = (function figwheel$core$dispatch_event(event_name,data){
return figwheel.core.event_target.dispatchEvent((function (){var G__27552 = (((figwheel.core.event_target instanceof goog.events.EventTarget))?(new goog.events.Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)):(new Event(cljs.core.name.call(null,event_name),figwheel.core.event_target)));
figwheel.core.goog$module$goog$object.add.call(null,G__27552,"data",(function (){var or__5045__auto__ = data;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return G__27552;
})());
});

figwheel.core.event_data = (function figwheel$core$event_data(e){
return figwheel.core.goog$module$goog$object.get.call(null,(function (){var temp__5823__auto__ = e.event_;
if(cljs.core.truth_(temp__5823__auto__)){
var e__$1 = temp__5823__auto__;
return e__$1;
} else {
return e;
}
})(),"data");
});


/**
 * @define {boolean}
 */
figwheel.core.load_warninged_code = goog.define("figwheel.core.load_warninged_code",false);


/**
 * @define {boolean}
 */
figwheel.core.heads_up_display = goog.define("figwheel.core.heads_up_display",true);

if((typeof figwheel !== 'undefined') && (typeof figwheel.core !== 'undefined') && (typeof figwheel.core.state !== 'undefined')){
} else {
figwheel.core.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY], null));
}

figwheel.core.heads_up_display_QMARK_ = (function figwheel$core$heads_up_display_QMARK_(){
var and__5043__auto__ = figwheel.core.heads_up_display;
if(cljs.core.truth_(and__5043__auto__)){
return (!((goog.global.document == null)));
} else {
return and__5043__auto__;
}
});

var last_reload_timestamp_27604 = cljs.core.atom.call(null,(0));
var promise_chain_27605 = (new goog.Promise((function (r,_){
return r.call(null,true);
})));
figwheel.core.render_watcher = (function figwheel$core$render_watcher(_,___$1,o,n){
if(cljs.core.truth_(figwheel.core.heads_up_display_QMARK_.call(null))){
var temp__5823__auto__ = (function (){var temp__5825__auto__ = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null));
if(cljs.core.truth_(temp__5825__auto__)){
var ts = temp__5825__auto__;
var and__5043__auto__ = (cljs.core.deref.call(null,last_reload_timestamp_27604) < ts);
if(and__5043__auto__){
return ts;
} else {
return and__5043__auto__;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var ts = temp__5823__auto__;
var warnings = cljs.core.not_empty.call(null,cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
var exception = cljs.core.get_in.call(null,n,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null));
cljs.core.reset_BANG_.call(null,last_reload_timestamp_27604,ts);

if(cljs.core.truth_(warnings)){
return promise_chain_27605.then((function (){
var warn = cljs.core.first.call(null,warnings);
var _STAR_inline_code_message_max_column_STAR__orig_val__27553 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__27554 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__27554);

try{return figwheel.tools.heads_up.display_warning.call(null,cljs.core.assoc.call(null,warn,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,warn))).then((function (){
var seq__27555 = cljs.core.seq.call(null,cljs.core.rest.call(null,warnings));
var chunk__27556 = null;
var count__27557 = (0);
var i__27558 = (0);
while(true){
if((i__27558 < count__27557)){
var w = cljs.core._nth.call(null,chunk__27556,i__27558);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__27606 = seq__27555;
var G__27607 = chunk__27556;
var G__27608 = count__27557;
var G__27609 = (i__27558 + (1));
seq__27555 = G__27606;
chunk__27556 = G__27607;
count__27557 = G__27608;
i__27558 = G__27609;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__27555);
if(temp__5825__auto__){
var seq__27555__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27555__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__27555__$1);
var G__27610 = cljs.core.chunk_rest.call(null,seq__27555__$1);
var G__27611 = c__5568__auto__;
var G__27612 = cljs.core.count.call(null,c__5568__auto__);
var G__27613 = (0);
seq__27555 = G__27610;
chunk__27556 = G__27611;
count__27557 = G__27612;
i__27558 = G__27613;
continue;
} else {
var w = cljs.core.first.call(null,seq__27555__$1);
figwheel.tools.heads_up.append_warning_message.call(null,w);


var G__27614 = cljs.core.next.call(null,seq__27555__$1);
var G__27615 = null;
var G__27616 = (0);
var G__27617 = (0);
seq__27555 = G__27614;
chunk__27556 = G__27615;
count__27557 = G__27616;
i__27558 = G__27617;
continue;
}
} else {
return null;
}
}
break;
}
}));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__27553);
}}));
} else {
if(cljs.core.truth_(exception)){
return promise_chain_27605.then((function (){
var _STAR_inline_code_message_max_column_STAR__orig_val__27559 = figwheel.core._STAR_inline_code_message_max_column_STAR_;
var _STAR_inline_code_message_max_column_STAR__temp_val__27560 = (132);
(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__temp_val__27560);

try{return figwheel.tools.heads_up.display_exception.call(null,cljs.core.assoc.call(null,exception,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185),figwheel.core.inline_message_display_data.call(null,exception)));
}finally {(figwheel.core._STAR_inline_code_message_max_column_STAR_ = _STAR_inline_code_message_max_column_STAR__orig_val__27559);
}}));
} else {
return promise_chain_27605.then((function (){
return figwheel.tools.heads_up.flash_loaded.call(null);
}));

}
}
} else {
return null;
}
} else {
return null;
}
});

cljs.core.add_watch.call(null,figwheel.core.state,new cljs.core.Keyword("figwheel.core","render-watcher","figwheel.core/render-watcher",2046135910),figwheel.core.render_watcher);

figwheel.core.immutable_ns_QMARK_ = (function figwheel$core$immutable_ns_QMARK_(ns){
var ns__$1 = cljs.core.name.call(null,ns);
var or__5045__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, ["cljs.nodejs",null,"goog",null,"figwheel.connect",null,"cljs.core",null,"figwheel.preload",null], null), null).call(null,ns__$1);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return ((goog.string.startsWith("clojure.",ns__$1)) || (goog.string.startsWith("goog.",ns__$1)));
}
});

figwheel.core.ns_exists_QMARK_ = (function figwheel$core$ns_exists_QMARK_(ns){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,figwheel.core.goog$module$goog$object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,ns),".")) == null)));
});

figwheel.core.reload_ns_QMARK_ = (function figwheel$core$reload_ns_QMARK_(namespace){
var meta_data = cljs.core.meta.call(null,namespace);
var and__5043__auto__ = cljs.core.not.call(null,figwheel.core.immutable_ns_QMARK_.call(null,namespace));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data));
if(and__5043__auto____$1){
var or__5045__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var or__5045__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data);
if(cljs.core.truth_(or__5045__auto____$1)){
return or__5045__auto____$1;
} else {
return figwheel.core.ns_exists_QMARK_.call(null,namespace);
}
}
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
});

figwheel.core.call_hooks = (function figwheel$core$call_hooks(var_args){
var args__5775__auto__ = [];
var len__5769__auto___27618 = arguments.length;
var i__5770__auto___27619 = (0);
while(true){
if((i__5770__auto___27619 < len__5769__auto___27618)){
args__5775__auto__.push((arguments[i__5770__auto___27619]));

var G__27620 = (i__5770__auto___27619 + (1));
i__5770__auto___27619 = G__27620;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(figwheel.core.call_hooks.cljs$core$IFn$_invoke$arity$variadic = (function (hook_key,args){
var hooks = cljs.core.keep.call(null,(function (p__27563){
var vec__27564 = p__27563;
var n = cljs.core.nth.call(null,vec__27564,(0),null);
var mdata = cljs.core.nth.call(null,vec__27564,(1),null);
var temp__5825__auto__ = cljs.core.get_in.call(null,mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"figwheel-hooks","figwheel-hooks",720015356),hook_key], null));
if(cljs.core.truth_(temp__5825__auto__)){
var f = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [n,f], null);
} else {
return null;
}
}),new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,figwheel.core.state)));
var seq__27567 = cljs.core.seq.call(null,hooks);
var chunk__27568 = null;
var count__27569 = (0);
var i__27570 = (0);
while(true){
if((i__27570 < count__27569)){
var vec__27579 = cljs.core._nth.call(null,chunk__27568,i__27570);
var n = cljs.core.nth.call(null,vec__27579,(0),null);
var f = cljs.core.nth.call(null,vec__27579,(1),null);
var temp__5823__auto___27621 = cljs.core.reduce.call(null,((function (seq__27567,chunk__27568,count__27569,i__27570,vec__27579,n,f,hooks){
return (function (p1__27545_SHARP_,p2__27546_SHARP_){
if(cljs.core.truth_(p1__27545_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__27545_SHARP_,p2__27546_SHARP_);
} else {
return null;
}
});})(seq__27567,chunk__27568,count__27569,i__27570,vec__27579,n,f,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5823__auto___27621)){
var hook_27622 = temp__5823__auto___27621;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_27622,args);
}catch (e27582){if((e27582 instanceof Error)){
var e_27623 = e27582;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_27623);
} else {
throw e27582;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__27624 = seq__27567;
var G__27625 = chunk__27568;
var G__27626 = count__27569;
var G__27627 = (i__27570 + (1));
seq__27567 = G__27624;
chunk__27568 = G__27625;
count__27569 = G__27626;
i__27570 = G__27627;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__27567);
if(temp__5825__auto__){
var seq__27567__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27567__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__27567__$1);
var G__27628 = cljs.core.chunk_rest.call(null,seq__27567__$1);
var G__27629 = c__5568__auto__;
var G__27630 = cljs.core.count.call(null,c__5568__auto__);
var G__27631 = (0);
seq__27567 = G__27628;
chunk__27568 = G__27629;
count__27569 = G__27630;
i__27570 = G__27631;
continue;
} else {
var vec__27583 = cljs.core.first.call(null,seq__27567__$1);
var n = cljs.core.nth.call(null,vec__27583,(0),null);
var f = cljs.core.nth.call(null,vec__27583,(1),null);
var temp__5823__auto___27632 = cljs.core.reduce.call(null,((function (seq__27567,chunk__27568,count__27569,i__27570,vec__27583,n,f,seq__27567__$1,temp__5825__auto__,hooks){
return (function (p1__27545_SHARP_,p2__27546_SHARP_){
if(cljs.core.truth_(p1__27545_SHARP_)){
return figwheel.core.goog$module$goog$object.get.call(null,p1__27545_SHARP_,p2__27546_SHARP_);
} else {
return null;
}
});})(seq__27567,chunk__27568,count__27569,i__27570,vec__27583,n,f,seq__27567__$1,temp__5825__auto__,hooks))
,goog.global,cljs.core.map.call(null,cljs.core.str,cljs.core.concat.call(null,clojure.string.split.call(null,n,/\./),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f], null))));
if(cljs.core.truth_(temp__5823__auto___27632)){
var hook_27633 = temp__5823__auto___27632;
figwheel.core.glog_info.call(null,figwheel.core.logger,["Calling ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));

try{cljs.core.apply.call(null,hook_27633,args);
}catch (e27586){if((e27586 instanceof Error)){
var e_27634 = e27586;
figwheel.core.glog_error.call(null,figwheel.core.logger,e_27634);
} else {
throw e27586;

}
}} else {
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Unable to find ",cljs.core.pr_str.call(null,hook_key)," hook - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
}


var G__27635 = cljs.core.next.call(null,seq__27567__$1);
var G__27636 = null;
var G__27637 = (0);
var G__27638 = (0);
seq__27567 = G__27635;
chunk__27568 = G__27636;
count__27569 = G__27637;
i__27570 = G__27638;
continue;
}
} else {
return null;
}
}
break;
}
}));

(figwheel.core.call_hooks.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(figwheel.core.call_hooks.cljs$lang$applyTo = (function (seq27561){
var G__27562 = cljs.core.first.call(null,seq27561);
var seq27561__$1 = cljs.core.next.call(null,seq27561);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27562,seq27561__$1);
}));


figwheel.core.reload_namespaces = (function figwheel$core$reload_namespaces(namespaces,figwheel_meta){
var figwheel_meta__$1 = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__27587){
var vec__27588 = p__27587;
var k = cljs.core.nth.call(null,vec__27588,(0),null);
var v = cljs.core.nth.call(null,vec__27588,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.name.call(null,k),v], null);
})),cljs.core.js__GT_clj.call(null,figwheel_meta,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
var namespaces__$1 = cljs.core.map.call(null,(function (p1__27547_SHARP_){
return cljs.core.with_meta.call(null,cljs.core.symbol.call(null,p1__27547_SHARP_),cljs.core.get.call(null,figwheel_meta__$1,p1__27547_SHARP_));
}),namespaces);
cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__27548_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,p1__27548_SHARP_,new cljs.core.Keyword("figwheel.core","metadata","figwheel.core/metadata",-720139885),figwheel_meta__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime());
}));

var to_reload = (cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not.call(null,figwheel.core.load_warninged_code);
if(and__5043__auto__){
return cljs.core.not_empty.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null)));
} else {
return and__5043__auto__;
}
})())?null:cljs.core.filter.call(null,(function (p1__27549_SHARP_){
return figwheel.core.reload_ns_QMARK_.call(null,p1__27549_SHARP_);
}),namespaces__$1));
if(cljs.core.empty_QMARK_.call(null,to_reload)){
} else {
figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"before-load","before-load",-2060117064),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));

setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.before-load","figwheel.before-load",58978771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),namespaces__$1], null));
}),(0));
}

var seq__27591_27639 = cljs.core.seq.call(null,to_reload);
var chunk__27592_27640 = null;
var count__27593_27641 = (0);
var i__27594_27642 = (0);
while(true){
if((i__27594_27642 < count__27593_27641)){
var ns_27643 = cljs.core._nth.call(null,chunk__27592_27640,i__27594_27642);
goog.require(cljs.core.name.call(null,ns_27643),true);


var G__27644 = seq__27591_27639;
var G__27645 = chunk__27592_27640;
var G__27646 = count__27593_27641;
var G__27647 = (i__27594_27642 + (1));
seq__27591_27639 = G__27644;
chunk__27592_27640 = G__27645;
count__27593_27641 = G__27646;
i__27594_27642 = G__27647;
continue;
} else {
var temp__5825__auto___27648 = cljs.core.seq.call(null,seq__27591_27639);
if(temp__5825__auto___27648){
var seq__27591_27649__$1 = temp__5825__auto___27648;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27591_27649__$1)){
var c__5568__auto___27650 = cljs.core.chunk_first.call(null,seq__27591_27649__$1);
var G__27651 = cljs.core.chunk_rest.call(null,seq__27591_27649__$1);
var G__27652 = c__5568__auto___27650;
var G__27653 = cljs.core.count.call(null,c__5568__auto___27650);
var G__27654 = (0);
seq__27591_27639 = G__27651;
chunk__27592_27640 = G__27652;
count__27593_27641 = G__27653;
i__27594_27642 = G__27654;
continue;
} else {
var ns_27655 = cljs.core.first.call(null,seq__27591_27649__$1);
goog.require(cljs.core.name.call(null,ns_27655),true);


var G__27656 = cljs.core.next.call(null,seq__27591_27649__$1);
var G__27657 = null;
var G__27658 = (0);
var G__27659 = (0);
seq__27591_27639 = G__27656;
chunk__27592_27640 = G__27657;
count__27593_27641 = G__27658;
i__27594_27642 = G__27659;
continue;
}
} else {
}
}
break;
}

var after_reload_fn_27660 = (function (){
try{if(cljs.core.truth_(cljs.core.not_empty.call(null,to_reload))){
figwheel.core.glog_info.call(null,figwheel.core.logger,["loaded ",cljs.core.pr_str.call(null,to_reload)].join(''));

figwheel.core.call_hooks.call(null,new cljs.core.Keyword(null,"after-load","after-load",-1278503285),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));

figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.after-load","figwheel.after-load",-1913099389),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reloaded-namespaces","reloaded-namespaces",1589557425),to_reload], null));
} else {
}

var temp__5825__auto__ = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.set.call(null,to_reload)),namespaces__$1));
if(cljs.core.truth_(temp__5825__auto__)){
var not_loaded = temp__5825__auto__;
return figwheel.core.glog_info.call(null,figwheel.core.logger,["did not load ",cljs.core.pr_str.call(null,not_loaded)].join(''));
} else {
return null;
}
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc,new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),cljs.core.PersistentArrayMap.EMPTY);
}});
if((((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined')) && ((typeof figwheel !== 'undefined') && (typeof figwheel.repl !== 'undefined') && (typeof figwheel.repl.after_reloads !== 'undefined')))){
figwheel.repl.after_reloads(after_reload_fn_27660);
} else {
setTimeout(after_reload_fn_27660,(100));
}

return null;
});
goog.exportSymbol('figwheel.core.reload_namespaces', figwheel.core.reload_namespaces);

figwheel.core.compile_warnings = (function figwheel$core$compile_warnings(warnings){
if(cljs.core.empty_QMARK_.call(null,warnings)){
} else {
setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-warnings","figwheel.compile-warnings",-2015032448),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warnings","warnings",-735437651),warnings], null));
}),(0));
}

cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"warnings","warnings",-735437651)], null),cljs.core.concat,warnings);

var seq__27595 = cljs.core.seq.call(null,warnings);
var chunk__27596 = null;
var count__27597 = (0);
var i__27598 = (0);
while(true){
if((i__27598 < count__27597)){
var warning = cljs.core._nth.call(null,chunk__27596,i__27598);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__27661 = seq__27595;
var G__27662 = chunk__27596;
var G__27663 = count__27597;
var G__27664 = (i__27598 + (1));
seq__27595 = G__27661;
chunk__27596 = G__27662;
count__27597 = G__27663;
i__27598 = G__27664;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq.call(null,seq__27595);
if(temp__5825__auto__){
var seq__27595__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27595__$1)){
var c__5568__auto__ = cljs.core.chunk_first.call(null,seq__27595__$1);
var G__27665 = cljs.core.chunk_rest.call(null,seq__27595__$1);
var G__27666 = c__5568__auto__;
var G__27667 = cljs.core.count.call(null,c__5568__auto__);
var G__27668 = (0);
seq__27595 = G__27665;
chunk__27596 = G__27666;
count__27597 = G__27667;
i__27598 = G__27668;
continue;
} else {
var warning = cljs.core.first.call(null,seq__27595__$1);
figwheel.core.glog_warning.call(null,figwheel.core.logger,["Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(warning))," in ",figwheel.core.file_line_column.call(null,warning)].join(''));


var G__27669 = cljs.core.next.call(null,seq__27595__$1);
var G__27670 = null;
var G__27671 = (0);
var G__27672 = (0);
seq__27595 = G__27669;
chunk__27596 = G__27670;
count__27597 = G__27671;
i__27598 = G__27672;
continue;
}
} else {
return null;
}
}
break;
}
});
goog.exportSymbol('figwheel.core.compile_warnings', figwheel.core.compile_warnings);

figwheel.core.compile_warnings_remote = (function figwheel$core$compile_warnings_remote(warnings_json){
return figwheel.core.compile_warnings.call(null,cljs.core.js__GT_clj.call(null,warnings_json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.compile_warnings_remote', figwheel.core.compile_warnings_remote);

figwheel.core.handle_exception = (function figwheel$core$handle_exception(p__27599){
var map__27600 = p__27599;
var map__27600__$1 = cljs.core.__destructure_map.call(null,map__27600);
var exception_data = map__27600__$1;
var file = cljs.core.get.call(null,map__27600__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var type = cljs.core.get.call(null,map__27600__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__27600__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{setTimeout((function (){
return figwheel.core.dispatch_event.call(null,new cljs.core.Keyword(null,"figwheel.compile-exception","figwheel.compile-exception",1092880746),exception_data);
}),(0));

cljs.core.swap_BANG_.call(null,figwheel.core.state,(function (p1__27550_SHARP_){
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,p1__27550_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"reload-started","reload-started",-1932451477)], null),(new Date()).getTime()),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715),new cljs.core.Keyword(null,"exception","exception",-335277064)], null),exception_data);
}));

return figwheel.core.glog_warning.call(null,figwheel.core.logger,(function (){var G__27601 = "Compile Exception - ";
var G__27601__$1 = (cljs.core.truth_((function (){var or__5045__auto__ = type;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return message;
}
})())?[G__27601,clojure.string.join.call(null," : ",cljs.core.filter.call(null,cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,message], null)))].join(''):G__27601);
if(cljs.core.truth_(file)){
return [G__27601__$1," in ",figwheel.core.file_line_column.call(null,exception_data)].join('');
} else {
return G__27601__$1;
}
})());
}finally {cljs.core.swap_BANG_.call(null,figwheel.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.core","reload-state","figwheel.core/reload-state",1887223715)], null),cljs.core.PersistentArrayMap.EMPTY);
}});
goog.exportSymbol('figwheel.core.handle_exception', figwheel.core.handle_exception);

figwheel.core.handle_exception_remote = (function figwheel$core$handle_exception_remote(exception_data){
return figwheel.core.handle_exception.call(null,cljs.core.js__GT_clj.call(null,exception_data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
goog.exportSymbol('figwheel.core.handle_exception_remote', figwheel.core.handle_exception_remote);

//# sourceMappingURL=core.js.map
