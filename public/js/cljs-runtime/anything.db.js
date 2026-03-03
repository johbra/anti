goog.provide('anything.db');
anything.db.default_db = (function (){var now = cljs_time.local.local_now();
var datum = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.day(now))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.month(now))+"."+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.year(now)));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"invoice1","invoice1",1203720373),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"date","date",-1463434462),datum,new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"street","street",1870012303),"invoice-street",new cljs.core.Keyword(null,"street-no","street-no",10791405),"4711",new cljs.core.Keyword(null,"city-name","city-name",882040997),"Bremen",new cljs.core.Keyword(null,"city-code","city-code",-237533935),"28"], null),new cljs.core.Keyword(null,"Sum","Sum",-1967804812),(0),new cljs.core.Keyword(null,"VAT","VAT",438520368),(0),new cljs.core.Keyword(null,"totals","totals",1978625999),(0),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"product1","product1",-220064415),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"Product1",new cljs.core.Keyword(null,"amount","amount",364489504),(5),new cljs.core.Keyword(null,"price","price",22129180),(3),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null),new cljs.core.Keyword(null,"product2","product2",673269300),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"description","description",-1428560544),"Product2",new cljs.core.Keyword(null,"amount","amount",364489504),(3),new cljs.core.Keyword(null,"price","price",22129180),(6),new cljs.core.Keyword(null,"total","total",1916810418),(0)], null)], null),new cljs.core.Keyword(null,"customer","customer",1742966319),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first-name","first-name",-1559982131),"Jack",new cljs.core.Keyword(null,"last-name","last-name",-1695738974),"Cust",new cljs.core.Keyword(null,"company","company",-340475075),"JC",new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"street","street",1870012303),"customer-street",new cljs.core.Keyword(null,"street-no","street-no",10791405),"2",new cljs.core.Keyword(null,"city-name","city-name",882040997),"Hamburg",new cljs.core.Keyword(null,"city-code","city-code",-237533935),"20"], null)], null)], null),new cljs.core.Keyword(null,"invoice2","invoice2",-848561671),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"date","date",-1463434462),datum,new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"city-name","city-name",882040997),"Elmshorn"], null),new cljs.core.Keyword(null,"customer","customer",1742966319),null], null)], null),new cljs.core.Keyword(null,"selected-invoice","selected-invoice",2143434426),(0),new cljs.core.Keyword(null,"selected-product","selected-product",1323310240),null,new cljs.core.Keyword(null,"selected-address","selected-address",763318752),null,new cljs.core.Keyword(null,"selected-customer","selected-customer",1911523940),null], null);
})();
anything.db.product_flow = (function anything$db$product_flow(invoice_key,product_key){
if(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((function (){var G__16719 = new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(anything.db.default_db);
return (invoice_key.cljs$core$IFn$_invoke$arity$1 ? invoice_key.cljs$core$IFn$_invoke$arity$1(G__16719) : invoice_key.call(null,G__16719));
})()))){
return re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(invoice_key))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(product_key)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),invoice_key,new cljs.core.Keyword(null,"items","items",1031954938),product_key,new cljs.core.Keyword(null,"amount","amount",364489504)], null),new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),invoice_key,new cljs.core.Keyword(null,"items","items",1031954938),product_key,new cljs.core.Keyword(null,"price","price",22129180)], null)], null),new cljs.core.Keyword(null,"output","output",-1105869043),(function (p__16720){
var map__16722 = p__16720;
var map__16722__$1 = cljs.core.__destructure_map(map__16722);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16722__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16722__$1,new cljs.core.Keyword(null,"p","p",151049309));
return (a * p);
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),invoice_key,new cljs.core.Keyword(null,"items","items",1031954938),product_key,new cljs.core.Keyword(null,"total","total",1916810418)], null)], null));
} else {
return null;
}
});
anything.db.product_flows = (function anything$db$product_flows(){
var invoices = new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(anything.db.default_db);
var invs = cljs.core.vec(cljs.core.keys(invoices));
var ips = (function (){var iter__5628__auto__ = (function anything$db$product_flows_$_iter__16723(s__16724){
return (new cljs.core.LazySeq(null,(function (){
var s__16724__$1 = s__16724;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16724__$1);
if(temp__5823__auto__){
var s__16724__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16724__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__16724__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__16726 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__16725 = (0);
while(true){
if((i__16725 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__16725);
cljs.core.chunk_append(b__16726,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec(cljs.core.keys(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(invoices) : i.call(null,invoices)))))], null));

var G__16771 = (i__16725 + (1));
i__16725 = G__16771;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16726),anything$db$product_flows_$_iter__16723(cljs.core.chunk_rest(s__16724__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16726),null);
}
} else {
var i = cljs.core.first(s__16724__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.vec(cljs.core.keys(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((i.cljs$core$IFn$_invoke$arity$1 ? i.cljs$core$IFn$_invoke$arity$1(invoices) : i.call(null,invoices)))))], null),anything$db$product_flows_$_iter__16723(cljs.core.rest(s__16724__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(invs);
})();
var seq__16728 = cljs.core.seq(ips);
var chunk__16729 = null;
var count__16730 = (0);
var i__16731 = (0);
while(true){
if((i__16731 < count__16730)){
var x = chunk__16729.cljs$core$IIndexed$_nth$arity$2(null,i__16731);
var seq__16744_16772 = cljs.core.seq(cljs.core.second(x));
var chunk__16745_16773 = null;
var count__16746_16774 = (0);
var i__16747_16775 = (0);
while(true){
if((i__16747_16775 < count__16746_16774)){
var y_16776 = chunk__16745_16773.cljs$core$IIndexed$_nth$arity$2(null,i__16747_16775);
anything.db.product_flow(cljs.core.first(x),y_16776);


var G__16777 = seq__16744_16772;
var G__16778 = chunk__16745_16773;
var G__16779 = count__16746_16774;
var G__16780 = (i__16747_16775 + (1));
seq__16744_16772 = G__16777;
chunk__16745_16773 = G__16778;
count__16746_16774 = G__16779;
i__16747_16775 = G__16780;
continue;
} else {
var temp__5823__auto___16781 = cljs.core.seq(seq__16744_16772);
if(temp__5823__auto___16781){
var seq__16744_16782__$1 = temp__5823__auto___16781;
if(cljs.core.chunked_seq_QMARK_(seq__16744_16782__$1)){
var c__5673__auto___16783 = cljs.core.chunk_first(seq__16744_16782__$1);
var G__16784 = cljs.core.chunk_rest(seq__16744_16782__$1);
var G__16785 = c__5673__auto___16783;
var G__16786 = cljs.core.count(c__5673__auto___16783);
var G__16787 = (0);
seq__16744_16772 = G__16784;
chunk__16745_16773 = G__16785;
count__16746_16774 = G__16786;
i__16747_16775 = G__16787;
continue;
} else {
var y_16788 = cljs.core.first(seq__16744_16782__$1);
anything.db.product_flow(cljs.core.first(x),y_16788);


var G__16789 = cljs.core.next(seq__16744_16782__$1);
var G__16790 = null;
var G__16791 = (0);
var G__16792 = (0);
seq__16744_16772 = G__16789;
chunk__16745_16773 = G__16790;
count__16746_16774 = G__16791;
i__16747_16775 = G__16792;
continue;
}
} else {
}
}
break;
}


var G__16793 = seq__16728;
var G__16794 = chunk__16729;
var G__16795 = count__16730;
var G__16796 = (i__16731 + (1));
seq__16728 = G__16793;
chunk__16729 = G__16794;
count__16730 = G__16795;
i__16731 = G__16796;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16728);
if(temp__5823__auto__){
var seq__16728__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16728__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16728__$1);
var G__16797 = cljs.core.chunk_rest(seq__16728__$1);
var G__16798 = c__5673__auto__;
var G__16799 = cljs.core.count(c__5673__auto__);
var G__16800 = (0);
seq__16728 = G__16797;
chunk__16729 = G__16798;
count__16730 = G__16799;
i__16731 = G__16800;
continue;
} else {
var x = cljs.core.first(seq__16728__$1);
var seq__16749_16801 = cljs.core.seq(cljs.core.second(x));
var chunk__16750_16802 = null;
var count__16751_16803 = (0);
var i__16752_16804 = (0);
while(true){
if((i__16752_16804 < count__16751_16803)){
var y_16805 = chunk__16750_16802.cljs$core$IIndexed$_nth$arity$2(null,i__16752_16804);
anything.db.product_flow(cljs.core.first(x),y_16805);


var G__16806 = seq__16749_16801;
var G__16807 = chunk__16750_16802;
var G__16808 = count__16751_16803;
var G__16809 = (i__16752_16804 + (1));
seq__16749_16801 = G__16806;
chunk__16750_16802 = G__16807;
count__16751_16803 = G__16808;
i__16752_16804 = G__16809;
continue;
} else {
var temp__5823__auto___16810__$1 = cljs.core.seq(seq__16749_16801);
if(temp__5823__auto___16810__$1){
var seq__16749_16811__$1 = temp__5823__auto___16810__$1;
if(cljs.core.chunked_seq_QMARK_(seq__16749_16811__$1)){
var c__5673__auto___16812 = cljs.core.chunk_first(seq__16749_16811__$1);
var G__16813 = cljs.core.chunk_rest(seq__16749_16811__$1);
var G__16814 = c__5673__auto___16812;
var G__16815 = cljs.core.count(c__5673__auto___16812);
var G__16816 = (0);
seq__16749_16801 = G__16813;
chunk__16750_16802 = G__16814;
count__16751_16803 = G__16815;
i__16752_16804 = G__16816;
continue;
} else {
var y_16817 = cljs.core.first(seq__16749_16811__$1);
anything.db.product_flow(cljs.core.first(x),y_16817);


var G__16818 = cljs.core.next(seq__16749_16811__$1);
var G__16819 = null;
var G__16820 = (0);
var G__16821 = (0);
seq__16749_16801 = G__16818;
chunk__16750_16802 = G__16819;
count__16751_16803 = G__16820;
i__16752_16804 = G__16821;
continue;
}
} else {
}
}
break;
}


var G__16822 = cljs.core.next(seq__16728__$1);
var G__16823 = null;
var G__16824 = (0);
var G__16825 = (0);
seq__16728 = G__16822;
chunk__16729 = G__16823;
count__16730 = G__16824;
i__16731 = G__16825;
continue;
}
} else {
return null;
}
}
break;
}
});
anything.db.invoice_sum_flow = (function anything$db$invoice_sum_flow(invoice_key){
if(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((function (){var G__16753 = new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(anything.db.default_db);
return (invoice_key.cljs$core$IFn$_invoke$arity$1 ? invoice_key.cljs$core$IFn$_invoke$arity$1(G__16753) : invoice_key.call(null,G__16753));
})()))){
var p_keys = cljs.core.vec(cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(anything.db.default_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),invoice_key,new cljs.core.Keyword(null,"items","items",1031954938)], null))));
var flows = (function (){var iter__5628__auto__ = (function anything$db$invoice_sum_flow_$_iter__16754(s__16755){
return (new cljs.core.LazySeq(null,(function (){
var s__16755__$1 = s__16755;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__16755__$1);
if(temp__5823__auto__){
var s__16755__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__16755__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__16755__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__16757 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__16756 = (0);
while(true){
if((i__16756 < size__5627__auto__)){
var p = cljs.core._nth(c__5626__auto__,i__16756);
cljs.core.chunk_append(b__16757,re_frame.alpha.flow_LT__(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(invoice_key))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p))))));

var G__16826 = (i__16756 + (1));
i__16756 = G__16826;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__16757),anything$db$invoice_sum_flow_$_iter__16754(cljs.core.chunk_rest(s__16755__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__16757),null);
}
} else {
var p = cljs.core.first(s__16755__$2);
return cljs.core.cons(re_frame.alpha.flow_LT__(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(invoice_key))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(p))))),anything$db$invoice_sum_flow_$_iter__16754(cljs.core.rest(s__16755__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(p_keys);
})();
var inputs = cljs.core.zipmap(p_keys,flows);
return re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(invoice_key))+"-sum")),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inputs","inputs",865803858),inputs,new cljs.core.Keyword(null,"output","output",-1105869043),(function (t){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(0),cljs.core.vals(t));
}),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),invoice_key,new cljs.core.Keyword(null,"Sum","Sum",-1967804812)], null)], null));
} else {
return null;
}
});
anything.db.invoice_sum_flows = (function anything$db$invoice_sum_flows(){
var inv_keys = cljs.core.vec(cljs.core.keys(new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(anything.db.default_db)));
var seq__16758 = cljs.core.seq(inv_keys);
var chunk__16759 = null;
var count__16760 = (0);
var i__16761 = (0);
while(true){
if((i__16761 < count__16760)){
var i = chunk__16759.cljs$core$IIndexed$_nth$arity$2(null,i__16761);
anything.db.invoice_sum_flow(i);


var G__16827 = seq__16758;
var G__16828 = chunk__16759;
var G__16829 = count__16760;
var G__16830 = (i__16761 + (1));
seq__16758 = G__16827;
chunk__16759 = G__16828;
count__16760 = G__16829;
i__16761 = G__16830;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16758);
if(temp__5823__auto__){
var seq__16758__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16758__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16758__$1);
var G__16831 = cljs.core.chunk_rest(seq__16758__$1);
var G__16832 = c__5673__auto__;
var G__16833 = cljs.core.count(c__5673__auto__);
var G__16834 = (0);
seq__16758 = G__16831;
chunk__16759 = G__16832;
count__16760 = G__16833;
i__16761 = G__16834;
continue;
} else {
var i = cljs.core.first(seq__16758__$1);
anything.db.invoice_sum_flow(i);


var G__16835 = cljs.core.next(seq__16758__$1);
var G__16836 = null;
var G__16837 = (0);
var G__16838 = (0);
seq__16758 = G__16835;
chunk__16759 = G__16836;
count__16760 = G__16837;
i__16761 = G__16838;
continue;
}
} else {
return null;
}
}
break;
}
});
anything.db.invoice_field_flow = (function anything$db$invoice_field_flow(invoice_key,field,f){
if(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1((function (){var G__16762 = new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(anything.db.default_db);
return (invoice_key.cljs$core$IFn$_invoke$arity$1 ? invoice_key.cljs$core$IFn$_invoke$arity$1(G__16762) : invoice_key.call(null,G__16762));
})()))){
return re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(invoice_key))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(field)))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"inputs","inputs",865803858),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sum","sum",136986814),re_frame.alpha.flow_LT__(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name(invoice_key))+"-sum")))], null),new cljs.core.Keyword(null,"output","output",-1105869043),f,new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"invoices","invoices",1154128192),invoice_key,field], null)], null));
} else {
return null;
}
});
anything.db.vat = (function anything$db$vat(p__16763){
var map__16764 = p__16763;
var map__16764__$1 = cljs.core.__destructure_map(map__16764);
var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16764__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
return (0.19 * sum).toLocaleString("de-DE",[]);
});
anything.db.totals = (function anything$db$totals(p__16765){
var map__16766 = p__16765;
var map__16766__$1 = cljs.core.__destructure_map(map__16766);
var sum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16766__$1,new cljs.core.Keyword(null,"sum","sum",136986814));
return (1.19 * sum).toLocaleString("de-DE",[]);
});
anything.db.invoice_field_flows = (function anything$db$invoice_field_flows(field,f){
var inv_keys = cljs.core.vec(cljs.core.keys(new cljs.core.Keyword(null,"invoices","invoices",1154128192).cljs$core$IFn$_invoke$arity$1(anything.db.default_db)));
var seq__16767 = cljs.core.seq(inv_keys);
var chunk__16768 = null;
var count__16769 = (0);
var i__16770 = (0);
while(true){
if((i__16770 < count__16769)){
var i = chunk__16768.cljs$core$IIndexed$_nth$arity$2(null,i__16770);
anything.db.invoice_field_flow(i,field,f);


var G__16839 = seq__16767;
var G__16840 = chunk__16768;
var G__16841 = count__16769;
var G__16842 = (i__16770 + (1));
seq__16767 = G__16839;
chunk__16768 = G__16840;
count__16769 = G__16841;
i__16770 = G__16842;
continue;
} else {
var temp__5823__auto__ = cljs.core.seq(seq__16767);
if(temp__5823__auto__){
var seq__16767__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16767__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__16767__$1);
var G__16843 = cljs.core.chunk_rest(seq__16767__$1);
var G__16844 = c__5673__auto__;
var G__16845 = cljs.core.count(c__5673__auto__);
var G__16846 = (0);
seq__16767 = G__16843;
chunk__16768 = G__16844;
count__16769 = G__16845;
i__16770 = G__16846;
continue;
} else {
var i = cljs.core.first(seq__16767__$1);
anything.db.invoice_field_flow(i,field,f);


var G__16847 = cljs.core.next(seq__16767__$1);
var G__16848 = null;
var G__16849 = (0);
var G__16850 = (0);
seq__16767 = G__16847;
chunk__16768 = G__16848;
count__16769 = G__16849;
i__16770 = G__16850;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=anything.db.js.map
