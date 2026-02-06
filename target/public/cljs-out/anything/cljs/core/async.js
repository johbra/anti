// Compiled by ClojureScript 1.11.60 {:optimizations :none}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
goog.scope(function(){
cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__21685 = arguments.length;
switch (G__21685) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21686 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21686 = (function (f,blockable,meta21687){
this.f = f;
this.blockable = blockable;
this.meta21687 = meta21687;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21688,meta21687__$1){
var self__ = this;
var _21688__$1 = this;
return (new cljs.core.async.t_cljs$core$async21686(self__.f,self__.blockable,meta21687__$1));
}));

(cljs.core.async.t_cljs$core$async21686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21688){
var self__ = this;
var _21688__$1 = this;
return self__.meta21687;
}));

(cljs.core.async.t_cljs$core$async21686.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21686.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async21686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async21686.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21687","meta21687",1612056494,null)], null);
}));

(cljs.core.async.t_cljs$core$async21686.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21686.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21686");

(cljs.core.async.t_cljs$core$async21686.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async21686");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21686.
 */
cljs.core.async.__GT_t_cljs$core$async21686 = (function cljs$core$async$__GT_t_cljs$core$async21686(f__$1,blockable__$1,meta21687){
return (new cljs.core.async.t_cljs$core$async21686(f__$1,blockable__$1,meta21687));
});

}

return (new cljs.core.async.t_cljs$core$async21686(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__21692 = arguments.length;
switch (G__21692) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__21695 = arguments.length;
switch (G__21695) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__21698 = arguments.length;
switch (G__21698) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_21700 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21700);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_21700);
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
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
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
var G__21702 = arguments.length;
switch (G__21702) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___21704 = n;
var x_21705 = (0);
while(true){
if((x_21705 < n__5636__auto___21704)){
(a[x_21705] = x_21705);

var G__21706 = (x_21705 + (1));
x_21705 = G__21706;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle.call(null,a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21707 = (function (flag,meta21708){
this.flag = flag;
this.meta21708 = meta21708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21709,meta21708__$1){
var self__ = this;
var _21709__$1 = this;
return (new cljs.core.async.t_cljs$core$async21707(self__.flag,meta21708__$1));
}));

(cljs.core.async.t_cljs$core$async21707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21709){
var self__ = this;
var _21709__$1 = this;
return self__.meta21708;
}));

(cljs.core.async.t_cljs$core$async21707.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async21707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async21707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21708","meta21708",-214245458,null)], null);
}));

(cljs.core.async.t_cljs$core$async21707.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21707");

(cljs.core.async.t_cljs$core$async21707.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async21707");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21707.
 */
cljs.core.async.__GT_t_cljs$core$async21707 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21707(flag__$1,meta21708){
return (new cljs.core.async.t_cljs$core$async21707(flag__$1,meta21708));
});

}

return (new cljs.core.async.t_cljs$core$async21707(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21710 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21710 = (function (flag,cb,meta21711){
this.flag = flag;
this.cb = cb;
this.meta21711 = meta21711;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21710.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21712,meta21711__$1){
var self__ = this;
var _21712__$1 = this;
return (new cljs.core.async.t_cljs$core$async21710(self__.flag,self__.cb,meta21711__$1));
}));

(cljs.core.async.t_cljs$core$async21710.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21712){
var self__ = this;
var _21712__$1 = this;
return self__.meta21711;
}));

(cljs.core.async.t_cljs$core$async21710.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21710.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async21710.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21710.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async21710.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21711","meta21711",-914227888,null)], null);
}));

(cljs.core.async.t_cljs$core$async21710.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21710.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21710");

(cljs.core.async.t_cljs$core$async21710.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async21710");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21710.
 */
cljs.core.async.__GT_t_cljs$core$async21710 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21710(flag__$1,cb__$1,meta21711){
return (new cljs.core.async.t_cljs$core$async21710(flag__$1,cb__$1,meta21711));
});

}

return (new cljs.core.async.t_cljs$core$async21710(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count.call(null,ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21713_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21713_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21714_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21714_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__21715 = (i + (1));
i = G__21715;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5043__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5775__auto__ = [];
var len__5769__auto___21720 = arguments.length;
var i__5770__auto___21721 = (0);
while(true){
if((i__5770__auto___21721 < len__5769__auto___21720)){
args__5775__auto__.push((arguments[i__5770__auto___21721]));

var G__21722 = (i__5770__auto___21721 + (1));
i__5770__auto___21721 = G__21722;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21718){
var map__21719 = p__21718;
var map__21719__$1 = cljs.core.__destructure_map.call(null,map__21719);
var opts = map__21719__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21716){
var G__21717 = cljs.core.first.call(null,seq21716);
var seq21716__$1 = cljs.core.next.call(null,seq21716);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21717,seq21716__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__21724 = arguments.length;
switch (G__21724) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__21625__auto___21771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_21748){
var state_val_21749 = (state_21748[(1)]);
if((state_val_21749 === (7))){
var inst_21744 = (state_21748[(2)]);
var state_21748__$1 = state_21748;
var statearr_21750_21772 = state_21748__$1;
(statearr_21750_21772[(2)] = inst_21744);

(statearr_21750_21772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (1))){
var state_21748__$1 = state_21748;
var statearr_21751_21773 = state_21748__$1;
(statearr_21751_21773[(2)] = null);

(statearr_21751_21773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (4))){
var inst_21727 = (state_21748[(7)]);
var inst_21727__$1 = (state_21748[(2)]);
var inst_21728 = (inst_21727__$1 == null);
var state_21748__$1 = (function (){var statearr_21752 = state_21748;
(statearr_21752[(7)] = inst_21727__$1);

return statearr_21752;
})();
if(cljs.core.truth_(inst_21728)){
var statearr_21753_21774 = state_21748__$1;
(statearr_21753_21774[(1)] = (5));

} else {
var statearr_21754_21775 = state_21748__$1;
(statearr_21754_21775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (13))){
var state_21748__$1 = state_21748;
var statearr_21755_21776 = state_21748__$1;
(statearr_21755_21776[(2)] = null);

(statearr_21755_21776[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (6))){
var inst_21727 = (state_21748[(7)]);
var state_21748__$1 = state_21748;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21748__$1,(11),to,inst_21727);
} else {
if((state_val_21749 === (3))){
var inst_21746 = (state_21748[(2)]);
var state_21748__$1 = state_21748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21748__$1,inst_21746);
} else {
if((state_val_21749 === (12))){
var state_21748__$1 = state_21748;
var statearr_21756_21777 = state_21748__$1;
(statearr_21756_21777[(2)] = null);

(statearr_21756_21777[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (2))){
var state_21748__$1 = state_21748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21748__$1,(4),from);
} else {
if((state_val_21749 === (11))){
var inst_21737 = (state_21748[(2)]);
var state_21748__$1 = state_21748;
if(cljs.core.truth_(inst_21737)){
var statearr_21757_21778 = state_21748__$1;
(statearr_21757_21778[(1)] = (12));

} else {
var statearr_21758_21779 = state_21748__$1;
(statearr_21758_21779[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (9))){
var state_21748__$1 = state_21748;
var statearr_21759_21780 = state_21748__$1;
(statearr_21759_21780[(2)] = null);

(statearr_21759_21780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (5))){
var state_21748__$1 = state_21748;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21760_21781 = state_21748__$1;
(statearr_21760_21781[(1)] = (8));

} else {
var statearr_21761_21782 = state_21748__$1;
(statearr_21761_21782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (14))){
var inst_21742 = (state_21748[(2)]);
var state_21748__$1 = state_21748;
var statearr_21762_21783 = state_21748__$1;
(statearr_21762_21783[(2)] = inst_21742);

(statearr_21762_21783[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (10))){
var inst_21734 = (state_21748[(2)]);
var state_21748__$1 = state_21748;
var statearr_21763_21784 = state_21748__$1;
(statearr_21763_21784[(2)] = inst_21734);

(statearr_21763_21784[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21749 === (8))){
var inst_21731 = cljs.core.async.close_BANG_.call(null,to);
var state_21748__$1 = state_21748;
var statearr_21764_21785 = state_21748__$1;
(statearr_21764_21785[(2)] = inst_21731);

(statearr_21764_21785[(1)] = (10));


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
var cljs$core$async$state_machine__21552__auto__ = null;
var cljs$core$async$state_machine__21552__auto____0 = (function (){
var statearr_21765 = [null,null,null,null,null,null,null,null];
(statearr_21765[(0)] = cljs$core$async$state_machine__21552__auto__);

(statearr_21765[(1)] = (1));

return statearr_21765;
});
var cljs$core$async$state_machine__21552__auto____1 = (function (state_21748){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_21748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e21766){var ex__21555__auto__ = e21766;
var statearr_21767_21786 = state_21748;
(statearr_21767_21786[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_21748[(4)]))){
var statearr_21768_21787 = state_21748;
(statearr_21768_21787[(1)] = cljs.core.first.call(null,(state_21748[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21788 = state_21748;
state_21748 = G__21788;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$state_machine__21552__auto__ = function(state_21748){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21552__auto____1.call(this,state_21748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21552__auto____0;
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21552__auto____1;
return cljs$core$async$state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_21769 = f__21626__auto__.call(null);
(statearr_21769[(6)] = c__21625__auto___21771);

return statearr_21769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = (function (p__21789){
var vec__21790 = p__21789;
var v = cljs.core.nth.call(null,vec__21790,(0),null);
var p = cljs.core.nth.call(null,vec__21790,(1),null);
var job = vec__21790;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21625__auto___21966 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_21797){
var state_val_21798 = (state_21797[(1)]);
if((state_val_21798 === (1))){
var state_21797__$1 = state_21797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21797__$1,(2),res,v);
} else {
if((state_val_21798 === (2))){
var inst_21794 = (state_21797[(2)]);
var inst_21795 = cljs.core.async.close_BANG_.call(null,res);
var state_21797__$1 = (function (){var statearr_21799 = state_21797;
(statearr_21799[(7)] = inst_21794);

return statearr_21799;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21797__$1,inst_21795);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0 = (function (){
var statearr_21800 = [null,null,null,null,null,null,null,null];
(statearr_21800[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__);

(statearr_21800[(1)] = (1));

return statearr_21800;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1 = (function (state_21797){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_21797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e21801){var ex__21555__auto__ = e21801;
var statearr_21802_21967 = state_21797;
(statearr_21802_21967[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_21797[(4)]))){
var statearr_21803_21968 = state_21797;
(statearr_21803_21968[(1)] = cljs.core.first.call(null,(state_21797[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21969 = state_21797;
state_21797 = G__21969;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__ = function(state_21797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1.call(this,state_21797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_21804 = f__21626__auto__.call(null);
(statearr_21804[(6)] = c__21625__auto___21966);

return statearr_21804;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__21805){
var vec__21806 = p__21805;
var v = cljs.core.nth.call(null,vec__21806,(0),null);
var p = cljs.core.nth.call(null,vec__21806,(1),null);
var job = vec__21806;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__5636__auto___21970 = n;
var __21971 = (0);
while(true){
if((__21971 < n__5636__auto___21970)){
var G__21809_21972 = type;
var G__21809_21973__$1 = (((G__21809_21972 instanceof cljs.core.Keyword))?G__21809_21972.fqn:null);
switch (G__21809_21973__$1) {
case "compute":
var c__21625__auto___21975 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21971,c__21625__auto___21975,G__21809_21972,G__21809_21973__$1,n__5636__auto___21970,jobs,results,process__$1,async){
return (function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = ((function (__21971,c__21625__auto___21975,G__21809_21972,G__21809_21973__$1,n__5636__auto___21970,jobs,results,process__$1,async){
return (function (state_21822){
var state_val_21823 = (state_21822[(1)]);
if((state_val_21823 === (1))){
var state_21822__$1 = state_21822;
var statearr_21824_21976 = state_21822__$1;
(statearr_21824_21976[(2)] = null);

(statearr_21824_21976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (2))){
var state_21822__$1 = state_21822;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21822__$1,(4),jobs);
} else {
if((state_val_21823 === (3))){
var inst_21820 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21822__$1,inst_21820);
} else {
if((state_val_21823 === (4))){
var inst_21812 = (state_21822[(2)]);
var inst_21813 = process__$1.call(null,inst_21812);
var state_21822__$1 = state_21822;
if(cljs.core.truth_(inst_21813)){
var statearr_21825_21977 = state_21822__$1;
(statearr_21825_21977[(1)] = (5));

} else {
var statearr_21826_21978 = state_21822__$1;
(statearr_21826_21978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (5))){
var state_21822__$1 = state_21822;
var statearr_21827_21979 = state_21822__$1;
(statearr_21827_21979[(2)] = null);

(statearr_21827_21979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (6))){
var state_21822__$1 = state_21822;
var statearr_21828_21980 = state_21822__$1;
(statearr_21828_21980[(2)] = null);

(statearr_21828_21980[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21823 === (7))){
var inst_21818 = (state_21822[(2)]);
var state_21822__$1 = state_21822;
var statearr_21829_21981 = state_21822__$1;
(statearr_21829_21981[(2)] = inst_21818);

(statearr_21829_21981[(1)] = (3));


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
});})(__21971,c__21625__auto___21975,G__21809_21972,G__21809_21973__$1,n__5636__auto___21970,jobs,results,process__$1,async))
;
return ((function (__21971,switch__21551__auto__,c__21625__auto___21975,G__21809_21972,G__21809_21973__$1,n__5636__auto___21970,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0 = (function (){
var statearr_21830 = [null,null,null,null,null,null,null];
(statearr_21830[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__);

(statearr_21830[(1)] = (1));

return statearr_21830;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1 = (function (state_21822){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_21822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e21831){var ex__21555__auto__ = e21831;
var statearr_21832_21982 = state_21822;
(statearr_21832_21982[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_21822[(4)]))){
var statearr_21833_21983 = state_21822;
(statearr_21833_21983[(1)] = cljs.core.first.call(null,(state_21822[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21984 = state_21822;
state_21822 = G__21984;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__ = function(state_21822){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1.call(this,state_21822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__;
})()
;})(__21971,switch__21551__auto__,c__21625__auto___21975,G__21809_21972,G__21809_21973__$1,n__5636__auto___21970,jobs,results,process__$1,async))
})();
var state__21627__auto__ = (function (){var statearr_21834 = f__21626__auto__.call(null);
(statearr_21834[(6)] = c__21625__auto___21975);

return statearr_21834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
});})(__21971,c__21625__auto___21975,G__21809_21972,G__21809_21973__$1,n__5636__auto___21970,jobs,results,process__$1,async))
);


break;
case "async":
var c__21625__auto___21985 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21971,c__21625__auto___21985,G__21809_21972,G__21809_21973__$1,n__5636__auto___21970,jobs,results,process__$1,async){
return (function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = ((function (__21971,c__21625__auto___21985,G__21809_21972,G__21809_21973__$1,n__5636__auto___21970,jobs,results,process__$1,async){
return (function (state_21847){
var state_val_21848 = (state_21847[(1)]);
if((state_val_21848 === (1))){
var state_21847__$1 = state_21847;
var statearr_21849_21986 = state_21847__$1;
(statearr_21849_21986[(2)] = null);

(statearr_21849_21986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (2))){
var state_21847__$1 = state_21847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21847__$1,(4),jobs);
} else {
if((state_val_21848 === (3))){
var inst_21845 = (state_21847[(2)]);
var state_21847__$1 = state_21847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21847__$1,inst_21845);
} else {
if((state_val_21848 === (4))){
var inst_21837 = (state_21847[(2)]);
var inst_21838 = async.call(null,inst_21837);
var state_21847__$1 = state_21847;
if(cljs.core.truth_(inst_21838)){
var statearr_21850_21987 = state_21847__$1;
(statearr_21850_21987[(1)] = (5));

} else {
var statearr_21851_21988 = state_21847__$1;
(statearr_21851_21988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (5))){
var state_21847__$1 = state_21847;
var statearr_21852_21989 = state_21847__$1;
(statearr_21852_21989[(2)] = null);

(statearr_21852_21989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (6))){
var state_21847__$1 = state_21847;
var statearr_21853_21990 = state_21847__$1;
(statearr_21853_21990[(2)] = null);

(statearr_21853_21990[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21848 === (7))){
var inst_21843 = (state_21847[(2)]);
var state_21847__$1 = state_21847;
var statearr_21854_21991 = state_21847__$1;
(statearr_21854_21991[(2)] = inst_21843);

(statearr_21854_21991[(1)] = (3));


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
});})(__21971,c__21625__auto___21985,G__21809_21972,G__21809_21973__$1,n__5636__auto___21970,jobs,results,process__$1,async))
;
return ((function (__21971,switch__21551__auto__,c__21625__auto___21985,G__21809_21972,G__21809_21973__$1,n__5636__auto___21970,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0 = (function (){
var statearr_21855 = [null,null,null,null,null,null,null];
(statearr_21855[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__);

(statearr_21855[(1)] = (1));

return statearr_21855;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1 = (function (state_21847){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_21847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e21856){var ex__21555__auto__ = e21856;
var statearr_21857_21992 = state_21847;
(statearr_21857_21992[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_21847[(4)]))){
var statearr_21858_21993 = state_21847;
(statearr_21858_21993[(1)] = cljs.core.first.call(null,(state_21847[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21994 = state_21847;
state_21847 = G__21994;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__ = function(state_21847){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1.call(this,state_21847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__;
})()
;})(__21971,switch__21551__auto__,c__21625__auto___21985,G__21809_21972,G__21809_21973__$1,n__5636__auto___21970,jobs,results,process__$1,async))
})();
var state__21627__auto__ = (function (){var statearr_21859 = f__21626__auto__.call(null);
(statearr_21859[(6)] = c__21625__auto___21985);

return statearr_21859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
});})(__21971,c__21625__auto___21985,G__21809_21972,G__21809_21973__$1,n__5636__auto___21970,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21809_21973__$1)].join('')));

}

var G__21995 = (__21971 + (1));
__21971 = G__21995;
continue;
} else {
}
break;
}

var c__21625__auto___21996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_21881){
var state_val_21882 = (state_21881[(1)]);
if((state_val_21882 === (7))){
var inst_21877 = (state_21881[(2)]);
var state_21881__$1 = state_21881;
var statearr_21883_21997 = state_21881__$1;
(statearr_21883_21997[(2)] = inst_21877);

(statearr_21883_21997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (1))){
var state_21881__$1 = state_21881;
var statearr_21884_21998 = state_21881__$1;
(statearr_21884_21998[(2)] = null);

(statearr_21884_21998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (4))){
var inst_21862 = (state_21881[(7)]);
var inst_21862__$1 = (state_21881[(2)]);
var inst_21863 = (inst_21862__$1 == null);
var state_21881__$1 = (function (){var statearr_21885 = state_21881;
(statearr_21885[(7)] = inst_21862__$1);

return statearr_21885;
})();
if(cljs.core.truth_(inst_21863)){
var statearr_21886_21999 = state_21881__$1;
(statearr_21886_21999[(1)] = (5));

} else {
var statearr_21887_22000 = state_21881__$1;
(statearr_21887_22000[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (6))){
var inst_21862 = (state_21881[(7)]);
var inst_21867 = (state_21881[(8)]);
var inst_21867__$1 = cljs.core.async.chan.call(null,(1));
var inst_21868 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21869 = [inst_21862,inst_21867__$1];
var inst_21870 = (new cljs.core.PersistentVector(null,2,(5),inst_21868,inst_21869,null));
var state_21881__$1 = (function (){var statearr_21888 = state_21881;
(statearr_21888[(8)] = inst_21867__$1);

return statearr_21888;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21881__$1,(8),jobs,inst_21870);
} else {
if((state_val_21882 === (3))){
var inst_21879 = (state_21881[(2)]);
var state_21881__$1 = state_21881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21881__$1,inst_21879);
} else {
if((state_val_21882 === (2))){
var state_21881__$1 = state_21881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21881__$1,(4),from);
} else {
if((state_val_21882 === (9))){
var inst_21874 = (state_21881[(2)]);
var state_21881__$1 = (function (){var statearr_21889 = state_21881;
(statearr_21889[(9)] = inst_21874);

return statearr_21889;
})();
var statearr_21890_22001 = state_21881__$1;
(statearr_21890_22001[(2)] = null);

(statearr_21890_22001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (5))){
var inst_21865 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21881__$1 = state_21881;
var statearr_21891_22002 = state_21881__$1;
(statearr_21891_22002[(2)] = inst_21865);

(statearr_21891_22002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21882 === (8))){
var inst_21867 = (state_21881[(8)]);
var inst_21872 = (state_21881[(2)]);
var state_21881__$1 = (function (){var statearr_21892 = state_21881;
(statearr_21892[(10)] = inst_21872);

return statearr_21892;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21881__$1,(9),results,inst_21867);
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
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0 = (function (){
var statearr_21893 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21893[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__);

(statearr_21893[(1)] = (1));

return statearr_21893;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1 = (function (state_21881){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_21881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e21894){var ex__21555__auto__ = e21894;
var statearr_21895_22003 = state_21881;
(statearr_21895_22003[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_21881[(4)]))){
var statearr_21896_22004 = state_21881;
(statearr_21896_22004[(1)] = cljs.core.first.call(null,(state_21881[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22005 = state_21881;
state_21881 = G__22005;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__ = function(state_21881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1.call(this,state_21881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_21897 = f__21626__auto__.call(null);
(statearr_21897[(6)] = c__21625__auto___21996);

return statearr_21897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));


var c__21625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_21935){
var state_val_21936 = (state_21935[(1)]);
if((state_val_21936 === (7))){
var inst_21931 = (state_21935[(2)]);
var state_21935__$1 = state_21935;
var statearr_21937_22006 = state_21935__$1;
(statearr_21937_22006[(2)] = inst_21931);

(statearr_21937_22006[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (20))){
var state_21935__$1 = state_21935;
var statearr_21938_22007 = state_21935__$1;
(statearr_21938_22007[(2)] = null);

(statearr_21938_22007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (1))){
var state_21935__$1 = state_21935;
var statearr_21939_22008 = state_21935__$1;
(statearr_21939_22008[(2)] = null);

(statearr_21939_22008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (4))){
var inst_21900 = (state_21935[(7)]);
var inst_21900__$1 = (state_21935[(2)]);
var inst_21901 = (inst_21900__$1 == null);
var state_21935__$1 = (function (){var statearr_21940 = state_21935;
(statearr_21940[(7)] = inst_21900__$1);

return statearr_21940;
})();
if(cljs.core.truth_(inst_21901)){
var statearr_21941_22009 = state_21935__$1;
(statearr_21941_22009[(1)] = (5));

} else {
var statearr_21942_22010 = state_21935__$1;
(statearr_21942_22010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (15))){
var inst_21913 = (state_21935[(8)]);
var state_21935__$1 = state_21935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21935__$1,(18),to,inst_21913);
} else {
if((state_val_21936 === (21))){
var inst_21926 = (state_21935[(2)]);
var state_21935__$1 = state_21935;
var statearr_21943_22011 = state_21935__$1;
(statearr_21943_22011[(2)] = inst_21926);

(statearr_21943_22011[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (13))){
var inst_21928 = (state_21935[(2)]);
var state_21935__$1 = (function (){var statearr_21944 = state_21935;
(statearr_21944[(9)] = inst_21928);

return statearr_21944;
})();
var statearr_21945_22012 = state_21935__$1;
(statearr_21945_22012[(2)] = null);

(statearr_21945_22012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (6))){
var inst_21900 = (state_21935[(7)]);
var state_21935__$1 = state_21935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21935__$1,(11),inst_21900);
} else {
if((state_val_21936 === (17))){
var inst_21921 = (state_21935[(2)]);
var state_21935__$1 = state_21935;
if(cljs.core.truth_(inst_21921)){
var statearr_21946_22013 = state_21935__$1;
(statearr_21946_22013[(1)] = (19));

} else {
var statearr_21947_22014 = state_21935__$1;
(statearr_21947_22014[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (3))){
var inst_21933 = (state_21935[(2)]);
var state_21935__$1 = state_21935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21935__$1,inst_21933);
} else {
if((state_val_21936 === (12))){
var inst_21910 = (state_21935[(10)]);
var state_21935__$1 = state_21935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21935__$1,(14),inst_21910);
} else {
if((state_val_21936 === (2))){
var state_21935__$1 = state_21935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21935__$1,(4),results);
} else {
if((state_val_21936 === (19))){
var state_21935__$1 = state_21935;
var statearr_21948_22015 = state_21935__$1;
(statearr_21948_22015[(2)] = null);

(statearr_21948_22015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (11))){
var inst_21910 = (state_21935[(2)]);
var state_21935__$1 = (function (){var statearr_21949 = state_21935;
(statearr_21949[(10)] = inst_21910);

return statearr_21949;
})();
var statearr_21950_22016 = state_21935__$1;
(statearr_21950_22016[(2)] = null);

(statearr_21950_22016[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (9))){
var state_21935__$1 = state_21935;
var statearr_21951_22017 = state_21935__$1;
(statearr_21951_22017[(2)] = null);

(statearr_21951_22017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (5))){
var state_21935__$1 = state_21935;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21952_22018 = state_21935__$1;
(statearr_21952_22018[(1)] = (8));

} else {
var statearr_21953_22019 = state_21935__$1;
(statearr_21953_22019[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (14))){
var inst_21913 = (state_21935[(8)]);
var inst_21915 = (state_21935[(11)]);
var inst_21913__$1 = (state_21935[(2)]);
var inst_21914 = (inst_21913__$1 == null);
var inst_21915__$1 = cljs.core.not.call(null,inst_21914);
var state_21935__$1 = (function (){var statearr_21954 = state_21935;
(statearr_21954[(8)] = inst_21913__$1);

(statearr_21954[(11)] = inst_21915__$1);

return statearr_21954;
})();
if(inst_21915__$1){
var statearr_21955_22020 = state_21935__$1;
(statearr_21955_22020[(1)] = (15));

} else {
var statearr_21956_22021 = state_21935__$1;
(statearr_21956_22021[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (16))){
var inst_21915 = (state_21935[(11)]);
var state_21935__$1 = state_21935;
var statearr_21957_22022 = state_21935__$1;
(statearr_21957_22022[(2)] = inst_21915);

(statearr_21957_22022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (10))){
var inst_21907 = (state_21935[(2)]);
var state_21935__$1 = state_21935;
var statearr_21958_22023 = state_21935__$1;
(statearr_21958_22023[(2)] = inst_21907);

(statearr_21958_22023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (18))){
var inst_21918 = (state_21935[(2)]);
var state_21935__$1 = state_21935;
var statearr_21959_22024 = state_21935__$1;
(statearr_21959_22024[(2)] = inst_21918);

(statearr_21959_22024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21936 === (8))){
var inst_21904 = cljs.core.async.close_BANG_.call(null,to);
var state_21935__$1 = state_21935;
var statearr_21960_22025 = state_21935__$1;
(statearr_21960_22025[(2)] = inst_21904);

(statearr_21960_22025[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0 = (function (){
var statearr_21961 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21961[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__);

(statearr_21961[(1)] = (1));

return statearr_21961;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1 = (function (state_21935){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_21935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e21962){var ex__21555__auto__ = e21962;
var statearr_21963_22026 = state_21935;
(statearr_21963_22026[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_21935[(4)]))){
var statearr_21964_22027 = state_21935;
(statearr_21964_22027[(1)] = cljs.core.first.call(null,(state_21935[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22028 = state_21935;
state_21935 = G__22028;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__ = function(state_21935){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1.call(this,state_21935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21552__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_21965 = f__21626__auto__.call(null);
(statearr_21965[(6)] = c__21625__auto__);

return statearr_21965;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));

return c__21625__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__22030 = arguments.length;
switch (G__22030) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
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
var G__22033 = arguments.length;
switch (G__22033) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
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
var G__22036 = arguments.length;
switch (G__22036) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__21625__auto___22086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_22062){
var state_val_22063 = (state_22062[(1)]);
if((state_val_22063 === (7))){
var inst_22058 = (state_22062[(2)]);
var state_22062__$1 = state_22062;
var statearr_22064_22087 = state_22062__$1;
(statearr_22064_22087[(2)] = inst_22058);

(statearr_22064_22087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (1))){
var state_22062__$1 = state_22062;
var statearr_22065_22088 = state_22062__$1;
(statearr_22065_22088[(2)] = null);

(statearr_22065_22088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (4))){
var inst_22039 = (state_22062[(7)]);
var inst_22039__$1 = (state_22062[(2)]);
var inst_22040 = (inst_22039__$1 == null);
var state_22062__$1 = (function (){var statearr_22066 = state_22062;
(statearr_22066[(7)] = inst_22039__$1);

return statearr_22066;
})();
if(cljs.core.truth_(inst_22040)){
var statearr_22067_22089 = state_22062__$1;
(statearr_22067_22089[(1)] = (5));

} else {
var statearr_22068_22090 = state_22062__$1;
(statearr_22068_22090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (13))){
var state_22062__$1 = state_22062;
var statearr_22069_22091 = state_22062__$1;
(statearr_22069_22091[(2)] = null);

(statearr_22069_22091[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (6))){
var inst_22039 = (state_22062[(7)]);
var inst_22045 = p.call(null,inst_22039);
var state_22062__$1 = state_22062;
if(cljs.core.truth_(inst_22045)){
var statearr_22070_22092 = state_22062__$1;
(statearr_22070_22092[(1)] = (9));

} else {
var statearr_22071_22093 = state_22062__$1;
(statearr_22071_22093[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (3))){
var inst_22060 = (state_22062[(2)]);
var state_22062__$1 = state_22062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22062__$1,inst_22060);
} else {
if((state_val_22063 === (12))){
var state_22062__$1 = state_22062;
var statearr_22072_22094 = state_22062__$1;
(statearr_22072_22094[(2)] = null);

(statearr_22072_22094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (2))){
var state_22062__$1 = state_22062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22062__$1,(4),ch);
} else {
if((state_val_22063 === (11))){
var inst_22039 = (state_22062[(7)]);
var inst_22049 = (state_22062[(2)]);
var state_22062__$1 = state_22062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22062__$1,(8),inst_22049,inst_22039);
} else {
if((state_val_22063 === (9))){
var state_22062__$1 = state_22062;
var statearr_22073_22095 = state_22062__$1;
(statearr_22073_22095[(2)] = tc);

(statearr_22073_22095[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (5))){
var inst_22042 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22043 = cljs.core.async.close_BANG_.call(null,fc);
var state_22062__$1 = (function (){var statearr_22074 = state_22062;
(statearr_22074[(8)] = inst_22042);

return statearr_22074;
})();
var statearr_22075_22096 = state_22062__$1;
(statearr_22075_22096[(2)] = inst_22043);

(statearr_22075_22096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (14))){
var inst_22056 = (state_22062[(2)]);
var state_22062__$1 = state_22062;
var statearr_22076_22097 = state_22062__$1;
(statearr_22076_22097[(2)] = inst_22056);

(statearr_22076_22097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (10))){
var state_22062__$1 = state_22062;
var statearr_22077_22098 = state_22062__$1;
(statearr_22077_22098[(2)] = fc);

(statearr_22077_22098[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22063 === (8))){
var inst_22051 = (state_22062[(2)]);
var state_22062__$1 = state_22062;
if(cljs.core.truth_(inst_22051)){
var statearr_22078_22099 = state_22062__$1;
(statearr_22078_22099[(1)] = (12));

} else {
var statearr_22079_22100 = state_22062__$1;
(statearr_22079_22100[(1)] = (13));

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
var cljs$core$async$state_machine__21552__auto__ = null;
var cljs$core$async$state_machine__21552__auto____0 = (function (){
var statearr_22080 = [null,null,null,null,null,null,null,null,null];
(statearr_22080[(0)] = cljs$core$async$state_machine__21552__auto__);

(statearr_22080[(1)] = (1));

return statearr_22080;
});
var cljs$core$async$state_machine__21552__auto____1 = (function (state_22062){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_22062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e22081){var ex__21555__auto__ = e22081;
var statearr_22082_22101 = state_22062;
(statearr_22082_22101[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_22062[(4)]))){
var statearr_22083_22102 = state_22062;
(statearr_22083_22102[(1)] = cljs.core.first.call(null,(state_22062[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22103 = state_22062;
state_22062 = G__22103;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$state_machine__21552__auto__ = function(state_22062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21552__auto____1.call(this,state_22062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21552__auto____0;
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21552__auto____1;
return cljs$core$async$state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_22084 = f__21626__auto__.call(null);
(statearr_22084[(6)] = c__21625__auto___22086);

return statearr_22084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
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
var c__21625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_22125){
var state_val_22126 = (state_22125[(1)]);
if((state_val_22126 === (7))){
var inst_22121 = (state_22125[(2)]);
var state_22125__$1 = state_22125;
var statearr_22127_22146 = state_22125__$1;
(statearr_22127_22146[(2)] = inst_22121);

(statearr_22127_22146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (1))){
var inst_22104 = init;
var inst_22105 = inst_22104;
var state_22125__$1 = (function (){var statearr_22128 = state_22125;
(statearr_22128[(7)] = inst_22105);

return statearr_22128;
})();
var statearr_22129_22147 = state_22125__$1;
(statearr_22129_22147[(2)] = null);

(statearr_22129_22147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (4))){
var inst_22108 = (state_22125[(8)]);
var inst_22108__$1 = (state_22125[(2)]);
var inst_22109 = (inst_22108__$1 == null);
var state_22125__$1 = (function (){var statearr_22130 = state_22125;
(statearr_22130[(8)] = inst_22108__$1);

return statearr_22130;
})();
if(cljs.core.truth_(inst_22109)){
var statearr_22131_22148 = state_22125__$1;
(statearr_22131_22148[(1)] = (5));

} else {
var statearr_22132_22149 = state_22125__$1;
(statearr_22132_22149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (6))){
var inst_22112 = (state_22125[(9)]);
var inst_22108 = (state_22125[(8)]);
var inst_22105 = (state_22125[(7)]);
var inst_22112__$1 = f.call(null,inst_22105,inst_22108);
var inst_22113 = cljs.core.reduced_QMARK_.call(null,inst_22112__$1);
var state_22125__$1 = (function (){var statearr_22133 = state_22125;
(statearr_22133[(9)] = inst_22112__$1);

return statearr_22133;
})();
if(inst_22113){
var statearr_22134_22150 = state_22125__$1;
(statearr_22134_22150[(1)] = (8));

} else {
var statearr_22135_22151 = state_22125__$1;
(statearr_22135_22151[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (3))){
var inst_22123 = (state_22125[(2)]);
var state_22125__$1 = state_22125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22125__$1,inst_22123);
} else {
if((state_val_22126 === (2))){
var state_22125__$1 = state_22125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22125__$1,(4),ch);
} else {
if((state_val_22126 === (9))){
var inst_22112 = (state_22125[(9)]);
var inst_22105 = inst_22112;
var state_22125__$1 = (function (){var statearr_22136 = state_22125;
(statearr_22136[(7)] = inst_22105);

return statearr_22136;
})();
var statearr_22137_22152 = state_22125__$1;
(statearr_22137_22152[(2)] = null);

(statearr_22137_22152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (5))){
var inst_22105 = (state_22125[(7)]);
var state_22125__$1 = state_22125;
var statearr_22138_22153 = state_22125__$1;
(statearr_22138_22153[(2)] = inst_22105);

(statearr_22138_22153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (10))){
var inst_22119 = (state_22125[(2)]);
var state_22125__$1 = state_22125;
var statearr_22139_22154 = state_22125__$1;
(statearr_22139_22154[(2)] = inst_22119);

(statearr_22139_22154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22126 === (8))){
var inst_22112 = (state_22125[(9)]);
var inst_22115 = cljs.core.deref.call(null,inst_22112);
var state_22125__$1 = state_22125;
var statearr_22140_22155 = state_22125__$1;
(statearr_22140_22155[(2)] = inst_22115);

(statearr_22140_22155[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__21552__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21552__auto____0 = (function (){
var statearr_22141 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22141[(0)] = cljs$core$async$reduce_$_state_machine__21552__auto__);

(statearr_22141[(1)] = (1));

return statearr_22141;
});
var cljs$core$async$reduce_$_state_machine__21552__auto____1 = (function (state_22125){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_22125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e22142){var ex__21555__auto__ = e22142;
var statearr_22143_22156 = state_22125;
(statearr_22143_22156[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_22125[(4)]))){
var statearr_22144_22157 = state_22125;
(statearr_22144_22157[(1)] = cljs.core.first.call(null,(state_22125[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22158 = state_22125;
state_22125 = G__22158;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21552__auto__ = function(state_22125){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21552__auto____1.call(this,state_22125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21552__auto____0;
cljs$core$async$reduce_$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21552__auto____1;
return cljs$core$async$reduce_$_state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_22145 = f__21626__auto__.call(null);
(statearr_22145[(6)] = c__21625__auto__);

return statearr_22145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));

return c__21625__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__21625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_22164){
var state_val_22165 = (state_22164[(1)]);
if((state_val_22165 === (1))){
var inst_22159 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_22164__$1 = state_22164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22164__$1,(2),inst_22159);
} else {
if((state_val_22165 === (2))){
var inst_22161 = (state_22164[(2)]);
var inst_22162 = f__$1.call(null,inst_22161);
var state_22164__$1 = state_22164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22164__$1,inst_22162);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21552__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21552__auto____0 = (function (){
var statearr_22166 = [null,null,null,null,null,null,null];
(statearr_22166[(0)] = cljs$core$async$transduce_$_state_machine__21552__auto__);

(statearr_22166[(1)] = (1));

return statearr_22166;
});
var cljs$core$async$transduce_$_state_machine__21552__auto____1 = (function (state_22164){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_22164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e22167){var ex__21555__auto__ = e22167;
var statearr_22168_22171 = state_22164;
(statearr_22168_22171[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_22164[(4)]))){
var statearr_22169_22172 = state_22164;
(statearr_22169_22172[(1)] = cljs.core.first.call(null,(state_22164[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22173 = state_22164;
state_22164 = G__22173;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21552__auto__ = function(state_22164){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21552__auto____1.call(this,state_22164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21552__auto____0;
cljs$core$async$transduce_$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21552__auto____1;
return cljs$core$async$transduce_$_state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_22170 = f__21626__auto__.call(null);
(statearr_22170[(6)] = c__21625__auto__);

return statearr_22170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));

return c__21625__auto__;
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
var G__22175 = arguments.length;
switch (G__22175) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__21625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_22200){
var state_val_22201 = (state_22200[(1)]);
if((state_val_22201 === (7))){
var inst_22182 = (state_22200[(2)]);
var state_22200__$1 = state_22200;
var statearr_22202_22224 = state_22200__$1;
(statearr_22202_22224[(2)] = inst_22182);

(statearr_22202_22224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (1))){
var inst_22176 = cljs.core.seq.call(null,coll);
var inst_22177 = inst_22176;
var state_22200__$1 = (function (){var statearr_22203 = state_22200;
(statearr_22203[(7)] = inst_22177);

return statearr_22203;
})();
var statearr_22204_22225 = state_22200__$1;
(statearr_22204_22225[(2)] = null);

(statearr_22204_22225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (4))){
var inst_22177 = (state_22200[(7)]);
var inst_22180 = cljs.core.first.call(null,inst_22177);
var state_22200__$1 = state_22200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22200__$1,(7),ch,inst_22180);
} else {
if((state_val_22201 === (13))){
var inst_22194 = (state_22200[(2)]);
var state_22200__$1 = state_22200;
var statearr_22205_22226 = state_22200__$1;
(statearr_22205_22226[(2)] = inst_22194);

(statearr_22205_22226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (6))){
var inst_22185 = (state_22200[(2)]);
var state_22200__$1 = state_22200;
if(cljs.core.truth_(inst_22185)){
var statearr_22206_22227 = state_22200__$1;
(statearr_22206_22227[(1)] = (8));

} else {
var statearr_22207_22228 = state_22200__$1;
(statearr_22207_22228[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (3))){
var inst_22198 = (state_22200[(2)]);
var state_22200__$1 = state_22200;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22200__$1,inst_22198);
} else {
if((state_val_22201 === (12))){
var state_22200__$1 = state_22200;
var statearr_22208_22229 = state_22200__$1;
(statearr_22208_22229[(2)] = null);

(statearr_22208_22229[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (2))){
var inst_22177 = (state_22200[(7)]);
var state_22200__$1 = state_22200;
if(cljs.core.truth_(inst_22177)){
var statearr_22209_22230 = state_22200__$1;
(statearr_22209_22230[(1)] = (4));

} else {
var statearr_22210_22231 = state_22200__$1;
(statearr_22210_22231[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (11))){
var inst_22191 = cljs.core.async.close_BANG_.call(null,ch);
var state_22200__$1 = state_22200;
var statearr_22211_22232 = state_22200__$1;
(statearr_22211_22232[(2)] = inst_22191);

(statearr_22211_22232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (9))){
var state_22200__$1 = state_22200;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22212_22233 = state_22200__$1;
(statearr_22212_22233[(1)] = (11));

} else {
var statearr_22213_22234 = state_22200__$1;
(statearr_22213_22234[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (5))){
var inst_22177 = (state_22200[(7)]);
var state_22200__$1 = state_22200;
var statearr_22214_22235 = state_22200__$1;
(statearr_22214_22235[(2)] = inst_22177);

(statearr_22214_22235[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (10))){
var inst_22196 = (state_22200[(2)]);
var state_22200__$1 = state_22200;
var statearr_22215_22236 = state_22200__$1;
(statearr_22215_22236[(2)] = inst_22196);

(statearr_22215_22236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22201 === (8))){
var inst_22177 = (state_22200[(7)]);
var inst_22187 = cljs.core.next.call(null,inst_22177);
var inst_22177__$1 = inst_22187;
var state_22200__$1 = (function (){var statearr_22216 = state_22200;
(statearr_22216[(7)] = inst_22177__$1);

return statearr_22216;
})();
var statearr_22217_22237 = state_22200__$1;
(statearr_22217_22237[(2)] = null);

(statearr_22217_22237[(1)] = (2));


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
var cljs$core$async$state_machine__21552__auto__ = null;
var cljs$core$async$state_machine__21552__auto____0 = (function (){
var statearr_22218 = [null,null,null,null,null,null,null,null];
(statearr_22218[(0)] = cljs$core$async$state_machine__21552__auto__);

(statearr_22218[(1)] = (1));

return statearr_22218;
});
var cljs$core$async$state_machine__21552__auto____1 = (function (state_22200){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_22200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e22219){var ex__21555__auto__ = e22219;
var statearr_22220_22238 = state_22200;
(statearr_22220_22238[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_22200[(4)]))){
var statearr_22221_22239 = state_22200;
(statearr_22221_22239[(1)] = cljs.core.first.call(null,(state_22200[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22240 = state_22200;
state_22200 = G__22240;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$state_machine__21552__auto__ = function(state_22200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21552__auto____1.call(this,state_22200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21552__auto____0;
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21552__auto____1;
return cljs$core$async$state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_22222 = f__21626__auto__.call(null);
(statearr_22222[(6)] = c__21625__auto__);

return statearr_22222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));

return c__21625__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan_BANG_.call(null,ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__22242 = arguments.length;
switch (G__22242) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.call(null,ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_.call(null,coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_22244 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,_);
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_22244.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_22245 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_22245.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_22246 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_22246.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_22247 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_22247.call(null,m);
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22248 = (function (ch,cs,meta22249){
this.ch = ch;
this.cs = cs;
this.meta22249 = meta22249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22250,meta22249__$1){
var self__ = this;
var _22250__$1 = this;
return (new cljs.core.async.t_cljs$core$async22248(self__.ch,self__.cs,meta22249__$1));
}));

(cljs.core.async.t_cljs$core$async22248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22250){
var self__ = this;
var _22250__$1 = this;
return self__.meta22249;
}));

(cljs.core.async.t_cljs$core$async22248.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22248.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22248.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22248.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async22248.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async22248.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async22248.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta22249","meta22249",-433131848,null)], null);
}));

(cljs.core.async.t_cljs$core$async22248.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22248.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22248");

(cljs.core.async.t_cljs$core$async22248.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async22248");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22248.
 */
cljs.core.async.__GT_t_cljs$core$async22248 = (function cljs$core$async$mult_$___GT_t_cljs$core$async22248(ch__$1,cs__$1,meta22249){
return (new cljs.core.async.t_cljs$core$async22248(ch__$1,cs__$1,meta22249));
});

}

return (new cljs.core.async.t_cljs$core$async22248(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__21625__auto___22467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_22383){
var state_val_22384 = (state_22383[(1)]);
if((state_val_22384 === (7))){
var inst_22379 = (state_22383[(2)]);
var state_22383__$1 = state_22383;
var statearr_22385_22468 = state_22383__$1;
(statearr_22385_22468[(2)] = inst_22379);

(statearr_22385_22468[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (20))){
var inst_22284 = (state_22383[(7)]);
var inst_22296 = cljs.core.first.call(null,inst_22284);
var inst_22297 = cljs.core.nth.call(null,inst_22296,(0),null);
var inst_22298 = cljs.core.nth.call(null,inst_22296,(1),null);
var state_22383__$1 = (function (){var statearr_22386 = state_22383;
(statearr_22386[(8)] = inst_22297);

return statearr_22386;
})();
if(cljs.core.truth_(inst_22298)){
var statearr_22387_22469 = state_22383__$1;
(statearr_22387_22469[(1)] = (22));

} else {
var statearr_22388_22470 = state_22383__$1;
(statearr_22388_22470[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (27))){
var inst_22326 = (state_22383[(9)]);
var inst_22333 = (state_22383[(10)]);
var inst_22328 = (state_22383[(11)]);
var inst_22253 = (state_22383[(12)]);
var inst_22333__$1 = cljs.core._nth.call(null,inst_22326,inst_22328);
var inst_22334 = cljs.core.async.put_BANG_.call(null,inst_22333__$1,inst_22253,done);
var state_22383__$1 = (function (){var statearr_22389 = state_22383;
(statearr_22389[(10)] = inst_22333__$1);

return statearr_22389;
})();
if(cljs.core.truth_(inst_22334)){
var statearr_22390_22471 = state_22383__$1;
(statearr_22390_22471[(1)] = (30));

} else {
var statearr_22391_22472 = state_22383__$1;
(statearr_22391_22472[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (1))){
var state_22383__$1 = state_22383;
var statearr_22392_22473 = state_22383__$1;
(statearr_22392_22473[(2)] = null);

(statearr_22392_22473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (24))){
var inst_22284 = (state_22383[(7)]);
var inst_22303 = (state_22383[(2)]);
var inst_22304 = cljs.core.next.call(null,inst_22284);
var inst_22262 = inst_22304;
var inst_22263 = null;
var inst_22264 = (0);
var inst_22265 = (0);
var state_22383__$1 = (function (){var statearr_22393 = state_22383;
(statearr_22393[(13)] = inst_22303);

(statearr_22393[(14)] = inst_22264);

(statearr_22393[(15)] = inst_22265);

(statearr_22393[(16)] = inst_22263);

(statearr_22393[(17)] = inst_22262);

return statearr_22393;
})();
var statearr_22394_22474 = state_22383__$1;
(statearr_22394_22474[(2)] = null);

(statearr_22394_22474[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (39))){
var state_22383__$1 = state_22383;
var statearr_22398_22475 = state_22383__$1;
(statearr_22398_22475[(2)] = null);

(statearr_22398_22475[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (4))){
var inst_22253 = (state_22383[(12)]);
var inst_22253__$1 = (state_22383[(2)]);
var inst_22254 = (inst_22253__$1 == null);
var state_22383__$1 = (function (){var statearr_22399 = state_22383;
(statearr_22399[(12)] = inst_22253__$1);

return statearr_22399;
})();
if(cljs.core.truth_(inst_22254)){
var statearr_22400_22476 = state_22383__$1;
(statearr_22400_22476[(1)] = (5));

} else {
var statearr_22401_22477 = state_22383__$1;
(statearr_22401_22477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (15))){
var inst_22264 = (state_22383[(14)]);
var inst_22265 = (state_22383[(15)]);
var inst_22263 = (state_22383[(16)]);
var inst_22262 = (state_22383[(17)]);
var inst_22280 = (state_22383[(2)]);
var inst_22281 = (inst_22265 + (1));
var tmp22395 = inst_22264;
var tmp22396 = inst_22263;
var tmp22397 = inst_22262;
var inst_22262__$1 = tmp22397;
var inst_22263__$1 = tmp22396;
var inst_22264__$1 = tmp22395;
var inst_22265__$1 = inst_22281;
var state_22383__$1 = (function (){var statearr_22402 = state_22383;
(statearr_22402[(14)] = inst_22264__$1);

(statearr_22402[(15)] = inst_22265__$1);

(statearr_22402[(16)] = inst_22263__$1);

(statearr_22402[(17)] = inst_22262__$1);

(statearr_22402[(18)] = inst_22280);

return statearr_22402;
})();
var statearr_22403_22478 = state_22383__$1;
(statearr_22403_22478[(2)] = null);

(statearr_22403_22478[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (21))){
var inst_22307 = (state_22383[(2)]);
var state_22383__$1 = state_22383;
var statearr_22407_22479 = state_22383__$1;
(statearr_22407_22479[(2)] = inst_22307);

(statearr_22407_22479[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (31))){
var inst_22333 = (state_22383[(10)]);
var inst_22337 = cljs.core.async.untap_STAR_.call(null,m,inst_22333);
var state_22383__$1 = state_22383;
var statearr_22408_22480 = state_22383__$1;
(statearr_22408_22480[(2)] = inst_22337);

(statearr_22408_22480[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (32))){
var inst_22327 = (state_22383[(19)]);
var inst_22326 = (state_22383[(9)]);
var inst_22325 = (state_22383[(20)]);
var inst_22328 = (state_22383[(11)]);
var inst_22339 = (state_22383[(2)]);
var inst_22340 = (inst_22328 + (1));
var tmp22404 = inst_22327;
var tmp22405 = inst_22326;
var tmp22406 = inst_22325;
var inst_22325__$1 = tmp22406;
var inst_22326__$1 = tmp22405;
var inst_22327__$1 = tmp22404;
var inst_22328__$1 = inst_22340;
var state_22383__$1 = (function (){var statearr_22409 = state_22383;
(statearr_22409[(21)] = inst_22339);

(statearr_22409[(19)] = inst_22327__$1);

(statearr_22409[(9)] = inst_22326__$1);

(statearr_22409[(20)] = inst_22325__$1);

(statearr_22409[(11)] = inst_22328__$1);

return statearr_22409;
})();
var statearr_22410_22481 = state_22383__$1;
(statearr_22410_22481[(2)] = null);

(statearr_22410_22481[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (40))){
var inst_22352 = (state_22383[(22)]);
var inst_22356 = cljs.core.async.untap_STAR_.call(null,m,inst_22352);
var state_22383__$1 = state_22383;
var statearr_22411_22482 = state_22383__$1;
(statearr_22411_22482[(2)] = inst_22356);

(statearr_22411_22482[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (33))){
var inst_22343 = (state_22383[(23)]);
var inst_22345 = cljs.core.chunked_seq_QMARK_.call(null,inst_22343);
var state_22383__$1 = state_22383;
if(inst_22345){
var statearr_22412_22483 = state_22383__$1;
(statearr_22412_22483[(1)] = (36));

} else {
var statearr_22413_22484 = state_22383__$1;
(statearr_22413_22484[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (13))){
var inst_22274 = (state_22383[(24)]);
var inst_22277 = cljs.core.async.close_BANG_.call(null,inst_22274);
var state_22383__$1 = state_22383;
var statearr_22414_22485 = state_22383__$1;
(statearr_22414_22485[(2)] = inst_22277);

(statearr_22414_22485[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (22))){
var inst_22297 = (state_22383[(8)]);
var inst_22300 = cljs.core.async.close_BANG_.call(null,inst_22297);
var state_22383__$1 = state_22383;
var statearr_22415_22486 = state_22383__$1;
(statearr_22415_22486[(2)] = inst_22300);

(statearr_22415_22486[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (36))){
var inst_22343 = (state_22383[(23)]);
var inst_22347 = cljs.core.chunk_first.call(null,inst_22343);
var inst_22348 = cljs.core.chunk_rest.call(null,inst_22343);
var inst_22349 = cljs.core.count.call(null,inst_22347);
var inst_22325 = inst_22348;
var inst_22326 = inst_22347;
var inst_22327 = inst_22349;
var inst_22328 = (0);
var state_22383__$1 = (function (){var statearr_22416 = state_22383;
(statearr_22416[(19)] = inst_22327);

(statearr_22416[(9)] = inst_22326);

(statearr_22416[(20)] = inst_22325);

(statearr_22416[(11)] = inst_22328);

return statearr_22416;
})();
var statearr_22417_22487 = state_22383__$1;
(statearr_22417_22487[(2)] = null);

(statearr_22417_22487[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (41))){
var inst_22343 = (state_22383[(23)]);
var inst_22358 = (state_22383[(2)]);
var inst_22359 = cljs.core.next.call(null,inst_22343);
var inst_22325 = inst_22359;
var inst_22326 = null;
var inst_22327 = (0);
var inst_22328 = (0);
var state_22383__$1 = (function (){var statearr_22418 = state_22383;
(statearr_22418[(19)] = inst_22327);

(statearr_22418[(9)] = inst_22326);

(statearr_22418[(20)] = inst_22325);

(statearr_22418[(25)] = inst_22358);

(statearr_22418[(11)] = inst_22328);

return statearr_22418;
})();
var statearr_22419_22488 = state_22383__$1;
(statearr_22419_22488[(2)] = null);

(statearr_22419_22488[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (43))){
var state_22383__$1 = state_22383;
var statearr_22420_22489 = state_22383__$1;
(statearr_22420_22489[(2)] = null);

(statearr_22420_22489[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (29))){
var inst_22367 = (state_22383[(2)]);
var state_22383__$1 = state_22383;
var statearr_22421_22490 = state_22383__$1;
(statearr_22421_22490[(2)] = inst_22367);

(statearr_22421_22490[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (44))){
var inst_22376 = (state_22383[(2)]);
var state_22383__$1 = (function (){var statearr_22422 = state_22383;
(statearr_22422[(26)] = inst_22376);

return statearr_22422;
})();
var statearr_22423_22491 = state_22383__$1;
(statearr_22423_22491[(2)] = null);

(statearr_22423_22491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (6))){
var inst_22317 = (state_22383[(27)]);
var inst_22316 = cljs.core.deref.call(null,cs);
var inst_22317__$1 = cljs.core.keys.call(null,inst_22316);
var inst_22318 = cljs.core.count.call(null,inst_22317__$1);
var inst_22319 = cljs.core.reset_BANG_.call(null,dctr,inst_22318);
var inst_22324 = cljs.core.seq.call(null,inst_22317__$1);
var inst_22325 = inst_22324;
var inst_22326 = null;
var inst_22327 = (0);
var inst_22328 = (0);
var state_22383__$1 = (function (){var statearr_22424 = state_22383;
(statearr_22424[(28)] = inst_22319);

(statearr_22424[(19)] = inst_22327);

(statearr_22424[(9)] = inst_22326);

(statearr_22424[(27)] = inst_22317__$1);

(statearr_22424[(20)] = inst_22325);

(statearr_22424[(11)] = inst_22328);

return statearr_22424;
})();
var statearr_22425_22492 = state_22383__$1;
(statearr_22425_22492[(2)] = null);

(statearr_22425_22492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (28))){
var inst_22343 = (state_22383[(23)]);
var inst_22325 = (state_22383[(20)]);
var inst_22343__$1 = cljs.core.seq.call(null,inst_22325);
var state_22383__$1 = (function (){var statearr_22426 = state_22383;
(statearr_22426[(23)] = inst_22343__$1);

return statearr_22426;
})();
if(inst_22343__$1){
var statearr_22427_22493 = state_22383__$1;
(statearr_22427_22493[(1)] = (33));

} else {
var statearr_22428_22494 = state_22383__$1;
(statearr_22428_22494[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (25))){
var inst_22327 = (state_22383[(19)]);
var inst_22328 = (state_22383[(11)]);
var inst_22330 = (inst_22328 < inst_22327);
var inst_22331 = inst_22330;
var state_22383__$1 = state_22383;
if(cljs.core.truth_(inst_22331)){
var statearr_22429_22495 = state_22383__$1;
(statearr_22429_22495[(1)] = (27));

} else {
var statearr_22430_22496 = state_22383__$1;
(statearr_22430_22496[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (34))){
var state_22383__$1 = state_22383;
var statearr_22431_22497 = state_22383__$1;
(statearr_22431_22497[(2)] = null);

(statearr_22431_22497[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (17))){
var state_22383__$1 = state_22383;
var statearr_22432_22498 = state_22383__$1;
(statearr_22432_22498[(2)] = null);

(statearr_22432_22498[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (3))){
var inst_22381 = (state_22383[(2)]);
var state_22383__$1 = state_22383;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22383__$1,inst_22381);
} else {
if((state_val_22384 === (12))){
var inst_22312 = (state_22383[(2)]);
var state_22383__$1 = state_22383;
var statearr_22433_22499 = state_22383__$1;
(statearr_22433_22499[(2)] = inst_22312);

(statearr_22433_22499[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (2))){
var state_22383__$1 = state_22383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22383__$1,(4),ch);
} else {
if((state_val_22384 === (23))){
var state_22383__$1 = state_22383;
var statearr_22434_22500 = state_22383__$1;
(statearr_22434_22500[(2)] = null);

(statearr_22434_22500[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (35))){
var inst_22365 = (state_22383[(2)]);
var state_22383__$1 = state_22383;
var statearr_22435_22501 = state_22383__$1;
(statearr_22435_22501[(2)] = inst_22365);

(statearr_22435_22501[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (19))){
var inst_22284 = (state_22383[(7)]);
var inst_22288 = cljs.core.chunk_first.call(null,inst_22284);
var inst_22289 = cljs.core.chunk_rest.call(null,inst_22284);
var inst_22290 = cljs.core.count.call(null,inst_22288);
var inst_22262 = inst_22289;
var inst_22263 = inst_22288;
var inst_22264 = inst_22290;
var inst_22265 = (0);
var state_22383__$1 = (function (){var statearr_22436 = state_22383;
(statearr_22436[(14)] = inst_22264);

(statearr_22436[(15)] = inst_22265);

(statearr_22436[(16)] = inst_22263);

(statearr_22436[(17)] = inst_22262);

return statearr_22436;
})();
var statearr_22437_22502 = state_22383__$1;
(statearr_22437_22502[(2)] = null);

(statearr_22437_22502[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (11))){
var inst_22262 = (state_22383[(17)]);
var inst_22284 = (state_22383[(7)]);
var inst_22284__$1 = cljs.core.seq.call(null,inst_22262);
var state_22383__$1 = (function (){var statearr_22438 = state_22383;
(statearr_22438[(7)] = inst_22284__$1);

return statearr_22438;
})();
if(inst_22284__$1){
var statearr_22439_22503 = state_22383__$1;
(statearr_22439_22503[(1)] = (16));

} else {
var statearr_22440_22504 = state_22383__$1;
(statearr_22440_22504[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (9))){
var inst_22314 = (state_22383[(2)]);
var state_22383__$1 = state_22383;
var statearr_22441_22505 = state_22383__$1;
(statearr_22441_22505[(2)] = inst_22314);

(statearr_22441_22505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (5))){
var inst_22260 = cljs.core.deref.call(null,cs);
var inst_22261 = cljs.core.seq.call(null,inst_22260);
var inst_22262 = inst_22261;
var inst_22263 = null;
var inst_22264 = (0);
var inst_22265 = (0);
var state_22383__$1 = (function (){var statearr_22442 = state_22383;
(statearr_22442[(14)] = inst_22264);

(statearr_22442[(15)] = inst_22265);

(statearr_22442[(16)] = inst_22263);

(statearr_22442[(17)] = inst_22262);

return statearr_22442;
})();
var statearr_22443_22506 = state_22383__$1;
(statearr_22443_22506[(2)] = null);

(statearr_22443_22506[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (14))){
var state_22383__$1 = state_22383;
var statearr_22444_22507 = state_22383__$1;
(statearr_22444_22507[(2)] = null);

(statearr_22444_22507[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (45))){
var inst_22373 = (state_22383[(2)]);
var state_22383__$1 = state_22383;
var statearr_22445_22508 = state_22383__$1;
(statearr_22445_22508[(2)] = inst_22373);

(statearr_22445_22508[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (26))){
var inst_22317 = (state_22383[(27)]);
var inst_22369 = (state_22383[(2)]);
var inst_22370 = cljs.core.seq.call(null,inst_22317);
var state_22383__$1 = (function (){var statearr_22446 = state_22383;
(statearr_22446[(29)] = inst_22369);

return statearr_22446;
})();
if(inst_22370){
var statearr_22447_22509 = state_22383__$1;
(statearr_22447_22509[(1)] = (42));

} else {
var statearr_22448_22510 = state_22383__$1;
(statearr_22448_22510[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (16))){
var inst_22284 = (state_22383[(7)]);
var inst_22286 = cljs.core.chunked_seq_QMARK_.call(null,inst_22284);
var state_22383__$1 = state_22383;
if(inst_22286){
var statearr_22449_22511 = state_22383__$1;
(statearr_22449_22511[(1)] = (19));

} else {
var statearr_22450_22512 = state_22383__$1;
(statearr_22450_22512[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (38))){
var inst_22362 = (state_22383[(2)]);
var state_22383__$1 = state_22383;
var statearr_22451_22513 = state_22383__$1;
(statearr_22451_22513[(2)] = inst_22362);

(statearr_22451_22513[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (30))){
var state_22383__$1 = state_22383;
var statearr_22452_22514 = state_22383__$1;
(statearr_22452_22514[(2)] = null);

(statearr_22452_22514[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (10))){
var inst_22265 = (state_22383[(15)]);
var inst_22263 = (state_22383[(16)]);
var inst_22273 = cljs.core._nth.call(null,inst_22263,inst_22265);
var inst_22274 = cljs.core.nth.call(null,inst_22273,(0),null);
var inst_22275 = cljs.core.nth.call(null,inst_22273,(1),null);
var state_22383__$1 = (function (){var statearr_22453 = state_22383;
(statearr_22453[(24)] = inst_22274);

return statearr_22453;
})();
if(cljs.core.truth_(inst_22275)){
var statearr_22454_22515 = state_22383__$1;
(statearr_22454_22515[(1)] = (13));

} else {
var statearr_22455_22516 = state_22383__$1;
(statearr_22455_22516[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (18))){
var inst_22310 = (state_22383[(2)]);
var state_22383__$1 = state_22383;
var statearr_22456_22517 = state_22383__$1;
(statearr_22456_22517[(2)] = inst_22310);

(statearr_22456_22517[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (42))){
var state_22383__$1 = state_22383;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22383__$1,(45),dchan);
} else {
if((state_val_22384 === (37))){
var inst_22343 = (state_22383[(23)]);
var inst_22253 = (state_22383[(12)]);
var inst_22352 = (state_22383[(22)]);
var inst_22352__$1 = cljs.core.first.call(null,inst_22343);
var inst_22353 = cljs.core.async.put_BANG_.call(null,inst_22352__$1,inst_22253,done);
var state_22383__$1 = (function (){var statearr_22457 = state_22383;
(statearr_22457[(22)] = inst_22352__$1);

return statearr_22457;
})();
if(cljs.core.truth_(inst_22353)){
var statearr_22458_22518 = state_22383__$1;
(statearr_22458_22518[(1)] = (39));

} else {
var statearr_22459_22519 = state_22383__$1;
(statearr_22459_22519[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22384 === (8))){
var inst_22264 = (state_22383[(14)]);
var inst_22265 = (state_22383[(15)]);
var inst_22267 = (inst_22265 < inst_22264);
var inst_22268 = inst_22267;
var state_22383__$1 = state_22383;
if(cljs.core.truth_(inst_22268)){
var statearr_22460_22520 = state_22383__$1;
(statearr_22460_22520[(1)] = (10));

} else {
var statearr_22461_22521 = state_22383__$1;
(statearr_22461_22521[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__21552__auto__ = null;
var cljs$core$async$mult_$_state_machine__21552__auto____0 = (function (){
var statearr_22462 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22462[(0)] = cljs$core$async$mult_$_state_machine__21552__auto__);

(statearr_22462[(1)] = (1));

return statearr_22462;
});
var cljs$core$async$mult_$_state_machine__21552__auto____1 = (function (state_22383){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_22383);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e22463){var ex__21555__auto__ = e22463;
var statearr_22464_22522 = state_22383;
(statearr_22464_22522[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_22383[(4)]))){
var statearr_22465_22523 = state_22383;
(statearr_22465_22523[(1)] = cljs.core.first.call(null,(state_22383[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22524 = state_22383;
state_22383 = G__22524;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21552__auto__ = function(state_22383){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21552__auto____1.call(this,state_22383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21552__auto____0;
cljs$core$async$mult_$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21552__auto____1;
return cljs$core$async$mult_$_state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_22466 = f__21626__auto__.call(null);
(statearr_22466[(6)] = c__21625__auto___22467);

return statearr_22466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
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
var G__22526 = arguments.length;
switch (G__22526) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_22528 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_22528.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_22529 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_22529.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_22530 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m);
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_22530.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_22531 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,state_map);
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_22531.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_22532 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,m,mode);
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_22532.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22542 = arguments.length;
var i__5770__auto___22543 = (0);
while(true){
if((i__5770__auto___22543 < len__5769__auto___22542)){
args__5775__auto__.push((arguments[i__5770__auto___22543]));

var G__22544 = (i__5770__auto___22543 + (1));
i__5770__auto___22543 = G__22544;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22537){
var map__22538 = p__22537;
var map__22538__$1 = cljs.core.__destructure_map.call(null,map__22538);
var opts = map__22538__$1;
var statearr_22539_22545 = state;
(statearr_22539_22545[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_22540_22546 = state;
(statearr_22540_22546[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_22541_22547 = state;
(statearr_22541_22547[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22533){
var G__22534 = cljs.core.first.call(null,seq22533);
var seq22533__$1 = cljs.core.next.call(null,seq22533);
var G__22535 = cljs.core.first.call(null,seq22533__$1);
var seq22533__$2 = cljs.core.next.call(null,seq22533__$1);
var G__22536 = cljs.core.first.call(null,seq22533__$2);
var seq22533__$3 = cljs.core.next.call(null,seq22533__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22534,G__22535,G__22536,seq22533__$3);
}));

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22548 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22549){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22549 = meta22549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22550,meta22549__$1){
var self__ = this;
var _22550__$1 = this;
return (new cljs.core.async.t_cljs$core$async22548(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22549__$1));
}));

(cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22550){
var self__ = this;
var _22550__$1 = this;
return self__.meta22549;
}));

(cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22548.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22548.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22549","meta22549",-166715079,null)], null);
}));

(cljs.core.async.t_cljs$core$async22548.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22548.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22548");

(cljs.core.async.t_cljs$core$async22548.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async22548");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22548.
 */
cljs.core.async.__GT_t_cljs$core$async22548 = (function cljs$core$async$mix_$___GT_t_cljs$core$async22548(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22549){
return (new cljs.core.async.t_cljs$core$async22548(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22549));
});

}

return (new cljs.core.async.t_cljs$core$async22548(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21625__auto___22663 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_22618){
var state_val_22619 = (state_22618[(1)]);
if((state_val_22619 === (7))){
var inst_22578 = (state_22618[(2)]);
var state_22618__$1 = state_22618;
if(cljs.core.truth_(inst_22578)){
var statearr_22620_22664 = state_22618__$1;
(statearr_22620_22664[(1)] = (8));

} else {
var statearr_22621_22665 = state_22618__$1;
(statearr_22621_22665[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (20))){
var inst_22571 = (state_22618[(7)]);
var state_22618__$1 = state_22618;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22618__$1,(23),out,inst_22571);
} else {
if((state_val_22619 === (1))){
var inst_22554 = calc_state.call(null);
var inst_22555 = cljs.core.__destructure_map.call(null,inst_22554);
var inst_22556 = cljs.core.get.call(null,inst_22555,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22557 = cljs.core.get.call(null,inst_22555,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22558 = cljs.core.get.call(null,inst_22555,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22559 = inst_22554;
var state_22618__$1 = (function (){var statearr_22622 = state_22618;
(statearr_22622[(8)] = inst_22559);

(statearr_22622[(9)] = inst_22556);

(statearr_22622[(10)] = inst_22558);

(statearr_22622[(11)] = inst_22557);

return statearr_22622;
})();
var statearr_22623_22666 = state_22618__$1;
(statearr_22623_22666[(2)] = null);

(statearr_22623_22666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (24))){
var inst_22562 = (state_22618[(12)]);
var inst_22559 = inst_22562;
var state_22618__$1 = (function (){var statearr_22624 = state_22618;
(statearr_22624[(8)] = inst_22559);

return statearr_22624;
})();
var statearr_22625_22667 = state_22618__$1;
(statearr_22625_22667[(2)] = null);

(statearr_22625_22667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (4))){
var inst_22571 = (state_22618[(7)]);
var inst_22573 = (state_22618[(13)]);
var inst_22570 = (state_22618[(2)]);
var inst_22571__$1 = cljs.core.nth.call(null,inst_22570,(0),null);
var inst_22572 = cljs.core.nth.call(null,inst_22570,(1),null);
var inst_22573__$1 = (inst_22571__$1 == null);
var state_22618__$1 = (function (){var statearr_22626 = state_22618;
(statearr_22626[(7)] = inst_22571__$1);

(statearr_22626[(14)] = inst_22572);

(statearr_22626[(13)] = inst_22573__$1);

return statearr_22626;
})();
if(cljs.core.truth_(inst_22573__$1)){
var statearr_22627_22668 = state_22618__$1;
(statearr_22627_22668[(1)] = (5));

} else {
var statearr_22628_22669 = state_22618__$1;
(statearr_22628_22669[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (15))){
var inst_22563 = (state_22618[(15)]);
var inst_22592 = (state_22618[(16)]);
var inst_22592__$1 = cljs.core.empty_QMARK_.call(null,inst_22563);
var state_22618__$1 = (function (){var statearr_22629 = state_22618;
(statearr_22629[(16)] = inst_22592__$1);

return statearr_22629;
})();
if(inst_22592__$1){
var statearr_22630_22670 = state_22618__$1;
(statearr_22630_22670[(1)] = (17));

} else {
var statearr_22631_22671 = state_22618__$1;
(statearr_22631_22671[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (21))){
var inst_22562 = (state_22618[(12)]);
var inst_22559 = inst_22562;
var state_22618__$1 = (function (){var statearr_22632 = state_22618;
(statearr_22632[(8)] = inst_22559);

return statearr_22632;
})();
var statearr_22633_22672 = state_22618__$1;
(statearr_22633_22672[(2)] = null);

(statearr_22633_22672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (13))){
var inst_22585 = (state_22618[(2)]);
var inst_22586 = calc_state.call(null);
var inst_22559 = inst_22586;
var state_22618__$1 = (function (){var statearr_22634 = state_22618;
(statearr_22634[(8)] = inst_22559);

(statearr_22634[(17)] = inst_22585);

return statearr_22634;
})();
var statearr_22635_22673 = state_22618__$1;
(statearr_22635_22673[(2)] = null);

(statearr_22635_22673[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (22))){
var inst_22612 = (state_22618[(2)]);
var state_22618__$1 = state_22618;
var statearr_22636_22674 = state_22618__$1;
(statearr_22636_22674[(2)] = inst_22612);

(statearr_22636_22674[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (6))){
var inst_22572 = (state_22618[(14)]);
var inst_22576 = cljs.core._EQ_.call(null,inst_22572,change);
var state_22618__$1 = state_22618;
var statearr_22637_22675 = state_22618__$1;
(statearr_22637_22675[(2)] = inst_22576);

(statearr_22637_22675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (25))){
var state_22618__$1 = state_22618;
var statearr_22638_22676 = state_22618__$1;
(statearr_22638_22676[(2)] = null);

(statearr_22638_22676[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (17))){
var inst_22564 = (state_22618[(18)]);
var inst_22572 = (state_22618[(14)]);
var inst_22594 = inst_22564.call(null,inst_22572);
var inst_22595 = cljs.core.not.call(null,inst_22594);
var state_22618__$1 = state_22618;
var statearr_22639_22677 = state_22618__$1;
(statearr_22639_22677[(2)] = inst_22595);

(statearr_22639_22677[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (3))){
var inst_22616 = (state_22618[(2)]);
var state_22618__$1 = state_22618;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22618__$1,inst_22616);
} else {
if((state_val_22619 === (12))){
var state_22618__$1 = state_22618;
var statearr_22640_22678 = state_22618__$1;
(statearr_22640_22678[(2)] = null);

(statearr_22640_22678[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (2))){
var inst_22559 = (state_22618[(8)]);
var inst_22562 = (state_22618[(12)]);
var inst_22562__$1 = cljs.core.__destructure_map.call(null,inst_22559);
var inst_22563 = cljs.core.get.call(null,inst_22562__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22564 = cljs.core.get.call(null,inst_22562__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22565 = cljs.core.get.call(null,inst_22562__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22618__$1 = (function (){var statearr_22641 = state_22618;
(statearr_22641[(15)] = inst_22563);

(statearr_22641[(18)] = inst_22564);

(statearr_22641[(12)] = inst_22562__$1);

return statearr_22641;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22618__$1,(4),inst_22565);
} else {
if((state_val_22619 === (23))){
var inst_22603 = (state_22618[(2)]);
var state_22618__$1 = state_22618;
if(cljs.core.truth_(inst_22603)){
var statearr_22642_22679 = state_22618__$1;
(statearr_22642_22679[(1)] = (24));

} else {
var statearr_22643_22680 = state_22618__$1;
(statearr_22643_22680[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (19))){
var inst_22598 = (state_22618[(2)]);
var state_22618__$1 = state_22618;
var statearr_22644_22681 = state_22618__$1;
(statearr_22644_22681[(2)] = inst_22598);

(statearr_22644_22681[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (11))){
var inst_22572 = (state_22618[(14)]);
var inst_22582 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22572);
var state_22618__$1 = state_22618;
var statearr_22645_22682 = state_22618__$1;
(statearr_22645_22682[(2)] = inst_22582);

(statearr_22645_22682[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (9))){
var inst_22563 = (state_22618[(15)]);
var inst_22572 = (state_22618[(14)]);
var inst_22589 = (state_22618[(19)]);
var inst_22589__$1 = inst_22563.call(null,inst_22572);
var state_22618__$1 = (function (){var statearr_22646 = state_22618;
(statearr_22646[(19)] = inst_22589__$1);

return statearr_22646;
})();
if(cljs.core.truth_(inst_22589__$1)){
var statearr_22647_22683 = state_22618__$1;
(statearr_22647_22683[(1)] = (14));

} else {
var statearr_22648_22684 = state_22618__$1;
(statearr_22648_22684[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (5))){
var inst_22573 = (state_22618[(13)]);
var state_22618__$1 = state_22618;
var statearr_22649_22685 = state_22618__$1;
(statearr_22649_22685[(2)] = inst_22573);

(statearr_22649_22685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (14))){
var inst_22589 = (state_22618[(19)]);
var state_22618__$1 = state_22618;
var statearr_22650_22686 = state_22618__$1;
(statearr_22650_22686[(2)] = inst_22589);

(statearr_22650_22686[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (26))){
var inst_22608 = (state_22618[(2)]);
var state_22618__$1 = state_22618;
var statearr_22651_22687 = state_22618__$1;
(statearr_22651_22687[(2)] = inst_22608);

(statearr_22651_22687[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (16))){
var inst_22600 = (state_22618[(2)]);
var state_22618__$1 = state_22618;
if(cljs.core.truth_(inst_22600)){
var statearr_22652_22688 = state_22618__$1;
(statearr_22652_22688[(1)] = (20));

} else {
var statearr_22653_22689 = state_22618__$1;
(statearr_22653_22689[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (10))){
var inst_22614 = (state_22618[(2)]);
var state_22618__$1 = state_22618;
var statearr_22654_22690 = state_22618__$1;
(statearr_22654_22690[(2)] = inst_22614);

(statearr_22654_22690[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (18))){
var inst_22592 = (state_22618[(16)]);
var state_22618__$1 = state_22618;
var statearr_22655_22691 = state_22618__$1;
(statearr_22655_22691[(2)] = inst_22592);

(statearr_22655_22691[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22619 === (8))){
var inst_22571 = (state_22618[(7)]);
var inst_22580 = (inst_22571 == null);
var state_22618__$1 = state_22618;
if(cljs.core.truth_(inst_22580)){
var statearr_22656_22692 = state_22618__$1;
(statearr_22656_22692[(1)] = (11));

} else {
var statearr_22657_22693 = state_22618__$1;
(statearr_22657_22693[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__21552__auto__ = null;
var cljs$core$async$mix_$_state_machine__21552__auto____0 = (function (){
var statearr_22658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22658[(0)] = cljs$core$async$mix_$_state_machine__21552__auto__);

(statearr_22658[(1)] = (1));

return statearr_22658;
});
var cljs$core$async$mix_$_state_machine__21552__auto____1 = (function (state_22618){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_22618);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e22659){var ex__21555__auto__ = e22659;
var statearr_22660_22694 = state_22618;
(statearr_22660_22694[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_22618[(4)]))){
var statearr_22661_22695 = state_22618;
(statearr_22661_22695[(1)] = cljs.core.first.call(null,(state_22618[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22696 = state_22618;
state_22618 = G__22696;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21552__auto__ = function(state_22618){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21552__auto____1.call(this,state_22618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21552__auto____0;
cljs$core$async$mix_$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21552__auto____1;
return cljs$core$async$mix_$_state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_22662 = f__21626__auto__.call(null);
(statearr_22662[(6)] = c__21625__auto___22663);

return statearr_22662;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_22699 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_22699.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_22700 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v,ch);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_22700.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_22701 = (function() {
var G__22702 = null;
var G__22702__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__22702__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return m__5394__auto__.call(null,p,v);
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return m__5392__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__22702 = function(p,v){
switch(arguments.length){
case 1:
return G__22702__1.call(this,p);
case 2:
return G__22702__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22702.cljs$core$IFn$_invoke$arity$1 = G__22702__1;
G__22702.cljs$core$IFn$_invoke$arity$2 = G__22702__2;
return G__22702;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22698 = arguments.length;
switch (G__22698) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22701.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22701.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__22706 = arguments.length;
switch (G__22706) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__22704_SHARP_){
if(cljs.core.truth_(p1__22704_SHARP_.call(null,topic))){
return p1__22704_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22704_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22707 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22707 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22708){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22708 = meta22708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22709,meta22708__$1){
var self__ = this;
var _22709__$1 = this;
return (new cljs.core.async.t_cljs$core$async22707(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22708__$1));
}));

(cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22709){
var self__ = this;
var _22709__$1 = this;
return self__.meta22708;
}));

(cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async22707.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async22707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22708","meta22708",-1847846778,null)], null);
}));

(cljs.core.async.t_cljs$core$async22707.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22707");

(cljs.core.async.t_cljs$core$async22707.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async22707");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22707.
 */
cljs.core.async.__GT_t_cljs$core$async22707 = (function cljs$core$async$__GT_t_cljs$core$async22707(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22708){
return (new cljs.core.async.t_cljs$core$async22707(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22708));
});

}

return (new cljs.core.async.t_cljs$core$async22707(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21625__auto___22828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_22781){
var state_val_22782 = (state_22781[(1)]);
if((state_val_22782 === (7))){
var inst_22777 = (state_22781[(2)]);
var state_22781__$1 = state_22781;
var statearr_22783_22829 = state_22781__$1;
(statearr_22783_22829[(2)] = inst_22777);

(statearr_22783_22829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (20))){
var state_22781__$1 = state_22781;
var statearr_22784_22830 = state_22781__$1;
(statearr_22784_22830[(2)] = null);

(statearr_22784_22830[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (1))){
var state_22781__$1 = state_22781;
var statearr_22785_22831 = state_22781__$1;
(statearr_22785_22831[(2)] = null);

(statearr_22785_22831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (24))){
var inst_22760 = (state_22781[(7)]);
var inst_22769 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22760);
var state_22781__$1 = state_22781;
var statearr_22786_22832 = state_22781__$1;
(statearr_22786_22832[(2)] = inst_22769);

(statearr_22786_22832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (4))){
var inst_22712 = (state_22781[(8)]);
var inst_22712__$1 = (state_22781[(2)]);
var inst_22713 = (inst_22712__$1 == null);
var state_22781__$1 = (function (){var statearr_22787 = state_22781;
(statearr_22787[(8)] = inst_22712__$1);

return statearr_22787;
})();
if(cljs.core.truth_(inst_22713)){
var statearr_22788_22833 = state_22781__$1;
(statearr_22788_22833[(1)] = (5));

} else {
var statearr_22789_22834 = state_22781__$1;
(statearr_22789_22834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (15))){
var inst_22754 = (state_22781[(2)]);
var state_22781__$1 = state_22781;
var statearr_22790_22835 = state_22781__$1;
(statearr_22790_22835[(2)] = inst_22754);

(statearr_22790_22835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (21))){
var inst_22774 = (state_22781[(2)]);
var state_22781__$1 = (function (){var statearr_22791 = state_22781;
(statearr_22791[(9)] = inst_22774);

return statearr_22791;
})();
var statearr_22792_22836 = state_22781__$1;
(statearr_22792_22836[(2)] = null);

(statearr_22792_22836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (13))){
var inst_22736 = (state_22781[(10)]);
var inst_22738 = cljs.core.chunked_seq_QMARK_.call(null,inst_22736);
var state_22781__$1 = state_22781;
if(inst_22738){
var statearr_22793_22837 = state_22781__$1;
(statearr_22793_22837[(1)] = (16));

} else {
var statearr_22794_22838 = state_22781__$1;
(statearr_22794_22838[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (22))){
var inst_22766 = (state_22781[(2)]);
var state_22781__$1 = state_22781;
if(cljs.core.truth_(inst_22766)){
var statearr_22795_22839 = state_22781__$1;
(statearr_22795_22839[(1)] = (23));

} else {
var statearr_22796_22840 = state_22781__$1;
(statearr_22796_22840[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (6))){
var inst_22760 = (state_22781[(7)]);
var inst_22712 = (state_22781[(8)]);
var inst_22762 = (state_22781[(11)]);
var inst_22760__$1 = topic_fn.call(null,inst_22712);
var inst_22761 = cljs.core.deref.call(null,mults);
var inst_22762__$1 = cljs.core.get.call(null,inst_22761,inst_22760__$1);
var state_22781__$1 = (function (){var statearr_22797 = state_22781;
(statearr_22797[(7)] = inst_22760__$1);

(statearr_22797[(11)] = inst_22762__$1);

return statearr_22797;
})();
if(cljs.core.truth_(inst_22762__$1)){
var statearr_22798_22841 = state_22781__$1;
(statearr_22798_22841[(1)] = (19));

} else {
var statearr_22799_22842 = state_22781__$1;
(statearr_22799_22842[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (25))){
var inst_22771 = (state_22781[(2)]);
var state_22781__$1 = state_22781;
var statearr_22800_22843 = state_22781__$1;
(statearr_22800_22843[(2)] = inst_22771);

(statearr_22800_22843[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (17))){
var inst_22736 = (state_22781[(10)]);
var inst_22745 = cljs.core.first.call(null,inst_22736);
var inst_22746 = cljs.core.async.muxch_STAR_.call(null,inst_22745);
var inst_22747 = cljs.core.async.close_BANG_.call(null,inst_22746);
var inst_22748 = cljs.core.next.call(null,inst_22736);
var inst_22722 = inst_22748;
var inst_22723 = null;
var inst_22724 = (0);
var inst_22725 = (0);
var state_22781__$1 = (function (){var statearr_22801 = state_22781;
(statearr_22801[(12)] = inst_22747);

(statearr_22801[(13)] = inst_22722);

(statearr_22801[(14)] = inst_22724);

(statearr_22801[(15)] = inst_22725);

(statearr_22801[(16)] = inst_22723);

return statearr_22801;
})();
var statearr_22802_22844 = state_22781__$1;
(statearr_22802_22844[(2)] = null);

(statearr_22802_22844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (3))){
var inst_22779 = (state_22781[(2)]);
var state_22781__$1 = state_22781;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22781__$1,inst_22779);
} else {
if((state_val_22782 === (12))){
var inst_22756 = (state_22781[(2)]);
var state_22781__$1 = state_22781;
var statearr_22803_22845 = state_22781__$1;
(statearr_22803_22845[(2)] = inst_22756);

(statearr_22803_22845[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (2))){
var state_22781__$1 = state_22781;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22781__$1,(4),ch);
} else {
if((state_val_22782 === (23))){
var state_22781__$1 = state_22781;
var statearr_22804_22846 = state_22781__$1;
(statearr_22804_22846[(2)] = null);

(statearr_22804_22846[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (19))){
var inst_22712 = (state_22781[(8)]);
var inst_22762 = (state_22781[(11)]);
var inst_22764 = cljs.core.async.muxch_STAR_.call(null,inst_22762);
var state_22781__$1 = state_22781;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22781__$1,(22),inst_22764,inst_22712);
} else {
if((state_val_22782 === (11))){
var inst_22722 = (state_22781[(13)]);
var inst_22736 = (state_22781[(10)]);
var inst_22736__$1 = cljs.core.seq.call(null,inst_22722);
var state_22781__$1 = (function (){var statearr_22805 = state_22781;
(statearr_22805[(10)] = inst_22736__$1);

return statearr_22805;
})();
if(inst_22736__$1){
var statearr_22806_22847 = state_22781__$1;
(statearr_22806_22847[(1)] = (13));

} else {
var statearr_22807_22848 = state_22781__$1;
(statearr_22807_22848[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (9))){
var inst_22758 = (state_22781[(2)]);
var state_22781__$1 = state_22781;
var statearr_22808_22849 = state_22781__$1;
(statearr_22808_22849[(2)] = inst_22758);

(statearr_22808_22849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (5))){
var inst_22719 = cljs.core.deref.call(null,mults);
var inst_22720 = cljs.core.vals.call(null,inst_22719);
var inst_22721 = cljs.core.seq.call(null,inst_22720);
var inst_22722 = inst_22721;
var inst_22723 = null;
var inst_22724 = (0);
var inst_22725 = (0);
var state_22781__$1 = (function (){var statearr_22809 = state_22781;
(statearr_22809[(13)] = inst_22722);

(statearr_22809[(14)] = inst_22724);

(statearr_22809[(15)] = inst_22725);

(statearr_22809[(16)] = inst_22723);

return statearr_22809;
})();
var statearr_22810_22850 = state_22781__$1;
(statearr_22810_22850[(2)] = null);

(statearr_22810_22850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (14))){
var state_22781__$1 = state_22781;
var statearr_22814_22851 = state_22781__$1;
(statearr_22814_22851[(2)] = null);

(statearr_22814_22851[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (16))){
var inst_22736 = (state_22781[(10)]);
var inst_22740 = cljs.core.chunk_first.call(null,inst_22736);
var inst_22741 = cljs.core.chunk_rest.call(null,inst_22736);
var inst_22742 = cljs.core.count.call(null,inst_22740);
var inst_22722 = inst_22741;
var inst_22723 = inst_22740;
var inst_22724 = inst_22742;
var inst_22725 = (0);
var state_22781__$1 = (function (){var statearr_22815 = state_22781;
(statearr_22815[(13)] = inst_22722);

(statearr_22815[(14)] = inst_22724);

(statearr_22815[(15)] = inst_22725);

(statearr_22815[(16)] = inst_22723);

return statearr_22815;
})();
var statearr_22816_22852 = state_22781__$1;
(statearr_22816_22852[(2)] = null);

(statearr_22816_22852[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (10))){
var inst_22722 = (state_22781[(13)]);
var inst_22724 = (state_22781[(14)]);
var inst_22725 = (state_22781[(15)]);
var inst_22723 = (state_22781[(16)]);
var inst_22730 = cljs.core._nth.call(null,inst_22723,inst_22725);
var inst_22731 = cljs.core.async.muxch_STAR_.call(null,inst_22730);
var inst_22732 = cljs.core.async.close_BANG_.call(null,inst_22731);
var inst_22733 = (inst_22725 + (1));
var tmp22811 = inst_22722;
var tmp22812 = inst_22724;
var tmp22813 = inst_22723;
var inst_22722__$1 = tmp22811;
var inst_22723__$1 = tmp22813;
var inst_22724__$1 = tmp22812;
var inst_22725__$1 = inst_22733;
var state_22781__$1 = (function (){var statearr_22817 = state_22781;
(statearr_22817[(13)] = inst_22722__$1);

(statearr_22817[(14)] = inst_22724__$1);

(statearr_22817[(15)] = inst_22725__$1);

(statearr_22817[(16)] = inst_22723__$1);

(statearr_22817[(17)] = inst_22732);

return statearr_22817;
})();
var statearr_22818_22853 = state_22781__$1;
(statearr_22818_22853[(2)] = null);

(statearr_22818_22853[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (18))){
var inst_22751 = (state_22781[(2)]);
var state_22781__$1 = state_22781;
var statearr_22819_22854 = state_22781__$1;
(statearr_22819_22854[(2)] = inst_22751);

(statearr_22819_22854[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22782 === (8))){
var inst_22724 = (state_22781[(14)]);
var inst_22725 = (state_22781[(15)]);
var inst_22727 = (inst_22725 < inst_22724);
var inst_22728 = inst_22727;
var state_22781__$1 = state_22781;
if(cljs.core.truth_(inst_22728)){
var statearr_22820_22855 = state_22781__$1;
(statearr_22820_22855[(1)] = (10));

} else {
var statearr_22821_22856 = state_22781__$1;
(statearr_22821_22856[(1)] = (11));

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
var cljs$core$async$state_machine__21552__auto__ = null;
var cljs$core$async$state_machine__21552__auto____0 = (function (){
var statearr_22822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22822[(0)] = cljs$core$async$state_machine__21552__auto__);

(statearr_22822[(1)] = (1));

return statearr_22822;
});
var cljs$core$async$state_machine__21552__auto____1 = (function (state_22781){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_22781);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e22823){var ex__21555__auto__ = e22823;
var statearr_22824_22857 = state_22781;
(statearr_22824_22857[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_22781[(4)]))){
var statearr_22825_22858 = state_22781;
(statearr_22825_22858[(1)] = cljs.core.first.call(null,(state_22781[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22859 = state_22781;
state_22781 = G__22859;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$state_machine__21552__auto__ = function(state_22781){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21552__auto____1.call(this,state_22781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21552__auto____0;
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21552__auto____1;
return cljs$core$async$state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_22826 = f__21626__auto__.call(null);
(statearr_22826[(6)] = c__21625__auto___22828);

return statearr_22826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
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
var G__22861 = arguments.length;
switch (G__22861) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__22864 = arguments.length;
switch (G__22864) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
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
var G__22867 = arguments.length;
switch (G__22867) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__21625__auto___22945 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_22910){
var state_val_22911 = (state_22910[(1)]);
if((state_val_22911 === (7))){
var state_22910__$1 = state_22910;
var statearr_22912_22946 = state_22910__$1;
(statearr_22912_22946[(2)] = null);

(statearr_22912_22946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (1))){
var state_22910__$1 = state_22910;
var statearr_22913_22947 = state_22910__$1;
(statearr_22913_22947[(2)] = null);

(statearr_22913_22947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (4))){
var inst_22870 = (state_22910[(7)]);
var inst_22871 = (state_22910[(8)]);
var inst_22873 = (inst_22871 < inst_22870);
var state_22910__$1 = state_22910;
if(cljs.core.truth_(inst_22873)){
var statearr_22914_22948 = state_22910__$1;
(statearr_22914_22948[(1)] = (6));

} else {
var statearr_22915_22949 = state_22910__$1;
(statearr_22915_22949[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (15))){
var inst_22896 = (state_22910[(9)]);
var inst_22901 = cljs.core.apply.call(null,f,inst_22896);
var state_22910__$1 = state_22910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22910__$1,(17),out,inst_22901);
} else {
if((state_val_22911 === (13))){
var inst_22896 = (state_22910[(9)]);
var inst_22896__$1 = (state_22910[(2)]);
var inst_22897 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22896__$1);
var state_22910__$1 = (function (){var statearr_22916 = state_22910;
(statearr_22916[(9)] = inst_22896__$1);

return statearr_22916;
})();
if(cljs.core.truth_(inst_22897)){
var statearr_22917_22950 = state_22910__$1;
(statearr_22917_22950[(1)] = (14));

} else {
var statearr_22918_22951 = state_22910__$1;
(statearr_22918_22951[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (6))){
var state_22910__$1 = state_22910;
var statearr_22919_22952 = state_22910__$1;
(statearr_22919_22952[(2)] = null);

(statearr_22919_22952[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (17))){
var inst_22903 = (state_22910[(2)]);
var state_22910__$1 = (function (){var statearr_22921 = state_22910;
(statearr_22921[(10)] = inst_22903);

return statearr_22921;
})();
var statearr_22922_22953 = state_22910__$1;
(statearr_22922_22953[(2)] = null);

(statearr_22922_22953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (3))){
var inst_22908 = (state_22910[(2)]);
var state_22910__$1 = state_22910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22910__$1,inst_22908);
} else {
if((state_val_22911 === (12))){
var _ = (function (){var statearr_22923 = state_22910;
(statearr_22923[(4)] = cljs.core.rest.call(null,(state_22910[(4)])));

return statearr_22923;
})();
var state_22910__$1 = state_22910;
var ex22920 = (state_22910__$1[(2)]);
var statearr_22924_22954 = state_22910__$1;
(statearr_22924_22954[(5)] = ex22920);


if((ex22920 instanceof Object)){
var statearr_22925_22955 = state_22910__$1;
(statearr_22925_22955[(1)] = (11));

(statearr_22925_22955[(5)] = null);

} else {
throw ex22920;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (2))){
var inst_22869 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22870 = cnt;
var inst_22871 = (0);
var state_22910__$1 = (function (){var statearr_22926 = state_22910;
(statearr_22926[(7)] = inst_22870);

(statearr_22926[(11)] = inst_22869);

(statearr_22926[(8)] = inst_22871);

return statearr_22926;
})();
var statearr_22927_22956 = state_22910__$1;
(statearr_22927_22956[(2)] = null);

(statearr_22927_22956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (11))){
var inst_22875 = (state_22910[(2)]);
var inst_22876 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22910__$1 = (function (){var statearr_22928 = state_22910;
(statearr_22928[(12)] = inst_22875);

return statearr_22928;
})();
var statearr_22929_22957 = state_22910__$1;
(statearr_22929_22957[(2)] = inst_22876);

(statearr_22929_22957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (9))){
var inst_22871 = (state_22910[(8)]);
var _ = (function (){var statearr_22930 = state_22910;
(statearr_22930[(4)] = cljs.core.cons.call(null,(12),(state_22910[(4)])));

return statearr_22930;
})();
var inst_22882 = chs__$1.call(null,inst_22871);
var inst_22883 = done.call(null,inst_22871);
var inst_22884 = cljs.core.async.take_BANG_.call(null,inst_22882,inst_22883);
var ___$1 = (function (){var statearr_22931 = state_22910;
(statearr_22931[(4)] = cljs.core.rest.call(null,(state_22910[(4)])));

return statearr_22931;
})();
var state_22910__$1 = state_22910;
var statearr_22932_22958 = state_22910__$1;
(statearr_22932_22958[(2)] = inst_22884);

(statearr_22932_22958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (5))){
var inst_22894 = (state_22910[(2)]);
var state_22910__$1 = (function (){var statearr_22933 = state_22910;
(statearr_22933[(13)] = inst_22894);

return statearr_22933;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22910__$1,(13),dchan);
} else {
if((state_val_22911 === (14))){
var inst_22899 = cljs.core.async.close_BANG_.call(null,out);
var state_22910__$1 = state_22910;
var statearr_22934_22959 = state_22910__$1;
(statearr_22934_22959[(2)] = inst_22899);

(statearr_22934_22959[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (16))){
var inst_22906 = (state_22910[(2)]);
var state_22910__$1 = state_22910;
var statearr_22935_22960 = state_22910__$1;
(statearr_22935_22960[(2)] = inst_22906);

(statearr_22935_22960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (10))){
var inst_22871 = (state_22910[(8)]);
var inst_22887 = (state_22910[(2)]);
var inst_22888 = (inst_22871 + (1));
var inst_22871__$1 = inst_22888;
var state_22910__$1 = (function (){var statearr_22936 = state_22910;
(statearr_22936[(8)] = inst_22871__$1);

(statearr_22936[(14)] = inst_22887);

return statearr_22936;
})();
var statearr_22937_22961 = state_22910__$1;
(statearr_22937_22961[(2)] = null);

(statearr_22937_22961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22911 === (8))){
var inst_22892 = (state_22910[(2)]);
var state_22910__$1 = state_22910;
var statearr_22938_22962 = state_22910__$1;
(statearr_22938_22962[(2)] = inst_22892);

(statearr_22938_22962[(1)] = (5));


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
var cljs$core$async$state_machine__21552__auto__ = null;
var cljs$core$async$state_machine__21552__auto____0 = (function (){
var statearr_22939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22939[(0)] = cljs$core$async$state_machine__21552__auto__);

(statearr_22939[(1)] = (1));

return statearr_22939;
});
var cljs$core$async$state_machine__21552__auto____1 = (function (state_22910){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_22910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e22940){var ex__21555__auto__ = e22940;
var statearr_22941_22963 = state_22910;
(statearr_22941_22963[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_22910[(4)]))){
var statearr_22942_22964 = state_22910;
(statearr_22942_22964[(1)] = cljs.core.first.call(null,(state_22910[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22965 = state_22910;
state_22910 = G__22965;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$state_machine__21552__auto__ = function(state_22910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21552__auto____1.call(this,state_22910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21552__auto____0;
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21552__auto____1;
return cljs$core$async$state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_22943 = f__21626__auto__.call(null);
(statearr_22943[(6)] = c__21625__auto___22945);

return statearr_22943;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));


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
var G__22968 = arguments.length;
switch (G__22968) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21625__auto___23023 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_23000){
var state_val_23001 = (state_23000[(1)]);
if((state_val_23001 === (7))){
var inst_22980 = (state_23000[(7)]);
var inst_22979 = (state_23000[(8)]);
var inst_22979__$1 = (state_23000[(2)]);
var inst_22980__$1 = cljs.core.nth.call(null,inst_22979__$1,(0),null);
var inst_22981 = cljs.core.nth.call(null,inst_22979__$1,(1),null);
var inst_22982 = (inst_22980__$1 == null);
var state_23000__$1 = (function (){var statearr_23002 = state_23000;
(statearr_23002[(9)] = inst_22981);

(statearr_23002[(7)] = inst_22980__$1);

(statearr_23002[(8)] = inst_22979__$1);

return statearr_23002;
})();
if(cljs.core.truth_(inst_22982)){
var statearr_23003_23024 = state_23000__$1;
(statearr_23003_23024[(1)] = (8));

} else {
var statearr_23004_23025 = state_23000__$1;
(statearr_23004_23025[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (1))){
var inst_22969 = cljs.core.vec.call(null,chs);
var inst_22970 = inst_22969;
var state_23000__$1 = (function (){var statearr_23005 = state_23000;
(statearr_23005[(10)] = inst_22970);

return statearr_23005;
})();
var statearr_23006_23026 = state_23000__$1;
(statearr_23006_23026[(2)] = null);

(statearr_23006_23026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (4))){
var inst_22970 = (state_23000[(10)]);
var state_23000__$1 = state_23000;
return cljs.core.async.ioc_alts_BANG_.call(null,state_23000__$1,(7),inst_22970);
} else {
if((state_val_23001 === (6))){
var inst_22996 = (state_23000[(2)]);
var state_23000__$1 = state_23000;
var statearr_23007_23027 = state_23000__$1;
(statearr_23007_23027[(2)] = inst_22996);

(statearr_23007_23027[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (3))){
var inst_22998 = (state_23000[(2)]);
var state_23000__$1 = state_23000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23000__$1,inst_22998);
} else {
if((state_val_23001 === (2))){
var inst_22970 = (state_23000[(10)]);
var inst_22972 = cljs.core.count.call(null,inst_22970);
var inst_22973 = (inst_22972 > (0));
var state_23000__$1 = state_23000;
if(cljs.core.truth_(inst_22973)){
var statearr_23009_23028 = state_23000__$1;
(statearr_23009_23028[(1)] = (4));

} else {
var statearr_23010_23029 = state_23000__$1;
(statearr_23010_23029[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (11))){
var inst_22970 = (state_23000[(10)]);
var inst_22989 = (state_23000[(2)]);
var tmp23008 = inst_22970;
var inst_22970__$1 = tmp23008;
var state_23000__$1 = (function (){var statearr_23011 = state_23000;
(statearr_23011[(10)] = inst_22970__$1);

(statearr_23011[(11)] = inst_22989);

return statearr_23011;
})();
var statearr_23012_23030 = state_23000__$1;
(statearr_23012_23030[(2)] = null);

(statearr_23012_23030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (9))){
var inst_22980 = (state_23000[(7)]);
var state_23000__$1 = state_23000;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23000__$1,(11),out,inst_22980);
} else {
if((state_val_23001 === (5))){
var inst_22994 = cljs.core.async.close_BANG_.call(null,out);
var state_23000__$1 = state_23000;
var statearr_23013_23031 = state_23000__$1;
(statearr_23013_23031[(2)] = inst_22994);

(statearr_23013_23031[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (10))){
var inst_22992 = (state_23000[(2)]);
var state_23000__$1 = state_23000;
var statearr_23014_23032 = state_23000__$1;
(statearr_23014_23032[(2)] = inst_22992);

(statearr_23014_23032[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23001 === (8))){
var inst_22981 = (state_23000[(9)]);
var inst_22980 = (state_23000[(7)]);
var inst_22970 = (state_23000[(10)]);
var inst_22979 = (state_23000[(8)]);
var inst_22984 = (function (){var cs = inst_22970;
var vec__22975 = inst_22979;
var v = inst_22980;
var c = inst_22981;
return (function (p1__22966_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22966_SHARP_);
});
})();
var inst_22985 = cljs.core.filterv.call(null,inst_22984,inst_22970);
var inst_22970__$1 = inst_22985;
var state_23000__$1 = (function (){var statearr_23015 = state_23000;
(statearr_23015[(10)] = inst_22970__$1);

return statearr_23015;
})();
var statearr_23016_23033 = state_23000__$1;
(statearr_23016_23033[(2)] = null);

(statearr_23016_23033[(1)] = (2));


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
var cljs$core$async$state_machine__21552__auto__ = null;
var cljs$core$async$state_machine__21552__auto____0 = (function (){
var statearr_23017 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23017[(0)] = cljs$core$async$state_machine__21552__auto__);

(statearr_23017[(1)] = (1));

return statearr_23017;
});
var cljs$core$async$state_machine__21552__auto____1 = (function (state_23000){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_23000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e23018){var ex__21555__auto__ = e23018;
var statearr_23019_23034 = state_23000;
(statearr_23019_23034[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_23000[(4)]))){
var statearr_23020_23035 = state_23000;
(statearr_23020_23035[(1)] = cljs.core.first.call(null,(state_23000[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23036 = state_23000;
state_23000 = G__23036;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$state_machine__21552__auto__ = function(state_23000){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21552__auto____1.call(this,state_23000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21552__auto____0;
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21552__auto____1;
return cljs$core$async$state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_23021 = f__21626__auto__.call(null);
(statearr_23021[(6)] = c__21625__auto___23023);

return statearr_23021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
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
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__23038 = arguments.length;
switch (G__23038) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21625__auto___23084 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_23062){
var state_val_23063 = (state_23062[(1)]);
if((state_val_23063 === (7))){
var inst_23044 = (state_23062[(7)]);
var inst_23044__$1 = (state_23062[(2)]);
var inst_23045 = (inst_23044__$1 == null);
var inst_23046 = cljs.core.not.call(null,inst_23045);
var state_23062__$1 = (function (){var statearr_23064 = state_23062;
(statearr_23064[(7)] = inst_23044__$1);

return statearr_23064;
})();
if(inst_23046){
var statearr_23065_23085 = state_23062__$1;
(statearr_23065_23085[(1)] = (8));

} else {
var statearr_23066_23086 = state_23062__$1;
(statearr_23066_23086[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (1))){
var inst_23039 = (0);
var state_23062__$1 = (function (){var statearr_23067 = state_23062;
(statearr_23067[(8)] = inst_23039);

return statearr_23067;
})();
var statearr_23068_23087 = state_23062__$1;
(statearr_23068_23087[(2)] = null);

(statearr_23068_23087[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (4))){
var state_23062__$1 = state_23062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23062__$1,(7),ch);
} else {
if((state_val_23063 === (6))){
var inst_23057 = (state_23062[(2)]);
var state_23062__$1 = state_23062;
var statearr_23069_23088 = state_23062__$1;
(statearr_23069_23088[(2)] = inst_23057);

(statearr_23069_23088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (3))){
var inst_23059 = (state_23062[(2)]);
var inst_23060 = cljs.core.async.close_BANG_.call(null,out);
var state_23062__$1 = (function (){var statearr_23070 = state_23062;
(statearr_23070[(9)] = inst_23059);

return statearr_23070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23062__$1,inst_23060);
} else {
if((state_val_23063 === (2))){
var inst_23039 = (state_23062[(8)]);
var inst_23041 = (inst_23039 < n);
var state_23062__$1 = state_23062;
if(cljs.core.truth_(inst_23041)){
var statearr_23071_23089 = state_23062__$1;
(statearr_23071_23089[(1)] = (4));

} else {
var statearr_23072_23090 = state_23062__$1;
(statearr_23072_23090[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (11))){
var inst_23039 = (state_23062[(8)]);
var inst_23049 = (state_23062[(2)]);
var inst_23050 = (inst_23039 + (1));
var inst_23039__$1 = inst_23050;
var state_23062__$1 = (function (){var statearr_23073 = state_23062;
(statearr_23073[(10)] = inst_23049);

(statearr_23073[(8)] = inst_23039__$1);

return statearr_23073;
})();
var statearr_23074_23091 = state_23062__$1;
(statearr_23074_23091[(2)] = null);

(statearr_23074_23091[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (9))){
var state_23062__$1 = state_23062;
var statearr_23075_23092 = state_23062__$1;
(statearr_23075_23092[(2)] = null);

(statearr_23075_23092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (5))){
var state_23062__$1 = state_23062;
var statearr_23076_23093 = state_23062__$1;
(statearr_23076_23093[(2)] = null);

(statearr_23076_23093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (10))){
var inst_23054 = (state_23062[(2)]);
var state_23062__$1 = state_23062;
var statearr_23077_23094 = state_23062__$1;
(statearr_23077_23094[(2)] = inst_23054);

(statearr_23077_23094[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23063 === (8))){
var inst_23044 = (state_23062[(7)]);
var state_23062__$1 = state_23062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23062__$1,(11),out,inst_23044);
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
var cljs$core$async$state_machine__21552__auto__ = null;
var cljs$core$async$state_machine__21552__auto____0 = (function (){
var statearr_23078 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23078[(0)] = cljs$core$async$state_machine__21552__auto__);

(statearr_23078[(1)] = (1));

return statearr_23078;
});
var cljs$core$async$state_machine__21552__auto____1 = (function (state_23062){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_23062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e23079){var ex__21555__auto__ = e23079;
var statearr_23080_23095 = state_23062;
(statearr_23080_23095[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_23062[(4)]))){
var statearr_23081_23096 = state_23062;
(statearr_23081_23096[(1)] = cljs.core.first.call(null,(state_23062[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23097 = state_23062;
state_23062 = G__23097;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$state_machine__21552__auto__ = function(state_23062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21552__auto____1.call(this,state_23062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21552__auto____0;
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21552__auto____1;
return cljs$core$async$state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_23082 = f__21626__auto__.call(null);
(statearr_23082[(6)] = c__21625__auto___23084);

return statearr_23082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23099 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23099 = (function (f,ch,meta23100){
this.f = f;
this.ch = ch;
this.meta23100 = meta23100;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23101,meta23100__$1){
var self__ = this;
var _23101__$1 = this;
return (new cljs.core.async.t_cljs$core$async23099(self__.f,self__.ch,meta23100__$1));
}));

(cljs.core.async.t_cljs$core$async23099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23101){
var self__ = this;
var _23101__$1 = this;
return self__.meta23100;
}));

(cljs.core.async.t_cljs$core$async23099.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23099.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23099.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23099.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23099.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23102 = (function (f,ch,meta23100,_,fn1,meta23103){
this.f = f;
this.ch = ch;
this.meta23100 = meta23100;
this._ = _;
this.fn1 = fn1;
this.meta23103 = meta23103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23104,meta23103__$1){
var self__ = this;
var _23104__$1 = this;
return (new cljs.core.async.t_cljs$core$async23102(self__.f,self__.ch,self__.meta23100,self__._,self__.fn1,meta23103__$1));
}));

(cljs.core.async.t_cljs$core$async23102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23104){
var self__ = this;
var _23104__$1 = this;
return self__.meta23103;
}));

(cljs.core.async.t_cljs$core$async23102.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async23102.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async23102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__23098_SHARP_){
return f1.call(null,(((p1__23098_SHARP_ == null))?null:self__.f.call(null,p1__23098_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async23102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23100","meta23100",-2087842371,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async23099","cljs.core.async/t_cljs$core$async23099",-100594928,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta23103","meta23103",1609417105,null)], null);
}));

(cljs.core.async.t_cljs$core$async23102.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23102");

(cljs.core.async.t_cljs$core$async23102.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async23102");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23102.
 */
cljs.core.async.__GT_t_cljs$core$async23102 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23102(f__$1,ch__$1,meta23100__$1,___$2,fn1__$1,meta23103){
return (new cljs.core.async.t_cljs$core$async23102(f__$1,ch__$1,meta23100__$1,___$2,fn1__$1,meta23103));
});

}

return (new cljs.core.async.t_cljs$core$async23102(self__.f,self__.ch,self__.meta23100,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async23099.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23099.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async23099.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23100","meta23100",-2087842371,null)], null);
}));

(cljs.core.async.t_cljs$core$async23099.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23099.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23099");

(cljs.core.async.t_cljs$core$async23099.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async23099");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23099.
 */
cljs.core.async.__GT_t_cljs$core$async23099 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async23099(f__$1,ch__$1,meta23100){
return (new cljs.core.async.t_cljs$core$async23099(f__$1,ch__$1,meta23100));
});

}

return (new cljs.core.async.t_cljs$core$async23099(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23105 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23105 = (function (f,ch,meta23106){
this.f = f;
this.ch = ch;
this.meta23106 = meta23106;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23105.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23107,meta23106__$1){
var self__ = this;
var _23107__$1 = this;
return (new cljs.core.async.t_cljs$core$async23105(self__.f,self__.ch,meta23106__$1));
}));

(cljs.core.async.t_cljs$core$async23105.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23107){
var self__ = this;
var _23107__$1 = this;
return self__.meta23106;
}));

(cljs.core.async.t_cljs$core$async23105.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23105.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23105.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23105.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23105.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23105.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async23105.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23106","meta23106",1435828948,null)], null);
}));

(cljs.core.async.t_cljs$core$async23105.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23105.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23105");

(cljs.core.async.t_cljs$core$async23105.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async23105");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23105.
 */
cljs.core.async.__GT_t_cljs$core$async23105 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async23105(f__$1,ch__$1,meta23106){
return (new cljs.core.async.t_cljs$core$async23105(f__$1,ch__$1,meta23106));
});

}

return (new cljs.core.async.t_cljs$core$async23105(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async23108 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23108 = (function (p,ch,meta23109){
this.p = p;
this.ch = ch;
this.meta23109 = meta23109;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async23108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23110,meta23109__$1){
var self__ = this;
var _23110__$1 = this;
return (new cljs.core.async.t_cljs$core$async23108(self__.p,self__.ch,meta23109__$1));
}));

(cljs.core.async.t_cljs$core$async23108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23110){
var self__ = this;
var _23110__$1 = this;
return self__.meta23109;
}));

(cljs.core.async.t_cljs$core$async23108.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23108.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async23108.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async23108.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async23108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async23108.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta23109","meta23109",-1738062288,null)], null);
}));

(cljs.core.async.t_cljs$core$async23108.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async23108.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23108");

(cljs.core.async.t_cljs$core$async23108.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async23108");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async23108.
 */
cljs.core.async.__GT_t_cljs$core$async23108 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async23108(p__$1,ch__$1,meta23109){
return (new cljs.core.async.t_cljs$core$async23108(p__$1,ch__$1,meta23109));
});

}

return (new cljs.core.async.t_cljs$core$async23108(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__23112 = arguments.length;
switch (G__23112) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21625__auto___23153 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_23133){
var state_val_23134 = (state_23133[(1)]);
if((state_val_23134 === (7))){
var inst_23129 = (state_23133[(2)]);
var state_23133__$1 = state_23133;
var statearr_23135_23154 = state_23133__$1;
(statearr_23135_23154[(2)] = inst_23129);

(statearr_23135_23154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (1))){
var state_23133__$1 = state_23133;
var statearr_23136_23155 = state_23133__$1;
(statearr_23136_23155[(2)] = null);

(statearr_23136_23155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (4))){
var inst_23115 = (state_23133[(7)]);
var inst_23115__$1 = (state_23133[(2)]);
var inst_23116 = (inst_23115__$1 == null);
var state_23133__$1 = (function (){var statearr_23137 = state_23133;
(statearr_23137[(7)] = inst_23115__$1);

return statearr_23137;
})();
if(cljs.core.truth_(inst_23116)){
var statearr_23138_23156 = state_23133__$1;
(statearr_23138_23156[(1)] = (5));

} else {
var statearr_23139_23157 = state_23133__$1;
(statearr_23139_23157[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (6))){
var inst_23115 = (state_23133[(7)]);
var inst_23120 = p.call(null,inst_23115);
var state_23133__$1 = state_23133;
if(cljs.core.truth_(inst_23120)){
var statearr_23140_23158 = state_23133__$1;
(statearr_23140_23158[(1)] = (8));

} else {
var statearr_23141_23159 = state_23133__$1;
(statearr_23141_23159[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (3))){
var inst_23131 = (state_23133[(2)]);
var state_23133__$1 = state_23133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23133__$1,inst_23131);
} else {
if((state_val_23134 === (2))){
var state_23133__$1 = state_23133;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23133__$1,(4),ch);
} else {
if((state_val_23134 === (11))){
var inst_23123 = (state_23133[(2)]);
var state_23133__$1 = state_23133;
var statearr_23142_23160 = state_23133__$1;
(statearr_23142_23160[(2)] = inst_23123);

(statearr_23142_23160[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (9))){
var state_23133__$1 = state_23133;
var statearr_23143_23161 = state_23133__$1;
(statearr_23143_23161[(2)] = null);

(statearr_23143_23161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (5))){
var inst_23118 = cljs.core.async.close_BANG_.call(null,out);
var state_23133__$1 = state_23133;
var statearr_23144_23162 = state_23133__$1;
(statearr_23144_23162[(2)] = inst_23118);

(statearr_23144_23162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (10))){
var inst_23126 = (state_23133[(2)]);
var state_23133__$1 = (function (){var statearr_23145 = state_23133;
(statearr_23145[(8)] = inst_23126);

return statearr_23145;
})();
var statearr_23146_23163 = state_23133__$1;
(statearr_23146_23163[(2)] = null);

(statearr_23146_23163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23134 === (8))){
var inst_23115 = (state_23133[(7)]);
var state_23133__$1 = state_23133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23133__$1,(11),out,inst_23115);
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
var cljs$core$async$state_machine__21552__auto__ = null;
var cljs$core$async$state_machine__21552__auto____0 = (function (){
var statearr_23147 = [null,null,null,null,null,null,null,null,null];
(statearr_23147[(0)] = cljs$core$async$state_machine__21552__auto__);

(statearr_23147[(1)] = (1));

return statearr_23147;
});
var cljs$core$async$state_machine__21552__auto____1 = (function (state_23133){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_23133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e23148){var ex__21555__auto__ = e23148;
var statearr_23149_23164 = state_23133;
(statearr_23149_23164[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_23133[(4)]))){
var statearr_23150_23165 = state_23133;
(statearr_23150_23165[(1)] = cljs.core.first.call(null,(state_23133[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23166 = state_23133;
state_23133 = G__23166;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$state_machine__21552__auto__ = function(state_23133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21552__auto____1.call(this,state_23133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21552__auto____0;
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21552__auto____1;
return cljs$core$async$state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_23151 = f__21626__auto__.call(null);
(statearr_23151[(6)] = c__21625__auto___23153);

return statearr_23151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__23168 = arguments.length;
switch (G__23168) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__21625__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_23231){
var state_val_23232 = (state_23231[(1)]);
if((state_val_23232 === (7))){
var inst_23227 = (state_23231[(2)]);
var state_23231__$1 = state_23231;
var statearr_23233_23272 = state_23231__$1;
(statearr_23233_23272[(2)] = inst_23227);

(statearr_23233_23272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (20))){
var inst_23197 = (state_23231[(7)]);
var inst_23208 = (state_23231[(2)]);
var inst_23209 = cljs.core.next.call(null,inst_23197);
var inst_23183 = inst_23209;
var inst_23184 = null;
var inst_23185 = (0);
var inst_23186 = (0);
var state_23231__$1 = (function (){var statearr_23234 = state_23231;
(statearr_23234[(8)] = inst_23183);

(statearr_23234[(9)] = inst_23208);

(statearr_23234[(10)] = inst_23186);

(statearr_23234[(11)] = inst_23185);

(statearr_23234[(12)] = inst_23184);

return statearr_23234;
})();
var statearr_23235_23273 = state_23231__$1;
(statearr_23235_23273[(2)] = null);

(statearr_23235_23273[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (1))){
var state_23231__$1 = state_23231;
var statearr_23236_23274 = state_23231__$1;
(statearr_23236_23274[(2)] = null);

(statearr_23236_23274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (4))){
var inst_23172 = (state_23231[(13)]);
var inst_23172__$1 = (state_23231[(2)]);
var inst_23173 = (inst_23172__$1 == null);
var state_23231__$1 = (function (){var statearr_23237 = state_23231;
(statearr_23237[(13)] = inst_23172__$1);

return statearr_23237;
})();
if(cljs.core.truth_(inst_23173)){
var statearr_23238_23275 = state_23231__$1;
(statearr_23238_23275[(1)] = (5));

} else {
var statearr_23239_23276 = state_23231__$1;
(statearr_23239_23276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (15))){
var state_23231__$1 = state_23231;
var statearr_23243_23277 = state_23231__$1;
(statearr_23243_23277[(2)] = null);

(statearr_23243_23277[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (21))){
var state_23231__$1 = state_23231;
var statearr_23244_23278 = state_23231__$1;
(statearr_23244_23278[(2)] = null);

(statearr_23244_23278[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (13))){
var inst_23183 = (state_23231[(8)]);
var inst_23186 = (state_23231[(10)]);
var inst_23185 = (state_23231[(11)]);
var inst_23184 = (state_23231[(12)]);
var inst_23193 = (state_23231[(2)]);
var inst_23194 = (inst_23186 + (1));
var tmp23240 = inst_23183;
var tmp23241 = inst_23185;
var tmp23242 = inst_23184;
var inst_23183__$1 = tmp23240;
var inst_23184__$1 = tmp23242;
var inst_23185__$1 = tmp23241;
var inst_23186__$1 = inst_23194;
var state_23231__$1 = (function (){var statearr_23245 = state_23231;
(statearr_23245[(8)] = inst_23183__$1);

(statearr_23245[(14)] = inst_23193);

(statearr_23245[(10)] = inst_23186__$1);

(statearr_23245[(11)] = inst_23185__$1);

(statearr_23245[(12)] = inst_23184__$1);

return statearr_23245;
})();
var statearr_23246_23279 = state_23231__$1;
(statearr_23246_23279[(2)] = null);

(statearr_23246_23279[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (22))){
var state_23231__$1 = state_23231;
var statearr_23247_23280 = state_23231__$1;
(statearr_23247_23280[(2)] = null);

(statearr_23247_23280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (6))){
var inst_23172 = (state_23231[(13)]);
var inst_23181 = f.call(null,inst_23172);
var inst_23182 = cljs.core.seq.call(null,inst_23181);
var inst_23183 = inst_23182;
var inst_23184 = null;
var inst_23185 = (0);
var inst_23186 = (0);
var state_23231__$1 = (function (){var statearr_23248 = state_23231;
(statearr_23248[(8)] = inst_23183);

(statearr_23248[(10)] = inst_23186);

(statearr_23248[(11)] = inst_23185);

(statearr_23248[(12)] = inst_23184);

return statearr_23248;
})();
var statearr_23249_23281 = state_23231__$1;
(statearr_23249_23281[(2)] = null);

(statearr_23249_23281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (17))){
var inst_23197 = (state_23231[(7)]);
var inst_23201 = cljs.core.chunk_first.call(null,inst_23197);
var inst_23202 = cljs.core.chunk_rest.call(null,inst_23197);
var inst_23203 = cljs.core.count.call(null,inst_23201);
var inst_23183 = inst_23202;
var inst_23184 = inst_23201;
var inst_23185 = inst_23203;
var inst_23186 = (0);
var state_23231__$1 = (function (){var statearr_23250 = state_23231;
(statearr_23250[(8)] = inst_23183);

(statearr_23250[(10)] = inst_23186);

(statearr_23250[(11)] = inst_23185);

(statearr_23250[(12)] = inst_23184);

return statearr_23250;
})();
var statearr_23251_23282 = state_23231__$1;
(statearr_23251_23282[(2)] = null);

(statearr_23251_23282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (3))){
var inst_23229 = (state_23231[(2)]);
var state_23231__$1 = state_23231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23231__$1,inst_23229);
} else {
if((state_val_23232 === (12))){
var inst_23217 = (state_23231[(2)]);
var state_23231__$1 = state_23231;
var statearr_23252_23283 = state_23231__$1;
(statearr_23252_23283[(2)] = inst_23217);

(statearr_23252_23283[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (2))){
var state_23231__$1 = state_23231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23231__$1,(4),in$);
} else {
if((state_val_23232 === (23))){
var inst_23225 = (state_23231[(2)]);
var state_23231__$1 = state_23231;
var statearr_23253_23284 = state_23231__$1;
(statearr_23253_23284[(2)] = inst_23225);

(statearr_23253_23284[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (19))){
var inst_23212 = (state_23231[(2)]);
var state_23231__$1 = state_23231;
var statearr_23254_23285 = state_23231__$1;
(statearr_23254_23285[(2)] = inst_23212);

(statearr_23254_23285[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (11))){
var inst_23183 = (state_23231[(8)]);
var inst_23197 = (state_23231[(7)]);
var inst_23197__$1 = cljs.core.seq.call(null,inst_23183);
var state_23231__$1 = (function (){var statearr_23255 = state_23231;
(statearr_23255[(7)] = inst_23197__$1);

return statearr_23255;
})();
if(inst_23197__$1){
var statearr_23256_23286 = state_23231__$1;
(statearr_23256_23286[(1)] = (14));

} else {
var statearr_23257_23287 = state_23231__$1;
(statearr_23257_23287[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (9))){
var inst_23219 = (state_23231[(2)]);
var inst_23220 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_23231__$1 = (function (){var statearr_23258 = state_23231;
(statearr_23258[(15)] = inst_23219);

return statearr_23258;
})();
if(cljs.core.truth_(inst_23220)){
var statearr_23259_23288 = state_23231__$1;
(statearr_23259_23288[(1)] = (21));

} else {
var statearr_23260_23289 = state_23231__$1;
(statearr_23260_23289[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (5))){
var inst_23175 = cljs.core.async.close_BANG_.call(null,out);
var state_23231__$1 = state_23231;
var statearr_23261_23290 = state_23231__$1;
(statearr_23261_23290[(2)] = inst_23175);

(statearr_23261_23290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (14))){
var inst_23197 = (state_23231[(7)]);
var inst_23199 = cljs.core.chunked_seq_QMARK_.call(null,inst_23197);
var state_23231__$1 = state_23231;
if(inst_23199){
var statearr_23262_23291 = state_23231__$1;
(statearr_23262_23291[(1)] = (17));

} else {
var statearr_23263_23292 = state_23231__$1;
(statearr_23263_23292[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (16))){
var inst_23215 = (state_23231[(2)]);
var state_23231__$1 = state_23231;
var statearr_23264_23293 = state_23231__$1;
(statearr_23264_23293[(2)] = inst_23215);

(statearr_23264_23293[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23232 === (10))){
var inst_23186 = (state_23231[(10)]);
var inst_23184 = (state_23231[(12)]);
var inst_23191 = cljs.core._nth.call(null,inst_23184,inst_23186);
var state_23231__$1 = state_23231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23231__$1,(13),out,inst_23191);
} else {
if((state_val_23232 === (18))){
var inst_23197 = (state_23231[(7)]);
var inst_23206 = cljs.core.first.call(null,inst_23197);
var state_23231__$1 = state_23231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23231__$1,(20),out,inst_23206);
} else {
if((state_val_23232 === (8))){
var inst_23186 = (state_23231[(10)]);
var inst_23185 = (state_23231[(11)]);
var inst_23188 = (inst_23186 < inst_23185);
var inst_23189 = inst_23188;
var state_23231__$1 = state_23231;
if(cljs.core.truth_(inst_23189)){
var statearr_23265_23294 = state_23231__$1;
(statearr_23265_23294[(1)] = (10));

} else {
var statearr_23266_23295 = state_23231__$1;
(statearr_23266_23295[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__21552__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21552__auto____0 = (function (){
var statearr_23267 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23267[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21552__auto__);

(statearr_23267[(1)] = (1));

return statearr_23267;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21552__auto____1 = (function (state_23231){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_23231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e23268){var ex__21555__auto__ = e23268;
var statearr_23269_23296 = state_23231;
(statearr_23269_23296[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_23231[(4)]))){
var statearr_23270_23297 = state_23231;
(statearr_23270_23297[(1)] = cljs.core.first.call(null,(state_23231[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23298 = state_23231;
state_23231 = G__23298;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21552__auto__ = function(state_23231){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21552__auto____1.call(this,state_23231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21552__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21552__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_23271 = f__21626__auto__.call(null);
(statearr_23271[(6)] = c__21625__auto__);

return statearr_23271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));

return c__21625__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__23300 = arguments.length;
switch (G__23300) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__23303 = arguments.length;
switch (G__23303) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__23306 = arguments.length;
switch (G__23306) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21625__auto___23354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_23330){
var state_val_23331 = (state_23330[(1)]);
if((state_val_23331 === (7))){
var inst_23325 = (state_23330[(2)]);
var state_23330__$1 = state_23330;
var statearr_23332_23355 = state_23330__$1;
(statearr_23332_23355[(2)] = inst_23325);

(statearr_23332_23355[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (1))){
var inst_23307 = null;
var state_23330__$1 = (function (){var statearr_23333 = state_23330;
(statearr_23333[(7)] = inst_23307);

return statearr_23333;
})();
var statearr_23334_23356 = state_23330__$1;
(statearr_23334_23356[(2)] = null);

(statearr_23334_23356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (4))){
var inst_23310 = (state_23330[(8)]);
var inst_23310__$1 = (state_23330[(2)]);
var inst_23311 = (inst_23310__$1 == null);
var inst_23312 = cljs.core.not.call(null,inst_23311);
var state_23330__$1 = (function (){var statearr_23335 = state_23330;
(statearr_23335[(8)] = inst_23310__$1);

return statearr_23335;
})();
if(inst_23312){
var statearr_23336_23357 = state_23330__$1;
(statearr_23336_23357[(1)] = (5));

} else {
var statearr_23337_23358 = state_23330__$1;
(statearr_23337_23358[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (6))){
var state_23330__$1 = state_23330;
var statearr_23338_23359 = state_23330__$1;
(statearr_23338_23359[(2)] = null);

(statearr_23338_23359[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (3))){
var inst_23327 = (state_23330[(2)]);
var inst_23328 = cljs.core.async.close_BANG_.call(null,out);
var state_23330__$1 = (function (){var statearr_23339 = state_23330;
(statearr_23339[(9)] = inst_23327);

return statearr_23339;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23330__$1,inst_23328);
} else {
if((state_val_23331 === (2))){
var state_23330__$1 = state_23330;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23330__$1,(4),ch);
} else {
if((state_val_23331 === (11))){
var inst_23310 = (state_23330[(8)]);
var inst_23319 = (state_23330[(2)]);
var inst_23307 = inst_23310;
var state_23330__$1 = (function (){var statearr_23340 = state_23330;
(statearr_23340[(7)] = inst_23307);

(statearr_23340[(10)] = inst_23319);

return statearr_23340;
})();
var statearr_23341_23360 = state_23330__$1;
(statearr_23341_23360[(2)] = null);

(statearr_23341_23360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (9))){
var inst_23310 = (state_23330[(8)]);
var state_23330__$1 = state_23330;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23330__$1,(11),out,inst_23310);
} else {
if((state_val_23331 === (5))){
var inst_23307 = (state_23330[(7)]);
var inst_23310 = (state_23330[(8)]);
var inst_23314 = cljs.core._EQ_.call(null,inst_23310,inst_23307);
var state_23330__$1 = state_23330;
if(inst_23314){
var statearr_23343_23361 = state_23330__$1;
(statearr_23343_23361[(1)] = (8));

} else {
var statearr_23344_23362 = state_23330__$1;
(statearr_23344_23362[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (10))){
var inst_23322 = (state_23330[(2)]);
var state_23330__$1 = state_23330;
var statearr_23345_23363 = state_23330__$1;
(statearr_23345_23363[(2)] = inst_23322);

(statearr_23345_23363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23331 === (8))){
var inst_23307 = (state_23330[(7)]);
var tmp23342 = inst_23307;
var inst_23307__$1 = tmp23342;
var state_23330__$1 = (function (){var statearr_23346 = state_23330;
(statearr_23346[(7)] = inst_23307__$1);

return statearr_23346;
})();
var statearr_23347_23364 = state_23330__$1;
(statearr_23347_23364[(2)] = null);

(statearr_23347_23364[(1)] = (2));


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
var cljs$core$async$state_machine__21552__auto__ = null;
var cljs$core$async$state_machine__21552__auto____0 = (function (){
var statearr_23348 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_23348[(0)] = cljs$core$async$state_machine__21552__auto__);

(statearr_23348[(1)] = (1));

return statearr_23348;
});
var cljs$core$async$state_machine__21552__auto____1 = (function (state_23330){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_23330);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e23349){var ex__21555__auto__ = e23349;
var statearr_23350_23365 = state_23330;
(statearr_23350_23365[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_23330[(4)]))){
var statearr_23351_23366 = state_23330;
(statearr_23351_23366[(1)] = cljs.core.first.call(null,(state_23330[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23367 = state_23330;
state_23330 = G__23367;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$state_machine__21552__auto__ = function(state_23330){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21552__auto____1.call(this,state_23330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21552__auto____0;
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21552__auto____1;
return cljs$core$async$state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_23352 = f__21626__auto__.call(null);
(statearr_23352[(6)] = c__21625__auto___23354);

return statearr_23352;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__23369 = arguments.length;
switch (G__23369) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21625__auto___23436 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_23407){
var state_val_23408 = (state_23407[(1)]);
if((state_val_23408 === (7))){
var inst_23403 = (state_23407[(2)]);
var state_23407__$1 = state_23407;
var statearr_23409_23437 = state_23407__$1;
(statearr_23409_23437[(2)] = inst_23403);

(statearr_23409_23437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (1))){
var inst_23370 = (new Array(n));
var inst_23371 = inst_23370;
var inst_23372 = (0);
var state_23407__$1 = (function (){var statearr_23410 = state_23407;
(statearr_23410[(7)] = inst_23371);

(statearr_23410[(8)] = inst_23372);

return statearr_23410;
})();
var statearr_23411_23438 = state_23407__$1;
(statearr_23411_23438[(2)] = null);

(statearr_23411_23438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (4))){
var inst_23375 = (state_23407[(9)]);
var inst_23375__$1 = (state_23407[(2)]);
var inst_23376 = (inst_23375__$1 == null);
var inst_23377 = cljs.core.not.call(null,inst_23376);
var state_23407__$1 = (function (){var statearr_23412 = state_23407;
(statearr_23412[(9)] = inst_23375__$1);

return statearr_23412;
})();
if(inst_23377){
var statearr_23413_23439 = state_23407__$1;
(statearr_23413_23439[(1)] = (5));

} else {
var statearr_23414_23440 = state_23407__$1;
(statearr_23414_23440[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (15))){
var inst_23397 = (state_23407[(2)]);
var state_23407__$1 = state_23407;
var statearr_23415_23441 = state_23407__$1;
(statearr_23415_23441[(2)] = inst_23397);

(statearr_23415_23441[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (13))){
var state_23407__$1 = state_23407;
var statearr_23416_23442 = state_23407__$1;
(statearr_23416_23442[(2)] = null);

(statearr_23416_23442[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (6))){
var inst_23372 = (state_23407[(8)]);
var inst_23393 = (inst_23372 > (0));
var state_23407__$1 = state_23407;
if(cljs.core.truth_(inst_23393)){
var statearr_23417_23443 = state_23407__$1;
(statearr_23417_23443[(1)] = (12));

} else {
var statearr_23418_23444 = state_23407__$1;
(statearr_23418_23444[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (3))){
var inst_23405 = (state_23407[(2)]);
var state_23407__$1 = state_23407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23407__$1,inst_23405);
} else {
if((state_val_23408 === (12))){
var inst_23371 = (state_23407[(7)]);
var inst_23395 = cljs.core.vec.call(null,inst_23371);
var state_23407__$1 = state_23407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23407__$1,(15),out,inst_23395);
} else {
if((state_val_23408 === (2))){
var state_23407__$1 = state_23407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23407__$1,(4),ch);
} else {
if((state_val_23408 === (11))){
var inst_23387 = (state_23407[(2)]);
var inst_23388 = (new Array(n));
var inst_23371 = inst_23388;
var inst_23372 = (0);
var state_23407__$1 = (function (){var statearr_23419 = state_23407;
(statearr_23419[(7)] = inst_23371);

(statearr_23419[(10)] = inst_23387);

(statearr_23419[(8)] = inst_23372);

return statearr_23419;
})();
var statearr_23420_23445 = state_23407__$1;
(statearr_23420_23445[(2)] = null);

(statearr_23420_23445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (9))){
var inst_23371 = (state_23407[(7)]);
var inst_23385 = cljs.core.vec.call(null,inst_23371);
var state_23407__$1 = state_23407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23407__$1,(11),out,inst_23385);
} else {
if((state_val_23408 === (5))){
var inst_23375 = (state_23407[(9)]);
var inst_23371 = (state_23407[(7)]);
var inst_23380 = (state_23407[(11)]);
var inst_23372 = (state_23407[(8)]);
var inst_23379 = (inst_23371[inst_23372] = inst_23375);
var inst_23380__$1 = (inst_23372 + (1));
var inst_23381 = (inst_23380__$1 < n);
var state_23407__$1 = (function (){var statearr_23421 = state_23407;
(statearr_23421[(12)] = inst_23379);

(statearr_23421[(11)] = inst_23380__$1);

return statearr_23421;
})();
if(cljs.core.truth_(inst_23381)){
var statearr_23422_23446 = state_23407__$1;
(statearr_23422_23446[(1)] = (8));

} else {
var statearr_23423_23447 = state_23407__$1;
(statearr_23423_23447[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (14))){
var inst_23400 = (state_23407[(2)]);
var inst_23401 = cljs.core.async.close_BANG_.call(null,out);
var state_23407__$1 = (function (){var statearr_23425 = state_23407;
(statearr_23425[(13)] = inst_23400);

return statearr_23425;
})();
var statearr_23426_23448 = state_23407__$1;
(statearr_23426_23448[(2)] = inst_23401);

(statearr_23426_23448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (10))){
var inst_23391 = (state_23407[(2)]);
var state_23407__$1 = state_23407;
var statearr_23427_23449 = state_23407__$1;
(statearr_23427_23449[(2)] = inst_23391);

(statearr_23427_23449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23408 === (8))){
var inst_23371 = (state_23407[(7)]);
var inst_23380 = (state_23407[(11)]);
var tmp23424 = inst_23371;
var inst_23371__$1 = tmp23424;
var inst_23372 = inst_23380;
var state_23407__$1 = (function (){var statearr_23428 = state_23407;
(statearr_23428[(7)] = inst_23371__$1);

(statearr_23428[(8)] = inst_23372);

return statearr_23428;
})();
var statearr_23429_23450 = state_23407__$1;
(statearr_23429_23450[(2)] = null);

(statearr_23429_23450[(1)] = (2));


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
var cljs$core$async$state_machine__21552__auto__ = null;
var cljs$core$async$state_machine__21552__auto____0 = (function (){
var statearr_23430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23430[(0)] = cljs$core$async$state_machine__21552__auto__);

(statearr_23430[(1)] = (1));

return statearr_23430;
});
var cljs$core$async$state_machine__21552__auto____1 = (function (state_23407){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_23407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e23431){var ex__21555__auto__ = e23431;
var statearr_23432_23451 = state_23407;
(statearr_23432_23451[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_23407[(4)]))){
var statearr_23433_23452 = state_23407;
(statearr_23433_23452[(1)] = cljs.core.first.call(null,(state_23407[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23453 = state_23407;
state_23407 = G__23453;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$state_machine__21552__auto__ = function(state_23407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21552__auto____1.call(this,state_23407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21552__auto____0;
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21552__auto____1;
return cljs$core$async$state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_23434 = f__21626__auto__.call(null);
(statearr_23434[(6)] = c__21625__auto___23436);

return statearr_23434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23455 = arguments.length;
switch (G__23455) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__21625__auto___23533 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21626__auto__ = (function (){var switch__21551__auto__ = (function (state_23500){
var state_val_23501 = (state_23500[(1)]);
if((state_val_23501 === (7))){
var inst_23496 = (state_23500[(2)]);
var state_23500__$1 = state_23500;
var statearr_23502_23534 = state_23500__$1;
(statearr_23502_23534[(2)] = inst_23496);

(statearr_23502_23534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23501 === (1))){
var inst_23456 = [];
var inst_23457 = inst_23456;
var inst_23458 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23500__$1 = (function (){var statearr_23503 = state_23500;
(statearr_23503[(7)] = inst_23458);

(statearr_23503[(8)] = inst_23457);

return statearr_23503;
})();
var statearr_23504_23535 = state_23500__$1;
(statearr_23504_23535[(2)] = null);

(statearr_23504_23535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23501 === (4))){
var inst_23461 = (state_23500[(9)]);
var inst_23461__$1 = (state_23500[(2)]);
var inst_23462 = (inst_23461__$1 == null);
var inst_23463 = cljs.core.not.call(null,inst_23462);
var state_23500__$1 = (function (){var statearr_23505 = state_23500;
(statearr_23505[(9)] = inst_23461__$1);

return statearr_23505;
})();
if(inst_23463){
var statearr_23506_23536 = state_23500__$1;
(statearr_23506_23536[(1)] = (5));

} else {
var statearr_23507_23537 = state_23500__$1;
(statearr_23507_23537[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23501 === (15))){
var inst_23457 = (state_23500[(8)]);
var inst_23488 = cljs.core.vec.call(null,inst_23457);
var state_23500__$1 = state_23500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23500__$1,(18),out,inst_23488);
} else {
if((state_val_23501 === (13))){
var inst_23483 = (state_23500[(2)]);
var state_23500__$1 = state_23500;
var statearr_23508_23538 = state_23500__$1;
(statearr_23508_23538[(2)] = inst_23483);

(statearr_23508_23538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23501 === (6))){
var inst_23457 = (state_23500[(8)]);
var inst_23485 = inst_23457.length;
var inst_23486 = (inst_23485 > (0));
var state_23500__$1 = state_23500;
if(cljs.core.truth_(inst_23486)){
var statearr_23509_23539 = state_23500__$1;
(statearr_23509_23539[(1)] = (15));

} else {
var statearr_23510_23540 = state_23500__$1;
(statearr_23510_23540[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23501 === (17))){
var inst_23493 = (state_23500[(2)]);
var inst_23494 = cljs.core.async.close_BANG_.call(null,out);
var state_23500__$1 = (function (){var statearr_23511 = state_23500;
(statearr_23511[(10)] = inst_23493);

return statearr_23511;
})();
var statearr_23512_23541 = state_23500__$1;
(statearr_23512_23541[(2)] = inst_23494);

(statearr_23512_23541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23501 === (3))){
var inst_23498 = (state_23500[(2)]);
var state_23500__$1 = state_23500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23500__$1,inst_23498);
} else {
if((state_val_23501 === (12))){
var inst_23457 = (state_23500[(8)]);
var inst_23476 = cljs.core.vec.call(null,inst_23457);
var state_23500__$1 = state_23500;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23500__$1,(14),out,inst_23476);
} else {
if((state_val_23501 === (2))){
var state_23500__$1 = state_23500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23500__$1,(4),ch);
} else {
if((state_val_23501 === (11))){
var inst_23457 = (state_23500[(8)]);
var inst_23461 = (state_23500[(9)]);
var inst_23465 = (state_23500[(11)]);
var inst_23473 = inst_23457.push(inst_23461);
var tmp23513 = inst_23457;
var inst_23457__$1 = tmp23513;
var inst_23458 = inst_23465;
var state_23500__$1 = (function (){var statearr_23514 = state_23500;
(statearr_23514[(7)] = inst_23458);

(statearr_23514[(8)] = inst_23457__$1);

(statearr_23514[(12)] = inst_23473);

return statearr_23514;
})();
var statearr_23515_23542 = state_23500__$1;
(statearr_23515_23542[(2)] = null);

(statearr_23515_23542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23501 === (9))){
var inst_23458 = (state_23500[(7)]);
var inst_23469 = cljs.core.keyword_identical_QMARK_.call(null,inst_23458,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_23500__$1 = state_23500;
var statearr_23516_23543 = state_23500__$1;
(statearr_23516_23543[(2)] = inst_23469);

(statearr_23516_23543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23501 === (5))){
var inst_23458 = (state_23500[(7)]);
var inst_23466 = (state_23500[(13)]);
var inst_23461 = (state_23500[(9)]);
var inst_23465 = (state_23500[(11)]);
var inst_23465__$1 = f.call(null,inst_23461);
var inst_23466__$1 = cljs.core._EQ_.call(null,inst_23465__$1,inst_23458);
var state_23500__$1 = (function (){var statearr_23517 = state_23500;
(statearr_23517[(13)] = inst_23466__$1);

(statearr_23517[(11)] = inst_23465__$1);

return statearr_23517;
})();
if(inst_23466__$1){
var statearr_23518_23544 = state_23500__$1;
(statearr_23518_23544[(1)] = (8));

} else {
var statearr_23519_23545 = state_23500__$1;
(statearr_23519_23545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23501 === (14))){
var inst_23461 = (state_23500[(9)]);
var inst_23465 = (state_23500[(11)]);
var inst_23478 = (state_23500[(2)]);
var inst_23479 = [];
var inst_23480 = inst_23479.push(inst_23461);
var inst_23457 = inst_23479;
var inst_23458 = inst_23465;
var state_23500__$1 = (function (){var statearr_23520 = state_23500;
(statearr_23520[(14)] = inst_23480);

(statearr_23520[(7)] = inst_23458);

(statearr_23520[(8)] = inst_23457);

(statearr_23520[(15)] = inst_23478);

return statearr_23520;
})();
var statearr_23521_23546 = state_23500__$1;
(statearr_23521_23546[(2)] = null);

(statearr_23521_23546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23501 === (16))){
var state_23500__$1 = state_23500;
var statearr_23522_23547 = state_23500__$1;
(statearr_23522_23547[(2)] = null);

(statearr_23522_23547[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23501 === (10))){
var inst_23471 = (state_23500[(2)]);
var state_23500__$1 = state_23500;
if(cljs.core.truth_(inst_23471)){
var statearr_23523_23548 = state_23500__$1;
(statearr_23523_23548[(1)] = (11));

} else {
var statearr_23524_23549 = state_23500__$1;
(statearr_23524_23549[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23501 === (18))){
var inst_23490 = (state_23500[(2)]);
var state_23500__$1 = state_23500;
var statearr_23525_23550 = state_23500__$1;
(statearr_23525_23550[(2)] = inst_23490);

(statearr_23525_23550[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23501 === (8))){
var inst_23466 = (state_23500[(13)]);
var state_23500__$1 = state_23500;
var statearr_23526_23551 = state_23500__$1;
(statearr_23526_23551[(2)] = inst_23466);

(statearr_23526_23551[(1)] = (10));


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
var cljs$core$async$state_machine__21552__auto__ = null;
var cljs$core$async$state_machine__21552__auto____0 = (function (){
var statearr_23527 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23527[(0)] = cljs$core$async$state_machine__21552__auto__);

(statearr_23527[(1)] = (1));

return statearr_23527;
});
var cljs$core$async$state_machine__21552__auto____1 = (function (state_23500){
while(true){
var ret_value__21553__auto__ = (function (){try{while(true){
var result__21554__auto__ = switch__21551__auto__.call(null,state_23500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21554__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21554__auto__;
}
break;
}
}catch (e23528){var ex__21555__auto__ = e23528;
var statearr_23529_23552 = state_23500;
(statearr_23529_23552[(2)] = ex__21555__auto__);


if(cljs.core.seq.call(null,(state_23500[(4)]))){
var statearr_23530_23553 = state_23500;
(statearr_23530_23553[(1)] = cljs.core.first.call(null,(state_23500[(4)])));

} else {
throw ex__21555__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21553__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23554 = state_23500;
state_23500 = G__23554;
continue;
} else {
return ret_value__21553__auto__;
}
break;
}
});
cljs$core$async$state_machine__21552__auto__ = function(state_23500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21552__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21552__auto____1.call(this,state_23500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21552__auto____0;
cljs$core$async$state_machine__21552__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21552__auto____1;
return cljs$core$async$state_machine__21552__auto__;
})()
})();
var state__21627__auto__ = (function (){var statearr_23531 = f__21626__auto__.call(null);
(statearr_23531[(6)] = c__21625__auto___23533);

return statearr_23531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21627__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
