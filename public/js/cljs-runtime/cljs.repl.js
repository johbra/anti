goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__23327){
var map__23328 = p__23327;
var map__23328__$1 = cljs.core.__destructure_map(map__23328);
var m = map__23328__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23328__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23328__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5142__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5823__auto__)){
var ns = temp__5823__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)+"/");
} else {
return null;
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)));
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23334_23698 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23335_23699 = null;
var count__23336_23700 = (0);
var i__23337_23701 = (0);
while(true){
if((i__23337_23701 < count__23336_23700)){
var f_23702 = chunk__23335_23699.cljs$core$IIndexed$_nth$arity$2(null,i__23337_23701);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23702], 0));


var G__23703 = seq__23334_23698;
var G__23704 = chunk__23335_23699;
var G__23705 = count__23336_23700;
var G__23706 = (i__23337_23701 + (1));
seq__23334_23698 = G__23703;
chunk__23335_23699 = G__23704;
count__23336_23700 = G__23705;
i__23337_23701 = G__23706;
continue;
} else {
var temp__5823__auto___23707 = cljs.core.seq(seq__23334_23698);
if(temp__5823__auto___23707){
var seq__23334_23708__$1 = temp__5823__auto___23707;
if(cljs.core.chunked_seq_QMARK_(seq__23334_23708__$1)){
var c__5673__auto___23709 = cljs.core.chunk_first(seq__23334_23708__$1);
var G__23710 = cljs.core.chunk_rest(seq__23334_23708__$1);
var G__23711 = c__5673__auto___23709;
var G__23712 = cljs.core.count(c__5673__auto___23709);
var G__23713 = (0);
seq__23334_23698 = G__23710;
chunk__23335_23699 = G__23711;
count__23336_23700 = G__23712;
i__23337_23701 = G__23713;
continue;
} else {
var f_23714 = cljs.core.first(seq__23334_23708__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_23714], 0));


var G__23715 = cljs.core.next(seq__23334_23708__$1);
var G__23716 = null;
var G__23717 = (0);
var G__23718 = (0);
seq__23334_23698 = G__23715;
chunk__23335_23699 = G__23716;
count__23336_23700 = G__23717;
i__23337_23701 = G__23718;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_23719 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5142__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_23719], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_23719)))?cljs.core.second(arglists_23719):arglists_23719)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m)))], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n  Please see http://clojure.org/special_forms#"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m)))], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__23377_23724 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__23378_23725 = null;
var count__23379_23726 = (0);
var i__23380_23727 = (0);
while(true){
if((i__23380_23727 < count__23379_23726)){
var vec__23470_23728 = chunk__23378_23725.cljs$core$IIndexed$_nth$arity$2(null,i__23380_23727);
var name_23729 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23470_23728,(0),null);
var map__23473_23730 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23470_23728,(1),null);
var map__23473_23731__$1 = cljs.core.__destructure_map(map__23473_23730);
var doc_23732 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23473_23731__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23733 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23473_23731__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23729], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23733], 0));

if(cljs.core.truth_(doc_23732)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23732], 0));
} else {
}


var G__23734 = seq__23377_23724;
var G__23735 = chunk__23378_23725;
var G__23736 = count__23379_23726;
var G__23737 = (i__23380_23727 + (1));
seq__23377_23724 = G__23734;
chunk__23378_23725 = G__23735;
count__23379_23726 = G__23736;
i__23380_23727 = G__23737;
continue;
} else {
var temp__5823__auto___23738 = cljs.core.seq(seq__23377_23724);
if(temp__5823__auto___23738){
var seq__23377_23739__$1 = temp__5823__auto___23738;
if(cljs.core.chunked_seq_QMARK_(seq__23377_23739__$1)){
var c__5673__auto___23740 = cljs.core.chunk_first(seq__23377_23739__$1);
var G__23741 = cljs.core.chunk_rest(seq__23377_23739__$1);
var G__23742 = c__5673__auto___23740;
var G__23743 = cljs.core.count(c__5673__auto___23740);
var G__23744 = (0);
seq__23377_23724 = G__23741;
chunk__23378_23725 = G__23742;
count__23379_23726 = G__23743;
i__23380_23727 = G__23744;
continue;
} else {
var vec__23491_23745 = cljs.core.first(seq__23377_23739__$1);
var name_23746 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23491_23745,(0),null);
var map__23494_23747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23491_23745,(1),null);
var map__23494_23748__$1 = cljs.core.__destructure_map(map__23494_23747);
var doc_23749 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23494_23748__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_23750 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23494_23748__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_23746], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_23750], 0));

if(cljs.core.truth_(doc_23749)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_23749], 0));
} else {
}


var G__23751 = cljs.core.next(seq__23377_23739__$1);
var G__23752 = null;
var G__23753 = (0);
var G__23754 = (0);
seq__23377_23724 = G__23751;
chunk__23378_23725 = G__23752;
count__23379_23726 = G__23753;
i__23380_23727 = G__23754;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5823__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n))),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5823__auto__)){
var fnspec = temp__5823__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__23519 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__23520 = null;
var count__23521 = (0);
var i__23522 = (0);
while(true){
if((i__23522 < count__23521)){
var role = chunk__23520.cljs$core$IIndexed$_nth$arity$2(null,i__23522);
var temp__5823__auto___23759__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___23759__$1)){
var spec_23760 = temp__5823__auto___23759__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_23760)], 0));
} else {
}


var G__23761 = seq__23519;
var G__23762 = chunk__23520;
var G__23763 = count__23521;
var G__23764 = (i__23522 + (1));
seq__23519 = G__23761;
chunk__23520 = G__23762;
count__23521 = G__23763;
i__23522 = G__23764;
continue;
} else {
var temp__5823__auto____$1 = cljs.core.seq(seq__23519);
if(temp__5823__auto____$1){
var seq__23519__$1 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__23519__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__23519__$1);
var G__23766 = cljs.core.chunk_rest(seq__23519__$1);
var G__23767 = c__5673__auto__;
var G__23768 = cljs.core.count(c__5673__auto__);
var G__23769 = (0);
seq__23519 = G__23766;
chunk__23520 = G__23767;
count__23521 = G__23768;
i__23522 = G__23769;
continue;
} else {
var role = cljs.core.first(seq__23519__$1);
var temp__5823__auto___23773__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5823__auto___23773__$2)){
var spec_23774 = temp__5823__auto___23773__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(""+"\n "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(role))+":"),cljs.spec.alpha.describe(spec_23774)], 0));
} else {
}


var G__23775 = cljs.core.next(seq__23519__$1);
var G__23776 = null;
var G__23777 = (0);
var G__23778 = (0);
seq__23519 = G__23775;
chunk__23520 = G__23776;
count__23521 = G__23777;
i__23522 = G__23778;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__23564 = datafied_throwable;
var map__23564__$1 = cljs.core.__destructure_map(map__23564);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23564__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23564__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__23564__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__23565 = cljs.core.last(via);
var map__23565__$1 = cljs.core.__destructure_map(map__23565);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23565__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23565__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23565__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__23566 = data;
var map__23566__$1 = cljs.core.__destructure_map(map__23566);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23566__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23566__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23566__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__23568 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__23568__$1 = cljs.core.__destructure_map(map__23568);
var top_data = map__23568__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23568__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__23573 = phase;
var G__23573__$1 = (((G__23573 instanceof cljs.core.Keyword))?G__23573.fqn:null);
switch (G__23573__$1) {
case "read-source":
var map__23577 = data;
var map__23577__$1 = cljs.core.__destructure_map(map__23577);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23577__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23577__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__23578 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__23578__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23578,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23578);
var G__23578__$2 = (cljs.core.truth_((function (){var fexpr__23579 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23579.cljs$core$IFn$_invoke$arity$1 ? fexpr__23579.cljs$core$IFn$_invoke$arity$1(source) : fexpr__23579.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23578__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23578__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23578__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23578__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__23581 = top_data;
var G__23581__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23581,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__23581);
var G__23581__$2 = (cljs.core.truth_((function (){var fexpr__23582 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23582.cljs$core$IFn$_invoke$arity$1 ? fexpr__23582.cljs$core$IFn$_invoke$arity$1(source) : fexpr__23582.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__23581__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__23581__$1);
var G__23581__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23581__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23581__$2);
var G__23581__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23581__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23581__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23581__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23581__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__23595 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23595,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23595,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23595,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23595,(3),null);
var G__23598 = top_data;
var G__23598__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23598,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__23598);
var G__23598__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23598__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__23598__$1);
var G__23598__$3 = (cljs.core.truth_((function (){var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23598__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__23598__$2);
var G__23598__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23598__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__23598__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23598__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__23598__$4;
}

break;
case "execution":
var vec__23606 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23606,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23606,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23606,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23606,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__23563_SHARP_){
var or__5142__auto__ = (p1__23563_SHARP_ == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var fexpr__23618 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__23618.cljs$core$IFn$_invoke$arity$1 ? fexpr__23618.cljs$core$IFn$_invoke$arity$1(p1__23563_SHARP_) : fexpr__23618.call(null,p1__23563_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return line;
}
})();
var G__23619 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__23619__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23619,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__23619);
var G__23619__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23619__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__23619__$1);
var G__23619__$3 = (cljs.core.truth_((function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var and__5140__auto__ = source__$1;
if(cljs.core.truth_(and__5140__auto__)){
return method;
} else {
return and__5140__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23619__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5142__auto__ = fn;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__23619__$2);
var G__23619__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23619__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__23619__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23619__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__23619__$4;
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23573__$1))));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__23639){
var map__23640 = p__23639;
var map__23640__$1 = cljs.core.__destructure_map(map__23640);
var triage_data = map__23640__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23640__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23640__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23640__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23640__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23640__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23640__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23640__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23640__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = source;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "<cljs repl>";
}
})())+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = line;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})())+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(column)?(""+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)):"")));
var class_name = cljs.core.name((function (){var or__5142__auto__ = class$;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":(""+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(simple_class)+")"));
var format = goog.string.format;
var G__23642 = phase;
var G__23642__$1 = (((G__23642 instanceof cljs.core.Keyword))?G__23642.fqn:null);
switch (G__23642__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__23647 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__23648 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__23649 = loc;
var G__23650 = (cljs.core.truth_(spec)?(function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23652_23795 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23653_23796 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23654_23797 = true;
var _STAR_print_fn_STAR__temp_val__23655_23798 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23654_23797);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23655_23798);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23636_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23636_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23653_23796);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23652_23795);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23647,G__23648,G__23649,G__23650) : format.call(null,G__23647,G__23648,G__23649,G__23650));

break;
case "macroexpansion":
var G__23662 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__23663 = cause_type;
var G__23664 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__23665 = loc;
var G__23666 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23662,G__23663,G__23664,G__23665,G__23666) : format.call(null,G__23662,G__23663,G__23664,G__23665,G__23666));

break;
case "compile-syntax-check":
var G__23667 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__23668 = cause_type;
var G__23669 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__23670 = loc;
var G__23671 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23667,G__23668,G__23669,G__23670,G__23671) : format.call(null,G__23667,G__23668,G__23669,G__23670,G__23671));

break;
case "compilation":
var G__23672 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__23673 = cause_type;
var G__23674 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__23675 = loc;
var G__23676 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23672,G__23673,G__23674,G__23675,G__23676) : format.call(null,G__23672,G__23673,G__23674,G__23675,G__23676));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__23677 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__23678 = symbol;
var G__23679 = loc;
var G__23680 = (function (){var sb__5795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__23681_23800 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__23682_23801 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__23683_23802 = true;
var _STAR_print_fn_STAR__temp_val__23684_23803 = (function (x__5796__auto__){
return sb__5795__auto__.append(x__5796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__23683_23802);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__23684_23803);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__23637_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__23637_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__23682_23801);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__23681_23800);
}
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5795__auto__));
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__23677,G__23678,G__23679,G__23680) : format.call(null,G__23677,G__23678,G__23679,G__23680));
} else {
var G__23686 = "Execution error%s at %s(%s).\n%s\n";
var G__23687 = cause_type;
var G__23688 = (cljs.core.truth_(symbol)?(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)+" "):"");
var G__23689 = loc;
var G__23690 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__23686,G__23687,G__23688,G__23689,G__23690) : format.call(null,G__23686,G__23687,G__23688,G__23689,G__23690));
}

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23642__$1))));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
