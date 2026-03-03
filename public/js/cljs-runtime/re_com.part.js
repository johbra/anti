goog.provide('re_com.part');
re_com.part.id = cljs.core.first;
re_com.part.children = (function re_com$part$children(p__16889){
var vec__16890 = p__16889;
var seq__16891 = cljs.core.seq(vec__16890);
var first__16892 = cljs.core.first(seq__16891);
var seq__16891__$1 = cljs.core.next(seq__16891);
var _ = first__16892;
var vec__16893 = seq__16891__$1;
var seq__16894 = cljs.core.seq(vec__16893);
var first__16895 = cljs.core.first(seq__16894);
var seq__16894__$1 = cljs.core.next(seq__16894);
var x = first__16895;
var rest_children = seq__16894__$1;
var all_children = vec__16893;
if(cljs.core.map_QMARK_(x)){
return rest_children;
} else {
return all_children;
}
});
re_com.part.branch_QMARK_ = cljs.core.sequential_QMARK_;
re_com.part.unqualify = cljs.core.memoize(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword,cljs.core.name));
re_com.part.depth = cljs.core.memoize((function re_com$part$depth(tree,k){
var walk = (function re_com$part$depth_$_walk(node,depth__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(re_com.part.unqualify(k),re_com.part.unqualify((re_com.part.id.cljs$core$IFn$_invoke$arity$1 ? re_com.part.id.cljs$core$IFn$_invoke$arity$1(node) : re_com.part.id.call(null,node))))){
return depth__$1;
} else {
if(cljs.core.truth_((re_com.part.branch_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_com.part.branch_QMARK_.cljs$core$IFn$_invoke$arity$1(node) : re_com.part.branch_QMARK_.call(null,node)))){
return cljs.core.some((function (p1__16896_SHARP_){
return re_com$part$depth_$_walk(p1__16896_SHARP_,(depth__$1 + (1)));
}),re_com.part.children(node));
} else {
return null;
}
}
});
return walk(tree,(1));
}));
re_com.part.props = (function re_com$part$props(p__16897){
var vec__16898 = p__16897;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16898,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16898,(1),null);
if(cljs.core.map_QMARK_(b)){
return b;
} else {
return null;
}
});
re_com.part.top_level_args = (function re_com$part$top_level_args(structure){
return cljs.core.set(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (k){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.part.unqualify(k)], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.part.id,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),re_com.part.props),cljs.core.tree_seq(re_com.part.branch_QMARK_,re_com.part.children,structure)))], 0)));
});
re_com.part.css_class = (function re_com$part$css_class(part_id){
return (""+"rc-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16903 = part_id;
var G__16903__$1 = (((G__16903 == null))?null:cljs.core.namespace(G__16903));
if((G__16903__$1 == null)){
return null;
} else {
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(G__16903__$1,(7));
}
})())+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__16904 = part_id;
if((G__16904 == null)){
return null;
} else {
return cljs.core.name(G__16904);
}
})()));
});
re_com.part.css_class_STAR_ = cljs.core.memoize(re_com.part.css_class);
re_com.part.describe = cljs.core.memoize((function re_com$part$describe(structure){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (node){
var part_id = (re_com.part.id.cljs$core$IFn$_invoke$arity$1 ? re_com.part.id.cljs$core$IFn$_invoke$arity$1(node) : re_com.part.id.call(null,node));
var part_name = re_com.part.unqualify(part_id);
var map__16905 = re_com.part.props(node);
var map__16905__$1 = cljs.core.__destructure_map(map__16905);
var part_props = map__16905__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var impl = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16905__$1,new cljs.core.Keyword(null,"impl","impl",1677848700));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([part_props,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),part_name,new cljs.core.Keyword(null,"class","class",-2030961996),re_com.part.css_class(part_id),new cljs.core.Keyword(null,"level","level",1290497552),(re_com.part.depth(structure,part_name) - (1)),new cljs.core.Keyword(null,"impl","impl",1677848700),(""+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = ((typeof impl === 'string')?impl:null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = (cljs.core.truth_(impl)?clojure.string.replace(clojure.string.replace(cljs.core.ns_name(impl),"$","."),"_","-"):null);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = tag;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return ":div";
}
}
}
})())+"]")], null)], 0));
}),cljs.core.tree_seq(re_com.part.branch_QMARK_,re_com.part.children,structure));
}));
re_com.part.top_level_arg_QMARK_ = cljs.core.memoize((function (structure,k){
return cljs.core.contains_QMARK_(re_com.part.top_level_args(structure),k);
}));
re_com.part.unqualify_set = (function re_com$part$unqualify_set(s){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.part.unqualify,s));
});
re_com.part.args_valid_QMARK_ = (function re_com$part$args_valid_QMARK_(part_structure,args,problems){
var part_seq = cljs.core.tree_seq(re_com.part.branch_QMARK_,re_com.part.children,part_structure);
var req_ks = re_com.part.unqualify_set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.part.id,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"part-required?","part-required?",-318215354),re_com.part.props),part_seq)));
var ks = re_com.part.unqualify_set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.part.id,part_seq));
var top_ks = re_com.part.unqualify_set(re_com.part.top_level_args(part_structure));
var top_args = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(top_ks,cljs.core.keys(args)));
var part_args = cljs.core.set(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.keys(new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(args))));
var top_level_collisions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16906_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"problem","problem",1168155148),new cljs.core.Keyword(null,"part-top-level-collision","part-top-level-collision",-1458465990),new cljs.core.Keyword(null,"arg-name","arg-name",6205923),p1__16906_SHARP_], null);
}),clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(re_com.part.unqualify_set(part_args),re_com.part.unqualify_set(top_args)));
var top_level_unsupported_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16907_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"problem","problem",1168155148),new cljs.core.Keyword(null,"part-top-level-unsupported","part-top-level-unsupported",957025165),new cljs.core.Keyword(null,"arg-name","arg-name",6205923),p1__16907_SHARP_], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(top_ks,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(ks,cljs.core.set(cljs.core.keys(args)))));
var missing_req_keys = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__16908_SHARP_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"problem","problem",1168155148),new cljs.core.Keyword(null,"part-req-missing","part-req-missing",-1703505468),new cljs.core.Keyword(null,"arg-name","arg-name",6205923),p1__16908_SHARP_], null);
}),clojure.set.difference.cljs$core$IFn$_invoke$arity$2(req_ks,clojure.set.union.cljs$core$IFn$_invoke$arity$2(top_args,part_args)));
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(problems,top_level_collisions,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([top_level_unsupported_keys,missing_req_keys], 0)));
});
re_com.part.part_QMARK_ = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map_QMARK_,cljs.core.string_QMARK_,cljs.core.vector_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.number_QMARK_,cljs.core.ifn_QMARK_,cljs.core.nil_QMARK_], 0));
re_com.part.describe_args = (function re_com$part$describe_args(structure){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.parts_QMARK_(cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.part.describe(structure)))),new cljs.core.Keyword(null,"parts-validate-fn","parts-validate-fn",-1083296147),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_com.part.args_valid_QMARK_,structure),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"See ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#/parts"], null),"Parts"], null)], null)], null)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(re_com.part.top_level_args(structure),new cljs.core.Keyword(null,"name","name",1843675177))),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__16909_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__16909_SHARP_,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.part.part_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),"re-com part",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Overrides the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__16909_SHARP_)))], null)," key within ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":parts"], null),"."," See the parts section below for details."], null)], null)], 0));
}))),re_com.part.describe(structure));
});
re_com.part.get_part = (function re_com$part$get_part(part_structure,props,k){
var part_name = re_com.part.unqualify(k);
var or__5142__auto__ = (cljs.core.truth_(re_com.part.top_level_arg_QMARK_(part_structure,part_name))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,part_name):null);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parts","parts",849007691),part_name], null));
}
});
re_com.part.default$ = (function re_com$part$default(p__16910){
var map__16911 = p__16910;
var map__16911__$1 = cljs.core.__destructure_map(map__16911);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16911__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16911__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16911__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16911__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16911__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style], null),attr], 0))], null),children);
});
re_com.part.hiccup_QMARK_ = cljs.core.vector_QMARK_;
re_com.part.descend = cljs.core.identity;
re_com.part.part = (function re_com$part$part(var_args){
var G__16913 = arguments.length;
switch (G__16913) {
case 4:
return re_com.part.part.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return re_com.part.part.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_com.part.part.cljs$core$IFn$_invoke$arity$4 = (function (structure,props,k,opts){
return re_com.part.part.cljs$core$IFn$_invoke$arity$2(re_com.part.get_part(structure,props,k),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),k], null),(function (){var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"part","part",77757738));
if(cljs.core.truth_(temp__5823__auto__)){
var part = temp__5823__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from-part","from-part",924756880),part], null);
} else {
return null;
}
})()], 0)));
}));

(re_com.part.part.cljs$core$IFn$_invoke$arity$2 = (function (part_value,p__16914){
var map__16915 = p__16914;
var map__16915__$1 = cljs.core.__destructure_map(map__16915);
var part_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16915__$1,new cljs.core.Keyword(null,"part","part",77757738));
var impl = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__16915__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.part.default$);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16915__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16915__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var post_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16915__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16915__$1,new cljs.core.Keyword(null,"props","props",453281727));
var from_part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16915__$1,new cljs.core.Keyword(null,"from-part","from-part",924756880));
var G__16916 = (cljs.core.truth_((re_com.part.hiccup_QMARK_.cljs$core$IFn$_invoke$arity$1 ? re_com.part.hiccup_QMARK_.cljs$core$IFn$_invoke$arity$1(part_value) : re_com.part.hiccup_QMARK_.call(null,part_value)))?part_value:((typeof part_value === 'string')?part_value:((typeof part_value === 'number')?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(part_value)):(function (){var f = ((cljs.core.map_QMARK_(part_value))?impl:((cljs.core.ifn_QMARK_(part_value))?part_value:impl
));
var part_map = ((cljs.core.map_QMARK_(part_value))?part_value:null);
var props__$1 = (function (){var G__16917 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"part","part",77757738),part_id], null);
var G__16917__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__16917,props], 0))
;
var G__16917__$2 = (cljs.core.truth_(from_part)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__16917__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.Keyword(null,"from","from",1815293044)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),from_part):G__16917__$1);
var G__16917__$3 = (cljs.core.truth_(theme)?(theme.cljs$core$IFn$_invoke$arity$2 ? theme.cljs$core$IFn$_invoke$arity$2(G__16917__$2,f) : theme.call(null,G__16917__$2,f)):G__16917__$2);
var G__16917__$4 = (cljs.core.truth_(part_map)?re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__16917__$3,part_map], 0)):G__16917__$3);
if(cljs.core.truth_(post_props)){
return re_com.theme.util.merge_props.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__16917__$4,post_props], 0));
} else {
return G__16917__$4;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,props__$1], null);
})()
)));
if(cljs.core.truth_(key)){
return cljs.core.with_meta(G__16916,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),key], null));
} else {
return G__16916;
}
}));

(re_com.part.part.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=re_com.part.js.map
