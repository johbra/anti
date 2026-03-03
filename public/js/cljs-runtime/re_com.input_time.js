goog.provide('re_com.input_time');
re_com.input_time.time__GT_mins = (function re_com$input_time$time__GT_mins(time){
return cljs.core.rem(time,(100));
});
re_com.input_time.time__GT_hrs = (function re_com$input_time$time__GT_hrs(time){
return cljs.core.quot(time,(100));
});
/**
 * Parse the string 's' to a valid int. On parse failure, return 0
 */
re_com.input_time.to_int = (function re_com$input_time$to_int(s){
var val = parseInt(s);
if(cljs.core.truth_(isNaN(val))){
return (0);
} else {
return val;
}
});
/**
 * Return a time integer from a triple int vector of form  [H  _  M]
 */
re_com.input_time.triple__GT_time = (function re_com$input_time$triple__GT_time(p__17841){
var vec__17842 = p__17841;
var hr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17842,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17842,(1),null);
var mi = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17842,(2),null);
return ((hr * (100)) + mi);
});
re_com.input_time.triple_seeking_re = /^(\d{0,2})()()$|^(\d{0,1})(:{0,1})(\d{0,2})$|^(\d{0,2})(:{0,1})(\d{0,2})$/;
re_com.input_time.extract_triple_from_text = (function re_com$input_time$extract_triple_from_text(text){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),cljs.core.rest(cljs.core.re_matches(re_com.input_time.triple_seeking_re,text)));
});
/**
 * return as a time int, the contents of 'text'
 */
re_com.input_time.text__GT_time = (function re_com$input_time$text__GT_time(text){
return re_com.input_time.triple__GT_time(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.input_time.to_int,re_com.input_time.extract_triple_from_text(text)));
});
/**
 * return a string of format HH:MM for 'time'
 */
re_com.input_time.time__GT_text = (function re_com$input_time$time__GT_text(time){
var hrs = re_com.input_time.time__GT_hrs(time);
var mins = re_com.input_time.time__GT_mins(time);
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util.pad_zero_number(hrs,(2)))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(re_com.util.pad_zero_number(mins,(2))));
});
/**
 * Return true if text passes basic time validation.
 * Can't do to much validation because user input might not be finished.
 * Why?  On the way to entering 6:30, you must pass through the invalid state of '63'.
 * So we only really check against the triple-extracting regular expression
 */
re_com.input_time.valid_text_QMARK_ = (function re_com$input_time$valid_text_QMARK_(text){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((3),cljs.core.count(re_com.input_time.extract_triple_from_text(text)));
});
re_com.input_time.valid_time_QMARK_ = (function re_com$input_time$valid_time_QMARK_(time){
if((time == null)){
return false;
} else {
if(((0) > time)){
return false;
} else {
if(((60) < re_com.input_time.time__GT_mins(time))){
return false;
} else {
return true;

}
}
}
});
re_com.input_time.validate_arg_times = (function re_com$input_time$validate_arg_times(model,minimum,maximum,args){
var temp__5823__auto__ = (((!(((typeof model === 'number') && (re_com.input_time.valid_time_QMARK_(model))))))?(""+"[input-time] given an invalid :model - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(model)):(((!(((typeof minimum === 'number') && (re_com.input_time.valid_time_QMARK_(minimum))))))?(""+"[input-time] given an invalid :minimum - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(minimum)):(((!(((typeof maximum === 'number') && (re_com.input_time.valid_time_QMARK_(maximum))))))?(""+"[input-time] given an invalid :maximum - "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(maximum)):(((!((minimum <= maximum))))?(""+"[input-time] :minimum "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(minimum)+" > :maximum  "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(maximum)):null
))));
if(cljs.core.truth_(temp__5823__auto__)){
var message = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.debug.validate_args_error,new cljs.core.Keyword(null,"component","component",1555936782),"input-time",new cljs.core.Keyword(null,"args","args",1315556576),args,new cljs.core.Keyword(null,"problems","problems",2097327077),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"problem","problem",1168155148),new cljs.core.Keyword(null,"validate-fn-map","validate-fn-map",-759001917),new cljs.core.Keyword(null,"validate-fn-result","validate-fn-result",280916497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null)], null)], null)], null);
} else {
return null;
}
});
/**
 * Validate the time supplied.
 * Return either the time or, if it is invalid, return something valid
 */
re_com.input_time.force_valid_time = (function re_com$input_time$force_valid_time(time,min,max,previous){
if((time == null)){
return previous;
} else {
if((!(re_com.input_time.valid_time_QMARK_(time)))){
return previous;
} else {
if((time < min)){
return min;
} else {
if((max < time)){
return max;
} else {
return time;

}
}
}
}
});
/**
 * Called each time the <input> field gets a keypress, or paste operation.
 * Rests  the text-model only if the new text is valid
 */
re_com.input_time.on_new_keypress = (function re_com$input_time$on_new_keypress(event,text_model){
var current_text = event.target.value;
if(re_com.input_time.valid_text_QMARK_(current_text)){
return cljs.core.reset_BANG_(text_model,current_text);
} else {
return null;
}
});
/**
 * When Enter is pressed, force the component to lose focus
 */
re_com.input_time.lose_focus_if_enter = (function re_com$input_time$lose_focus_if_enter(ev){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev.key,"Enter")){
ev.target.blur();

return true;
} else {
return null;
}
});
/**
 * Called when the field looses focus.
 * Re-validate what has been entered, comparing to mins and maxs.
 * Invoke the callback as necessary
 */
re_com.input_time.on_defocus = (function re_com$input_time$on_defocus(text_model,min,max,callback,previous_val){
var time = re_com.input_time.text__GT_time(cljs.core.deref(text_model));
var time__$1 = re_com.input_time.force_valid_time(time,min,max,previous_val);
cljs.core.reset_BANG_(text_model,re_com.input_time.time__GT_text(time__$1));

if(cljs.core.truth_((function (){var and__5140__auto__ = callback;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(time__$1,previous_val);
} else {
return and__5140__auto__;
}
})())){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(time__$1) : callback.call(null,time__$1));
} else {
return null;
}
});
re_com.input_time.part_structure = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.input-time","wrapper","re-com.input-time/wrapper",-1220110653),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.box","h-box","re-com.box/h-box",574665693,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Outer wrapper of the time input."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.input-time","time-entry","re-com.input-time/time-entry",1894959526),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"impl","impl",1677848700),"empty",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"legacy","legacy",1434943289),new cljs.core.Keyword(null,"notes","notes",-1039600523),"The actual input field."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.input-time","icon-container","re-com.input-time/icon-container",-198559911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.Keyword(null,"notes","notes",-1039600523),"The time icon container."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.input-time","icon","re-com.input-time/icon",-650694074),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.Keyword(null,"notes","notes",-1039600523),"The time icon."], null)], null)], null)], null);
re_com.input_time.input_time_parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.input_time.part_structure):null);
re_com.input_time.input_time_parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.input_time.input_time_parts_desc)):null);
re_com.input_time.input_time_args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer | string | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"a time in integer form. e.g. '09:30am' is 930"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"integer -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"called when user entry completes and value is new. Passed new value as integer"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(0),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"user can't enter a time less than this value"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"maximum","maximum",573880714),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(2359),new cljs.core.Keyword(null,"type","type",1174270348),"integer | string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.number_or_string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"user can't enter a time more than this value"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | r/atom",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, user input is disabled"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, a clock icon will be displayed to the right of input field"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),"when true, input filed is displayed without a border"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for width of the input box (excluding the icon if present)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting"], null),re_com.args.pre,re_com.args.theme,re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.input_time.input_time_parts),re_com.args.src,re_com.args.debug_as], null):null);
/**
 * I return the markup for an input box which will accept and validate times.
 * Parameters - refer input-time-args above
 */
re_com.input_time.input_time = (function re_com$input_time$input_time(var_args){
var args__5882__auto__ = [];
var len__5876__auto___18032 = arguments.length;
var i__5877__auto___18033 = (0);
while(true){
if((i__5877__auto___18033 < len__5876__auto___18032)){
args__5882__auto__.push((arguments[i__5877__auto___18033]));

var G__18034 = (i__5877__auto___18033 + (1));
i__5877__auto___18033 = G__18034;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.input_time.input_time.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.input_time.input_time.cljs$core$IFn$_invoke$arity$variadic = (function (p__17957){
var map__17958 = p__17957;
var map__17958__$1 = cljs.core.__destructure_map(map__17958);
var args = map__17958__$1;
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17958__$1,new cljs.core.Keyword(null,"model","model",331153215));
var minimum = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17958__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(0));
var maximum = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17958__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714),(2359));
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17958__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17958__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.input_time.input_time_args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var or__5142__auto____$1 = re_com.input_time.validate_arg_times(re_com.util.deref_or_value(model),minimum,maximum,args);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
var deref_model = re_com.util.deref_or_value(model);
var text_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.input_time.time__GT_text(deref_model));
var previous_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(deref_model);
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var re_com$input_time$input_time_render__delegate = function (p__17961){
var map__17962 = p__17961;
var map__17962__$1 = cljs.core.__destructure_map(map__17962);
var args__$1 = map__17962__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962__$1,new cljs.core.Keyword(null,"model","model",331153215));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var hide_border_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962__$1,new cljs.core.Keyword(null,"hide-border?","hide-border?",1792698922));
var maximum__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17962__$1,new cljs.core.Keyword(null,"maximum","maximum",573880714),(2359));
var parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var src = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var debug_as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962__$1,new cljs.core.Keyword(null,"debug-as","debug-as",283322354));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var show_icon_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17962__$1,new cljs.core.Keyword(null,"show-icon?","show-icon?",-756836459));
var minimum__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__17962__$1,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),(0));
var or__5142__auto____$2 = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.input_time.input_time_args_desc),args__$1));
if(cljs.core.truth_(or__5142__auto____$2)){
return or__5142__auto____$2;
} else {
var or__5142__auto____$3 = re_com.input_time.validate_arg_times(re_com.util.deref_or_value(model__$1),minimum__$1,maximum__$1,args__$1);
if(cljs.core.truth_(or__5142__auto____$3)){
return or__5142__auto____$3;
} else {
var new_val = re_com.util.deref_or_value(model__$1);
var new_val__$1 = (((new_val < minimum__$1))?minimum__$1:new_val);
var new_val__$2 = (((new_val__$1 > maximum__$1))?maximum__$1:new_val__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(previous_model),new_val__$2)){
cljs.core.reset_BANG_(text_model,re_com.input_time.time__GT_text(new_val__$2));

cljs.core.reset_BANG_(previous_model,new_val__$2);
} else {
}

var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.input_time.part_structure,args__$1);
var disabled_QMARK___$1 = re_com.util.deref_or_value(disabled_QMARK_);
var re_com_ctx = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),(cljs.core.truth_(show_icon_QMARK_)?new cljs.core.Keyword(null,"visible","visible",-1024216805):new cljs.core.Keyword(null,"hidden","hidden",-312506092)),new cljs.core.Keyword(null,"border","border",1444987323),(cljs.core.truth_(hide_border_QMARK_)?new cljs.core.Keyword(null,"hidden","hidden",-312506092):new cljs.core.Keyword(null,"visible","visible",-1024216805)),new cljs.core.Keyword(null,"input-state","input-state",-2018653626),(cljs.core.truth_(disabled_QMARK___$1)?new cljs.core.Keyword(null,"disabled","disabled",-1529784218):new cljs.core.Keyword(null,"enabled","enabled",1195909756))], null)], null);
return part(new cljs.core.Keyword("re-com.input-time","wrapper","re-com.input-time/wrapper",-1220110653),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.box.h_box,new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),re_com.debug.instrument((function (){var G__17965 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.truth_(height)){
return re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(G__17965,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),height], null)], 0));
} else {
return G__17965;
}
})(),args__$1),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"debug-as","debug-as",283322354),(function (){var or__5142__auto____$4 = debug_as;
if(cljs.core.truth_(or__5142__auto____$4)){
return or__5142__auto____$4;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),re_com.debug.short_component_name(reagent.impl.component.component_name(reagent.core.current_component())),new cljs.core.Keyword(null,"args","args",1315556576),args__$1], null);
}
})(),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.input-time","time-entry","re-com.input-time/time-entry",1894959526),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(text_model),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (event){
re_com.input_time.on_new_keypress(event,text_model);

return null;
}),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (event){
re_com.input_time.on_defocus(text_model,minimum__$1,maximum__$1,on_change,cljs.core.deref(previous_model));

return null;
}),new cljs.core.Keyword(null,"on-key-up","on-key-up",884441808),(function (event){
re_com.input_time.lose_focus_if_enter(event);

return null;
})], null)], null),new cljs.core.Keyword(null,"post-props","post-props",1836150684),(function (){var G__18012 = cljs.core.PersistentArrayMap.EMPTY;
var G__18012__$1 = (cljs.core.truth_(width)?re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(G__18012,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null)], 0)):G__18012);
var G__18012__$2 = (cljs.core.truth_(class$)?re_com.theme.util.class$.cljs$core$IFn$_invoke$arity$variadic(G__18012__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([class$], 0)):G__18012__$1);
var G__18012__$3 = (cljs.core.truth_(style)?re_com.theme.util.style.cljs$core$IFn$_invoke$arity$variadic(G__18012__$2,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)):G__18012__$2);
if(cljs.core.truth_(attr)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__18012__$3,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.merge,attr);
} else {
return G__18012__$3;
}
})()], null)),(cljs.core.truth_(show_icon_QMARK_)?part(new cljs.core.Keyword("re-com.input-time","icon-container","re-com.input-time/icon-container",-198559911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.input-time","icon","re-com.input-time/icon",-650694074),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),re_com_ctx], null)], null))], null)], null)], null)):null)], null)], null)], null));
}
}
};
var re_com$input_time$input_time_render = function (var_args){
var p__17961 = null;
if (arguments.length > 0) {
var G__18037__i = 0, G__18037__a = new Array(arguments.length -  0);
while (G__18037__i < G__18037__a.length) {G__18037__a[G__18037__i] = arguments[G__18037__i + 0]; ++G__18037__i;}
  p__17961 = new cljs.core.IndexedSeq(G__18037__a,0,null);
} 
return re_com$input_time$input_time_render__delegate.call(this,p__17961);};
re_com$input_time$input_time_render.cljs$lang$maxFixedArity = 0;
re_com$input_time$input_time_render.cljs$lang$applyTo = (function (arglist__18038){
var p__17961 = cljs.core.seq(arglist__18038);
return re_com$input_time$input_time_render__delegate(p__17961);
});
re_com$input_time$input_time_render.cljs$core$IFn$_invoke$arity$variadic = re_com$input_time$input_time_render__delegate;
return re_com$input_time$input_time_render;
})()
;
}
}
}));

(re_com.input_time.input_time.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.input_time.input_time.cljs$lang$applyTo = (function (seq17953){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17953));
}));


//# sourceMappingURL=re_com.input_time.js.map
