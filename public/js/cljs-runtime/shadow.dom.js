goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_16276 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_16276(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_16278 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_16278(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__15444 = coll;
var G__15445 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__15444,G__15445) : shadow.dom.lazy_native_coll_seq.call(null,G__15444,G__15445));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5142__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(el)));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__15491 = arguments.length;
switch (G__15491) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__15499 = arguments.length;
switch (G__15499) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__15525 = arguments.length;
switch (G__15525) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__15533 = arguments.length;
switch (G__15533) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__15540 = arguments.length;
switch (G__15540) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__15543 = arguments.length;
switch (G__15543) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e15544){if((e15544 instanceof Object)){
var e = e15544;
return console.log("didnt support attachEvent",el,e);
} else {
throw e15544;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5142__auto__ = (!((typeof document !== 'undefined')));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent((""+"on"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__15545 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__15546 = null;
var count__15547 = (0);
var i__15548 = (0);
while(true){
if((i__15548 < count__15547)){
var el = chunk__15546.cljs$core$IIndexed$_nth$arity$2(null,i__15548);
var handler_16324__$1 = ((function (seq__15545,chunk__15546,count__15547,i__15548,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15545,chunk__15546,count__15547,i__15548,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16324__$1);


var G__16325 = seq__15545;
var G__16326 = chunk__15546;
var G__16327 = count__15547;
var G__16328 = (i__15548 + (1));
seq__15545 = G__16325;
chunk__15546 = G__16326;
count__15547 = G__16327;
i__15548 = G__16328;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__15545);
if(temp__5823__auto__){
var seq__15545__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15545__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15545__$1);
var G__16332 = cljs.core.chunk_rest(seq__15545__$1);
var G__16333 = c__5673__auto__;
var G__16334 = cljs.core.count(c__5673__auto__);
var G__16335 = (0);
seq__15545 = G__16332;
chunk__15546 = G__16333;
count__15547 = G__16334;
i__15548 = G__16335;
continue;
} else {
var el = cljs.core.first(seq__15545__$1);
var handler_16336__$1 = ((function (seq__15545,chunk__15546,count__15547,i__15548,el,seq__15545__$1,temp__5823__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__15545,chunk__15546,count__15547,i__15548,el,seq__15545__$1,temp__5823__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_16336__$1);


var G__16337 = cljs.core.next(seq__15545__$1);
var G__16338 = null;
var G__16339 = (0);
var G__16340 = (0);
seq__15545 = G__16337;
chunk__15546 = G__16338;
count__15547 = G__16339;
i__15548 = G__16340;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__15554 = arguments.length;
switch (G__15554) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__15555 = cljs.core.seq(events);
var chunk__15556 = null;
var count__15557 = (0);
var i__15558 = (0);
while(true){
if((i__15558 < count__15557)){
var vec__15567 = chunk__15556.cljs$core$IIndexed$_nth$arity$2(null,i__15558);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15567,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15567,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16354 = seq__15555;
var G__16355 = chunk__15556;
var G__16356 = count__15557;
var G__16357 = (i__15558 + (1));
seq__15555 = G__16354;
chunk__15556 = G__16355;
count__15557 = G__16356;
i__15558 = G__16357;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__15555);
if(temp__5823__auto__){
var seq__15555__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15555__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15555__$1);
var G__16359 = cljs.core.chunk_rest(seq__15555__$1);
var G__16360 = c__5673__auto__;
var G__16361 = cljs.core.count(c__5673__auto__);
var G__16362 = (0);
seq__15555 = G__16359;
chunk__15556 = G__16360;
count__15557 = G__16361;
i__15558 = G__16362;
continue;
} else {
var vec__15570 = cljs.core.first(seq__15555__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15570,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15570,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__16363 = cljs.core.next(seq__15555__$1);
var G__16364 = null;
var G__16365 = (0);
var G__16366 = (0);
seq__15555 = G__16363;
chunk__15556 = G__16364;
count__15557 = G__16365;
i__15558 = G__16366;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__15573 = cljs.core.seq(styles);
var chunk__15574 = null;
var count__15575 = (0);
var i__15576 = (0);
while(true){
if((i__15576 < count__15575)){
var vec__15584 = chunk__15574.cljs$core$IIndexed$_nth$arity$2(null,i__15576);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15584,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15584,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16375 = seq__15573;
var G__16376 = chunk__15574;
var G__16377 = count__15575;
var G__16378 = (i__15576 + (1));
seq__15573 = G__16375;
chunk__15574 = G__16376;
count__15575 = G__16377;
i__15576 = G__16378;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__15573);
if(temp__5823__auto__){
var seq__15573__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15573__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15573__$1);
var G__16385 = cljs.core.chunk_rest(seq__15573__$1);
var G__16386 = c__5673__auto__;
var G__16387 = cljs.core.count(c__5673__auto__);
var G__16388 = (0);
seq__15573 = G__16385;
chunk__15574 = G__16386;
count__15575 = G__16387;
i__15576 = G__16388;
continue;
} else {
var vec__15587 = cljs.core.first(seq__15573__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15587,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15587,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__16390 = cljs.core.next(seq__15573__$1);
var G__16391 = null;
var G__16392 = (0);
var G__16393 = (0);
seq__15573 = G__16390;
chunk__15574 = G__16391;
count__15575 = G__16392;
i__15576 = G__16393;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__15602_16394 = key;
var G__15602_16395__$1 = (((G__15602_16394 instanceof cljs.core.Keyword))?G__15602_16394.fqn:null);
switch (G__15602_16395__$1) {
case "id":
(el.id = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "class":
(el.className = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_16403 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5142__auto__ = goog.string.startsWith(ks_16403,"data-");
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return goog.string.startsWith(ks_16403,"aria-");
}
})())){
el.setAttribute(ks_16403,value);
} else {
(el[ks_16403] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class));
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw (""+"cant have id after class?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec__$1));
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__15611){
var map__15612 = p__15611;
var map__15612__$1 = cljs.core.__destructure_map(map__15612);
var props = map__15612__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15612__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__15613 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15613,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15613,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15613,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__15616 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__15616,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__15616;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__15618 = arguments.length;
switch (G__15618) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5823__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5823__auto__)){
var n = temp__5823__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__15623){
var vec__15624 = p__15623;
var seq__15625 = cljs.core.seq(vec__15624);
var first__15626 = cljs.core.first(seq__15625);
var seq__15625__$1 = cljs.core.next(seq__15625);
var nn = first__15626;
var first__15626__$1 = cljs.core.first(seq__15625__$1);
var seq__15625__$2 = cljs.core.next(seq__15625__$1);
var np = first__15626__$1;
var nc = seq__15625__$2;
var node = vec__15624;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15627 = nn;
var G__15628 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15627,G__15628) : create_fn.call(null,G__15627,G__15628));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__15629 = nn;
var G__15630 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__15629,G__15630) : create_fn.call(null,G__15629,G__15630));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__15631 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15631,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15631,(1),null);
var seq__15634_16420 = cljs.core.seq(node_children);
var chunk__15635_16421 = null;
var count__15636_16422 = (0);
var i__15637_16423 = (0);
while(true){
if((i__15637_16423 < count__15636_16422)){
var child_struct_16424 = chunk__15635_16421.cljs$core$IIndexed$_nth$arity$2(null,i__15637_16423);
var children_16425 = shadow.dom.dom_node(child_struct_16424);
if(cljs.core.seq_QMARK_(children_16425)){
var seq__15678_16426 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16425));
var chunk__15680_16427 = null;
var count__15681_16428 = (0);
var i__15682_16429 = (0);
while(true){
if((i__15682_16429 < count__15681_16428)){
var child_16430 = chunk__15680_16427.cljs$core$IIndexed$_nth$arity$2(null,i__15682_16429);
if(cljs.core.truth_(child_16430)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16430);


var G__16431 = seq__15678_16426;
var G__16432 = chunk__15680_16427;
var G__16433 = count__15681_16428;
var G__16434 = (i__15682_16429 + (1));
seq__15678_16426 = G__16431;
chunk__15680_16427 = G__16432;
count__15681_16428 = G__16433;
i__15682_16429 = G__16434;
continue;
} else {
var G__16436 = seq__15678_16426;
var G__16437 = chunk__15680_16427;
var G__16438 = count__15681_16428;
var G__16439 = (i__15682_16429 + (1));
seq__15678_16426 = G__16436;
chunk__15680_16427 = G__16437;
count__15681_16428 = G__16438;
i__15682_16429 = G__16439;
continue;
}
} else {
var temp__5823__auto___16440 = cljs.core.seq(seq__15678_16426);
if(temp__5823__auto___16440){
var seq__15678_16441__$1 = temp__5823__auto___16440;
if(cljs.core.chunked_seq_QMARK_(seq__15678_16441__$1)){
var c__5673__auto___16443 = cljs.core.chunk_first(seq__15678_16441__$1);
var G__16444 = cljs.core.chunk_rest(seq__15678_16441__$1);
var G__16445 = c__5673__auto___16443;
var G__16446 = cljs.core.count(c__5673__auto___16443);
var G__16447 = (0);
seq__15678_16426 = G__16444;
chunk__15680_16427 = G__16445;
count__15681_16428 = G__16446;
i__15682_16429 = G__16447;
continue;
} else {
var child_16448 = cljs.core.first(seq__15678_16441__$1);
if(cljs.core.truth_(child_16448)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16448);


var G__16450 = cljs.core.next(seq__15678_16441__$1);
var G__16451 = null;
var G__16452 = (0);
var G__16453 = (0);
seq__15678_16426 = G__16450;
chunk__15680_16427 = G__16451;
count__15681_16428 = G__16452;
i__15682_16429 = G__16453;
continue;
} else {
var G__16455 = cljs.core.next(seq__15678_16441__$1);
var G__16456 = null;
var G__16457 = (0);
var G__16458 = (0);
seq__15678_16426 = G__16455;
chunk__15680_16427 = G__16456;
count__15681_16428 = G__16457;
i__15682_16429 = G__16458;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16425);
}


var G__16460 = seq__15634_16420;
var G__16461 = chunk__15635_16421;
var G__16462 = count__15636_16422;
var G__16463 = (i__15637_16423 + (1));
seq__15634_16420 = G__16460;
chunk__15635_16421 = G__16461;
count__15636_16422 = G__16462;
i__15637_16423 = G__16463;
continue;
} else {
var temp__5823__auto___16465 = cljs.core.seq(seq__15634_16420);
if(temp__5823__auto___16465){
var seq__15634_16466__$1 = temp__5823__auto___16465;
if(cljs.core.chunked_seq_QMARK_(seq__15634_16466__$1)){
var c__5673__auto___16467 = cljs.core.chunk_first(seq__15634_16466__$1);
var G__16468 = cljs.core.chunk_rest(seq__15634_16466__$1);
var G__16469 = c__5673__auto___16467;
var G__16470 = cljs.core.count(c__5673__auto___16467);
var G__16471 = (0);
seq__15634_16420 = G__16468;
chunk__15635_16421 = G__16469;
count__15636_16422 = G__16470;
i__15637_16423 = G__16471;
continue;
} else {
var child_struct_16472 = cljs.core.first(seq__15634_16466__$1);
var children_16473 = shadow.dom.dom_node(child_struct_16472);
if(cljs.core.seq_QMARK_(children_16473)){
var seq__15684_16474 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_16473));
var chunk__15686_16475 = null;
var count__15687_16476 = (0);
var i__15688_16477 = (0);
while(true){
if((i__15688_16477 < count__15687_16476)){
var child_16480 = chunk__15686_16475.cljs$core$IIndexed$_nth$arity$2(null,i__15688_16477);
if(cljs.core.truth_(child_16480)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16480);


var G__16481 = seq__15684_16474;
var G__16482 = chunk__15686_16475;
var G__16483 = count__15687_16476;
var G__16484 = (i__15688_16477 + (1));
seq__15684_16474 = G__16481;
chunk__15686_16475 = G__16482;
count__15687_16476 = G__16483;
i__15688_16477 = G__16484;
continue;
} else {
var G__16487 = seq__15684_16474;
var G__16488 = chunk__15686_16475;
var G__16489 = count__15687_16476;
var G__16490 = (i__15688_16477 + (1));
seq__15684_16474 = G__16487;
chunk__15686_16475 = G__16488;
count__15687_16476 = G__16489;
i__15688_16477 = G__16490;
continue;
}
} else {
var temp__5823__auto___16493__$1 = cljs.core.seq(seq__15684_16474);
if(temp__5823__auto___16493__$1){
var seq__15684_16494__$1 = temp__5823__auto___16493__$1;
if(cljs.core.chunked_seq_QMARK_(seq__15684_16494__$1)){
var c__5673__auto___16495 = cljs.core.chunk_first(seq__15684_16494__$1);
var G__16500 = cljs.core.chunk_rest(seq__15684_16494__$1);
var G__16501 = c__5673__auto___16495;
var G__16502 = cljs.core.count(c__5673__auto___16495);
var G__16503 = (0);
seq__15684_16474 = G__16500;
chunk__15686_16475 = G__16501;
count__15687_16476 = G__16502;
i__15688_16477 = G__16503;
continue;
} else {
var child_16505 = cljs.core.first(seq__15684_16494__$1);
if(cljs.core.truth_(child_16505)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_16505);


var G__16506 = cljs.core.next(seq__15684_16494__$1);
var G__16507 = null;
var G__16508 = (0);
var G__16509 = (0);
seq__15684_16474 = G__16506;
chunk__15686_16475 = G__16507;
count__15687_16476 = G__16508;
i__15688_16477 = G__16509;
continue;
} else {
var G__16511 = cljs.core.next(seq__15684_16494__$1);
var G__16512 = null;
var G__16513 = (0);
var G__16514 = (0);
seq__15684_16474 = G__16511;
chunk__15686_16475 = G__16512;
count__15687_16476 = G__16513;
i__15688_16477 = G__16514;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_16473);
}


var G__16515 = cljs.core.next(seq__15634_16466__$1);
var G__16516 = null;
var G__16517 = (0);
var G__16518 = (0);
seq__15634_16420 = G__16515;
chunk__15635_16421 = G__16516;
count__15636_16422 = G__16517;
i__15637_16423 = G__16518;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__15693 = cljs.core.seq(node);
var chunk__15694 = null;
var count__15695 = (0);
var i__15696 = (0);
while(true){
if((i__15696 < count__15695)){
var n = chunk__15694.cljs$core$IIndexed$_nth$arity$2(null,i__15696);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16526 = seq__15693;
var G__16527 = chunk__15694;
var G__16528 = count__15695;
var G__16529 = (i__15696 + (1));
seq__15693 = G__16526;
chunk__15694 = G__16527;
count__15695 = G__16528;
i__15696 = G__16529;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__15693);
if(temp__5823__auto__){
var seq__15693__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15693__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15693__$1);
var G__16530 = cljs.core.chunk_rest(seq__15693__$1);
var G__16531 = c__5673__auto__;
var G__16532 = cljs.core.count(c__5673__auto__);
var G__16533 = (0);
seq__15693 = G__16530;
chunk__15694 = G__16531;
count__15695 = G__16532;
i__15696 = G__16533;
continue;
} else {
var n = cljs.core.first(seq__15693__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__16535 = cljs.core.next(seq__15693__$1);
var G__16536 = null;
var G__16537 = (0);
var G__16538 = (0);
seq__15693 = G__16535;
chunk__15694 = G__16536;
count__15695 = G__16537;
i__15696 = G__16538;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__15701 = arguments.length;
switch (G__15701) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__15703 = arguments.length;
switch (G__15703) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__15706 = arguments.length;
switch (G__15706) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5142__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute((""+"data-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(key))),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16607 = arguments.length;
var i__5877__auto___16608 = (0);
while(true){
if((i__5877__auto___16608 < len__5876__auto___16607)){
args__5882__auto__.push((arguments[i__5877__auto___16608]));

var G__16610 = (i__5877__auto___16608 + (1));
i__5877__auto___16608 = G__16610;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__15714_16613 = cljs.core.seq(nodes);
var chunk__15715_16614 = null;
var count__15716_16615 = (0);
var i__15717_16616 = (0);
while(true){
if((i__15717_16616 < count__15716_16615)){
var node_16618 = chunk__15715_16614.cljs$core$IIndexed$_nth$arity$2(null,i__15717_16616);
fragment.appendChild(shadow.dom._to_dom(node_16618));


var G__16620 = seq__15714_16613;
var G__16621 = chunk__15715_16614;
var G__16622 = count__15716_16615;
var G__16623 = (i__15717_16616 + (1));
seq__15714_16613 = G__16620;
chunk__15715_16614 = G__16621;
count__15716_16615 = G__16622;
i__15717_16616 = G__16623;
continue;
} else {
var temp__5823__auto___16624 = cljs.core.seq(seq__15714_16613);
if(temp__5823__auto___16624){
var seq__15714_16625__$1 = temp__5823__auto___16624;
if(cljs.core.chunked_seq_QMARK_(seq__15714_16625__$1)){
var c__5673__auto___16626 = cljs.core.chunk_first(seq__15714_16625__$1);
var G__16627 = cljs.core.chunk_rest(seq__15714_16625__$1);
var G__16628 = c__5673__auto___16626;
var G__16629 = cljs.core.count(c__5673__auto___16626);
var G__16630 = (0);
seq__15714_16613 = G__16627;
chunk__15715_16614 = G__16628;
count__15716_16615 = G__16629;
i__15717_16616 = G__16630;
continue;
} else {
var node_16631 = cljs.core.first(seq__15714_16625__$1);
fragment.appendChild(shadow.dom._to_dom(node_16631));


var G__16632 = cljs.core.next(seq__15714_16625__$1);
var G__16633 = null;
var G__16634 = (0);
var G__16635 = (0);
seq__15714_16613 = G__16632;
chunk__15715_16614 = G__16633;
count__15716_16615 = G__16634;
i__15717_16616 = G__16635;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq15713){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq15713));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__15720_16638 = cljs.core.seq(scripts);
var chunk__15721_16639 = null;
var count__15722_16640 = (0);
var i__15723_16641 = (0);
while(true){
if((i__15723_16641 < count__15722_16640)){
var vec__15731_16642 = chunk__15721_16639.cljs$core$IIndexed$_nth$arity$2(null,i__15723_16641);
var script_tag_16643 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15731_16642,(0),null);
var script_body_16644 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15731_16642,(1),null);
eval(script_body_16644);


var G__16645 = seq__15720_16638;
var G__16646 = chunk__15721_16639;
var G__16647 = count__15722_16640;
var G__16648 = (i__15723_16641 + (1));
seq__15720_16638 = G__16645;
chunk__15721_16639 = G__16646;
count__15722_16640 = G__16647;
i__15723_16641 = G__16648;
continue;
} else {
var temp__5823__auto___16649 = cljs.core.seq(seq__15720_16638);
if(temp__5823__auto___16649){
var seq__15720_16650__$1 = temp__5823__auto___16649;
if(cljs.core.chunked_seq_QMARK_(seq__15720_16650__$1)){
var c__5673__auto___16651 = cljs.core.chunk_first(seq__15720_16650__$1);
var G__16652 = cljs.core.chunk_rest(seq__15720_16650__$1);
var G__16653 = c__5673__auto___16651;
var G__16654 = cljs.core.count(c__5673__auto___16651);
var G__16655 = (0);
seq__15720_16638 = G__16652;
chunk__15721_16639 = G__16653;
count__15722_16640 = G__16654;
i__15723_16641 = G__16655;
continue;
} else {
var vec__15734_16656 = cljs.core.first(seq__15720_16650__$1);
var script_tag_16657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15734_16656,(0),null);
var script_body_16658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15734_16656,(1),null);
eval(script_body_16658);


var G__16659 = cljs.core.next(seq__15720_16650__$1);
var G__16660 = null;
var G__16661 = (0);
var G__16662 = (0);
seq__15720_16638 = G__16659;
chunk__15721_16639 = G__16660;
count__15722_16640 = G__16661;
i__15723_16641 = G__16662;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__15737){
var vec__15738 = p__15737;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15738,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15738,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__15757 = arguments.length;
switch (G__15757) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | 0))+"px");
});
shadow.dom.pct = (function shadow$dom$pct(value){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)+"%");
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__15773 = cljs.core.seq(style_keys);
var chunk__15775 = null;
var count__15777 = (0);
var i__15779 = (0);
while(true){
if((i__15779 < count__15777)){
var it = chunk__15775.cljs$core$IIndexed$_nth$arity$2(null,i__15779);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16684 = seq__15773;
var G__16685 = chunk__15775;
var G__16686 = count__15777;
var G__16687 = (i__15779 + (1));
seq__15773 = G__16684;
chunk__15775 = G__16685;
count__15777 = G__16686;
i__15779 = G__16687;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__15773);
if(temp__5823__auto__){
var seq__15773__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15773__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__15773__$1);
var G__16689 = cljs.core.chunk_rest(seq__15773__$1);
var G__16690 = c__5673__auto__;
var G__16691 = cljs.core.count(c__5673__auto__);
var G__16692 = (0);
seq__15773 = G__16689;
chunk__15775 = G__16690;
count__15777 = G__16691;
i__15779 = G__16692;
continue;
} else {
var it = cljs.core.first(seq__15773__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__16694 = cljs.core.next(seq__15773__$1);
var G__16695 = null;
var G__16696 = (0);
var G__16697 = (0);
seq__15773 = G__16694;
chunk__15775 = G__16695;
count__15777 = G__16696;
i__15779 = G__16697;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k15783,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__15794 = k15783;
var G__15794__$1 = (((G__15794 instanceof cljs.core.Keyword))?G__15794.fqn:null);
switch (G__15794__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15783,else__5451__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__15795){
var vec__15796 = p__15795;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15796,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15796,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15782){
var self__ = this;
var G__15782__$1 = this;
return (new cljs.core.RecordIter((0),G__15782__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15784,other15785){
var self__ = this;
var this15784__$1 = this;
return (((!((other15785 == null)))) && ((((this15784__$1.constructor === other15785.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15784__$1.x,other15785.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15784__$1.y,other15785.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15784__$1.__extmap,other15785.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k15783){
var self__ = this;
var this__5455__auto____$1 = this;
var G__15815 = k15783;
var G__15815__$1 = (((G__15815 instanceof cljs.core.Keyword))?G__15815.fqn:null);
switch (G__15815__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15783);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__15782){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__15816 = cljs.core.keyword_identical_QMARK_;
var expr__15817 = k__5457__auto__;
if(cljs.core.truth_((pred__15816.cljs$core$IFn$_invoke$arity$2 ? pred__15816.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__15817) : pred__15816.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__15817)))){
return (new shadow.dom.Coordinate(G__15782,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15816.cljs$core$IFn$_invoke$arity$2 ? pred__15816.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__15817) : pred__15816.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__15817)))){
return (new shadow.dom.Coordinate(self__.x,G__15782,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__15782),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__15782){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__15782,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__15792){
var extmap__5490__auto__ = (function (){var G__15821 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15792,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__15792)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__15821);
} else {
return G__15821;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__15792),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__15792),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k15831,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__15841 = k15831;
var G__15841__$1 = (((G__15841 instanceof cljs.core.Keyword))?G__15841.fqn:null);
switch (G__15841__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k15831,else__5451__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__15843){
var vec__15845 = p__15843;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15845,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15845,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.dom.Size{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__15830){
var self__ = this;
var G__15830__$1 = this;
return (new cljs.core.RecordIter((0),G__15830__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this15832,other15833){
var self__ = this;
var this15832__$1 = this;
return (((!((other15833 == null)))) && ((((this15832__$1.constructor === other15833.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15832__$1.w,other15833.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15832__$1.h,other15833.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this15832__$1.__extmap,other15833.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k15831){
var self__ = this;
var this__5455__auto____$1 = this;
var G__15881 = k15831;
var G__15881__$1 = (((G__15881 instanceof cljs.core.Keyword))?G__15881.fqn:null);
switch (G__15881__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k15831);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__15830){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__15883 = cljs.core.keyword_identical_QMARK_;
var expr__15884 = k__5457__auto__;
if(cljs.core.truth_((pred__15883.cljs$core$IFn$_invoke$arity$2 ? pred__15883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__15884) : pred__15883.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__15884)))){
return (new shadow.dom.Size(G__15830,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__15883.cljs$core$IFn$_invoke$arity$2 ? pred__15883.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__15884) : pred__15883.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__15884)))){
return (new shadow.dom.Size(self__.w,G__15830,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__15830),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__15830){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__15830,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__15838){
var extmap__5490__auto__ = (function (){var G__16012 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__15838,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__15838)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__16012);
} else {
return G__16012;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__15838),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__15838),null,cljs.core.not_empty(extmap__5490__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5738__auto__ = opts;
var l__5739__auto__ = a__5738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5739__auto__)){
var G__16774 = (i + (1));
var G__16775 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__16774;
ret = G__16775;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__16044){
var vec__16045 = p__16044;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16045,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16045,(1),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))));
}),query_params))));
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__16049 = arguments.length;
switch (G__16049) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5821__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5821__auto__)){
var child = temp__5821__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__16789 = ps;
var G__16790 = (i + (1));
el__$1 = G__16789;
i = G__16790;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__16076 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16076,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16076,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16076,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__16079_16808 = cljs.core.seq(props);
var chunk__16080_16809 = null;
var count__16081_16810 = (0);
var i__16082_16811 = (0);
while(true){
if((i__16082_16811 < count__16081_16810)){
var vec__16111_16813 = chunk__16080_16809.cljs$core$IIndexed$_nth$arity$2(null,i__16082_16811);
var k_16814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111_16813,(0),null);
var v_16815 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16111_16813,(1),null);
el.setAttributeNS((function (){var temp__5823__auto__ = cljs.core.namespace(k_16814);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16814),v_16815);


var G__16817 = seq__16079_16808;
var G__16818 = chunk__16080_16809;
var G__16819 = count__16081_16810;
var G__16820 = (i__16082_16811 + (1));
seq__16079_16808 = G__16817;
chunk__16080_16809 = G__16818;
count__16081_16810 = G__16819;
i__16082_16811 = G__16820;
continue;
} else {
var temp__5823__auto___16822 = cljs.core.seq(seq__16079_16808);
if(temp__5823__auto___16822){
var seq__16079_16823__$1 = temp__5823__auto___16822;
if(cljs.core.chunked_seq_QMARK_(seq__16079_16823__$1)){
var c__5673__auto___16824 = cljs.core.chunk_first(seq__16079_16823__$1);
var G__16825 = cljs.core.chunk_rest(seq__16079_16823__$1);
var G__16826 = c__5673__auto___16824;
var G__16827 = cljs.core.count(c__5673__auto___16824);
var G__16828 = (0);
seq__16079_16808 = G__16825;
chunk__16080_16809 = G__16826;
count__16081_16810 = G__16827;
i__16082_16811 = G__16828;
continue;
} else {
var vec__16140_16829 = cljs.core.first(seq__16079_16823__$1);
var k_16830 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16140_16829,(0),null);
var v_16831 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16140_16829,(1),null);
el.setAttributeNS((function (){var temp__5823__auto____$1 = cljs.core.namespace(k_16830);
if(cljs.core.truth_(temp__5823__auto____$1)){
var ns = temp__5823__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_16830),v_16831);


var G__16834 = cljs.core.next(seq__16079_16823__$1);
var G__16835 = null;
var G__16836 = (0);
var G__16837 = (0);
seq__16079_16808 = G__16834;
chunk__16080_16809 = G__16835;
count__16081_16810 = G__16836;
i__16082_16811 = G__16837;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__16159 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16159,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16159,(1),null);
var seq__16162_16845 = cljs.core.seq(node_children);
var chunk__16164_16846 = null;
var count__16165_16847 = (0);
var i__16166_16848 = (0);
while(true){
if((i__16166_16848 < count__16165_16847)){
var child_struct_16849 = chunk__16164_16846.cljs$core$IIndexed$_nth$arity$2(null,i__16166_16848);
if((!((child_struct_16849 == null)))){
if(typeof child_struct_16849 === 'string'){
var text_16866 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16866)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16849)));
} else {
var children_16868 = shadow.dom.svg_node(child_struct_16849);
if(cljs.core.seq_QMARK_(children_16868)){
var seq__16196_16869 = cljs.core.seq(children_16868);
var chunk__16198_16870 = null;
var count__16199_16871 = (0);
var i__16200_16872 = (0);
while(true){
if((i__16200_16872 < count__16199_16871)){
var child_16874 = chunk__16198_16870.cljs$core$IIndexed$_nth$arity$2(null,i__16200_16872);
if(cljs.core.truth_(child_16874)){
node.appendChild(child_16874);


var G__16875 = seq__16196_16869;
var G__16876 = chunk__16198_16870;
var G__16877 = count__16199_16871;
var G__16878 = (i__16200_16872 + (1));
seq__16196_16869 = G__16875;
chunk__16198_16870 = G__16876;
count__16199_16871 = G__16877;
i__16200_16872 = G__16878;
continue;
} else {
var G__16879 = seq__16196_16869;
var G__16880 = chunk__16198_16870;
var G__16881 = count__16199_16871;
var G__16882 = (i__16200_16872 + (1));
seq__16196_16869 = G__16879;
chunk__16198_16870 = G__16880;
count__16199_16871 = G__16881;
i__16200_16872 = G__16882;
continue;
}
} else {
var temp__5823__auto___16883 = cljs.core.seq(seq__16196_16869);
if(temp__5823__auto___16883){
var seq__16196_16885__$1 = temp__5823__auto___16883;
if(cljs.core.chunked_seq_QMARK_(seq__16196_16885__$1)){
var c__5673__auto___16889 = cljs.core.chunk_first(seq__16196_16885__$1);
var G__16890 = cljs.core.chunk_rest(seq__16196_16885__$1);
var G__16891 = c__5673__auto___16889;
var G__16892 = cljs.core.count(c__5673__auto___16889);
var G__16893 = (0);
seq__16196_16869 = G__16890;
chunk__16198_16870 = G__16891;
count__16199_16871 = G__16892;
i__16200_16872 = G__16893;
continue;
} else {
var child_16895 = cljs.core.first(seq__16196_16885__$1);
if(cljs.core.truth_(child_16895)){
node.appendChild(child_16895);


var G__16896 = cljs.core.next(seq__16196_16885__$1);
var G__16897 = null;
var G__16898 = (0);
var G__16899 = (0);
seq__16196_16869 = G__16896;
chunk__16198_16870 = G__16897;
count__16199_16871 = G__16898;
i__16200_16872 = G__16899;
continue;
} else {
var G__16901 = cljs.core.next(seq__16196_16885__$1);
var G__16902 = null;
var G__16903 = (0);
var G__16904 = (0);
seq__16196_16869 = G__16901;
chunk__16198_16870 = G__16902;
count__16199_16871 = G__16903;
i__16200_16872 = G__16904;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16868);
}
}


var G__16909 = seq__16162_16845;
var G__16910 = chunk__16164_16846;
var G__16911 = count__16165_16847;
var G__16912 = (i__16166_16848 + (1));
seq__16162_16845 = G__16909;
chunk__16164_16846 = G__16910;
count__16165_16847 = G__16911;
i__16166_16848 = G__16912;
continue;
} else {
var G__16914 = seq__16162_16845;
var G__16915 = chunk__16164_16846;
var G__16916 = count__16165_16847;
var G__16917 = (i__16166_16848 + (1));
seq__16162_16845 = G__16914;
chunk__16164_16846 = G__16915;
count__16165_16847 = G__16916;
i__16166_16848 = G__16917;
continue;
}
} else {
var temp__5823__auto___16919 = cljs.core.seq(seq__16162_16845);
if(temp__5823__auto___16919){
var seq__16162_16921__$1 = temp__5823__auto___16919;
if(cljs.core.chunked_seq_QMARK_(seq__16162_16921__$1)){
var c__5673__auto___16922 = cljs.core.chunk_first(seq__16162_16921__$1);
var G__16924 = cljs.core.chunk_rest(seq__16162_16921__$1);
var G__16925 = c__5673__auto___16922;
var G__16926 = cljs.core.count(c__5673__auto___16922);
var G__16927 = (0);
seq__16162_16845 = G__16924;
chunk__16164_16846 = G__16925;
count__16165_16847 = G__16926;
i__16166_16848 = G__16927;
continue;
} else {
var child_struct_16930 = cljs.core.first(seq__16162_16921__$1);
if((!((child_struct_16930 == null)))){
if(typeof child_struct_16930 === 'string'){
var text_16933 = (node["textContent"]);
(node["textContent"] = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_16933)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_struct_16930)));
} else {
var children_16934 = shadow.dom.svg_node(child_struct_16930);
if(cljs.core.seq_QMARK_(children_16934)){
var seq__16222_16938 = cljs.core.seq(children_16934);
var chunk__16224_16939 = null;
var count__16225_16940 = (0);
var i__16226_16941 = (0);
while(true){
if((i__16226_16941 < count__16225_16940)){
var child_16942 = chunk__16224_16939.cljs$core$IIndexed$_nth$arity$2(null,i__16226_16941);
if(cljs.core.truth_(child_16942)){
node.appendChild(child_16942);


var G__16943 = seq__16222_16938;
var G__16944 = chunk__16224_16939;
var G__16945 = count__16225_16940;
var G__16946 = (i__16226_16941 + (1));
seq__16222_16938 = G__16943;
chunk__16224_16939 = G__16944;
count__16225_16940 = G__16945;
i__16226_16941 = G__16946;
continue;
} else {
var G__16947 = seq__16222_16938;
var G__16948 = chunk__16224_16939;
var G__16949 = count__16225_16940;
var G__16950 = (i__16226_16941 + (1));
seq__16222_16938 = G__16947;
chunk__16224_16939 = G__16948;
count__16225_16940 = G__16949;
i__16226_16941 = G__16950;
continue;
}
} else {
var temp__5823__auto___16951__$1 = cljs.core.seq(seq__16222_16938);
if(temp__5823__auto___16951__$1){
var seq__16222_16952__$1 = temp__5823__auto___16951__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16222_16952__$1)){
var c__5673__auto___16953 = cljs.core.chunk_first(seq__16222_16952__$1);
var G__16954 = cljs.core.chunk_rest(seq__16222_16952__$1);
var G__16955 = c__5673__auto___16953;
var G__16956 = cljs.core.count(c__5673__auto___16953);
var G__16957 = (0);
seq__16222_16938 = G__16954;
chunk__16224_16939 = G__16955;
count__16225_16940 = G__16956;
i__16226_16941 = G__16957;
continue;
} else {
var child_16958 = cljs.core.first(seq__16222_16952__$1);
if(cljs.core.truth_(child_16958)){
node.appendChild(child_16958);


var G__16959 = cljs.core.next(seq__16222_16952__$1);
var G__16960 = null;
var G__16961 = (0);
var G__16962 = (0);
seq__16222_16938 = G__16959;
chunk__16224_16939 = G__16960;
count__16225_16940 = G__16961;
i__16226_16941 = G__16962;
continue;
} else {
var G__16963 = cljs.core.next(seq__16222_16952__$1);
var G__16964 = null;
var G__16965 = (0);
var G__16966 = (0);
seq__16222_16938 = G__16963;
chunk__16224_16939 = G__16964;
count__16225_16940 = G__16965;
i__16226_16941 = G__16966;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_16934);
}
}


var G__16968 = cljs.core.next(seq__16162_16921__$1);
var G__16969 = null;
var G__16970 = (0);
var G__16971 = (0);
seq__16162_16845 = G__16968;
chunk__16164_16846 = G__16969;
count__16165_16847 = G__16970;
i__16166_16848 = G__16971;
continue;
} else {
var G__16972 = cljs.core.next(seq__16162_16921__$1);
var G__16973 = null;
var G__16974 = (0);
var G__16975 = (0);
seq__16162_16845 = G__16972;
chunk__16164_16846 = G__16973;
count__16165_16847 = G__16974;
i__16166_16848 = G__16975;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16979 = arguments.length;
var i__5877__auto___16981 = (0);
while(true){
if((i__5877__auto___16981 < len__5876__auto___16979)){
args__5882__auto__.push((arguments[i__5877__auto___16981]));

var G__16982 = (i__5877__auto___16981 + (1));
i__5877__auto___16981 = G__16982;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq16247){
var G__16248 = cljs.core.first(seq16247);
var seq16247__$1 = cljs.core.next(seq16247);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16248,seq16247__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
