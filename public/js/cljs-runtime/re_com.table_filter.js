goog.provide('re_com.table_filter');
/**
 * Generates a unique ID string for filter and group nodes.
 */
re_com.table_filter.generate_id = (function re_com$table_filter$generate_id(){
return (""+"item-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
});
re_com.table_filter.number_regex = /^-?\d+(?:\.\d+)?$/;
/**
 * True if `s` is a plain numeric string.
 */
re_com.table_filter.valid_number_QMARK_ = (function re_com$table_filter$valid_number_QMARK_(s){
return cljs.core.boolean$(cljs.core.re_matches(re_com.table_filter.number_regex,(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))));
});
/**
 * True if `d` is a non-nil value (datepickers handle validation).
 */
re_com.table_filter.valid_date_QMARK_ = (function re_com$table_filter$valid_date_QMARK_(d){
return (!((d == null)));
});
/**
 * Recursively add unique IDs to all filter/group nodes.
 * Converts external (ID-less) format to internal (ID-full) format.
 */
re_com.table_filter.add_ids = (function re_com$table_filter$add_ids(node){
if((node == null)){
return null;
} else {
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(node);
if(and__5140__auto__){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
} else {
return and__5140__auto__;
}
})())){
var node_with_id = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"id","id",-1388402092),(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid())));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"group","group",582596132))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(node_with_id,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__18798_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(re_com.table_filter.add_ids,p1__18798_SHARP_);
}));
} else {
return node_with_id;
}
} else {
return node;

}
}
});
/**
 * Recursively remove all :id keys from the model.
 * Converts internal (ID-full) format to external (ID-less) format.
 */
re_com.table_filter.remove_ids = (function re_com$table_filter$remove_ids(node){
if((node == null)){
return null;
} else {
if(cljs.core.map_QMARK_(node)){
var cleaned = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"group","group",582596132))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cleaned,new cljs.core.Keyword(null,"children","children",-940561982),(function (p1__18800_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(re_com.table_filter.remove_ids,p1__18800_SHARP_);
}));
} else {
return cleaned;
}
} else {
return node;

}
}
});
/**
 * Validates table-spec as vector of column definition maps
 */
re_com.table_filter.table_spec_QMARK_ = (function re_com$table_filter$table_spec_QMARK_(table_spec){
return ((cljs.core.vector_QMARK_(table_spec)) && (((cljs.core.seq(table_spec)) && (cljs.core.every_QMARK_((function (p1__18804_SHARP_){
return ((cljs.core.map_QMARK_(p1__18804_SHARP_)) && ((((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__18804_SHARP_) instanceof cljs.core.Keyword)) && (((typeof new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__18804_SHARP_) === 'string') && ((((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__18804_SHARP_) instanceof cljs.core.Keyword)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"date","date",-1463434462),null,new cljs.core.Keyword(null,"number","number",1570378438),null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),null,new cljs.core.Keyword(null,"select","select",1147833503),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__18804_SHARP_))))))))));
}),table_spec)))));
});
/**
 * Validates a single filter node (external format - no ID required)
 */
re_com.table_filter.filter_node_QMARK_ = (function re_com$table_filter$filter_node_QMARK_(node){
return ((cljs.core.map_QMARK_(node)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))) && ((((((new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(node) == null)) || ((new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(node) instanceof cljs.core.Keyword)))) && ((((new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node) == null)) || ((new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(node) instanceof cljs.core.Keyword)))))))));
});
/**
 * Validates a single group node (external format - no ID required)
 */
re_com.table_filter.group_node_QMARK_ = (function re_com$table_filter$group_node_QMARK_(node){
return ((cljs.core.map_QMARK_(node)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node))) && (((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"or","or",235744169),null,new cljs.core.Keyword(null,"and","and",-971899817),null], null), null),new cljs.core.Keyword(null,"logic","logic",564698810).cljs$core$IFn$_invoke$arity$1(node))) && (cljs.core.vector_QMARK_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))))))));
});
/**
 * Validates the hierarchical filter model structure
 */
re_com.table_filter.model_QMARK_ = (function re_com$table_filter$model_QMARK_(val){
var or__5142__auto__ = (val == null);
if(or__5142__auto__){
return or__5142__auto__;
} else {
var and__5140__auto__ = cljs.core.map_QMARK_(val);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group","group",582596132),null,new cljs.core.Keyword(null,"filter","filter",-948537934),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(val));
if(and__5140__auto____$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(val))){
return re_com.table_filter.filter_node_QMARK_(val);
} else {
return ((re_com.table_filter.group_node_QMARK_(val)) && (cljs.core.every_QMARK_(re_com.table_filter.model_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(val))));
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
}
});
re_com.table_filter.ops_by_type = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"not-equals","not-equals",-170392873),new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"not-contains","not-contains",-2047067744),new cljs.core.Keyword(null,"starts-with","starts-with",366503009),new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"not-empty","not-empty",388922063)], null),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"not-equals","not-equals",-170392873),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"not-empty","not-empty",388922063)], null),new cljs.core.Keyword(null,"date","date",-1463434462),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"not-on","not-on",-1378335318),new cljs.core.Keyword(null,"on-or-before","on-or-before",1255302003),new cljs.core.Keyword(null,"on-or-after","on-or-after",96024643),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"not-between","not-between",-979594021),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"not-empty","not-empty",388922063)], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is","is",369128998),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"not-empty","not-empty",388922063)], null),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is","is",369128998),new cljs.core.Keyword(null,"is-not","is-not",-677962855),new cljs.core.Keyword(null,"is-any-of","is-any-of",-1110639385),new cljs.core.Keyword(null,"is-none-of","is-none-of",1843075750),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"not-empty","not-empty",388922063)], null)], null);
re_com.table_filter.op_label = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"not-contains","not-contains",-2047067744),new cljs.core.Keyword(null,"starts-with","starts-with",366503009),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"on-or-after","on-or-after",96024643),new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"is","is",369128998),new cljs.core.Keyword(null,"is-none-of","is-none-of",1843075750),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"contains-text","contains-text",-621094938),new cljs.core.Keyword(null,"is-any-of","is-any-of",-1110639385),new cljs.core.Keyword(null,"not-on","not-on",-1378335318),new cljs.core.Keyword(null,"between","between",1131099276),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Keyword(null,"not-empty","not-empty",388922063),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.Keyword(null,"not-contains-text","not-contains-text",-706721069),new cljs.core.Keyword(null,"on-or-before","on-or-before",1255302003),new cljs.core.Keyword(null,"not-equals","not-equals",-170392873),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.Keyword(null,"is-not","is-not",-677962855),new cljs.core.Keyword(null,"not-between","not-between",-979594021),new cljs.core.Keyword(null,"before","before",-1633692388),new cljs.core.Keyword(null,"ends-with","ends-with",-456791011),new cljs.core.Keyword(null,"<","<",-646864291)],["does not contain","starts with","<=","on/after","contains","is","is none of",">","contains text","is any of","not on","between","is","is empty",">=","is not empty","after","not contains text","on/before","is not","on","is not","not between","before","ends with","<"]);
re_com.table_filter.sample_table_spec = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177),"Name",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"age","age",-604307804),new cljs.core.Keyword(null,"name","name",1843675177),"Age",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"name","name",1843675177),"Email",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"salary","salary",1283904063),new cljs.core.Keyword(null,"name","name",1843675177),"Salary",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"number","number",1570378438)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"department","department",-359157087),new cljs.core.Keyword(null,"name","name",1843675177),"Department",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"engineering",new cljs.core.Keyword(null,"label","label",1718410804),"Engineering"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"marketing",new cljs.core.Keyword(null,"label","label",1718410804),"Marketing"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"sales",new cljs.core.Keyword(null,"label","label",1718410804),"Sales"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"name","name",1843675177),"Active",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"hire-date","hire-date",-1360996117),new cljs.core.Keyword(null,"name","name",1843675177),"Hire Date",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"date","date",-1463434462)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"skills","skills",958701426),new cljs.core.Keyword(null,"name","name",1843675177),"Skills",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"clojure",new cljs.core.Keyword(null,"label","label",1718410804),"Clojure"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"javascript",new cljs.core.Keyword(null,"label","label",1718410804),"JavaScript"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"python",new cljs.core.Keyword(null,"label","label",1718410804),"Python"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"java",new cljs.core.Keyword(null,"label","label",1718410804),"Java"], null)], null)], null)], null);
re_com.table_filter.part_structure = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","group","re-com.table-filter/group",-1466475490),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","v-box","re-com.core/v-box",-1193804420,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Container for a filter group."], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","filter","re-com.table-filter/filter",1234670516),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","h-box","re-com.core/h-box",-920824865,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Container for individual filter condition row."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","column-dropdown","re-com.table-filter/column-dropdown",1280689853),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","dropdown","re-com.core/dropdown",-664860902,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Dropdown for selecting table columns."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","operator-dropdown","re-com.table-filter/operator-dropdown",-1847831610),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","dropdown","re-com.core/dropdown",-664860902,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Dropdown for selecting filter operators."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","text-input","re-com.table-filter/text-input",237085339),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","input-text","re-com.core/input-text",-2052444569,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Text input field for text and number values."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","date-input","re-com.table-filter/date-input",-1650099148),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","datepicker","re-com.core/datepicker",171663131,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Date picker for single date values."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","daterange-input","re-com.table-filter/daterange-input",-1947022156),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","daterange","re-com.core/daterange",938716650,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Date range picker for between/not-between operations."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","dropdown-input","re-com.table-filter/dropdown-input",-1459881622),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","dropdown","re-com.core/dropdown",-664860902,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"Dropdown for boolean and single-select values."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","tag-dropdown-input","re-com.table-filter/tag-dropdown-input",682522264),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","tag-dropdown","re-com.core/tag-dropdown",225366584,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Tag-dropdown for selecting multiple values. ","Due to unfinished implementation of tag-dropdown, ","does not accept :class or :attr"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","add-button","re-com.table-filter/add-button",-1980668337),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","button","re-com.core/button",554842128,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"The '+ Add filter' button and dropdown menu."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","context-menu","re-com.table-filter/context-menu",1049702551),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","button","re-com.core/button",554842128,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"The '\u22EF' context menu button for groups and filters."], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","operator-button","re-com.table-filter/operator-button",1400565481),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","button","re-com.core/button",554842128,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"The AND/OR operator button when interactive (first in group)."], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","operator-text","re-com.table-filter/operator-text",477458624),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","label","re-com.core/label",1621981885,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"The AND/OR operator text when non-interactive (subsequent in group)."], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","where-label","re-com.table-filter/where-label",434467456),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","label","re-com.core/label",1621981885,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"The 'Where' label for first filter."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.table-filter","warning-icon","re-com.table-filter/warning-icon",577184957),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"impl","impl",1677848700),new cljs.core.Symbol("re-com.core","md-icon-button","re-com.core/md-icon-button",-1227026953,null),new cljs.core.Keyword(null,"notes","notes",-1039600523),"The warning icon shown for invalid filters."], null)], null)], null)], null):null);
re_com.table_filter.parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.table_filter.part_structure):null);
re_com.table_filter.parts = ((re_com.config.include_args_desc_QMARK_)?cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),re_com.table_filter.parts_desc)):null);
re_com.table_filter.args_desc = ((re_com.config.include_args_desc_QMARK_)?new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"table-spec","table-spec",-691012666),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.table_filter.table_spec_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Vector of column definition maps with :id, :name, :type keys. Example on the right"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"map | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.table_filter.model_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Hierarchical filter model with :type, :logic, and :children structure. The UI will always reflect what is in model. Should be updated by the on-change function to maintain proper data flow. If unsure, just pass an empty reagent atom."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"-> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Callback function called when user interacts with the filter component. Receives two arguments: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[model is-valid?]"], null)," where ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"model"], null)," is the updated filter structure and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"is-valid?"], null)," is a boolean indicating if all filters are complete and valid. Use this to update your application state."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"max-depth","max-depth",127060793),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(2),new cljs.core.Keyword(null,"type","type",1174270348),"int",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.int_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"Set the maximum amount of nesting possible. 0 is no nesting; user only allowed to add filters. 1 allows user to add filter groups, ect"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"If true, disables all filter interactions"], null),re_com.args.class$,re_com.args.style,re_com.args.attr,re_com.args.parts(re_com.table_filter.parts),re_com.args.src,re_com.args.debug_as], null):null);
/**
 * uses the information from the first row from the table spec
 * to create the initial empty filter with unique ID
 */
re_com.table_filter.empty_filter = (function re_com$table_filter$empty_filter(table_spec){
var first_col = cljs.core.first(table_spec);
var first_op = cljs.core.first((function (){var G__18905 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(first_col);
return (re_com.table_filter.ops_by_type.cljs$core$IFn$_invoke$arity$1 ? re_com.table_filter.ops_by_type.cljs$core$IFn$_invoke$arity$1(G__18905) : re_com.table_filter.ops_by_type.call(null,G__18905));
})());
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),re_com.table_filter.generate_id(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(first_col),new cljs.core.Keyword(null,"op","op",-1882987955),first_op,new cljs.core.Keyword(null,"val","val",128701612),null], null);
});
/**
 * creates a group with only the empty filter in it with unique ID
 */
re_com.table_filter.empty_group = (function re_com$table_filter$empty_group(table_spec){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),re_com.table_filter.generate_id(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"logic","logic",564698810),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.table_filter.empty_filter(table_spec)], null)], null);
});
/**
 * Create empty filter without IDs for external format
 */
re_com.table_filter.empty_filter_external = (function re_com$table_filter$empty_filter_external(table_spec){
var first_col = cljs.core.first(table_spec);
var first_op = cljs.core.first((function (){var G__18975 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(first_col);
return (re_com.table_filter.ops_by_type.cljs$core$IFn$_invoke$arity$1 ? re_com.table_filter.ops_by_type.cljs$core$IFn$_invoke$arity$1(G__18975) : re_com.table_filter.ops_by_type.call(null,G__18975));
})());
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"col","col",-1959363084),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(first_col),new cljs.core.Keyword(null,"op","op",-1882987955),first_op,new cljs.core.Keyword(null,"val","val",128701612),null], null);
});
/**
 * Create empty group without IDs for external format
 */
re_com.table_filter.empty_group_external = (function re_com$table_filter$empty_group_external(table_spec){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"logic","logic",564698810),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.table_filter.empty_filter_external(table_spec)], null)], null);
});
/**
 * Update an item by ID using postwalk - bottom-up tree transformation
 */
re_com.table_filter.update_item_by_id = (function re_com$table_filter$update_item_by_id(var_args){
var args__5882__auto__ = [];
var len__5876__auto___19455 = arguments.length;
var i__5877__auto___19456 = (0);
while(true){
if((i__5877__auto___19456 < len__5876__auto___19455)){
args__5882__auto__.push((arguments[i__5877__auto___19456]));

var G__19457 = (i__5877__auto___19456 + (1));
i__5877__auto___19456 = G__19457;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((3) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((3)),(0),null)):null);
return re_com.table_filter.update_item_by_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5883__auto__);
});

(re_com.table_filter.update_item_by_id.cljs$core$IFn$_invoke$arity$variadic = (function (tree,target_id,f,args){
return clojure.walk.postwalk((function (node){
if(((cljs.core.map_QMARK_(node)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(node),target_id)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,node,args);
} else {
return node;
}
}),tree);
}));

(re_com.table_filter.update_item_by_id.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(re_com.table_filter.update_item_by_id.cljs$lang$applyTo = (function (seq18979){
var G__18980 = cljs.core.first(seq18979);
var seq18979__$1 = cljs.core.next(seq18979);
var G__18981 = cljs.core.first(seq18979__$1);
var seq18979__$2 = cljs.core.next(seq18979__$1);
var G__18982 = cljs.core.first(seq18979__$2);
var seq18979__$3 = cljs.core.next(seq18979__$2);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18980,G__18981,G__18982,seq18979__$3);
}));

/**
 * Remove an item by ID using postwalk - bottom-up tree transformation
 */
re_com.table_filter.remove_item_by_id = (function re_com$table_filter$remove_item_by_id(tree,target_id){
return clojure.walk.postwalk((function (node){
if(cljs.core.truth_((function (){var and__5140__auto__ = cljs.core.map_QMARK_(node);
if(and__5140__auto__){
var and__5140__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node),new cljs.core.Keyword(null,"group","group",582596132));
if(and__5140__auto____$1){
return new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node);
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19026_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19026_SHARP_),target_id);
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node))));
} else {
return node;
}
}),tree);
});
/**
 * Add a new item to a group by the group's ID
 */
re_com.table_filter.add_child_to_group = (function re_com$table_filter$add_child_to_group(tree,group_id,new_item){
return re_com.table_filter.update_item_by_id(tree,group_id,(function (p1__19035_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__19035_SHARP_,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(p1__19035_SHARP_),new_item));
}));
});
/**
 * Finds the parent group that contains the item with target-id.
 *   Returns the parent group node or nil if not found.
 */
re_com.table_filter.find_parent_group = (function re_com$table_filter$find_parent_group(tree,target_id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(tree),new cljs.core.Keyword(null,"group","group",582596132))){
if(cljs.core.truth_(cljs.core.some((function (p1__19040_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19040_SHARP_),target_id);
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(tree)))){
return tree;
} else {
return cljs.core.some((function (p1__19041_SHARP_){
return (re_com.table_filter.find_parent_group.cljs$core$IFn$_invoke$arity$2 ? re_com.table_filter.find_parent_group.cljs$core$IFn$_invoke$arity$2(p1__19041_SHARP_,target_id) : re_com.table_filter.find_parent_group.call(null,p1__19041_SHARP_,target_id));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(tree));
}
} else {
return null;
}
});
/**
 * Duplicates an item by ID and adds the copy to the same parent group.
 *   Returns the updated tree with the duplicated item added.
 */
re_com.table_filter.duplicate_item_by_id = (function re_com$table_filter$duplicate_item_by_id(tree,target_id){
var temp__5823__auto__ = re_com.table_filter.find_parent_group(tree,target_id);
if(cljs.core.truth_(temp__5823__auto__)){
var parent = temp__5823__auto__;
var temp__5823__auto____$1 = cljs.core.some((function (p1__19042_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19042_SHARP_),target_id)){
return p1__19042_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(parent));
if(cljs.core.truth_(temp__5823__auto____$1)){
var item = temp__5823__auto____$1;
var new_item = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"id","id",-1388402092),re_com.table_filter.generate_id());
return re_com.table_filter.add_child_to_group(tree,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent),new_item);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Converts a filter node to a group node containing that filter.
 *   Used to enable nesting when adding subgroups to existing filters.
 */
re_com.table_filter.convert_filter_to_group = (function re_com$table_filter$convert_filter_to_group(tree,target_id){
return re_com.table_filter.update_item_by_id(tree,target_id,(function (item){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"filter","filter",-948537934))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),re_com.table_filter.generate_id(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"logic","logic",564698810),new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"id","id",-1388402092),re_com.table_filter.generate_id())], null)], null);
} else {
return item;
}
}));
});
/**
 * Recursively removes groups with no children, except the root group.
 *   Helps maintain a clean tree structure after deletions.
 */
re_com.table_filter.clean_empty_groups = (function re_com$table_filter$clean_empty_groups(var_args){
var G__19055 = arguments.length;
switch (G__19055) {
case 1:
return re_com.table_filter.clean_empty_groups.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_com.table_filter.clean_empty_groups.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_com.table_filter.clean_empty_groups.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return re_com.table_filter.clean_empty_groups.cljs$core$IFn$_invoke$arity$2(tree,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tree));
}));

(re_com.table_filter.clean_empty_groups.cljs$core$IFn$_invoke$arity$2 = (function (tree,root_id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(tree),new cljs.core.Keyword(null,"group","group",582596132))){
var cleaned_children = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__19052_SHARP_){
return re_com.table_filter.clean_empty_groups.cljs$core$IFn$_invoke$arity$2(p1__19052_SHARP_,root_id);
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(tree)));
if(((cljs.core.empty_QMARK_(cleaned_children)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(tree),root_id)))){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tree,new cljs.core.Keyword(null,"children","children",-940561982),cleaned_children);
}
} else {
return tree;
}
}));

(re_com.table_filter.clean_empty_groups.cljs$lang$maxFixedArity = 2);

/**
 * Remove an item by ID and clean up any resulting empty groups.
 * If root group becomes empty, add a default empty filter.
 */
re_com.table_filter.remove_item_with_cleanup = (function re_com$table_filter$remove_item_with_cleanup(tree,target_id,table_spec){
var cleaned_tree = re_com.table_filter.clean_empty_groups.cljs$core$IFn$_invoke$arity$1(re_com.table_filter.remove_item_by_id(tree,target_id));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cleaned_tree),new cljs.core.Keyword(null,"group","group",582596132))) && (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(cleaned_tree))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cleaned_tree,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.table_filter.empty_filter(table_spec)], null));
} else {
return cleaned_tree;
}
});
/**
 * returns the column information for a given ID from the table spec
 */
re_com.table_filter.column_by_id = (function re_com$table_filter$column_by_id(table_spec,id){
return cljs.core.some((function (p1__19066_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19066_SHARP_),id)){
return p1__19066_SHARP_;
} else {
return null;
}
}),table_spec);
});
/**
 * Return true if rule satisfies built-in and custom validators.
 */
re_com.table_filter.rule_valid_QMARK_ = (function re_com$table_filter$rule_valid_QMARK_(rule,table_spec){
var spec = re_com.table_filter.column_by_id(table_spec,new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(rule));
var map__19075 = spec;
var map__19075__$1 = cljs.core.__destructure_map(map__19075);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19075__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var valid_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19075__$1,new cljs.core.Keyword(null,"valid?","valid?",-212412379));
var op = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(rule);
var val = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(rule);
var and__5140__auto__ = spec;
if(cljs.core.truth_(and__5140__auto__)){
var and__5140__auto____$1 = (function (){var or__5142__auto__ = (function (){var fexpr__19077 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"empty","empty",767870958),null,new cljs.core.Keyword(null,"not-empty","not-empty",388922063),null], null), null);
return (fexpr__19077.cljs$core$IFn$_invoke$arity$1 ? fexpr__19077.cljs$core$IFn$_invoke$arity$1(op) : fexpr__19077.call(null,op));
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (!((val == null)));
}
})();
if(cljs.core.truth_(and__5140__auto____$1)){
var or__5142__auto__ = (function (){var and__5140__auto____$2 = cljs.core.fn_QMARK_(valid_QMARK_);
if(and__5140__auto____$2){
return (valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(val) : valid_QMARK_.call(null,val));
} else {
return and__5140__auto____$2;
}
})();
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__19079 = type;
var G__19079__$1 = (((G__19079 instanceof cljs.core.Keyword))?G__19079.fqn:null);
switch (G__19079__$1) {
case "text":
if(cljs.core.truth_((function (){var fexpr__19080 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"empty","empty",767870958),null,new cljs.core.Keyword(null,"not-empty","not-empty",388922063),null], null), null);
return (fexpr__19080.cljs$core$IFn$_invoke$arity$1 ? fexpr__19080.cljs$core$IFn$_invoke$arity$1(op) : fexpr__19080.call(null,op));
})())){
return true;
} else {
return typeof val === 'string';
}

break;
case "number":
if(cljs.core.truth_((function (){var fexpr__19081 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"empty","empty",767870958),null,new cljs.core.Keyword(null,"not-empty","not-empty",388922063),null], null), null);
return (fexpr__19081.cljs$core$IFn$_invoke$arity$1 ? fexpr__19081.cljs$core$IFn$_invoke$arity$1(op) : fexpr__19081.call(null,op));
})())){
return true;
} else {
return re_com.table_filter.valid_number_QMARK_(val);
}

break;
case "date":
var G__19082 = op;
var G__19082__$1 = (((G__19082 instanceof cljs.core.Keyword))?G__19082.fqn:null);
switch (G__19082__$1) {
case "empty":
case "not-empty":
return true;

break;
case "between":
case "not-between":
return ((cljs.core.map_QMARK_(val)) && (((cljs.core.contains_QMARK_(val,new cljs.core.Keyword(null,"start","start",-355208981))) && (((cljs.core.contains_QMARK_(val,new cljs.core.Keyword(null,"end","end",-268185958))) && (((re_com.table_filter.valid_date_QMARK_(new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(val))) && (re_com.table_filter.valid_date_QMARK_(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(val))))))))));

break;
default:
return re_com.table_filter.valid_date_QMARK_(val);

}

break;
case "select":
var G__19089 = op;
var G__19089__$1 = (((G__19089 instanceof cljs.core.Keyword))?G__19089.fqn:null);
switch (G__19089__$1) {
case "empty":
case "not-empty":
return true;

break;
case "is-any-of":
case "is-none-of":
case "contains":
case "not-contains":
return ((cljs.core.set_QMARK_(val)) && (cljs.core.seq(val)));

break;
default:
return (!((val == null)));

}

break;
case "boolean":
if(cljs.core.truth_((function (){var fexpr__19093 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"empty","empty",767870958),null,new cljs.core.Keyword(null,"not-empty","not-empty",388922063),null], null), null);
return (fexpr__19093.cljs$core$IFn$_invoke$arity$1 ? fexpr__19093.cljs$core$IFn$_invoke$arity$1(op) : fexpr__19093.call(null,op));
})())){
return true;
} else {
return cljs.core.boolean_QMARK_(val);
}

break;
default:
return true;

}
}
} else {
return and__5140__auto____$1;
}
} else {
return and__5140__auto__;
}
});
/**
 * Return true if all filters in the model are valid.
 */
re_com.table_filter.model_valid_QMARK_ = (function re_com$table_filter$model_valid_QMARK_(model,table_spec){
if((model == null)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"filter","filter",-948537934))){
return re_com.table_filter.rule_valid_QMARK_(model,table_spec);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(model),new cljs.core.Keyword(null,"group","group",582596132))){
return cljs.core.every_QMARK_((function (p1__19100_SHARP_){
return (re_com.table_filter.model_valid_QMARK_.cljs$core$IFn$_invoke$arity$2 ? re_com.table_filter.model_valid_QMARK_.cljs$core$IFn$_invoke$arity$2(p1__19100_SHARP_,table_spec) : re_com.table_filter.model_valid_QMARK_.call(null,p1__19100_SHARP_,table_spec));
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(model));
} else {
return false;

}
}
}
});
/**
 * Extract common properties for input components as a props map.
 * Includes model, on-change, width, disabled, and styling props.
 */
re_com.table_filter.common_props = (function re_com$table_filter$common_props(p__19108,on_change,disabled_QMARK_){
var map__19111 = p__19108;
var map__19111__$1 = cljs.core.__destructure_map(map__19111);
var filter_spec = map__19111__$1;
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19111__$1,new cljs.core.Keyword(null,"val","val",128701612));
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"model","model",331153215),val,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19106_SHARP_){
var G__19112 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.Keyword(null,"val","val",128701612),p1__19106_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__19112) : on_change.call(null,G__19112));
}),new cljs.core.Keyword(null,"width","width",-384071477),"220px",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_], null);
});
if((typeof re_com !== 'undefined') && (typeof re_com.table_filter !== 'undefined') && (typeof re_com.table_filter.value_entry_box !== 'undefined')){
} else {
/**
 * Depending on the spec for a given column, the value entry box behaves differently
 * There are options for most sql-like types)
 */
re_com.table_filter.value_entry_box = (function (){var method_table__5747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__19115 = cljs.core.get_global_hierarchy;
return (fexpr__19115.cljs$core$IFn$_invoke$arity$0 ? fexpr__19115.cljs$core$IFn$_invoke$arity$0() : fexpr__19115.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-com.table-filter","value-entry-box"),(function() { 
var G__19465__delegate = function (p__19116){
var map__19117 = p__19116;
var map__19117__$1 = cljs.core.__destructure_map(map__19117);
var row_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19117__$1,new cljs.core.Keyword(null,"row-spec","row-spec",980658336));
var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19117__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));
var map__19118 = row_spec;
var map__19118__$1 = cljs.core.__destructure_map(map__19118);
var row_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19118__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__19119 = filter_spec;
var map__19119__$1 = cljs.core.__destructure_map(map__19119);
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19119__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
if(cljs.core.truth_((function (){var fexpr__19121 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"empty","empty",767870958),null,new cljs.core.Keyword(null,"not-empty","not-empty",388922063),null], null), null);
return (fexpr__19121.cljs$core$IFn$_invoke$arity$1 ? fexpr__19121.cljs$core$IFn$_invoke$arity$1(op) : fexpr__19121.call(null,op));
})())){
return new cljs.core.Keyword(null,"empty-operation","empty-operation",1984456888);
} else {
return row_type;
}
};
var G__19465 = function (var_args){
var p__19116 = null;
if (arguments.length > 0) {
var G__19466__i = 0, G__19466__a = new Array(arguments.length -  0);
while (G__19466__i < G__19466__a.length) {G__19466__a[G__19466__i] = arguments[G__19466__i + 0]; ++G__19466__i;}
  p__19116 = new cljs.core.IndexedSeq(G__19466__a,0,null);
} 
return G__19465__delegate.call(this,p__19116);};
G__19465.cljs$lang$maxFixedArity = 0;
G__19465.cljs$lang$applyTo = (function (arglist__19468){
var p__19116 = cljs.core.seq(arglist__19468);
return G__19465__delegate(p__19116);
});
G__19465.cljs$core$IFn$_invoke$arity$variadic = G__19465__delegate;
return G__19465;
})()
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5751__auto__,method_table__5747__auto__,prefer_table__5748__auto__,method_cache__5749__auto__,cached_hierarchy__5750__auto__));
})();
}
re_com.table_filter.value_entry_box.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"empty-operation","empty-operation",1984456888),(function() { 
var G__19469__delegate = function (p__19126){
var map__19127 = p__19126;
var map__19127__$1 = cljs.core.__destructure_map(map__19127);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.label,new cljs.core.Keyword(null,"label","label",1718410804),"",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"220px"], null)], null);
};
var G__19469 = function (var_args){
var p__19126 = null;
if (arguments.length > 0) {
var G__19470__i = 0, G__19470__a = new Array(arguments.length -  0);
while (G__19470__i < G__19470__a.length) {G__19470__a[G__19470__i] = arguments[G__19470__i + 0]; ++G__19470__i;}
  p__19126 = new cljs.core.IndexedSeq(G__19470__a,0,null);
} 
return G__19469__delegate.call(this,p__19126);};
G__19469.cljs$lang$maxFixedArity = 0;
G__19469.cljs$lang$applyTo = (function (arglist__19471){
var p__19126 = cljs.core.seq(arglist__19471);
return G__19469__delegate(p__19126);
});
G__19469.cljs$core$IFn$_invoke$arity$variadic = G__19469__delegate;
return G__19469;
})()
);
re_com.table_filter.value_entry_box.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"text","text",-1790561697),(function() { 
var G__19472__delegate = function (p__19128){
var map__19129 = p__19128;
var map__19129__$1 = cljs.core.__destructure_map(map__19129);
var map__19130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__19130__$1 = cljs.core.__destructure_map(map__19130);
var part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19130__$1,new cljs.core.Keyword(null,"part-fn","part-fn",1984437584));
var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19129__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var G__19133 = new cljs.core.Keyword("re-com.table-filter","text-input","re-com.table-filter/text-input",237085339);
var G__19134 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.input_text.input_text,new cljs.core.Keyword(null,"props","props",453281727),re_com.table_filter.common_props(filter_spec,on_change,disabled_QMARK_)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19133,G__19134) : part.call(null,G__19133,G__19134));
};
var G__19472 = function (var_args){
var p__19128 = null;
if (arguments.length > 0) {
var G__19474__i = 0, G__19474__a = new Array(arguments.length -  0);
while (G__19474__i < G__19474__a.length) {G__19474__a[G__19474__i] = arguments[G__19474__i + 0]; ++G__19474__i;}
  p__19128 = new cljs.core.IndexedSeq(G__19474__a,0,null);
} 
return G__19472__delegate.call(this,p__19128);};
G__19472.cljs$lang$maxFixedArity = 0;
G__19472.cljs$lang$applyTo = (function (arglist__19475){
var p__19128 = cljs.core.seq(arglist__19475);
return G__19472__delegate(p__19128);
});
G__19472.cljs$core$IFn$_invoke$arity$variadic = G__19472__delegate;
return G__19472;
})()
);
re_com.table_filter.value_entry_box.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"number","number",1570378438),(function() { 
var G__19476__delegate = function (p__19135){
var map__19137 = p__19135;
var map__19137__$1 = cljs.core.__destructure_map(map__19137);
var map__19138 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__19138__$1 = cljs.core.__destructure_map(map__19138);
var part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19138__$1,new cljs.core.Keyword(null,"part-fn","part-fn",1984437584));
var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19137__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var G__19146 = new cljs.core.Keyword("re-com.table-filter","text-input","re-com.table-filter/text-input",237085339);
var G__19147 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.input_text.input_text,new cljs.core.Keyword(null,"props","props",453281727),re_com.table_filter.common_props(filter_spec,on_change,disabled_QMARK_)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19146,G__19147) : part.call(null,G__19146,G__19147));
};
var G__19476 = function (var_args){
var p__19135 = null;
if (arguments.length > 0) {
var G__19477__i = 0, G__19477__a = new Array(arguments.length -  0);
while (G__19477__i < G__19477__a.length) {G__19477__a[G__19477__i] = arguments[G__19477__i + 0]; ++G__19477__i;}
  p__19135 = new cljs.core.IndexedSeq(G__19477__a,0,null);
} 
return G__19476__delegate.call(this,p__19135);};
G__19476.cljs$lang$maxFixedArity = 0;
G__19476.cljs$lang$applyTo = (function (arglist__19478){
var p__19135 = cljs.core.seq(arglist__19478);
return G__19476__delegate(p__19135);
});
G__19476.cljs$core$IFn$_invoke$arity$variadic = G__19476__delegate;
return G__19476;
})()
);
re_com.table_filter.value_entry_box.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"date","date",-1463434462),(function() { 
var G__19479__delegate = function (p__19163){
var map__19167 = p__19163;
var map__19167__$1 = cljs.core.__destructure_map(map__19167);
var map__19168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19167__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__19168__$1 = cljs.core.__destructure_map(map__19168);
var part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19168__$1,new cljs.core.Keyword(null,"part-fn","part-fn",1984437584));
var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19167__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19167__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19167__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19167__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var op = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(filter_spec);
if(cljs.core.truth_((function (){var fexpr__19171 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"between","between",1131099276),null,new cljs.core.Keyword(null,"not-between","not-between",-979594021),null], null), null);
return (fexpr__19171.cljs$core$IFn$_invoke$arity$1 ? fexpr__19171.cljs$core$IFn$_invoke$arity$1(op) : fexpr__19171.call(null,op));
})())){
var G__19172 = new cljs.core.Keyword("re-com.table-filter","daterange-input","re-com.table-filter/daterange-input",-1947022156);
var G__19173 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.daterange.daterange_dropdown,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select date range",new cljs.core.Keyword(null,"show-today?","show-today?",513056415),true], null),re_com.table_filter.common_props(filter_spec,on_change,disabled_QMARK_)], 0))], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19172,G__19173) : part.call(null,G__19172,G__19173));
} else {
var G__19179 = new cljs.core.Keyword("re-com.table-filter","date-input","re-com.table-filter/date-input",-1650099148);
var G__19180 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.datepicker.datepicker_dropdown,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select a date",new cljs.core.Keyword(null,"show-today?","show-today?",513056415),true,new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor-label","anchor-label",-667921749),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"34px"], null)], null)], null)], null),re_com.table_filter.common_props(filter_spec,on_change,disabled_QMARK_)], 0))], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19179,G__19180) : part.call(null,G__19179,G__19180));
}
};
var G__19479 = function (var_args){
var p__19163 = null;
if (arguments.length > 0) {
var G__19480__i = 0, G__19480__a = new Array(arguments.length -  0);
while (G__19480__i < G__19480__a.length) {G__19480__a[G__19480__i] = arguments[G__19480__i + 0]; ++G__19480__i;}
  p__19163 = new cljs.core.IndexedSeq(G__19480__a,0,null);
} 
return G__19479__delegate.call(this,p__19163);};
G__19479.cljs$lang$maxFixedArity = 0;
G__19479.cljs$lang$applyTo = (function (arglist__19481){
var p__19163 = cljs.core.seq(arglist__19481);
return G__19479__delegate(p__19163);
});
G__19479.cljs$core$IFn$_invoke$arity$variadic = G__19479__delegate;
return G__19479;
})()
);
re_com.table_filter.value_entry_box.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function() { 
var G__19482__delegate = function (p__19181){
var map__19182 = p__19181;
var map__19182__$1 = cljs.core.__destructure_map(map__19182);
var map__19183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19182__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__19183__$1 = cljs.core.__destructure_map(map__19183);
var part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19183__$1,new cljs.core.Keyword(null,"part-fn","part-fn",1984437584));
var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19182__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19182__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19182__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19182__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var G__19185 = new cljs.core.Keyword("re-com.table-filter","dropdown-input","re-com.table-filter/dropdown-input",-1459881622);
var G__19186 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.single_dropdown.single_dropdown,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),true,new cljs.core.Keyword(null,"label","label",1718410804),"True"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),false,new cljs.core.Keyword(null,"label","label",1718410804),"False"], null)], null)], null),re_com.table_filter.common_props(filter_spec,on_change,disabled_QMARK_)], 0))], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19185,G__19186) : part.call(null,G__19185,G__19186));
};
var G__19482 = function (var_args){
var p__19181 = null;
if (arguments.length > 0) {
var G__19483__i = 0, G__19483__a = new Array(arguments.length -  0);
while (G__19483__i < G__19483__a.length) {G__19483__a[G__19483__i] = arguments[G__19483__i + 0]; ++G__19483__i;}
  p__19181 = new cljs.core.IndexedSeq(G__19483__a,0,null);
} 
return G__19482__delegate.call(this,p__19181);};
G__19482.cljs$lang$maxFixedArity = 0;
G__19482.cljs$lang$applyTo = (function (arglist__19484){
var p__19181 = cljs.core.seq(arglist__19484);
return G__19482__delegate(p__19181);
});
G__19482.cljs$core$IFn$_invoke$arity$variadic = G__19482__delegate;
return G__19482;
})()
);
re_com.table_filter.value_entry_box.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select","select",1147833503),(function() { 
var G__19485__delegate = function (p__19193){
var map__19195 = p__19193;
var map__19195__$1 = cljs.core.__destructure_map(map__19195);
var map__19196 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19195__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__19196__$1 = cljs.core.__destructure_map(map__19196);
var part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19196__$1,new cljs.core.Keyword(null,"part-fn","part-fn",1984437584));
var row_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19195__$1,new cljs.core.Keyword(null,"row-spec","row-spec",980658336));
var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19195__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19195__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19195__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19195__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var map__19200 = row_spec;
var map__19200__$1 = cljs.core.__destructure_map(map__19200);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19200__$1,new cljs.core.Keyword(null,"options","options",99638489));
var op = new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(filter_spec);
var val = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(filter_spec);
if(cljs.core.truth_((function (){var fexpr__19202 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"not-contains","not-contains",-2047067744),null,new cljs.core.Keyword(null,"contains","contains",676899812),null,new cljs.core.Keyword(null,"is-none-of","is-none-of",1843075750),null,new cljs.core.Keyword(null,"is-any-of","is-any-of",-1110639385),null], null), null);
return (fexpr__19202.cljs$core$IFn$_invoke$arity$1 ? fexpr__19202.cljs$core$IFn$_invoke$arity$1(op) : fexpr__19202.call(null,op));
})())){
var G__19203 = new cljs.core.Keyword("re-com.table-filter","tag-dropdown-input","re-com.table-filter/tag-dropdown-input",682522264);
var G__19204 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.tag_dropdown.tag_dropdown,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"show-counter?","show-counter?",-292828728),new cljs.core.Keyword(null,"choices","choices",1385611597),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"show-only-button?","show-only-button?",53506652),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"model","model",331153215)],["220px","Select values...",true,options,"600px",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#333333",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#ffffff"], null),(function (p1__19190_SHARP_){
var G__19205 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(filter_spec,new cljs.core.Keyword(null,"val","val",128701612),p1__19190_SHARP_);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__19205) : on_change.call(null,G__19205));
}),disabled_QMARK_,true,"34px",(function (){var or__5142__auto__ = val;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})()])], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19203,G__19204) : part.call(null,G__19203,G__19204));
} else {
var G__19206 = new cljs.core.Keyword("re-com.table-filter","dropdown-input","re-com.table-filter/dropdown-input",-1459881622);
var G__19207 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.single_dropdown.single_dropdown,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"choices","choices",1385611597),options], null),re_com.table_filter.common_props(filter_spec,on_change,disabled_QMARK_)], 0))], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19206,G__19207) : part.call(null,G__19206,G__19207));
}
};
var G__19485 = function (var_args){
var p__19193 = null;
if (arguments.length > 0) {
var G__19489__i = 0, G__19489__a = new Array(arguments.length -  0);
while (G__19489__i < G__19489__a.length) {G__19489__a[G__19489__i] = arguments[G__19489__i + 0]; ++G__19489__i;}
  p__19193 = new cljs.core.IndexedSeq(G__19489__a,0,null);
} 
return G__19485__delegate.call(this,p__19193);};
G__19485.cljs$lang$maxFixedArity = 0;
G__19485.cljs$lang$applyTo = (function (arglist__19490){
var p__19193 = cljs.core.seq(arglist__19490);
return G__19485__delegate(p__19193);
});
G__19485.cljs$core$IFn$_invoke$arity$variadic = G__19485__delegate;
return G__19485;
})()
);
re_com.table_filter.value_entry_box.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function() { 
var G__19491__delegate = function (p__19208){
var map__19209 = p__19208;
var map__19209__$1 = cljs.core.__destructure_map(map__19209);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.label,new cljs.core.Keyword(null,"label","label",1718410804),""], null);
};
var G__19491 = function (var_args){
var p__19208 = null;
if (arguments.length > 0) {
var G__19493__i = 0, G__19493__a = new Array(arguments.length -  0);
while (G__19493__i < G__19493__a.length) {G__19493__a[G__19493__i] = arguments[G__19493__i + 0]; ++G__19493__i;}
  p__19208 = new cljs.core.IndexedSeq(G__19493__a,0,null);
} 
return G__19491__delegate.call(this,p__19208);};
G__19491.cljs$lang$maxFixedArity = 0;
G__19491.cljs$lang$applyTo = (function (arglist__19494){
var p__19208 = cljs.core.seq(arglist__19494);
return G__19491__delegate(p__19208);
});
G__19491.cljs$core$IFn$_invoke$arity$variadic = G__19491__delegate;
return G__19491;
})()
);
re_com.table_filter.context_menu_buttons = (function re_com$table_filter$context_menu_buttons(p__19214){
var map__19239 = p__19214;
var map__19239__$1 = cljs.core.__destructure_map(map__19239);
var choices = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19239__$1,new cljs.core.Keyword(null,"choices","choices",1385611597));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19239__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var iter__5628__auto__ = (function re_com$table_filter$context_menu_buttons_$_iter__19246(s__19247){
return (new cljs.core.LazySeq(null,(function (){
var s__19247__$1 = s__19247;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19247__$1);
if(temp__5823__auto__){
var s__19247__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19247__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19247__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19249 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19248 = (0);
while(true){
if((i__19248 < size__5627__auto__)){
var map__19266 = cljs.core._nth(c__5626__auto__,i__19248);
var map__19266__$1 = cljs.core.__destructure_map(map__19266);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19266__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19266__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19266__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append(b__19249,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"class","class",-2030961996),"btn-link",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 16px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__19248,map__19266,map__19266__$1,id,color,label,c__5626__auto__,size__5627__auto__,b__19249,s__19247__$2,temp__5823__auto__,map__19239,map__19239__$1,choices,on_click){
return (function (){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(id) : on_click.call(null,id));
});})(i__19248,map__19266,map__19266__$1,id,color,label,c__5626__auto__,size__5627__auto__,b__19249,s__19247__$2,temp__5823__auto__,map__19239,map__19239__$1,choices,on_click))
], null));

var G__19495 = (i__19248 + (1));
i__19248 = G__19495;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19249),re_com$table_filter$context_menu_buttons_$_iter__19246(cljs.core.chunk_rest(s__19247__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19249),null);
}
} else {
var map__19308 = cljs.core.first(s__19247__$2);
var map__19308__$1 = cljs.core.__destructure_map(map__19308);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19308__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19308__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19308__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"class","class",-2030961996),"btn-link",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"500",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 16px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__19308,map__19308__$1,id,color,label,s__19247__$2,temp__5823__auto__,map__19239,map__19239__$1,choices,on_click){
return (function (){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(id) : on_click.call(null,id));
});})(map__19308,map__19308__$1,id,color,label,s__19247__$2,temp__5823__auto__,map__19239,map__19239__$1,choices,on_click))
], null),re_com$table_filter$context_menu_buttons_$_iter__19246(cljs.core.rest(s__19247__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(choices);
})()], null);
});
/**
 * A dropdown which exposes the options you can take on a filter, e.g. delete, dupe or promote to group
 */
re_com.table_filter.filter_context_menu = (function re_com$table_filter$filter_context_menu(var_args){
var args__5882__auto__ = [];
var len__5876__auto___19500 = arguments.length;
var i__5877__auto___19501 = (0);
while(true){
if((i__5877__auto___19501 < len__5876__auto___19500)){
args__5882__auto__.push((arguments[i__5877__auto___19501]));

var G__19502 = (i__5877__auto___19501 + (1));
i__5877__auto___19501 = G__19502;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.table_filter.filter_context_menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.table_filter.filter_context_menu.cljs$core$IFn$_invoke$arity$variadic = (function (p__19318){
var map__19323 = p__19318;
var map__19323__$1 = cljs.core.__destructure_map(map__19323);
var map__19324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19323__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__19324__$1 = cljs.core.__destructure_map(map__19324);
var part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19324__$1,new cljs.core.Keyword(null,"part-fn","part-fn",1984437584));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19323__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var item_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19323__$1,new cljs.core.Keyword(null,"item-id","item-id",-1804511607));
var update_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19323__$1,new cljs.core.Keyword(null,"update-state!","update-state!",1325813258));
var table_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19323__$1,new cljs.core.Keyword(null,"table-spec","table-spec",-691012666));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19323__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19323__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var max_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19323__$1,new cljs.core.Keyword(null,"max-depth","max-depth",127060793));
var choices = (function (){var G__19332 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),"Delete Filter",new cljs.core.Keyword(null,"color","color",1011675173),"#dc2626"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"duplicate","duplicate",-1107405184),new cljs.core.Keyword(null,"label","label",1718410804),"Duplicate",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null);
if((depth < max_depth)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19332,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"convert","convert",912478626),new cljs.core.Keyword(null,"label","label",1718410804),"Turn into group",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null));
} else {
return G__19332;
}
})();
var G__19333 = new cljs.core.Keyword("re-com.table-filter","context-menu","re-com.table-filter/context-menu",1049702551);
var G__19335 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.dropdown.dropdown,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"model","model",331153215),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"label","label",1718410804),"\u22EF",new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.table_filter.context_menu_buttons,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"choices","choices",1385611597),choices,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (choice_id){
var G__19336 = choice_id;
var G__19336__$1 = (((G__19336 instanceof cljs.core.Keyword))?G__19336.fqn:null);
switch (G__19336__$1) {
case "delete":
return (update_state_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_state_BANG_.cljs$core$IFn$_invoke$arity$3(re_com.table_filter.remove_item_with_cleanup,item_id,table_spec) : update_state_BANG_.call(null,re_com.table_filter.remove_item_with_cleanup,item_id,table_spec));

break;
case "duplicate":
return (update_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_state_BANG_.cljs$core$IFn$_invoke$arity$2(re_com.table_filter.duplicate_item_by_id,item_id) : update_state_BANG_.call(null,re_com.table_filter.duplicate_item_by_id,item_id));

break;
case "convert":
return (update_state_BANG_.cljs$core$IFn$_invoke$arity$2 ? update_state_BANG_.cljs$core$IFn$_invoke$arity$2(re_com.table_filter.convert_filter_to_group,item_id) : update_state_BANG_.call(null,re_com.table_filter.convert_filter_to_group,item_id));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19336__$1))));

}
})], null)], null)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19333,G__19335) : part.call(null,G__19333,G__19335));
}));

(re_com.table_filter.filter_context_menu.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.table_filter.filter_context_menu.cljs$lang$applyTo = (function (seq19312){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19312));
}));

/**
 * A single filter, contains a row selection box, an operator selection box, a value entry box and a context button
 */
re_com.table_filter.filter_builder = (function re_com$table_filter$filter_builder(var_args){
var args__5882__auto__ = [];
var len__5876__auto___19506 = arguments.length;
var i__5877__auto___19507 = (0);
while(true){
if((i__5877__auto___19507 < len__5876__auto___19506)){
args__5882__auto__.push((arguments[i__5877__auto___19507]));

var G__19508 = (i__5877__auto___19507 + (1));
i__5877__auto___19507 = G__19508;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.table_filter.filter_builder.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.table_filter.filter_builder.cljs$core$IFn$_invoke$arity$variadic = (function (p__19350){
var map__19351 = p__19350;
var map__19351__$1 = cljs.core.__destructure_map(map__19351);
var args = map__19351__$1;
var map__19352 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__19352__$1 = cljs.core.__destructure_map(map__19352);
var part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19352__$1,new cljs.core.Keyword(null,"part-fn","part-fn",1984437584));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19352__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var table_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword(null,"table-spec","table-spec",-691012666));
var filter_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648));
var update_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword(null,"update-state!","update-state!",1325813258));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19351__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var spec = re_com.table_filter.column_by_id(table_spec,new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(filter_spec));
var ops = (function (){var G__19354 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(spec);
return (re_com.table_filter.ops_by_type.cljs$core$IFn$_invoke$arity$1 ? re_com.table_filter.ops_by_type.cljs$core$IFn$_invoke$arity$1(G__19354) : re_com.table_filter.ops_by_type.call(null,G__19354));
})();
var valid_QMARK_ = re_com.table_filter.rule_valid_QMARK_(filter_spec,table_spec);
var col_opts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__19339_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__19339_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__19339_SHARP_)]);
}),table_spec);
var op_opts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__19340_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"label","label",1718410804)],[p1__19340_SHARP_,cljs.core.get.cljs$core$IFn$_invoke$arity$3(re_com.table_filter.op_label,p1__19340_SHARP_,cljs.core.name(p1__19340_SHARP_))]);
}),ops);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"4px",new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"transparent",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap"], null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19357 = new cljs.core.Keyword("re-com.table-filter","column-dropdown","re-com.table-filter/column-dropdown",1280689853);
var G__19358 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.single_dropdown.single_dropdown,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(filter_spec),new cljs.core.Keyword(null,"choices","choices",1385611597),col_opts,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19341_SHARP_){
var cs = re_com.table_filter.column_by_id(table_spec,p1__19341_SHARP_);
var G__19359 = re_com.table_filter.update_item_by_id;
var G__19360 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(filter_spec);
var G__19361 = cljs.core.merge;
var G__19362 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"col","col",-1959363084),p1__19341_SHARP_,new cljs.core.Keyword(null,"op","op",-1882987955),cljs.core.first((function (){var G__19363 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cs);
return (re_com.table_filter.ops_by_type.cljs$core$IFn$_invoke$arity$1 ? re_com.table_filter.ops_by_type.cljs$core$IFn$_invoke$arity$1(G__19363) : re_com.table_filter.ops_by_type.call(null,G__19363));
})()),new cljs.core.Keyword(null,"val","val",128701612),null], null);
return (update_state_BANG_.cljs$core$IFn$_invoke$arity$4 ? update_state_BANG_.cljs$core$IFn$_invoke$arity$4(G__19359,G__19360,G__19361,G__19362) : update_state_BANG_.call(null,G__19359,G__19360,G__19361,G__19362));
})], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19357,G__19358) : part.call(null,G__19357,G__19358));
})(),(function (){var G__19374 = new cljs.core.Keyword("re-com.table-filter","operator-dropdown","re-com.table-filter/operator-dropdown",-1847831610);
var G__19375 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.single_dropdown.single_dropdown,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"op","op",-1882987955).cljs$core$IFn$_invoke$arity$1(filter_spec),new cljs.core.Keyword(null,"choices","choices",1385611597),op_opts,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19343_SHARP_){
var G__19376 = (function (state){
return re_com.table_filter.update_item_by_id(state,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(filter_spec),(function (f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(f,new cljs.core.Keyword(null,"op","op",-1882987955),p1__19343_SHARP_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"val","val",128701612),null], 0));
}));
});
return (update_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? update_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__19376) : update_state_BANG_.call(null,G__19376));
})], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19374,G__19375) : part.call(null,G__19374,G__19375));
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.table_filter.value_entry_box,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-spec","row-spec",980658336),spec,new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__19345_SHARP_){
var G__19377 = re_com.table_filter.update_item_by_id;
var G__19378 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(filter_spec);
var G__19379 = cljs.core.constantly(p1__19345_SHARP_);
return (update_state_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_state_BANG_.cljs$core$IFn$_invoke$arity$3(G__19377,G__19378,G__19379) : update_state_BANG_.call(null,G__19377,G__19378,G__19379));
})], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.table_filter.filter_context_menu,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item-id","item-id",-1804511607),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(filter_spec),new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),filter_spec], null)], 0))], null),(cljs.core.truth_(valid_QMARK_)?null:(function (){var G__19380 = new cljs.core.Keyword("re-com.table-filter","warning-icon","re-com.table-filter/warning-icon",577184957);
var G__19381 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.buttons.md_icon_button,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"md-icon-name","md-icon-name",681785863),"zmdi-alert-triangle",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"smaller","smaller",-1619801498),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none"], null),new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),"Invalid rule"], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19380,G__19381) : part.call(null,G__19380,G__19381));
})())], null)], null)], null);
}));

(re_com.table_filter.filter_builder.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.table_filter.filter_builder.cljs$lang$applyTo = (function (seq19348){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19348));
}));

re_com.table_filter.operator_button_body = (function re_com$table_filter$operator_button_body(p__19384){
var map__19391 = p__19384;
var map__19391__$1 = cljs.core.__destructure_map(map__19391);
var operator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19391__$1,new cljs.core.Keyword(null,"operator","operator",-1860875338));
var update_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19391__$1,new cljs.core.Keyword(null,"update-state!","update-state!",1325813258));
var group_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19391__$1,new cljs.core.Keyword(null,"group-id","group-id",-1316082778));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.label,new cljs.core.Keyword(null,"label","label",1718410804),"And",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.label,new cljs.core.Keyword(null,"label","label",1718410804),"All filters must match",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)], null)], null)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn-link",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 16px",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(operator,new cljs.core.Keyword(null,"and","and",-971899817)))?"#f3f4f6":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__19392 = re_com.table_filter.update_item_by_id;
var G__19393 = group_id;
var G__19394 = (function (g){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(g,new cljs.core.Keyword(null,"logic","logic",564698810),new cljs.core.Keyword(null,"and","and",-971899817));
});
return (update_state_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_state_BANG_.cljs$core$IFn$_invoke$arity$3(G__19392,G__19393,G__19394) : update_state_BANG_.call(null,G__19392,G__19393,G__19394));
})], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.buttons.button,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"2px",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.label,new cljs.core.Keyword(null,"label","label",1718410804),"Or",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"600",new cljs.core.Keyword(null,"color","color",1011675173),"#374151",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"13px"], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.text.label,new cljs.core.Keyword(null,"label","label",1718410804),"At least one filter must match",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#6b7280",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"11px"], null)], null)], null)], null),new cljs.core.Keyword(null,"class","class",-2030961996),"btn-link",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 16px",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(operator,new cljs.core.Keyword(null,"or","or",235744169)))?"#f3f4f6":null)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__19395 = re_com.table_filter.update_item_by_id;
var G__19396 = group_id;
var G__19397 = (function (g){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(g,new cljs.core.Keyword(null,"logic","logic",564698810),new cljs.core.Keyword(null,"or","or",235744169));
});
return (update_state_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_state_BANG_.cljs$core$IFn$_invoke$arity$3(G__19395,G__19396,G__19397) : update_state_BANG_.call(null,G__19395,G__19396,G__19397));
})], null)], null)], null);
});
/**
 * Contains 1 or more filter-builders and has an associated context menu
 */
re_com.table_filter.filter_group = (function re_com$table_filter$filter_group(var_args){
var args__5882__auto__ = [];
var len__5876__auto___19514 = arguments.length;
var i__5877__auto___19515 = (0);
while(true){
if((i__5877__auto___19515 < len__5876__auto___19514)){
args__5882__auto__.push((arguments[i__5877__auto___19515]));

var G__19516 = (i__5877__auto___19515 + (1));
i__5877__auto___19515 = G__19516;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.table_filter.filter_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.table_filter.filter_group.cljs$core$IFn$_invoke$arity$variadic = (function (p__19403){
var map__19404 = p__19403;
var map__19404__$1 = cljs.core.__destructure_map(map__19404);
var args = map__19404__$1;
var max_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword(null,"max-depth","max-depth",127060793));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword(null,"group","group",582596132));
var table_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword(null,"table-spec","table-spec",-691012666));
var update_state_BANG_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword(null,"update-state!","update-state!",1325813258));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var map__19405 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword(null,"re-com","re-com",-2034768951));
var map__19405__$1 = cljs.core.__destructure_map(map__19405);
var part = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19405__$1,new cljs.core.Keyword(null,"part-fn","part-fn",1984437584));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19405__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19404__$1,new cljs.core.Keyword(null,"depth","depth",1768663640));
var map__19411 = re_com.util.deref_or_value(group);
var map__19411__$1 = cljs.core.__destructure_map(map__19411);
var group_deref = map__19411__$1;
var group_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19411__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var children = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(group_deref);
var is_root_QMARK_ = (depth === (0));
var show_group_ui_QMARK_ = (((!(is_root_QMARK_))) || ((cljs.core.count(children) > (1))));
var child_args = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"part","part",77757738)], 0));
var child_part = (function (idx,child){
var child_is_group_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(group_deref),idx)));
var show_operator_QMARK_ = (idx > (0));
var show_where_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(0));
var operator_btn = ((show_operator_QMARK_)?(function (){var operator = (function (){var or__5142__auto__ = new cljs.core.Keyword(null,"logic","logic",564698810).cljs$core$IFn$_invoke$arity$1(group_deref);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return new cljs.core.Keyword(null,"and","and",-971899817);
}
})();
var depth__$1 = depth;
var interactable_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(idx,(1));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"align-self","align-self",1475936794),((child_is_group_QMARK_)?new cljs.core.Keyword(null,"start","start",-355208981):new cljs.core.Keyword(null,"center","center",-748944368)),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"size","size",1098693007),"0px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((interactable_QMARK_)?(function (){var G__19414 = new cljs.core.Keyword("re-com.table-filter","operator-button","re-com.table-filter/operator-button",1400565481);
var G__19415 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.dropdown.dropdown,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"model","model",331153215),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__19416 = operator;
var G__19416__$1 = (((G__19416 instanceof cljs.core.Keyword))?G__19416.fqn:null);
switch (G__19416__$1) {
case "and":
return "And";

break;
case "or":
return "Or";

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19416__$1))));

}
})(),new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"parts","parts",849007691),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anchor-wrapper","anchor-wrapper",162103487),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core.odd_QMARK_(depth__$1))?"white":"#f7f7f7")], null)], null)], null),new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.table_filter.operator_button_body,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operator","operator",-1860875338),operator,new cljs.core.Keyword(null,"update-state!","update-state!",1325813258),update_state_BANG_,new cljs.core.Keyword(null,"group-id","group-id",-1316082778),group_id], null)], null)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19414,G__19415) : part.call(null,G__19414,G__19415));
})():(function (){var G__19417 = new cljs.core.Keyword("re-com.table-filter","operator-text","re-com.table-filter/operator-text",477458624);
var G__19418 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.label,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),(function (){var G__19419 = operator;
var G__19419__$1 = (((G__19419 instanceof cljs.core.Keyword))?G__19419.fqn:null);
switch (G__19419__$1) {
case "and":
return "And";

break;
case "or":
return "Or";

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19419__$1))));

}
})()], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19417,G__19418) : part.call(null,G__19417,G__19418));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.gap,new cljs.core.Keyword(null,"size","size",1098693007),"2px"], null)], null)], null)], null)], null);
})():null);
var where_label = ((show_where_QMARK_)?(function (){var G__19421 = new cljs.core.Keyword("re-com.table-filter","where-label","re-com.table-filter/where-label",434467456);
var G__19422 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.text.label,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),"Where"], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19421,G__19422) : part.call(null,G__19421,G__19422));
})():null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"gap","gap",80255254),"4px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(where_label)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [where_label], null):null),(cljs.core.truth_(operator_btn)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [operator_btn], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__19424 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(child);
var G__19424__$1 = (((G__19424 instanceof cljs.core.Keyword))?G__19424.fqn:null);
switch (G__19424__$1) {
case "filter":
var G__19427 = new cljs.core.Keyword("re-com.table-filter","filter","re-com.table-filter/filter",1234670516);
var G__19428 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.table_filter.filter_builder,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([child_args,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter-spec","filter-spec",-1101318648),child], null)], 0))], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19427,G__19428) : part.call(null,G__19427,G__19428));

break;
case "group":
var G__19429 = new cljs.core.Keyword("re-com.table-filter","group","re-com.table-filter/group",-1466475490);
var G__19430 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.table_filter.filter_group,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([child_args,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group","group",582596132),child,new cljs.core.Keyword(null,"depth","depth",1768663640),(depth + (1))], null)], 0))], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19429,G__19430) : part.call(null,G__19429,G__19430));

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19424__$1))));

}
})()], null)], 0))], null)], null);
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.h_box,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"margin","margin",-995903681),"0px 0px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),((((show_group_ui_QMARK_) && ((!(is_root_QMARK_)))))?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"padding","padding",1660304693),(8),new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core.odd_QMARK_(depth))?"#f7f7f7":"white"),new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #e1e5e9",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"4px"], null):null),style], 0)),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"gap","gap",80255254),"6px",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(child_part,children),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var choices = (function (){var G__19436 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"add-filter","add-filter",-1803558196),new cljs.core.Keyword(null,"label","label",1718410804),"Add a filter",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null)], null);
if((depth < max_depth)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__19436,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"add-group","add-group",1646859519),new cljs.core.Keyword(null,"label","label",1718410804),"Add a filter group",new cljs.core.Keyword(null,"color","color",1011675173),"#374151"], null));
} else {
return G__19436;
}
})();
var G__19437 = new cljs.core.Keyword("re-com.table-filter","add-button","re-com.table-filter/add-button",-1980668337);
var G__19438 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.dropdown.dropdown,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"model","model",331153215),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),"+ Add filter",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.table_filter.context_menu_buttons,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"choices","choices",1385611597),choices,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (choice_id){
var make_item = (function (){var G__19439 = choice_id;
var G__19439__$1 = (((G__19439 instanceof cljs.core.Keyword))?G__19439.fqn:null);
switch (G__19439__$1) {
case "add-filter":
return re_com.table_filter.empty_filter;

break;
case "add-group":
return re_com.table_filter.empty_group;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19439__$1))));

}
})();
var G__19440 = re_com.table_filter.add_child_to_group;
var G__19441 = group_id;
var G__19442 = (make_item.cljs$core$IFn$_invoke$arity$1 ? make_item.cljs$core$IFn$_invoke$arity$1(table_spec) : make_item.call(null,table_spec));
return (update_state_BANG_.cljs$core$IFn$_invoke$arity$3 ? update_state_BANG_.cljs$core$IFn$_invoke$arity$3(G__19440,G__19441,G__19442) : update_state_BANG_.call(null,G__19440,G__19441,G__19442));
})], null)], null)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19437,G__19438) : part.call(null,G__19437,G__19438));
})()], null))], null)], null)], null),((((show_group_ui_QMARK_) && ((!(is_root_QMARK_)))))?(function (){var map__19443 = group_deref;
var map__19443__$1 = cljs.core.__destructure_map(map__19443);
var group_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19443__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var choices = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"label","label",1718410804),"Delete group",new cljs.core.Keyword(null,"color","color",1011675173),"#dc2626"], null)], null);
var G__19444 = new cljs.core.Keyword("re-com.table-filter","context-menu","re-com.table-filter/context-menu",1049702551);
var G__19445 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.dropdown.dropdown,new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"model","model",331153215),reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"label","label",1718410804),"\u22EF",new cljs.core.Keyword(null,"body","body",-2049205669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.table_filter.context_menu_buttons,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"choices","choices",1385611597),choices,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (choice_id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(choice_id,new cljs.core.Keyword(null,"delete","delete",-1768633620))){
var G__19446 = (function (state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(state),group_id__$1)){
return state;
} else {
return re_com.table_filter.remove_item_with_cleanup(state,group_id__$1,table_spec);
}
});
return (update_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? update_state_BANG_.cljs$core$IFn$_invoke$arity$1(G__19446) : update_state_BANG_.call(null,G__19446));
} else {
return null;
}
})], null)], null)], null)], null);
return (part.cljs$core$IFn$_invoke$arity$2 ? part.cljs$core$IFn$_invoke$arity$2(G__19444,G__19445) : part.call(null,G__19444,G__19445));
})():null)], null)], null)], null);
}));

(re_com.table_filter.filter_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.table_filter.filter_group.cljs$lang$applyTo = (function (seq19402){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19402));
}));

/**
 * Hierarchical table filter component with external state as single source of truth.
 * External model (user-facing): {:type :group :logic :and :children [...]} - no IDs required
 * Internal model automatically adds IDs for component state management.
 */
re_com.table_filter.table_filter = (function re_com$table_filter$table_filter(var_args){
var args__5882__auto__ = [];
var len__5876__auto___19535 = arguments.length;
var i__5877__auto___19536 = (0);
while(true){
if((i__5877__auto___19536 < len__5876__auto___19535)){
args__5882__auto__.push((arguments[i__5877__auto___19536]));

var G__19537 = (i__5877__auto___19536 + (1));
i__5877__auto___19536 = G__19537;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_com.table_filter.table_filter.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_com.table_filter.table_filter.cljs$core$IFn$_invoke$arity$variadic = (function (p__19449){
var map__19450 = p__19449;
var map__19450__$1 = cljs.core.__destructure_map(map__19450);
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19450__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19450__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var internal_model = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return (function() { 
var G__19540__delegate = function (p__19451){
var map__19452 = p__19451;
var map__19452__$1 = cljs.core.__destructure_map(map__19452);
var args = map__19452__$1;
var table_spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19452__$1,new cljs.core.Keyword(null,"table-spec","table-spec",-691012666));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19452__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19452__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var max_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19452__$1,new cljs.core.Keyword(null,"max-depth","max-depth",127060793),(2));
var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.table_filter.args_desc),args));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var external_model_val = (function (){var or__5142__auto____$1 = re_com.util.deref_or_value(model);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return re_com.table_filter.empty_group_external(table_spec);
}
})();
var current_external = (cljs.core.truth_(cljs.core.deref(internal_model))?re_com.table_filter.remove_ids(cljs.core.deref(internal_model)):null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_external,external_model_val)){
cljs.core.reset_BANG_(internal_model,re_com.table_filter.add_ids(external_model_val));
} else {
}

var model_with_ids = (function (){var or__5142__auto____$1 = cljs.core.deref(internal_model);
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return re_com.table_filter.add_ids(external_model_val);
}
})();
var update_state_BANG_ = (function() { 
var G__19541__delegate = function (f,args__$1){
var new_internal_model = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,model_with_ids,args__$1);
var new_external_model = re_com.table_filter.remove_ids(new_internal_model);
var is_valid_QMARK_ = re_com.table_filter.model_valid_QMARK_(new_external_model,table_spec);
if(cljs.core.truth_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(new_external_model,is_valid_QMARK_) : on_change.call(null,new_external_model,is_valid_QMARK_));
} else {
return null;
}
};
var G__19541 = function (f,var_args){
var args__$1 = null;
if (arguments.length > 1) {
var G__19542__i = 0, G__19542__a = new Array(arguments.length -  1);
while (G__19542__i < G__19542__a.length) {G__19542__a[G__19542__i] = arguments[G__19542__i + 1]; ++G__19542__i;}
  args__$1 = new cljs.core.IndexedSeq(G__19542__a,0,null);
} 
return G__19541__delegate.call(this,f,args__$1);};
G__19541.cljs$lang$maxFixedArity = 1;
G__19541.cljs$lang$applyTo = (function (arglist__19547){
var f = cljs.core.first(arglist__19547);
var args__$1 = cljs.core.rest(arglist__19547);
return G__19541__delegate(f,args__$1);
});
G__19541.cljs$core$IFn$_invoke$arity$variadic = G__19541__delegate;
return G__19541;
})()
;
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.table_filter.part_structure,args);
var child_args = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"part","part",77757738)], 0));
return part(new cljs.core.Keyword("re-com.table-filter","group","re-com.table-filter/group",-1466475490),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.table_filter.filter_group,new cljs.core.Keyword(null,"props","props",453281727),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([child_args,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"re-com","re-com",-2034768951),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part-fn","part-fn",1984437584),part], null),new cljs.core.Keyword(null,"group","group",582596132),internal_model,new cljs.core.Keyword(null,"update-state!","update-state!",1325813258),update_state_BANG_,new cljs.core.Keyword(null,"depth","depth",1768663640),(0),new cljs.core.Keyword(null,"max-depth","max-depth",127060793),max_depth], null)], 0))], null));
}
};
var G__19540 = function (var_args){
var p__19451 = null;
if (arguments.length > 0) {
var G__19564__i = 0, G__19564__a = new Array(arguments.length -  0);
while (G__19564__i < G__19564__a.length) {G__19564__a[G__19564__i] = arguments[G__19564__i + 0]; ++G__19564__i;}
  p__19451 = new cljs.core.IndexedSeq(G__19564__a,0,null);
} 
return G__19540__delegate.call(this,p__19451);};
G__19540.cljs$lang$maxFixedArity = 0;
G__19540.cljs$lang$applyTo = (function (arglist__19565){
var p__19451 = cljs.core.seq(arglist__19565);
return G__19540__delegate(p__19451);
});
G__19540.cljs$core$IFn$_invoke$arity$variadic = G__19540__delegate;
return G__19540;
})()
;
}));

(re_com.table_filter.table_filter.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_com.table_filter.table_filter.cljs$lang$applyTo = (function (seq19448){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19448));
}));


//# sourceMappingURL=re_com.table_filter.js.map
