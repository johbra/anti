goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18249 = (function (f,blockable,meta18250){
this.f = f;
this.blockable = blockable;
this.meta18250 = meta18250;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18251,meta18250__$1){
var self__ = this;
var _18251__$1 = this;
return (new cljs.core.async.t_cljs$core$async18249(self__.f,self__.blockable,meta18250__$1));
}));

(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18251){
var self__ = this;
var _18251__$1 = this;
return self__.meta18250;
}));

(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async18249.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async18249.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta18250","meta18250",-237740565,null)], null);
}));

(cljs.core.async.t_cljs$core$async18249.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18249.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18249");

(cljs.core.async.t_cljs$core$async18249.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18249");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18249.
 */
cljs.core.async.__GT_t_cljs$core$async18249 = (function cljs$core$async$__GT_t_cljs$core$async18249(f,blockable,meta18250){
return (new cljs.core.async.t_cljs$core$async18249(f,blockable,meta18250));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__18242 = arguments.length;
switch (G__18242) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async18249(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__18275 = arguments.length;
switch (G__18275) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error((""+"Assert failed: "+"buffer must be supplied when transducer is"+"\n"+"buf-or-n")));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__18281 = arguments.length;
switch (G__18281) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__18293 = arguments.length;
switch (G__18293) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_21462 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21462) : fn1.call(null,val_21462));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_21462) : fn1.call(null,val_21462));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__18300 = arguments.length;
switch (G__18300) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5821__auto__)){
var ret = temp__5821__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5821__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5821__auto__)){
var retb = temp__5821__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5741__auto___21464 = n;
var x_21465 = (0);
while(true){
if((x_21465 < n__5741__auto___21464)){
(a[x_21465] = x_21465);

var G__21467 = (x_21465 + (1));
x_21465 = G__21467;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18315 = (function (flag,meta18316){
this.flag = flag;
this.meta18316 = meta18316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18317,meta18316__$1){
var self__ = this;
var _18317__$1 = this;
return (new cljs.core.async.t_cljs$core$async18315(self__.flag,meta18316__$1));
}));

(cljs.core.async.t_cljs$core$async18315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18317){
var self__ = this;
var _18317__$1 = this;
return self__.meta18316;
}));

(cljs.core.async.t_cljs$core$async18315.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18315.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18315.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18315.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async18315.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta18316","meta18316",87053522,null)], null);
}));

(cljs.core.async.t_cljs$core$async18315.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18315.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18315");

(cljs.core.async.t_cljs$core$async18315.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18315");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18315.
 */
cljs.core.async.__GT_t_cljs$core$async18315 = (function cljs$core$async$__GT_t_cljs$core$async18315(flag,meta18316){
return (new cljs.core.async.t_cljs$core$async18315(flag,meta18316));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async18315(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18342 = (function (flag,cb,meta18343){
this.flag = flag;
this.cb = cb;
this.meta18343 = meta18343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18344,meta18343__$1){
var self__ = this;
var _18344__$1 = this;
return (new cljs.core.async.t_cljs$core$async18342(self__.flag,self__.cb,meta18343__$1));
}));

(cljs.core.async.t_cljs$core$async18342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18344){
var self__ = this;
var _18344__$1 = this;
return self__.meta18343;
}));

(cljs.core.async.t_cljs$core$async18342.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18342.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async18342.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async18342.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async18342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta18343","meta18343",348456215,null)], null);
}));

(cljs.core.async.t_cljs$core$async18342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18342");

(cljs.core.async.t_cljs$core$async18342.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async18342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18342.
 */
cljs.core.async.__GT_t_cljs$core$async18342 = (function cljs$core$async$__GT_t_cljs$core$async18342(flag,cb,meta18343){
return (new cljs.core.async.t_cljs$core$async18342(flag,cb,meta18343));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async18342(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error((""+"Assert failed: "+"alts must have at least one channel operation"+"\n"+"(pos? (count ports))")));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_21472 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_21472)){
if((!(((port_21472.cljs$core$IFn$_invoke$arity$1 ? port_21472.cljs$core$IFn$_invoke$arity$1((1)) : port_21472.call(null,(1))) == null)))){
} else {
throw (new Error((""+"Assert failed: "+"can't put nil on channel"+"\n"+"(some? (port 1))")));
}
} else {
}

var G__21473 = (i + (1));
i = G__21473;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__18345_SHARP_){
var G__18347 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18345_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18347) : fret.call(null,G__18347));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__18346_SHARP_){
var G__18348 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18346_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__18348) : fret.call(null,G__18348));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5142__auto__ = wport;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21475 = (i + (1));
i = G__21475;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5142__auto__ = ret;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5823__auto__ = (function (){var and__5140__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5140__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5140__auto__;
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var got = temp__5823__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21476 = arguments.length;
var i__5877__auto___21477 = (0);
while(true){
if((i__5877__auto___21477 < len__5876__auto___21476)){
args__5882__auto__.push((arguments[i__5877__auto___21477]));

var G__21478 = (i__5877__auto___21477 + (1));
i__5877__auto___21477 = G__21478;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__18354){
var map__18355 = p__18354;
var map__18355__$1 = cljs.core.__destructure_map(map__18355);
var opts = map__18355__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq18349){
var G__18350 = cljs.core.first(seq18349);
var seq18349__$1 = cljs.core.next(seq18349);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18350,seq18349__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__18362 = arguments.length;
switch (G__18362) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18168__auto___21485 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_18420){
var state_val_18422 = (state_18420[(1)]);
if((state_val_18422 === (7))){
var inst_18411 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
var statearr_18483_21486 = state_18420__$1;
(statearr_18483_21486[(2)] = inst_18411);

(statearr_18483_21486[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (1))){
var state_18420__$1 = state_18420;
var statearr_18484_21487 = state_18420__$1;
(statearr_18484_21487[(2)] = null);

(statearr_18484_21487[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (4))){
var inst_18386 = (state_18420[(7)]);
var inst_18386__$1 = (state_18420[(2)]);
var inst_18387 = (inst_18386__$1 == null);
var state_18420__$1 = (function (){var statearr_18485 = state_18420;
(statearr_18485[(7)] = inst_18386__$1);

return statearr_18485;
})();
if(cljs.core.truth_(inst_18387)){
var statearr_18487_21488 = state_18420__$1;
(statearr_18487_21488[(1)] = (5));

} else {
var statearr_18488_21489 = state_18420__$1;
(statearr_18488_21489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (13))){
var state_18420__$1 = state_18420;
var statearr_18489_21490 = state_18420__$1;
(statearr_18489_21490[(2)] = null);

(statearr_18489_21490[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (6))){
var inst_18386 = (state_18420[(7)]);
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18420__$1,(11),to,inst_18386);
} else {
if((state_val_18422 === (3))){
var inst_18413 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18420__$1,inst_18413);
} else {
if((state_val_18422 === (12))){
var state_18420__$1 = state_18420;
var statearr_18491_21491 = state_18420__$1;
(statearr_18491_21491[(2)] = null);

(statearr_18491_21491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (2))){
var state_18420__$1 = state_18420;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18420__$1,(4),from);
} else {
if((state_val_18422 === (11))){
var inst_18402 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
if(cljs.core.truth_(inst_18402)){
var statearr_18493_21492 = state_18420__$1;
(statearr_18493_21492[(1)] = (12));

} else {
var statearr_18494_21493 = state_18420__$1;
(statearr_18494_21493[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (9))){
var state_18420__$1 = state_18420;
var statearr_18495_21494 = state_18420__$1;
(statearr_18495_21494[(2)] = null);

(statearr_18495_21494[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (5))){
var state_18420__$1 = state_18420;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18496_21495 = state_18420__$1;
(statearr_18496_21495[(1)] = (8));

} else {
var statearr_18497_21496 = state_18420__$1;
(statearr_18497_21496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (14))){
var inst_18409 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
var statearr_18498_21498 = state_18420__$1;
(statearr_18498_21498[(2)] = inst_18409);

(statearr_18498_21498[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (10))){
var inst_18397 = (state_18420[(2)]);
var state_18420__$1 = state_18420;
var statearr_18499_21499 = state_18420__$1;
(statearr_18499_21499[(2)] = inst_18397);

(statearr_18499_21499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18422 === (8))){
var inst_18390 = cljs.core.async.close_BANG_(to);
var state_18420__$1 = state_18420;
var statearr_18500_21501 = state_18420__$1;
(statearr_18500_21501[(2)] = inst_18390);

(statearr_18500_21501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17905__auto__ = null;
var cljs$core$async$state_machine__17905__auto____0 = (function (){
var statearr_18501 = [null,null,null,null,null,null,null,null];
(statearr_18501[(0)] = cljs$core$async$state_machine__17905__auto__);

(statearr_18501[(1)] = (1));

return statearr_18501;
});
var cljs$core$async$state_machine__17905__auto____1 = (function (state_18420){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_18420);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e18502){var ex__17908__auto__ = e18502;
var statearr_18503_21505 = state_18420;
(statearr_18503_21505[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_18420[(4)]))){
var statearr_18504_21506 = state_18420;
(statearr_18504_21506[(1)] = cljs.core.first((state_18420[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21509 = state_18420;
state_18420 = G__21509;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$state_machine__17905__auto__ = function(state_18420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17905__auto____1.call(this,state_18420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17905__auto____0;
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17905__auto____1;
return cljs$core$async$state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_18506 = f__18169__auto__();
(statearr_18506[(6)] = c__18168__auto___21485);

return statearr_18506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__18511){
var vec__18512 = p__18511;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18512,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18512,(1),null);
var job = vec__18512;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__18168__auto___21510 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_18529){
var state_val_18530 = (state_18529[(1)]);
if((state_val_18530 === (1))){
var state_18529__$1 = state_18529;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18529__$1,(2),res,v);
} else {
if((state_val_18530 === (2))){
var inst_18522 = (state_18529[(2)]);
var inst_18523 = cljs.core.async.close_BANG_(res);
var state_18529__$1 = (function (){var statearr_18547 = state_18529;
(statearr_18547[(7)] = inst_18522);

return statearr_18547;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18529__$1,inst_18523);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0 = (function (){
var statearr_18548 = [null,null,null,null,null,null,null,null];
(statearr_18548[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__);

(statearr_18548[(1)] = (1));

return statearr_18548;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1 = (function (state_18529){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_18529);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e18550){var ex__17908__auto__ = e18550;
var statearr_18551_21517 = state_18529;
(statearr_18551_21517[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_18529[(4)]))){
var statearr_18552_21520 = state_18529;
(statearr_18552_21520[(1)] = cljs.core.first((state_18529[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21521 = state_18529;
state_18529 = G__21521;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__ = function(state_18529){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1.call(this,state_18529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_18561 = f__18169__auto__();
(statearr_18561[(6)] = c__18168__auto___21510);

return statearr_18561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__18566){
var vec__18567 = p__18566;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18567,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18567,(1),null);
var job = vec__18567;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5741__auto___21529 = n;
var __21530 = (0);
while(true){
if((__21530 < n__5741__auto___21529)){
var G__18578_21531 = type;
var G__18578_21532__$1 = (((G__18578_21531 instanceof cljs.core.Keyword))?G__18578_21531.fqn:null);
switch (G__18578_21532__$1) {
case "compute":
var c__18168__auto___21534 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21530,c__18168__auto___21534,G__18578_21531,G__18578_21532__$1,n__5741__auto___21529,jobs,results,process__$1,async){
return (function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = ((function (__21530,c__18168__auto___21534,G__18578_21531,G__18578_21532__$1,n__5741__auto___21529,jobs,results,process__$1,async){
return (function (state_18592){
var state_val_18593 = (state_18592[(1)]);
if((state_val_18593 === (1))){
var state_18592__$1 = state_18592;
var statearr_18594_21538 = state_18592__$1;
(statearr_18594_21538[(2)] = null);

(statearr_18594_21538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18593 === (2))){
var state_18592__$1 = state_18592;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18592__$1,(4),jobs);
} else {
if((state_val_18593 === (3))){
var inst_18590 = (state_18592[(2)]);
var state_18592__$1 = state_18592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18592__$1,inst_18590);
} else {
if((state_val_18593 === (4))){
var inst_18582 = (state_18592[(2)]);
var inst_18583 = process__$1(inst_18582);
var state_18592__$1 = state_18592;
if(cljs.core.truth_(inst_18583)){
var statearr_18598_21539 = state_18592__$1;
(statearr_18598_21539[(1)] = (5));

} else {
var statearr_18599_21541 = state_18592__$1;
(statearr_18599_21541[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18593 === (5))){
var state_18592__$1 = state_18592;
var statearr_18600_21542 = state_18592__$1;
(statearr_18600_21542[(2)] = null);

(statearr_18600_21542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18593 === (6))){
var state_18592__$1 = state_18592;
var statearr_18601_21543 = state_18592__$1;
(statearr_18601_21543[(2)] = null);

(statearr_18601_21543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18593 === (7))){
var inst_18588 = (state_18592[(2)]);
var state_18592__$1 = state_18592;
var statearr_18602_21544 = state_18592__$1;
(statearr_18602_21544[(2)] = inst_18588);

(statearr_18602_21544[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21530,c__18168__auto___21534,G__18578_21531,G__18578_21532__$1,n__5741__auto___21529,jobs,results,process__$1,async))
;
return ((function (__21530,switch__17904__auto__,c__18168__auto___21534,G__18578_21531,G__18578_21532__$1,n__5741__auto___21529,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0 = (function (){
var statearr_18603 = [null,null,null,null,null,null,null];
(statearr_18603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__);

(statearr_18603[(1)] = (1));

return statearr_18603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1 = (function (state_18592){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_18592);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e18604){var ex__17908__auto__ = e18604;
var statearr_18605_21545 = state_18592;
(statearr_18605_21545[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_18592[(4)]))){
var statearr_18607_21546 = state_18592;
(statearr_18607_21546[(1)] = cljs.core.first((state_18592[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21549 = state_18592;
state_18592 = G__21549;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__ = function(state_18592){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1.call(this,state_18592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__;
})()
;})(__21530,switch__17904__auto__,c__18168__auto___21534,G__18578_21531,G__18578_21532__$1,n__5741__auto___21529,jobs,results,process__$1,async))
})();
var state__18170__auto__ = (function (){var statearr_18610 = f__18169__auto__();
(statearr_18610[(6)] = c__18168__auto___21534);

return statearr_18610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
});})(__21530,c__18168__auto___21534,G__18578_21531,G__18578_21532__$1,n__5741__auto___21529,jobs,results,process__$1,async))
);


break;
case "async":
var c__18168__auto___21550 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__21530,c__18168__auto___21550,G__18578_21531,G__18578_21532__$1,n__5741__auto___21529,jobs,results,process__$1,async){
return (function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = ((function (__21530,c__18168__auto___21550,G__18578_21531,G__18578_21532__$1,n__5741__auto___21529,jobs,results,process__$1,async){
return (function (state_18624){
var state_val_18625 = (state_18624[(1)]);
if((state_val_18625 === (1))){
var state_18624__$1 = state_18624;
var statearr_18631_21561 = state_18624__$1;
(statearr_18631_21561[(2)] = null);

(statearr_18631_21561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18625 === (2))){
var state_18624__$1 = state_18624;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18624__$1,(4),jobs);
} else {
if((state_val_18625 === (3))){
var inst_18622 = (state_18624[(2)]);
var state_18624__$1 = state_18624;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18624__$1,inst_18622);
} else {
if((state_val_18625 === (4))){
var inst_18614 = (state_18624[(2)]);
var inst_18615 = async(inst_18614);
var state_18624__$1 = state_18624;
if(cljs.core.truth_(inst_18615)){
var statearr_18640_21562 = state_18624__$1;
(statearr_18640_21562[(1)] = (5));

} else {
var statearr_18644_21563 = state_18624__$1;
(statearr_18644_21563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18625 === (5))){
var state_18624__$1 = state_18624;
var statearr_18648_21564 = state_18624__$1;
(statearr_18648_21564[(2)] = null);

(statearr_18648_21564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18625 === (6))){
var state_18624__$1 = state_18624;
var statearr_18653_21565 = state_18624__$1;
(statearr_18653_21565[(2)] = null);

(statearr_18653_21565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18625 === (7))){
var inst_18620 = (state_18624[(2)]);
var state_18624__$1 = state_18624;
var statearr_18654_21567 = state_18624__$1;
(statearr_18654_21567[(2)] = inst_18620);

(statearr_18654_21567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__21530,c__18168__auto___21550,G__18578_21531,G__18578_21532__$1,n__5741__auto___21529,jobs,results,process__$1,async))
;
return ((function (__21530,switch__17904__auto__,c__18168__auto___21550,G__18578_21531,G__18578_21532__$1,n__5741__auto___21529,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0 = (function (){
var statearr_18655 = [null,null,null,null,null,null,null];
(statearr_18655[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__);

(statearr_18655[(1)] = (1));

return statearr_18655;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1 = (function (state_18624){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_18624);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e18658){var ex__17908__auto__ = e18658;
var statearr_18659_21569 = state_18624;
(statearr_18659_21569[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_18624[(4)]))){
var statearr_18660_21570 = state_18624;
(statearr_18660_21570[(1)] = cljs.core.first((state_18624[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21571 = state_18624;
state_18624 = G__21571;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__ = function(state_18624){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1.call(this,state_18624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__;
})()
;})(__21530,switch__17904__auto__,c__18168__auto___21550,G__18578_21531,G__18578_21532__$1,n__5741__auto___21529,jobs,results,process__$1,async))
})();
var state__18170__auto__ = (function (){var statearr_18661 = f__18169__auto__();
(statearr_18661[(6)] = c__18168__auto___21550);

return statearr_18661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
});})(__21530,c__18168__auto___21550,G__18578_21531,G__18578_21532__$1,n__5741__auto___21529,jobs,results,process__$1,async))
);


break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18578_21532__$1))));

}

var G__21572 = (__21530 + (1));
__21530 = G__21572;
continue;
} else {
}
break;
}

var c__18168__auto___21573 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_18707){
var state_val_18708 = (state_18707[(1)]);
if((state_val_18708 === (7))){
var inst_18702 = (state_18707[(2)]);
var state_18707__$1 = state_18707;
var statearr_18721_21574 = state_18707__$1;
(statearr_18721_21574[(2)] = inst_18702);

(statearr_18721_21574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18708 === (1))){
var state_18707__$1 = state_18707;
var statearr_18724_21575 = state_18707__$1;
(statearr_18724_21575[(2)] = null);

(statearr_18724_21575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18708 === (4))){
var inst_18671 = (state_18707[(7)]);
var inst_18671__$1 = (state_18707[(2)]);
var inst_18672 = (inst_18671__$1 == null);
var state_18707__$1 = (function (){var statearr_18739 = state_18707;
(statearr_18739[(7)] = inst_18671__$1);

return statearr_18739;
})();
if(cljs.core.truth_(inst_18672)){
var statearr_18746_21576 = state_18707__$1;
(statearr_18746_21576[(1)] = (5));

} else {
var statearr_18751_21577 = state_18707__$1;
(statearr_18751_21577[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18708 === (6))){
var inst_18671 = (state_18707[(7)]);
var inst_18680 = (state_18707[(8)]);
var inst_18680__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_18688 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18690 = [inst_18671,inst_18680__$1];
var inst_18691 = (new cljs.core.PersistentVector(null,2,(5),inst_18688,inst_18690,null));
var state_18707__$1 = (function (){var statearr_18760 = state_18707;
(statearr_18760[(8)] = inst_18680__$1);

return statearr_18760;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18707__$1,(8),jobs,inst_18691);
} else {
if((state_val_18708 === (3))){
var inst_18705 = (state_18707[(2)]);
var state_18707__$1 = state_18707;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18707__$1,inst_18705);
} else {
if((state_val_18708 === (2))){
var state_18707__$1 = state_18707;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18707__$1,(4),from);
} else {
if((state_val_18708 === (9))){
var inst_18699 = (state_18707[(2)]);
var state_18707__$1 = (function (){var statearr_18764 = state_18707;
(statearr_18764[(9)] = inst_18699);

return statearr_18764;
})();
var statearr_18766_21582 = state_18707__$1;
(statearr_18766_21582[(2)] = null);

(statearr_18766_21582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18708 === (5))){
var inst_18678 = cljs.core.async.close_BANG_(jobs);
var state_18707__$1 = state_18707;
var statearr_18767_21583 = state_18707__$1;
(statearr_18767_21583[(2)] = inst_18678);

(statearr_18767_21583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18708 === (8))){
var inst_18680 = (state_18707[(8)]);
var inst_18697 = (state_18707[(2)]);
var state_18707__$1 = (function (){var statearr_18779 = state_18707;
(statearr_18779[(10)] = inst_18697);

return statearr_18779;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18707__$1,(9),results,inst_18680);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0 = (function (){
var statearr_18782 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18782[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__);

(statearr_18782[(1)] = (1));

return statearr_18782;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1 = (function (state_18707){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_18707);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e18785){var ex__17908__auto__ = e18785;
var statearr_18786_21588 = state_18707;
(statearr_18786_21588[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_18707[(4)]))){
var statearr_18788_21589 = state_18707;
(statearr_18788_21589[(1)] = cljs.core.first((state_18707[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21591 = state_18707;
state_18707 = G__21591;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__ = function(state_18707){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1.call(this,state_18707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_18793 = f__18169__auto__();
(statearr_18793[(6)] = c__18168__auto___21573);

return statearr_18793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));


var c__18168__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_18836){
var state_val_18837 = (state_18836[(1)]);
if((state_val_18837 === (7))){
var inst_18832 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
var statearr_18839_21592 = state_18836__$1;
(statearr_18839_21592[(2)] = inst_18832);

(statearr_18839_21592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (20))){
var state_18836__$1 = state_18836;
var statearr_18843_21594 = state_18836__$1;
(statearr_18843_21594[(2)] = null);

(statearr_18843_21594[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (1))){
var state_18836__$1 = state_18836;
var statearr_18846_21597 = state_18836__$1;
(statearr_18846_21597[(2)] = null);

(statearr_18846_21597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (4))){
var inst_18796 = (state_18836[(7)]);
var inst_18796__$1 = (state_18836[(2)]);
var inst_18798 = (inst_18796__$1 == null);
var state_18836__$1 = (function (){var statearr_18849 = state_18836;
(statearr_18849[(7)] = inst_18796__$1);

return statearr_18849;
})();
if(cljs.core.truth_(inst_18798)){
var statearr_18851_21598 = state_18836__$1;
(statearr_18851_21598[(1)] = (5));

} else {
var statearr_18852_21599 = state_18836__$1;
(statearr_18852_21599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (15))){
var inst_18811 = (state_18836[(8)]);
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18836__$1,(18),to,inst_18811);
} else {
if((state_val_18837 === (21))){
var inst_18827 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
var statearr_18853_21602 = state_18836__$1;
(statearr_18853_21602[(2)] = inst_18827);

(statearr_18853_21602[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (13))){
var inst_18829 = (state_18836[(2)]);
var state_18836__$1 = (function (){var statearr_18855 = state_18836;
(statearr_18855[(9)] = inst_18829);

return statearr_18855;
})();
var statearr_18858_21603 = state_18836__$1;
(statearr_18858_21603[(2)] = null);

(statearr_18858_21603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (6))){
var inst_18796 = (state_18836[(7)]);
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18836__$1,(11),inst_18796);
} else {
if((state_val_18837 === (17))){
var inst_18821 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
if(cljs.core.truth_(inst_18821)){
var statearr_18863_21605 = state_18836__$1;
(statearr_18863_21605[(1)] = (19));

} else {
var statearr_18864_21606 = state_18836__$1;
(statearr_18864_21606[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (3))){
var inst_18834 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18836__$1,inst_18834);
} else {
if((state_val_18837 === (12))){
var inst_18808 = (state_18836[(10)]);
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18836__$1,(14),inst_18808);
} else {
if((state_val_18837 === (2))){
var state_18836__$1 = state_18836;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18836__$1,(4),results);
} else {
if((state_val_18837 === (19))){
var state_18836__$1 = state_18836;
var statearr_18867_21607 = state_18836__$1;
(statearr_18867_21607[(2)] = null);

(statearr_18867_21607[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (11))){
var inst_18808 = (state_18836[(2)]);
var state_18836__$1 = (function (){var statearr_18870 = state_18836;
(statearr_18870[(10)] = inst_18808);

return statearr_18870;
})();
var statearr_18871_21612 = state_18836__$1;
(statearr_18871_21612[(2)] = null);

(statearr_18871_21612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (9))){
var state_18836__$1 = state_18836;
var statearr_18874_21615 = state_18836__$1;
(statearr_18874_21615[(2)] = null);

(statearr_18874_21615[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (5))){
var state_18836__$1 = state_18836;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18875_21618 = state_18836__$1;
(statearr_18875_21618[(1)] = (8));

} else {
var statearr_18878_21619 = state_18836__$1;
(statearr_18878_21619[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (14))){
var inst_18811 = (state_18836[(8)]);
var inst_18814 = (state_18836[(11)]);
var inst_18811__$1 = (state_18836[(2)]);
var inst_18813 = (inst_18811__$1 == null);
var inst_18814__$1 = cljs.core.not(inst_18813);
var state_18836__$1 = (function (){var statearr_18880 = state_18836;
(statearr_18880[(8)] = inst_18811__$1);

(statearr_18880[(11)] = inst_18814__$1);

return statearr_18880;
})();
if(inst_18814__$1){
var statearr_18882_21621 = state_18836__$1;
(statearr_18882_21621[(1)] = (15));

} else {
var statearr_18884_21622 = state_18836__$1;
(statearr_18884_21622[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (16))){
var inst_18814 = (state_18836[(11)]);
var state_18836__$1 = state_18836;
var statearr_18885_21623 = state_18836__$1;
(statearr_18885_21623[(2)] = inst_18814);

(statearr_18885_21623[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (10))){
var inst_18805 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
var statearr_18886_21624 = state_18836__$1;
(statearr_18886_21624[(2)] = inst_18805);

(statearr_18886_21624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (18))){
var inst_18818 = (state_18836[(2)]);
var state_18836__$1 = state_18836;
var statearr_18887_21625 = state_18836__$1;
(statearr_18887_21625[(2)] = inst_18818);

(statearr_18887_21625[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18837 === (8))){
var inst_18802 = cljs.core.async.close_BANG_(to);
var state_18836__$1 = state_18836;
var statearr_18889_21626 = state_18836__$1;
(statearr_18889_21626[(2)] = inst_18802);

(statearr_18889_21626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0 = (function (){
var statearr_18890 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18890[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__);

(statearr_18890[(1)] = (1));

return statearr_18890;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1 = (function (state_18836){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_18836);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e18892){var ex__17908__auto__ = e18892;
var statearr_18893_21630 = state_18836;
(statearr_18893_21630[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_18836[(4)]))){
var statearr_18894_21633 = state_18836;
(statearr_18894_21633[(1)] = cljs.core.first((state_18836[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21635 = state_18836;
state_18836 = G__21635;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__ = function(state_18836){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1.call(this,state_18836);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17905__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_18897 = f__18169__auto__();
(statearr_18897[(6)] = c__18168__auto__);

return statearr_18897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));

return c__18168__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18907 = arguments.length;
switch (G__18907) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18917 = arguments.length;
switch (G__18917) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18927 = arguments.length;
switch (G__18927) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__18168__auto___21652 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_18966){
var state_val_18967 = (state_18966[(1)]);
if((state_val_18967 === (7))){
var inst_18962 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_18974_21653 = state_18966__$1;
(statearr_18974_21653[(2)] = inst_18962);

(statearr_18974_21653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (1))){
var state_18966__$1 = state_18966;
var statearr_18975_21654 = state_18966__$1;
(statearr_18975_21654[(2)] = null);

(statearr_18975_21654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (4))){
var inst_18935 = (state_18966[(7)]);
var inst_18935__$1 = (state_18966[(2)]);
var inst_18936 = (inst_18935__$1 == null);
var state_18966__$1 = (function (){var statearr_18976 = state_18966;
(statearr_18976[(7)] = inst_18935__$1);

return statearr_18976;
})();
if(cljs.core.truth_(inst_18936)){
var statearr_18977_21655 = state_18966__$1;
(statearr_18977_21655[(1)] = (5));

} else {
var statearr_18978_21656 = state_18966__$1;
(statearr_18978_21656[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (13))){
var state_18966__$1 = state_18966;
var statearr_18980_21657 = state_18966__$1;
(statearr_18980_21657[(2)] = null);

(statearr_18980_21657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (6))){
var inst_18935 = (state_18966[(7)]);
var inst_18945 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18935) : p.call(null,inst_18935));
var state_18966__$1 = state_18966;
if(cljs.core.truth_(inst_18945)){
var statearr_18982_21659 = state_18966__$1;
(statearr_18982_21659[(1)] = (9));

} else {
var statearr_18983_21660 = state_18966__$1;
(statearr_18983_21660[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (3))){
var inst_18964 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18966__$1,inst_18964);
} else {
if((state_val_18967 === (12))){
var state_18966__$1 = state_18966;
var statearr_18988_21662 = state_18966__$1;
(statearr_18988_21662[(2)] = null);

(statearr_18988_21662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (2))){
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18966__$1,(4),ch);
} else {
if((state_val_18967 === (11))){
var inst_18935 = (state_18966[(7)]);
var inst_18949 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18966__$1,(8),inst_18949,inst_18935);
} else {
if((state_val_18967 === (9))){
var state_18966__$1 = state_18966;
var statearr_18993_21663 = state_18966__$1;
(statearr_18993_21663[(2)] = tc);

(statearr_18993_21663[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (5))){
var inst_18942 = cljs.core.async.close_BANG_(tc);
var inst_18943 = cljs.core.async.close_BANG_(fc);
var state_18966__$1 = (function (){var statearr_18996 = state_18966;
(statearr_18996[(8)] = inst_18942);

return statearr_18996;
})();
var statearr_18997_21664 = state_18966__$1;
(statearr_18997_21664[(2)] = inst_18943);

(statearr_18997_21664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (14))){
var inst_18960 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
var statearr_18998_21665 = state_18966__$1;
(statearr_18998_21665[(2)] = inst_18960);

(statearr_18998_21665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (10))){
var state_18966__$1 = state_18966;
var statearr_18999_21666 = state_18966__$1;
(statearr_18999_21666[(2)] = fc);

(statearr_18999_21666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18967 === (8))){
var inst_18955 = (state_18966[(2)]);
var state_18966__$1 = state_18966;
if(cljs.core.truth_(inst_18955)){
var statearr_19000_21667 = state_18966__$1;
(statearr_19000_21667[(1)] = (12));

} else {
var statearr_19001_21668 = state_18966__$1;
(statearr_19001_21668[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17905__auto__ = null;
var cljs$core$async$state_machine__17905__auto____0 = (function (){
var statearr_19011 = [null,null,null,null,null,null,null,null,null];
(statearr_19011[(0)] = cljs$core$async$state_machine__17905__auto__);

(statearr_19011[(1)] = (1));

return statearr_19011;
});
var cljs$core$async$state_machine__17905__auto____1 = (function (state_18966){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_18966);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e19012){var ex__17908__auto__ = e19012;
var statearr_19019_21674 = state_18966;
(statearr_19019_21674[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_18966[(4)]))){
var statearr_19020_21678 = state_18966;
(statearr_19020_21678[(1)] = cljs.core.first((state_18966[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21681 = state_18966;
state_18966 = G__21681;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$state_machine__17905__auto__ = function(state_18966){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17905__auto____1.call(this,state_18966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17905__auto____0;
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17905__auto____1;
return cljs$core$async$state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_19024 = f__18169__auto__();
(statearr_19024[(6)] = c__18168__auto___21652);

return statearr_19024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18168__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_19056){
var state_val_19057 = (state_19056[(1)]);
if((state_val_19057 === (7))){
var inst_19052 = (state_19056[(2)]);
var state_19056__$1 = state_19056;
var statearr_19062_21697 = state_19056__$1;
(statearr_19062_21697[(2)] = inst_19052);

(statearr_19062_21697[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19057 === (1))){
var inst_19032 = init;
var inst_19033 = inst_19032;
var state_19056__$1 = (function (){var statearr_19064 = state_19056;
(statearr_19064[(7)] = inst_19033);

return statearr_19064;
})();
var statearr_19065_21698 = state_19056__$1;
(statearr_19065_21698[(2)] = null);

(statearr_19065_21698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19057 === (4))){
var inst_19038 = (state_19056[(8)]);
var inst_19038__$1 = (state_19056[(2)]);
var inst_19039 = (inst_19038__$1 == null);
var state_19056__$1 = (function (){var statearr_19069 = state_19056;
(statearr_19069[(8)] = inst_19038__$1);

return statearr_19069;
})();
if(cljs.core.truth_(inst_19039)){
var statearr_19071_21700 = state_19056__$1;
(statearr_19071_21700[(1)] = (5));

} else {
var statearr_19073_21701 = state_19056__$1;
(statearr_19073_21701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19057 === (6))){
var inst_19033 = (state_19056[(7)]);
var inst_19038 = (state_19056[(8)]);
var inst_19042 = (state_19056[(9)]);
var inst_19042__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_19033,inst_19038) : f.call(null,inst_19033,inst_19038));
var inst_19043 = cljs.core.reduced_QMARK_(inst_19042__$1);
var state_19056__$1 = (function (){var statearr_19076 = state_19056;
(statearr_19076[(9)] = inst_19042__$1);

return statearr_19076;
})();
if(inst_19043){
var statearr_19078_21702 = state_19056__$1;
(statearr_19078_21702[(1)] = (8));

} else {
var statearr_19081_21703 = state_19056__$1;
(statearr_19081_21703[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19057 === (3))){
var inst_19054 = (state_19056[(2)]);
var state_19056__$1 = state_19056;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19056__$1,inst_19054);
} else {
if((state_val_19057 === (2))){
var state_19056__$1 = state_19056;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19056__$1,(4),ch);
} else {
if((state_val_19057 === (9))){
var inst_19042 = (state_19056[(9)]);
var inst_19033 = inst_19042;
var state_19056__$1 = (function (){var statearr_19084 = state_19056;
(statearr_19084[(7)] = inst_19033);

return statearr_19084;
})();
var statearr_19085_21705 = state_19056__$1;
(statearr_19085_21705[(2)] = null);

(statearr_19085_21705[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19057 === (5))){
var inst_19033 = (state_19056[(7)]);
var state_19056__$1 = state_19056;
var statearr_19087_21706 = state_19056__$1;
(statearr_19087_21706[(2)] = inst_19033);

(statearr_19087_21706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19057 === (10))){
var inst_19050 = (state_19056[(2)]);
var state_19056__$1 = state_19056;
var statearr_19091_21710 = state_19056__$1;
(statearr_19091_21710[(2)] = inst_19050);

(statearr_19091_21710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19057 === (8))){
var inst_19042 = (state_19056[(9)]);
var inst_19045 = cljs.core.deref(inst_19042);
var state_19056__$1 = state_19056;
var statearr_19092_21711 = state_19056__$1;
(statearr_19092_21711[(2)] = inst_19045);

(statearr_19092_21711[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17905__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17905__auto____0 = (function (){
var statearr_19094 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19094[(0)] = cljs$core$async$reduce_$_state_machine__17905__auto__);

(statearr_19094[(1)] = (1));

return statearr_19094;
});
var cljs$core$async$reduce_$_state_machine__17905__auto____1 = (function (state_19056){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_19056);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e19095){var ex__17908__auto__ = e19095;
var statearr_19096_21712 = state_19056;
(statearr_19096_21712[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_19056[(4)]))){
var statearr_19097_21713 = state_19056;
(statearr_19097_21713[(1)] = cljs.core.first((state_19056[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21715 = state_19056;
state_19056 = G__21715;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17905__auto__ = function(state_19056){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17905__auto____1.call(this,state_19056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17905__auto____0;
cljs$core$async$reduce_$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17905__auto____1;
return cljs$core$async$reduce_$_state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_19102 = f__18169__auto__();
(statearr_19102[(6)] = c__18168__auto__);

return statearr_19102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));

return c__18168__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__18168__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_19113){
var state_val_19114 = (state_19113[(1)]);
if((state_val_19114 === (1))){
var inst_19108 = cljs.core.async.reduce(f__$1,init,ch);
var state_19113__$1 = state_19113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19113__$1,(2),inst_19108);
} else {
if((state_val_19114 === (2))){
var inst_19110 = (state_19113[(2)]);
var inst_19111 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_19110) : f__$1.call(null,inst_19110));
var state_19113__$1 = state_19113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19113__$1,inst_19111);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17905__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17905__auto____0 = (function (){
var statearr_19128 = [null,null,null,null,null,null,null];
(statearr_19128[(0)] = cljs$core$async$transduce_$_state_machine__17905__auto__);

(statearr_19128[(1)] = (1));

return statearr_19128;
});
var cljs$core$async$transduce_$_state_machine__17905__auto____1 = (function (state_19113){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_19113);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e19129){var ex__17908__auto__ = e19129;
var statearr_19130_21718 = state_19113;
(statearr_19130_21718[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_19113[(4)]))){
var statearr_19132_21719 = state_19113;
(statearr_19132_21719[(1)] = cljs.core.first((state_19113[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21720 = state_19113;
state_19113 = G__21720;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17905__auto__ = function(state_19113){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17905__auto____1.call(this,state_19113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17905__auto____0;
cljs$core$async$transduce_$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17905__auto____1;
return cljs$core$async$transduce_$_state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_19134 = f__18169__auto__();
(statearr_19134[(6)] = c__18168__auto__);

return statearr_19134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));

return c__18168__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__19144 = arguments.length;
switch (G__19144) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18168__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_19178){
var state_val_19179 = (state_19178[(1)]);
if((state_val_19179 === (7))){
var inst_19158 = (state_19178[(2)]);
var state_19178__$1 = state_19178;
var statearr_19185_21722 = state_19178__$1;
(statearr_19185_21722[(2)] = inst_19158);

(statearr_19185_21722[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (1))){
var inst_19150 = cljs.core.seq(coll);
var inst_19151 = inst_19150;
var state_19178__$1 = (function (){var statearr_19186 = state_19178;
(statearr_19186[(7)] = inst_19151);

return statearr_19186;
})();
var statearr_19187_21731 = state_19178__$1;
(statearr_19187_21731[(2)] = null);

(statearr_19187_21731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (4))){
var inst_19151 = (state_19178[(7)]);
var inst_19156 = cljs.core.first(inst_19151);
var state_19178__$1 = state_19178;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19178__$1,(7),ch,inst_19156);
} else {
if((state_val_19179 === (13))){
var inst_19172 = (state_19178[(2)]);
var state_19178__$1 = state_19178;
var statearr_19188_21738 = state_19178__$1;
(statearr_19188_21738[(2)] = inst_19172);

(statearr_19188_21738[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (6))){
var inst_19161 = (state_19178[(2)]);
var state_19178__$1 = state_19178;
if(cljs.core.truth_(inst_19161)){
var statearr_19190_21740 = state_19178__$1;
(statearr_19190_21740[(1)] = (8));

} else {
var statearr_19191_21741 = state_19178__$1;
(statearr_19191_21741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (3))){
var inst_19176 = (state_19178[(2)]);
var state_19178__$1 = state_19178;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19178__$1,inst_19176);
} else {
if((state_val_19179 === (12))){
var state_19178__$1 = state_19178;
var statearr_19192_21749 = state_19178__$1;
(statearr_19192_21749[(2)] = null);

(statearr_19192_21749[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (2))){
var inst_19151 = (state_19178[(7)]);
var state_19178__$1 = state_19178;
if(cljs.core.truth_(inst_19151)){
var statearr_19193_21750 = state_19178__$1;
(statearr_19193_21750[(1)] = (4));

} else {
var statearr_19194_21751 = state_19178__$1;
(statearr_19194_21751[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (11))){
var inst_19169 = cljs.core.async.close_BANG_(ch);
var state_19178__$1 = state_19178;
var statearr_19195_21753 = state_19178__$1;
(statearr_19195_21753[(2)] = inst_19169);

(statearr_19195_21753[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (9))){
var state_19178__$1 = state_19178;
if(cljs.core.truth_(close_QMARK_)){
var statearr_19196_21754 = state_19178__$1;
(statearr_19196_21754[(1)] = (11));

} else {
var statearr_19197_21755 = state_19178__$1;
(statearr_19197_21755[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (5))){
var inst_19151 = (state_19178[(7)]);
var state_19178__$1 = state_19178;
var statearr_19199_21757 = state_19178__$1;
(statearr_19199_21757[(2)] = inst_19151);

(statearr_19199_21757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (10))){
var inst_19174 = (state_19178[(2)]);
var state_19178__$1 = state_19178;
var statearr_19200_21761 = state_19178__$1;
(statearr_19200_21761[(2)] = inst_19174);

(statearr_19200_21761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19179 === (8))){
var inst_19151 = (state_19178[(7)]);
var inst_19163 = cljs.core.next(inst_19151);
var inst_19151__$1 = inst_19163;
var state_19178__$1 = (function (){var statearr_19201 = state_19178;
(statearr_19201[(7)] = inst_19151__$1);

return statearr_19201;
})();
var statearr_19203_21763 = state_19178__$1;
(statearr_19203_21763[(2)] = null);

(statearr_19203_21763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17905__auto__ = null;
var cljs$core$async$state_machine__17905__auto____0 = (function (){
var statearr_19204 = [null,null,null,null,null,null,null,null];
(statearr_19204[(0)] = cljs$core$async$state_machine__17905__auto__);

(statearr_19204[(1)] = (1));

return statearr_19204;
});
var cljs$core$async$state_machine__17905__auto____1 = (function (state_19178){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_19178);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e19206){var ex__17908__auto__ = e19206;
var statearr_19207_21775 = state_19178;
(statearr_19207_21775[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_19178[(4)]))){
var statearr_19211_21782 = state_19178;
(statearr_19211_21782[(1)] = cljs.core.first((state_19178[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21784 = state_19178;
state_19178 = G__21784;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$state_machine__17905__auto__ = function(state_19178){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17905__auto____1.call(this,state_19178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17905__auto____0;
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17905__auto____1;
return cljs$core$async$state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_19235 = f__18169__auto__();
(statearr_19235[(6)] = c__18168__auto__);

return statearr_19235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));

return c__18168__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__19248 = arguments.length;
switch (G__19248) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_21791 = (function (_){
var x__5498__auto__ = (((_ == null))?null:_);
var m__5499__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5499__auto__.call(null,_));
} else {
var m__5497__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5497__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_21791(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_21800 = (function (m,ch,close_QMARK_){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5499__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5497__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_21800(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_21831 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_21831(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_21851 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_21851(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19286 = (function (ch,cs,meta19287){
this.ch = ch;
this.cs = cs;
this.meta19287 = meta19287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19288,meta19287__$1){
var self__ = this;
var _19288__$1 = this;
return (new cljs.core.async.t_cljs$core$async19286(self__.ch,self__.cs,meta19287__$1));
}));

(cljs.core.async.t_cljs$core$async19286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19288){
var self__ = this;
var _19288__$1 = this;
return self__.meta19287;
}));

(cljs.core.async.t_cljs$core$async19286.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19286.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async19286.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19286.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async19286.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async19286.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async19286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta19287","meta19287",-1578084448,null)], null);
}));

(cljs.core.async.t_cljs$core$async19286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19286");

(cljs.core.async.t_cljs$core$async19286.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async19286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19286.
 */
cljs.core.async.__GT_t_cljs$core$async19286 = (function cljs$core$async$__GT_t_cljs$core$async19286(ch,cs,meta19287){
return (new cljs.core.async.t_cljs$core$async19286(ch,cs,meta19287));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async19286(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__18168__auto___21856 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_19465){
var state_val_19466 = (state_19465[(1)]);
if((state_val_19466 === (7))){
var inst_19457 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
var statearr_19467_21857 = state_19465__$1;
(statearr_19467_21857[(2)] = inst_19457);

(statearr_19467_21857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (20))){
var inst_19350 = (state_19465[(7)]);
var inst_19362 = cljs.core.first(inst_19350);
var inst_19363 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19362,(0),null);
var inst_19364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19362,(1),null);
var state_19465__$1 = (function (){var statearr_19473 = state_19465;
(statearr_19473[(8)] = inst_19363);

return statearr_19473;
})();
if(cljs.core.truth_(inst_19364)){
var statearr_19474_21858 = state_19465__$1;
(statearr_19474_21858[(1)] = (22));

} else {
var statearr_19475_21859 = state_19465__$1;
(statearr_19475_21859[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (27))){
var inst_19397 = (state_19465[(9)]);
var inst_19399 = (state_19465[(10)]);
var inst_19404 = (state_19465[(11)]);
var inst_19314 = (state_19465[(12)]);
var inst_19404__$1 = cljs.core._nth(inst_19397,inst_19399);
var inst_19408 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19404__$1,inst_19314,done);
var state_19465__$1 = (function (){var statearr_19524 = state_19465;
(statearr_19524[(11)] = inst_19404__$1);

return statearr_19524;
})();
if(cljs.core.truth_(inst_19408)){
var statearr_19530_21860 = state_19465__$1;
(statearr_19530_21860[(1)] = (30));

} else {
var statearr_19531_21861 = state_19465__$1;
(statearr_19531_21861[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (1))){
var state_19465__$1 = state_19465;
var statearr_19532_21862 = state_19465__$1;
(statearr_19532_21862[(2)] = null);

(statearr_19532_21862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (24))){
var inst_19350 = (state_19465[(7)]);
var inst_19370 = (state_19465[(2)]);
var inst_19371 = cljs.core.next(inst_19350);
var inst_19323 = inst_19371;
var inst_19324 = null;
var inst_19325 = (0);
var inst_19326 = (0);
var state_19465__$1 = (function (){var statearr_19536 = state_19465;
(statearr_19536[(13)] = inst_19370);

(statearr_19536[(14)] = inst_19323);

(statearr_19536[(15)] = inst_19324);

(statearr_19536[(16)] = inst_19325);

(statearr_19536[(17)] = inst_19326);

return statearr_19536;
})();
var statearr_19537_21863 = state_19465__$1;
(statearr_19537_21863[(2)] = null);

(statearr_19537_21863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (39))){
var state_19465__$1 = state_19465;
var statearr_19541_21864 = state_19465__$1;
(statearr_19541_21864[(2)] = null);

(statearr_19541_21864[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (4))){
var inst_19314 = (state_19465[(12)]);
var inst_19314__$1 = (state_19465[(2)]);
var inst_19315 = (inst_19314__$1 == null);
var state_19465__$1 = (function (){var statearr_19543 = state_19465;
(statearr_19543[(12)] = inst_19314__$1);

return statearr_19543;
})();
if(cljs.core.truth_(inst_19315)){
var statearr_19544_21871 = state_19465__$1;
(statearr_19544_21871[(1)] = (5));

} else {
var statearr_19545_21872 = state_19465__$1;
(statearr_19545_21872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (15))){
var inst_19326 = (state_19465[(17)]);
var inst_19323 = (state_19465[(14)]);
var inst_19324 = (state_19465[(15)]);
var inst_19325 = (state_19465[(16)]);
var inst_19346 = (state_19465[(2)]);
var inst_19347 = (inst_19326 + (1));
var tmp19538 = inst_19324;
var tmp19539 = inst_19323;
var tmp19540 = inst_19325;
var inst_19323__$1 = tmp19539;
var inst_19324__$1 = tmp19538;
var inst_19325__$1 = tmp19540;
var inst_19326__$1 = inst_19347;
var state_19465__$1 = (function (){var statearr_19546 = state_19465;
(statearr_19546[(18)] = inst_19346);

(statearr_19546[(14)] = inst_19323__$1);

(statearr_19546[(15)] = inst_19324__$1);

(statearr_19546[(16)] = inst_19325__$1);

(statearr_19546[(17)] = inst_19326__$1);

return statearr_19546;
})();
var statearr_19547_21873 = state_19465__$1;
(statearr_19547_21873[(2)] = null);

(statearr_19547_21873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (21))){
var inst_19374 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
var statearr_19551_21874 = state_19465__$1;
(statearr_19551_21874[(2)] = inst_19374);

(statearr_19551_21874[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (31))){
var inst_19404 = (state_19465[(11)]);
var inst_19414 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19404);
var state_19465__$1 = state_19465;
var statearr_19552_21875 = state_19465__$1;
(statearr_19552_21875[(2)] = inst_19414);

(statearr_19552_21875[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (32))){
var inst_19399 = (state_19465[(10)]);
var inst_19396 = (state_19465[(19)]);
var inst_19397 = (state_19465[(9)]);
var inst_19398 = (state_19465[(20)]);
var inst_19416 = (state_19465[(2)]);
var inst_19417 = (inst_19399 + (1));
var tmp19548 = inst_19397;
var tmp19549 = inst_19398;
var tmp19550 = inst_19396;
var inst_19396__$1 = tmp19550;
var inst_19397__$1 = tmp19548;
var inst_19398__$1 = tmp19549;
var inst_19399__$1 = inst_19417;
var state_19465__$1 = (function (){var statearr_19553 = state_19465;
(statearr_19553[(21)] = inst_19416);

(statearr_19553[(19)] = inst_19396__$1);

(statearr_19553[(9)] = inst_19397__$1);

(statearr_19553[(20)] = inst_19398__$1);

(statearr_19553[(10)] = inst_19399__$1);

return statearr_19553;
})();
var statearr_19562_21876 = state_19465__$1;
(statearr_19562_21876[(2)] = null);

(statearr_19562_21876[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (40))){
var inst_19429 = (state_19465[(22)]);
var inst_19433 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_19429);
var state_19465__$1 = state_19465;
var statearr_19578_21877 = state_19465__$1;
(statearr_19578_21877[(2)] = inst_19433);

(statearr_19578_21877[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (33))){
var inst_19420 = (state_19465[(23)]);
var inst_19422 = cljs.core.chunked_seq_QMARK_(inst_19420);
var state_19465__$1 = state_19465;
if(inst_19422){
var statearr_19587_21883 = state_19465__$1;
(statearr_19587_21883[(1)] = (36));

} else {
var statearr_19588_21887 = state_19465__$1;
(statearr_19588_21887[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (13))){
var inst_19338 = (state_19465[(24)]);
var inst_19343 = cljs.core.async.close_BANG_(inst_19338);
var state_19465__$1 = state_19465;
var statearr_19589_21897 = state_19465__$1;
(statearr_19589_21897[(2)] = inst_19343);

(statearr_19589_21897[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (22))){
var inst_19363 = (state_19465[(8)]);
var inst_19367 = cljs.core.async.close_BANG_(inst_19363);
var state_19465__$1 = state_19465;
var statearr_19591_21901 = state_19465__$1;
(statearr_19591_21901[(2)] = inst_19367);

(statearr_19591_21901[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (36))){
var inst_19420 = (state_19465[(23)]);
var inst_19424 = cljs.core.chunk_first(inst_19420);
var inst_19425 = cljs.core.chunk_rest(inst_19420);
var inst_19426 = cljs.core.count(inst_19424);
var inst_19396 = inst_19425;
var inst_19397 = inst_19424;
var inst_19398 = inst_19426;
var inst_19399 = (0);
var state_19465__$1 = (function (){var statearr_19592 = state_19465;
(statearr_19592[(19)] = inst_19396);

(statearr_19592[(9)] = inst_19397);

(statearr_19592[(20)] = inst_19398);

(statearr_19592[(10)] = inst_19399);

return statearr_19592;
})();
var statearr_19593_21902 = state_19465__$1;
(statearr_19593_21902[(2)] = null);

(statearr_19593_21902[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (41))){
var inst_19420 = (state_19465[(23)]);
var inst_19436 = (state_19465[(2)]);
var inst_19437 = cljs.core.next(inst_19420);
var inst_19396 = inst_19437;
var inst_19397 = null;
var inst_19398 = (0);
var inst_19399 = (0);
var state_19465__$1 = (function (){var statearr_19594 = state_19465;
(statearr_19594[(25)] = inst_19436);

(statearr_19594[(19)] = inst_19396);

(statearr_19594[(9)] = inst_19397);

(statearr_19594[(20)] = inst_19398);

(statearr_19594[(10)] = inst_19399);

return statearr_19594;
})();
var statearr_19599_21903 = state_19465__$1;
(statearr_19599_21903[(2)] = null);

(statearr_19599_21903[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (43))){
var state_19465__$1 = state_19465;
var statearr_19600_21904 = state_19465__$1;
(statearr_19600_21904[(2)] = null);

(statearr_19600_21904[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (29))){
var inst_19445 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
var statearr_19603_21905 = state_19465__$1;
(statearr_19603_21905[(2)] = inst_19445);

(statearr_19603_21905[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (44))){
var inst_19454 = (state_19465[(2)]);
var state_19465__$1 = (function (){var statearr_19604 = state_19465;
(statearr_19604[(26)] = inst_19454);

return statearr_19604;
})();
var statearr_19605_21906 = state_19465__$1;
(statearr_19605_21906[(2)] = null);

(statearr_19605_21906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (6))){
var inst_19386 = (state_19465[(27)]);
var inst_19385 = cljs.core.deref(cs);
var inst_19386__$1 = cljs.core.keys(inst_19385);
var inst_19387 = cljs.core.count(inst_19386__$1);
var inst_19388 = cljs.core.reset_BANG_(dctr,inst_19387);
var inst_19395 = cljs.core.seq(inst_19386__$1);
var inst_19396 = inst_19395;
var inst_19397 = null;
var inst_19398 = (0);
var inst_19399 = (0);
var state_19465__$1 = (function (){var statearr_19606 = state_19465;
(statearr_19606[(27)] = inst_19386__$1);

(statearr_19606[(28)] = inst_19388);

(statearr_19606[(19)] = inst_19396);

(statearr_19606[(9)] = inst_19397);

(statearr_19606[(20)] = inst_19398);

(statearr_19606[(10)] = inst_19399);

return statearr_19606;
})();
var statearr_19608_21907 = state_19465__$1;
(statearr_19608_21907[(2)] = null);

(statearr_19608_21907[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (28))){
var inst_19396 = (state_19465[(19)]);
var inst_19420 = (state_19465[(23)]);
var inst_19420__$1 = cljs.core.seq(inst_19396);
var state_19465__$1 = (function (){var statearr_19609 = state_19465;
(statearr_19609[(23)] = inst_19420__$1);

return statearr_19609;
})();
if(inst_19420__$1){
var statearr_19610_21912 = state_19465__$1;
(statearr_19610_21912[(1)] = (33));

} else {
var statearr_19611_21913 = state_19465__$1;
(statearr_19611_21913[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (25))){
var inst_19399 = (state_19465[(10)]);
var inst_19398 = (state_19465[(20)]);
var inst_19401 = (inst_19399 < inst_19398);
var inst_19402 = inst_19401;
var state_19465__$1 = state_19465;
if(cljs.core.truth_(inst_19402)){
var statearr_19617_21914 = state_19465__$1;
(statearr_19617_21914[(1)] = (27));

} else {
var statearr_19618_21915 = state_19465__$1;
(statearr_19618_21915[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (34))){
var state_19465__$1 = state_19465;
var statearr_19619_21919 = state_19465__$1;
(statearr_19619_21919[(2)] = null);

(statearr_19619_21919[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (17))){
var state_19465__$1 = state_19465;
var statearr_19620_21922 = state_19465__$1;
(statearr_19620_21922[(2)] = null);

(statearr_19620_21922[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (3))){
var inst_19459 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19465__$1,inst_19459);
} else {
if((state_val_19466 === (12))){
var inst_19380 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
var statearr_19632_21924 = state_19465__$1;
(statearr_19632_21924[(2)] = inst_19380);

(statearr_19632_21924[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (2))){
var state_19465__$1 = state_19465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19465__$1,(4),ch);
} else {
if((state_val_19466 === (23))){
var state_19465__$1 = state_19465;
var statearr_19633_21925 = state_19465__$1;
(statearr_19633_21925[(2)] = null);

(statearr_19633_21925[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (35))){
var inst_19443 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
var statearr_19635_21926 = state_19465__$1;
(statearr_19635_21926[(2)] = inst_19443);

(statearr_19635_21926[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (19))){
var inst_19350 = (state_19465[(7)]);
var inst_19354 = cljs.core.chunk_first(inst_19350);
var inst_19355 = cljs.core.chunk_rest(inst_19350);
var inst_19356 = cljs.core.count(inst_19354);
var inst_19323 = inst_19355;
var inst_19324 = inst_19354;
var inst_19325 = inst_19356;
var inst_19326 = (0);
var state_19465__$1 = (function (){var statearr_19636 = state_19465;
(statearr_19636[(14)] = inst_19323);

(statearr_19636[(15)] = inst_19324);

(statearr_19636[(16)] = inst_19325);

(statearr_19636[(17)] = inst_19326);

return statearr_19636;
})();
var statearr_19637_21931 = state_19465__$1;
(statearr_19637_21931[(2)] = null);

(statearr_19637_21931[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (11))){
var inst_19323 = (state_19465[(14)]);
var inst_19350 = (state_19465[(7)]);
var inst_19350__$1 = cljs.core.seq(inst_19323);
var state_19465__$1 = (function (){var statearr_19638 = state_19465;
(statearr_19638[(7)] = inst_19350__$1);

return statearr_19638;
})();
if(inst_19350__$1){
var statearr_19639_21932 = state_19465__$1;
(statearr_19639_21932[(1)] = (16));

} else {
var statearr_19640_21933 = state_19465__$1;
(statearr_19640_21933[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (9))){
var inst_19382 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
var statearr_19641_21934 = state_19465__$1;
(statearr_19641_21934[(2)] = inst_19382);

(statearr_19641_21934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (5))){
var inst_19321 = cljs.core.deref(cs);
var inst_19322 = cljs.core.seq(inst_19321);
var inst_19323 = inst_19322;
var inst_19324 = null;
var inst_19325 = (0);
var inst_19326 = (0);
var state_19465__$1 = (function (){var statearr_19643 = state_19465;
(statearr_19643[(14)] = inst_19323);

(statearr_19643[(15)] = inst_19324);

(statearr_19643[(16)] = inst_19325);

(statearr_19643[(17)] = inst_19326);

return statearr_19643;
})();
var statearr_19644_21938 = state_19465__$1;
(statearr_19644_21938[(2)] = null);

(statearr_19644_21938[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (14))){
var state_19465__$1 = state_19465;
var statearr_19645_21939 = state_19465__$1;
(statearr_19645_21939[(2)] = null);

(statearr_19645_21939[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (45))){
var inst_19451 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
var statearr_19646_21940 = state_19465__$1;
(statearr_19646_21940[(2)] = inst_19451);

(statearr_19646_21940[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (26))){
var inst_19386 = (state_19465[(27)]);
var inst_19447 = (state_19465[(2)]);
var inst_19448 = cljs.core.seq(inst_19386);
var state_19465__$1 = (function (){var statearr_19647 = state_19465;
(statearr_19647[(29)] = inst_19447);

return statearr_19647;
})();
if(inst_19448){
var statearr_19648_21942 = state_19465__$1;
(statearr_19648_21942[(1)] = (42));

} else {
var statearr_19651_21943 = state_19465__$1;
(statearr_19651_21943[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (16))){
var inst_19350 = (state_19465[(7)]);
var inst_19352 = cljs.core.chunked_seq_QMARK_(inst_19350);
var state_19465__$1 = state_19465;
if(inst_19352){
var statearr_19654_21944 = state_19465__$1;
(statearr_19654_21944[(1)] = (19));

} else {
var statearr_19655_21945 = state_19465__$1;
(statearr_19655_21945[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (38))){
var inst_19440 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
var statearr_19657_21946 = state_19465__$1;
(statearr_19657_21946[(2)] = inst_19440);

(statearr_19657_21946[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (30))){
var state_19465__$1 = state_19465;
var statearr_19660_21947 = state_19465__$1;
(statearr_19660_21947[(2)] = null);

(statearr_19660_21947[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (10))){
var inst_19324 = (state_19465[(15)]);
var inst_19326 = (state_19465[(17)]);
var inst_19336 = cljs.core._nth(inst_19324,inst_19326);
var inst_19338 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19336,(0),null);
var inst_19340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19336,(1),null);
var state_19465__$1 = (function (){var statearr_19670 = state_19465;
(statearr_19670[(24)] = inst_19338);

return statearr_19670;
})();
if(cljs.core.truth_(inst_19340)){
var statearr_19673_21950 = state_19465__$1;
(statearr_19673_21950[(1)] = (13));

} else {
var statearr_19674_21957 = state_19465__$1;
(statearr_19674_21957[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (18))){
var inst_19378 = (state_19465[(2)]);
var state_19465__$1 = state_19465;
var statearr_19676_21959 = state_19465__$1;
(statearr_19676_21959[(2)] = inst_19378);

(statearr_19676_21959[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (42))){
var state_19465__$1 = state_19465;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19465__$1,(45),dchan);
} else {
if((state_val_19466 === (37))){
var inst_19420 = (state_19465[(23)]);
var inst_19429 = (state_19465[(22)]);
var inst_19314 = (state_19465[(12)]);
var inst_19429__$1 = cljs.core.first(inst_19420);
var inst_19430 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_19429__$1,inst_19314,done);
var state_19465__$1 = (function (){var statearr_19677 = state_19465;
(statearr_19677[(22)] = inst_19429__$1);

return statearr_19677;
})();
if(cljs.core.truth_(inst_19430)){
var statearr_19679_21963 = state_19465__$1;
(statearr_19679_21963[(1)] = (39));

} else {
var statearr_19680_21964 = state_19465__$1;
(statearr_19680_21964[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19466 === (8))){
var inst_19326 = (state_19465[(17)]);
var inst_19325 = (state_19465[(16)]);
var inst_19330 = (inst_19326 < inst_19325);
var inst_19331 = inst_19330;
var state_19465__$1 = state_19465;
if(cljs.core.truth_(inst_19331)){
var statearr_19682_21965 = state_19465__$1;
(statearr_19682_21965[(1)] = (10));

} else {
var statearr_19683_21967 = state_19465__$1;
(statearr_19683_21967[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17905__auto__ = null;
var cljs$core$async$mult_$_state_machine__17905__auto____0 = (function (){
var statearr_19685 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19685[(0)] = cljs$core$async$mult_$_state_machine__17905__auto__);

(statearr_19685[(1)] = (1));

return statearr_19685;
});
var cljs$core$async$mult_$_state_machine__17905__auto____1 = (function (state_19465){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_19465);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e19686){var ex__17908__auto__ = e19686;
var statearr_19687_21970 = state_19465;
(statearr_19687_21970[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_19465[(4)]))){
var statearr_19688_21971 = state_19465;
(statearr_19688_21971[(1)] = cljs.core.first((state_19465[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21973 = state_19465;
state_19465 = G__21973;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17905__auto__ = function(state_19465){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17905__auto____1.call(this,state_19465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17905__auto____0;
cljs$core$async$mult_$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17905__auto____1;
return cljs$core$async$mult_$_state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_19692 = f__18169__auto__();
(statearr_19692[(6)] = c__18168__auto___21856);

return statearr_19692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__19696 = arguments.length;
switch (G__19696) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_21977 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_21977(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_21981 = (function (m,ch){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5499__auto__.call(null,m,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5497__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_21981(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_21988 = (function (m){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5499__auto__.call(null,m));
} else {
var m__5497__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5497__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_21988(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_21992 = (function (m,state_map){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5499__auto__.call(null,m,state_map));
} else {
var m__5497__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5497__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_21992(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_21996 = (function (m,mode){
var x__5498__auto__ = (((m == null))?null:m);
var m__5499__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5499__auto__.call(null,m,mode));
} else {
var m__5497__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5497__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_21996(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___21997 = arguments.length;
var i__5877__auto___21998 = (0);
while(true){
if((i__5877__auto___21998 < len__5876__auto___21997)){
args__5882__auto__.push((arguments[i__5877__auto___21998]));

var G__21999 = (i__5877__auto___21998 + (1));
i__5877__auto___21998 = G__21999;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__19756){
var map__19757 = p__19756;
var map__19757__$1 = cljs.core.__destructure_map(map__19757);
var opts = map__19757__$1;
var statearr_19759_22000 = state;
(statearr_19759_22000[(1)] = cont_block);


var temp__5823__auto__ = cljs.core.async.do_alts((function (val){
var statearr_19760_22001 = state;
(statearr_19760_22001[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5823__auto__)){
var cb = temp__5823__auto__;
var statearr_19764_22002 = state;
(statearr_19764_22002[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq19742){
var G__19743 = cljs.core.first(seq19742);
var seq19742__$1 = cljs.core.next(seq19742);
var G__19744 = cljs.core.first(seq19742__$1);
var seq19742__$2 = cljs.core.next(seq19742__$1);
var G__19745 = cljs.core.first(seq19742__$2);
var seq19742__$3 = cljs.core.next(seq19742__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19743,G__19744,G__19745,seq19742__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19778 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19779){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta19779 = meta19779;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19778.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19780,meta19779__$1){
var self__ = this;
var _19780__$1 = this;
return (new cljs.core.async.t_cljs$core$async19778(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19779__$1));
}));

(cljs.core.async.t_cljs$core$async19778.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19780){
var self__ = this;
var _19780__$1 = this;
return self__.meta19779;
}));

(cljs.core.async.t_cljs$core$async19778.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19778.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async19778.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19778.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19778.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19778.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19778.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19778.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error((""+"Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+"mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+"(solo-modes mode)")));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async19778.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta19779","meta19779",314309388,null)], null);
}));

(cljs.core.async.t_cljs$core$async19778.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19778.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19778");

(cljs.core.async.t_cljs$core$async19778.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async19778");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19778.
 */
cljs.core.async.__GT_t_cljs$core$async19778 = (function cljs$core$async$__GT_t_cljs$core$async19778(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19779){
return (new cljs.core.async.t_cljs$core$async19778(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19779));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async19778(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__18168__auto___22039 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_19859){
var state_val_19860 = (state_19859[(1)]);
if((state_val_19860 === (7))){
var inst_19816 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
if(cljs.core.truth_(inst_19816)){
var statearr_19865_22048 = state_19859__$1;
(statearr_19865_22048[(1)] = (8));

} else {
var statearr_19868_22049 = state_19859__$1;
(statearr_19868_22049[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (20))){
var inst_19808 = (state_19859[(7)]);
var state_19859__$1 = state_19859;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19859__$1,(23),out,inst_19808);
} else {
if((state_val_19860 === (1))){
var inst_19791 = calc_state();
var inst_19792 = cljs.core.__destructure_map(inst_19791);
var inst_19793 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19792,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19794 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19792,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19792,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_19796 = inst_19791;
var state_19859__$1 = (function (){var statearr_19871 = state_19859;
(statearr_19871[(8)] = inst_19793);

(statearr_19871[(9)] = inst_19794);

(statearr_19871[(10)] = inst_19795);

(statearr_19871[(11)] = inst_19796);

return statearr_19871;
})();
var statearr_19873_22077 = state_19859__$1;
(statearr_19873_22077[(2)] = null);

(statearr_19873_22077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (24))){
var inst_19799 = (state_19859[(12)]);
var inst_19796 = inst_19799;
var state_19859__$1 = (function (){var statearr_19875 = state_19859;
(statearr_19875[(11)] = inst_19796);

return statearr_19875;
})();
var statearr_19876_22085 = state_19859__$1;
(statearr_19876_22085[(2)] = null);

(statearr_19876_22085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (4))){
var inst_19808 = (state_19859[(7)]);
var inst_19810 = (state_19859[(13)]);
var inst_19807 = (state_19859[(2)]);
var inst_19808__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19807,(0),null);
var inst_19809 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19807,(1),null);
var inst_19810__$1 = (inst_19808__$1 == null);
var state_19859__$1 = (function (){var statearr_19877 = state_19859;
(statearr_19877[(7)] = inst_19808__$1);

(statearr_19877[(14)] = inst_19809);

(statearr_19877[(13)] = inst_19810__$1);

return statearr_19877;
})();
if(cljs.core.truth_(inst_19810__$1)){
var statearr_19878_22094 = state_19859__$1;
(statearr_19878_22094[(1)] = (5));

} else {
var statearr_19879_22095 = state_19859__$1;
(statearr_19879_22095[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (15))){
var inst_19800 = (state_19859[(15)]);
var inst_19830 = (state_19859[(16)]);
var inst_19830__$1 = cljs.core.empty_QMARK_(inst_19800);
var state_19859__$1 = (function (){var statearr_19881 = state_19859;
(statearr_19881[(16)] = inst_19830__$1);

return statearr_19881;
})();
if(inst_19830__$1){
var statearr_19882_22099 = state_19859__$1;
(statearr_19882_22099[(1)] = (17));

} else {
var statearr_19883_22100 = state_19859__$1;
(statearr_19883_22100[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (21))){
var inst_19799 = (state_19859[(12)]);
var inst_19796 = inst_19799;
var state_19859__$1 = (function (){var statearr_19884 = state_19859;
(statearr_19884[(11)] = inst_19796);

return statearr_19884;
})();
var statearr_19885_22101 = state_19859__$1;
(statearr_19885_22101[(2)] = null);

(statearr_19885_22101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (13))){
var inst_19823 = (state_19859[(2)]);
var inst_19824 = calc_state();
var inst_19796 = inst_19824;
var state_19859__$1 = (function (){var statearr_19887 = state_19859;
(statearr_19887[(17)] = inst_19823);

(statearr_19887[(11)] = inst_19796);

return statearr_19887;
})();
var statearr_19890_22106 = state_19859__$1;
(statearr_19890_22106[(2)] = null);

(statearr_19890_22106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (22))){
var inst_19850 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
var statearr_19895_22107 = state_19859__$1;
(statearr_19895_22107[(2)] = inst_19850);

(statearr_19895_22107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (6))){
var inst_19809 = (state_19859[(14)]);
var inst_19814 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19809,change);
var state_19859__$1 = state_19859;
var statearr_19903_22108 = state_19859__$1;
(statearr_19903_22108[(2)] = inst_19814);

(statearr_19903_22108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (25))){
var state_19859__$1 = state_19859;
var statearr_19912_22109 = state_19859__$1;
(statearr_19912_22109[(2)] = null);

(statearr_19912_22109[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (17))){
var inst_19801 = (state_19859[(18)]);
var inst_19809 = (state_19859[(14)]);
var inst_19832 = (inst_19801.cljs$core$IFn$_invoke$arity$1 ? inst_19801.cljs$core$IFn$_invoke$arity$1(inst_19809) : inst_19801.call(null,inst_19809));
var inst_19833 = cljs.core.not(inst_19832);
var state_19859__$1 = state_19859;
var statearr_19915_22110 = state_19859__$1;
(statearr_19915_22110[(2)] = inst_19833);

(statearr_19915_22110[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (3))){
var inst_19856 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19859__$1,inst_19856);
} else {
if((state_val_19860 === (12))){
var state_19859__$1 = state_19859;
var statearr_19916_22119 = state_19859__$1;
(statearr_19916_22119[(2)] = null);

(statearr_19916_22119[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (2))){
var inst_19796 = (state_19859[(11)]);
var inst_19799 = (state_19859[(12)]);
var inst_19799__$1 = cljs.core.__destructure_map(inst_19796);
var inst_19800 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19799__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_19801 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19799__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_19802 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_19799__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_19859__$1 = (function (){var statearr_19928 = state_19859;
(statearr_19928[(12)] = inst_19799__$1);

(statearr_19928[(15)] = inst_19800);

(statearr_19928[(18)] = inst_19801);

return statearr_19928;
})();
return cljs.core.async.ioc_alts_BANG_(state_19859__$1,(4),inst_19802);
} else {
if((state_val_19860 === (23))){
var inst_19841 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
if(cljs.core.truth_(inst_19841)){
var statearr_19930_22120 = state_19859__$1;
(statearr_19930_22120[(1)] = (24));

} else {
var statearr_19931_22121 = state_19859__$1;
(statearr_19931_22121[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (19))){
var inst_19836 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
var statearr_19941_22122 = state_19859__$1;
(statearr_19941_22122[(2)] = inst_19836);

(statearr_19941_22122[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (11))){
var inst_19809 = (state_19859[(14)]);
var inst_19820 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_19809);
var state_19859__$1 = state_19859;
var statearr_19960_22127 = state_19859__$1;
(statearr_19960_22127[(2)] = inst_19820);

(statearr_19960_22127[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (9))){
var inst_19800 = (state_19859[(15)]);
var inst_19809 = (state_19859[(14)]);
var inst_19827 = (state_19859[(19)]);
var inst_19827__$1 = (inst_19800.cljs$core$IFn$_invoke$arity$1 ? inst_19800.cljs$core$IFn$_invoke$arity$1(inst_19809) : inst_19800.call(null,inst_19809));
var state_19859__$1 = (function (){var statearr_19965 = state_19859;
(statearr_19965[(19)] = inst_19827__$1);

return statearr_19965;
})();
if(cljs.core.truth_(inst_19827__$1)){
var statearr_19967_22135 = state_19859__$1;
(statearr_19967_22135[(1)] = (14));

} else {
var statearr_19969_22138 = state_19859__$1;
(statearr_19969_22138[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (5))){
var inst_19810 = (state_19859[(13)]);
var state_19859__$1 = state_19859;
var statearr_19973_22141 = state_19859__$1;
(statearr_19973_22141[(2)] = inst_19810);

(statearr_19973_22141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (14))){
var inst_19827 = (state_19859[(19)]);
var state_19859__$1 = state_19859;
var statearr_19974_22143 = state_19859__$1;
(statearr_19974_22143[(2)] = inst_19827);

(statearr_19974_22143[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (26))){
var inst_19846 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
var statearr_19975_22145 = state_19859__$1;
(statearr_19975_22145[(2)] = inst_19846);

(statearr_19975_22145[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (16))){
var inst_19838 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
if(cljs.core.truth_(inst_19838)){
var statearr_19979_22146 = state_19859__$1;
(statearr_19979_22146[(1)] = (20));

} else {
var statearr_19980_22147 = state_19859__$1;
(statearr_19980_22147[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (10))){
var inst_19852 = (state_19859[(2)]);
var state_19859__$1 = state_19859;
var statearr_19981_22149 = state_19859__$1;
(statearr_19981_22149[(2)] = inst_19852);

(statearr_19981_22149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (18))){
var inst_19830 = (state_19859[(16)]);
var state_19859__$1 = state_19859;
var statearr_19983_22150 = state_19859__$1;
(statearr_19983_22150[(2)] = inst_19830);

(statearr_19983_22150[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19860 === (8))){
var inst_19808 = (state_19859[(7)]);
var inst_19818 = (inst_19808 == null);
var state_19859__$1 = state_19859;
if(cljs.core.truth_(inst_19818)){
var statearr_19984_22151 = state_19859__$1;
(statearr_19984_22151[(1)] = (11));

} else {
var statearr_19987_22152 = state_19859__$1;
(statearr_19987_22152[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17905__auto__ = null;
var cljs$core$async$mix_$_state_machine__17905__auto____0 = (function (){
var statearr_20000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20000[(0)] = cljs$core$async$mix_$_state_machine__17905__auto__);

(statearr_20000[(1)] = (1));

return statearr_20000;
});
var cljs$core$async$mix_$_state_machine__17905__auto____1 = (function (state_19859){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_19859);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e20005){var ex__17908__auto__ = e20005;
var statearr_20006_22165 = state_19859;
(statearr_20006_22165[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_19859[(4)]))){
var statearr_20007_22170 = state_19859;
(statearr_20007_22170[(1)] = cljs.core.first((state_19859[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22171 = state_19859;
state_19859 = G__22171;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17905__auto__ = function(state_19859){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17905__auto____1.call(this,state_19859);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17905__auto____0;
cljs$core$async$mix_$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17905__auto____1;
return cljs$core$async$mix_$_state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_20010 = f__18169__auto__();
(statearr_20010[(6)] = c__18168__auto___22039);

return statearr_20010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_22175 = (function (p,v,ch,close_QMARK_){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5499__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5497__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5497__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_22175(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_22180 = (function (p,v,ch){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5499__auto__.call(null,p,v,ch));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5497__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_22180(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_22184 = (function() {
var G__22185 = null;
var G__22185__1 = (function (p){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5499__auto__.call(null,p));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5497__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__22185__2 = (function (p,v){
var x__5498__auto__ = (((p == null))?null:p);
var m__5499__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5499__auto__.call(null,p,v));
} else {
var m__5497__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5497__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__22185 = function(p,v){
switch(arguments.length){
case 1:
return G__22185__1.call(this,p);
case 2:
return G__22185__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22185.cljs$core$IFn$_invoke$arity$1 = G__22185__1;
G__22185.cljs$core$IFn$_invoke$arity$2 = G__22185__2;
return G__22185;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__20050 = arguments.length;
switch (G__20050) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22184(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22184(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20076 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta20077){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta20077 = meta20077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20078,meta20077__$1){
var self__ = this;
var _20078__$1 = this;
return (new cljs.core.async.t_cljs$core$async20076(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta20077__$1));
}));

(cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20078){
var self__ = this;
var _20078__$1 = this;
return self__.meta20077;
}));

(cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5823__auto__)){
var m = temp__5823__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async20076.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async20076.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta20077","meta20077",-2054428680,null)], null);
}));

(cljs.core.async.t_cljs$core$async20076.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20076.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20076");

(cljs.core.async.t_cljs$core$async20076.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async20076");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20076.
 */
cljs.core.async.__GT_t_cljs$core$async20076 = (function cljs$core$async$__GT_t_cljs$core$async20076(ch,topic_fn,buf_fn,mults,ensure_mult,meta20077){
return (new cljs.core.async.t_cljs$core$async20076(ch,topic_fn,buf_fn,mults,ensure_mult,meta20077));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__20070 = arguments.length;
switch (G__20070) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5142__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__20065_SHARP_){
if(cljs.core.truth_((p1__20065_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__20065_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__20065_SHARP_.call(null,topic)))){
return p1__20065_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__20065_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async20076(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__18168__auto___22206 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_20167){
var state_val_20168 = (state_20167[(1)]);
if((state_val_20168 === (7))){
var inst_20162 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20173_22208 = state_20167__$1;
(statearr_20173_22208[(2)] = inst_20162);

(statearr_20173_22208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (20))){
var state_20167__$1 = state_20167;
var statearr_20174_22209 = state_20167__$1;
(statearr_20174_22209[(2)] = null);

(statearr_20174_22209[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (1))){
var state_20167__$1 = state_20167;
var statearr_20176_22213 = state_20167__$1;
(statearr_20176_22213[(2)] = null);

(statearr_20176_22213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (24))){
var inst_20143 = (state_20167[(7)]);
var inst_20153 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_20143);
var state_20167__$1 = state_20167;
var statearr_20180_22214 = state_20167__$1;
(statearr_20180_22214[(2)] = inst_20153);

(statearr_20180_22214[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (4))){
var inst_20090 = (state_20167[(8)]);
var inst_20090__$1 = (state_20167[(2)]);
var inst_20091 = (inst_20090__$1 == null);
var state_20167__$1 = (function (){var statearr_20181 = state_20167;
(statearr_20181[(8)] = inst_20090__$1);

return statearr_20181;
})();
if(cljs.core.truth_(inst_20091)){
var statearr_20183_22217 = state_20167__$1;
(statearr_20183_22217[(1)] = (5));

} else {
var statearr_20184_22221 = state_20167__$1;
(statearr_20184_22221[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (15))){
var inst_20137 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20185_22222 = state_20167__$1;
(statearr_20185_22222[(2)] = inst_20137);

(statearr_20185_22222[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (21))){
var inst_20159 = (state_20167[(2)]);
var state_20167__$1 = (function (){var statearr_20189 = state_20167;
(statearr_20189[(9)] = inst_20159);

return statearr_20189;
})();
var statearr_20190_22226 = state_20167__$1;
(statearr_20190_22226[(2)] = null);

(statearr_20190_22226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (13))){
var inst_20115 = (state_20167[(10)]);
var inst_20119 = cljs.core.chunked_seq_QMARK_(inst_20115);
var state_20167__$1 = state_20167;
if(inst_20119){
var statearr_20192_22228 = state_20167__$1;
(statearr_20192_22228[(1)] = (16));

} else {
var statearr_20193_22229 = state_20167__$1;
(statearr_20193_22229[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (22))){
var inst_20149 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
if(cljs.core.truth_(inst_20149)){
var statearr_20195_22233 = state_20167__$1;
(statearr_20195_22233[(1)] = (23));

} else {
var statearr_20197_22234 = state_20167__$1;
(statearr_20197_22234[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (6))){
var inst_20090 = (state_20167[(8)]);
var inst_20143 = (state_20167[(7)]);
var inst_20145 = (state_20167[(11)]);
var inst_20143__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_20090) : topic_fn.call(null,inst_20090));
var inst_20144 = cljs.core.deref(mults);
var inst_20145__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_20144,inst_20143__$1);
var state_20167__$1 = (function (){var statearr_20200 = state_20167;
(statearr_20200[(7)] = inst_20143__$1);

(statearr_20200[(11)] = inst_20145__$1);

return statearr_20200;
})();
if(cljs.core.truth_(inst_20145__$1)){
var statearr_20201_22242 = state_20167__$1;
(statearr_20201_22242[(1)] = (19));

} else {
var statearr_20202_22243 = state_20167__$1;
(statearr_20202_22243[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (25))){
var inst_20155 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20205_22247 = state_20167__$1;
(statearr_20205_22247[(2)] = inst_20155);

(statearr_20205_22247[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (17))){
var inst_20115 = (state_20167[(10)]);
var inst_20127 = cljs.core.first(inst_20115);
var inst_20128 = cljs.core.async.muxch_STAR_(inst_20127);
var inst_20129 = cljs.core.async.close_BANG_(inst_20128);
var inst_20130 = cljs.core.next(inst_20115);
var inst_20100 = inst_20130;
var inst_20101 = null;
var inst_20102 = (0);
var inst_20103 = (0);
var state_20167__$1 = (function (){var statearr_20219 = state_20167;
(statearr_20219[(12)] = inst_20129);

(statearr_20219[(13)] = inst_20100);

(statearr_20219[(14)] = inst_20101);

(statearr_20219[(15)] = inst_20102);

(statearr_20219[(16)] = inst_20103);

return statearr_20219;
})();
var statearr_20222_22252 = state_20167__$1;
(statearr_20222_22252[(2)] = null);

(statearr_20222_22252[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (3))){
var inst_20164 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20167__$1,inst_20164);
} else {
if((state_val_20168 === (12))){
var inst_20139 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20225_22253 = state_20167__$1;
(statearr_20225_22253[(2)] = inst_20139);

(statearr_20225_22253[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (2))){
var state_20167__$1 = state_20167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20167__$1,(4),ch);
} else {
if((state_val_20168 === (23))){
var state_20167__$1 = state_20167;
var statearr_20226_22254 = state_20167__$1;
(statearr_20226_22254[(2)] = null);

(statearr_20226_22254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (19))){
var inst_20145 = (state_20167[(11)]);
var inst_20090 = (state_20167[(8)]);
var inst_20147 = cljs.core.async.muxch_STAR_(inst_20145);
var state_20167__$1 = state_20167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20167__$1,(22),inst_20147,inst_20090);
} else {
if((state_val_20168 === (11))){
var inst_20100 = (state_20167[(13)]);
var inst_20115 = (state_20167[(10)]);
var inst_20115__$1 = cljs.core.seq(inst_20100);
var state_20167__$1 = (function (){var statearr_20230 = state_20167;
(statearr_20230[(10)] = inst_20115__$1);

return statearr_20230;
})();
if(inst_20115__$1){
var statearr_20231_22260 = state_20167__$1;
(statearr_20231_22260[(1)] = (13));

} else {
var statearr_20232_22261 = state_20167__$1;
(statearr_20232_22261[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (9))){
var inst_20141 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20234_22262 = state_20167__$1;
(statearr_20234_22262[(2)] = inst_20141);

(statearr_20234_22262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (5))){
var inst_20097 = cljs.core.deref(mults);
var inst_20098 = cljs.core.vals(inst_20097);
var inst_20099 = cljs.core.seq(inst_20098);
var inst_20100 = inst_20099;
var inst_20101 = null;
var inst_20102 = (0);
var inst_20103 = (0);
var state_20167__$1 = (function (){var statearr_20237 = state_20167;
(statearr_20237[(13)] = inst_20100);

(statearr_20237[(14)] = inst_20101);

(statearr_20237[(15)] = inst_20102);

(statearr_20237[(16)] = inst_20103);

return statearr_20237;
})();
var statearr_20239_22263 = state_20167__$1;
(statearr_20239_22263[(2)] = null);

(statearr_20239_22263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (14))){
var state_20167__$1 = state_20167;
var statearr_20243_22264 = state_20167__$1;
(statearr_20243_22264[(2)] = null);

(statearr_20243_22264[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (16))){
var inst_20115 = (state_20167[(10)]);
var inst_20122 = cljs.core.chunk_first(inst_20115);
var inst_20123 = cljs.core.chunk_rest(inst_20115);
var inst_20124 = cljs.core.count(inst_20122);
var inst_20100 = inst_20123;
var inst_20101 = inst_20122;
var inst_20102 = inst_20124;
var inst_20103 = (0);
var state_20167__$1 = (function (){var statearr_20246 = state_20167;
(statearr_20246[(13)] = inst_20100);

(statearr_20246[(14)] = inst_20101);

(statearr_20246[(15)] = inst_20102);

(statearr_20246[(16)] = inst_20103);

return statearr_20246;
})();
var statearr_20248_22266 = state_20167__$1;
(statearr_20248_22266[(2)] = null);

(statearr_20248_22266[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (10))){
var inst_20101 = (state_20167[(14)]);
var inst_20103 = (state_20167[(16)]);
var inst_20100 = (state_20167[(13)]);
var inst_20102 = (state_20167[(15)]);
var inst_20109 = cljs.core._nth(inst_20101,inst_20103);
var inst_20110 = cljs.core.async.muxch_STAR_(inst_20109);
var inst_20111 = cljs.core.async.close_BANG_(inst_20110);
var inst_20112 = (inst_20103 + (1));
var tmp20240 = inst_20102;
var tmp20241 = inst_20100;
var tmp20242 = inst_20101;
var inst_20100__$1 = tmp20241;
var inst_20101__$1 = tmp20242;
var inst_20102__$1 = tmp20240;
var inst_20103__$1 = inst_20112;
var state_20167__$1 = (function (){var statearr_20250 = state_20167;
(statearr_20250[(17)] = inst_20111);

(statearr_20250[(13)] = inst_20100__$1);

(statearr_20250[(14)] = inst_20101__$1);

(statearr_20250[(15)] = inst_20102__$1);

(statearr_20250[(16)] = inst_20103__$1);

return statearr_20250;
})();
var statearr_20251_22267 = state_20167__$1;
(statearr_20251_22267[(2)] = null);

(statearr_20251_22267[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (18))){
var inst_20133 = (state_20167[(2)]);
var state_20167__$1 = state_20167;
var statearr_20252_22268 = state_20167__$1;
(statearr_20252_22268[(2)] = inst_20133);

(statearr_20252_22268[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20168 === (8))){
var inst_20103 = (state_20167[(16)]);
var inst_20102 = (state_20167[(15)]);
var inst_20105 = (inst_20103 < inst_20102);
var inst_20106 = inst_20105;
var state_20167__$1 = state_20167;
if(cljs.core.truth_(inst_20106)){
var statearr_20254_22269 = state_20167__$1;
(statearr_20254_22269[(1)] = (10));

} else {
var statearr_20255_22270 = state_20167__$1;
(statearr_20255_22270[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17905__auto__ = null;
var cljs$core$async$state_machine__17905__auto____0 = (function (){
var statearr_20258 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20258[(0)] = cljs$core$async$state_machine__17905__auto__);

(statearr_20258[(1)] = (1));

return statearr_20258;
});
var cljs$core$async$state_machine__17905__auto____1 = (function (state_20167){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_20167);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e20260){var ex__17908__auto__ = e20260;
var statearr_20261_22271 = state_20167;
(statearr_20261_22271[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_20167[(4)]))){
var statearr_20262_22273 = state_20167;
(statearr_20262_22273[(1)] = cljs.core.first((state_20167[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22274 = state_20167;
state_20167 = G__22274;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$state_machine__17905__auto__ = function(state_20167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17905__auto____1.call(this,state_20167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17905__auto____0;
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17905__auto____1;
return cljs$core$async$state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_20263 = f__18169__auto__();
(statearr_20263[(6)] = c__18168__auto___22206);

return statearr_20263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__20265 = arguments.length;
switch (G__20265) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__20270 = arguments.length;
switch (G__20270) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__20274 = arguments.length;
switch (G__20274) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__18168__auto___22280 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_20335){
var state_val_20336 = (state_20335[(1)]);
if((state_val_20336 === (7))){
var state_20335__$1 = state_20335;
var statearr_20340_22282 = state_20335__$1;
(statearr_20340_22282[(2)] = null);

(statearr_20340_22282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (1))){
var state_20335__$1 = state_20335;
var statearr_20343_22286 = state_20335__$1;
(statearr_20343_22286[(2)] = null);

(statearr_20343_22286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (4))){
var inst_20283 = (state_20335[(7)]);
var inst_20282 = (state_20335[(8)]);
var inst_20285 = (inst_20283 < inst_20282);
var state_20335__$1 = state_20335;
if(cljs.core.truth_(inst_20285)){
var statearr_20346_22287 = state_20335__$1;
(statearr_20346_22287[(1)] = (6));

} else {
var statearr_20348_22288 = state_20335__$1;
(statearr_20348_22288[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (15))){
var inst_20320 = (state_20335[(9)]);
var inst_20325 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_20320);
var state_20335__$1 = state_20335;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20335__$1,(17),out,inst_20325);
} else {
if((state_val_20336 === (13))){
var inst_20320 = (state_20335[(9)]);
var inst_20320__$1 = (state_20335[(2)]);
var inst_20321 = cljs.core.some(cljs.core.nil_QMARK_,inst_20320__$1);
var state_20335__$1 = (function (){var statearr_20353 = state_20335;
(statearr_20353[(9)] = inst_20320__$1);

return statearr_20353;
})();
if(cljs.core.truth_(inst_20321)){
var statearr_20354_22292 = state_20335__$1;
(statearr_20354_22292[(1)] = (14));

} else {
var statearr_20355_22293 = state_20335__$1;
(statearr_20355_22293[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (6))){
var state_20335__$1 = state_20335;
var statearr_20357_22294 = state_20335__$1;
(statearr_20357_22294[(2)] = null);

(statearr_20357_22294[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (17))){
var inst_20327 = (state_20335[(2)]);
var state_20335__$1 = (function (){var statearr_20390 = state_20335;
(statearr_20390[(10)] = inst_20327);

return statearr_20390;
})();
var statearr_20392_22296 = state_20335__$1;
(statearr_20392_22296[(2)] = null);

(statearr_20392_22296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (3))){
var inst_20332 = (state_20335[(2)]);
var state_20335__$1 = state_20335;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20335__$1,inst_20332);
} else {
if((state_val_20336 === (12))){
var _ = (function (){var statearr_20396 = state_20335;
(statearr_20396[(4)] = cljs.core.rest((state_20335[(4)])));

return statearr_20396;
})();
var state_20335__$1 = state_20335;
var ex20386 = (state_20335__$1[(2)]);
var statearr_20397_22297 = state_20335__$1;
(statearr_20397_22297[(5)] = ex20386);


if((ex20386 instanceof Object)){
var statearr_20401_22300 = state_20335__$1;
(statearr_20401_22300[(1)] = (11));

(statearr_20401_22300[(5)] = null);

} else {
throw ex20386;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (2))){
var inst_20281 = cljs.core.reset_BANG_(dctr,cnt);
var inst_20282 = cnt;
var inst_20283 = (0);
var state_20335__$1 = (function (){var statearr_20402 = state_20335;
(statearr_20402[(11)] = inst_20281);

(statearr_20402[(8)] = inst_20282);

(statearr_20402[(7)] = inst_20283);

return statearr_20402;
})();
var statearr_20403_22311 = state_20335__$1;
(statearr_20403_22311[(2)] = null);

(statearr_20403_22311[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (11))){
var inst_20296 = (state_20335[(2)]);
var inst_20297 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_20335__$1 = (function (){var statearr_20404 = state_20335;
(statearr_20404[(12)] = inst_20296);

return statearr_20404;
})();
var statearr_20405_22313 = state_20335__$1;
(statearr_20405_22313[(2)] = inst_20297);

(statearr_20405_22313[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (9))){
var inst_20283 = (state_20335[(7)]);
var _ = (function (){var statearr_20414 = state_20335;
(statearr_20414[(4)] = cljs.core.cons((12),(state_20335[(4)])));

return statearr_20414;
})();
var inst_20304 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_20283) : chs__$1.call(null,inst_20283));
var inst_20305 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_20283) : done.call(null,inst_20283));
var inst_20306 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_20304,inst_20305);
var ___$1 = (function (){var statearr_20419 = state_20335;
(statearr_20419[(4)] = cljs.core.rest((state_20335[(4)])));

return statearr_20419;
})();
var state_20335__$1 = state_20335;
var statearr_20420_22317 = state_20335__$1;
(statearr_20420_22317[(2)] = inst_20306);

(statearr_20420_22317[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (5))){
var inst_20318 = (state_20335[(2)]);
var state_20335__$1 = (function (){var statearr_20422 = state_20335;
(statearr_20422[(13)] = inst_20318);

return statearr_20422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20335__$1,(13),dchan);
} else {
if((state_val_20336 === (14))){
var inst_20323 = cljs.core.async.close_BANG_(out);
var state_20335__$1 = state_20335;
var statearr_20424_22319 = state_20335__$1;
(statearr_20424_22319[(2)] = inst_20323);

(statearr_20424_22319[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (16))){
var inst_20330 = (state_20335[(2)]);
var state_20335__$1 = state_20335;
var statearr_20425_22321 = state_20335__$1;
(statearr_20425_22321[(2)] = inst_20330);

(statearr_20425_22321[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (10))){
var inst_20283 = (state_20335[(7)]);
var inst_20309 = (state_20335[(2)]);
var inst_20312 = (inst_20283 + (1));
var inst_20283__$1 = inst_20312;
var state_20335__$1 = (function (){var statearr_20426 = state_20335;
(statearr_20426[(14)] = inst_20309);

(statearr_20426[(7)] = inst_20283__$1);

return statearr_20426;
})();
var statearr_20427_22323 = state_20335__$1;
(statearr_20427_22323[(2)] = null);

(statearr_20427_22323[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20336 === (8))){
var inst_20316 = (state_20335[(2)]);
var state_20335__$1 = state_20335;
var statearr_20428_22324 = state_20335__$1;
(statearr_20428_22324[(2)] = inst_20316);

(statearr_20428_22324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17905__auto__ = null;
var cljs$core$async$state_machine__17905__auto____0 = (function (){
var statearr_20431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20431[(0)] = cljs$core$async$state_machine__17905__auto__);

(statearr_20431[(1)] = (1));

return statearr_20431;
});
var cljs$core$async$state_machine__17905__auto____1 = (function (state_20335){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_20335);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e20432){var ex__17908__auto__ = e20432;
var statearr_20441_22326 = state_20335;
(statearr_20441_22326[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_20335[(4)]))){
var statearr_20442_22327 = state_20335;
(statearr_20442_22327[(1)] = cljs.core.first((state_20335[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22328 = state_20335;
state_20335 = G__22328;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$state_machine__17905__auto__ = function(state_20335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17905__auto____1.call(this,state_20335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17905__auto____0;
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17905__auto____1;
return cljs$core$async$state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_20450 = f__18169__auto__();
(statearr_20450[(6)] = c__18168__auto___22280);

return statearr_20450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__20459 = arguments.length;
switch (G__20459) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18168__auto___22334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_20496){
var state_val_20501 = (state_20496[(1)]);
if((state_val_20501 === (7))){
var inst_20474 = (state_20496[(7)]);
var inst_20475 = (state_20496[(8)]);
var inst_20474__$1 = (state_20496[(2)]);
var inst_20475__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20474__$1,(0),null);
var inst_20476 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_20474__$1,(1),null);
var inst_20477 = (inst_20475__$1 == null);
var state_20496__$1 = (function (){var statearr_20504 = state_20496;
(statearr_20504[(7)] = inst_20474__$1);

(statearr_20504[(8)] = inst_20475__$1);

(statearr_20504[(9)] = inst_20476);

return statearr_20504;
})();
if(cljs.core.truth_(inst_20477)){
var statearr_20507_22335 = state_20496__$1;
(statearr_20507_22335[(1)] = (8));

} else {
var statearr_20509_22336 = state_20496__$1;
(statearr_20509_22336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (1))){
var inst_20464 = cljs.core.vec(chs);
var inst_20465 = inst_20464;
var state_20496__$1 = (function (){var statearr_20512 = state_20496;
(statearr_20512[(10)] = inst_20465);

return statearr_20512;
})();
var statearr_20513_22337 = state_20496__$1;
(statearr_20513_22337[(2)] = null);

(statearr_20513_22337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (4))){
var inst_20465 = (state_20496[(10)]);
var state_20496__$1 = state_20496;
return cljs.core.async.ioc_alts_BANG_(state_20496__$1,(7),inst_20465);
} else {
if((state_val_20501 === (6))){
var inst_20491 = (state_20496[(2)]);
var state_20496__$1 = state_20496;
var statearr_20519_22338 = state_20496__$1;
(statearr_20519_22338[(2)] = inst_20491);

(statearr_20519_22338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (3))){
var inst_20493 = (state_20496[(2)]);
var state_20496__$1 = state_20496;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20496__$1,inst_20493);
} else {
if((state_val_20501 === (2))){
var inst_20465 = (state_20496[(10)]);
var inst_20467 = cljs.core.count(inst_20465);
var inst_20468 = (inst_20467 > (0));
var state_20496__$1 = state_20496;
if(cljs.core.truth_(inst_20468)){
var statearr_20521_22339 = state_20496__$1;
(statearr_20521_22339[(1)] = (4));

} else {
var statearr_20522_22340 = state_20496__$1;
(statearr_20522_22340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (11))){
var inst_20465 = (state_20496[(10)]);
var inst_20484 = (state_20496[(2)]);
var tmp20520 = inst_20465;
var inst_20465__$1 = tmp20520;
var state_20496__$1 = (function (){var statearr_20523 = state_20496;
(statearr_20523[(11)] = inst_20484);

(statearr_20523[(10)] = inst_20465__$1);

return statearr_20523;
})();
var statearr_20524_22341 = state_20496__$1;
(statearr_20524_22341[(2)] = null);

(statearr_20524_22341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (9))){
var inst_20475 = (state_20496[(8)]);
var state_20496__$1 = state_20496;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20496__$1,(11),out,inst_20475);
} else {
if((state_val_20501 === (5))){
var inst_20489 = cljs.core.async.close_BANG_(out);
var state_20496__$1 = state_20496;
var statearr_20529_22343 = state_20496__$1;
(statearr_20529_22343[(2)] = inst_20489);

(statearr_20529_22343[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (10))){
var inst_20487 = (state_20496[(2)]);
var state_20496__$1 = state_20496;
var statearr_20535_22346 = state_20496__$1;
(statearr_20535_22346[(2)] = inst_20487);

(statearr_20535_22346[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20501 === (8))){
var inst_20465 = (state_20496[(10)]);
var inst_20474 = (state_20496[(7)]);
var inst_20475 = (state_20496[(8)]);
var inst_20476 = (state_20496[(9)]);
var inst_20479 = (function (){var cs = inst_20465;
var vec__20470 = inst_20474;
var v = inst_20475;
var c = inst_20476;
return (function (p1__20457_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__20457_SHARP_);
});
})();
var inst_20480 = cljs.core.filterv(inst_20479,inst_20465);
var inst_20465__$1 = inst_20480;
var state_20496__$1 = (function (){var statearr_20542 = state_20496;
(statearr_20542[(10)] = inst_20465__$1);

return statearr_20542;
})();
var statearr_20543_22347 = state_20496__$1;
(statearr_20543_22347[(2)] = null);

(statearr_20543_22347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17905__auto__ = null;
var cljs$core$async$state_machine__17905__auto____0 = (function (){
var statearr_20544 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_20544[(0)] = cljs$core$async$state_machine__17905__auto__);

(statearr_20544[(1)] = (1));

return statearr_20544;
});
var cljs$core$async$state_machine__17905__auto____1 = (function (state_20496){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_20496);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e20547){var ex__17908__auto__ = e20547;
var statearr_20548_22349 = state_20496;
(statearr_20548_22349[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_20496[(4)]))){
var statearr_20549_22350 = state_20496;
(statearr_20549_22350[(1)] = cljs.core.first((state_20496[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22351 = state_20496;
state_20496 = G__22351;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$state_machine__17905__auto__ = function(state_20496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17905__auto____1.call(this,state_20496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17905__auto____0;
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17905__auto____1;
return cljs$core$async$state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_20555 = f__18169__auto__();
(statearr_20555[(6)] = c__18168__auto___22334);

return statearr_20555;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__20566 = arguments.length;
switch (G__20566) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18168__auto___22353 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_20600){
var state_val_20601 = (state_20600[(1)]);
if((state_val_20601 === (7))){
var inst_20581 = (state_20600[(7)]);
var inst_20581__$1 = (state_20600[(2)]);
var inst_20583 = (inst_20581__$1 == null);
var inst_20584 = cljs.core.not(inst_20583);
var state_20600__$1 = (function (){var statearr_20603 = state_20600;
(statearr_20603[(7)] = inst_20581__$1);

return statearr_20603;
})();
if(inst_20584){
var statearr_20604_22363 = state_20600__$1;
(statearr_20604_22363[(1)] = (8));

} else {
var statearr_20605_22364 = state_20600__$1;
(statearr_20605_22364[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (1))){
var inst_20573 = (0);
var state_20600__$1 = (function (){var statearr_20606 = state_20600;
(statearr_20606[(8)] = inst_20573);

return statearr_20606;
})();
var statearr_20607_22365 = state_20600__$1;
(statearr_20607_22365[(2)] = null);

(statearr_20607_22365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (4))){
var state_20600__$1 = state_20600;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20600__$1,(7),ch);
} else {
if((state_val_20601 === (6))){
var inst_20595 = (state_20600[(2)]);
var state_20600__$1 = state_20600;
var statearr_20608_22366 = state_20600__$1;
(statearr_20608_22366[(2)] = inst_20595);

(statearr_20608_22366[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (3))){
var inst_20597 = (state_20600[(2)]);
var inst_20598 = cljs.core.async.close_BANG_(out);
var state_20600__$1 = (function (){var statearr_20616 = state_20600;
(statearr_20616[(9)] = inst_20597);

return statearr_20616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_20600__$1,inst_20598);
} else {
if((state_val_20601 === (2))){
var inst_20573 = (state_20600[(8)]);
var inst_20575 = (inst_20573 < n);
var state_20600__$1 = state_20600;
if(cljs.core.truth_(inst_20575)){
var statearr_20618_22368 = state_20600__$1;
(statearr_20618_22368[(1)] = (4));

} else {
var statearr_20619_22369 = state_20600__$1;
(statearr_20619_22369[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (11))){
var inst_20573 = (state_20600[(8)]);
var inst_20587 = (state_20600[(2)]);
var inst_20588 = (inst_20573 + (1));
var inst_20573__$1 = inst_20588;
var state_20600__$1 = (function (){var statearr_20620 = state_20600;
(statearr_20620[(10)] = inst_20587);

(statearr_20620[(8)] = inst_20573__$1);

return statearr_20620;
})();
var statearr_20621_22370 = state_20600__$1;
(statearr_20621_22370[(2)] = null);

(statearr_20621_22370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (9))){
var state_20600__$1 = state_20600;
var statearr_20626_22371 = state_20600__$1;
(statearr_20626_22371[(2)] = null);

(statearr_20626_22371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (5))){
var state_20600__$1 = state_20600;
var statearr_20627_22372 = state_20600__$1;
(statearr_20627_22372[(2)] = null);

(statearr_20627_22372[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (10))){
var inst_20592 = (state_20600[(2)]);
var state_20600__$1 = state_20600;
var statearr_20630_22374 = state_20600__$1;
(statearr_20630_22374[(2)] = inst_20592);

(statearr_20630_22374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20601 === (8))){
var inst_20581 = (state_20600[(7)]);
var state_20600__$1 = state_20600;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20600__$1,(11),out,inst_20581);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17905__auto__ = null;
var cljs$core$async$state_machine__17905__auto____0 = (function (){
var statearr_20639 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_20639[(0)] = cljs$core$async$state_machine__17905__auto__);

(statearr_20639[(1)] = (1));

return statearr_20639;
});
var cljs$core$async$state_machine__17905__auto____1 = (function (state_20600){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_20600);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e20640){var ex__17908__auto__ = e20640;
var statearr_20644_22376 = state_20600;
(statearr_20644_22376[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_20600[(4)]))){
var statearr_20645_22377 = state_20600;
(statearr_20645_22377[(1)] = cljs.core.first((state_20600[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22378 = state_20600;
state_20600 = G__22378;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$state_machine__17905__auto__ = function(state_20600){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17905__auto____1.call(this,state_20600);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17905__auto____0;
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17905__auto____1;
return cljs$core$async$state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_20647 = f__18169__auto__();
(statearr_20647[(6)] = c__18168__auto___22353);

return statearr_20647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20666 = (function (f,ch,meta20657,_,fn1,meta20667){
this.f = f;
this.ch = ch;
this.meta20657 = meta20657;
this._ = _;
this.fn1 = fn1;
this.meta20667 = meta20667;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20666.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20668,meta20667__$1){
var self__ = this;
var _20668__$1 = this;
return (new cljs.core.async.t_cljs$core$async20666(self__.f,self__.ch,self__.meta20657,self__._,self__.fn1,meta20667__$1));
}));

(cljs.core.async.t_cljs$core$async20666.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20668){
var self__ = this;
var _20668__$1 = this;
return self__.meta20667;
}));

(cljs.core.async.t_cljs$core$async20666.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20666.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async20666.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async20666.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__20651_SHARP_){
var G__20675 = (((p1__20651_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__20651_SHARP_) : self__.f.call(null,p1__20651_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__20675) : f1.call(null,G__20675));
});
}));

(cljs.core.async.t_cljs$core$async20666.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20657","meta20657",-804584733,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async20656","cljs.core.async/t_cljs$core$async20656",1462013020,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta20667","meta20667",26022832,null)], null);
}));

(cljs.core.async.t_cljs$core$async20666.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20666.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20666");

(cljs.core.async.t_cljs$core$async20666.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async20666");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20666.
 */
cljs.core.async.__GT_t_cljs$core$async20666 = (function cljs$core$async$__GT_t_cljs$core$async20666(f,ch,meta20657,_,fn1,meta20667){
return (new cljs.core.async.t_cljs$core$async20666(f,ch,meta20657,_,fn1,meta20667));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20656 = (function (f,ch,meta20657){
this.f = f;
this.ch = ch;
this.meta20657 = meta20657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20658,meta20657__$1){
var self__ = this;
var _20658__$1 = this;
return (new cljs.core.async.t_cljs$core$async20656(self__.f,self__.ch,meta20657__$1));
}));

(cljs.core.async.t_cljs$core$async20656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20658){
var self__ = this;
var _20658__$1 = this;
return self__.meta20657;
}));

(cljs.core.async.t_cljs$core$async20656.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20656.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20656.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20656.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20656.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async20666(self__.f,self__.ch,self__.meta20657,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5140__auto__ = ret;
if(cljs.core.truth_(and__5140__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__20686 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__20686) : self__.f.call(null,G__20686));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async20656.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20656.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async20656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20657","meta20657",-804584733,null)], null);
}));

(cljs.core.async.t_cljs$core$async20656.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20656");

(cljs.core.async.t_cljs$core$async20656.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async20656");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20656.
 */
cljs.core.async.__GT_t_cljs$core$async20656 = (function cljs$core$async$__GT_t_cljs$core$async20656(f,ch,meta20657){
return (new cljs.core.async.t_cljs$core$async20656(f,ch,meta20657));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20656(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20696 = (function (f,ch,meta20697){
this.f = f;
this.ch = ch;
this.meta20697 = meta20697;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20698,meta20697__$1){
var self__ = this;
var _20698__$1 = this;
return (new cljs.core.async.t_cljs$core$async20696(self__.f,self__.ch,meta20697__$1));
}));

(cljs.core.async.t_cljs$core$async20696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20698){
var self__ = this;
var _20698__$1 = this;
return self__.meta20697;
}));

(cljs.core.async.t_cljs$core$async20696.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20696.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20696.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20696.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20696.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20696.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async20696.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20697","meta20697",1452811581,null)], null);
}));

(cljs.core.async.t_cljs$core$async20696.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20696.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20696");

(cljs.core.async.t_cljs$core$async20696.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async20696");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20696.
 */
cljs.core.async.__GT_t_cljs$core$async20696 = (function cljs$core$async$__GT_t_cljs$core$async20696(f,ch,meta20697){
return (new cljs.core.async.t_cljs$core$async20696(f,ch,meta20697));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async20696(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async20705 = (function (p,ch,meta20706){
this.p = p;
this.ch = ch;
this.meta20706 = meta20706;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async20705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20707,meta20706__$1){
var self__ = this;
var _20707__$1 = this;
return (new cljs.core.async.t_cljs$core$async20705(self__.p,self__.ch,meta20706__$1));
}));

(cljs.core.async.t_cljs$core$async20705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20707){
var self__ = this;
var _20707__$1 = this;
return self__.meta20706;
}));

(cljs.core.async.t_cljs$core$async20705.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20705.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20705.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async20705.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20705.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async20705.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async20705.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async20705.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta20706","meta20706",364826180,null)], null);
}));

(cljs.core.async.t_cljs$core$async20705.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async20705.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async20705");

(cljs.core.async.t_cljs$core$async20705.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"cljs.core.async/t_cljs$core$async20705");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async20705.
 */
cljs.core.async.__GT_t_cljs$core$async20705 = (function cljs$core$async$__GT_t_cljs$core$async20705(p,ch,meta20706){
return (new cljs.core.async.t_cljs$core$async20705(p,ch,meta20706));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async20705(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__20737 = arguments.length;
switch (G__20737) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18168__auto___22395 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_20811){
var state_val_20812 = (state_20811[(1)]);
if((state_val_20812 === (7))){
var inst_20803 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
var statearr_20815_22403 = state_20811__$1;
(statearr_20815_22403[(2)] = inst_20803);

(statearr_20815_22403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (1))){
var state_20811__$1 = state_20811;
var statearr_20821_22404 = state_20811__$1;
(statearr_20821_22404[(2)] = null);

(statearr_20821_22404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (4))){
var inst_20781 = (state_20811[(7)]);
var inst_20781__$1 = (state_20811[(2)]);
var inst_20782 = (inst_20781__$1 == null);
var state_20811__$1 = (function (){var statearr_20824 = state_20811;
(statearr_20824[(7)] = inst_20781__$1);

return statearr_20824;
})();
if(cljs.core.truth_(inst_20782)){
var statearr_20827_22405 = state_20811__$1;
(statearr_20827_22405[(1)] = (5));

} else {
var statearr_20829_22407 = state_20811__$1;
(statearr_20829_22407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (6))){
var inst_20781 = (state_20811[(7)]);
var inst_20786 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_20781) : p.call(null,inst_20781));
var state_20811__$1 = state_20811;
if(cljs.core.truth_(inst_20786)){
var statearr_20835_22408 = state_20811__$1;
(statearr_20835_22408[(1)] = (8));

} else {
var statearr_20836_22409 = state_20811__$1;
(statearr_20836_22409[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (3))){
var inst_20805 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20811__$1,inst_20805);
} else {
if((state_val_20812 === (2))){
var state_20811__$1 = state_20811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20811__$1,(4),ch);
} else {
if((state_val_20812 === (11))){
var inst_20793 = (state_20811[(2)]);
var state_20811__$1 = state_20811;
var statearr_20842_22410 = state_20811__$1;
(statearr_20842_22410[(2)] = inst_20793);

(statearr_20842_22410[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (9))){
var state_20811__$1 = state_20811;
var statearr_20846_22420 = state_20811__$1;
(statearr_20846_22420[(2)] = null);

(statearr_20846_22420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (5))){
var inst_20784 = cljs.core.async.close_BANG_(out);
var state_20811__$1 = state_20811;
var statearr_20850_22421 = state_20811__$1;
(statearr_20850_22421[(2)] = inst_20784);

(statearr_20850_22421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (10))){
var inst_20800 = (state_20811[(2)]);
var state_20811__$1 = (function (){var statearr_20853 = state_20811;
(statearr_20853[(8)] = inst_20800);

return statearr_20853;
})();
var statearr_20854_22422 = state_20811__$1;
(statearr_20854_22422[(2)] = null);

(statearr_20854_22422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20812 === (8))){
var inst_20781 = (state_20811[(7)]);
var state_20811__$1 = state_20811;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20811__$1,(11),out,inst_20781);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17905__auto__ = null;
var cljs$core$async$state_machine__17905__auto____0 = (function (){
var statearr_20855 = [null,null,null,null,null,null,null,null,null];
(statearr_20855[(0)] = cljs$core$async$state_machine__17905__auto__);

(statearr_20855[(1)] = (1));

return statearr_20855;
});
var cljs$core$async$state_machine__17905__auto____1 = (function (state_20811){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_20811);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e20856){var ex__17908__auto__ = e20856;
var statearr_20857_22427 = state_20811;
(statearr_20857_22427[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_20811[(4)]))){
var statearr_20859_22432 = state_20811;
(statearr_20859_22432[(1)] = cljs.core.first((state_20811[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22433 = state_20811;
state_20811 = G__22433;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$state_machine__17905__auto__ = function(state_20811){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17905__auto____1.call(this,state_20811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17905__auto____0;
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17905__auto____1;
return cljs$core$async$state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_20869 = f__18169__auto__();
(statearr_20869[(6)] = c__18168__auto___22395);

return statearr_20869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__20879 = arguments.length;
switch (G__20879) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18168__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_20971){
var state_val_20972 = (state_20971[(1)]);
if((state_val_20972 === (7))){
var inst_20967 = (state_20971[(2)]);
var state_20971__$1 = state_20971;
var statearr_20973_22443 = state_20971__$1;
(statearr_20973_22443[(2)] = inst_20967);

(statearr_20973_22443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (20))){
var inst_20936 = (state_20971[(7)]);
var inst_20948 = (state_20971[(2)]);
var inst_20949 = cljs.core.next(inst_20936);
var inst_20922 = inst_20949;
var inst_20923 = null;
var inst_20924 = (0);
var inst_20925 = (0);
var state_20971__$1 = (function (){var statearr_20978 = state_20971;
(statearr_20978[(8)] = inst_20948);

(statearr_20978[(9)] = inst_20922);

(statearr_20978[(10)] = inst_20923);

(statearr_20978[(11)] = inst_20924);

(statearr_20978[(12)] = inst_20925);

return statearr_20978;
})();
var statearr_20979_22444 = state_20971__$1;
(statearr_20979_22444[(2)] = null);

(statearr_20979_22444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (1))){
var state_20971__$1 = state_20971;
var statearr_20981_22445 = state_20971__$1;
(statearr_20981_22445[(2)] = null);

(statearr_20981_22445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (4))){
var inst_20908 = (state_20971[(13)]);
var inst_20908__$1 = (state_20971[(2)]);
var inst_20909 = (inst_20908__$1 == null);
var state_20971__$1 = (function (){var statearr_20982 = state_20971;
(statearr_20982[(13)] = inst_20908__$1);

return statearr_20982;
})();
if(cljs.core.truth_(inst_20909)){
var statearr_20983_22452 = state_20971__$1;
(statearr_20983_22452[(1)] = (5));

} else {
var statearr_20984_22453 = state_20971__$1;
(statearr_20984_22453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (15))){
var state_20971__$1 = state_20971;
var statearr_20988_22454 = state_20971__$1;
(statearr_20988_22454[(2)] = null);

(statearr_20988_22454[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (21))){
var state_20971__$1 = state_20971;
var statearr_20990_22458 = state_20971__$1;
(statearr_20990_22458[(2)] = null);

(statearr_20990_22458[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (13))){
var inst_20925 = (state_20971[(12)]);
var inst_20922 = (state_20971[(9)]);
var inst_20923 = (state_20971[(10)]);
var inst_20924 = (state_20971[(11)]);
var inst_20932 = (state_20971[(2)]);
var inst_20933 = (inst_20925 + (1));
var tmp20985 = inst_20924;
var tmp20986 = inst_20923;
var tmp20987 = inst_20922;
var inst_20922__$1 = tmp20987;
var inst_20923__$1 = tmp20986;
var inst_20924__$1 = tmp20985;
var inst_20925__$1 = inst_20933;
var state_20971__$1 = (function (){var statearr_20991 = state_20971;
(statearr_20991[(14)] = inst_20932);

(statearr_20991[(9)] = inst_20922__$1);

(statearr_20991[(10)] = inst_20923__$1);

(statearr_20991[(11)] = inst_20924__$1);

(statearr_20991[(12)] = inst_20925__$1);

return statearr_20991;
})();
var statearr_20992_22462 = state_20971__$1;
(statearr_20992_22462[(2)] = null);

(statearr_20992_22462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (22))){
var state_20971__$1 = state_20971;
var statearr_20994_22463 = state_20971__$1;
(statearr_20994_22463[(2)] = null);

(statearr_20994_22463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (6))){
var inst_20908 = (state_20971[(13)]);
var inst_20917 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_20908) : f.call(null,inst_20908));
var inst_20918 = cljs.core.seq(inst_20917);
var inst_20922 = inst_20918;
var inst_20923 = null;
var inst_20924 = (0);
var inst_20925 = (0);
var state_20971__$1 = (function (){var statearr_20998 = state_20971;
(statearr_20998[(9)] = inst_20922);

(statearr_20998[(10)] = inst_20923);

(statearr_20998[(11)] = inst_20924);

(statearr_20998[(12)] = inst_20925);

return statearr_20998;
})();
var statearr_20999_22465 = state_20971__$1;
(statearr_20999_22465[(2)] = null);

(statearr_20999_22465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (17))){
var inst_20936 = (state_20971[(7)]);
var inst_20940 = cljs.core.chunk_first(inst_20936);
var inst_20941 = cljs.core.chunk_rest(inst_20936);
var inst_20942 = cljs.core.count(inst_20940);
var inst_20922 = inst_20941;
var inst_20923 = inst_20940;
var inst_20924 = inst_20942;
var inst_20925 = (0);
var state_20971__$1 = (function (){var statearr_21012 = state_20971;
(statearr_21012[(9)] = inst_20922);

(statearr_21012[(10)] = inst_20923);

(statearr_21012[(11)] = inst_20924);

(statearr_21012[(12)] = inst_20925);

return statearr_21012;
})();
var statearr_21013_22469 = state_20971__$1;
(statearr_21013_22469[(2)] = null);

(statearr_21013_22469[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (3))){
var inst_20969 = (state_20971[(2)]);
var state_20971__$1 = state_20971;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20971__$1,inst_20969);
} else {
if((state_val_20972 === (12))){
var inst_20957 = (state_20971[(2)]);
var state_20971__$1 = state_20971;
var statearr_21014_22471 = state_20971__$1;
(statearr_21014_22471[(2)] = inst_20957);

(statearr_21014_22471[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (2))){
var state_20971__$1 = state_20971;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20971__$1,(4),in$);
} else {
if((state_val_20972 === (23))){
var inst_20965 = (state_20971[(2)]);
var state_20971__$1 = state_20971;
var statearr_21017_22472 = state_20971__$1;
(statearr_21017_22472[(2)] = inst_20965);

(statearr_21017_22472[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (19))){
var inst_20952 = (state_20971[(2)]);
var state_20971__$1 = state_20971;
var statearr_21025_22473 = state_20971__$1;
(statearr_21025_22473[(2)] = inst_20952);

(statearr_21025_22473[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (11))){
var inst_20922 = (state_20971[(9)]);
var inst_20936 = (state_20971[(7)]);
var inst_20936__$1 = cljs.core.seq(inst_20922);
var state_20971__$1 = (function (){var statearr_21029 = state_20971;
(statearr_21029[(7)] = inst_20936__$1);

return statearr_21029;
})();
if(inst_20936__$1){
var statearr_21030_22474 = state_20971__$1;
(statearr_21030_22474[(1)] = (14));

} else {
var statearr_21031_22475 = state_20971__$1;
(statearr_21031_22475[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (9))){
var inst_20959 = (state_20971[(2)]);
var inst_20960 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_20971__$1 = (function (){var statearr_21035 = state_20971;
(statearr_21035[(15)] = inst_20959);

return statearr_21035;
})();
if(cljs.core.truth_(inst_20960)){
var statearr_21036_22476 = state_20971__$1;
(statearr_21036_22476[(1)] = (21));

} else {
var statearr_21037_22477 = state_20971__$1;
(statearr_21037_22477[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (5))){
var inst_20911 = cljs.core.async.close_BANG_(out);
var state_20971__$1 = state_20971;
var statearr_21038_22479 = state_20971__$1;
(statearr_21038_22479[(2)] = inst_20911);

(statearr_21038_22479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (14))){
var inst_20936 = (state_20971[(7)]);
var inst_20938 = cljs.core.chunked_seq_QMARK_(inst_20936);
var state_20971__$1 = state_20971;
if(inst_20938){
var statearr_21039_22480 = state_20971__$1;
(statearr_21039_22480[(1)] = (17));

} else {
var statearr_21040_22481 = state_20971__$1;
(statearr_21040_22481[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (16))){
var inst_20955 = (state_20971[(2)]);
var state_20971__$1 = state_20971;
var statearr_21042_22483 = state_20971__$1;
(statearr_21042_22483[(2)] = inst_20955);

(statearr_21042_22483[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_20972 === (10))){
var inst_20923 = (state_20971[(10)]);
var inst_20925 = (state_20971[(12)]);
var inst_20930 = cljs.core._nth(inst_20923,inst_20925);
var state_20971__$1 = state_20971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20971__$1,(13),out,inst_20930);
} else {
if((state_val_20972 === (18))){
var inst_20936 = (state_20971[(7)]);
var inst_20945 = cljs.core.first(inst_20936);
var state_20971__$1 = state_20971;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20971__$1,(20),out,inst_20945);
} else {
if((state_val_20972 === (8))){
var inst_20925 = (state_20971[(12)]);
var inst_20924 = (state_20971[(11)]);
var inst_20927 = (inst_20925 < inst_20924);
var inst_20928 = inst_20927;
var state_20971__$1 = state_20971;
if(cljs.core.truth_(inst_20928)){
var statearr_21050_22493 = state_20971__$1;
(statearr_21050_22493[(1)] = (10));

} else {
var statearr_21051_22494 = state_20971__$1;
(statearr_21051_22494[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17905__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17905__auto____0 = (function (){
var statearr_21052 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21052[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17905__auto__);

(statearr_21052[(1)] = (1));

return statearr_21052;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17905__auto____1 = (function (state_20971){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_20971);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e21053){var ex__17908__auto__ = e21053;
var statearr_21054_22497 = state_20971;
(statearr_21054_22497[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_20971[(4)]))){
var statearr_21055_22498 = state_20971;
(statearr_21055_22498[(1)] = cljs.core.first((state_20971[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22499 = state_20971;
state_20971 = G__22499;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17905__auto__ = function(state_20971){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17905__auto____1.call(this,state_20971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17905__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17905__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_21064 = f__18169__auto__();
(statearr_21064[(6)] = c__18168__auto__);

return statearr_21064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));

return c__18168__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__21073 = arguments.length;
switch (G__21073) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__21088 = arguments.length;
switch (G__21088) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__21102 = arguments.length;
switch (G__21102) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18168__auto___22508 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_21143){
var state_val_21144 = (state_21143[(1)]);
if((state_val_21144 === (7))){
var inst_21135 = (state_21143[(2)]);
var state_21143__$1 = state_21143;
var statearr_21146_22509 = state_21143__$1;
(statearr_21146_22509[(2)] = inst_21135);

(statearr_21146_22509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (1))){
var inst_21114 = null;
var state_21143__$1 = (function (){var statearr_21151 = state_21143;
(statearr_21151[(7)] = inst_21114);

return statearr_21151;
})();
var statearr_21152_22514 = state_21143__$1;
(statearr_21152_22514[(2)] = null);

(statearr_21152_22514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (4))){
var inst_21119 = (state_21143[(8)]);
var inst_21119__$1 = (state_21143[(2)]);
var inst_21120 = (inst_21119__$1 == null);
var inst_21121 = cljs.core.not(inst_21120);
var state_21143__$1 = (function (){var statearr_21153 = state_21143;
(statearr_21153[(8)] = inst_21119__$1);

return statearr_21153;
})();
if(inst_21121){
var statearr_21154_22528 = state_21143__$1;
(statearr_21154_22528[(1)] = (5));

} else {
var statearr_21155_22529 = state_21143__$1;
(statearr_21155_22529[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (6))){
var state_21143__$1 = state_21143;
var statearr_21156_22534 = state_21143__$1;
(statearr_21156_22534[(2)] = null);

(statearr_21156_22534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (3))){
var inst_21137 = (state_21143[(2)]);
var inst_21138 = cljs.core.async.close_BANG_(out);
var state_21143__$1 = (function (){var statearr_21159 = state_21143;
(statearr_21159[(9)] = inst_21137);

return statearr_21159;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21143__$1,inst_21138);
} else {
if((state_val_21144 === (2))){
var state_21143__$1 = state_21143;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21143__$1,(4),ch);
} else {
if((state_val_21144 === (11))){
var inst_21119 = (state_21143[(8)]);
var inst_21129 = (state_21143[(2)]);
var inst_21114 = inst_21119;
var state_21143__$1 = (function (){var statearr_21160 = state_21143;
(statearr_21160[(10)] = inst_21129);

(statearr_21160[(7)] = inst_21114);

return statearr_21160;
})();
var statearr_21161_22553 = state_21143__$1;
(statearr_21161_22553[(2)] = null);

(statearr_21161_22553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (9))){
var inst_21119 = (state_21143[(8)]);
var state_21143__$1 = state_21143;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21143__$1,(11),out,inst_21119);
} else {
if((state_val_21144 === (5))){
var inst_21119 = (state_21143[(8)]);
var inst_21114 = (state_21143[(7)]);
var inst_21123 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21119,inst_21114);
var state_21143__$1 = state_21143;
if(inst_21123){
var statearr_21163_22561 = state_21143__$1;
(statearr_21163_22561[(1)] = (8));

} else {
var statearr_21164_22568 = state_21143__$1;
(statearr_21164_22568[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (10))){
var inst_21132 = (state_21143[(2)]);
var state_21143__$1 = state_21143;
var statearr_21165_22577 = state_21143__$1;
(statearr_21165_22577[(2)] = inst_21132);

(statearr_21165_22577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21144 === (8))){
var inst_21114 = (state_21143[(7)]);
var tmp21162 = inst_21114;
var inst_21114__$1 = tmp21162;
var state_21143__$1 = (function (){var statearr_21166 = state_21143;
(statearr_21166[(7)] = inst_21114__$1);

return statearr_21166;
})();
var statearr_21170_22584 = state_21143__$1;
(statearr_21170_22584[(2)] = null);

(statearr_21170_22584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17905__auto__ = null;
var cljs$core$async$state_machine__17905__auto____0 = (function (){
var statearr_21176 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21176[(0)] = cljs$core$async$state_machine__17905__auto__);

(statearr_21176[(1)] = (1));

return statearr_21176;
});
var cljs$core$async$state_machine__17905__auto____1 = (function (state_21143){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_21143);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e21177){var ex__17908__auto__ = e21177;
var statearr_21178_22611 = state_21143;
(statearr_21178_22611[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_21143[(4)]))){
var statearr_21180_22617 = state_21143;
(statearr_21180_22617[(1)] = cljs.core.first((state_21143[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22623 = state_21143;
state_21143 = G__22623;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$state_machine__17905__auto__ = function(state_21143){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17905__auto____1.call(this,state_21143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17905__auto____0;
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17905__auto____1;
return cljs$core$async$state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_21185 = f__18169__auto__();
(statearr_21185[(6)] = c__18168__auto___22508);

return statearr_21185;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__21195 = arguments.length;
switch (G__21195) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18168__auto___22671 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_21248){
var state_val_21250 = (state_21248[(1)]);
if((state_val_21250 === (7))){
var inst_21244 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
var statearr_21251_22672 = state_21248__$1;
(statearr_21251_22672[(2)] = inst_21244);

(statearr_21251_22672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21250 === (1))){
var inst_21199 = (new Array(n));
var inst_21200 = inst_21199;
var inst_21201 = (0);
var state_21248__$1 = (function (){var statearr_21252 = state_21248;
(statearr_21252[(7)] = inst_21200);

(statearr_21252[(8)] = inst_21201);

return statearr_21252;
})();
var statearr_21253_22687 = state_21248__$1;
(statearr_21253_22687[(2)] = null);

(statearr_21253_22687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21250 === (4))){
var inst_21208 = (state_21248[(9)]);
var inst_21208__$1 = (state_21248[(2)]);
var inst_21209 = (inst_21208__$1 == null);
var inst_21210 = cljs.core.not(inst_21209);
var state_21248__$1 = (function (){var statearr_21265 = state_21248;
(statearr_21265[(9)] = inst_21208__$1);

return statearr_21265;
})();
if(inst_21210){
var statearr_21267_22696 = state_21248__$1;
(statearr_21267_22696[(1)] = (5));

} else {
var statearr_21271_22701 = state_21248__$1;
(statearr_21271_22701[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21250 === (15))){
var inst_21238 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
var statearr_21272_22712 = state_21248__$1;
(statearr_21272_22712[(2)] = inst_21238);

(statearr_21272_22712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21250 === (13))){
var state_21248__$1 = state_21248;
var statearr_21273_22716 = state_21248__$1;
(statearr_21273_22716[(2)] = null);

(statearr_21273_22716[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21250 === (6))){
var inst_21201 = (state_21248[(8)]);
var inst_21234 = (inst_21201 > (0));
var state_21248__$1 = state_21248;
if(cljs.core.truth_(inst_21234)){
var statearr_21274_22720 = state_21248__$1;
(statearr_21274_22720[(1)] = (12));

} else {
var statearr_21284_22721 = state_21248__$1;
(statearr_21284_22721[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21250 === (3))){
var inst_21246 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21248__$1,inst_21246);
} else {
if((state_val_21250 === (12))){
var inst_21200 = (state_21248[(7)]);
var inst_21236 = cljs.core.vec(inst_21200);
var state_21248__$1 = state_21248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21248__$1,(15),out,inst_21236);
} else {
if((state_val_21250 === (2))){
var state_21248__$1 = state_21248;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21248__$1,(4),ch);
} else {
if((state_val_21250 === (11))){
var inst_21228 = (state_21248[(2)]);
var inst_21229 = (new Array(n));
var inst_21200 = inst_21229;
var inst_21201 = (0);
var state_21248__$1 = (function (){var statearr_21293 = state_21248;
(statearr_21293[(10)] = inst_21228);

(statearr_21293[(7)] = inst_21200);

(statearr_21293[(8)] = inst_21201);

return statearr_21293;
})();
var statearr_21294_22731 = state_21248__$1;
(statearr_21294_22731[(2)] = null);

(statearr_21294_22731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21250 === (9))){
var inst_21200 = (state_21248[(7)]);
var inst_21226 = cljs.core.vec(inst_21200);
var state_21248__$1 = state_21248;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21248__$1,(11),out,inst_21226);
} else {
if((state_val_21250 === (5))){
var inst_21200 = (state_21248[(7)]);
var inst_21201 = (state_21248[(8)]);
var inst_21208 = (state_21248[(9)]);
var inst_21217 = (state_21248[(11)]);
var inst_21216 = (inst_21200[inst_21201] = inst_21208);
var inst_21217__$1 = (inst_21201 + (1));
var inst_21218 = (inst_21217__$1 < n);
var state_21248__$1 = (function (){var statearr_21295 = state_21248;
(statearr_21295[(12)] = inst_21216);

(statearr_21295[(11)] = inst_21217__$1);

return statearr_21295;
})();
if(cljs.core.truth_(inst_21218)){
var statearr_21296_22737 = state_21248__$1;
(statearr_21296_22737[(1)] = (8));

} else {
var statearr_21297_22738 = state_21248__$1;
(statearr_21297_22738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21250 === (14))){
var inst_21241 = (state_21248[(2)]);
var inst_21242 = cljs.core.async.close_BANG_(out);
var state_21248__$1 = (function (){var statearr_21302 = state_21248;
(statearr_21302[(13)] = inst_21241);

return statearr_21302;
})();
var statearr_21303_22743 = state_21248__$1;
(statearr_21303_22743[(2)] = inst_21242);

(statearr_21303_22743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21250 === (10))){
var inst_21232 = (state_21248[(2)]);
var state_21248__$1 = state_21248;
var statearr_21305_22744 = state_21248__$1;
(statearr_21305_22744[(2)] = inst_21232);

(statearr_21305_22744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21250 === (8))){
var inst_21200 = (state_21248[(7)]);
var inst_21217 = (state_21248[(11)]);
var tmp21298 = inst_21200;
var inst_21200__$1 = tmp21298;
var inst_21201 = inst_21217;
var state_21248__$1 = (function (){var statearr_21306 = state_21248;
(statearr_21306[(7)] = inst_21200__$1);

(statearr_21306[(8)] = inst_21201);

return statearr_21306;
})();
var statearr_21307_22745 = state_21248__$1;
(statearr_21307_22745[(2)] = null);

(statearr_21307_22745[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17905__auto__ = null;
var cljs$core$async$state_machine__17905__auto____0 = (function (){
var statearr_21308 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21308[(0)] = cljs$core$async$state_machine__17905__auto__);

(statearr_21308[(1)] = (1));

return statearr_21308;
});
var cljs$core$async$state_machine__17905__auto____1 = (function (state_21248){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_21248);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e21309){var ex__17908__auto__ = e21309;
var statearr_21310_22746 = state_21248;
(statearr_21310_22746[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_21248[(4)]))){
var statearr_21311_22747 = state_21248;
(statearr_21311_22747[(1)] = cljs.core.first((state_21248[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22748 = state_21248;
state_21248 = G__22748;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$state_machine__17905__auto__ = function(state_21248){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17905__auto____1.call(this,state_21248);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17905__auto____0;
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17905__auto____1;
return cljs$core$async$state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_21320 = f__18169__auto__();
(statearr_21320[(6)] = c__18168__auto___22671);

return statearr_21320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__21329 = arguments.length;
switch (G__21329) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__18168__auto___22752 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__18169__auto__ = (function (){var switch__17904__auto__ = (function (state_21381){
var state_val_21382 = (state_21381[(1)]);
if((state_val_21382 === (7))){
var inst_21375 = (state_21381[(2)]);
var state_21381__$1 = state_21381;
var statearr_21390_22754 = state_21381__$1;
(statearr_21390_22754[(2)] = inst_21375);

(statearr_21390_22754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (1))){
var inst_21335 = [];
var inst_21336 = inst_21335;
var inst_21337 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_21381__$1 = (function (){var statearr_21391 = state_21381;
(statearr_21391[(7)] = inst_21336);

(statearr_21391[(8)] = inst_21337);

return statearr_21391;
})();
var statearr_21394_22755 = state_21381__$1;
(statearr_21394_22755[(2)] = null);

(statearr_21394_22755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (4))){
var inst_21340 = (state_21381[(9)]);
var inst_21340__$1 = (state_21381[(2)]);
var inst_21341 = (inst_21340__$1 == null);
var inst_21342 = cljs.core.not(inst_21341);
var state_21381__$1 = (function (){var statearr_21399 = state_21381;
(statearr_21399[(9)] = inst_21340__$1);

return statearr_21399;
})();
if(inst_21342){
var statearr_21400_22756 = state_21381__$1;
(statearr_21400_22756[(1)] = (5));

} else {
var statearr_21403_22757 = state_21381__$1;
(statearr_21403_22757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (15))){
var inst_21336 = (state_21381[(7)]);
var inst_21367 = cljs.core.vec(inst_21336);
var state_21381__$1 = state_21381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21381__$1,(18),out,inst_21367);
} else {
if((state_val_21382 === (13))){
var inst_21362 = (state_21381[(2)]);
var state_21381__$1 = state_21381;
var statearr_21405_22766 = state_21381__$1;
(statearr_21405_22766[(2)] = inst_21362);

(statearr_21405_22766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (6))){
var inst_21336 = (state_21381[(7)]);
var inst_21364 = inst_21336.length;
var inst_21365 = (inst_21364 > (0));
var state_21381__$1 = state_21381;
if(cljs.core.truth_(inst_21365)){
var statearr_21407_22767 = state_21381__$1;
(statearr_21407_22767[(1)] = (15));

} else {
var statearr_21408_22768 = state_21381__$1;
(statearr_21408_22768[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (17))){
var inst_21372 = (state_21381[(2)]);
var inst_21373 = cljs.core.async.close_BANG_(out);
var state_21381__$1 = (function (){var statearr_21409 = state_21381;
(statearr_21409[(10)] = inst_21372);

return statearr_21409;
})();
var statearr_21410_22769 = state_21381__$1;
(statearr_21410_22769[(2)] = inst_21373);

(statearr_21410_22769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (3))){
var inst_21377 = (state_21381[(2)]);
var state_21381__$1 = state_21381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21381__$1,inst_21377);
} else {
if((state_val_21382 === (12))){
var inst_21336 = (state_21381[(7)]);
var inst_21355 = cljs.core.vec(inst_21336);
var state_21381__$1 = state_21381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21381__$1,(14),out,inst_21355);
} else {
if((state_val_21382 === (2))){
var state_21381__$1 = state_21381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21381__$1,(4),ch);
} else {
if((state_val_21382 === (11))){
var inst_21336 = (state_21381[(7)]);
var inst_21340 = (state_21381[(9)]);
var inst_21344 = (state_21381[(11)]);
var inst_21352 = inst_21336.push(inst_21340);
var tmp21412 = inst_21336;
var inst_21336__$1 = tmp21412;
var inst_21337 = inst_21344;
var state_21381__$1 = (function (){var statearr_21414 = state_21381;
(statearr_21414[(12)] = inst_21352);

(statearr_21414[(7)] = inst_21336__$1);

(statearr_21414[(8)] = inst_21337);

return statearr_21414;
})();
var statearr_21415_22777 = state_21381__$1;
(statearr_21415_22777[(2)] = null);

(statearr_21415_22777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (9))){
var inst_21337 = (state_21381[(8)]);
var inst_21348 = cljs.core.keyword_identical_QMARK_(inst_21337,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_21381__$1 = state_21381;
var statearr_21418_22781 = state_21381__$1;
(statearr_21418_22781[(2)] = inst_21348);

(statearr_21418_22781[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (5))){
var inst_21340 = (state_21381[(9)]);
var inst_21344 = (state_21381[(11)]);
var inst_21337 = (state_21381[(8)]);
var inst_21345 = (state_21381[(13)]);
var inst_21344__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_21340) : f.call(null,inst_21340));
var inst_21345__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_21344__$1,inst_21337);
var state_21381__$1 = (function (){var statearr_21421 = state_21381;
(statearr_21421[(11)] = inst_21344__$1);

(statearr_21421[(13)] = inst_21345__$1);

return statearr_21421;
})();
if(inst_21345__$1){
var statearr_21422_22785 = state_21381__$1;
(statearr_21422_22785[(1)] = (8));

} else {
var statearr_21426_22791 = state_21381__$1;
(statearr_21426_22791[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (14))){
var inst_21340 = (state_21381[(9)]);
var inst_21344 = (state_21381[(11)]);
var inst_21357 = (state_21381[(2)]);
var inst_21358 = [];
var inst_21359 = inst_21358.push(inst_21340);
var inst_21336 = inst_21358;
var inst_21337 = inst_21344;
var state_21381__$1 = (function (){var statearr_21428 = state_21381;
(statearr_21428[(14)] = inst_21357);

(statearr_21428[(15)] = inst_21359);

(statearr_21428[(7)] = inst_21336);

(statearr_21428[(8)] = inst_21337);

return statearr_21428;
})();
var statearr_21432_22799 = state_21381__$1;
(statearr_21432_22799[(2)] = null);

(statearr_21432_22799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (16))){
var state_21381__$1 = state_21381;
var statearr_21433_22800 = state_21381__$1;
(statearr_21433_22800[(2)] = null);

(statearr_21433_22800[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (10))){
var inst_21350 = (state_21381[(2)]);
var state_21381__$1 = state_21381;
if(cljs.core.truth_(inst_21350)){
var statearr_21434_22801 = state_21381__$1;
(statearr_21434_22801[(1)] = (11));

} else {
var statearr_21435_22802 = state_21381__$1;
(statearr_21435_22802[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (18))){
var inst_21369 = (state_21381[(2)]);
var state_21381__$1 = state_21381;
var statearr_21436_22804 = state_21381__$1;
(statearr_21436_22804[(2)] = inst_21369);

(statearr_21436_22804[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21382 === (8))){
var inst_21345 = (state_21381[(13)]);
var state_21381__$1 = state_21381;
var statearr_21437_22805 = state_21381__$1;
(statearr_21437_22805[(2)] = inst_21345);

(statearr_21437_22805[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17905__auto__ = null;
var cljs$core$async$state_machine__17905__auto____0 = (function (){
var statearr_21442 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21442[(0)] = cljs$core$async$state_machine__17905__auto__);

(statearr_21442[(1)] = (1));

return statearr_21442;
});
var cljs$core$async$state_machine__17905__auto____1 = (function (state_21381){
while(true){
var ret_value__17906__auto__ = (function (){try{while(true){
var result__17907__auto__ = switch__17904__auto__(state_21381);
if(cljs.core.keyword_identical_QMARK_(result__17907__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17907__auto__;
}
break;
}
}catch (e21443){var ex__17908__auto__ = e21443;
var statearr_21444_22806 = state_21381;
(statearr_21444_22806[(2)] = ex__17908__auto__);


if(cljs.core.seq((state_21381[(4)]))){
var statearr_21445_22807 = state_21381;
(statearr_21445_22807[(1)] = cljs.core.first((state_21381[(4)])));

} else {
throw ex__17908__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17906__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22809 = state_21381;
state_21381 = G__22809;
continue;
} else {
return ret_value__17906__auto__;
}
break;
}
});
cljs$core$async$state_machine__17905__auto__ = function(state_21381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17905__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17905__auto____1.call(this,state_21381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17905__auto____0;
cljs$core$async$state_machine__17905__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17905__auto____1;
return cljs$core$async$state_machine__17905__auto__;
})()
})();
var state__18170__auto__ = (function (){var statearr_21446 = f__18169__auto__();
(statearr_21446[(6)] = c__18168__auto___22752);

return statearr_21446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__18170__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
