goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_22907 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.object._id[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.object._id["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_22907(this$);
}
});

var shadow$object$IObject$_type$dyn_22908 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.object._type[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.object._type["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_22908(this$);
}
});

var shadow$object$IObject$_data$dyn_22909 = (function (this$){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.object._data[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5499__auto__.call(null,this$));
} else {
var m__5497__auto__ = (shadow.object._data["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5497__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_22909(this$);
}
});

var shadow$object$IObject$_update$dyn_22915 = (function (this$,update_fn){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.object._update[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5499__auto__.call(null,this$,update_fn));
} else {
var m__5497__auto__ = (shadow.object._update["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5497__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_22915(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_22916 = (function (this$,cause){
var x__5498__auto__ = (((this$ == null))?null:this$);
var m__5499__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__5498__auto__)]);
if((!((m__5499__auto__ == null)))){
return (m__5499__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5499__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5499__auto__.call(null,this$,cause));
} else {
var m__5497__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__5497__auto__ == null)))){
return (m__5497__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5497__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5497__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_22916(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__21661 = arguments.length;
switch (G__21661) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__5142__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__5142__auto__){
return or__5142__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error((""+"Assert failed: "+"can only test objects"+"\n"+"(satisfies? IObject obj)")));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5823__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5823__auto__)){
var oid = temp__5823__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5823__auto__)){
var parent_id = temp__5823__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__22937 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__22937;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__21742_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__21742_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__21762 = arguments.length;
switch (G__21762) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21806_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__21806_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__21815){
var map__21817 = p__21815;
var map__21817__$1 = cljs.core.__destructure_map(map__21817);
var oref = map__21817__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21817__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__21820 = arguments.length;
switch (G__21820) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__21818_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__21818_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5821__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5821__auto__)){
var obj = temp__5821__auto__;
return obj;
} else {
var temp__5823__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5823__auto__)){
var parent = temp__5823__auto__;
var G__22957 = parent;
dom = G__22957;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___22958 = arguments.length;
var i__5877__auto___22959 = (0);
while(true){
if((i__5877__auto___22959 < len__5876__auto___22958)){
args__5882__auto__.push((arguments[i__5877__auto___22959]));

var G__22960 = (i__5877__auto___22959 + (1));
i__5877__auto___22959 = G__22960;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5823__auto__)){
var reactions_to_trigger = temp__5823__auto__;
var seq__21852 = cljs.core.seq(reactions_to_trigger);
var chunk__21853 = null;
var count__21854 = (0);
var i__21855 = (0);
while(true){
if((i__21855 < count__21854)){
var rfn = chunk__21853.cljs$core$IIndexed$_nth$arity$2(null,i__21855);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__22963 = seq__21852;
var G__22964 = chunk__21853;
var G__22965 = count__21854;
var G__22966 = (i__21855 + (1));
seq__21852 = G__22963;
chunk__21853 = G__22964;
count__21854 = G__22965;
i__21855 = G__22966;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__21852);
if(temp__5823__auto____$1){
var seq__21852__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__21852__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__21852__$1);
var G__22967 = cljs.core.chunk_rest(seq__21852__$1);
var G__22968 = c__5673__auto__;
var G__22969 = cljs.core.count(c__5673__auto__);
var G__22970 = (0);
seq__21852 = G__22967;
chunk__21853 = G__22968;
count__21854 = G__22969;
i__21855 = G__22970;
continue;
} else {
var rfn = cljs.core.first(seq__21852__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__22971 = cljs.core.next(seq__21852__$1);
var G__22972 = null;
var G__22973 = (0);
var G__22974 = (0);
seq__21852 = G__22971;
chunk__21853 = G__22972;
count__21854 = G__22973;
i__21855 = G__22974;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq21848){
var G__21849 = cljs.core.first(seq21848);
var seq21848__$1 = cljs.core.next(seq21848);
var G__21850 = cljs.core.first(seq21848__$1);
var seq21848__$2 = cljs.core.next(seq21848__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21849,G__21850,seq21848__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__21908_22978 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__21909_22979 = null;
var count__21910_22980 = (0);
var i__21911_22981 = (0);
while(true){
if((i__21911_22981 < count__21910_22980)){
var child_22983 = chunk__21909_22979.cljs$core$IIndexed$_nth$arity$2(null,i__21911_22981);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_22983,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_22983,ev,notify_fn));


var G__22984 = seq__21908_22978;
var G__22985 = chunk__21909_22979;
var G__22986 = count__21910_22980;
var G__22987 = (i__21911_22981 + (1));
seq__21908_22978 = G__22984;
chunk__21909_22979 = G__22985;
count__21910_22980 = G__22986;
i__21911_22981 = G__22987;
continue;
} else {
var temp__5823__auto___22988 = cljs.core.seq(seq__21908_22978);
if(temp__5823__auto___22988){
var seq__21908_22989__$1 = temp__5823__auto___22988;
if(cljs.core.chunked_seq_QMARK_(seq__21908_22989__$1)){
var c__5673__auto___22990 = cljs.core.chunk_first(seq__21908_22989__$1);
var G__22991 = cljs.core.chunk_rest(seq__21908_22989__$1);
var G__22992 = c__5673__auto___22990;
var G__22993 = cljs.core.count(c__5673__auto___22990);
var G__22994 = (0);
seq__21908_22978 = G__22991;
chunk__21909_22979 = G__22992;
count__21910_22980 = G__22993;
i__21911_22981 = G__22994;
continue;
} else {
var child_22995 = cljs.core.first(seq__21908_22989__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_22995,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_22995,ev,notify_fn));


var G__22996 = cljs.core.next(seq__21908_22989__$1);
var G__22997 = null;
var G__22998 = (0);
var G__22999 = (0);
seq__21908_22978 = G__22996;
chunk__21909_22979 = G__22997;
count__21910_22980 = G__22998;
i__21911_22981 = G__22999;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23000 = arguments.length;
var i__5877__auto___23001 = (0);
while(true){
if((i__5877__auto___23001 < len__5876__auto___23000)){
args__5882__auto__.push((arguments[i__5877__auto___23001]));

var G__23002 = (i__5877__auto___23001 + (1));
i__5877__auto___23001 = G__23002;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq21989){
var G__21990 = cljs.core.first(seq21989);
var seq21989__$1 = cljs.core.next(seq21989);
var G__21991 = cljs.core.first(seq21989__$1);
var seq21989__$2 = cljs.core.next(seq21989__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21990,G__21991,seq21989__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23009 = arguments.length;
var i__5877__auto___23010 = (0);
while(true){
if((i__5877__auto___23010 < len__5876__auto___23009)){
args__5882__auto__.push((arguments[i__5877__auto___23010]));

var G__23011 = (i__5877__auto___23010 + (1));
i__5877__auto___23010 = G__23011;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__23012 = shadow.object.get_parent(current);
current = G__23012;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq22019){
var G__22020 = cljs.core.first(seq22019);
var seq22019__$1 = cljs.core.next(seq22019);
var G__22021 = cljs.core.first(seq22019__$1);
var seq22019__$2 = cljs.core.next(seq22019__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22020,G__22021,seq22019__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23013 = arguments.length;
var i__5877__auto___23014 = (0);
while(true){
if((i__5877__auto___23014 < len__5876__auto___23013)){
args__5882__auto__.push((arguments[i__5877__auto___23014]));

var G__23015 = (i__5877__auto___23014 + (1));
i__5877__auto___23014 = G__23015;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw (""+"update! expects a fn as second arg, not "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))));
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq22064){
var G__22065 = cljs.core.first(seq22064);
var seq22064__$1 = cljs.core.next(seq22064);
var G__22066 = cljs.core.first(seq22064__$1);
var seq22064__$2 = cljs.core.next(seq22064__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22065,G__22066,seq22064__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5821__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5821__auto__)){
var custom_remove = temp__5821__auto__;
var G__22131 = this$;
var G__22132 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__22131,G__22132) : custom_remove.call(null,G__22131,G__22132));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__22142 = arguments.length;
switch (G__22142) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__22166 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__22167 = null;
var count__22168 = (0);
var i__22169 = (0);
while(true){
if((i__22169 < count__22168)){
var vec__22195 = chunk__22167.cljs$core$IIndexed$_nth$arity$2(null,i__22169);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22195,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22195,(1),null);
var ev_def = vec__22195;
if((handler == null)){
throw (""+"ev with nil handler "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))));
} else {
}

var handler_23031__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__22166,chunk__22167,count__22168,i__22169,vec__22195,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__22166,chunk__22167,count__22168,i__22169,vec__22195,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__22166,chunk__22167,count__22168,i__22169,handler_23031__$1,vec__22195,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_23031__$1.cljs$core$IFn$_invoke$arity$3 ? handler_23031__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_23031__$1.call(null,oref,e,el));
});})(seq__22166,chunk__22167,count__22168,i__22169,handler_23031__$1,vec__22195,ev,handler,ev_def))
);


var G__23032 = seq__22166;
var G__23033 = chunk__22167;
var G__23034 = count__22168;
var G__23035 = (i__22169 + (1));
seq__22166 = G__23032;
chunk__22167 = G__23033;
count__22168 = G__23034;
i__22169 = G__23035;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22166);
if(temp__5823__auto__){
var seq__22166__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22166__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__22166__$1);
var G__23036 = cljs.core.chunk_rest(seq__22166__$1);
var G__23037 = c__5673__auto__;
var G__23038 = cljs.core.count(c__5673__auto__);
var G__23039 = (0);
seq__22166 = G__23036;
chunk__22167 = G__23037;
count__22168 = G__23038;
i__22169 = G__23039;
continue;
} else {
var vec__22202 = cljs.core.first(seq__22166__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22202,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22202,(1),null);
var ev_def = vec__22202;
if((handler == null)){
throw (""+"ev with nil handler "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))));
} else {
}

var handler_23040__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__22166,chunk__22167,count__22168,i__22169,vec__22202,ev,handler,ev_def,seq__22166__$1,temp__5823__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__22166,chunk__22167,count__22168,i__22169,vec__22202,ev,handler,ev_def,seq__22166__$1,temp__5823__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__22166,chunk__22167,count__22168,i__22169,handler_23040__$1,vec__22202,ev,handler,ev_def,seq__22166__$1,temp__5823__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_23040__$1.cljs$core$IFn$_invoke$arity$3 ? handler_23040__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_23040__$1.call(null,oref,e,el));
});})(seq__22166,chunk__22167,count__22168,i__22169,handler_23040__$1,vec__22202,ev,handler,ev_def,seq__22166__$1,temp__5823__auto__))
);


var G__23041 = cljs.core.next(seq__22166__$1);
var G__23042 = null;
var G__23043 = (0);
var G__23044 = (0);
seq__22166 = G__23041;
chunk__22167 = G__23042;
count__22168 = G__23043;
i__22169 = G__23044;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__22216){
var vec__22223 = p__22216;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22223,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22223,(1),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = event;
if(cljs.core.truth_(and__5140__auto__)){
return handler;
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23054 = arguments.length;
var i__5877__auto___23055 = (0);
while(true){
if((i__5877__auto___23055 < len__5876__auto___23054)){
args__5882__auto__.push((arguments[i__5877__auto___23055]));

var G__23056 = (i__5877__auto___23055 + (1));
i__5877__auto___23055 = G__23056;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw (""+"invalid object definition "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)))+" args: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))));
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn((""+"object already defined "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e22342){if((e22342 instanceof Object)){
var e = e22342;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e22342;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq22314){
var G__22315 = cljs.core.first(seq22314);
var seq22314__$1 = cljs.core.next(seq22314);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22315,seq22314__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__22375 = arguments.length;
switch (G__22375) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__22379 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__22379) : shadow.dom.build.call(null,G__22379));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5448__auto__,k__5449__auto__){
var self__ = this;
var this__5448__auto____$1 = this;
return this__5448__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5449__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5450__auto__,k22381,else__5451__auto__){
var self__ = this;
var this__5450__auto____$1 = this;
var G__22389 = k22381;
var G__22389__$1 = (((G__22389 instanceof cljs.core.Keyword))?G__22389.fqn:null);
switch (G__22389__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k22381,else__5451__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5468__auto__,f__5469__auto__,init__5470__auto__){
var self__ = this;
var this__5468__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5471__auto__,p__22390){
var vec__22391 = p__22390;
var k__5472__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22391,(0),null);
var v__5473__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22391,(1),null);
return (f__5469__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5469__auto__.cljs$core$IFn$_invoke$arity$3(ret__5471__auto__,k__5472__auto__,v__5473__auto__) : f__5469__auto__.call(null,ret__5471__auto__,k__5472__auto__,v__5473__auto__));
}),init__5470__auto__,this__5468__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5463__auto__,writer__5464__auto__,opts__5465__auto__){
var self__ = this;
var this__5463__auto____$1 = this;
var pr_pair__5466__auto__ = (function (keyval__5467__auto__){
return cljs.core.pr_sequential_writer(writer__5464__auto__,cljs.core.pr_writer,""," ","",opts__5465__auto__,keyval__5467__auto__);
});
return cljs.core.pr_sequential_writer(writer__5464__auto__,pr_pair__5466__auto__,"#shadow.object.Watch{",", ","}",opts__5465__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__22380){
var self__ = this;
var G__22380__$1 = this;
return (new cljs.core.RecordIter((0),G__22380__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5446__auto__){
var self__ = this;
var this__5446__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5443__auto__){
var self__ = this;
var this__5443__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5452__auto__){
var self__ = this;
var this__5452__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5444__auto__){
var self__ = this;
var this__5444__auto____$1 = this;
var h__5251__auto__ = self__.__hash;
if((!((h__5251__auto__ == null)))){
return h__5251__auto__;
} else {
var h__5251__auto____$1 = (function (coll__5445__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__5445__auto__));
})(this__5444__auto____$1);
(self__.__hash = h__5251__auto____$1);

return h__5251__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this22382,other22383){
var self__ = this;
var this22382__$1 = this;
return (((!((other22383 == null)))) && ((((this22382__$1.constructor === other22383.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22382__$1.key,other22383.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22382__$1.handler,other22383.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this22382__$1.__extmap,other22383.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5458__auto__,k__5459__auto__){
var self__ = this;
var this__5458__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__5459__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5458__auto____$1),self__.__meta),k__5459__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5459__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5455__auto__,k22381){
var self__ = this;
var this__5455__auto____$1 = this;
var G__22423 = k22381;
var G__22423__$1 = (((G__22423 instanceof cljs.core.Keyword))?G__22423.fqn:null);
switch (G__22423__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k22381);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5456__auto__,k__5457__auto__,G__22380){
var self__ = this;
var this__5456__auto____$1 = this;
var pred__22429 = cljs.core.keyword_identical_QMARK_;
var expr__22430 = k__5457__auto__;
if(cljs.core.truth_((pred__22429.cljs$core$IFn$_invoke$arity$2 ? pred__22429.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__22430) : pred__22429.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__22430)))){
return (new shadow.object.Watch(G__22380,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__22429.cljs$core$IFn$_invoke$arity$2 ? pred__22429.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__22430) : pred__22429.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__22430)))){
return (new shadow.object.Watch(self__.key,G__22380,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5457__auto__,G__22380),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5461__auto__){
var self__ = this;
var this__5461__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5447__auto__,G__22380){
var self__ = this;
var this__5447__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__22380,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5453__auto__,entry__5454__auto__){
var self__ = this;
var this__5453__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5454__auto__)){
return this__5453__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5454__auto__,(0)),cljs.core._nth(entry__5454__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5453__auto____$1,entry__5454__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__5494__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__5494__auto__,writer__5495__auto__){
return cljs.core._write(writer__5495__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__22386){
var extmap__5490__auto__ = (function (){var G__22451 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__22386,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__22386)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__22451);
} else {
return G__22451;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__22386),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__22386),null,cljs.core.not_empty(extmap__5490__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,(""+"#<ObjectRef {:id "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id)+", :type "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type)+"}>"));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__22461_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__22461_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__22516 = cljs.core.seq(self__.watches);
var chunk__22517 = null;
var count__22518 = (0);
var i__22519 = (0);
while(true){
if((i__22519 < count__22518)){
var map__22527 = chunk__22517.cljs$core$IIndexed$_nth$arity$2(null,i__22519);
var map__22527__$1 = cljs.core.__destructure_map(map__22527);
var watch = map__22527__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22527__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22527__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__23070 = seq__22516;
var G__23071 = chunk__22517;
var G__23072 = count__22518;
var G__23073 = (i__22519 + (1));
seq__22516 = G__23070;
chunk__22517 = G__23071;
count__22518 = G__23072;
i__22519 = G__23073;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__22516);
if(temp__5823__auto__){
var seq__22516__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22516__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__22516__$1);
var G__23074 = cljs.core.chunk_rest(seq__22516__$1);
var G__23075 = c__5673__auto__;
var G__23076 = cljs.core.count(c__5673__auto__);
var G__23077 = (0);
seq__22516 = G__23074;
chunk__22517 = G__23075;
count__22518 = G__23076;
i__22519 = G__23077;
continue;
} else {
var map__22535 = cljs.core.first(seq__22516__$1);
var map__22535__$1 = cljs.core.__destructure_map(map__22535);
var watch = map__22535__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22535__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22535__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__23078 = cljs.core.next(seq__22516__$1);
var G__23079 = null;
var G__23080 = (0);
var G__23081 = (0);
seq__22516 = G__23078;
chunk__22517 = G__23079;
count__22518 = G__23080;
i__22519 = G__23081;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__22537_23082 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__22538_23083 = null;
var count__22539_23084 = (0);
var i__22540_23085 = (0);
while(true){
if((i__22540_23085 < count__22539_23084)){
var child_23086 = chunk__22538_23083.cljs$core$IIndexed$_nth$arity$2(null,i__22540_23085);
shadow.object._destroy_BANG_(child_23086,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__23087 = seq__22537_23082;
var G__23088 = chunk__22538_23083;
var G__23089 = count__22539_23084;
var G__23090 = (i__22540_23085 + (1));
seq__22537_23082 = G__23087;
chunk__22538_23083 = G__23088;
count__22539_23084 = G__23089;
i__22540_23085 = G__23090;
continue;
} else {
var temp__5823__auto___23091 = cljs.core.seq(seq__22537_23082);
if(temp__5823__auto___23091){
var seq__22537_23092__$1 = temp__5823__auto___23091;
if(cljs.core.chunked_seq_QMARK_(seq__22537_23092__$1)){
var c__5673__auto___23093 = cljs.core.chunk_first(seq__22537_23092__$1);
var G__23094 = cljs.core.chunk_rest(seq__22537_23092__$1);
var G__23095 = c__5673__auto___23093;
var G__23096 = cljs.core.count(c__5673__auto___23093);
var G__23097 = (0);
seq__22537_23082 = G__23094;
chunk__22538_23083 = G__23095;
count__22539_23084 = G__23096;
i__22540_23085 = G__23097;
continue;
} else {
var child_23098 = cljs.core.first(seq__22537_23092__$1);
shadow.object._destroy_BANG_(child_23098,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__23099 = cljs.core.next(seq__22537_23092__$1);
var G__23100 = null;
var G__23101 = (0);
var G__23102 = (0);
seq__22537_23082 = G__23099;
chunk__22538_23083 = G__23100;
count__22539_23084 = G__23101;
i__22540_23085 = G__23102;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_23103 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_23103 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_23103);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__5434__auto__,writer__5435__auto__,opt__5436__auto__){
return cljs.core._write(writer__5435__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__22581 = arguments.length;
switch (G__22581) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__22591 = arguments.length;
switch (G__22591) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__5882__auto__ = [];
var len__5876__auto___23111 = arguments.length;
var i__5877__auto___23112 = (0);
while(true){
if((i__5877__auto___23112 < len__5876__auto___23111)){
args__5882__auto__.push((arguments[i__5877__auto___23112]));

var G__23113 = (i__5877__auto___23112 + (1));
i__5877__auto___23112 = G__23113;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((""+"cannot create unknown child type: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_23114 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5821__auto___23115 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5821__auto___23115)){
var dom_23116 = temp__5821__auto___23115;
shadow.dom.set_data(dom_23116,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_23116,dom_events_23114);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_23116], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_23116], 0));
} else {
var temp__5823__auto___23117 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5823__auto___23117)){
var dom_fn_23118 = temp__5823__auto___23117;
var dom_23119 = (function (){var G__22688 = (dom_fn_23118.cljs$core$IFn$_invoke$arity$2 ? dom_fn_23118.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_23118.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__22688) : shadow.dom.build.call(null,G__22688));
})();
shadow.dom.set_data(dom_23119,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_23119], 0));

shadow.object.bind_dom_events(oref,dom_23119,dom_events_23114);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_23119], 0));
} else {
}
}

var temp__5823__auto___23120 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5823__auto___23120)){
var watches_23121 = temp__5823__auto___23120;
var seq__22689_23122 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_23121));
var chunk__22690_23123 = null;
var count__22691_23124 = (0);
var i__22692_23125 = (0);
while(true){
if((i__22692_23125 < count__22691_23124)){
var vec__22713_23126 = chunk__22690_23123.cljs$core$IIndexed$_nth$arity$2(null,i__22692_23125);
var attr_23127 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22713_23126,(0),null);
var handler_23128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22713_23126,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_23127,((function (seq__22689_23122,chunk__22690_23123,count__22691_23124,i__22692_23125,vec__22713_23126,attr_23127,handler_23128,watches_23121,temp__5823__auto___23120,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_23128.cljs$core$IFn$_invoke$arity$3 ? handler_23128.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_23128.call(null,oref,old,new$));
});})(seq__22689_23122,chunk__22690_23123,count__22691_23124,i__22692_23125,vec__22713_23126,attr_23127,handler_23128,watches_23121,temp__5823__auto___23120,oid,parent,result_chan,odef,obj,oref))
);


var G__23129 = seq__22689_23122;
var G__23130 = chunk__22690_23123;
var G__23131 = count__22691_23124;
var G__23132 = (i__22692_23125 + (1));
seq__22689_23122 = G__23129;
chunk__22690_23123 = G__23130;
count__22691_23124 = G__23131;
i__22692_23125 = G__23132;
continue;
} else {
var temp__5823__auto___23133__$1 = cljs.core.seq(seq__22689_23122);
if(temp__5823__auto___23133__$1){
var seq__22689_23134__$1 = temp__5823__auto___23133__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22689_23134__$1)){
var c__5673__auto___23135 = cljs.core.chunk_first(seq__22689_23134__$1);
var G__23136 = cljs.core.chunk_rest(seq__22689_23134__$1);
var G__23137 = c__5673__auto___23135;
var G__23138 = cljs.core.count(c__5673__auto___23135);
var G__23139 = (0);
seq__22689_23122 = G__23136;
chunk__22690_23123 = G__23137;
count__22691_23124 = G__23138;
i__22692_23125 = G__23139;
continue;
} else {
var vec__22717_23140 = cljs.core.first(seq__22689_23134__$1);
var attr_23141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22717_23140,(0),null);
var handler_23142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22717_23140,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_23141,((function (seq__22689_23122,chunk__22690_23123,count__22691_23124,i__22692_23125,vec__22717_23140,attr_23141,handler_23142,seq__22689_23134__$1,temp__5823__auto___23133__$1,watches_23121,temp__5823__auto___23120,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_23142.cljs$core$IFn$_invoke$arity$3 ? handler_23142.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_23142.call(null,oref,old,new$));
});})(seq__22689_23122,chunk__22690_23123,count__22691_23124,i__22692_23125,vec__22717_23140,attr_23141,handler_23142,seq__22689_23134__$1,temp__5823__auto___23133__$1,watches_23121,temp__5823__auto___23120,oid,parent,result_chan,odef,obj,oref))
);


var G__23147 = cljs.core.next(seq__22689_23134__$1);
var G__23148 = null;
var G__23149 = (0);
var G__23150 = (0);
seq__22689_23122 = G__23147;
chunk__22690_23123 = G__23148;
count__22691_23124 = G__23149;
i__22692_23125 = G__23150;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq22650){
var G__22654 = cljs.core.first(seq22650);
var seq22650__$1 = cljs.core.next(seq22650);
var G__22655 = cljs.core.first(seq22650__$1);
var seq22650__$2 = cljs.core.next(seq22650__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22654,G__22655,seq22650__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__22727 = arguments.length;
switch (G__22727) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__22725_SHARP_){
var G__22729 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__22725_SHARP_) : node_gen.call(null,p1__22725_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__22729) : shadow.dom.build.call(null,G__22729));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__22739_23156 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__22740_23157 = null;
var count__22741_23158 = (0);
var i__22742_23159 = (0);
while(true){
if((i__22742_23159 < count__22741_23158)){
var obj_23164 = chunk__22740_23157.cljs$core$IIndexed$_nth$arity$2(null,i__22742_23159);
var obj_23165__$1 = shadow.object.get_from_dom(obj_23164);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_23165__$1);


var G__23168 = seq__22739_23156;
var G__23169 = chunk__22740_23157;
var G__23170 = count__22741_23158;
var G__23171 = (i__22742_23159 + (1));
seq__22739_23156 = G__23168;
chunk__22740_23157 = G__23169;
count__22741_23158 = G__23170;
i__22742_23159 = G__23171;
continue;
} else {
var temp__5823__auto___23172 = cljs.core.seq(seq__22739_23156);
if(temp__5823__auto___23172){
var seq__22739_23173__$1 = temp__5823__auto___23172;
if(cljs.core.chunked_seq_QMARK_(seq__22739_23173__$1)){
var c__5673__auto___23174 = cljs.core.chunk_first(seq__22739_23173__$1);
var G__23175 = cljs.core.chunk_rest(seq__22739_23173__$1);
var G__23176 = c__5673__auto___23174;
var G__23177 = cljs.core.count(c__5673__auto___23174);
var G__23178 = (0);
seq__22739_23156 = G__23175;
chunk__22740_23157 = G__23176;
count__22741_23158 = G__23177;
i__22742_23159 = G__23178;
continue;
} else {
var obj_23179 = cljs.core.first(seq__22739_23173__$1);
var obj_23180__$1 = shadow.object.get_from_dom(obj_23179);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_23180__$1);


var G__23181 = cljs.core.next(seq__22739_23173__$1);
var G__23182 = null;
var G__23183 = (0);
var G__23184 = (0);
seq__22739_23156 = G__23181;
chunk__22740_23157 = G__23182;
count__22741_23158 = G__23183;
i__22742_23159 = G__23184;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__22764 = arguments.length;
switch (G__22764) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__22751_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__22751_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__22776){
var vec__22778 = p__22776;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22778,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22778,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__22787_23186 = cljs.core.seq((function (){var G__22803 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__22803) : coll_transform.call(null,G__22803));
})());
var chunk__22788_23187 = null;
var count__22789_23188 = (0);
var i__22790_23189 = (0);
while(true){
if((i__22790_23189 < count__22789_23188)){
var item_23190 = chunk__22788_23187.cljs$core$IIndexed$_nth$arity$2(null,i__22790_23189);
shadow.object.dom_enter(coll_dom,make_item_fn(item_23190));


var G__23191 = seq__22787_23186;
var G__23192 = chunk__22788_23187;
var G__23193 = count__22789_23188;
var G__23194 = (i__22790_23189 + (1));
seq__22787_23186 = G__23191;
chunk__22788_23187 = G__23192;
count__22789_23188 = G__23193;
i__22790_23189 = G__23194;
continue;
} else {
var temp__5823__auto___23195 = cljs.core.seq(seq__22787_23186);
if(temp__5823__auto___23195){
var seq__22787_23196__$1 = temp__5823__auto___23195;
if(cljs.core.chunked_seq_QMARK_(seq__22787_23196__$1)){
var c__5673__auto___23197 = cljs.core.chunk_first(seq__22787_23196__$1);
var G__23198 = cljs.core.chunk_rest(seq__22787_23196__$1);
var G__23199 = c__5673__auto___23197;
var G__23200 = cljs.core.count(c__5673__auto___23197);
var G__23201 = (0);
seq__22787_23186 = G__23198;
chunk__22788_23187 = G__23199;
count__22789_23188 = G__23200;
i__22790_23189 = G__23201;
continue;
} else {
var item_23202 = cljs.core.first(seq__22787_23196__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_23202));


var G__23203 = cljs.core.next(seq__22787_23196__$1);
var G__23204 = null;
var G__23205 = (0);
var G__23206 = (0);
seq__22787_23186 = G__23203;
chunk__22788_23187 = G__23204;
count__22789_23188 = G__23205;
i__22790_23189 = G__23206;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = cljs.core.min.cljs$core$IFn$_invoke$arity$2(count_new,count_children);
var n__5741__auto___23207 = count_children__$1;
var idx_23208 = (0);
while(true){
if((idx_23208 < n__5741__auto___23207)){
var cn_23209 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_23208);
var cc_23210 = shadow.object.get_from_dom(cn_23209);
var ckey_23211 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_23210);
var cval_23212 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_23210,item_key);
var vec__22812_23213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_23208);
var nkey_23214 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22812_23213,(0),null);
var nval_23215 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22812_23213,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_23211,nkey_23214)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_23212,nval_23215)))){
} else {
var new_obj_23222 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_23214,nval_23215], null));
shadow.dom.replace_node(cn_23209,new_obj_23222);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_23210);

shadow.object.notify_tree_BANG_(new_obj_23222,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__23223 = (idx_23208 + (1));
idx_23208 = G__23223;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__22815_23224 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__22816_23225 = null;
var count__22817_23226 = (0);
var i__22818_23227 = (0);
while(true){
if((i__22818_23227 < count__22817_23226)){
var item_23228 = chunk__22816_23225.cljs$core$IIndexed$_nth$arity$2(null,i__22818_23227);
shadow.object.dom_enter(coll_dom,make_item_fn(item_23228));


var G__23229 = seq__22815_23224;
var G__23230 = chunk__22816_23225;
var G__23231 = count__22817_23226;
var G__23232 = (i__22818_23227 + (1));
seq__22815_23224 = G__23229;
chunk__22816_23225 = G__23230;
count__22817_23226 = G__23231;
i__22818_23227 = G__23232;
continue;
} else {
var temp__5823__auto___23233 = cljs.core.seq(seq__22815_23224);
if(temp__5823__auto___23233){
var seq__22815_23234__$1 = temp__5823__auto___23233;
if(cljs.core.chunked_seq_QMARK_(seq__22815_23234__$1)){
var c__5673__auto___23235 = cljs.core.chunk_first(seq__22815_23234__$1);
var G__23236 = cljs.core.chunk_rest(seq__22815_23234__$1);
var G__23237 = c__5673__auto___23235;
var G__23238 = cljs.core.count(c__5673__auto___23235);
var G__23239 = (0);
seq__22815_23224 = G__23236;
chunk__22816_23225 = G__23237;
count__22817_23226 = G__23238;
i__22818_23227 = G__23239;
continue;
} else {
var item_23240 = cljs.core.first(seq__22815_23234__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_23240));


var G__23241 = cljs.core.next(seq__22815_23234__$1);
var G__23242 = null;
var G__23243 = (0);
var G__23244 = (0);
seq__22815_23224 = G__23241;
chunk__22816_23225 = G__23242;
count__22817_23226 = G__23243;
i__22818_23227 = G__23244;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__5140__auto__ = key;
if(cljs.core.truth_(and__5140__auto__)){
return path;
} else {
return and__5140__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__22836 = "inspect!";
var G__22837 = shadow.object._id(oref);
var G__22838 = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref)));
var G__22839 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__22836,G__22837,G__22838,G__22839) : shadow.object.info.call(null,G__22836,G__22837,G__22838,G__22839));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__22842_23246 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__22843_23247 = null;
var count__22844_23248 = (0);
var i__22845_23249 = (0);
while(true){
if((i__22845_23249 < count__22844_23248)){
var vec__22869_23250 = chunk__22843_23247.cljs$core$IIndexed$_nth$arity$2(null,i__22845_23249);
var id_23251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22869_23250,(0),null);
var oref_23252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22869_23250,(1),null);
var G__22872_23253 = "dump";
var G__22873_23254 = id_23251;
var G__22874_23255 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_23252)], 0));
var G__22875_23256 = cljs.core.deref(shadow.object._data(oref_23252));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__22872_23253,G__22873_23254,G__22874_23255,G__22875_23256) : shadow.object.info.call(null,G__22872_23253,G__22873_23254,G__22874_23255,G__22875_23256));


var G__23257 = seq__22842_23246;
var G__23258 = chunk__22843_23247;
var G__23259 = count__22844_23248;
var G__23260 = (i__22845_23249 + (1));
seq__22842_23246 = G__23257;
chunk__22843_23247 = G__23258;
count__22844_23248 = G__23259;
i__22845_23249 = G__23260;
continue;
} else {
var temp__5823__auto___23261 = cljs.core.seq(seq__22842_23246);
if(temp__5823__auto___23261){
var seq__22842_23262__$1 = temp__5823__auto___23261;
if(cljs.core.chunked_seq_QMARK_(seq__22842_23262__$1)){
var c__5673__auto___23263 = cljs.core.chunk_first(seq__22842_23262__$1);
var G__23264 = cljs.core.chunk_rest(seq__22842_23262__$1);
var G__23265 = c__5673__auto___23263;
var G__23266 = cljs.core.count(c__5673__auto___23263);
var G__23267 = (0);
seq__22842_23246 = G__23264;
chunk__22843_23247 = G__23265;
count__22844_23248 = G__23266;
i__22845_23249 = G__23267;
continue;
} else {
var vec__22880_23268 = cljs.core.first(seq__22842_23262__$1);
var id_23269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22880_23268,(0),null);
var oref_23270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22880_23268,(1),null);
var G__22883_23271 = "dump";
var G__22884_23272 = id_23269;
var G__22885_23273 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_23270)], 0));
var G__22886_23274 = cljs.core.deref(shadow.object._data(oref_23270));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__22883_23271,G__22884_23272,G__22885_23273,G__22886_23274) : shadow.object.info.call(null,G__22883_23271,G__22884_23272,G__22885_23273,G__22886_23274));


var G__23275 = cljs.core.next(seq__22842_23262__$1);
var G__23276 = null;
var G__23277 = (0);
var G__23278 = (0);
seq__22842_23246 = G__23275;
chunk__22843_23247 = G__23276;
count__22844_23248 = G__23277;
i__22845_23249 = G__23278;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
