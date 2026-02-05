// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_24537 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._header[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,value);
} else {
var m__5392__auto__ = (devtools.format._header["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_24537.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_24538 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._has_body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,value);
} else {
var m__5392__auto__ = (devtools.format._has_body["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_24538.call(null,value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_24539 = (function (value){
var x__5393__auto__ = (((value == null))?null:value);
var m__5394__auto__ = (devtools.format._body[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,value);
} else {
var m__5392__auto__ = (devtools.format._body["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_24539.call(null,value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o24540 = temp__5823__auto__;
var temp__5823__auto____$1 = (o24540["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o24541 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o24541["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o24542 = temp__5823__auto____$2;
return (o24542["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o24543 = temp__5823__auto__;
var temp__5823__auto____$1 = (o24543["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o24544 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o24544["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o24545 = temp__5823__auto____$2;
return (o24545["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o24546 = temp__5823__auto__;
var temp__5823__auto____$1 = (o24546["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o24547 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o24547["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o24548 = temp__5823__auto____$2;
return (o24548["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o24549 = temp__5823__auto__;
var temp__5823__auto____$1 = (o24549["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o24550 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o24550["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o24551 = temp__5823__auto____$2;
return (o24551["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o24552 = temp__5823__auto__;
var temp__5823__auto____$1 = (o24552["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o24553 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o24553["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o24554 = temp__5823__auto____$2;
return (o24554["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o24555 = temp__5823__auto__;
var temp__5823__auto____$1 = (o24555["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o24556 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o24556["markup"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o24557 = temp__5823__auto____$2;
return (o24557["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o24558 = temp__5823__auto__;
var temp__5823__auto____$1 = (o24558["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o24559 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o24559["markup"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o24560 = temp__5823__auto____$2;
return (o24560["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24562 = arguments.length;
var i__5770__auto___24563 = (0);
while(true){
if((i__5770__auto___24563 < len__5769__auto___24562)){
args__5775__auto__.push((arguments[i__5770__auto___24563]));

var G__24564 = (i__5770__auto___24563 + (1));
i__5770__auto___24563 = G__24564;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq24561){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24561));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24566 = arguments.length;
var i__5770__auto___24567 = (0);
while(true){
if((i__5770__auto___24567 < len__5769__auto___24566)){
args__5775__auto__.push((arguments[i__5770__auto___24567]));

var G__24568 = (i__5770__auto___24567 + (1));
i__5770__auto___24567 = G__24568;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq24565){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24565));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24570 = arguments.length;
var i__5770__auto___24571 = (0);
while(true){
if((i__5770__auto___24571 < len__5769__auto___24570)){
args__5775__auto__.push((arguments[i__5770__auto___24571]));

var G__24572 = (i__5770__auto___24571 + (1));
i__5770__auto___24571 = G__24572;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq24569){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24569));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24574 = arguments.length;
var i__5770__auto___24575 = (0);
while(true){
if((i__5770__auto___24575 < len__5769__auto___24574)){
args__5775__auto__.push((arguments[i__5770__auto___24575]));

var G__24576 = (i__5770__auto___24575 + (1));
i__5770__auto___24575 = G__24576;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq24573){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24573));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24578 = arguments.length;
var i__5770__auto___24579 = (0);
while(true){
if((i__5770__auto___24579 < len__5769__auto___24578)){
args__5775__auto__.push((arguments[i__5770__auto___24579]));

var G__24580 = (i__5770__auto___24579 + (1));
i__5770__auto___24579 = G__24580;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq24577){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24577));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24582 = arguments.length;
var i__5770__auto___24583 = (0);
while(true){
if((i__5770__auto___24583 < len__5769__auto___24582)){
args__5775__auto__.push((arguments[i__5770__auto___24583]));

var G__24584 = (i__5770__auto___24583 + (1));
i__5770__auto___24583 = G__24584;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq24581){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24581));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24586 = arguments.length;
var i__5770__auto___24587 = (0);
while(true){
if((i__5770__auto___24587 < len__5769__auto___24586)){
args__5775__auto__.push((arguments[i__5770__auto___24587]));

var G__24588 = (i__5770__auto___24587 + (1));
i__5770__auto___24587 = G__24588;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq24585){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24585));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24596 = arguments.length;
var i__5770__auto___24597 = (0);
while(true){
if((i__5770__auto___24597 < len__5769__auto___24596)){
args__5775__auto__.push((arguments[i__5770__auto___24597]));

var G__24598 = (i__5770__auto___24597 + (1));
i__5770__auto___24597 = G__24598;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__24592){
var vec__24593 = p__24592;
var state_override = cljs.core.nth.call(null,vec__24593,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__24589_SHARP_){
return cljs.core.merge.call(null,p1__24589_SHARP_,state_override);
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq24590){
var G__24591 = cljs.core.first.call(null,seq24590);
var seq24590__$1 = cljs.core.next.call(null,seq24590);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24591,seq24590__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24600 = arguments.length;
var i__5770__auto___24601 = (0);
while(true){
if((i__5770__auto___24601 < len__5769__auto___24600)){
args__5775__auto__.push((arguments[i__5770__auto___24601]));

var G__24602 = (i__5770__auto___24601 + (1));
i__5770__auto___24601 = G__24602;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq24599){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24599));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5775__auto__ = [];
var len__5769__auto___24605 = arguments.length;
var i__5770__auto___24606 = (0);
while(true){
if((i__5770__auto___24606 < len__5769__auto___24605)){
args__5775__auto__.push((arguments[i__5770__auto___24606]));

var G__24607 = (i__5770__auto___24606 + (1));
i__5770__auto___24606 = G__24607;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq24603){
var G__24604 = cljs.core.first.call(null,seq24603);
var seq24603__$1 = cljs.core.next.call(null,seq24603);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24604,seq24603__$1);
}));


//# sourceMappingURL=format.js.map
