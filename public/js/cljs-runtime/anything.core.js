goog.provide('anything.core');
if((typeof anything !== 'undefined') && (typeof anything.core !== 'undefined') && (typeof anything.core.root_container !== 'undefined')){
} else {
anything.core.root_container = reagent.dom.client.create_root(document.getElementById("app"));
}
anything.core.main = (function anything$core$main(){
anything.db.product_flows();

anything.db.invoice_sum_flows();

anything.db.invoice_field_flows(new cljs.core.Keyword(null,"VAT","VAT",438520368),anything.db.vat);

anything.db.invoice_field_flows(new cljs.core.Keyword(null,"totals","totals",1978625999),anything.db.totals);

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(anything.core.root_container,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [anything.views.ui], null));
});
anything.core.clear_cache_and_render_BANG_ = (function anything$core$clear_cache_and_render_BANG_(){
re_frame.alpha.clear_subscription_cache_BANG_();

return anything.core.main();
});
anything.core.run = (function anything$core$run(){
re_frame.alpha.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return anything.core.main();
});

//# sourceMappingURL=anything.core.js.map
