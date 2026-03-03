goog.provide('re_com.daterange');
re_com.daterange.dec_month = (function re_com$daterange$dec_month(date_time){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(date_time,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((1)));
});
re_com.daterange.plus_month = (function re_com$daterange$plus_month(date_time){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date_time,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((1)));
});
re_com.daterange.plus_day = (function re_com$daterange$plus_day(date_time){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date_time,cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
});
re_com.daterange.dec_year = (function re_com$daterange$dec_year(date_time){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(date_time,cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((1)));
});
re_com.daterange.plus_year = (function re_com$daterange$plus_year(date_time){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(date_time,cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((1)));
});
/**
 * Returns the appropriate month from the list on ordered months (likely not in english)
 */
re_com.daterange.month_label = (function re_com$daterange$month_label(date,p__17749){
var map__17750 = p__17749;
var map__17750__$1 = cljs.core.__destructure_map(map__17750);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17750__$1,new cljs.core.Keyword(null,"months","months",-45571637));
if(cljs.core.truth_(months)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(months,(cljs_time.core.month(date) - (1)))));
} else {
return cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("MMMM"),date);
}
});
re_com.daterange.prev_year_nav = (function re_com$daterange$prev_year_nav(current_month_atom,part,theme,re_com_ctx){
var prev_year = re_com.daterange.dec_year(re_com.util.deref_or_value(current_month_atom));
var G__17761 = new cljs.core.Keyword("re-com.daterange","prev-year","re-com.daterange/prev-year",-1339367697);
var G__17762 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.reset_BANG_(current_month_atom,prev_year);

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),(function (){var G__17763 = new cljs.core.Keyword("re-com.daterange","prev-year-icon","re-com.daterange/prev-year-icon",1984542541);
var G__17764 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(1.5)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m 16.793529,7.4382353 -1.41,-1.41 -5.9999996,5.9999997 5.9999996,6 1.41,-1.41 -4.58,-4.59 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m 10.862647,7.4429412 -1.4100003,-1.41 -6,5.9999998 6,6 1.4100003,-1.41 -4.5800003,-4.59 z"], null)], null)], null)], null)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17763,G__17764) : part.call(null,G__17763,G__17764));
})()], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17761,G__17762) : part.call(null,G__17761,G__17762));
});
re_com.daterange.prev_month_nav = (function re_com$daterange$prev_month_nav(current_month_atom,part,theme,re_com_ctx){
var prev_month = re_com.daterange.dec_month(re_com.util.deref_or_value(current_month_atom));
var G__17766 = new cljs.core.Keyword("re-com.daterange","prev-month","re-com.daterange/prev-month",-1305278569);
var G__17767 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.reset_BANG_(current_month_atom,prev_month);

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),(function (){var G__17769 = new cljs.core.Keyword("re-com.daterange","prev-month-icon","re-com.daterange/prev-month-icon",1718850071);
var G__17770 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"], null)], null)], null)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17769,G__17770) : part.call(null,G__17769,G__17770));
})()], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17766,G__17767) : part.call(null,G__17766,G__17767));
});
re_com.daterange.next_year_nav = (function re_com$daterange$next_year_nav(current_month_atom,part,theme,re_com_ctx){
var next_year = re_com.daterange.plus_year(re_com.util.deref_or_value(current_month_atom));
var G__17773 = new cljs.core.Keyword("re-com.daterange","next-year","re-com.daterange/next-year",1238501158);
var G__17774 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.reset_BANG_(current_month_atom,next_year);

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),(function (){var G__17775 = new cljs.core.Keyword("re-com.daterange","next-year-icon","re-com.daterange/next-year-icon",-1180269829);
var G__17776 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(-1.5)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m 8.5882353,6 -1.41,1.41 4.5799997,4.59 -4.5799997,4.59 1.41,1.41 5.9999997,-6 z"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"m 14.547353,5.9623529 -1.41,1.41 4.58,4.5900001 -4.58,4.59 1.41,1.41 6,-6 z"], null)], null)], null)], null)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17775,G__17776) : part.call(null,G__17775,G__17776));
})()], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17773,G__17774) : part.call(null,G__17773,G__17774));
});
re_com.daterange.next_month_nav = (function re_com$daterange$next_month_nav(current_month_atom,part,theme,re_com_ctx){
var next_month = re_com.daterange.plus_month(re_com.util.deref_or_value(current_month_atom));
var G__17777 = new cljs.core.Keyword("re-com.daterange","next-month","re-com.daterange/next-month",-226306198);
var G__17778 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
cljs.core.reset_BANG_(current_month_atom,next_month);

return null;
})], null),new cljs.core.Keyword(null,"child","child",623967545),(function (){var G__17780 = new cljs.core.Keyword("re-com.daterange","next-month-icon","re-com.daterange/next-month-icon",-1905220951);
var G__17781 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 24 24"], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"], null)], null)], null)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17780,G__17781) : part.call(null,G__17780,G__17781));
})()], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17777,G__17778) : part.call(null,G__17777,G__17778));
});
re_com.daterange.prev_nav = (function re_com$daterange$prev_nav(current_month_atom,part,theme,re_com_ctx,i18n){
var G__17783 = new cljs.core.Keyword("re-com.daterange","prev-nav","re-com.daterange/prev-nav",696305280);
var G__17784 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.daterange.prev_year_nav(current_month_atom,part,theme,re_com_ctx),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line], null),re_com.daterange.prev_month_nav(current_month_atom,part,theme,re_com_ctx),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17785 = new cljs.core.Keyword("re-com.daterange","month-title","re-com.daterange/month-title",992765711);
var G__17786 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"child","child",623967545),re_com.daterange.month_label(re_com.util.deref_or_value(current_month_atom),i18n)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17785,G__17786) : part.call(null,G__17785,G__17786));
})()], null)], null),(function (){var G__17788 = new cljs.core.Keyword("re-com.daterange","year-title","re-com.daterange/year-title",-2076007133);
var G__17789 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"child","child",623967545),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("YYYY"),re_com.util.deref_or_value(current_month_atom))))], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17788,G__17789) : part.call(null,G__17788,G__17789));
})()], null)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17783,G__17784) : part.call(null,G__17783,G__17784));
});
re_com.daterange.next_nav = (function re_com$daterange$next_nav(current_month_atom,part,theme,re_com_ctx,i18n){
var G__17792 = new cljs.core.Keyword("re-com.daterange","next-nav","re-com.daterange/next-nav",213579062);
var G__17793 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17794 = new cljs.core.Keyword("re-com.daterange","year-title","re-com.daterange/year-title",-2076007133);
var G__17795 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"child","child",623967545),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1("YYYY"),re_com.daterange.plus_month(re_com.util.deref_or_value(current_month_atom)))))], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17794,G__17795) : part.call(null,G__17794,G__17795));
})(),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"auto",new cljs.core.Keyword(null,"justify","justify",-722524056),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17796 = new cljs.core.Keyword("re-com.daterange","month-title","re-com.daterange/month-title",992765711);
var G__17797 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"child","child",623967545),re_com.daterange.month_label(re_com.daterange.plus_month(re_com.util.deref_or_value(current_month_atom)),i18n)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17796,G__17797) : part.call(null,G__17796,G__17797));
})()], null)], null),re_com.daterange.next_month_nav(current_month_atom,part,theme,re_com_ctx),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.line], null),re_com.daterange.next_year_nav(current_month_atom,part,theme,re_com_ctx)], null)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17792,G__17793) : part.call(null,G__17792,G__17793));
});
/**
 * Checks various things to see if a date had been disabled.
 */
re_com.daterange.date_disabled_QMARK_ = (function re_com$daterange$date_disabled_QMARK_(date,p__17799){
var vec__17801 = p__17799;
var minimum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17801,(0),null);
var maximum = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17801,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17801,(2),null);
var selectable_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17801,(3),null);
var too_early_QMARK_ = (cljs.core.truth_(minimum)?cljs_time.core.before_QMARK_(date,re_com.util.deref_or_value(minimum)):null);
var too_late_QMARK_ = (cljs.core.truth_(maximum)?cljs_time.core.after_QMARK_(date,re_com.util.deref_or_value(maximum)):null);
var de_selected_QMARK_ = (cljs.core.truth_(selectable_fn)?cljs.core.not((selectable_fn.cljs$core$IFn$_invoke$arity$1 ? selectable_fn.cljs$core$IFn$_invoke$arity$1(date) : selectable_fn.call(null,date))):null);
var or__5142__auto__ = too_early_QMARK_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = too_late_QMARK_;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = de_selected_QMARK_;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return disabled_QMARK_;
}
}
}
});
/**
 * inclusively creates a vector of date-formats from start to end.
 */
re_com.daterange.create_interval = (function re_com$daterange$create_interval(start,end){
var first = re_com.util.deref_or_value(start);
var last = re_com.util.deref_or_value(end);
var cur = first;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs_time.core.after_QMARK_(cur,last))){
return result;
} else {
var G__17963 = re_com.daterange.plus_day(cur);
var G__17964 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,cur);
cur = G__17963;
result = G__17964;
continue;
}
break;
}
});
/**
 * Returns true if all days are NOT disabled in some way.
 */
re_com.daterange.interval_valid_QMARK_ = (function re_com$daterange$interval_valid_QMARK_(start,end,disabled_data){
var interval = re_com.daterange.create_interval(start,end);
return cljs.core.not(cljs.core.some(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17804_SHARP_){
return re_com.daterange.date_disabled_QMARK_(p1__17804_SHARP_,disabled_data);
}),interval)));
});
/**
 * Depending on the stage of the selection and if the new selected date is before the old start date, do different things
 */
re_com.daterange.td_click_handler = (function re_com$daterange$td_click_handler(day,p__17805,on_change,check_interval_QMARK_,disabled_data){
var vec__17806 = p__17805;
var fsm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17806,(0),null);
var start_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17806,(1),null);
var end_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17806,(2),null);
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fsm),"pick-end");
if(and__5140__auto__){
var and__5140__auto____$1 = (function (){var or__5142__auto__ = cljs_time.core.before_QMARK_(cljs.core.deref(start_date),day);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs_time.core.equal_QMARK_(cljs.core.deref(start_date),day);
}
})();
if(cljs.core.truth_(and__5140__auto____$1)){
if(cljs.core.truth_(check_interval_QMARK_)){
return re_com.daterange.interval_valid_QMARK_(start_date,day,disabled_data);
} else {
return true;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
cljs.core.reset_BANG_(fsm,"pick-start");

cljs.core.reset_BANG_(end_date,day);

var G__17809 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.deref(start_date),new cljs.core.Keyword(null,"end","end",-268185958),day], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__17809) : on_change.call(null,G__17809));
} else {
cljs.core.reset_BANG_(start_date,day);

cljs.core.reset_BANG_(end_date,day);

return cljs.core.reset_BANG_(fsm,"pick-end");
}
});
/**
 * Given a date, and the values in the internal model, determine which css class the :td should have
 */
re_com.daterange.class_for_td = (function re_com$daterange$class_for_td(fsm,day,start_date,end_date,temp_end,disabled_QMARK_,selectable_fn,minimum,maximum,show_today_QMARK_){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(start_date);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fsm),"pick-end");
if(and__5140__auto____$1){
var and__5140__auto____$2 = cljs_time.core.equal_QMARK_(day,cljs.core.deref(start_date));
if(cljs.core.truth_(and__5140__auto____$2)){
return cljs_time.core.equal_QMARK_(day,cljs.core.deref(end_date));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return "daterange-start-end-td";
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(start_date);
if(cljs.core.truth_(and__5140__auto__)){
return cljs_time.core.equal_QMARK_(day,cljs.core.deref(start_date));
} else {
return and__5140__auto__;
}
})())){
return "daterange-start-td";
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(start_date);
if(cljs.core.truth_(and__5140__auto__)){
return cljs_time.core.equal_QMARK_(day,cljs.core.deref(end_date));
} else {
return and__5140__auto__;
}
})())){
return "daterange-end-td";
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(start_date);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(day,"");
if(and__5140__auto____$1){
var and__5140__auto____$2 = cljs_time.core.before_QMARK_(day,cljs.core.deref(end_date));
if(cljs.core.truth_(and__5140__auto____$2)){
return cljs_time.core.after_QMARK_(day,cljs.core.deref(start_date));
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return "daterange-interval-td";
} else {
if(cljs.core.truth_((cljs.core.truth_(minimum)?cljs_time.core.before_QMARK_(day,re_com.util.deref_or_value(minimum)):null))){
return "daterange-disabled-td";
} else {
if(cljs.core.truth_((cljs.core.truth_(maximum)?cljs_time.core.after_QMARK_(day,re_com.util.deref_or_value(maximum)):null))){
return "daterange-disabled-td";
} else {
if(cljs.core.truth_(disabled_QMARK_)){
return "daterange-disabled-td";
} else {
if(cljs.core.truth_((cljs.core.truth_(selectable_fn)?cljs.core.not((selectable_fn.cljs$core$IFn$_invoke$arity$1 ? selectable_fn.cljs$core$IFn$_invoke$arity$1(day) : selectable_fn.call(null,day))):null))){
return "daterange-disabled-td";
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.deref(start_date);
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(day,"");
if(and__5140__auto____$1){
var and__5140__auto____$2 = cljs_time.core.equal_QMARK_(cljs.core.deref(end_date),cljs.core.deref(start_date));
if(cljs.core.truth_(and__5140__auto____$2)){
var and__5140__auto____$3 = cljs_time.core.before_QMARK_(day,re_com.daterange.plus_day(cljs.core.deref(temp_end)));
if(cljs.core.truth_(and__5140__auto____$3)){
return cljs_time.core.after_QMARK_(day,cljs.core.deref(start_date));
} else {
return and__5140__auto____$3;
}
} else {
return and__5140__auto____$2;
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return "daterange-temp-td";
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = show_today_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs_time.core.equal_QMARK_(day,re_com.util.now__GT_utc());
} else {
return and__5140__auto__;
}
})())){
return "daterange-today";
} else {
return "daterange-default-td";

}
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
/**
 * Create table data elements with reactive classes and on click/hover handlers
 */
re_com.daterange.create_day_td = (function re_com$daterange$create_day_td(day,p__17819,part,theme,re_com_ctx,p__17820){
var vec__17823 = p__17819;
var fsm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17823,(0),null);
var start_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17823,(1),null);
var end_date = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17823,(2),null);
var temp_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17823,(3),null);
var map__17826 = p__17820;
var map__17826__$1 = cljs.core.__destructure_map(map__17826);
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17826__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17826__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var selectable_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17826__$1,new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738));
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17826__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059));
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17826__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714));
var show_today_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17826__$1,new cljs.core.Keyword(null,"show-today?","show-today?",513056415));
var check_interval_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17826__$1,new cljs.core.Keyword(null,"check-interval?","check-interval?",-757504003));
var disabled_data = (new cljs.core.PersistentVector(null,4,(5),cljs.core.PersistentVector.EMPTY_NODE,[minimum,maximum,disabled_QMARK_,selectable_fn],null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(day,"")){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),""], null);
} else {
var correct_class = re_com.daterange.class_for_td(fsm,day,start_date,end_date,temp_end,disabled_QMARK_,selectable_fn,minimum,maximum,show_today_QMARK_);
var clickable_QMARK_ = cljs.core.not(re_com.daterange.date_disabled_QMARK_(day,disabled_data));
var G__17830 = new cljs.core.Keyword("re-com.daterange","date","re-com.daterange/date",1001159450);
var G__17831 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (event){
if(clickable_QMARK_){
re_com.daterange.td_click_handler(day,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fsm,start_date,end_date], null),on_change,check_interval_QMARK_,disabled_data);
} else {
}

return null;
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (event){
cljs.core.reset_BANG_(temp_end,day);

return null;
})], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.core.day(day)))], null)], null),new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),correct_class], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17830,G__17831) : part.call(null,G__17830,G__17831));
}
});
re_com.daterange.week_td = (function re_com$daterange$week_td(week_number){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2 ? re_com.theme.merge_class.cljs$core$IFn$_invoke$arity$2("daterange-td-basic","daterange-week") : re_com.theme.merge_class.call(null,"daterange-td-basic","daterange-week"))], null),week_number], null);
});
re_com.daterange.week_of_year_calc = (function re_com$daterange$week_of_year_calc(days_list){
return cljs_time.core.week_number_of_year(cljs.core.last(days_list));
});
/**
 * Given a list of days, create a table row with each :td referring to a different day
 */
re_com.daterange.create_week_tr = (function re_com$daterange$create_week_tr(days_list,atoms,part,theme,re_com_ctx,p__17854){
var map__17855 = p__17854;
var map__17855__$1 = cljs.core.__destructure_map(map__17855);
var args = map__17855__$1;
var show_weeks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17855__$1,new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221));
var week_of_year = re_com.daterange.week_of_year_calc(days_list);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(show_weeks_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),re_com.daterange.week_td(week_of_year)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null)),(function (){var iter__5628__auto__ = (function re_com$daterange$create_week_tr_$_iter__17856(s__17857){
return (new cljs.core.LazySeq(null,(function (){
var s__17857__$1 = s__17857;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17857__$1);
if(temp__5823__auto__){
var s__17857__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17857__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__17857__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__17859 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__17858 = (0);
while(true){
if((i__17858 < size__5627__auto__)){
var day = cljs.core._nth(c__5626__auto__,i__17858);
cljs.core.chunk_append(b__17859,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.daterange.create_day_td,day,atoms,part,theme,re_com_ctx,args], null));

var G__17985 = (i__17858 + (1));
i__17858 = G__17985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17859),re_com$daterange$create_week_tr_$_iter__17856(cljs.core.chunk_rest(s__17857__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17859),null);
}
} else {
var day = cljs.core.first(s__17857__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.daterange.create_day_td,day,atoms,part,theme,re_com_ctx,args], null),re_com$daterange$create_week_tr_$_iter__17856(cljs.core.rest(s__17857__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(days_list);
})());
});
/**
 * Returns the number of empty date tiles at the start of the month based on the first day of the month and the chosen week start day, monday = 1 sunday = 7
 */
re_com.daterange.empty_days_count = (function re_com$daterange$empty_days_count(chosen,start){
var chosen__$1 = (function (){var or__5142__auto__ = chosen;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (1);
}
})();
if((chosen__$1 > start)){
return ((7) - (chosen__$1 - start));
} else {
return (start - chosen__$1);
}
});
/**
 * Produces a partitioned list of date-formats with all the days in the given month, with leading empty strings to align with the days of the week
 */
re_com.daterange.days_for_month = (function re_com$daterange$days_for_month(date_from_month,start_of_week){
var month = cljs_time.core.month(date_from_month);
var year = cljs_time.core.year(date_from_month);
var last_day_of_month = cljs_time.core.day(cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1(date_from_month));
var first_day_val = cljs_time.core.day_of_week(cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1(date_from_month));
var day_ints = cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(last_day_of_month + (1)));
var days = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__17878_SHARP_){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(year,month,p1__17878_SHARP_);
}),day_ints);
var with_lead_emptys = cljs.core.flatten(cljs.core.cons(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(re_com.daterange.empty_days_count(start_of_week,first_day_val),""),days));
return cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((7),with_lead_emptys);
});
re_com.daterange.days = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","Tu","W","Th","F","Sa","Su"], null);
/**
 * Given the result from days-for-month for a given month, create the :tbody
 *   using the relevant :tr and :td functions above
 */
re_com.daterange.create_table = (function re_com$daterange$create_table(date,atoms,part,theme,re_com_ctx,side,p__17891){
var map__17895 = p__17891;
var map__17895__$1 = cljs.core.__destructure_map(map__17895);
var args = map__17895__$1;
var start_of_week = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17895__$1,new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824));
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17895__$1,new cljs.core.Keyword(null,"i18n","i18n",-563422499));
var show_weeks_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17895__$1,new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221));
var table_ctx = cljs.core.assoc_in(re_com_ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"side","side",389652279)], null),side);
var day_td = (function (day_string){
var G__17897 = new cljs.core.Keyword("re-com.daterange","day-title","re-com.daterange/day-title",1913677175);
var G__17898 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),table_ctx,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day_string], null)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17897,G__17898) : part.call(null,G__17897,G__17898));
});
var weekday_row = cljs.core.into.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(show_weeks_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353)], null)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(day_td,cljs.core.take.cljs$core$IFn$_invoke$arity$2((7),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((start_of_week - (1)),cljs.core.cycle(new cljs.core.Keyword(null,"days","days",-1394072564).cljs$core$IFn$_invoke$arity$2(i18n,re_com.daterange.days))))));
var date_rows = (function (){var iter__5628__auto__ = (function re_com$daterange$create_table_$_iter__17901(s__17902){
return (new cljs.core.LazySeq(null,(function (){
var s__17902__$1 = s__17902;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__17902__$1);
if(temp__5823__auto__){
var s__17902__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__17902__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__17902__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__17904 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__17903 = (0);
while(true){
if((i__17903 < size__5627__auto__)){
var days = cljs.core._nth(c__5626__auto__,i__17903);
cljs.core.chunk_append(b__17904,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.daterange.create_week_tr,days,atoms,part,theme,table_ctx,args], null));

var G__18001 = (i__17903 + (1));
i__17903 = G__18001;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__17904),re_com$daterange$create_table_$_iter__17901(cljs.core.chunk_rest(s__17902__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__17904),null);
}
} else {
var days = cljs.core.first(s__17902__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.daterange.create_week_tr,days,atoms,part,theme,table_ctx,args], null),re_com$daterange$create_table_$_iter__17901(cljs.core.rest(s__17902__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(re_com.daterange.days_for_month(date,start_of_week));
})();
var G__17905 = new cljs.core.Keyword("re-com.daterange","table","re-com.daterange/table",1427726140);
var G__17906 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.Keyword(null,"re-com","re-com",-2034768951),table_ctx,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),weekday_row], null),date_rows)], null)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__17905,G__17906) : part.call(null,G__17905,G__17906));
});
/**
 * takes two date ranges and checks if they are different
 */
re_com.daterange.model_changed_QMARK_ = (function re_com$daterange$model_changed_QMARK_(old,latest){
return cljs.core.not((function (){var and__5140__auto__ = (latest == null);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs_time.core.equal_QMARK_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(old),new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(latest));
if(cljs.core.truth_(and__5140__auto____$1)){
return cljs_time.core.equal_QMARK_(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(old),new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(latest));
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})());
});
/**
 * useless
 */
re_com.daterange.model_QMARK_ = (function re_com$daterange$model_QMARK_(p__17909){
var map__17910 = p__17909;
var map__17910__$1 = cljs.core.__destructure_map(map__17910);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17910__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17910__$1,new cljs.core.Keyword(null,"end","end",-268185958));
((re_com.validate.date_like_QMARK_(start)) && (re_com.validate.date_like_QMARK_(end)));

return true;
});
re_com.daterange.part_structure = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","wrapper","re-com.daterange/wrapper",608268148),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","h-box","re-com.box/h-box",574665693,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","border","re-com.daterange/border",2077600195),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","border","re-com.box/border",1958512590,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","container","re-com.daterange/container",42714909),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","h-box","re-com.box/h-box",574665693,null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","left-panel","re-com.daterange/left-panel",1672771633),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","v-box","re-com.box/v-box",-981983886,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","prev-nav","re-com.daterange/prev-nav",696305280),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","h-box","re-com.box/h-box",574665693,null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","prev-year","re-com.daterange/prev-year",-1339367697),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","prev-year-icon","re-com.daterange/prev-year-icon",1984542541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","prev-month","re-com.daterange/prev-month",-1305278569),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","prev-month-icon","re-com.daterange/prev-month-icon",1718850071),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","month-title","re-com.daterange/month-title",992765711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","year-title","re-com.daterange/year-title",-2076007133),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","table","re-com.daterange/table",1427726140),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"table","table",-564943036)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","day-title","re-com.daterange/day-title",1913677175),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"td","td",1479933353)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","date","re-com.daterange/date",1001159450),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"td","td",1479933353)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","right-panel","re-com.daterange/right-panel",125563839),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","v-box","re-com.box/v-box",-981983886,null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","next-nav","re-com.daterange/next-nav",213579062),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","h-box","re-com.box/h-box",574665693,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","year-title","re-com.daterange/year-title",-2076007133),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","month-title","re-com.daterange/month-title",992765711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","next-month","re-com.daterange/next-month",-226306198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","next-month-icon","re-com.daterange/next-month-icon",-1905220951),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","next-year","re-com.daterange/next-year",1238501158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","box","re-com.box/box",-1057327507,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","next-year-icon","re-com.daterange/next-year-icon",-1180269829),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"svg","svg",856789142)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.daterange","table","re-com.daterange/table",1427726140)], null)], null)], null)], null)], null);
re_com.daterange.daterange_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.daterange.part_structure):null);
re_com.daterange.daterange_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.daterange.daterange_parts_desc)):null);
re_com.daterange.daterange_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map with keys :start, :end | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.daterange.model_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"the selected date range. Only updates after a selection has been completed. A closed (inclusive) interval. A map containing :start and :end whose values must both satisfy DateTimeProtocol. Nil is also acceptable if you want to start with nothing selected"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when a new complete selection has been made"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the user can't select dates but can navigate"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"initial-display","initial-display",2001098064),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.date_like_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"set the months shown when no model is selected, defaults to the current month"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"selectable-fn","selectable-fn",-1997365738),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"function",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called on each date, if it returns false, that date is not selectable"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-today?","show-today?",513056415),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, todays date is highlighted"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.date_like_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"no selection before this date"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"maximum","maximum",573880714),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"satisfies DateTimeProtocol | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.date_like_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"no selection after this date"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"check-interval?","check-interval?",-757504003),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user cannot select ranges which contain disabled days. If false, ranges spanning deselected or disabled dates are valid"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"start-of-week","start-of-week",-1590603824),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(1),new cljs.core.Keyword(null,"type","type",1174270348),"int",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.int_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"choose left most column of the table, 1 = monday ... 7 = sunday"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-weeks?","show-weeks?",-1563135221),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, week numbers are shown to the left"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, the border is not displayed"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"i18n","i18n",-563422499),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.map_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"internationalization map with optional keys :days and :months (both vectors of strings)"], null),re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.daterange.daterange_parts),re_com.args.src,re_com.args.debug_as], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(re_com.theme.args_desc,re_com.part.describe_args(re_com.daterange.part_structure))):null);
/**
 * Tracks the external model, but takes inputs into an internal model. The given on-change function is only called after a full selection has been made
 */
re_com.daterange.daterange = (function re_com$daterange$daterange(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18007 = arguments.length;
var i__5877__auto___18008 = (0);
while(true){
if((i__5877__auto___18008 < len__5876__auto___18007)){
args__5882__auto__.push((arguments[i__5877__auto___18008]));

var G__18009 = (i__5877__auto___18008 + (1));
i__5877__auto___18008 = G__18009;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.daterange.daterange.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.daterange.daterange.cljs$core$IFn$_invoke$arity$variadic = (function (p__17917){
var map__17918 = p__17917;
var map__17918__$1 = cljs.core.__destructure_map(map__17918);
var args = map__17918__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17918__$1,new cljs.core.Keyword(null,"model","model",331153215));
var initial_display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17918__$1,new cljs.core.Keyword(null,"initial-display","initial-display",2001098064));
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17918__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17918__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.daterange.daterange_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var composed_theme = re_com.theme.comp(pre_theme,theme);
var current_month = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto____$1 = re_com.util.deref_or_value(initial_display);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var or__5142__auto____$2 = new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model));
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return re_com.util.now__GT_utc();
}
}
})());
var fsm = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("pick-start");
var start_date = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model)));
var end_date = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model)));
var temp_end = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto____$1 = cljs.core.deref(end_date);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return re_com.util.now__GT_utc();
}
})());
return (function() { 
var re_com$daterange$render_fn__delegate = function (p__17919){
var map__17920 = p__17919;
var map__17920__$1 = cljs.core.__destructure_map(map__17920);
var args__$1 = map__17920__$1;
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17920__$1,new cljs.core.Keyword(null,"model","model",331153215));
var hide_border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17920__$1,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922));
var i18n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17920__$1,new cljs.core.Keyword(null,"i18n","i18n",-563422499));
var or__5142__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.daterange.daterange_args_desc),args__$1));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var latest_external_model = re_com.util.deref_or_value(model__$1);
var internal_model_refernce = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.deref(start_date),new cljs.core.Keyword(null,"end","end",-268185958),cljs.core.deref(end_date)], null);
var _ = ((((re_com.daterange.model_changed_QMARK_(latest_external_model,internal_model_refernce)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(fsm),"pick-start"))))?(function (){
cljs.core.reset_BANG_(start_date,new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(latest_external_model));

return cljs.core.reset_BANG_(end_date,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(latest_external_model));
})()
:null);
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.daterange.part_structure,args__$1);
var re_com_ctx = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),re_com.util.deref_or_value(hide_border_QMARK_)], null)], null);
return part(new cljs.core.Keyword("re-com.daterange","wrapper","re-com.daterange/wrapper",608268148),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),composed_theme,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(args__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.Keyword(null,"debug-as","debug-as",283322354)], null)),new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (p1__17915_SHARP_){
var or__5142__auto____$2 = p1__17915_SHARP_;
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})),args__$1),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.daterange","border","re-com.daterange/border",2077600195),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.border,new cljs.core.Keyword(null,"theme","theme",-1247880880),composed_theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"child","child",623967545),part(new cljs.core.Keyword("re-com.daterange","container","re-com.daterange/container",42714909),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),composed_theme,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.select_keys(args__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"position","position",-2011731912),"static"], null)], 0)),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.daterange","left-panel","re-com.daterange/left-panel",1672771633),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),composed_theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.daterange.prev_nav(current_month,part,composed_theme,re_com_ctx,i18n),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.daterange.create_table,cljs.core.deref(current_month),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fsm,start_date,end_date,temp_end], null),part,composed_theme,re_com_ctx,new cljs.core.Keyword(null,"left","left",-399115937),args__$1], null)], null)], null)], null)),part(new cljs.core.Keyword("re-com.daterange","right-panel","re-com.daterange/right-panel",125563839),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.v_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),composed_theme,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.daterange.next_nav(current_month,part,composed_theme,re_com_ctx,i18n),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.daterange.create_table,re_com.daterange.plus_month(cljs.core.deref(current_month)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [fsm,start_date,end_date,temp_end], null),part,composed_theme,re_com_ctx,new cljs.core.Keyword(null,"right","right",-452581833),args__$1], null)], null)], null)], null))], null)], null)], null))], null)], null))], null)], null)], null));
}
};
var re_com$daterange$render_fn = function (var_args){
var p__17919 = null;
if (arguments.length > 0) {
var G__18013__i = 0, G__18013__a = new Array(arguments.length -  0);
while (G__18013__i < G__18013__a.length) {G__18013__a[G__18013__i] = arguments[G__18013__i + 0]; ++G__18013__i;}
  p__17919 = new cljs.core.IndexedSeq(G__18013__a,0,null);
} 
return re_com$daterange$render_fn__delegate.call(this,p__17919);};
re_com$daterange$render_fn.cljs$lang$maxFixedArity = 0;
re_com$daterange$render_fn.cljs$lang$applyTo = (function (arglist__18015){
var p__17919 = cljs.core.seq(arglist__18015);
return re_com$daterange$render_fn__delegate(p__17919);
});
re_com$daterange$render_fn.cljs$core$IFn$_invoke$arity$variadic = re_com$daterange$render_fn__delegate;
return re_com$daterange$render_fn;
})()
;
}
}));

(re_com.daterange.daterange.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.daterange.daterange.cljs$lang$applyTo = (function (seq17916){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17916));
}));

/**
 * Provide clickable field with current date label and dropdown button e.g. [ 2014 Sep 17 | # ]
 */
re_com.daterange.anchor_button = (function re_com$daterange$anchor_button(model,format,goog_QMARK_,placeholder){
var format_str = (function (){var or__5142__auto__ = format;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "dd MMM, yyyy";
}
})();
if((!(re_com.validate.date_like_QMARK_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model)))))){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#bbb"], null),new cljs.core.Keyword(null,"child","child",623967545),(function (){var or__5142__auto__ = placeholder;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return "";
}
})()], null);
} else {
if(cljs.core.truth_(goog_QMARK_)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new goog.i18n.DateTimeFormat(((cljs.core.seq(format))?format:format_str))).format(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model))))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new goog.i18n.DateTimeFormat(((cljs.core.seq(format))?format:format_str))).format(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model)))));
} else {
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(format_str),re_com.util.deref_or_value(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model)))))+" - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_time.format.unparse(cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(format_str),re_com.util.deref_or_value(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(model))))));

}
}
});
re_com.daterange.daterange_dropdown_args_desc = ((re_com.config.include_args_desc_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(re_com.daterange.daterange_args_desc,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"dd MMM, yyyy",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"[daterange-dropdown only] a representation of a date format. See cljs_time.format"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"goog?","goog?",316370704),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[daterange only] use ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"goog.i18n.DateTimeFormat"], null)," instead of ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"cljs_time.format"], null)," for applying ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":format"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"[daterange-dropdown only] when an anchor is in a scrolling region (e.g. scroller component), the popover can sometimes be clipped. When this parameter is true (which is the default), re-com will use a different CSS method to show the popover. This method is slightly inferior because the popover can't track the anchor if it is repositioned"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"[daterange-dropdown only] placeholder text for when a date is not selected."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"[daterange-dropdown only] a CSS width style"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"description","description",-1428560544),"[daterange-dropdown only] px horizontal offset of the popup"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"body-footer","body-footer",17455137),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"part",new cljs.core.Keyword(null,"description","description",-1428560544),"[daterange-dropdown only] extra part added to the bottom of the dropdown"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"description","description",-1428560544),"[daterange-dropdown only] px horizontal offset of the popup"], null)], 0)):null);
re_com.daterange.daterange_dropdown = (function re_com$daterange$daterange_dropdown(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18018 = arguments.length;
var i__5877__auto___18019 = (0);
while(true){
if((i__5877__auto___18019 < len__5876__auto___18018)){
args__5882__auto__.push((arguments[i__5877__auto___18019]));

var G__18020 = (i__5877__auto___18019 + (1));
i__5877__auto___18019 = G__18020;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.daterange.daterange_dropdown.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.daterange.daterange_dropdown.cljs$core$IFn$_invoke$arity$variadic = (function (p__17928){
var map__17929 = p__17928;
var map__17929__$1 = cljs.core.__destructure_map(map__17929);
var args = map__17929__$1;
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17929__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17929__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.daterange.daterange_dropdown_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var shown_QMARK_ = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var composed_theme = re_com.theme.comp(pre_theme,theme);
return (function() { 
var re_com$daterange$render_fn__delegate = function (p__17930){
var map__17931 = p__17930;
var map__17931__$1 = cljs.core.__destructure_map(map__17931);
var passthrough_args = map__17931__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"model","model",331153215));
var anchor_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"anchor-height","anchor-height",589311520));
var body_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"body-header","body-header",979543073));
var body_footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"body-footer","body-footer",17455137));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var anchor_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"anchor-width","anchor-width",1699191652));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var goog_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17931__$1,new cljs.core.Keyword(null,"goog?","goog?",316370704));
var or__5142__auto____$1 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.daterange.daterange_dropdown_args_desc),passthrough_args));
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var collapse_on_select = (function (new_model){
cljs.core.reset_BANG_(shown_QMARK_,false);

if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_model) : on_change.call(null,new_model));
} else {
return null;
}
});
var passthrough_args__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(passthrough_args,new cljs.core.Keyword(null,"format","format",-1306924766),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"goog?","goog?",316370704),new cljs.core.Keyword(null,"no-clip?","no-clip?",-188884951),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position-offset","position-offset",1257061411),new cljs.core.Keyword(null,"anchor-width","anchor-width",1699191652),new cljs.core.Keyword(null,"anchor-height","anchor-height",589311520),new cljs.core.Keyword(null,"body-header","body-header",979543073),new cljs.core.Keyword(null,"body-width","body-width",-568519096),new cljs.core.Keyword(null,"body-footer","body-footer",17455137)], 0)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),collapse_on_select),new cljs.core.Keyword(null,"src","src",-1651076051),(((!(goog.DEBUG)))?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),"re_com/daterange.cljs",new cljs.core.Keyword(null,"line","line",212345235),540], null))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),true], null)], 0));
return new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.dropdown.dropdown,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-daterange-dropdown-wrapper",new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,shown_QMARK_),new cljs.core.Keyword(null,"model","model",331153215),shown_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.daterange.anchor_button,model,format,goog_QMARK_,placeholder], null),new cljs.core.Keyword(null,"indicator","indicator",1928219637),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.zmdi.zmdi-apps","i.zmdi.zmdi-apps",-641069407),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"18px"], null)], null)], null),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"theme","theme",-1247880880),composed_theme,new cljs.core.Keyword(null,"anchor-width","anchor-width",1699191652),anchor_width,new cljs.core.Keyword(null,"anchor-height","anchor-height",589311520),anchor_height,new cljs.core.Keyword(null,"body-header","body-header",979543073),body_header,new cljs.core.Keyword(null,"body-width","body-width",-568519096),"520px",new cljs.core.Keyword(null,"body-footer","body-footer",17455137),body_footer,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.daterange.daterange,passthrough_args__$1], null)], null);
}
};
var re_com$daterange$render_fn = function (var_args){
var p__17930 = null;
if (arguments.length > 0) {
var G__18021__i = 0, G__18021__a = new Array(arguments.length -  0);
while (G__18021__i < G__18021__a.length) {G__18021__a[G__18021__i] = arguments[G__18021__i + 0]; ++G__18021__i;}
  p__17930 = new cljs.core.IndexedSeq(G__18021__a,0,null);
} 
return re_com$daterange$render_fn__delegate.call(this,p__17930);};
re_com$daterange$render_fn.cljs$lang$maxFixedArity = 0;
re_com$daterange$render_fn.cljs$lang$applyTo = (function (arglist__18022){
var p__17930 = cljs.core.seq(arglist__18022);
return re_com$daterange$render_fn__delegate(p__17930);
});
re_com$daterange$render_fn.cljs$core$IFn$_invoke$arity$variadic = re_com$daterange$render_fn__delegate;
return re_com$daterange$render_fn;
})()
;
}
}));

(re_com.daterange.daterange_dropdown.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.daterange.daterange_dropdown.cljs$lang$applyTo = (function (seq17923){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17923));
}));


//# sourceMappingURL=re_com.daterange.js.map
