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
var G__21239 = arguments.length;
switch (G__21239) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21240 = (function (f,blockable,meta21241){
this.f = f;
this.blockable = blockable;
this.meta21241 = meta21241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21242,meta21241__$1){
var self__ = this;
var _21242__$1 = this;
return (new cljs.core.async.t_cljs$core$async21240(self__.f,self__.blockable,meta21241__$1));
}));

(cljs.core.async.t_cljs$core$async21240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21242){
var self__ = this;
var _21242__$1 = this;
return self__.meta21241;
}));

(cljs.core.async.t_cljs$core$async21240.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async21240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async21240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21241","meta21241",1420654872,null)], null);
}));

(cljs.core.async.t_cljs$core$async21240.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21240");

(cljs.core.async.t_cljs$core$async21240.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async21240");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21240.
 */
cljs.core.async.__GT_t_cljs$core$async21240 = (function cljs$core$async$__GT_t_cljs$core$async21240(f__$1,blockable__$1,meta21241){
return (new cljs.core.async.t_cljs$core$async21240(f__$1,blockable__$1,meta21241));
});

}

return (new cljs.core.async.t_cljs$core$async21240(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__21246 = arguments.length;
switch (G__21246) {
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
var G__21249 = arguments.length;
switch (G__21249) {
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
var G__21252 = arguments.length;
switch (G__21252) {
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
var val_21254 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_21254);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_21254);
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
var G__21256 = arguments.length;
switch (G__21256) {
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
var n__5636__auto___21258 = n;
var x_21259 = (0);
while(true){
if((x_21259 < n__5636__auto___21258)){
(a[x_21259] = x_21259);

var G__21260 = (x_21259 + (1));
x_21259 = G__21260;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21261 = (function (flag,meta21262){
this.flag = flag;
this.meta21262 = meta21262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21263,meta21262__$1){
var self__ = this;
var _21263__$1 = this;
return (new cljs.core.async.t_cljs$core$async21261(self__.flag,meta21262__$1));
}));

(cljs.core.async.t_cljs$core$async21261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21263){
var self__ = this;
var _21263__$1 = this;
return self__.meta21262;
}));

(cljs.core.async.t_cljs$core$async21261.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async21261.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async21261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta21262","meta21262",1526720949,null)], null);
}));

(cljs.core.async.t_cljs$core$async21261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21261");

(cljs.core.async.t_cljs$core$async21261.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async21261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21261.
 */
cljs.core.async.__GT_t_cljs$core$async21261 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async21261(flag__$1,meta21262){
return (new cljs.core.async.t_cljs$core$async21261(flag__$1,meta21262));
});

}

return (new cljs.core.async.t_cljs$core$async21261(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21264 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21264 = (function (flag,cb,meta21265){
this.flag = flag;
this.cb = cb;
this.meta21265 = meta21265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21266,meta21265__$1){
var self__ = this;
var _21266__$1 = this;
return (new cljs.core.async.t_cljs$core$async21264(self__.flag,self__.cb,meta21265__$1));
}));

(cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21266){
var self__ = this;
var _21266__$1 = this;
return self__.meta21265;
}));

(cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async21264.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async21264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta21265","meta21265",-684314173,null)], null);
}));

(cljs.core.async.t_cljs$core$async21264.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21264.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21264");

(cljs.core.async.t_cljs$core$async21264.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async21264");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21264.
 */
cljs.core.async.__GT_t_cljs$core$async21264 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async21264(flag__$1,cb__$1,meta21265){
return (new cljs.core.async.t_cljs$core$async21264(flag__$1,cb__$1,meta21265));
});

}

return (new cljs.core.async.t_cljs$core$async21264(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__21267_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21267_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__21268_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__21268_SHARP_,port], null));
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
var G__21269 = (i + (1));
i = G__21269;
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
var len__5769__auto___21274 = arguments.length;
var i__5770__auto___21275 = (0);
while(true){
if((i__5770__auto___21275 < len__5769__auto___21274)){
args__5775__auto__.push((arguments[i__5770__auto___21275]));

var G__21276 = (i__5770__auto___21275 + (1));
i__5770__auto___21275 = G__21276;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__21272){
var map__21273 = p__21272;
var map__21273__$1 = cljs.core.__destructure_map.call(null,map__21273);
var opts = map__21273__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq21270){
var G__21271 = cljs.core.first.call(null,seq21270);
var seq21270__$1 = cljs.core.next.call(null,seq21270);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21271,seq21270__$1);
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
var G__21278 = arguments.length;
switch (G__21278) {
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
var c__21179__auto___21325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_21302){
var state_val_21303 = (state_21302[(1)]);
if((state_val_21303 === (7))){
var inst_21298 = (state_21302[(2)]);
var state_21302__$1 = state_21302;
var statearr_21304_21326 = state_21302__$1;
(statearr_21304_21326[(2)] = inst_21298);

(statearr_21304_21326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (1))){
var state_21302__$1 = state_21302;
var statearr_21305_21327 = state_21302__$1;
(statearr_21305_21327[(2)] = null);

(statearr_21305_21327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (4))){
var inst_21281 = (state_21302[(7)]);
var inst_21281__$1 = (state_21302[(2)]);
var inst_21282 = (inst_21281__$1 == null);
var state_21302__$1 = (function (){var statearr_21306 = state_21302;
(statearr_21306[(7)] = inst_21281__$1);

return statearr_21306;
})();
if(cljs.core.truth_(inst_21282)){
var statearr_21307_21328 = state_21302__$1;
(statearr_21307_21328[(1)] = (5));

} else {
var statearr_21308_21329 = state_21302__$1;
(statearr_21308_21329[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (13))){
var state_21302__$1 = state_21302;
var statearr_21309_21330 = state_21302__$1;
(statearr_21309_21330[(2)] = null);

(statearr_21309_21330[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (6))){
var inst_21281 = (state_21302[(7)]);
var state_21302__$1 = state_21302;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21302__$1,(11),to,inst_21281);
} else {
if((state_val_21303 === (3))){
var inst_21300 = (state_21302[(2)]);
var state_21302__$1 = state_21302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21302__$1,inst_21300);
} else {
if((state_val_21303 === (12))){
var state_21302__$1 = state_21302;
var statearr_21310_21331 = state_21302__$1;
(statearr_21310_21331[(2)] = null);

(statearr_21310_21331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (2))){
var state_21302__$1 = state_21302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21302__$1,(4),from);
} else {
if((state_val_21303 === (11))){
var inst_21291 = (state_21302[(2)]);
var state_21302__$1 = state_21302;
if(cljs.core.truth_(inst_21291)){
var statearr_21311_21332 = state_21302__$1;
(statearr_21311_21332[(1)] = (12));

} else {
var statearr_21312_21333 = state_21302__$1;
(statearr_21312_21333[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (9))){
var state_21302__$1 = state_21302;
var statearr_21313_21334 = state_21302__$1;
(statearr_21313_21334[(2)] = null);

(statearr_21313_21334[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (5))){
var state_21302__$1 = state_21302;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21314_21335 = state_21302__$1;
(statearr_21314_21335[(1)] = (8));

} else {
var statearr_21315_21336 = state_21302__$1;
(statearr_21315_21336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (14))){
var inst_21296 = (state_21302[(2)]);
var state_21302__$1 = state_21302;
var statearr_21316_21337 = state_21302__$1;
(statearr_21316_21337[(2)] = inst_21296);

(statearr_21316_21337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (10))){
var inst_21288 = (state_21302[(2)]);
var state_21302__$1 = state_21302;
var statearr_21317_21338 = state_21302__$1;
(statearr_21317_21338[(2)] = inst_21288);

(statearr_21317_21338[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21303 === (8))){
var inst_21285 = cljs.core.async.close_BANG_.call(null,to);
var state_21302__$1 = state_21302;
var statearr_21318_21339 = state_21302__$1;
(statearr_21318_21339[(2)] = inst_21285);

(statearr_21318_21339[(1)] = (10));


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
var cljs$core$async$state_machine__21106__auto__ = null;
var cljs$core$async$state_machine__21106__auto____0 = (function (){
var statearr_21319 = [null,null,null,null,null,null,null,null];
(statearr_21319[(0)] = cljs$core$async$state_machine__21106__auto__);

(statearr_21319[(1)] = (1));

return statearr_21319;
});
var cljs$core$async$state_machine__21106__auto____1 = (function (state_21302){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_21302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e21320){var ex__21109__auto__ = e21320;
var statearr_21321_21340 = state_21302;
(statearr_21321_21340[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_21302[(4)]))){
var statearr_21322_21341 = state_21302;
(statearr_21322_21341[(1)] = cljs.core.first.call(null,(state_21302[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21342 = state_21302;
state_21302 = G__21342;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$state_machine__21106__auto__ = function(state_21302){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21106__auto____1.call(this,state_21302);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21106__auto____0;
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21106__auto____1;
return cljs$core$async$state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_21323 = f__21180__auto__.call(null);
(statearr_21323[(6)] = c__21179__auto___21325);

return statearr_21323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
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
var process__$1 = (function (p__21343){
var vec__21344 = p__21343;
var v = cljs.core.nth.call(null,vec__21344,(0),null);
var p = cljs.core.nth.call(null,vec__21344,(1),null);
var job = vec__21344;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__21179__auto___21520 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_21351){
var state_val_21352 = (state_21351[(1)]);
if((state_val_21352 === (1))){
var state_21351__$1 = state_21351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21351__$1,(2),res,v);
} else {
if((state_val_21352 === (2))){
var inst_21348 = (state_21351[(2)]);
var inst_21349 = cljs.core.async.close_BANG_.call(null,res);
var state_21351__$1 = (function (){var statearr_21353 = state_21351;
(statearr_21353[(7)] = inst_21348);

return statearr_21353;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21351__$1,inst_21349);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0 = (function (){
var statearr_21354 = [null,null,null,null,null,null,null,null];
(statearr_21354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__);

(statearr_21354[(1)] = (1));

return statearr_21354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1 = (function (state_21351){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_21351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e21355){var ex__21109__auto__ = e21355;
var statearr_21356_21521 = state_21351;
(statearr_21356_21521[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_21351[(4)]))){
var statearr_21357_21522 = state_21351;
(statearr_21357_21522[(1)] = cljs.core.first.call(null,(state_21351[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21523 = state_21351;
state_21351 = G__21523;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__ = function(state_21351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1.call(this,state_21351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_21358 = f__21180__auto__.call(null);
(statearr_21358[(6)] = c__21179__auto___21520);

return statearr_21358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__21359){
var vec__21360 = p__21359;
var v = cljs.core.nth.call(null,vec__21360,(0),null);
var p = cljs.core.nth.call(null,vec__21360,(1),null);
var job = vec__21360;
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
var n__5636__auto___21524 = n;
var __21525 = (0);
while(true){
if((__21525 < n__5636__auto___21524)){
var G__21363_21526 = type;
var G__21363_21527__$1 = (((G__21363_21526 instanceof cljs.core.Keyword))?G__21363_21526.fqn:null);
switch (G__21363_21527__$1) {
case "compute":
var c__21179__auto___21529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21525,c__21179__auto___21529,G__21363_21526,G__21363_21527__$1,n__5636__auto___21524,jobs,results,process__$1,async){
return (function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = ((function (__21525,c__21179__auto___21529,G__21363_21526,G__21363_21527__$1,n__5636__auto___21524,jobs,results,process__$1,async){
return (function (state_21376){
var state_val_21377 = (state_21376[(1)]);
if((state_val_21377 === (1))){
var state_21376__$1 = state_21376;
var statearr_21378_21530 = state_21376__$1;
(statearr_21378_21530[(2)] = null);

(statearr_21378_21530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21377 === (2))){
var state_21376__$1 = state_21376;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21376__$1,(4),jobs);
} else {
if((state_val_21377 === (3))){
var inst_21374 = (state_21376[(2)]);
var state_21376__$1 = state_21376;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21376__$1,inst_21374);
} else {
if((state_val_21377 === (4))){
var inst_21366 = (state_21376[(2)]);
var inst_21367 = process__$1.call(null,inst_21366);
var state_21376__$1 = state_21376;
if(cljs.core.truth_(inst_21367)){
var statearr_21379_21531 = state_21376__$1;
(statearr_21379_21531[(1)] = (5));

} else {
var statearr_21380_21532 = state_21376__$1;
(statearr_21380_21532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21377 === (5))){
var state_21376__$1 = state_21376;
var statearr_21381_21533 = state_21376__$1;
(statearr_21381_21533[(2)] = null);

(statearr_21381_21533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21377 === (6))){
var state_21376__$1 = state_21376;
var statearr_21382_21534 = state_21376__$1;
(statearr_21382_21534[(2)] = null);

(statearr_21382_21534[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21377 === (7))){
var inst_21372 = (state_21376[(2)]);
var state_21376__$1 = state_21376;
var statearr_21383_21535 = state_21376__$1;
(statearr_21383_21535[(2)] = inst_21372);

(statearr_21383_21535[(1)] = (3));


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
});})(__21525,c__21179__auto___21529,G__21363_21526,G__21363_21527__$1,n__5636__auto___21524,jobs,results,process__$1,async))
;
return ((function (__21525,switch__21105__auto__,c__21179__auto___21529,G__21363_21526,G__21363_21527__$1,n__5636__auto___21524,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0 = (function (){
var statearr_21384 = [null,null,null,null,null,null,null];
(statearr_21384[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__);

(statearr_21384[(1)] = (1));

return statearr_21384;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1 = (function (state_21376){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_21376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e21385){var ex__21109__auto__ = e21385;
var statearr_21386_21536 = state_21376;
(statearr_21386_21536[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_21376[(4)]))){
var statearr_21387_21537 = state_21376;
(statearr_21387_21537[(1)] = cljs.core.first.call(null,(state_21376[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21538 = state_21376;
state_21376 = G__21538;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__ = function(state_21376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1.call(this,state_21376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__;
})()
;})(__21525,switch__21105__auto__,c__21179__auto___21529,G__21363_21526,G__21363_21527__$1,n__5636__auto___21524,jobs,results,process__$1,async))
})();
var state__21181__auto__ = (function (){var statearr_21388 = f__21180__auto__.call(null);
(statearr_21388[(6)] = c__21179__auto___21529);

return statearr_21388;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
});})(__21525,c__21179__auto___21529,G__21363_21526,G__21363_21527__$1,n__5636__auto___21524,jobs,results,process__$1,async))
);


break;
case "async":
var c__21179__auto___21539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__21525,c__21179__auto___21539,G__21363_21526,G__21363_21527__$1,n__5636__auto___21524,jobs,results,process__$1,async){
return (function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = ((function (__21525,c__21179__auto___21539,G__21363_21526,G__21363_21527__$1,n__5636__auto___21524,jobs,results,process__$1,async){
return (function (state_21401){
var state_val_21402 = (state_21401[(1)]);
if((state_val_21402 === (1))){
var state_21401__$1 = state_21401;
var statearr_21403_21540 = state_21401__$1;
(statearr_21403_21540[(2)] = null);

(statearr_21403_21540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (2))){
var state_21401__$1 = state_21401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21401__$1,(4),jobs);
} else {
if((state_val_21402 === (3))){
var inst_21399 = (state_21401[(2)]);
var state_21401__$1 = state_21401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21401__$1,inst_21399);
} else {
if((state_val_21402 === (4))){
var inst_21391 = (state_21401[(2)]);
var inst_21392 = async.call(null,inst_21391);
var state_21401__$1 = state_21401;
if(cljs.core.truth_(inst_21392)){
var statearr_21404_21541 = state_21401__$1;
(statearr_21404_21541[(1)] = (5));

} else {
var statearr_21405_21542 = state_21401__$1;
(statearr_21405_21542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (5))){
var state_21401__$1 = state_21401;
var statearr_21406_21543 = state_21401__$1;
(statearr_21406_21543[(2)] = null);

(statearr_21406_21543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (6))){
var state_21401__$1 = state_21401;
var statearr_21407_21544 = state_21401__$1;
(statearr_21407_21544[(2)] = null);

(statearr_21407_21544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21402 === (7))){
var inst_21397 = (state_21401[(2)]);
var state_21401__$1 = state_21401;
var statearr_21408_21545 = state_21401__$1;
(statearr_21408_21545[(2)] = inst_21397);

(statearr_21408_21545[(1)] = (3));


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
});})(__21525,c__21179__auto___21539,G__21363_21526,G__21363_21527__$1,n__5636__auto___21524,jobs,results,process__$1,async))
;
return ((function (__21525,switch__21105__auto__,c__21179__auto___21539,G__21363_21526,G__21363_21527__$1,n__5636__auto___21524,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0 = (function (){
var statearr_21409 = [null,null,null,null,null,null,null];
(statearr_21409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__);

(statearr_21409[(1)] = (1));

return statearr_21409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1 = (function (state_21401){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_21401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e21410){var ex__21109__auto__ = e21410;
var statearr_21411_21546 = state_21401;
(statearr_21411_21546[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_21401[(4)]))){
var statearr_21412_21547 = state_21401;
(statearr_21412_21547[(1)] = cljs.core.first.call(null,(state_21401[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21548 = state_21401;
state_21401 = G__21548;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__ = function(state_21401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1.call(this,state_21401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__;
})()
;})(__21525,switch__21105__auto__,c__21179__auto___21539,G__21363_21526,G__21363_21527__$1,n__5636__auto___21524,jobs,results,process__$1,async))
})();
var state__21181__auto__ = (function (){var statearr_21413 = f__21180__auto__.call(null);
(statearr_21413[(6)] = c__21179__auto___21539);

return statearr_21413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
});})(__21525,c__21179__auto___21539,G__21363_21526,G__21363_21527__$1,n__5636__auto___21524,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__21363_21527__$1)].join('')));

}

var G__21549 = (__21525 + (1));
__21525 = G__21549;
continue;
} else {
}
break;
}

var c__21179__auto___21550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_21435){
var state_val_21436 = (state_21435[(1)]);
if((state_val_21436 === (7))){
var inst_21431 = (state_21435[(2)]);
var state_21435__$1 = state_21435;
var statearr_21437_21551 = state_21435__$1;
(statearr_21437_21551[(2)] = inst_21431);

(statearr_21437_21551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (1))){
var state_21435__$1 = state_21435;
var statearr_21438_21552 = state_21435__$1;
(statearr_21438_21552[(2)] = null);

(statearr_21438_21552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (4))){
var inst_21416 = (state_21435[(7)]);
var inst_21416__$1 = (state_21435[(2)]);
var inst_21417 = (inst_21416__$1 == null);
var state_21435__$1 = (function (){var statearr_21439 = state_21435;
(statearr_21439[(7)] = inst_21416__$1);

return statearr_21439;
})();
if(cljs.core.truth_(inst_21417)){
var statearr_21440_21553 = state_21435__$1;
(statearr_21440_21553[(1)] = (5));

} else {
var statearr_21441_21554 = state_21435__$1;
(statearr_21441_21554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (6))){
var inst_21421 = (state_21435[(8)]);
var inst_21416 = (state_21435[(7)]);
var inst_21421__$1 = cljs.core.async.chan.call(null,(1));
var inst_21422 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_21423 = [inst_21416,inst_21421__$1];
var inst_21424 = (new cljs.core.PersistentVector(null,2,(5),inst_21422,inst_21423,null));
var state_21435__$1 = (function (){var statearr_21442 = state_21435;
(statearr_21442[(8)] = inst_21421__$1);

return statearr_21442;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21435__$1,(8),jobs,inst_21424);
} else {
if((state_val_21436 === (3))){
var inst_21433 = (state_21435[(2)]);
var state_21435__$1 = state_21435;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21435__$1,inst_21433);
} else {
if((state_val_21436 === (2))){
var state_21435__$1 = state_21435;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21435__$1,(4),from);
} else {
if((state_val_21436 === (9))){
var inst_21428 = (state_21435[(2)]);
var state_21435__$1 = (function (){var statearr_21443 = state_21435;
(statearr_21443[(9)] = inst_21428);

return statearr_21443;
})();
var statearr_21444_21555 = state_21435__$1;
(statearr_21444_21555[(2)] = null);

(statearr_21444_21555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (5))){
var inst_21419 = cljs.core.async.close_BANG_.call(null,jobs);
var state_21435__$1 = state_21435;
var statearr_21445_21556 = state_21435__$1;
(statearr_21445_21556[(2)] = inst_21419);

(statearr_21445_21556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21436 === (8))){
var inst_21421 = (state_21435[(8)]);
var inst_21426 = (state_21435[(2)]);
var state_21435__$1 = (function (){var statearr_21446 = state_21435;
(statearr_21446[(10)] = inst_21426);

return statearr_21446;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21435__$1,(9),results,inst_21421);
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
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0 = (function (){
var statearr_21447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__);

(statearr_21447[(1)] = (1));

return statearr_21447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1 = (function (state_21435){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_21435);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e21448){var ex__21109__auto__ = e21448;
var statearr_21449_21557 = state_21435;
(statearr_21449_21557[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_21435[(4)]))){
var statearr_21450_21558 = state_21435;
(statearr_21450_21558[(1)] = cljs.core.first.call(null,(state_21435[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21559 = state_21435;
state_21435 = G__21559;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__ = function(state_21435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1.call(this,state_21435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_21451 = f__21180__auto__.call(null);
(statearr_21451[(6)] = c__21179__auto___21550);

return statearr_21451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));


var c__21179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_21489){
var state_val_21490 = (state_21489[(1)]);
if((state_val_21490 === (7))){
var inst_21485 = (state_21489[(2)]);
var state_21489__$1 = state_21489;
var statearr_21491_21560 = state_21489__$1;
(statearr_21491_21560[(2)] = inst_21485);

(statearr_21491_21560[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (20))){
var state_21489__$1 = state_21489;
var statearr_21492_21561 = state_21489__$1;
(statearr_21492_21561[(2)] = null);

(statearr_21492_21561[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (1))){
var state_21489__$1 = state_21489;
var statearr_21493_21562 = state_21489__$1;
(statearr_21493_21562[(2)] = null);

(statearr_21493_21562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (4))){
var inst_21454 = (state_21489[(7)]);
var inst_21454__$1 = (state_21489[(2)]);
var inst_21455 = (inst_21454__$1 == null);
var state_21489__$1 = (function (){var statearr_21494 = state_21489;
(statearr_21494[(7)] = inst_21454__$1);

return statearr_21494;
})();
if(cljs.core.truth_(inst_21455)){
var statearr_21495_21563 = state_21489__$1;
(statearr_21495_21563[(1)] = (5));

} else {
var statearr_21496_21564 = state_21489__$1;
(statearr_21496_21564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (15))){
var inst_21467 = (state_21489[(8)]);
var state_21489__$1 = state_21489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21489__$1,(18),to,inst_21467);
} else {
if((state_val_21490 === (21))){
var inst_21480 = (state_21489[(2)]);
var state_21489__$1 = state_21489;
var statearr_21497_21565 = state_21489__$1;
(statearr_21497_21565[(2)] = inst_21480);

(statearr_21497_21565[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (13))){
var inst_21482 = (state_21489[(2)]);
var state_21489__$1 = (function (){var statearr_21498 = state_21489;
(statearr_21498[(9)] = inst_21482);

return statearr_21498;
})();
var statearr_21499_21566 = state_21489__$1;
(statearr_21499_21566[(2)] = null);

(statearr_21499_21566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (6))){
var inst_21454 = (state_21489[(7)]);
var state_21489__$1 = state_21489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21489__$1,(11),inst_21454);
} else {
if((state_val_21490 === (17))){
var inst_21475 = (state_21489[(2)]);
var state_21489__$1 = state_21489;
if(cljs.core.truth_(inst_21475)){
var statearr_21500_21567 = state_21489__$1;
(statearr_21500_21567[(1)] = (19));

} else {
var statearr_21501_21568 = state_21489__$1;
(statearr_21501_21568[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (3))){
var inst_21487 = (state_21489[(2)]);
var state_21489__$1 = state_21489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21489__$1,inst_21487);
} else {
if((state_val_21490 === (12))){
var inst_21464 = (state_21489[(10)]);
var state_21489__$1 = state_21489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21489__$1,(14),inst_21464);
} else {
if((state_val_21490 === (2))){
var state_21489__$1 = state_21489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21489__$1,(4),results);
} else {
if((state_val_21490 === (19))){
var state_21489__$1 = state_21489;
var statearr_21502_21569 = state_21489__$1;
(statearr_21502_21569[(2)] = null);

(statearr_21502_21569[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (11))){
var inst_21464 = (state_21489[(2)]);
var state_21489__$1 = (function (){var statearr_21503 = state_21489;
(statearr_21503[(10)] = inst_21464);

return statearr_21503;
})();
var statearr_21504_21570 = state_21489__$1;
(statearr_21504_21570[(2)] = null);

(statearr_21504_21570[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (9))){
var state_21489__$1 = state_21489;
var statearr_21505_21571 = state_21489__$1;
(statearr_21505_21571[(2)] = null);

(statearr_21505_21571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (5))){
var state_21489__$1 = state_21489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21506_21572 = state_21489__$1;
(statearr_21506_21572[(1)] = (8));

} else {
var statearr_21507_21573 = state_21489__$1;
(statearr_21507_21573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (14))){
var inst_21469 = (state_21489[(11)]);
var inst_21467 = (state_21489[(8)]);
var inst_21467__$1 = (state_21489[(2)]);
var inst_21468 = (inst_21467__$1 == null);
var inst_21469__$1 = cljs.core.not.call(null,inst_21468);
var state_21489__$1 = (function (){var statearr_21508 = state_21489;
(statearr_21508[(11)] = inst_21469__$1);

(statearr_21508[(8)] = inst_21467__$1);

return statearr_21508;
})();
if(inst_21469__$1){
var statearr_21509_21574 = state_21489__$1;
(statearr_21509_21574[(1)] = (15));

} else {
var statearr_21510_21575 = state_21489__$1;
(statearr_21510_21575[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (16))){
var inst_21469 = (state_21489[(11)]);
var state_21489__$1 = state_21489;
var statearr_21511_21576 = state_21489__$1;
(statearr_21511_21576[(2)] = inst_21469);

(statearr_21511_21576[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (10))){
var inst_21461 = (state_21489[(2)]);
var state_21489__$1 = state_21489;
var statearr_21512_21577 = state_21489__$1;
(statearr_21512_21577[(2)] = inst_21461);

(statearr_21512_21577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (18))){
var inst_21472 = (state_21489[(2)]);
var state_21489__$1 = state_21489;
var statearr_21513_21578 = state_21489__$1;
(statearr_21513_21578[(2)] = inst_21472);

(statearr_21513_21578[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21490 === (8))){
var inst_21458 = cljs.core.async.close_BANG_.call(null,to);
var state_21489__$1 = state_21489;
var statearr_21514_21579 = state_21489__$1;
(statearr_21514_21579[(2)] = inst_21458);

(statearr_21514_21579[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0 = (function (){
var statearr_21515 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21515[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__);

(statearr_21515[(1)] = (1));

return statearr_21515;
});
var cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1 = (function (state_21489){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_21489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e21516){var ex__21109__auto__ = e21516;
var statearr_21517_21580 = state_21489;
(statearr_21517_21580[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_21489[(4)]))){
var statearr_21518_21581 = state_21489;
(statearr_21518_21581[(1)] = cljs.core.first.call(null,(state_21489[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21582 = state_21489;
state_21489 = G__21582;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__ = function(state_21489){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1.call(this,state_21489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__21106__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_21519 = f__21180__auto__.call(null);
(statearr_21519[(6)] = c__21179__auto__);

return statearr_21519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));

return c__21179__auto__;
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
var G__21584 = arguments.length;
switch (G__21584) {
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
var G__21587 = arguments.length;
switch (G__21587) {
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
var G__21590 = arguments.length;
switch (G__21590) {
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
var c__21179__auto___21640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_21616){
var state_val_21617 = (state_21616[(1)]);
if((state_val_21617 === (7))){
var inst_21612 = (state_21616[(2)]);
var state_21616__$1 = state_21616;
var statearr_21618_21641 = state_21616__$1;
(statearr_21618_21641[(2)] = inst_21612);

(statearr_21618_21641[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (1))){
var state_21616__$1 = state_21616;
var statearr_21619_21642 = state_21616__$1;
(statearr_21619_21642[(2)] = null);

(statearr_21619_21642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (4))){
var inst_21593 = (state_21616[(7)]);
var inst_21593__$1 = (state_21616[(2)]);
var inst_21594 = (inst_21593__$1 == null);
var state_21616__$1 = (function (){var statearr_21620 = state_21616;
(statearr_21620[(7)] = inst_21593__$1);

return statearr_21620;
})();
if(cljs.core.truth_(inst_21594)){
var statearr_21621_21643 = state_21616__$1;
(statearr_21621_21643[(1)] = (5));

} else {
var statearr_21622_21644 = state_21616__$1;
(statearr_21622_21644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (13))){
var state_21616__$1 = state_21616;
var statearr_21623_21645 = state_21616__$1;
(statearr_21623_21645[(2)] = null);

(statearr_21623_21645[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (6))){
var inst_21593 = (state_21616[(7)]);
var inst_21599 = p.call(null,inst_21593);
var state_21616__$1 = state_21616;
if(cljs.core.truth_(inst_21599)){
var statearr_21624_21646 = state_21616__$1;
(statearr_21624_21646[(1)] = (9));

} else {
var statearr_21625_21647 = state_21616__$1;
(statearr_21625_21647[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (3))){
var inst_21614 = (state_21616[(2)]);
var state_21616__$1 = state_21616;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21616__$1,inst_21614);
} else {
if((state_val_21617 === (12))){
var state_21616__$1 = state_21616;
var statearr_21626_21648 = state_21616__$1;
(statearr_21626_21648[(2)] = null);

(statearr_21626_21648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (2))){
var state_21616__$1 = state_21616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21616__$1,(4),ch);
} else {
if((state_val_21617 === (11))){
var inst_21593 = (state_21616[(7)]);
var inst_21603 = (state_21616[(2)]);
var state_21616__$1 = state_21616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21616__$1,(8),inst_21603,inst_21593);
} else {
if((state_val_21617 === (9))){
var state_21616__$1 = state_21616;
var statearr_21627_21649 = state_21616__$1;
(statearr_21627_21649[(2)] = tc);

(statearr_21627_21649[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (5))){
var inst_21596 = cljs.core.async.close_BANG_.call(null,tc);
var inst_21597 = cljs.core.async.close_BANG_.call(null,fc);
var state_21616__$1 = (function (){var statearr_21628 = state_21616;
(statearr_21628[(8)] = inst_21596);

return statearr_21628;
})();
var statearr_21629_21650 = state_21616__$1;
(statearr_21629_21650[(2)] = inst_21597);

(statearr_21629_21650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (14))){
var inst_21610 = (state_21616[(2)]);
var state_21616__$1 = state_21616;
var statearr_21630_21651 = state_21616__$1;
(statearr_21630_21651[(2)] = inst_21610);

(statearr_21630_21651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (10))){
var state_21616__$1 = state_21616;
var statearr_21631_21652 = state_21616__$1;
(statearr_21631_21652[(2)] = fc);

(statearr_21631_21652[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21617 === (8))){
var inst_21605 = (state_21616[(2)]);
var state_21616__$1 = state_21616;
if(cljs.core.truth_(inst_21605)){
var statearr_21632_21653 = state_21616__$1;
(statearr_21632_21653[(1)] = (12));

} else {
var statearr_21633_21654 = state_21616__$1;
(statearr_21633_21654[(1)] = (13));

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
var cljs$core$async$state_machine__21106__auto__ = null;
var cljs$core$async$state_machine__21106__auto____0 = (function (){
var statearr_21634 = [null,null,null,null,null,null,null,null,null];
(statearr_21634[(0)] = cljs$core$async$state_machine__21106__auto__);

(statearr_21634[(1)] = (1));

return statearr_21634;
});
var cljs$core$async$state_machine__21106__auto____1 = (function (state_21616){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_21616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e21635){var ex__21109__auto__ = e21635;
var statearr_21636_21655 = state_21616;
(statearr_21636_21655[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_21616[(4)]))){
var statearr_21637_21656 = state_21616;
(statearr_21637_21656[(1)] = cljs.core.first.call(null,(state_21616[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21657 = state_21616;
state_21616 = G__21657;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$state_machine__21106__auto__ = function(state_21616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21106__auto____1.call(this,state_21616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21106__auto____0;
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21106__auto____1;
return cljs$core$async$state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_21638 = f__21180__auto__.call(null);
(statearr_21638[(6)] = c__21179__auto___21640);

return statearr_21638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
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
var c__21179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_21679){
var state_val_21680 = (state_21679[(1)]);
if((state_val_21680 === (7))){
var inst_21675 = (state_21679[(2)]);
var state_21679__$1 = state_21679;
var statearr_21681_21700 = state_21679__$1;
(statearr_21681_21700[(2)] = inst_21675);

(statearr_21681_21700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (1))){
var inst_21658 = init;
var inst_21659 = inst_21658;
var state_21679__$1 = (function (){var statearr_21682 = state_21679;
(statearr_21682[(7)] = inst_21659);

return statearr_21682;
})();
var statearr_21683_21701 = state_21679__$1;
(statearr_21683_21701[(2)] = null);

(statearr_21683_21701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (4))){
var inst_21662 = (state_21679[(8)]);
var inst_21662__$1 = (state_21679[(2)]);
var inst_21663 = (inst_21662__$1 == null);
var state_21679__$1 = (function (){var statearr_21684 = state_21679;
(statearr_21684[(8)] = inst_21662__$1);

return statearr_21684;
})();
if(cljs.core.truth_(inst_21663)){
var statearr_21685_21702 = state_21679__$1;
(statearr_21685_21702[(1)] = (5));

} else {
var statearr_21686_21703 = state_21679__$1;
(statearr_21686_21703[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (6))){
var inst_21659 = (state_21679[(7)]);
var inst_21666 = (state_21679[(9)]);
var inst_21662 = (state_21679[(8)]);
var inst_21666__$1 = f.call(null,inst_21659,inst_21662);
var inst_21667 = cljs.core.reduced_QMARK_.call(null,inst_21666__$1);
var state_21679__$1 = (function (){var statearr_21687 = state_21679;
(statearr_21687[(9)] = inst_21666__$1);

return statearr_21687;
})();
if(inst_21667){
var statearr_21688_21704 = state_21679__$1;
(statearr_21688_21704[(1)] = (8));

} else {
var statearr_21689_21705 = state_21679__$1;
(statearr_21689_21705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (3))){
var inst_21677 = (state_21679[(2)]);
var state_21679__$1 = state_21679;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21679__$1,inst_21677);
} else {
if((state_val_21680 === (2))){
var state_21679__$1 = state_21679;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21679__$1,(4),ch);
} else {
if((state_val_21680 === (9))){
var inst_21666 = (state_21679[(9)]);
var inst_21659 = inst_21666;
var state_21679__$1 = (function (){var statearr_21690 = state_21679;
(statearr_21690[(7)] = inst_21659);

return statearr_21690;
})();
var statearr_21691_21706 = state_21679__$1;
(statearr_21691_21706[(2)] = null);

(statearr_21691_21706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (5))){
var inst_21659 = (state_21679[(7)]);
var state_21679__$1 = state_21679;
var statearr_21692_21707 = state_21679__$1;
(statearr_21692_21707[(2)] = inst_21659);

(statearr_21692_21707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (10))){
var inst_21673 = (state_21679[(2)]);
var state_21679__$1 = state_21679;
var statearr_21693_21708 = state_21679__$1;
(statearr_21693_21708[(2)] = inst_21673);

(statearr_21693_21708[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21680 === (8))){
var inst_21666 = (state_21679[(9)]);
var inst_21669 = cljs.core.deref.call(null,inst_21666);
var state_21679__$1 = state_21679;
var statearr_21694_21709 = state_21679__$1;
(statearr_21694_21709[(2)] = inst_21669);

(statearr_21694_21709[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__21106__auto__ = null;
var cljs$core$async$reduce_$_state_machine__21106__auto____0 = (function (){
var statearr_21695 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21695[(0)] = cljs$core$async$reduce_$_state_machine__21106__auto__);

(statearr_21695[(1)] = (1));

return statearr_21695;
});
var cljs$core$async$reduce_$_state_machine__21106__auto____1 = (function (state_21679){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_21679);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e21696){var ex__21109__auto__ = e21696;
var statearr_21697_21710 = state_21679;
(statearr_21697_21710[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_21679[(4)]))){
var statearr_21698_21711 = state_21679;
(statearr_21698_21711[(1)] = cljs.core.first.call(null,(state_21679[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21712 = state_21679;
state_21679 = G__21712;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__21106__auto__ = function(state_21679){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__21106__auto____1.call(this,state_21679);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__21106__auto____0;
cljs$core$async$reduce_$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__21106__auto____1;
return cljs$core$async$reduce_$_state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_21699 = f__21180__auto__.call(null);
(statearr_21699[(6)] = c__21179__auto__);

return statearr_21699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));

return c__21179__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__21179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_21718){
var state_val_21719 = (state_21718[(1)]);
if((state_val_21719 === (1))){
var inst_21713 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_21718__$1 = state_21718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21718__$1,(2),inst_21713);
} else {
if((state_val_21719 === (2))){
var inst_21715 = (state_21718[(2)]);
var inst_21716 = f__$1.call(null,inst_21715);
var state_21718__$1 = state_21718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21718__$1,inst_21716);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__21106__auto__ = null;
var cljs$core$async$transduce_$_state_machine__21106__auto____0 = (function (){
var statearr_21720 = [null,null,null,null,null,null,null];
(statearr_21720[(0)] = cljs$core$async$transduce_$_state_machine__21106__auto__);

(statearr_21720[(1)] = (1));

return statearr_21720;
});
var cljs$core$async$transduce_$_state_machine__21106__auto____1 = (function (state_21718){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_21718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e21721){var ex__21109__auto__ = e21721;
var statearr_21722_21725 = state_21718;
(statearr_21722_21725[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_21718[(4)]))){
var statearr_21723_21726 = state_21718;
(statearr_21723_21726[(1)] = cljs.core.first.call(null,(state_21718[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21727 = state_21718;
state_21718 = G__21727;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__21106__auto__ = function(state_21718){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__21106__auto____1.call(this,state_21718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__21106__auto____0;
cljs$core$async$transduce_$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__21106__auto____1;
return cljs$core$async$transduce_$_state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_21724 = f__21180__auto__.call(null);
(statearr_21724[(6)] = c__21179__auto__);

return statearr_21724;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));

return c__21179__auto__;
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
var G__21729 = arguments.length;
switch (G__21729) {
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
var c__21179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_21754){
var state_val_21755 = (state_21754[(1)]);
if((state_val_21755 === (7))){
var inst_21736 = (state_21754[(2)]);
var state_21754__$1 = state_21754;
var statearr_21756_21778 = state_21754__$1;
(statearr_21756_21778[(2)] = inst_21736);

(statearr_21756_21778[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21755 === (1))){
var inst_21730 = cljs.core.seq.call(null,coll);
var inst_21731 = inst_21730;
var state_21754__$1 = (function (){var statearr_21757 = state_21754;
(statearr_21757[(7)] = inst_21731);

return statearr_21757;
})();
var statearr_21758_21779 = state_21754__$1;
(statearr_21758_21779[(2)] = null);

(statearr_21758_21779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21755 === (4))){
var inst_21731 = (state_21754[(7)]);
var inst_21734 = cljs.core.first.call(null,inst_21731);
var state_21754__$1 = state_21754;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21754__$1,(7),ch,inst_21734);
} else {
if((state_val_21755 === (13))){
var inst_21748 = (state_21754[(2)]);
var state_21754__$1 = state_21754;
var statearr_21759_21780 = state_21754__$1;
(statearr_21759_21780[(2)] = inst_21748);

(statearr_21759_21780[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21755 === (6))){
var inst_21739 = (state_21754[(2)]);
var state_21754__$1 = state_21754;
if(cljs.core.truth_(inst_21739)){
var statearr_21760_21781 = state_21754__$1;
(statearr_21760_21781[(1)] = (8));

} else {
var statearr_21761_21782 = state_21754__$1;
(statearr_21761_21782[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21755 === (3))){
var inst_21752 = (state_21754[(2)]);
var state_21754__$1 = state_21754;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21754__$1,inst_21752);
} else {
if((state_val_21755 === (12))){
var state_21754__$1 = state_21754;
var statearr_21762_21783 = state_21754__$1;
(statearr_21762_21783[(2)] = null);

(statearr_21762_21783[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21755 === (2))){
var inst_21731 = (state_21754[(7)]);
var state_21754__$1 = state_21754;
if(cljs.core.truth_(inst_21731)){
var statearr_21763_21784 = state_21754__$1;
(statearr_21763_21784[(1)] = (4));

} else {
var statearr_21764_21785 = state_21754__$1;
(statearr_21764_21785[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21755 === (11))){
var inst_21745 = cljs.core.async.close_BANG_.call(null,ch);
var state_21754__$1 = state_21754;
var statearr_21765_21786 = state_21754__$1;
(statearr_21765_21786[(2)] = inst_21745);

(statearr_21765_21786[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21755 === (9))){
var state_21754__$1 = state_21754;
if(cljs.core.truth_(close_QMARK_)){
var statearr_21766_21787 = state_21754__$1;
(statearr_21766_21787[(1)] = (11));

} else {
var statearr_21767_21788 = state_21754__$1;
(statearr_21767_21788[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21755 === (5))){
var inst_21731 = (state_21754[(7)]);
var state_21754__$1 = state_21754;
var statearr_21768_21789 = state_21754__$1;
(statearr_21768_21789[(2)] = inst_21731);

(statearr_21768_21789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21755 === (10))){
var inst_21750 = (state_21754[(2)]);
var state_21754__$1 = state_21754;
var statearr_21769_21790 = state_21754__$1;
(statearr_21769_21790[(2)] = inst_21750);

(statearr_21769_21790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21755 === (8))){
var inst_21731 = (state_21754[(7)]);
var inst_21741 = cljs.core.next.call(null,inst_21731);
var inst_21731__$1 = inst_21741;
var state_21754__$1 = (function (){var statearr_21770 = state_21754;
(statearr_21770[(7)] = inst_21731__$1);

return statearr_21770;
})();
var statearr_21771_21791 = state_21754__$1;
(statearr_21771_21791[(2)] = null);

(statearr_21771_21791[(1)] = (2));


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
var cljs$core$async$state_machine__21106__auto__ = null;
var cljs$core$async$state_machine__21106__auto____0 = (function (){
var statearr_21772 = [null,null,null,null,null,null,null,null];
(statearr_21772[(0)] = cljs$core$async$state_machine__21106__auto__);

(statearr_21772[(1)] = (1));

return statearr_21772;
});
var cljs$core$async$state_machine__21106__auto____1 = (function (state_21754){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_21754);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e21773){var ex__21109__auto__ = e21773;
var statearr_21774_21792 = state_21754;
(statearr_21774_21792[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_21754[(4)]))){
var statearr_21775_21793 = state_21754;
(statearr_21775_21793[(1)] = cljs.core.first.call(null,(state_21754[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21794 = state_21754;
state_21754 = G__21794;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$state_machine__21106__auto__ = function(state_21754){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21106__auto____1.call(this,state_21754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21106__auto____0;
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21106__auto____1;
return cljs$core$async$state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_21776 = f__21180__auto__.call(null);
(statearr_21776[(6)] = c__21179__auto__);

return statearr_21776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));

return c__21179__auto__;
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
var G__21796 = arguments.length;
switch (G__21796) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_21798 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_21798.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_21799 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_21799.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_21800 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_21800.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_21801 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_21801.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async21802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21802 = (function (ch,cs,meta21803){
this.ch = ch;
this.cs = cs;
this.meta21803 = meta21803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async21802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21804,meta21803__$1){
var self__ = this;
var _21804__$1 = this;
return (new cljs.core.async.t_cljs$core$async21802(self__.ch,self__.cs,meta21803__$1));
}));

(cljs.core.async.t_cljs$core$async21802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21804){
var self__ = this;
var _21804__$1 = this;
return self__.meta21803;
}));

(cljs.core.async.t_cljs$core$async21802.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21802.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async21802.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async21802.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async21802.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async21802.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async21802.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta21803","meta21803",-49107490,null)], null);
}));

(cljs.core.async.t_cljs$core$async21802.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async21802.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21802");

(cljs.core.async.t_cljs$core$async21802.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async21802");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async21802.
 */
cljs.core.async.__GT_t_cljs$core$async21802 = (function cljs$core$async$mult_$___GT_t_cljs$core$async21802(ch__$1,cs__$1,meta21803){
return (new cljs.core.async.t_cljs$core$async21802(ch__$1,cs__$1,meta21803));
});

}

return (new cljs.core.async.t_cljs$core$async21802(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__21179__auto___22021 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_21937){
var state_val_21938 = (state_21937[(1)]);
if((state_val_21938 === (7))){
var inst_21933 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
var statearr_21939_22022 = state_21937__$1;
(statearr_21939_22022[(2)] = inst_21933);

(statearr_21939_22022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (20))){
var inst_21838 = (state_21937[(7)]);
var inst_21850 = cljs.core.first.call(null,inst_21838);
var inst_21851 = cljs.core.nth.call(null,inst_21850,(0),null);
var inst_21852 = cljs.core.nth.call(null,inst_21850,(1),null);
var state_21937__$1 = (function (){var statearr_21940 = state_21937;
(statearr_21940[(8)] = inst_21851);

return statearr_21940;
})();
if(cljs.core.truth_(inst_21852)){
var statearr_21941_22023 = state_21937__$1;
(statearr_21941_22023[(1)] = (22));

} else {
var statearr_21942_22024 = state_21937__$1;
(statearr_21942_22024[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (27))){
var inst_21807 = (state_21937[(9)]);
var inst_21880 = (state_21937[(10)]);
var inst_21882 = (state_21937[(11)]);
var inst_21887 = (state_21937[(12)]);
var inst_21887__$1 = cljs.core._nth.call(null,inst_21880,inst_21882);
var inst_21888 = cljs.core.async.put_BANG_.call(null,inst_21887__$1,inst_21807,done);
var state_21937__$1 = (function (){var statearr_21943 = state_21937;
(statearr_21943[(12)] = inst_21887__$1);

return statearr_21943;
})();
if(cljs.core.truth_(inst_21888)){
var statearr_21944_22025 = state_21937__$1;
(statearr_21944_22025[(1)] = (30));

} else {
var statearr_21945_22026 = state_21937__$1;
(statearr_21945_22026[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (1))){
var state_21937__$1 = state_21937;
var statearr_21946_22027 = state_21937__$1;
(statearr_21946_22027[(2)] = null);

(statearr_21946_22027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (24))){
var inst_21838 = (state_21937[(7)]);
var inst_21857 = (state_21937[(2)]);
var inst_21858 = cljs.core.next.call(null,inst_21838);
var inst_21816 = inst_21858;
var inst_21817 = null;
var inst_21818 = (0);
var inst_21819 = (0);
var state_21937__$1 = (function (){var statearr_21947 = state_21937;
(statearr_21947[(13)] = inst_21819);

(statearr_21947[(14)] = inst_21816);

(statearr_21947[(15)] = inst_21818);

(statearr_21947[(16)] = inst_21817);

(statearr_21947[(17)] = inst_21857);

return statearr_21947;
})();
var statearr_21948_22028 = state_21937__$1;
(statearr_21948_22028[(2)] = null);

(statearr_21948_22028[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (39))){
var state_21937__$1 = state_21937;
var statearr_21952_22029 = state_21937__$1;
(statearr_21952_22029[(2)] = null);

(statearr_21952_22029[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (4))){
var inst_21807 = (state_21937[(9)]);
var inst_21807__$1 = (state_21937[(2)]);
var inst_21808 = (inst_21807__$1 == null);
var state_21937__$1 = (function (){var statearr_21953 = state_21937;
(statearr_21953[(9)] = inst_21807__$1);

return statearr_21953;
})();
if(cljs.core.truth_(inst_21808)){
var statearr_21954_22030 = state_21937__$1;
(statearr_21954_22030[(1)] = (5));

} else {
var statearr_21955_22031 = state_21937__$1;
(statearr_21955_22031[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (15))){
var inst_21819 = (state_21937[(13)]);
var inst_21816 = (state_21937[(14)]);
var inst_21818 = (state_21937[(15)]);
var inst_21817 = (state_21937[(16)]);
var inst_21834 = (state_21937[(2)]);
var inst_21835 = (inst_21819 + (1));
var tmp21949 = inst_21816;
var tmp21950 = inst_21818;
var tmp21951 = inst_21817;
var inst_21816__$1 = tmp21949;
var inst_21817__$1 = tmp21951;
var inst_21818__$1 = tmp21950;
var inst_21819__$1 = inst_21835;
var state_21937__$1 = (function (){var statearr_21956 = state_21937;
(statearr_21956[(13)] = inst_21819__$1);

(statearr_21956[(14)] = inst_21816__$1);

(statearr_21956[(15)] = inst_21818__$1);

(statearr_21956[(16)] = inst_21817__$1);

(statearr_21956[(18)] = inst_21834);

return statearr_21956;
})();
var statearr_21957_22032 = state_21937__$1;
(statearr_21957_22032[(2)] = null);

(statearr_21957_22032[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (21))){
var inst_21861 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
var statearr_21961_22033 = state_21937__$1;
(statearr_21961_22033[(2)] = inst_21861);

(statearr_21961_22033[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (31))){
var inst_21887 = (state_21937[(12)]);
var inst_21891 = cljs.core.async.untap_STAR_.call(null,m,inst_21887);
var state_21937__$1 = state_21937;
var statearr_21962_22034 = state_21937__$1;
(statearr_21962_22034[(2)] = inst_21891);

(statearr_21962_22034[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (32))){
var inst_21880 = (state_21937[(10)]);
var inst_21879 = (state_21937[(19)]);
var inst_21882 = (state_21937[(11)]);
var inst_21881 = (state_21937[(20)]);
var inst_21893 = (state_21937[(2)]);
var inst_21894 = (inst_21882 + (1));
var tmp21958 = inst_21880;
var tmp21959 = inst_21879;
var tmp21960 = inst_21881;
var inst_21879__$1 = tmp21959;
var inst_21880__$1 = tmp21958;
var inst_21881__$1 = tmp21960;
var inst_21882__$1 = inst_21894;
var state_21937__$1 = (function (){var statearr_21963 = state_21937;
(statearr_21963[(21)] = inst_21893);

(statearr_21963[(10)] = inst_21880__$1);

(statearr_21963[(19)] = inst_21879__$1);

(statearr_21963[(11)] = inst_21882__$1);

(statearr_21963[(20)] = inst_21881__$1);

return statearr_21963;
})();
var statearr_21964_22035 = state_21937__$1;
(statearr_21964_22035[(2)] = null);

(statearr_21964_22035[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (40))){
var inst_21906 = (state_21937[(22)]);
var inst_21910 = cljs.core.async.untap_STAR_.call(null,m,inst_21906);
var state_21937__$1 = state_21937;
var statearr_21965_22036 = state_21937__$1;
(statearr_21965_22036[(2)] = inst_21910);

(statearr_21965_22036[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (33))){
var inst_21897 = (state_21937[(23)]);
var inst_21899 = cljs.core.chunked_seq_QMARK_.call(null,inst_21897);
var state_21937__$1 = state_21937;
if(inst_21899){
var statearr_21966_22037 = state_21937__$1;
(statearr_21966_22037[(1)] = (36));

} else {
var statearr_21967_22038 = state_21937__$1;
(statearr_21967_22038[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (13))){
var inst_21828 = (state_21937[(24)]);
var inst_21831 = cljs.core.async.close_BANG_.call(null,inst_21828);
var state_21937__$1 = state_21937;
var statearr_21968_22039 = state_21937__$1;
(statearr_21968_22039[(2)] = inst_21831);

(statearr_21968_22039[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (22))){
var inst_21851 = (state_21937[(8)]);
var inst_21854 = cljs.core.async.close_BANG_.call(null,inst_21851);
var state_21937__$1 = state_21937;
var statearr_21969_22040 = state_21937__$1;
(statearr_21969_22040[(2)] = inst_21854);

(statearr_21969_22040[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (36))){
var inst_21897 = (state_21937[(23)]);
var inst_21901 = cljs.core.chunk_first.call(null,inst_21897);
var inst_21902 = cljs.core.chunk_rest.call(null,inst_21897);
var inst_21903 = cljs.core.count.call(null,inst_21901);
var inst_21879 = inst_21902;
var inst_21880 = inst_21901;
var inst_21881 = inst_21903;
var inst_21882 = (0);
var state_21937__$1 = (function (){var statearr_21970 = state_21937;
(statearr_21970[(10)] = inst_21880);

(statearr_21970[(19)] = inst_21879);

(statearr_21970[(11)] = inst_21882);

(statearr_21970[(20)] = inst_21881);

return statearr_21970;
})();
var statearr_21971_22041 = state_21937__$1;
(statearr_21971_22041[(2)] = null);

(statearr_21971_22041[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (41))){
var inst_21897 = (state_21937[(23)]);
var inst_21912 = (state_21937[(2)]);
var inst_21913 = cljs.core.next.call(null,inst_21897);
var inst_21879 = inst_21913;
var inst_21880 = null;
var inst_21881 = (0);
var inst_21882 = (0);
var state_21937__$1 = (function (){var statearr_21972 = state_21937;
(statearr_21972[(10)] = inst_21880);

(statearr_21972[(25)] = inst_21912);

(statearr_21972[(19)] = inst_21879);

(statearr_21972[(11)] = inst_21882);

(statearr_21972[(20)] = inst_21881);

return statearr_21972;
})();
var statearr_21973_22042 = state_21937__$1;
(statearr_21973_22042[(2)] = null);

(statearr_21973_22042[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (43))){
var state_21937__$1 = state_21937;
var statearr_21974_22043 = state_21937__$1;
(statearr_21974_22043[(2)] = null);

(statearr_21974_22043[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (29))){
var inst_21921 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
var statearr_21975_22044 = state_21937__$1;
(statearr_21975_22044[(2)] = inst_21921);

(statearr_21975_22044[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (44))){
var inst_21930 = (state_21937[(2)]);
var state_21937__$1 = (function (){var statearr_21976 = state_21937;
(statearr_21976[(26)] = inst_21930);

return statearr_21976;
})();
var statearr_21977_22045 = state_21937__$1;
(statearr_21977_22045[(2)] = null);

(statearr_21977_22045[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (6))){
var inst_21871 = (state_21937[(27)]);
var inst_21870 = cljs.core.deref.call(null,cs);
var inst_21871__$1 = cljs.core.keys.call(null,inst_21870);
var inst_21872 = cljs.core.count.call(null,inst_21871__$1);
var inst_21873 = cljs.core.reset_BANG_.call(null,dctr,inst_21872);
var inst_21878 = cljs.core.seq.call(null,inst_21871__$1);
var inst_21879 = inst_21878;
var inst_21880 = null;
var inst_21881 = (0);
var inst_21882 = (0);
var state_21937__$1 = (function (){var statearr_21978 = state_21937;
(statearr_21978[(28)] = inst_21873);

(statearr_21978[(10)] = inst_21880);

(statearr_21978[(27)] = inst_21871__$1);

(statearr_21978[(19)] = inst_21879);

(statearr_21978[(11)] = inst_21882);

(statearr_21978[(20)] = inst_21881);

return statearr_21978;
})();
var statearr_21979_22046 = state_21937__$1;
(statearr_21979_22046[(2)] = null);

(statearr_21979_22046[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (28))){
var inst_21897 = (state_21937[(23)]);
var inst_21879 = (state_21937[(19)]);
var inst_21897__$1 = cljs.core.seq.call(null,inst_21879);
var state_21937__$1 = (function (){var statearr_21980 = state_21937;
(statearr_21980[(23)] = inst_21897__$1);

return statearr_21980;
})();
if(inst_21897__$1){
var statearr_21981_22047 = state_21937__$1;
(statearr_21981_22047[(1)] = (33));

} else {
var statearr_21982_22048 = state_21937__$1;
(statearr_21982_22048[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (25))){
var inst_21882 = (state_21937[(11)]);
var inst_21881 = (state_21937[(20)]);
var inst_21884 = (inst_21882 < inst_21881);
var inst_21885 = inst_21884;
var state_21937__$1 = state_21937;
if(cljs.core.truth_(inst_21885)){
var statearr_21983_22049 = state_21937__$1;
(statearr_21983_22049[(1)] = (27));

} else {
var statearr_21984_22050 = state_21937__$1;
(statearr_21984_22050[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (34))){
var state_21937__$1 = state_21937;
var statearr_21985_22051 = state_21937__$1;
(statearr_21985_22051[(2)] = null);

(statearr_21985_22051[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (17))){
var state_21937__$1 = state_21937;
var statearr_21986_22052 = state_21937__$1;
(statearr_21986_22052[(2)] = null);

(statearr_21986_22052[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (3))){
var inst_21935 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21937__$1,inst_21935);
} else {
if((state_val_21938 === (12))){
var inst_21866 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
var statearr_21987_22053 = state_21937__$1;
(statearr_21987_22053[(2)] = inst_21866);

(statearr_21987_22053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (2))){
var state_21937__$1 = state_21937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21937__$1,(4),ch);
} else {
if((state_val_21938 === (23))){
var state_21937__$1 = state_21937;
var statearr_21988_22054 = state_21937__$1;
(statearr_21988_22054[(2)] = null);

(statearr_21988_22054[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (35))){
var inst_21919 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
var statearr_21989_22055 = state_21937__$1;
(statearr_21989_22055[(2)] = inst_21919);

(statearr_21989_22055[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (19))){
var inst_21838 = (state_21937[(7)]);
var inst_21842 = cljs.core.chunk_first.call(null,inst_21838);
var inst_21843 = cljs.core.chunk_rest.call(null,inst_21838);
var inst_21844 = cljs.core.count.call(null,inst_21842);
var inst_21816 = inst_21843;
var inst_21817 = inst_21842;
var inst_21818 = inst_21844;
var inst_21819 = (0);
var state_21937__$1 = (function (){var statearr_21990 = state_21937;
(statearr_21990[(13)] = inst_21819);

(statearr_21990[(14)] = inst_21816);

(statearr_21990[(15)] = inst_21818);

(statearr_21990[(16)] = inst_21817);

return statearr_21990;
})();
var statearr_21991_22056 = state_21937__$1;
(statearr_21991_22056[(2)] = null);

(statearr_21991_22056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (11))){
var inst_21816 = (state_21937[(14)]);
var inst_21838 = (state_21937[(7)]);
var inst_21838__$1 = cljs.core.seq.call(null,inst_21816);
var state_21937__$1 = (function (){var statearr_21992 = state_21937;
(statearr_21992[(7)] = inst_21838__$1);

return statearr_21992;
})();
if(inst_21838__$1){
var statearr_21993_22057 = state_21937__$1;
(statearr_21993_22057[(1)] = (16));

} else {
var statearr_21994_22058 = state_21937__$1;
(statearr_21994_22058[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (9))){
var inst_21868 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
var statearr_21995_22059 = state_21937__$1;
(statearr_21995_22059[(2)] = inst_21868);

(statearr_21995_22059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (5))){
var inst_21814 = cljs.core.deref.call(null,cs);
var inst_21815 = cljs.core.seq.call(null,inst_21814);
var inst_21816 = inst_21815;
var inst_21817 = null;
var inst_21818 = (0);
var inst_21819 = (0);
var state_21937__$1 = (function (){var statearr_21996 = state_21937;
(statearr_21996[(13)] = inst_21819);

(statearr_21996[(14)] = inst_21816);

(statearr_21996[(15)] = inst_21818);

(statearr_21996[(16)] = inst_21817);

return statearr_21996;
})();
var statearr_21997_22060 = state_21937__$1;
(statearr_21997_22060[(2)] = null);

(statearr_21997_22060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (14))){
var state_21937__$1 = state_21937;
var statearr_21998_22061 = state_21937__$1;
(statearr_21998_22061[(2)] = null);

(statearr_21998_22061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (45))){
var inst_21927 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
var statearr_21999_22062 = state_21937__$1;
(statearr_21999_22062[(2)] = inst_21927);

(statearr_21999_22062[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (26))){
var inst_21871 = (state_21937[(27)]);
var inst_21923 = (state_21937[(2)]);
var inst_21924 = cljs.core.seq.call(null,inst_21871);
var state_21937__$1 = (function (){var statearr_22000 = state_21937;
(statearr_22000[(29)] = inst_21923);

return statearr_22000;
})();
if(inst_21924){
var statearr_22001_22063 = state_21937__$1;
(statearr_22001_22063[(1)] = (42));

} else {
var statearr_22002_22064 = state_21937__$1;
(statearr_22002_22064[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (16))){
var inst_21838 = (state_21937[(7)]);
var inst_21840 = cljs.core.chunked_seq_QMARK_.call(null,inst_21838);
var state_21937__$1 = state_21937;
if(inst_21840){
var statearr_22003_22065 = state_21937__$1;
(statearr_22003_22065[(1)] = (19));

} else {
var statearr_22004_22066 = state_21937__$1;
(statearr_22004_22066[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (38))){
var inst_21916 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
var statearr_22005_22067 = state_21937__$1;
(statearr_22005_22067[(2)] = inst_21916);

(statearr_22005_22067[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (30))){
var state_21937__$1 = state_21937;
var statearr_22006_22068 = state_21937__$1;
(statearr_22006_22068[(2)] = null);

(statearr_22006_22068[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (10))){
var inst_21819 = (state_21937[(13)]);
var inst_21817 = (state_21937[(16)]);
var inst_21827 = cljs.core._nth.call(null,inst_21817,inst_21819);
var inst_21828 = cljs.core.nth.call(null,inst_21827,(0),null);
var inst_21829 = cljs.core.nth.call(null,inst_21827,(1),null);
var state_21937__$1 = (function (){var statearr_22007 = state_21937;
(statearr_22007[(24)] = inst_21828);

return statearr_22007;
})();
if(cljs.core.truth_(inst_21829)){
var statearr_22008_22069 = state_21937__$1;
(statearr_22008_22069[(1)] = (13));

} else {
var statearr_22009_22070 = state_21937__$1;
(statearr_22009_22070[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (18))){
var inst_21864 = (state_21937[(2)]);
var state_21937__$1 = state_21937;
var statearr_22010_22071 = state_21937__$1;
(statearr_22010_22071[(2)] = inst_21864);

(statearr_22010_22071[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (42))){
var state_21937__$1 = state_21937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21937__$1,(45),dchan);
} else {
if((state_val_21938 === (37))){
var inst_21807 = (state_21937[(9)]);
var inst_21897 = (state_21937[(23)]);
var inst_21906 = (state_21937[(22)]);
var inst_21906__$1 = cljs.core.first.call(null,inst_21897);
var inst_21907 = cljs.core.async.put_BANG_.call(null,inst_21906__$1,inst_21807,done);
var state_21937__$1 = (function (){var statearr_22011 = state_21937;
(statearr_22011[(22)] = inst_21906__$1);

return statearr_22011;
})();
if(cljs.core.truth_(inst_21907)){
var statearr_22012_22072 = state_21937__$1;
(statearr_22012_22072[(1)] = (39));

} else {
var statearr_22013_22073 = state_21937__$1;
(statearr_22013_22073[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_21938 === (8))){
var inst_21819 = (state_21937[(13)]);
var inst_21818 = (state_21937[(15)]);
var inst_21821 = (inst_21819 < inst_21818);
var inst_21822 = inst_21821;
var state_21937__$1 = state_21937;
if(cljs.core.truth_(inst_21822)){
var statearr_22014_22074 = state_21937__$1;
(statearr_22014_22074[(1)] = (10));

} else {
var statearr_22015_22075 = state_21937__$1;
(statearr_22015_22075[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__21106__auto__ = null;
var cljs$core$async$mult_$_state_machine__21106__auto____0 = (function (){
var statearr_22016 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22016[(0)] = cljs$core$async$mult_$_state_machine__21106__auto__);

(statearr_22016[(1)] = (1));

return statearr_22016;
});
var cljs$core$async$mult_$_state_machine__21106__auto____1 = (function (state_21937){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_21937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e22017){var ex__21109__auto__ = e22017;
var statearr_22018_22076 = state_21937;
(statearr_22018_22076[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_21937[(4)]))){
var statearr_22019_22077 = state_21937;
(statearr_22019_22077[(1)] = cljs.core.first.call(null,(state_21937[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22078 = state_21937;
state_21937 = G__22078;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__21106__auto__ = function(state_21937){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__21106__auto____1.call(this,state_21937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__21106__auto____0;
cljs$core$async$mult_$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__21106__auto____1;
return cljs$core$async$mult_$_state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_22020 = f__21180__auto__.call(null);
(statearr_22020[(6)] = c__21179__auto___22021);

return statearr_22020;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
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
var G__22080 = arguments.length;
switch (G__22080) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_22082 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_22082.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_22083 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_22083.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_22084 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_22084.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_22085 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_22085.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_22086 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_22086.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22096 = arguments.length;
var i__5770__auto___22097 = (0);
while(true){
if((i__5770__auto___22097 < len__5769__auto___22096)){
args__5775__auto__.push((arguments[i__5770__auto___22097]));

var G__22098 = (i__5770__auto___22097 + (1));
i__5770__auto___22097 = G__22098;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__22091){
var map__22092 = p__22091;
var map__22092__$1 = cljs.core.__destructure_map.call(null,map__22092);
var opts = map__22092__$1;
var statearr_22093_22099 = state;
(statearr_22093_22099[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_22094_22100 = state;
(statearr_22094_22100[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_22095_22101 = state;
(statearr_22095_22101[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq22087){
var G__22088 = cljs.core.first.call(null,seq22087);
var seq22087__$1 = cljs.core.next.call(null,seq22087);
var G__22089 = cljs.core.first.call(null,seq22087__$1);
var seq22087__$2 = cljs.core.next.call(null,seq22087__$1);
var G__22090 = cljs.core.first.call(null,seq22087__$2);
var seq22087__$3 = cljs.core.next.call(null,seq22087__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22088,G__22089,G__22090,seq22087__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22102 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22102 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta22103){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta22103 = meta22103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22104,meta22103__$1){
var self__ = this;
var _22104__$1 = this;
return (new cljs.core.async.t_cljs$core$async22102(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta22103__$1));
}));

(cljs.core.async.t_cljs$core$async22102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22104){
var self__ = this;
var _22104__$1 = this;
return self__.meta22103;
}));

(cljs.core.async.t_cljs$core$async22102.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22102.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async22102.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22102.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22102.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22102.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22102.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22102.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async22102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta22103","meta22103",26028314,null)], null);
}));

(cljs.core.async.t_cljs$core$async22102.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22102");

(cljs.core.async.t_cljs$core$async22102.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async22102");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22102.
 */
cljs.core.async.__GT_t_cljs$core$async22102 = (function cljs$core$async$mix_$___GT_t_cljs$core$async22102(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22103){
return (new cljs.core.async.t_cljs$core$async22102(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta22103));
});

}

return (new cljs.core.async.t_cljs$core$async22102(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21179__auto___22217 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_22172){
var state_val_22173 = (state_22172[(1)]);
if((state_val_22173 === (7))){
var inst_22132 = (state_22172[(2)]);
var state_22172__$1 = state_22172;
if(cljs.core.truth_(inst_22132)){
var statearr_22174_22218 = state_22172__$1;
(statearr_22174_22218[(1)] = (8));

} else {
var statearr_22175_22219 = state_22172__$1;
(statearr_22175_22219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (20))){
var inst_22125 = (state_22172[(7)]);
var state_22172__$1 = state_22172;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22172__$1,(23),out,inst_22125);
} else {
if((state_val_22173 === (1))){
var inst_22108 = calc_state.call(null);
var inst_22109 = cljs.core.__destructure_map.call(null,inst_22108);
var inst_22110 = cljs.core.get.call(null,inst_22109,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22111 = cljs.core.get.call(null,inst_22109,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22112 = cljs.core.get.call(null,inst_22109,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_22113 = inst_22108;
var state_22172__$1 = (function (){var statearr_22176 = state_22172;
(statearr_22176[(8)] = inst_22112);

(statearr_22176[(9)] = inst_22111);

(statearr_22176[(10)] = inst_22113);

(statearr_22176[(11)] = inst_22110);

return statearr_22176;
})();
var statearr_22177_22220 = state_22172__$1;
(statearr_22177_22220[(2)] = null);

(statearr_22177_22220[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (24))){
var inst_22116 = (state_22172[(12)]);
var inst_22113 = inst_22116;
var state_22172__$1 = (function (){var statearr_22178 = state_22172;
(statearr_22178[(10)] = inst_22113);

return statearr_22178;
})();
var statearr_22179_22221 = state_22172__$1;
(statearr_22179_22221[(2)] = null);

(statearr_22179_22221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (4))){
var inst_22125 = (state_22172[(7)]);
var inst_22127 = (state_22172[(13)]);
var inst_22124 = (state_22172[(2)]);
var inst_22125__$1 = cljs.core.nth.call(null,inst_22124,(0),null);
var inst_22126 = cljs.core.nth.call(null,inst_22124,(1),null);
var inst_22127__$1 = (inst_22125__$1 == null);
var state_22172__$1 = (function (){var statearr_22180 = state_22172;
(statearr_22180[(7)] = inst_22125__$1);

(statearr_22180[(13)] = inst_22127__$1);

(statearr_22180[(14)] = inst_22126);

return statearr_22180;
})();
if(cljs.core.truth_(inst_22127__$1)){
var statearr_22181_22222 = state_22172__$1;
(statearr_22181_22222[(1)] = (5));

} else {
var statearr_22182_22223 = state_22172__$1;
(statearr_22182_22223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (15))){
var inst_22146 = (state_22172[(15)]);
var inst_22117 = (state_22172[(16)]);
var inst_22146__$1 = cljs.core.empty_QMARK_.call(null,inst_22117);
var state_22172__$1 = (function (){var statearr_22183 = state_22172;
(statearr_22183[(15)] = inst_22146__$1);

return statearr_22183;
})();
if(inst_22146__$1){
var statearr_22184_22224 = state_22172__$1;
(statearr_22184_22224[(1)] = (17));

} else {
var statearr_22185_22225 = state_22172__$1;
(statearr_22185_22225[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (21))){
var inst_22116 = (state_22172[(12)]);
var inst_22113 = inst_22116;
var state_22172__$1 = (function (){var statearr_22186 = state_22172;
(statearr_22186[(10)] = inst_22113);

return statearr_22186;
})();
var statearr_22187_22226 = state_22172__$1;
(statearr_22187_22226[(2)] = null);

(statearr_22187_22226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (13))){
var inst_22139 = (state_22172[(2)]);
var inst_22140 = calc_state.call(null);
var inst_22113 = inst_22140;
var state_22172__$1 = (function (){var statearr_22188 = state_22172;
(statearr_22188[(17)] = inst_22139);

(statearr_22188[(10)] = inst_22113);

return statearr_22188;
})();
var statearr_22189_22227 = state_22172__$1;
(statearr_22189_22227[(2)] = null);

(statearr_22189_22227[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (22))){
var inst_22166 = (state_22172[(2)]);
var state_22172__$1 = state_22172;
var statearr_22190_22228 = state_22172__$1;
(statearr_22190_22228[(2)] = inst_22166);

(statearr_22190_22228[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (6))){
var inst_22126 = (state_22172[(14)]);
var inst_22130 = cljs.core._EQ_.call(null,inst_22126,change);
var state_22172__$1 = state_22172;
var statearr_22191_22229 = state_22172__$1;
(statearr_22191_22229[(2)] = inst_22130);

(statearr_22191_22229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (25))){
var state_22172__$1 = state_22172;
var statearr_22192_22230 = state_22172__$1;
(statearr_22192_22230[(2)] = null);

(statearr_22192_22230[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (17))){
var inst_22118 = (state_22172[(18)]);
var inst_22126 = (state_22172[(14)]);
var inst_22148 = inst_22118.call(null,inst_22126);
var inst_22149 = cljs.core.not.call(null,inst_22148);
var state_22172__$1 = state_22172;
var statearr_22193_22231 = state_22172__$1;
(statearr_22193_22231[(2)] = inst_22149);

(statearr_22193_22231[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (3))){
var inst_22170 = (state_22172[(2)]);
var state_22172__$1 = state_22172;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22172__$1,inst_22170);
} else {
if((state_val_22173 === (12))){
var state_22172__$1 = state_22172;
var statearr_22194_22232 = state_22172__$1;
(statearr_22194_22232[(2)] = null);

(statearr_22194_22232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (2))){
var inst_22116 = (state_22172[(12)]);
var inst_22113 = (state_22172[(10)]);
var inst_22116__$1 = cljs.core.__destructure_map.call(null,inst_22113);
var inst_22117 = cljs.core.get.call(null,inst_22116__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_22118 = cljs.core.get.call(null,inst_22116__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_22119 = cljs.core.get.call(null,inst_22116__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_22172__$1 = (function (){var statearr_22195 = state_22172;
(statearr_22195[(18)] = inst_22118);

(statearr_22195[(12)] = inst_22116__$1);

(statearr_22195[(16)] = inst_22117);

return statearr_22195;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_22172__$1,(4),inst_22119);
} else {
if((state_val_22173 === (23))){
var inst_22157 = (state_22172[(2)]);
var state_22172__$1 = state_22172;
if(cljs.core.truth_(inst_22157)){
var statearr_22196_22233 = state_22172__$1;
(statearr_22196_22233[(1)] = (24));

} else {
var statearr_22197_22234 = state_22172__$1;
(statearr_22197_22234[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (19))){
var inst_22152 = (state_22172[(2)]);
var state_22172__$1 = state_22172;
var statearr_22198_22235 = state_22172__$1;
(statearr_22198_22235[(2)] = inst_22152);

(statearr_22198_22235[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (11))){
var inst_22126 = (state_22172[(14)]);
var inst_22136 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_22126);
var state_22172__$1 = state_22172;
var statearr_22199_22236 = state_22172__$1;
(statearr_22199_22236[(2)] = inst_22136);

(statearr_22199_22236[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (9))){
var inst_22143 = (state_22172[(19)]);
var inst_22126 = (state_22172[(14)]);
var inst_22117 = (state_22172[(16)]);
var inst_22143__$1 = inst_22117.call(null,inst_22126);
var state_22172__$1 = (function (){var statearr_22200 = state_22172;
(statearr_22200[(19)] = inst_22143__$1);

return statearr_22200;
})();
if(cljs.core.truth_(inst_22143__$1)){
var statearr_22201_22237 = state_22172__$1;
(statearr_22201_22237[(1)] = (14));

} else {
var statearr_22202_22238 = state_22172__$1;
(statearr_22202_22238[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (5))){
var inst_22127 = (state_22172[(13)]);
var state_22172__$1 = state_22172;
var statearr_22203_22239 = state_22172__$1;
(statearr_22203_22239[(2)] = inst_22127);

(statearr_22203_22239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (14))){
var inst_22143 = (state_22172[(19)]);
var state_22172__$1 = state_22172;
var statearr_22204_22240 = state_22172__$1;
(statearr_22204_22240[(2)] = inst_22143);

(statearr_22204_22240[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (26))){
var inst_22162 = (state_22172[(2)]);
var state_22172__$1 = state_22172;
var statearr_22205_22241 = state_22172__$1;
(statearr_22205_22241[(2)] = inst_22162);

(statearr_22205_22241[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (16))){
var inst_22154 = (state_22172[(2)]);
var state_22172__$1 = state_22172;
if(cljs.core.truth_(inst_22154)){
var statearr_22206_22242 = state_22172__$1;
(statearr_22206_22242[(1)] = (20));

} else {
var statearr_22207_22243 = state_22172__$1;
(statearr_22207_22243[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (10))){
var inst_22168 = (state_22172[(2)]);
var state_22172__$1 = state_22172;
var statearr_22208_22244 = state_22172__$1;
(statearr_22208_22244[(2)] = inst_22168);

(statearr_22208_22244[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (18))){
var inst_22146 = (state_22172[(15)]);
var state_22172__$1 = state_22172;
var statearr_22209_22245 = state_22172__$1;
(statearr_22209_22245[(2)] = inst_22146);

(statearr_22209_22245[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22173 === (8))){
var inst_22125 = (state_22172[(7)]);
var inst_22134 = (inst_22125 == null);
var state_22172__$1 = state_22172;
if(cljs.core.truth_(inst_22134)){
var statearr_22210_22246 = state_22172__$1;
(statearr_22210_22246[(1)] = (11));

} else {
var statearr_22211_22247 = state_22172__$1;
(statearr_22211_22247[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__21106__auto__ = null;
var cljs$core$async$mix_$_state_machine__21106__auto____0 = (function (){
var statearr_22212 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22212[(0)] = cljs$core$async$mix_$_state_machine__21106__auto__);

(statearr_22212[(1)] = (1));

return statearr_22212;
});
var cljs$core$async$mix_$_state_machine__21106__auto____1 = (function (state_22172){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_22172);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e22213){var ex__21109__auto__ = e22213;
var statearr_22214_22248 = state_22172;
(statearr_22214_22248[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_22172[(4)]))){
var statearr_22215_22249 = state_22172;
(statearr_22215_22249[(1)] = cljs.core.first.call(null,(state_22172[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22250 = state_22172;
state_22172 = G__22250;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__21106__auto__ = function(state_22172){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__21106__auto____1.call(this,state_22172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__21106__auto____0;
cljs$core$async$mix_$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__21106__auto____1;
return cljs$core$async$mix_$_state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_22216 = f__21180__auto__.call(null);
(statearr_22216[(6)] = c__21179__auto___22217);

return statearr_22216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_22253 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_22253.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_22254 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_22254.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_22255 = (function() {
var G__22256 = null;
var G__22256__1 = (function (p){
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
var G__22256__2 = (function (p,v){
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
G__22256 = function(p,v){
switch(arguments.length){
case 1:
return G__22256__1.call(this,p);
case 2:
return G__22256__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__22256.cljs$core$IFn$_invoke$arity$1 = G__22256__1;
G__22256.cljs$core$IFn$_invoke$arity$2 = G__22256__2;
return G__22256;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__22252 = arguments.length;
switch (G__22252) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22255.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_22255.call(null,p,v);
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
var G__22260 = arguments.length;
switch (G__22260) {
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
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__22258_SHARP_){
if(cljs.core.truth_(p1__22258_SHARP_.call(null,topic))){
return p1__22258_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__22258_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22261 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22261 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta22262){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta22262 = meta22262;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22263,meta22262__$1){
var self__ = this;
var _22263__$1 = this;
return (new cljs.core.async.t_cljs$core$async22261(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta22262__$1));
}));

(cljs.core.async.t_cljs$core$async22261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22263){
var self__ = this;
var _22263__$1 = this;
return self__.meta22262;
}));

(cljs.core.async.t_cljs$core$async22261.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async22261.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22261.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async22261.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async22261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async22261.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async22261.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta22262","meta22262",482628943,null)], null);
}));

(cljs.core.async.t_cljs$core$async22261.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22261.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22261");

(cljs.core.async.t_cljs$core$async22261.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async22261");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22261.
 */
cljs.core.async.__GT_t_cljs$core$async22261 = (function cljs$core$async$__GT_t_cljs$core$async22261(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22262){
return (new cljs.core.async.t_cljs$core$async22261(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta22262));
});

}

return (new cljs.core.async.t_cljs$core$async22261(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__21179__auto___22382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_22335){
var state_val_22336 = (state_22335[(1)]);
if((state_val_22336 === (7))){
var inst_22331 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
var statearr_22337_22383 = state_22335__$1;
(statearr_22337_22383[(2)] = inst_22331);

(statearr_22337_22383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (20))){
var state_22335__$1 = state_22335;
var statearr_22338_22384 = state_22335__$1;
(statearr_22338_22384[(2)] = null);

(statearr_22338_22384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (1))){
var state_22335__$1 = state_22335;
var statearr_22339_22385 = state_22335__$1;
(statearr_22339_22385[(2)] = null);

(statearr_22339_22385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (24))){
var inst_22314 = (state_22335[(7)]);
var inst_22323 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_22314);
var state_22335__$1 = state_22335;
var statearr_22340_22386 = state_22335__$1;
(statearr_22340_22386[(2)] = inst_22323);

(statearr_22340_22386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (4))){
var inst_22266 = (state_22335[(8)]);
var inst_22266__$1 = (state_22335[(2)]);
var inst_22267 = (inst_22266__$1 == null);
var state_22335__$1 = (function (){var statearr_22341 = state_22335;
(statearr_22341[(8)] = inst_22266__$1);

return statearr_22341;
})();
if(cljs.core.truth_(inst_22267)){
var statearr_22342_22387 = state_22335__$1;
(statearr_22342_22387[(1)] = (5));

} else {
var statearr_22343_22388 = state_22335__$1;
(statearr_22343_22388[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (15))){
var inst_22308 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
var statearr_22344_22389 = state_22335__$1;
(statearr_22344_22389[(2)] = inst_22308);

(statearr_22344_22389[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (21))){
var inst_22328 = (state_22335[(2)]);
var state_22335__$1 = (function (){var statearr_22345 = state_22335;
(statearr_22345[(9)] = inst_22328);

return statearr_22345;
})();
var statearr_22346_22390 = state_22335__$1;
(statearr_22346_22390[(2)] = null);

(statearr_22346_22390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (13))){
var inst_22290 = (state_22335[(10)]);
var inst_22292 = cljs.core.chunked_seq_QMARK_.call(null,inst_22290);
var state_22335__$1 = state_22335;
if(inst_22292){
var statearr_22347_22391 = state_22335__$1;
(statearr_22347_22391[(1)] = (16));

} else {
var statearr_22348_22392 = state_22335__$1;
(statearr_22348_22392[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (22))){
var inst_22320 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
if(cljs.core.truth_(inst_22320)){
var statearr_22349_22393 = state_22335__$1;
(statearr_22349_22393[(1)] = (23));

} else {
var statearr_22350_22394 = state_22335__$1;
(statearr_22350_22394[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (6))){
var inst_22314 = (state_22335[(7)]);
var inst_22316 = (state_22335[(11)]);
var inst_22266 = (state_22335[(8)]);
var inst_22314__$1 = topic_fn.call(null,inst_22266);
var inst_22315 = cljs.core.deref.call(null,mults);
var inst_22316__$1 = cljs.core.get.call(null,inst_22315,inst_22314__$1);
var state_22335__$1 = (function (){var statearr_22351 = state_22335;
(statearr_22351[(7)] = inst_22314__$1);

(statearr_22351[(11)] = inst_22316__$1);

return statearr_22351;
})();
if(cljs.core.truth_(inst_22316__$1)){
var statearr_22352_22395 = state_22335__$1;
(statearr_22352_22395[(1)] = (19));

} else {
var statearr_22353_22396 = state_22335__$1;
(statearr_22353_22396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (25))){
var inst_22325 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
var statearr_22354_22397 = state_22335__$1;
(statearr_22354_22397[(2)] = inst_22325);

(statearr_22354_22397[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (17))){
var inst_22290 = (state_22335[(10)]);
var inst_22299 = cljs.core.first.call(null,inst_22290);
var inst_22300 = cljs.core.async.muxch_STAR_.call(null,inst_22299);
var inst_22301 = cljs.core.async.close_BANG_.call(null,inst_22300);
var inst_22302 = cljs.core.next.call(null,inst_22290);
var inst_22276 = inst_22302;
var inst_22277 = null;
var inst_22278 = (0);
var inst_22279 = (0);
var state_22335__$1 = (function (){var statearr_22355 = state_22335;
(statearr_22355[(12)] = inst_22279);

(statearr_22355[(13)] = inst_22301);

(statearr_22355[(14)] = inst_22277);

(statearr_22355[(15)] = inst_22276);

(statearr_22355[(16)] = inst_22278);

return statearr_22355;
})();
var statearr_22356_22398 = state_22335__$1;
(statearr_22356_22398[(2)] = null);

(statearr_22356_22398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (3))){
var inst_22333 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22335__$1,inst_22333);
} else {
if((state_val_22336 === (12))){
var inst_22310 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
var statearr_22357_22399 = state_22335__$1;
(statearr_22357_22399[(2)] = inst_22310);

(statearr_22357_22399[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (2))){
var state_22335__$1 = state_22335;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22335__$1,(4),ch);
} else {
if((state_val_22336 === (23))){
var state_22335__$1 = state_22335;
var statearr_22358_22400 = state_22335__$1;
(statearr_22358_22400[(2)] = null);

(statearr_22358_22400[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (19))){
var inst_22316 = (state_22335[(11)]);
var inst_22266 = (state_22335[(8)]);
var inst_22318 = cljs.core.async.muxch_STAR_.call(null,inst_22316);
var state_22335__$1 = state_22335;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22335__$1,(22),inst_22318,inst_22266);
} else {
if((state_val_22336 === (11))){
var inst_22290 = (state_22335[(10)]);
var inst_22276 = (state_22335[(15)]);
var inst_22290__$1 = cljs.core.seq.call(null,inst_22276);
var state_22335__$1 = (function (){var statearr_22359 = state_22335;
(statearr_22359[(10)] = inst_22290__$1);

return statearr_22359;
})();
if(inst_22290__$1){
var statearr_22360_22401 = state_22335__$1;
(statearr_22360_22401[(1)] = (13));

} else {
var statearr_22361_22402 = state_22335__$1;
(statearr_22361_22402[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (9))){
var inst_22312 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
var statearr_22362_22403 = state_22335__$1;
(statearr_22362_22403[(2)] = inst_22312);

(statearr_22362_22403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (5))){
var inst_22273 = cljs.core.deref.call(null,mults);
var inst_22274 = cljs.core.vals.call(null,inst_22273);
var inst_22275 = cljs.core.seq.call(null,inst_22274);
var inst_22276 = inst_22275;
var inst_22277 = null;
var inst_22278 = (0);
var inst_22279 = (0);
var state_22335__$1 = (function (){var statearr_22363 = state_22335;
(statearr_22363[(12)] = inst_22279);

(statearr_22363[(14)] = inst_22277);

(statearr_22363[(15)] = inst_22276);

(statearr_22363[(16)] = inst_22278);

return statearr_22363;
})();
var statearr_22364_22404 = state_22335__$1;
(statearr_22364_22404[(2)] = null);

(statearr_22364_22404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (14))){
var state_22335__$1 = state_22335;
var statearr_22368_22405 = state_22335__$1;
(statearr_22368_22405[(2)] = null);

(statearr_22368_22405[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (16))){
var inst_22290 = (state_22335[(10)]);
var inst_22294 = cljs.core.chunk_first.call(null,inst_22290);
var inst_22295 = cljs.core.chunk_rest.call(null,inst_22290);
var inst_22296 = cljs.core.count.call(null,inst_22294);
var inst_22276 = inst_22295;
var inst_22277 = inst_22294;
var inst_22278 = inst_22296;
var inst_22279 = (0);
var state_22335__$1 = (function (){var statearr_22369 = state_22335;
(statearr_22369[(12)] = inst_22279);

(statearr_22369[(14)] = inst_22277);

(statearr_22369[(15)] = inst_22276);

(statearr_22369[(16)] = inst_22278);

return statearr_22369;
})();
var statearr_22370_22406 = state_22335__$1;
(statearr_22370_22406[(2)] = null);

(statearr_22370_22406[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (10))){
var inst_22279 = (state_22335[(12)]);
var inst_22277 = (state_22335[(14)]);
var inst_22276 = (state_22335[(15)]);
var inst_22278 = (state_22335[(16)]);
var inst_22284 = cljs.core._nth.call(null,inst_22277,inst_22279);
var inst_22285 = cljs.core.async.muxch_STAR_.call(null,inst_22284);
var inst_22286 = cljs.core.async.close_BANG_.call(null,inst_22285);
var inst_22287 = (inst_22279 + (1));
var tmp22365 = inst_22277;
var tmp22366 = inst_22276;
var tmp22367 = inst_22278;
var inst_22276__$1 = tmp22366;
var inst_22277__$1 = tmp22365;
var inst_22278__$1 = tmp22367;
var inst_22279__$1 = inst_22287;
var state_22335__$1 = (function (){var statearr_22371 = state_22335;
(statearr_22371[(17)] = inst_22286);

(statearr_22371[(12)] = inst_22279__$1);

(statearr_22371[(14)] = inst_22277__$1);

(statearr_22371[(15)] = inst_22276__$1);

(statearr_22371[(16)] = inst_22278__$1);

return statearr_22371;
})();
var statearr_22372_22407 = state_22335__$1;
(statearr_22372_22407[(2)] = null);

(statearr_22372_22407[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (18))){
var inst_22305 = (state_22335[(2)]);
var state_22335__$1 = state_22335;
var statearr_22373_22408 = state_22335__$1;
(statearr_22373_22408[(2)] = inst_22305);

(statearr_22373_22408[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22336 === (8))){
var inst_22279 = (state_22335[(12)]);
var inst_22278 = (state_22335[(16)]);
var inst_22281 = (inst_22279 < inst_22278);
var inst_22282 = inst_22281;
var state_22335__$1 = state_22335;
if(cljs.core.truth_(inst_22282)){
var statearr_22374_22409 = state_22335__$1;
(statearr_22374_22409[(1)] = (10));

} else {
var statearr_22375_22410 = state_22335__$1;
(statearr_22375_22410[(1)] = (11));

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
var cljs$core$async$state_machine__21106__auto__ = null;
var cljs$core$async$state_machine__21106__auto____0 = (function (){
var statearr_22376 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22376[(0)] = cljs$core$async$state_machine__21106__auto__);

(statearr_22376[(1)] = (1));

return statearr_22376;
});
var cljs$core$async$state_machine__21106__auto____1 = (function (state_22335){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_22335);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e22377){var ex__21109__auto__ = e22377;
var statearr_22378_22411 = state_22335;
(statearr_22378_22411[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_22335[(4)]))){
var statearr_22379_22412 = state_22335;
(statearr_22379_22412[(1)] = cljs.core.first.call(null,(state_22335[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22413 = state_22335;
state_22335 = G__22413;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$state_machine__21106__auto__ = function(state_22335){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21106__auto____1.call(this,state_22335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21106__auto____0;
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21106__auto____1;
return cljs$core$async$state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_22380 = f__21180__auto__.call(null);
(statearr_22380[(6)] = c__21179__auto___22382);

return statearr_22380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
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
var G__22415 = arguments.length;
switch (G__22415) {
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
var G__22418 = arguments.length;
switch (G__22418) {
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
var G__22421 = arguments.length;
switch (G__22421) {
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
var c__21179__auto___22499 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_22464){
var state_val_22465 = (state_22464[(1)]);
if((state_val_22465 === (7))){
var state_22464__$1 = state_22464;
var statearr_22466_22500 = state_22464__$1;
(statearr_22466_22500[(2)] = null);

(statearr_22466_22500[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (1))){
var state_22464__$1 = state_22464;
var statearr_22467_22501 = state_22464__$1;
(statearr_22467_22501[(2)] = null);

(statearr_22467_22501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (4))){
var inst_22424 = (state_22464[(7)]);
var inst_22425 = (state_22464[(8)]);
var inst_22427 = (inst_22425 < inst_22424);
var state_22464__$1 = state_22464;
if(cljs.core.truth_(inst_22427)){
var statearr_22468_22502 = state_22464__$1;
(statearr_22468_22502[(1)] = (6));

} else {
var statearr_22469_22503 = state_22464__$1;
(statearr_22469_22503[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (15))){
var inst_22450 = (state_22464[(9)]);
var inst_22455 = cljs.core.apply.call(null,f,inst_22450);
var state_22464__$1 = state_22464;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22464__$1,(17),out,inst_22455);
} else {
if((state_val_22465 === (13))){
var inst_22450 = (state_22464[(9)]);
var inst_22450__$1 = (state_22464[(2)]);
var inst_22451 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_22450__$1);
var state_22464__$1 = (function (){var statearr_22470 = state_22464;
(statearr_22470[(9)] = inst_22450__$1);

return statearr_22470;
})();
if(cljs.core.truth_(inst_22451)){
var statearr_22471_22504 = state_22464__$1;
(statearr_22471_22504[(1)] = (14));

} else {
var statearr_22472_22505 = state_22464__$1;
(statearr_22472_22505[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (6))){
var state_22464__$1 = state_22464;
var statearr_22473_22506 = state_22464__$1;
(statearr_22473_22506[(2)] = null);

(statearr_22473_22506[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (17))){
var inst_22457 = (state_22464[(2)]);
var state_22464__$1 = (function (){var statearr_22475 = state_22464;
(statearr_22475[(10)] = inst_22457);

return statearr_22475;
})();
var statearr_22476_22507 = state_22464__$1;
(statearr_22476_22507[(2)] = null);

(statearr_22476_22507[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (3))){
var inst_22462 = (state_22464[(2)]);
var state_22464__$1 = state_22464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22464__$1,inst_22462);
} else {
if((state_val_22465 === (12))){
var _ = (function (){var statearr_22477 = state_22464;
(statearr_22477[(4)] = cljs.core.rest.call(null,(state_22464[(4)])));

return statearr_22477;
})();
var state_22464__$1 = state_22464;
var ex22474 = (state_22464__$1[(2)]);
var statearr_22478_22508 = state_22464__$1;
(statearr_22478_22508[(5)] = ex22474);


if((ex22474 instanceof Object)){
var statearr_22479_22509 = state_22464__$1;
(statearr_22479_22509[(1)] = (11));

(statearr_22479_22509[(5)] = null);

} else {
throw ex22474;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (2))){
var inst_22423 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_22424 = cnt;
var inst_22425 = (0);
var state_22464__$1 = (function (){var statearr_22480 = state_22464;
(statearr_22480[(11)] = inst_22423);

(statearr_22480[(7)] = inst_22424);

(statearr_22480[(8)] = inst_22425);

return statearr_22480;
})();
var statearr_22481_22510 = state_22464__$1;
(statearr_22481_22510[(2)] = null);

(statearr_22481_22510[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (11))){
var inst_22429 = (state_22464[(2)]);
var inst_22430 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_22464__$1 = (function (){var statearr_22482 = state_22464;
(statearr_22482[(12)] = inst_22429);

return statearr_22482;
})();
var statearr_22483_22511 = state_22464__$1;
(statearr_22483_22511[(2)] = inst_22430);

(statearr_22483_22511[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (9))){
var inst_22425 = (state_22464[(8)]);
var _ = (function (){var statearr_22484 = state_22464;
(statearr_22484[(4)] = cljs.core.cons.call(null,(12),(state_22464[(4)])));

return statearr_22484;
})();
var inst_22436 = chs__$1.call(null,inst_22425);
var inst_22437 = done.call(null,inst_22425);
var inst_22438 = cljs.core.async.take_BANG_.call(null,inst_22436,inst_22437);
var ___$1 = (function (){var statearr_22485 = state_22464;
(statearr_22485[(4)] = cljs.core.rest.call(null,(state_22464[(4)])));

return statearr_22485;
})();
var state_22464__$1 = state_22464;
var statearr_22486_22512 = state_22464__$1;
(statearr_22486_22512[(2)] = inst_22438);

(statearr_22486_22512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (5))){
var inst_22448 = (state_22464[(2)]);
var state_22464__$1 = (function (){var statearr_22487 = state_22464;
(statearr_22487[(13)] = inst_22448);

return statearr_22487;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22464__$1,(13),dchan);
} else {
if((state_val_22465 === (14))){
var inst_22453 = cljs.core.async.close_BANG_.call(null,out);
var state_22464__$1 = state_22464;
var statearr_22488_22513 = state_22464__$1;
(statearr_22488_22513[(2)] = inst_22453);

(statearr_22488_22513[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (16))){
var inst_22460 = (state_22464[(2)]);
var state_22464__$1 = state_22464;
var statearr_22489_22514 = state_22464__$1;
(statearr_22489_22514[(2)] = inst_22460);

(statearr_22489_22514[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (10))){
var inst_22425 = (state_22464[(8)]);
var inst_22441 = (state_22464[(2)]);
var inst_22442 = (inst_22425 + (1));
var inst_22425__$1 = inst_22442;
var state_22464__$1 = (function (){var statearr_22490 = state_22464;
(statearr_22490[(14)] = inst_22441);

(statearr_22490[(8)] = inst_22425__$1);

return statearr_22490;
})();
var statearr_22491_22515 = state_22464__$1;
(statearr_22491_22515[(2)] = null);

(statearr_22491_22515[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22465 === (8))){
var inst_22446 = (state_22464[(2)]);
var state_22464__$1 = state_22464;
var statearr_22492_22516 = state_22464__$1;
(statearr_22492_22516[(2)] = inst_22446);

(statearr_22492_22516[(1)] = (5));


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
var cljs$core$async$state_machine__21106__auto__ = null;
var cljs$core$async$state_machine__21106__auto____0 = (function (){
var statearr_22493 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22493[(0)] = cljs$core$async$state_machine__21106__auto__);

(statearr_22493[(1)] = (1));

return statearr_22493;
});
var cljs$core$async$state_machine__21106__auto____1 = (function (state_22464){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_22464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e22494){var ex__21109__auto__ = e22494;
var statearr_22495_22517 = state_22464;
(statearr_22495_22517[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_22464[(4)]))){
var statearr_22496_22518 = state_22464;
(statearr_22496_22518[(1)] = cljs.core.first.call(null,(state_22464[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22519 = state_22464;
state_22464 = G__22519;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$state_machine__21106__auto__ = function(state_22464){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21106__auto____1.call(this,state_22464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21106__auto____0;
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21106__auto____1;
return cljs$core$async$state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_22497 = f__21180__auto__.call(null);
(statearr_22497[(6)] = c__21179__auto___22499);

return statearr_22497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
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
var G__22522 = arguments.length;
switch (G__22522) {
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
var c__21179__auto___22577 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_22554){
var state_val_22555 = (state_22554[(1)]);
if((state_val_22555 === (7))){
var inst_22534 = (state_22554[(7)]);
var inst_22533 = (state_22554[(8)]);
var inst_22533__$1 = (state_22554[(2)]);
var inst_22534__$1 = cljs.core.nth.call(null,inst_22533__$1,(0),null);
var inst_22535 = cljs.core.nth.call(null,inst_22533__$1,(1),null);
var inst_22536 = (inst_22534__$1 == null);
var state_22554__$1 = (function (){var statearr_22556 = state_22554;
(statearr_22556[(7)] = inst_22534__$1);

(statearr_22556[(9)] = inst_22535);

(statearr_22556[(8)] = inst_22533__$1);

return statearr_22556;
})();
if(cljs.core.truth_(inst_22536)){
var statearr_22557_22578 = state_22554__$1;
(statearr_22557_22578[(1)] = (8));

} else {
var statearr_22558_22579 = state_22554__$1;
(statearr_22558_22579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22555 === (1))){
var inst_22523 = cljs.core.vec.call(null,chs);
var inst_22524 = inst_22523;
var state_22554__$1 = (function (){var statearr_22559 = state_22554;
(statearr_22559[(10)] = inst_22524);

return statearr_22559;
})();
var statearr_22560_22580 = state_22554__$1;
(statearr_22560_22580[(2)] = null);

(statearr_22560_22580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22555 === (4))){
var inst_22524 = (state_22554[(10)]);
var state_22554__$1 = state_22554;
return cljs.core.async.ioc_alts_BANG_.call(null,state_22554__$1,(7),inst_22524);
} else {
if((state_val_22555 === (6))){
var inst_22550 = (state_22554[(2)]);
var state_22554__$1 = state_22554;
var statearr_22561_22581 = state_22554__$1;
(statearr_22561_22581[(2)] = inst_22550);

(statearr_22561_22581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22555 === (3))){
var inst_22552 = (state_22554[(2)]);
var state_22554__$1 = state_22554;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22554__$1,inst_22552);
} else {
if((state_val_22555 === (2))){
var inst_22524 = (state_22554[(10)]);
var inst_22526 = cljs.core.count.call(null,inst_22524);
var inst_22527 = (inst_22526 > (0));
var state_22554__$1 = state_22554;
if(cljs.core.truth_(inst_22527)){
var statearr_22563_22582 = state_22554__$1;
(statearr_22563_22582[(1)] = (4));

} else {
var statearr_22564_22583 = state_22554__$1;
(statearr_22564_22583[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22555 === (11))){
var inst_22524 = (state_22554[(10)]);
var inst_22543 = (state_22554[(2)]);
var tmp22562 = inst_22524;
var inst_22524__$1 = tmp22562;
var state_22554__$1 = (function (){var statearr_22565 = state_22554;
(statearr_22565[(10)] = inst_22524__$1);

(statearr_22565[(11)] = inst_22543);

return statearr_22565;
})();
var statearr_22566_22584 = state_22554__$1;
(statearr_22566_22584[(2)] = null);

(statearr_22566_22584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22555 === (9))){
var inst_22534 = (state_22554[(7)]);
var state_22554__$1 = state_22554;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22554__$1,(11),out,inst_22534);
} else {
if((state_val_22555 === (5))){
var inst_22548 = cljs.core.async.close_BANG_.call(null,out);
var state_22554__$1 = state_22554;
var statearr_22567_22585 = state_22554__$1;
(statearr_22567_22585[(2)] = inst_22548);

(statearr_22567_22585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22555 === (10))){
var inst_22546 = (state_22554[(2)]);
var state_22554__$1 = state_22554;
var statearr_22568_22586 = state_22554__$1;
(statearr_22568_22586[(2)] = inst_22546);

(statearr_22568_22586[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22555 === (8))){
var inst_22534 = (state_22554[(7)]);
var inst_22524 = (state_22554[(10)]);
var inst_22535 = (state_22554[(9)]);
var inst_22533 = (state_22554[(8)]);
var inst_22538 = (function (){var cs = inst_22524;
var vec__22529 = inst_22533;
var v = inst_22534;
var c = inst_22535;
return (function (p1__22520_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__22520_SHARP_);
});
})();
var inst_22539 = cljs.core.filterv.call(null,inst_22538,inst_22524);
var inst_22524__$1 = inst_22539;
var state_22554__$1 = (function (){var statearr_22569 = state_22554;
(statearr_22569[(10)] = inst_22524__$1);

return statearr_22569;
})();
var statearr_22570_22587 = state_22554__$1;
(statearr_22570_22587[(2)] = null);

(statearr_22570_22587[(1)] = (2));


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
var cljs$core$async$state_machine__21106__auto__ = null;
var cljs$core$async$state_machine__21106__auto____0 = (function (){
var statearr_22571 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22571[(0)] = cljs$core$async$state_machine__21106__auto__);

(statearr_22571[(1)] = (1));

return statearr_22571;
});
var cljs$core$async$state_machine__21106__auto____1 = (function (state_22554){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_22554);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e22572){var ex__21109__auto__ = e22572;
var statearr_22573_22588 = state_22554;
(statearr_22573_22588[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_22554[(4)]))){
var statearr_22574_22589 = state_22554;
(statearr_22574_22589[(1)] = cljs.core.first.call(null,(state_22554[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22590 = state_22554;
state_22554 = G__22590;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$state_machine__21106__auto__ = function(state_22554){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21106__auto____1.call(this,state_22554);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21106__auto____0;
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21106__auto____1;
return cljs$core$async$state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_22575 = f__21180__auto__.call(null);
(statearr_22575[(6)] = c__21179__auto___22577);

return statearr_22575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
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
var G__22592 = arguments.length;
switch (G__22592) {
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
var c__21179__auto___22638 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_22616){
var state_val_22617 = (state_22616[(1)]);
if((state_val_22617 === (7))){
var inst_22598 = (state_22616[(7)]);
var inst_22598__$1 = (state_22616[(2)]);
var inst_22599 = (inst_22598__$1 == null);
var inst_22600 = cljs.core.not.call(null,inst_22599);
var state_22616__$1 = (function (){var statearr_22618 = state_22616;
(statearr_22618[(7)] = inst_22598__$1);

return statearr_22618;
})();
if(inst_22600){
var statearr_22619_22639 = state_22616__$1;
(statearr_22619_22639[(1)] = (8));

} else {
var statearr_22620_22640 = state_22616__$1;
(statearr_22620_22640[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22617 === (1))){
var inst_22593 = (0);
var state_22616__$1 = (function (){var statearr_22621 = state_22616;
(statearr_22621[(8)] = inst_22593);

return statearr_22621;
})();
var statearr_22622_22641 = state_22616__$1;
(statearr_22622_22641[(2)] = null);

(statearr_22622_22641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22617 === (4))){
var state_22616__$1 = state_22616;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22616__$1,(7),ch);
} else {
if((state_val_22617 === (6))){
var inst_22611 = (state_22616[(2)]);
var state_22616__$1 = state_22616;
var statearr_22623_22642 = state_22616__$1;
(statearr_22623_22642[(2)] = inst_22611);

(statearr_22623_22642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22617 === (3))){
var inst_22613 = (state_22616[(2)]);
var inst_22614 = cljs.core.async.close_BANG_.call(null,out);
var state_22616__$1 = (function (){var statearr_22624 = state_22616;
(statearr_22624[(9)] = inst_22613);

return statearr_22624;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22616__$1,inst_22614);
} else {
if((state_val_22617 === (2))){
var inst_22593 = (state_22616[(8)]);
var inst_22595 = (inst_22593 < n);
var state_22616__$1 = state_22616;
if(cljs.core.truth_(inst_22595)){
var statearr_22625_22643 = state_22616__$1;
(statearr_22625_22643[(1)] = (4));

} else {
var statearr_22626_22644 = state_22616__$1;
(statearr_22626_22644[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22617 === (11))){
var inst_22593 = (state_22616[(8)]);
var inst_22603 = (state_22616[(2)]);
var inst_22604 = (inst_22593 + (1));
var inst_22593__$1 = inst_22604;
var state_22616__$1 = (function (){var statearr_22627 = state_22616;
(statearr_22627[(8)] = inst_22593__$1);

(statearr_22627[(10)] = inst_22603);

return statearr_22627;
})();
var statearr_22628_22645 = state_22616__$1;
(statearr_22628_22645[(2)] = null);

(statearr_22628_22645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22617 === (9))){
var state_22616__$1 = state_22616;
var statearr_22629_22646 = state_22616__$1;
(statearr_22629_22646[(2)] = null);

(statearr_22629_22646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22617 === (5))){
var state_22616__$1 = state_22616;
var statearr_22630_22647 = state_22616__$1;
(statearr_22630_22647[(2)] = null);

(statearr_22630_22647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22617 === (10))){
var inst_22608 = (state_22616[(2)]);
var state_22616__$1 = state_22616;
var statearr_22631_22648 = state_22616__$1;
(statearr_22631_22648[(2)] = inst_22608);

(statearr_22631_22648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22617 === (8))){
var inst_22598 = (state_22616[(7)]);
var state_22616__$1 = state_22616;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22616__$1,(11),out,inst_22598);
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
var cljs$core$async$state_machine__21106__auto__ = null;
var cljs$core$async$state_machine__21106__auto____0 = (function (){
var statearr_22632 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22632[(0)] = cljs$core$async$state_machine__21106__auto__);

(statearr_22632[(1)] = (1));

return statearr_22632;
});
var cljs$core$async$state_machine__21106__auto____1 = (function (state_22616){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_22616);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e22633){var ex__21109__auto__ = e22633;
var statearr_22634_22649 = state_22616;
(statearr_22634_22649[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_22616[(4)]))){
var statearr_22635_22650 = state_22616;
(statearr_22635_22650[(1)] = cljs.core.first.call(null,(state_22616[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22651 = state_22616;
state_22616 = G__22651;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$state_machine__21106__auto__ = function(state_22616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21106__auto____1.call(this,state_22616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21106__auto____0;
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21106__auto____1;
return cljs$core$async$state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_22636 = f__21180__auto__.call(null);
(statearr_22636[(6)] = c__21179__auto___22638);

return statearr_22636;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22653 = (function (f,ch,meta22654){
this.f = f;
this.ch = ch;
this.meta22654 = meta22654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22655,meta22654__$1){
var self__ = this;
var _22655__$1 = this;
return (new cljs.core.async.t_cljs$core$async22653(self__.f,self__.ch,meta22654__$1));
}));

(cljs.core.async.t_cljs$core$async22653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22655){
var self__ = this;
var _22655__$1 = this;
return self__.meta22654;
}));

(cljs.core.async.t_cljs$core$async22653.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22653.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async22653.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async22653.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22653.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22656 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22656 = (function (f,ch,meta22654,_,fn1,meta22657){
this.f = f;
this.ch = ch;
this.meta22654 = meta22654;
this._ = _;
this.fn1 = fn1;
this.meta22657 = meta22657;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22658,meta22657__$1){
var self__ = this;
var _22658__$1 = this;
return (new cljs.core.async.t_cljs$core$async22656(self__.f,self__.ch,self__.meta22654,self__._,self__.fn1,meta22657__$1));
}));

(cljs.core.async.t_cljs$core$async22656.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22658){
var self__ = this;
var _22658__$1 = this;
return self__.meta22657;
}));

(cljs.core.async.t_cljs$core$async22656.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22656.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async22656.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async22656.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__22652_SHARP_){
return f1.call(null,(((p1__22652_SHARP_ == null))?null:self__.f.call(null,p1__22652_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async22656.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22654","meta22654",-161488455,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async22653","cljs.core.async/t_cljs$core$async22653",1235980425,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta22657","meta22657",-184483563,null)], null);
}));

(cljs.core.async.t_cljs$core$async22656.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22656.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22656");

(cljs.core.async.t_cljs$core$async22656.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async22656");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22656.
 */
cljs.core.async.__GT_t_cljs$core$async22656 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22656(f__$1,ch__$1,meta22654__$1,___$2,fn1__$1,meta22657){
return (new cljs.core.async.t_cljs$core$async22656(f__$1,ch__$1,meta22654__$1,___$2,fn1__$1,meta22657));
});

}

return (new cljs.core.async.t_cljs$core$async22656(self__.f,self__.ch,self__.meta22654,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

(cljs.core.async.t_cljs$core$async22653.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22653.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async22653.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22654","meta22654",-161488455,null)], null);
}));

(cljs.core.async.t_cljs$core$async22653.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22653.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22653");

(cljs.core.async.t_cljs$core$async22653.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async22653");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22653.
 */
cljs.core.async.__GT_t_cljs$core$async22653 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async22653(f__$1,ch__$1,meta22654){
return (new cljs.core.async.t_cljs$core$async22653(f__$1,ch__$1,meta22654));
});

}

return (new cljs.core.async.t_cljs$core$async22653(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22659 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22659 = (function (f,ch,meta22660){
this.f = f;
this.ch = ch;
this.meta22660 = meta22660;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22661,meta22660__$1){
var self__ = this;
var _22661__$1 = this;
return (new cljs.core.async.t_cljs$core$async22659(self__.f,self__.ch,meta22660__$1));
}));

(cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22661){
var self__ = this;
var _22661__$1 = this;
return self__.meta22660;
}));

(cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22659.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async22659.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22660","meta22660",1038229122,null)], null);
}));

(cljs.core.async.t_cljs$core$async22659.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22659.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22659");

(cljs.core.async.t_cljs$core$async22659.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async22659");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22659.
 */
cljs.core.async.__GT_t_cljs$core$async22659 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async22659(f__$1,ch__$1,meta22660){
return (new cljs.core.async.t_cljs$core$async22659(f__$1,ch__$1,meta22660));
});

}

return (new cljs.core.async.t_cljs$core$async22659(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async22662 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22662 = (function (p,ch,meta22663){
this.p = p;
this.ch = ch;
this.meta22663 = meta22663;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async22662.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22664,meta22663__$1){
var self__ = this;
var _22664__$1 = this;
return (new cljs.core.async.t_cljs$core$async22662(self__.p,self__.ch,meta22663__$1));
}));

(cljs.core.async.t_cljs$core$async22662.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22664){
var self__ = this;
var _22664__$1 = this;
return self__.meta22663;
}));

(cljs.core.async.t_cljs$core$async22662.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22662.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async22662.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async22662.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22662.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async22662.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async22662.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async22662.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta22663","meta22663",-1921515114,null)], null);
}));

(cljs.core.async.t_cljs$core$async22662.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async22662.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22662");

(cljs.core.async.t_cljs$core$async22662.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write.call(null,writer__5331__auto__,"cljs.core.async/t_cljs$core$async22662");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async22662.
 */
cljs.core.async.__GT_t_cljs$core$async22662 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async22662(p__$1,ch__$1,meta22663){
return (new cljs.core.async.t_cljs$core$async22662(p__$1,ch__$1,meta22663));
});

}

return (new cljs.core.async.t_cljs$core$async22662(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__22666 = arguments.length;
switch (G__22666) {
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
var c__21179__auto___22707 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_22687){
var state_val_22688 = (state_22687[(1)]);
if((state_val_22688 === (7))){
var inst_22683 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
var statearr_22689_22708 = state_22687__$1;
(statearr_22689_22708[(2)] = inst_22683);

(statearr_22689_22708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (1))){
var state_22687__$1 = state_22687;
var statearr_22690_22709 = state_22687__$1;
(statearr_22690_22709[(2)] = null);

(statearr_22690_22709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (4))){
var inst_22669 = (state_22687[(7)]);
var inst_22669__$1 = (state_22687[(2)]);
var inst_22670 = (inst_22669__$1 == null);
var state_22687__$1 = (function (){var statearr_22691 = state_22687;
(statearr_22691[(7)] = inst_22669__$1);

return statearr_22691;
})();
if(cljs.core.truth_(inst_22670)){
var statearr_22692_22710 = state_22687__$1;
(statearr_22692_22710[(1)] = (5));

} else {
var statearr_22693_22711 = state_22687__$1;
(statearr_22693_22711[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (6))){
var inst_22669 = (state_22687[(7)]);
var inst_22674 = p.call(null,inst_22669);
var state_22687__$1 = state_22687;
if(cljs.core.truth_(inst_22674)){
var statearr_22694_22712 = state_22687__$1;
(statearr_22694_22712[(1)] = (8));

} else {
var statearr_22695_22713 = state_22687__$1;
(statearr_22695_22713[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (3))){
var inst_22685 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22687__$1,inst_22685);
} else {
if((state_val_22688 === (2))){
var state_22687__$1 = state_22687;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22687__$1,(4),ch);
} else {
if((state_val_22688 === (11))){
var inst_22677 = (state_22687[(2)]);
var state_22687__$1 = state_22687;
var statearr_22696_22714 = state_22687__$1;
(statearr_22696_22714[(2)] = inst_22677);

(statearr_22696_22714[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (9))){
var state_22687__$1 = state_22687;
var statearr_22697_22715 = state_22687__$1;
(statearr_22697_22715[(2)] = null);

(statearr_22697_22715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (5))){
var inst_22672 = cljs.core.async.close_BANG_.call(null,out);
var state_22687__$1 = state_22687;
var statearr_22698_22716 = state_22687__$1;
(statearr_22698_22716[(2)] = inst_22672);

(statearr_22698_22716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (10))){
var inst_22680 = (state_22687[(2)]);
var state_22687__$1 = (function (){var statearr_22699 = state_22687;
(statearr_22699[(8)] = inst_22680);

return statearr_22699;
})();
var statearr_22700_22717 = state_22687__$1;
(statearr_22700_22717[(2)] = null);

(statearr_22700_22717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22688 === (8))){
var inst_22669 = (state_22687[(7)]);
var state_22687__$1 = state_22687;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22687__$1,(11),out,inst_22669);
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
var cljs$core$async$state_machine__21106__auto__ = null;
var cljs$core$async$state_machine__21106__auto____0 = (function (){
var statearr_22701 = [null,null,null,null,null,null,null,null,null];
(statearr_22701[(0)] = cljs$core$async$state_machine__21106__auto__);

(statearr_22701[(1)] = (1));

return statearr_22701;
});
var cljs$core$async$state_machine__21106__auto____1 = (function (state_22687){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_22687);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e22702){var ex__21109__auto__ = e22702;
var statearr_22703_22718 = state_22687;
(statearr_22703_22718[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_22687[(4)]))){
var statearr_22704_22719 = state_22687;
(statearr_22704_22719[(1)] = cljs.core.first.call(null,(state_22687[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22720 = state_22687;
state_22687 = G__22720;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$state_machine__21106__auto__ = function(state_22687){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21106__auto____1.call(this,state_22687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21106__auto____0;
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21106__auto____1;
return cljs$core$async$state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_22705 = f__21180__auto__.call(null);
(statearr_22705[(6)] = c__21179__auto___22707);

return statearr_22705;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__22722 = arguments.length;
switch (G__22722) {
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
var c__21179__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_22785){
var state_val_22786 = (state_22785[(1)]);
if((state_val_22786 === (7))){
var inst_22781 = (state_22785[(2)]);
var state_22785__$1 = state_22785;
var statearr_22787_22826 = state_22785__$1;
(statearr_22787_22826[(2)] = inst_22781);

(statearr_22787_22826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (20))){
var inst_22751 = (state_22785[(7)]);
var inst_22762 = (state_22785[(2)]);
var inst_22763 = cljs.core.next.call(null,inst_22751);
var inst_22737 = inst_22763;
var inst_22738 = null;
var inst_22739 = (0);
var inst_22740 = (0);
var state_22785__$1 = (function (){var statearr_22788 = state_22785;
(statearr_22788[(8)] = inst_22739);

(statearr_22788[(9)] = inst_22740);

(statearr_22788[(10)] = inst_22762);

(statearr_22788[(11)] = inst_22738);

(statearr_22788[(12)] = inst_22737);

return statearr_22788;
})();
var statearr_22789_22827 = state_22785__$1;
(statearr_22789_22827[(2)] = null);

(statearr_22789_22827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (1))){
var state_22785__$1 = state_22785;
var statearr_22790_22828 = state_22785__$1;
(statearr_22790_22828[(2)] = null);

(statearr_22790_22828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (4))){
var inst_22726 = (state_22785[(13)]);
var inst_22726__$1 = (state_22785[(2)]);
var inst_22727 = (inst_22726__$1 == null);
var state_22785__$1 = (function (){var statearr_22791 = state_22785;
(statearr_22791[(13)] = inst_22726__$1);

return statearr_22791;
})();
if(cljs.core.truth_(inst_22727)){
var statearr_22792_22829 = state_22785__$1;
(statearr_22792_22829[(1)] = (5));

} else {
var statearr_22793_22830 = state_22785__$1;
(statearr_22793_22830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (15))){
var state_22785__$1 = state_22785;
var statearr_22797_22831 = state_22785__$1;
(statearr_22797_22831[(2)] = null);

(statearr_22797_22831[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (21))){
var state_22785__$1 = state_22785;
var statearr_22798_22832 = state_22785__$1;
(statearr_22798_22832[(2)] = null);

(statearr_22798_22832[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (13))){
var inst_22739 = (state_22785[(8)]);
var inst_22740 = (state_22785[(9)]);
var inst_22738 = (state_22785[(11)]);
var inst_22737 = (state_22785[(12)]);
var inst_22747 = (state_22785[(2)]);
var inst_22748 = (inst_22740 + (1));
var tmp22794 = inst_22739;
var tmp22795 = inst_22738;
var tmp22796 = inst_22737;
var inst_22737__$1 = tmp22796;
var inst_22738__$1 = tmp22795;
var inst_22739__$1 = tmp22794;
var inst_22740__$1 = inst_22748;
var state_22785__$1 = (function (){var statearr_22799 = state_22785;
(statearr_22799[(14)] = inst_22747);

(statearr_22799[(8)] = inst_22739__$1);

(statearr_22799[(9)] = inst_22740__$1);

(statearr_22799[(11)] = inst_22738__$1);

(statearr_22799[(12)] = inst_22737__$1);

return statearr_22799;
})();
var statearr_22800_22833 = state_22785__$1;
(statearr_22800_22833[(2)] = null);

(statearr_22800_22833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (22))){
var state_22785__$1 = state_22785;
var statearr_22801_22834 = state_22785__$1;
(statearr_22801_22834[(2)] = null);

(statearr_22801_22834[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (6))){
var inst_22726 = (state_22785[(13)]);
var inst_22735 = f.call(null,inst_22726);
var inst_22736 = cljs.core.seq.call(null,inst_22735);
var inst_22737 = inst_22736;
var inst_22738 = null;
var inst_22739 = (0);
var inst_22740 = (0);
var state_22785__$1 = (function (){var statearr_22802 = state_22785;
(statearr_22802[(8)] = inst_22739);

(statearr_22802[(9)] = inst_22740);

(statearr_22802[(11)] = inst_22738);

(statearr_22802[(12)] = inst_22737);

return statearr_22802;
})();
var statearr_22803_22835 = state_22785__$1;
(statearr_22803_22835[(2)] = null);

(statearr_22803_22835[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (17))){
var inst_22751 = (state_22785[(7)]);
var inst_22755 = cljs.core.chunk_first.call(null,inst_22751);
var inst_22756 = cljs.core.chunk_rest.call(null,inst_22751);
var inst_22757 = cljs.core.count.call(null,inst_22755);
var inst_22737 = inst_22756;
var inst_22738 = inst_22755;
var inst_22739 = inst_22757;
var inst_22740 = (0);
var state_22785__$1 = (function (){var statearr_22804 = state_22785;
(statearr_22804[(8)] = inst_22739);

(statearr_22804[(9)] = inst_22740);

(statearr_22804[(11)] = inst_22738);

(statearr_22804[(12)] = inst_22737);

return statearr_22804;
})();
var statearr_22805_22836 = state_22785__$1;
(statearr_22805_22836[(2)] = null);

(statearr_22805_22836[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (3))){
var inst_22783 = (state_22785[(2)]);
var state_22785__$1 = state_22785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22785__$1,inst_22783);
} else {
if((state_val_22786 === (12))){
var inst_22771 = (state_22785[(2)]);
var state_22785__$1 = state_22785;
var statearr_22806_22837 = state_22785__$1;
(statearr_22806_22837[(2)] = inst_22771);

(statearr_22806_22837[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (2))){
var state_22785__$1 = state_22785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22785__$1,(4),in$);
} else {
if((state_val_22786 === (23))){
var inst_22779 = (state_22785[(2)]);
var state_22785__$1 = state_22785;
var statearr_22807_22838 = state_22785__$1;
(statearr_22807_22838[(2)] = inst_22779);

(statearr_22807_22838[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (19))){
var inst_22766 = (state_22785[(2)]);
var state_22785__$1 = state_22785;
var statearr_22808_22839 = state_22785__$1;
(statearr_22808_22839[(2)] = inst_22766);

(statearr_22808_22839[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (11))){
var inst_22751 = (state_22785[(7)]);
var inst_22737 = (state_22785[(12)]);
var inst_22751__$1 = cljs.core.seq.call(null,inst_22737);
var state_22785__$1 = (function (){var statearr_22809 = state_22785;
(statearr_22809[(7)] = inst_22751__$1);

return statearr_22809;
})();
if(inst_22751__$1){
var statearr_22810_22840 = state_22785__$1;
(statearr_22810_22840[(1)] = (14));

} else {
var statearr_22811_22841 = state_22785__$1;
(statearr_22811_22841[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (9))){
var inst_22773 = (state_22785[(2)]);
var inst_22774 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_22785__$1 = (function (){var statearr_22812 = state_22785;
(statearr_22812[(15)] = inst_22773);

return statearr_22812;
})();
if(cljs.core.truth_(inst_22774)){
var statearr_22813_22842 = state_22785__$1;
(statearr_22813_22842[(1)] = (21));

} else {
var statearr_22814_22843 = state_22785__$1;
(statearr_22814_22843[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (5))){
var inst_22729 = cljs.core.async.close_BANG_.call(null,out);
var state_22785__$1 = state_22785;
var statearr_22815_22844 = state_22785__$1;
(statearr_22815_22844[(2)] = inst_22729);

(statearr_22815_22844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (14))){
var inst_22751 = (state_22785[(7)]);
var inst_22753 = cljs.core.chunked_seq_QMARK_.call(null,inst_22751);
var state_22785__$1 = state_22785;
if(inst_22753){
var statearr_22816_22845 = state_22785__$1;
(statearr_22816_22845[(1)] = (17));

} else {
var statearr_22817_22846 = state_22785__$1;
(statearr_22817_22846[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (16))){
var inst_22769 = (state_22785[(2)]);
var state_22785__$1 = state_22785;
var statearr_22818_22847 = state_22785__$1;
(statearr_22818_22847[(2)] = inst_22769);

(statearr_22818_22847[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22786 === (10))){
var inst_22740 = (state_22785[(9)]);
var inst_22738 = (state_22785[(11)]);
var inst_22745 = cljs.core._nth.call(null,inst_22738,inst_22740);
var state_22785__$1 = state_22785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22785__$1,(13),out,inst_22745);
} else {
if((state_val_22786 === (18))){
var inst_22751 = (state_22785[(7)]);
var inst_22760 = cljs.core.first.call(null,inst_22751);
var state_22785__$1 = state_22785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22785__$1,(20),out,inst_22760);
} else {
if((state_val_22786 === (8))){
var inst_22739 = (state_22785[(8)]);
var inst_22740 = (state_22785[(9)]);
var inst_22742 = (inst_22740 < inst_22739);
var inst_22743 = inst_22742;
var state_22785__$1 = state_22785;
if(cljs.core.truth_(inst_22743)){
var statearr_22819_22848 = state_22785__$1;
(statearr_22819_22848[(1)] = (10));

} else {
var statearr_22820_22849 = state_22785__$1;
(statearr_22820_22849[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__21106__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__21106__auto____0 = (function (){
var statearr_22821 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22821[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__21106__auto__);

(statearr_22821[(1)] = (1));

return statearr_22821;
});
var cljs$core$async$mapcat_STAR__$_state_machine__21106__auto____1 = (function (state_22785){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_22785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e22822){var ex__21109__auto__ = e22822;
var statearr_22823_22850 = state_22785;
(statearr_22823_22850[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_22785[(4)]))){
var statearr_22824_22851 = state_22785;
(statearr_22824_22851[(1)] = cljs.core.first.call(null,(state_22785[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22852 = state_22785;
state_22785 = G__22852;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__21106__auto__ = function(state_22785){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__21106__auto____1.call(this,state_22785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__21106__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__21106__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_22825 = f__21180__auto__.call(null);
(statearr_22825[(6)] = c__21179__auto__);

return statearr_22825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));

return c__21179__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__22854 = arguments.length;
switch (G__22854) {
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
var G__22857 = arguments.length;
switch (G__22857) {
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
var G__22860 = arguments.length;
switch (G__22860) {
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
var c__21179__auto___22908 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_22884){
var state_val_22885 = (state_22884[(1)]);
if((state_val_22885 === (7))){
var inst_22879 = (state_22884[(2)]);
var state_22884__$1 = state_22884;
var statearr_22886_22909 = state_22884__$1;
(statearr_22886_22909[(2)] = inst_22879);

(statearr_22886_22909[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22885 === (1))){
var inst_22861 = null;
var state_22884__$1 = (function (){var statearr_22887 = state_22884;
(statearr_22887[(7)] = inst_22861);

return statearr_22887;
})();
var statearr_22888_22910 = state_22884__$1;
(statearr_22888_22910[(2)] = null);

(statearr_22888_22910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22885 === (4))){
var inst_22864 = (state_22884[(8)]);
var inst_22864__$1 = (state_22884[(2)]);
var inst_22865 = (inst_22864__$1 == null);
var inst_22866 = cljs.core.not.call(null,inst_22865);
var state_22884__$1 = (function (){var statearr_22889 = state_22884;
(statearr_22889[(8)] = inst_22864__$1);

return statearr_22889;
})();
if(inst_22866){
var statearr_22890_22911 = state_22884__$1;
(statearr_22890_22911[(1)] = (5));

} else {
var statearr_22891_22912 = state_22884__$1;
(statearr_22891_22912[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22885 === (6))){
var state_22884__$1 = state_22884;
var statearr_22892_22913 = state_22884__$1;
(statearr_22892_22913[(2)] = null);

(statearr_22892_22913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22885 === (3))){
var inst_22881 = (state_22884[(2)]);
var inst_22882 = cljs.core.async.close_BANG_.call(null,out);
var state_22884__$1 = (function (){var statearr_22893 = state_22884;
(statearr_22893[(9)] = inst_22881);

return statearr_22893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22884__$1,inst_22882);
} else {
if((state_val_22885 === (2))){
var state_22884__$1 = state_22884;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22884__$1,(4),ch);
} else {
if((state_val_22885 === (11))){
var inst_22864 = (state_22884[(8)]);
var inst_22873 = (state_22884[(2)]);
var inst_22861 = inst_22864;
var state_22884__$1 = (function (){var statearr_22894 = state_22884;
(statearr_22894[(10)] = inst_22873);

(statearr_22894[(7)] = inst_22861);

return statearr_22894;
})();
var statearr_22895_22914 = state_22884__$1;
(statearr_22895_22914[(2)] = null);

(statearr_22895_22914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22885 === (9))){
var inst_22864 = (state_22884[(8)]);
var state_22884__$1 = state_22884;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22884__$1,(11),out,inst_22864);
} else {
if((state_val_22885 === (5))){
var inst_22864 = (state_22884[(8)]);
var inst_22861 = (state_22884[(7)]);
var inst_22868 = cljs.core._EQ_.call(null,inst_22864,inst_22861);
var state_22884__$1 = state_22884;
if(inst_22868){
var statearr_22897_22915 = state_22884__$1;
(statearr_22897_22915[(1)] = (8));

} else {
var statearr_22898_22916 = state_22884__$1;
(statearr_22898_22916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22885 === (10))){
var inst_22876 = (state_22884[(2)]);
var state_22884__$1 = state_22884;
var statearr_22899_22917 = state_22884__$1;
(statearr_22899_22917[(2)] = inst_22876);

(statearr_22899_22917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22885 === (8))){
var inst_22861 = (state_22884[(7)]);
var tmp22896 = inst_22861;
var inst_22861__$1 = tmp22896;
var state_22884__$1 = (function (){var statearr_22900 = state_22884;
(statearr_22900[(7)] = inst_22861__$1);

return statearr_22900;
})();
var statearr_22901_22918 = state_22884__$1;
(statearr_22901_22918[(2)] = null);

(statearr_22901_22918[(1)] = (2));


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
var cljs$core$async$state_machine__21106__auto__ = null;
var cljs$core$async$state_machine__21106__auto____0 = (function (){
var statearr_22902 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22902[(0)] = cljs$core$async$state_machine__21106__auto__);

(statearr_22902[(1)] = (1));

return statearr_22902;
});
var cljs$core$async$state_machine__21106__auto____1 = (function (state_22884){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_22884);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e22903){var ex__21109__auto__ = e22903;
var statearr_22904_22919 = state_22884;
(statearr_22904_22919[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_22884[(4)]))){
var statearr_22905_22920 = state_22884;
(statearr_22905_22920[(1)] = cljs.core.first.call(null,(state_22884[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22921 = state_22884;
state_22884 = G__22921;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$state_machine__21106__auto__ = function(state_22884){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21106__auto____1.call(this,state_22884);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21106__auto____0;
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21106__auto____1;
return cljs$core$async$state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_22906 = f__21180__auto__.call(null);
(statearr_22906[(6)] = c__21179__auto___22908);

return statearr_22906;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__22923 = arguments.length;
switch (G__22923) {
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
var c__21179__auto___22990 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_22961){
var state_val_22962 = (state_22961[(1)]);
if((state_val_22962 === (7))){
var inst_22957 = (state_22961[(2)]);
var state_22961__$1 = state_22961;
var statearr_22963_22991 = state_22961__$1;
(statearr_22963_22991[(2)] = inst_22957);

(statearr_22963_22991[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22962 === (1))){
var inst_22924 = (new Array(n));
var inst_22925 = inst_22924;
var inst_22926 = (0);
var state_22961__$1 = (function (){var statearr_22964 = state_22961;
(statearr_22964[(7)] = inst_22925);

(statearr_22964[(8)] = inst_22926);

return statearr_22964;
})();
var statearr_22965_22992 = state_22961__$1;
(statearr_22965_22992[(2)] = null);

(statearr_22965_22992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22962 === (4))){
var inst_22929 = (state_22961[(9)]);
var inst_22929__$1 = (state_22961[(2)]);
var inst_22930 = (inst_22929__$1 == null);
var inst_22931 = cljs.core.not.call(null,inst_22930);
var state_22961__$1 = (function (){var statearr_22966 = state_22961;
(statearr_22966[(9)] = inst_22929__$1);

return statearr_22966;
})();
if(inst_22931){
var statearr_22967_22993 = state_22961__$1;
(statearr_22967_22993[(1)] = (5));

} else {
var statearr_22968_22994 = state_22961__$1;
(statearr_22968_22994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22962 === (15))){
var inst_22951 = (state_22961[(2)]);
var state_22961__$1 = state_22961;
var statearr_22969_22995 = state_22961__$1;
(statearr_22969_22995[(2)] = inst_22951);

(statearr_22969_22995[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22962 === (13))){
var state_22961__$1 = state_22961;
var statearr_22970_22996 = state_22961__$1;
(statearr_22970_22996[(2)] = null);

(statearr_22970_22996[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22962 === (6))){
var inst_22926 = (state_22961[(8)]);
var inst_22947 = (inst_22926 > (0));
var state_22961__$1 = state_22961;
if(cljs.core.truth_(inst_22947)){
var statearr_22971_22997 = state_22961__$1;
(statearr_22971_22997[(1)] = (12));

} else {
var statearr_22972_22998 = state_22961__$1;
(statearr_22972_22998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22962 === (3))){
var inst_22959 = (state_22961[(2)]);
var state_22961__$1 = state_22961;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22961__$1,inst_22959);
} else {
if((state_val_22962 === (12))){
var inst_22925 = (state_22961[(7)]);
var inst_22949 = cljs.core.vec.call(null,inst_22925);
var state_22961__$1 = state_22961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22961__$1,(15),out,inst_22949);
} else {
if((state_val_22962 === (2))){
var state_22961__$1 = state_22961;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22961__$1,(4),ch);
} else {
if((state_val_22962 === (11))){
var inst_22941 = (state_22961[(2)]);
var inst_22942 = (new Array(n));
var inst_22925 = inst_22942;
var inst_22926 = (0);
var state_22961__$1 = (function (){var statearr_22973 = state_22961;
(statearr_22973[(7)] = inst_22925);

(statearr_22973[(8)] = inst_22926);

(statearr_22973[(10)] = inst_22941);

return statearr_22973;
})();
var statearr_22974_22999 = state_22961__$1;
(statearr_22974_22999[(2)] = null);

(statearr_22974_22999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22962 === (9))){
var inst_22925 = (state_22961[(7)]);
var inst_22939 = cljs.core.vec.call(null,inst_22925);
var state_22961__$1 = state_22961;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22961__$1,(11),out,inst_22939);
} else {
if((state_val_22962 === (5))){
var inst_22929 = (state_22961[(9)]);
var inst_22934 = (state_22961[(11)]);
var inst_22925 = (state_22961[(7)]);
var inst_22926 = (state_22961[(8)]);
var inst_22933 = (inst_22925[inst_22926] = inst_22929);
var inst_22934__$1 = (inst_22926 + (1));
var inst_22935 = (inst_22934__$1 < n);
var state_22961__$1 = (function (){var statearr_22975 = state_22961;
(statearr_22975[(11)] = inst_22934__$1);

(statearr_22975[(12)] = inst_22933);

return statearr_22975;
})();
if(cljs.core.truth_(inst_22935)){
var statearr_22976_23000 = state_22961__$1;
(statearr_22976_23000[(1)] = (8));

} else {
var statearr_22977_23001 = state_22961__$1;
(statearr_22977_23001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22962 === (14))){
var inst_22954 = (state_22961[(2)]);
var inst_22955 = cljs.core.async.close_BANG_.call(null,out);
var state_22961__$1 = (function (){var statearr_22979 = state_22961;
(statearr_22979[(13)] = inst_22954);

return statearr_22979;
})();
var statearr_22980_23002 = state_22961__$1;
(statearr_22980_23002[(2)] = inst_22955);

(statearr_22980_23002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22962 === (10))){
var inst_22945 = (state_22961[(2)]);
var state_22961__$1 = state_22961;
var statearr_22981_23003 = state_22961__$1;
(statearr_22981_23003[(2)] = inst_22945);

(statearr_22981_23003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22962 === (8))){
var inst_22934 = (state_22961[(11)]);
var inst_22925 = (state_22961[(7)]);
var tmp22978 = inst_22925;
var inst_22925__$1 = tmp22978;
var inst_22926 = inst_22934;
var state_22961__$1 = (function (){var statearr_22982 = state_22961;
(statearr_22982[(7)] = inst_22925__$1);

(statearr_22982[(8)] = inst_22926);

return statearr_22982;
})();
var statearr_22983_23004 = state_22961__$1;
(statearr_22983_23004[(2)] = null);

(statearr_22983_23004[(1)] = (2));


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
var cljs$core$async$state_machine__21106__auto__ = null;
var cljs$core$async$state_machine__21106__auto____0 = (function (){
var statearr_22984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22984[(0)] = cljs$core$async$state_machine__21106__auto__);

(statearr_22984[(1)] = (1));

return statearr_22984;
});
var cljs$core$async$state_machine__21106__auto____1 = (function (state_22961){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_22961);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e22985){var ex__21109__auto__ = e22985;
var statearr_22986_23005 = state_22961;
(statearr_22986_23005[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_22961[(4)]))){
var statearr_22987_23006 = state_22961;
(statearr_22987_23006[(1)] = cljs.core.first.call(null,(state_22961[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23007 = state_22961;
state_22961 = G__23007;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$state_machine__21106__auto__ = function(state_22961){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21106__auto____1.call(this,state_22961);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21106__auto____0;
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21106__auto____1;
return cljs$core$async$state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_22988 = f__21180__auto__.call(null);
(statearr_22988[(6)] = c__21179__auto___22990);

return statearr_22988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__23009 = arguments.length;
switch (G__23009) {
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
var c__21179__auto___23087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__21180__auto__ = (function (){var switch__21105__auto__ = (function (state_23054){
var state_val_23055 = (state_23054[(1)]);
if((state_val_23055 === (7))){
var inst_23050 = (state_23054[(2)]);
var state_23054__$1 = state_23054;
var statearr_23056_23088 = state_23054__$1;
(statearr_23056_23088[(2)] = inst_23050);

(statearr_23056_23088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (1))){
var inst_23010 = [];
var inst_23011 = inst_23010;
var inst_23012 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_23054__$1 = (function (){var statearr_23057 = state_23054;
(statearr_23057[(7)] = inst_23011);

(statearr_23057[(8)] = inst_23012);

return statearr_23057;
})();
var statearr_23058_23089 = state_23054__$1;
(statearr_23058_23089[(2)] = null);

(statearr_23058_23089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (4))){
var inst_23015 = (state_23054[(9)]);
var inst_23015__$1 = (state_23054[(2)]);
var inst_23016 = (inst_23015__$1 == null);
var inst_23017 = cljs.core.not.call(null,inst_23016);
var state_23054__$1 = (function (){var statearr_23059 = state_23054;
(statearr_23059[(9)] = inst_23015__$1);

return statearr_23059;
})();
if(inst_23017){
var statearr_23060_23090 = state_23054__$1;
(statearr_23060_23090[(1)] = (5));

} else {
var statearr_23061_23091 = state_23054__$1;
(statearr_23061_23091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (15))){
var inst_23011 = (state_23054[(7)]);
var inst_23042 = cljs.core.vec.call(null,inst_23011);
var state_23054__$1 = state_23054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23054__$1,(18),out,inst_23042);
} else {
if((state_val_23055 === (13))){
var inst_23037 = (state_23054[(2)]);
var state_23054__$1 = state_23054;
var statearr_23062_23092 = state_23054__$1;
(statearr_23062_23092[(2)] = inst_23037);

(statearr_23062_23092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (6))){
var inst_23011 = (state_23054[(7)]);
var inst_23039 = inst_23011.length;
var inst_23040 = (inst_23039 > (0));
var state_23054__$1 = state_23054;
if(cljs.core.truth_(inst_23040)){
var statearr_23063_23093 = state_23054__$1;
(statearr_23063_23093[(1)] = (15));

} else {
var statearr_23064_23094 = state_23054__$1;
(statearr_23064_23094[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (17))){
var inst_23047 = (state_23054[(2)]);
var inst_23048 = cljs.core.async.close_BANG_.call(null,out);
var state_23054__$1 = (function (){var statearr_23065 = state_23054;
(statearr_23065[(10)] = inst_23047);

return statearr_23065;
})();
var statearr_23066_23095 = state_23054__$1;
(statearr_23066_23095[(2)] = inst_23048);

(statearr_23066_23095[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (3))){
var inst_23052 = (state_23054[(2)]);
var state_23054__$1 = state_23054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23054__$1,inst_23052);
} else {
if((state_val_23055 === (12))){
var inst_23011 = (state_23054[(7)]);
var inst_23030 = cljs.core.vec.call(null,inst_23011);
var state_23054__$1 = state_23054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23054__$1,(14),out,inst_23030);
} else {
if((state_val_23055 === (2))){
var state_23054__$1 = state_23054;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23054__$1,(4),ch);
} else {
if((state_val_23055 === (11))){
var inst_23011 = (state_23054[(7)]);
var inst_23015 = (state_23054[(9)]);
var inst_23019 = (state_23054[(11)]);
var inst_23027 = inst_23011.push(inst_23015);
var tmp23067 = inst_23011;
var inst_23011__$1 = tmp23067;
var inst_23012 = inst_23019;
var state_23054__$1 = (function (){var statearr_23068 = state_23054;
(statearr_23068[(12)] = inst_23027);

(statearr_23068[(7)] = inst_23011__$1);

(statearr_23068[(8)] = inst_23012);

return statearr_23068;
})();
var statearr_23069_23096 = state_23054__$1;
(statearr_23069_23096[(2)] = null);

(statearr_23069_23096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (9))){
var inst_23012 = (state_23054[(8)]);
var inst_23023 = cljs.core.keyword_identical_QMARK_.call(null,inst_23012,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_23054__$1 = state_23054;
var statearr_23070_23097 = state_23054__$1;
(statearr_23070_23097[(2)] = inst_23023);

(statearr_23070_23097[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (5))){
var inst_23012 = (state_23054[(8)]);
var inst_23015 = (state_23054[(9)]);
var inst_23020 = (state_23054[(13)]);
var inst_23019 = (state_23054[(11)]);
var inst_23019__$1 = f.call(null,inst_23015);
var inst_23020__$1 = cljs.core._EQ_.call(null,inst_23019__$1,inst_23012);
var state_23054__$1 = (function (){var statearr_23071 = state_23054;
(statearr_23071[(13)] = inst_23020__$1);

(statearr_23071[(11)] = inst_23019__$1);

return statearr_23071;
})();
if(inst_23020__$1){
var statearr_23072_23098 = state_23054__$1;
(statearr_23072_23098[(1)] = (8));

} else {
var statearr_23073_23099 = state_23054__$1;
(statearr_23073_23099[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (14))){
var inst_23015 = (state_23054[(9)]);
var inst_23019 = (state_23054[(11)]);
var inst_23032 = (state_23054[(2)]);
var inst_23033 = [];
var inst_23034 = inst_23033.push(inst_23015);
var inst_23011 = inst_23033;
var inst_23012 = inst_23019;
var state_23054__$1 = (function (){var statearr_23074 = state_23054;
(statearr_23074[(7)] = inst_23011);

(statearr_23074[(14)] = inst_23032);

(statearr_23074[(8)] = inst_23012);

(statearr_23074[(15)] = inst_23034);

return statearr_23074;
})();
var statearr_23075_23100 = state_23054__$1;
(statearr_23075_23100[(2)] = null);

(statearr_23075_23100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (16))){
var state_23054__$1 = state_23054;
var statearr_23076_23101 = state_23054__$1;
(statearr_23076_23101[(2)] = null);

(statearr_23076_23101[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (10))){
var inst_23025 = (state_23054[(2)]);
var state_23054__$1 = state_23054;
if(cljs.core.truth_(inst_23025)){
var statearr_23077_23102 = state_23054__$1;
(statearr_23077_23102[(1)] = (11));

} else {
var statearr_23078_23103 = state_23054__$1;
(statearr_23078_23103[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (18))){
var inst_23044 = (state_23054[(2)]);
var state_23054__$1 = state_23054;
var statearr_23079_23104 = state_23054__$1;
(statearr_23079_23104[(2)] = inst_23044);

(statearr_23079_23104[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23055 === (8))){
var inst_23020 = (state_23054[(13)]);
var state_23054__$1 = state_23054;
var statearr_23080_23105 = state_23054__$1;
(statearr_23080_23105[(2)] = inst_23020);

(statearr_23080_23105[(1)] = (10));


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
var cljs$core$async$state_machine__21106__auto__ = null;
var cljs$core$async$state_machine__21106__auto____0 = (function (){
var statearr_23081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23081[(0)] = cljs$core$async$state_machine__21106__auto__);

(statearr_23081[(1)] = (1));

return statearr_23081;
});
var cljs$core$async$state_machine__21106__auto____1 = (function (state_23054){
while(true){
var ret_value__21107__auto__ = (function (){try{while(true){
var result__21108__auto__ = switch__21105__auto__.call(null,state_23054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__21108__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__21108__auto__;
}
break;
}
}catch (e23082){var ex__21109__auto__ = e23082;
var statearr_23083_23106 = state_23054;
(statearr_23083_23106[(2)] = ex__21109__auto__);


if(cljs.core.seq.call(null,(state_23054[(4)]))){
var statearr_23084_23107 = state_23054;
(statearr_23084_23107[(1)] = cljs.core.first.call(null,(state_23054[(4)])));

} else {
throw ex__21109__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__21107__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23108 = state_23054;
state_23054 = G__23108;
continue;
} else {
return ret_value__21107__auto__;
}
break;
}
});
cljs$core$async$state_machine__21106__auto__ = function(state_23054){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__21106__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__21106__auto____1.call(this,state_23054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__21106__auto____0;
cljs$core$async$state_machine__21106__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__21106__auto____1;
return cljs$core$async$state_machine__21106__auto__;
})()
})();
var state__21181__auto__ = (function (){var statearr_23085 = f__21180__auto__.call(null);
(statearr_23085[(6)] = c__21179__auto___23087);

return statearr_23085;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__21181__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map
