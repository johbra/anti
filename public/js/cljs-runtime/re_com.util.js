goog.provide('re_com.util');
/**
 * Takes a function 'f' amd a map 'm'.  Applies 'f' to each value in 'm' and returns.
 * (fmap  inc  {:a 4  :b 2})   =>   {:a 5  :b 3}
 */
re_com.util.fmap = (function re_com$util$fmap(f,m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5628__auto__ = (function re_com$util$fmap_$_iter__16191(s__16192){
return (new cljs.core.LazySeq(null,(function (){
var s__16192__$1 = s__16192;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16192__$1);
if(temp__5823__auto__){
var s__16192__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16192__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__16192__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__16194 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__16193 = (0);
while(true){
if((i__16193 < size__5627__auto__)){
var vec__16195 = cljs.core._nth(c__5626__auto__,i__16193);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16195,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16195,(1),null);
cljs.core.chunk_append(b__16194,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null));

var G__16297 = (i__16193 + (1));
i__16193 = G__16297;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16194),re_com$util$fmap_$_iter__16191(cljs.core.chunk_rest(s__16192__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16194),null);
}
} else {
var vec__16198 = cljs.core.first(s__16192__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16198,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16198,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(val) : f.call(null,val))], null),re_com$util$fmap_$_iter__16191(cljs.core.rest(s__16192__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(m);
})());
});
/**
 * Recursively merges maps. If vals are not maps, the last value wins.
 */
re_com.util.deep_merge = (function re_com$util$deep_merge(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16298 = arguments.length;
var i__5877__auto___16299 = (0);
while(true){
if((i__5877__auto___16299 < len__5876__auto___16298)){
args__5882__auto__.push((arguments[i__5877__auto___16299]));

var G__16300 = (i__5877__auto___16299 + (1));
i__5877__auto___16299 = G__16300;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.util.deep_merge.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
if(cljs.core.every_QMARK_(cljs.core.map_QMARK_,vals)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge_with,re_com.util.deep_merge,vals);
} else {
return cljs.core.last(vals);
}
}));

(re_com.util.deep_merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.deep_merge.cljs$lang$applyTo = (function (seq16201){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16201));
}));

/**
 * Only assoc-in if no value exists at ks
 */
re_com.util.assoc_in_if_empty = (function re_com$util$assoc_in_if_empty(m,ks,v){
return cljs.core.assoc_in(m,ks,cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,ks,v));
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's an object that supports IDeref, returns the value inside it by derefing
 *   
 */
re_com.util.deref_or_value = (function re_com$util$deref_or_value(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
return cljs.core.deref(val_or_atom);
} else {
return val_or_atom;
}
});
/**
 * Takes a value or an atom
 *   If it's a value, returns it
 *   If it's a Reagent object that supports IDeref, returns the value inside it, but WITHOUT derefing
 * 
 *   The arg validation code uses this, since calling deref-or-value adds this arg to the watched ratom list for the component
 *   in question, which in turn can cause different rendering behaviour between dev (where we validate) and prod (where we don't).
 * 
 *   This was experienced in popover-content-wrapper with the position-injected atom which was not derefed there, however
 *   the dev-only validation caused it to be derefed, modifying its render behaviour and causing mayhem and madness for the developer.
 * 
 *   See below that different Reagent types have different ways of retrieving the value without causing capture, although in the case of
 *   Track, we just deref it as there is no peek or state, so hopefully this won't cause issues (surely this is used very rarely).
 *   
 */
re_com.util.deref_or_value_peek = (function re_com$util$deref_or_value_peek(val_or_atom){
if((((!((val_or_atom == null))))?(((((val_or_atom.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === val_or_atom.cljs$core$IDeref$))))?true:(((!val_or_atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,val_or_atom))){
if((val_or_atom instanceof reagent.ratom.RAtom)){
return val_or_atom.state;
} else {
if((val_or_atom instanceof reagent.ratom.Reaction)){
return val_or_atom._peek_at();
} else {
if((val_or_atom instanceof reagent.ratom.RCursor)){
return val_or_atom._peek();
} else {
if((val_or_atom instanceof reagent.ratom.Track)){
return cljs.core.deref(val_or_atom);
} else {
if((val_or_atom instanceof reagent.ratom.Wrapper)){
return val_or_atom.state;
} else {
throw (new Error("Unknown reactive data type"));

}
}
}
}
}
} else {
return val_or_atom;
}
});
re_com.util.get_element_by_id = (function re_com$util$get_element_by_id(id){
return document.getElementById(id);
});
/**
 * Left pad a string 's' with '0', until 's' has length 'len'. Return 's' unchanged, if it is already len or greater
 */
re_com.util.pad_zero = (function re_com$util$pad_zero(s,len){
if((cljs.core.count(s) < len)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.take_last(len,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(len,"0"),s)));
} else {
return s;
}
});
/**
 * return 'num' as a string of 'len' characters, left padding with '0' as necessary
 */
re_com.util.pad_zero_number = (function re_com$util$pad_zero_number(num,len){
return re_com.util.pad_zero((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)),len);
});
/**
 * takes a number (and optional :negative keyword to indicate a negative value) and returns that number as a string with 'px' at the end
 */
re_com.util.px = (function re_com$util$px(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16301 = arguments.length;
var i__5877__auto___16302 = (0);
while(true){
if((i__5877__auto___16302 < len__5876__auto___16301)){
args__5882__auto__.push((arguments[i__5877__auto___16302]));

var G__16303 = (i__5877__auto___16302 + (1));
i__5877__auto___16302 = G__16303;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return re_com.util.px.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(re_com.util.px.cljs$core$IFn$_invoke$arity$variadic = (function (val,negative){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(negative)?(- val):val))+"px");
}));

(re_com.util.px.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_com.util.px.cljs$lang$applyTo = (function (seq16213){
var G__16214 = cljs.core.first(seq16213);
var seq16213__$1 = cljs.core.next(seq16213);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16214,seq16213__$1);
}));

/**
 * Takes a string ending with "px" and returns an integer.
 */
re_com.util._LT__px = (function re_com$util$_LT__px(s){
if(cljs.core.seq(s)){
return cljs.core.parse_long(clojure.string.replace(s,"px",""));
} else {
return null;
}
});
/**
 * takes n numbers (could also be strings) and converts them to a space separated px string
 *   e.g. (px-n 10 2 30 4) => '10px 2px 30px 4px' for use in :padding, :margin etc.
 *   Most useful when the args are calculations
 *   e.g. (px-n top-margin (inc h-width) (- top-margin 5) (dec h-width))
 *   Note: Doesn't support :negative like px above but it will work with negative numbers
 */
re_com.util.px_n = (function re_com$util$px_n(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16304 = arguments.length;
var i__5877__auto___16305 = (0);
while(true){
if((i__5877__auto___16305 < len__5876__auto___16304)){
args__5882__auto__.push((arguments[i__5877__auto___16305]));

var G__16306 = (i__5877__auto___16305 + (1));
i__5877__auto___16305 = G__16306;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.util.px_n.cljs$core$IFn$_invoke$arity$variadic = (function (vals){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16215_SHARP_){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__16215_SHARP_)+"px");
}),vals));
}));

(re_com.util.px_n.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.px_n.cljs$lang$applyTo = (function (seq16216){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16216));
}));

/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
re_com.util.pluralize = (function re_com$util$pluralize(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16308 = arguments.length;
var i__5877__auto___16309 = (0);
while(true){
if((i__5877__auto___16309 < len__5876__auto___16308)){
args__5882__auto__.push((arguments[i__5877__auto___16309]));

var G__16310 = (i__5877__auto___16309 + (1));
i__5877__auto___16309 = G__16310;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(re_com.util.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__16224){
var vec__16225 = p__16224;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16225,(0),null);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__5142__auto__ = plural;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular)+"s");
}
})())));
}));

(re_com.util.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.pluralize.cljs$lang$applyTo = (function (seq16217){
var G__16218 = cljs.core.first(seq16217);
var seq16217__$1 = cljs.core.next(seq16217);
var G__16219 = cljs.core.first(seq16217__$1);
var seq16217__$2 = cljs.core.next(seq16217__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16218,G__16219,seq16217__$2);
}));

/**
 * Capitalize the first letter leaving the rest as is
 */
re_com.util.capitalize_first_letter = (function re_com$util$capitalize_first_letter(text){
if(cljs.core.seq(text)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case(cljs.core.first(text)))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(text,(1))));
} else {
return text;
}
});
/**
 * Removes the item at position n from a vector v, returning a shrunk vector
 */
re_com.util.remove_nth = (function re_com$util$remove_nth(v,n){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(0),n),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v,(n + (1)),cljs.core.count(v))));
});
re_com.util.insert_nth = (function re_com$util$insert_nth(vect,index,item){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.merge,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(vect,(0),index),item,cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(vect,index));
});
re_com.util.__GT_v = (function re_com$util$__GT_v(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
if((x == null)){
return null;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
}
});
/**
 * Takes a vector of maps 'v'. Returns the position of the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.position_for_id = (function re_com$util$position_for_id(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16311 = arguments.length;
var i__5877__auto___16312 = (0);
while(true){
if((i__5877__auto___16312 < len__5876__auto___16311)){
args__5882__auto__.push((arguments[i__5877__auto___16312]));

var G__16313 = (i__5877__auto___16312 + (1));
i__5877__auto___16312 = G__16313;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(re_com.util.position_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__16247){
var map__16248 = p__16247;
var map__16248__$1 = cljs.core.__destructure_map(map__16248);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16248__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
var index_fn = (function (index,item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(item) : id_fn.call(null,item)),id)){
return index;
} else {
return null;
}
});
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2(index_fn,v));
}));

(re_com.util.position_for_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.position_for_id.cljs$lang$applyTo = (function (seq16244){
var G__16245 = cljs.core.first(seq16244);
var seq16244__$1 = cljs.core.next(seq16244);
var G__16246 = cljs.core.first(seq16244__$1);
var seq16244__$2 = cljs.core.next(seq16244__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16245,G__16246,seq16244__$2);
}));

/**
 * Takes a vector of maps 'v'. Returns the first item in 'v' whose id-fn (default :id) matches 'id'.
 * Returns nil if id not found
 */
re_com.util.item_for_id = (function re_com$util$item_for_id(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16314 = arguments.length;
var i__5877__auto___16315 = (0);
while(true){
if((i__5877__auto___16315 < len__5876__auto___16314)){
args__5882__auto__.push((arguments[i__5877__auto___16315]));

var G__16316 = (i__5877__auto___16315 + (1));
i__5877__auto___16315 = G__16316;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(re_com.util.item_for_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__16256){
var map__16257 = p__16256;
var map__16257__$1 = cljs.core.__destructure_map(map__16257);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16257__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__16249_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__16249_SHARP_) : id_fn.call(null,p1__16249_SHARP_)),id);
}),v));
}));

(re_com.util.item_for_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.item_for_id.cljs$lang$applyTo = (function (seq16250){
var G__16251 = cljs.core.first(seq16250);
var seq16250__$1 = cljs.core.next(seq16250);
var G__16252 = cljs.core.first(seq16250__$1);
var seq16250__$2 = cljs.core.next(seq16250__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16251,G__16252,seq16250__$2);
}));

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 *   Return v where item matching 'id' is excluded
 */
re_com.util.remove_id_item = (function re_com$util$remove_id_item(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16317 = arguments.length;
var i__5877__auto___16318 = (0);
while(true){
if((i__5877__auto___16318 < len__5876__auto___16317)){
args__5882__auto__.push((arguments[i__5877__auto___16318]));

var G__16319 = (i__5877__auto___16318 + (1));
i__5877__auto___16318 = G__16319;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(re_com.util.remove_id_item.cljs$core$IFn$_invoke$arity$variadic = (function (id,v,p__16271){
var map__16273 = p__16271;
var map__16273__$1 = cljs.core.__destructure_map(map__16273);
var id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16273__$1,new cljs.core.Keyword(null,"id-fn","id-fn",316222798),new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.filterv((function (p1__16264_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((id_fn.cljs$core$IFn$_invoke$arity$1 ? id_fn.cljs$core$IFn$_invoke$arity$1(p1__16264_SHARP_) : id_fn.call(null,p1__16264_SHARP_)),id);
}),v);
}));

(re_com.util.remove_id_item.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_com.util.remove_id_item.cljs$lang$applyTo = (function (seq16265){
var G__16266 = cljs.core.first(seq16265);
var seq16265__$1 = cljs.core.next(seq16265);
var G__16267 = cljs.core.first(seq16265__$1);
var seq16265__$2 = cljs.core.next(seq16265__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16266,G__16267,seq16265__$2);
}));

/**
 * Takes a vector of maps 'v', each of which has an id-fn (default :id) key.
 * Returns a map of id->m for each map 'm' with id 'id' in 'v'.
 */
re_com.util.zip_id = (function re_com$util$zip_id(var_args){
var G__16275 = arguments.length;
switch (G__16275) {
case 1:
return re_com.util.zip_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.util.zip_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_com.util.zip_id.cljs$core$IFn$_invoke$arity$1 = (function (v){
return re_com.util.zip_id.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),v);
}));

(re_com.util.zip_id.cljs$core$IFn$_invoke$arity$2 = (function (id_fn,v){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(id_fn,v),v);
}));

(re_com.util.zip_id.cljs$lang$maxFixedArity = 2);

/**
 * (for [[index item first? last?] (enumerate coll)] ...)
 */
re_com.util.enumerate = (function re_com$util$enumerate(coll){
var c = (cljs.core.count(coll) - (1));
var f = (function (index,item){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,item,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),index),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(c,index)], null);
});
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(f,coll);
});
/**
 * Given a DOM node, I traverse through all ascendant nodes (until I reach body), summing any scrollLeft and scrollTop values
 * and return these sums in a map
 */
re_com.util.sum_scroll_offsets = (function re_com$util$sum_scroll_offsets(node){
var current_node = node.parentNode;
var sum_scroll_left = (0);
var sum_scroll_top = (0);
while(true){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_node.tagName,"BODY")){
var G__16325 = current_node.parentNode;
var G__16326 = (sum_scroll_left + current_node.scrollLeft);
var G__16327 = (sum_scroll_top + current_node.scrollTop);
current_node = G__16325;
sum_scroll_left = G__16326;
sum_scroll_top = G__16327;
continue;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),sum_scroll_left,new cljs.core.Keyword(null,"top","top",-1856271961),sum_scroll_top], null);
}
break;
}
});
/**
 * Return a goog.date.UtcDateTime based on local date/time.
 */
re_com.util.now__GT_utc = (function re_com$util$now__GT_utc(){
var local_date_time = (new goog.date.DateTime());
return (new goog.date.UtcDateTime(local_date_time.getYear(),local_date_time.getMonth(),local_date_time.getDate(),(0),(0),(0),(0)));
});
re_com.util.clipboard_write_BANG_ = (function re_com$util$clipboard_write_BANG_(s){
return navigator.clipboard.writeText(s);
});
re_com.util.tsv_line = (function re_com$util$tsv_line(row){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.cljs$core$IFn$_invoke$arity$2("\t",row))+"\n");
});
re_com.util.table__GT_tsv = (function re_com$util$table__GT_tsv(columns,rows){
var header_value_fn = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"export-header-label","export-header-label",-121029282),new cljs.core.Keyword(null,"header-label","header-label",765876429),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.name,new cljs.core.Keyword(null,"id","id",-1388402092)));
var row_value_fn = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"on-export-row-label-fn","on-export-row-label-fn",622654867),new cljs.core.Keyword(null,"row-label-fn","row-label-fn",1457434308),new cljs.core.Keyword(null,"id","id",-1388402092));
var row__GT_cells = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt,cljs.core.map.cljs$core$IFn$_invoke$arity$2(row_value_fn,columns));
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.util.tsv_line,cljs.core.cons(cljs.core.map.cljs$core$IFn$_invoke$arity$2(header_value_fn,columns),cljs.core.map.cljs$core$IFn$_invoke$arity$2(row__GT_cells,rows))));
});
re_com.util.triangle = (function re_com$util$triangle(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16330 = arguments.length;
var i__5877__auto___16331 = (0);
while(true){
if((i__5877__auto___16331 < len__5876__auto___16330)){
args__5882__auto__.push((arguments[i__5877__auto___16331]));

var G__16332 = (i__5877__auto___16331 + (1));
i__5877__auto___16331 = G__16332;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.util.triangle.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.util.triangle.cljs$core$IFn$_invoke$arity$variadic = (function (p__16284){
var map__16285 = p__16284;
var map__16285__$1 = cljs.core.__destructure_map(map__16285);
var props = map__16285__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16285__$1,new cljs.core.Keyword(null,"width","width",-384071477),"9px");
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16285__$1,new cljs.core.Keyword(null,"height","height",1025178622),"9px");
var fill = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16285__$1,new cljs.core.Keyword(null,"fill","fill",883462889),"currentColor");
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16285__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),(""+"0 0 9 9"),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"polygon","polygon",837053759),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),(function (){var G__16286 = direction;
var G__16286__$1 = (((G__16286 instanceof cljs.core.Keyword))?G__16286.fqn:null);
switch (G__16286__$1) {
case "right":
return "2,2 8,5 2,8";

break;
case "up":
return "4,2 8,7 0,7";

break;
case "down":
return "4,7 8,2 0,2";

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__16286__$1))));

}
})(),new cljs.core.Keyword(null,"fill","fill",883462889),fill], null)], null)], null);
}));

(re_com.util.triangle.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.triangle.cljs$lang$applyTo = (function (seq16280){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16280));
}));

re_com.util.x_button = (function re_com$util$x_button(var_args){
var args__5882__auto__ = [];
var len__5876__auto___16336 = arguments.length;
var i__5877__auto___16337 = (0);
while(true){
if((i__5877__auto___16337 < len__5876__auto___16336)){
args__5882__auto__.push((arguments[i__5877__auto___16337]));

var G__16338 = (i__5877__auto___16337 + (1));
i__5877__auto___16337 = G__16338;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.util.x_button.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.util.x_button.cljs$core$IFn$_invoke$arity$variadic = (function (p__16291){
var map__16292 = p__16291;
var map__16292__$1 = cljs.core.__destructure_map(map__16292);
var hover_internal_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function() { 
var G__16340__delegate = function (p__16293){
var map__16294 = p__16293;
var map__16294__$1 = cljs.core.__destructure_map(map__16294);
var hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16294__$1,new cljs.core.Keyword(null,"hover?","hover?",-1201331489),hover_internal_QMARK_);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16294__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16294__$1,new cljs.core.Keyword(null,"width","width",-384071477),"9px");
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16294__$1,new cljs.core.Keyword(null,"height","height",1025178622),"9px");
var stroke_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16294__$1,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"1px");
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reset_BANG_,hover_QMARK_,true),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(cljs.core.reset_BANG_,hover_QMARK_,false),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),(""+"0 0 "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util._LT__px(width))+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util._LT__px(height))),new cljs.core.Keyword(null,"xmlns","xmlns",-1862095571),"http://www.w3.org/2000/svg",new cljs.core.Keyword(null,"stroke","stroke",1741823555),(cljs.core.truth_(re_com.util.deref_or_value(hover_QMARK_))?"#767a7c":"currentColor"),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),stroke_width], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),(0),new cljs.core.Keyword(null,"x2","x2",-1362513475),re_com.util._LT__px(width),new cljs.core.Keyword(null,"y2","y2",-718691301),re_com.util._LT__px(height)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x1","x1",-1863922247),(0),new cljs.core.Keyword(null,"y1","y1",589123466),re_com.util._LT__px(height),new cljs.core.Keyword(null,"x2","x2",-1362513475),re_com.util._LT__px(width),new cljs.core.Keyword(null,"y2","y2",-718691301),(0)], null)], null)], null)], null);
};
var G__16340 = function (var_args){
var p__16293 = null;
if (arguments.length > 0) {
var G__16344__i = 0, G__16344__a = new Array(arguments.length -  0);
while (G__16344__i < G__16344__a.length) {G__16344__a[G__16344__i] = arguments[G__16344__i + 0]; ++G__16344__i;}
  p__16293 = new cljs.core.IndexedSeq(G__16344__a,0,null);
} 
return G__16340__delegate.call(this,p__16293);};
G__16340.cljs$lang$maxFixedArity = 0;
G__16340.cljs$lang$applyTo = (function (arglist__16345){
var p__16293 = cljs.core.seq(arglist__16345);
return G__16340__delegate(p__16293);
});
G__16340.cljs$core$IFn$_invoke$arity$variadic = G__16340__delegate;
return G__16340;
})()
;
}));

(re_com.util.x_button.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.util.x_button.cljs$lang$applyTo = (function (seq16287){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16287));
}));

re_com.util.scrollbar_thickness = (10);
re_com.util.scrollbar_margin = (2);
re_com.util.scrollbar_tot_thick = (re_com.util.scrollbar_thickness + ((2) * re_com.util.scrollbar_margin));

//# sourceMappingURL=re_com.util.js.map
