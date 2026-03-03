goog.provide('re_com.nested_grid');
re_com.nested_grid.cell_args_desc = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-path","row-path",-709648669)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-path","column-path",-733367618)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"value","value",305978217)], null),re_com.args.children], null);
re_com.nested_grid.part_structure = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","wrapper","re-com.nested-grid/wrapper",-1866510015),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","corner-header-grid","re-com.nested-grid/corner-header-grid",-1096937690),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","corner-header","re-com.nested-grid/corner-header",-1624179948),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","corner-header-label","re-com.nested-grid/corner-header-label",-758365361),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","row-header-grid","re-com.nested-grid/row-header-grid",-826916806),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","row-header","re-com.nested-grid/row-header",-1715593243),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","row-header-label","re-com.nested-grid/row-header-label",-1216944026),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_grid.parts.row_header_label], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","column-header-grid","re-com.nested-grid/column-header-grid",926868360),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","column-header","re-com.nested-grid/column-header",-446298155),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","column-header-label","re-com.nested-grid/column-header-label",1378193949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_grid.parts.column_header_label], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","cell-grid","re-com.nested-grid/cell-grid",-1747762926),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","cell","re-com.nested-grid/cell",1997200967),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283),true,new cljs.core.Keyword(null,"args-desc","args-desc",1950738510),re_com.nested_grid.cell_args_desc], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","cell-label","re-com.nested-grid/cell-label",1071076492),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top-level-arg?","top-level-arg?",812791312),true], null)], null)], null)], null)], null);
re_com.nested_grid.parts_desc = ((re_com.config.include_args_desc_QMARK_)?re_com.part.describe(re_com.nested_grid.part_structure):null);
re_com.nested_grid.args_desc = (function (){var special_args = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-tree","row-tree",687483819),new cljs.core.Keyword(null,"default","default",-1987822328),"[]",new cljs.core.Keyword(null,"type","type",1174270348),"vector of row-specs or (nested) row-trees",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.vector_QMARK_], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-tree","column-tree",841938146),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"vector of column-specs or (nested) column-trees",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.vector_QMARK_], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-tree-depth","row-tree-depth",-1290478766),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Necessary to lay out the headers. Since ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," only traverses the visible part of each  header-tree, it cannot know ","how deep the entire tree is. When the deepest part of the tree is not visible, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," still needs to display a large enough grid area ","in the headers, so there is a place for it when it enters the view."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-tree-depth","column-tree-depth",-607656054),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Necessary to lay out the headers. Since ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," only traverses the visible part of each  header-tree, it cannot know ","how deep the entire tree is. When the deepest part of the tree is not visible, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," still needs to display a large enough grid area ","in the headers, so there is a place for it when it enters the view."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-height","row-height",527360749),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(20),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Controls the default main-axis size (i.e. height) of every row. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," overrides this size when a user resizes a row, ","or when the corresponding row-spec contains a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":size"], null)," key."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-width","column-width",405119380),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(40),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Controls the default main-axis size (i.e. width) of every column. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," overrides this size when a user resizes a column, ","or when the corresponding column-spec contains a ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":size"], null)," key."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(20),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Controls the default cross-axis size (i.e. width) of every column-header."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-header-width","row-header-width",-1813601584),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(40),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Controls the default cross-axis size (i.e. width) of every row-header."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"row-header-widths","row-header-widths",2008727642),new cljs.core.Keyword(null,"type","type",1174270348),"vector of integers | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,cljs.core.integer_QMARK_),re_com.util.deref_or_value_peek),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Each integer corresponds to a level of nesting in the header-tree, ","Controlling the cross-axis size of every header at that level. ","Overrides ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"row-header-width"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"column-header-heights","column-header-heights",1184593439),new cljs.core.Keyword(null,"type","type",1174270348),"vector of integers | r/atom",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,cljs.core.integer_QMARK_),re_com.util.deref_or_value_peek),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Each integer corresponds to a level of nesting in the header-tree, ","Controlling the cross-axis size of every header at that level.","Overrides ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"column-header-height"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-row-branches?","show-row-branches?",1970508230),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Displays a row of cells for every ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-path"], null),", not just those at the leaves of the tree. ","If a header has children, its path is a branch-path.","Otherwise, its path is a leaf-path.","For instance, the tree ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a [:b [:c]]]"], null)," has one leaf path ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a :b :c]"], null)," and two branch paths ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a] [:a :b]"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-column-branches?","show-column-branches?",2070603327),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Displays a row of cells for every ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-path"], null),", not just those at the leaves of the tree. ","If a header has children, its path is a branch-path.","Otherwise, its path is a leaf-path.","For instance, the tree ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a [:b [:c]]]"], null)," has one leaf path ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a :b [:c]]"], null)," and two branch paths ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"[:a] [:a :b]"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-root-headers?","show-root-headers?",482115222),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", hides the root of each header-tree, and excludes that root-header ","from the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-path"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-path"], null)," props ","which ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":nested-grid"], null),"passes to various parts. ","Each header-tree has a single header at its root ","(its children make up the rest of the tree).","In many cases, this root-header is not interesting to the user, so offer this prop to hide it."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"show-zebra-stripes?","show-zebra-stripes?",1314834236),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Adds a subtle background-color to each cell which appears in an even-numbered row.","Note: may affect virtualization performance, as it requires a full traversal of row-tree ","at mount time."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-init-export-fn","on-init-export-fn",2043615548),new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," calls this function once at mount-time, passing it an ","export function. We recommend storing the export function in an r/atom. ","This export function composes your passed-in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export-*"], null)," functions, which are required ","for this export function to work."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export","on-export",1803619391),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"function",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Called whenever the export button is clicked. ","Can expect to be passed several keyword arguments. ","Each argument is a 2-dimensional vector of strings.",new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":rows"], null)], null),": ","The entire grid laid out in rows."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":cells"], null)], null),": ","Just the cells, without any headers."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":corner-headers"], null)], null),": ","Just the spacers in the top-left corner."], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-headers"], null)], null),": ","Just the row headers"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-headers"], null)], null),": ","Just the column headers"], null)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export-cell","on-export-cell",1315067067),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"{:keys [row-path column-path]} -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":cell"], null),", but its return value must be a string. ","At export time, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," maps "," this function over the cells, passing the results to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null),". ","See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-init-export-fn"], null)," for how to invoke the export."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export-row-header","on-export-row-header",181805132),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"{:keys [row-path column-path]} -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-header-label"], null),", but its return value must be a string. ","At export time, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," maps ","this function over the row-headers, passing the results to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null),". ","See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-init-export-fn"], null)," for how to invoke the export."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export-column-header","on-export-column-header",-899049368),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"{:keys [row-path column-path]} -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-header-label"], null),", but its return value must be a string. ","At export time, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," maps ","this function over the column-headers, passing the results to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null),". ","See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-init-export-fn"], null)," for how to invoke the export."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-export-corner-header","on-export-corner-header",-941692713),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"{:keys [row-path corner-path]} -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.ifn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":corner-header-label"], null),", but its return value must be a string. ","At export time, ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," maps ","this function over the corner-headers, passing the results to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-export"], null),". ","See ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-init-export-fn"], null)," for how to invoke the export."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sticky-child?","sticky-child?",932069231),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Causes the grid headers to \"stick\" to the parent container, ","instead of nested-grid's own the wrapper part. Works best in combination ","with ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"{:virtualize? false}"], null)," and without any height or width constraint."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sticky-left","sticky-left",-1528709698),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Offset (in pixels) from the container left edge - for use with ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":sticky-child?"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"sticky-top","sticky-top",-851837397),new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.number_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Offset (in pixels) from the container top edge - for use with ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":sticky-child?"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"virtualize?","virtualize?",-1012980848),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 29, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null),"'s most difficult tasks are deriving paths from header-trees ","and rendering cells at each path intersection. Their complexity is proportional to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"(* (size row-tree) (size column-tree))"], null),". ","When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":virtualize?"], null)," is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," does all the work on each render. ","As long as nothing triggers a re-render, this is fine. Scrolling does not trigger a re-render. ","That means scrolling is very smooth, but resizing, changing or moving a row or column ","could be painfully slow. When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":virtualize?"], null)," is ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nested-grid"], null)," relies on a cached traversal. It still traverses both trees at mount time, ","But subsequent traversals are much faster. Rendering is faster as well, only running ","for the cells which appear in the visible scroll area. Scrolling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"does"], null)," trigger a re-render, "," mounting any cells which enter the scroll area, and unmounting those which exit. ","That means scrolling may not be quite as smooth, but overall performance (e.g. resizing) ","can be better, especially for very large trees with millions of paths"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"theme-cells?","theme-cells?",129212611),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"false",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Improves performance by disabling the theme system on the following-parts: ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-header"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":column-header"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":cell"], null)], null)], null),"Those parts will not be passed any props other than row-path & column-path.","To style these parts, we recommend using css to target the descendents of container parts, such as ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":row-header-grid"], null),". This is currently done in ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"re-com.css"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize?","resize?",459924349),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", display draggable resize buttons across all row & column boundaries. ","This can be overridden by the other ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":resize-*?"], null)," props. ","NOTE: For a row or column to be resizable along its main axis, its spec must be a map."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize-row-height?","resize-row-height?",1988704991),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", display draggable resize buttons across the main-axis dimension of row headers. ","NOTE: For a row-header to be resizable, its row-spec must be a map."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize-column-header-height?","resize-column-header-height?",-478677866),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", display draggable resize buttons across the cross-axis dimension of column headers."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize-row-header-height?","resize-row-header-height?",-801316514),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", display draggable resize buttons across the main-axis dimension of rows. ","NOTE: For a row to be resizable, its row-spec must be a map."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize-column-width?","resize-column-width?",-1090814270),new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"default","default",-1987822328),"true",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"When ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"true"], null),", display draggable resize buttons across the cross-axis dimension of columns.","NOTE: For a column to be resizable, its column-spec must be a map."], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"default","default",-1987822328),"internal fn",new cljs.core.Keyword(null,"description","description",-1428560544),"TBD"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Applies to the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":wrapper"], null)," part."], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Applies to the ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":wrapper"], null)," part."], null)], null)], true);
if(re_com.config.include_args_desc_QMARK_){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(special_args,re_com.theme.args_desc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([re_com.part.describe_args(re_com.nested_grid.part_structure)], 0)));
} else {
return null;
}
})();
re_com.nested_grid.safe_assoc = (function re_com$nested_grid$safe_assoc(v,idx,val){
if((idx < cljs.core.count(v))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,idx,val);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(v,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((idx - cljs.core.count(v)),null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [val], null));
}
});
re_com.nested_grid.nested_grid = (function re_com$nested_grid$nested_grid(p__18917){
var map__18918 = p__18917;
var map__18918__$1 = cljs.core.__destructure_map(map__18918);
var row_header_widths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"row-header-widths","row-header-widths",2008727642));
var pre_theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"pre-theme","pre-theme",-1454266181));
var on_export_cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"on-export-cell","on-export-cell",1315067067));
var on_init_export_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"on-init-export-fn","on-init-export-fn",2043615548));
var column_header_heights = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"column-header-heights","column-header-heights",1184593439));
var show_column_branches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"show-column-branches?","show-column-branches?",2070603327));
var on_export = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18918__$1,new cljs.core.Keyword(null,"on-export","on-export",1803619391),(function re_com$nested_grid$nested_grid_$_on_export(p__18922){
var map__18923 = p__18922;
var map__18923__$1 = cljs.core.__destructure_map(map__18923);
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18923__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
return re_com.util.clipboard_write_BANG_(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(re_com.util.tsv_line,rows)));
}));
var column_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"column-tree","column-tree",841938146));
var show_row_branches_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"show-row-branches?","show-row-branches?",1970508230));
var on_export_column_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"on-export-column-header","on-export-column-header",-899049368));
var column_tree_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"column-tree-depth","column-tree-depth",-607656054));
var row_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"row-tree","row-tree",687483819));
var on_export_row_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"on-export-row-header","on-export-row-header",181805132));
var row_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18918__$1,new cljs.core.Keyword(null,"row-height","row-height",527360749),(20));
var row_header_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18918__$1,new cljs.core.Keyword(null,"row-header-width","row-header-width",-1813601584),(40));
var virtualize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18918__$1,new cljs.core.Keyword(null,"virtualize?","virtualize?",-1012980848),true);
var theme = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880));
var column_header_height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18918__$1,new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),(20));
var row_tree_depth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"row-tree-depth","row-tree-depth",-1290478766));
var column_width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18918__$1,new cljs.core.Keyword(null,"column-width","column-width",405119380),(40));
var show_root_headers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18918__$1,new cljs.core.Keyword(null,"show-root-headers?","show-root-headers?",482115222),true);
var on_export_corner_header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18918__$1,new cljs.core.Keyword(null,"on-export-corner-header","on-export-corner-header",-941692713));
var vec__18929 = cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$1((function (){
return reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}));
var scroll_left = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(0),null);
var scroll_top = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(1),null);
var content_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(2),null);
var content_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(3),null);
var _BANG_wrapper_ref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(4),null);
var scroll_listener = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(5),null);
var resize_observer = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(6),null);
var overlay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(7),null);
var hide_resizers_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18929,(8),null);
var wrapper_ref_BANG_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,_BANG_wrapper_ref);
var on_scroll_BANG_ = (function (p1__18903_SHARP_){
cljs.core.reset_BANG_(scroll_left,p1__18903_SHARP_.target.scrollLeft);

cljs.core.reset_BANG_(scroll_top,p1__18903_SHARP_.target.scrollTop);

var temp__5823__auto___19453 = cljs.core.deref(hide_resizers_QMARK_);
if(cljs.core.truth_(temp__5823__auto___19453)){
var timeout_19454 = temp__5823__auto___19453;
clearTimeout(timeout_19454);
} else {
}

return cljs.core.reset_BANG_(hide_resizers_QMARK_,setTimeout((function (){
return cljs.core.reset_BANG_(hide_resizers_QMARK_,null);
}),(300)));
});
var on_resize_BANG_ = (function (p1__18904_SHARP_){
cljs.core.reset_BANG_(content_height,(p1__18904_SHARP_[(0)]).contentRect.height);

return cljs.core.reset_BANG_(content_width,(p1__18904_SHARP_[(0)]).contentRect.width);
});
var prev_row_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(row_tree));
var prev_column_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(column_tree));
var prev_row_header_widths = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(row_header_widths));
var prev_column_header_heights = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(column_header_heights));
var internal_row_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(row_tree));
var internal_column_tree = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(column_tree));
var internal_on_export = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export));
var internal_on_export_cell = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export_cell));
var internal_on_export_column_header = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export_column_header));
var internal_on_export_row_header = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export_row_header));
var internal_on_export_corner_header = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(on_export_corner_header));
var row_size_cache = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var column_size_cache = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var row_traversal = reagent.ratom.make_reaction((function (){
return re_com.nested_grid.util.window((function (){var G__18940 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968),cljs.core.deref(internal_row_tree),new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),row_size_cache,new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992),show_row_branches_QMARK_,new cljs.core.Keyword(null,"default-size","default-size",-56245282),re_com.util.deref_or_value(row_height),new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034),cljs.core.not(show_root_headers_QMARK_)], null);
if(cljs.core.truth_(virtualize_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__18940,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"window-start","window-start",-1535255967),((function (){var or__5142__auto__ = cljs.core.deref(scroll_top);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() - (20)),new cljs.core.Keyword(null,"window-end","window-end",-1966160494),(cljs.core.deref(scroll_top) + cljs.core.deref(content_height))], null)], 0));
} else {
return G__18940;
}
})());
}));
var column_traversal = reagent.ratom.make_reaction((function (){
return re_com.nested_grid.util.window((function (){var G__18942 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968),cljs.core.deref(internal_column_tree),new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),column_size_cache,new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992),show_column_branches_QMARK_,new cljs.core.Keyword(null,"default-size","default-size",-56245282),re_com.util.deref_or_value(column_width),new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034),cljs.core.not(show_root_headers_QMARK_)], null);
if(cljs.core.truth_(virtualize_QMARK_)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__18942,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"window-start","window-start",-1535255967),((function (){var or__5142__auto__ = cljs.core.deref(scroll_left);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return (0);
}
})() - (20)),new cljs.core.Keyword(null,"window-end","window-end",-1966160494),((cljs.core.deref(scroll_left) + cljs.core.deref(content_width)) + (50))], null)], 0));
} else {
return G__18942;
}
})());
}));
var complete_row_traversal = reagent.ratom.make_reaction((function (){
return re_com.nested_grid.util.window(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968),cljs.core.deref(internal_row_tree),new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),row_size_cache,new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992),show_row_branches_QMARK_,new cljs.core.Keyword(null,"default-size","default-size",-56245282),re_com.util.deref_or_value(row_height),new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034),cljs.core.not(show_root_headers_QMARK_),new cljs.core.Keyword(null,"skip-tail?","skip-tail?",449940680),false], null));
}));
var showing_QMARK_ = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"show?","show?",1543842127),new cljs.core.Keyword(null,"leaf?","leaf?",445442965)),cljs.core.meta);
var row_keypath__GT_showing_index = reagent.ratom.make_reaction((function (){
return cljs.core.zipmap(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(showing_QMARK_,new cljs.core.Keyword(null,"keypaths","keypaths",1637512847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(complete_row_traversal))),cljs.core.range.cljs$core$IFn$_invoke$arity$0());
}));
var complete_column_traversal = reagent.ratom.make_reaction((function (){
return re_com.nested_grid.util.window(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"header-tree","header-tree",-1496345968),cljs.core.deref(internal_column_tree),new cljs.core.Keyword(null,"size-cache","size-cache",-1504116338),column_size_cache,new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"show-branch-cells?","show-branch-cells?",993480992),show_column_branches_QMARK_,new cljs.core.Keyword(null,"default-size","default-size",-56245282),re_com.util.deref_or_value(column_width),new cljs.core.Keyword(null,"hide-root?","hide-root?",-1993535034),cljs.core.not(show_root_headers_QMARK_),new cljs.core.Keyword(null,"skip-tail?","skip-tail?",449940680),false], null));
}));
var column_depth = reagent.ratom.make_reaction((function (){
var or__5142__auto__ = re_com.util.deref_or_value(column_tree_depth);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__18951 = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
if(cljs.core.not(show_root_headers_QMARK_)){
return (G__18951 - (1));
} else {
return G__18951;
}
}
}));
var row_depth = reagent.ratom.make_reaction((function (){
var or__5142__auto__ = re_com.util.deref_or_value(row_tree_depth);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var G__18956 = new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
if(cljs.core.not(show_root_headers_QMARK_)){
return (G__18956 - (1));
} else {
return G__18956;
}
}
}));
var internal_row_header_widths = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = re_com.util.deref_or_value(row_header_widths);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_depth),re_com.util.deref_or_value(row_header_width)));
}
})());
var internal_column_header_heights = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((function (){var or__5142__auto__ = re_com.util.deref_or_value(column_header_heights);
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return cljs.core.vec(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_depth),re_com.util.deref_or_value(column_header_height)));
}
})());
var safe_column_header_heights = reagent.ratom.make_reaction((function (){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_depth),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18906_SHARP_){
var or__5142__auto__ = p1__18906_SHARP_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return column_header_height;
}
}),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_column_header_heights),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(column_header_height))))));
}));
var safe_row_header_widths = reagent.ratom.make_reaction((function (){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__18907_SHARP_){
var or__5142__auto__ = p1__18907_SHARP_;
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
return row_header_width;
}
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_depth),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(internal_row_header_widths),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(re_com.util.deref_or_value(row_header_width))))));
}));
var column_header_height_total = reagent.ratom.make_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.deref(safe_column_header_heights));
}));
var column_width_total = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"sum-size","sum-size",1340005431).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
}));
var column_paths = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"header-paths","header-paths",1334163001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
}));
var column_keypaths = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"keypaths","keypaths",1637512847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
}));
var column_sizes = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"sizes","sizes",-273528126).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_traversal));
}));
var column_template = reagent.ratom.make_reaction((function (){
return re_com.nested_grid.util.grid_template(cljs.core.deref(column_traversal));
}));
var column_cross_template = reagent.ratom.make_reaction((function (){
return re_com.nested_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(safe_column_header_heights));
}));
var row_header_width_total = reagent.ratom.make_reaction((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.deref(safe_row_header_widths));
}));
var row_height_total = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"sum-size","sum-size",1340005431).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
}));
var row_paths = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"header-paths","header-paths",1334163001).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
}));
var row_keypaths = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"keypaths","keypaths",1637512847).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
}));
var row_sizes = reagent.ratom.make_reaction((function (){
return new cljs.core.Keyword(null,"sizes","sizes",-273528126).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_traversal));
}));
var row_template = reagent.ratom.make_reaction((function (){
return re_com.nested_grid.util.grid_template(cljs.core.deref(row_traversal));
}));
var row_cross_template = reagent.ratom.make_reaction((function (){
return re_com.nested_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(safe_row_header_widths));
}));
var corner_header_edges = (function (p__18971){
var map__18972 = p__18971;
var map__18972__$1 = cljs.core.__destructure_map(map__18972);
var rd = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18972__$1,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth));
var cd = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18972__$1,new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth));
var row_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18972__$1,new cljs.core.Keyword(null,"row-index","row-index",-828710296));
var column_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18972__$1,new cljs.core.Keyword(null,"column-index","column-index",470522340));
var G__18973 = cljs.core.PersistentHashSet.EMPTY;
var G__18973__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18973,new cljs.core.Keyword(null,"top","top",-1856271961)):G__18973);
var G__18973__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_index,(cd - (1))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18973__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018)):G__18973__$1);
var G__18973__$3 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(0)))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18973__$2,new cljs.core.Keyword(null,"left","left",-399115937)):G__18973__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(column_index,(rd - (1)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18973__$3,new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return G__18973__$3;
}
});
var export_fn = (function re_com$nested_grid$nested_grid_$_export_fn(){
var map__18989 = cljs.core.deref(complete_row_traversal);
var map__18989__$1 = cljs.core.__destructure_map(map__18989);
var row_paths__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18989__$1,new cljs.core.Keyword(null,"header-paths","header-paths",1334163001));
var map__18990 = cljs.core.deref(complete_column_traversal);
var map__18990__$1 = cljs.core.__destructure_map(map__18990);
var column_paths__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18990__$1,new cljs.core.Keyword(null,"header-paths","header-paths",1334163001));
var on_export_cell__$1 = cljs.core.deref(internal_on_export_cell);
var on_export_column_header__$1 = cljs.core.deref(internal_on_export_column_header);
var on_export_row_header__$1 = cljs.core.deref(internal_on_export_row_header);
var on_export_corner_header__$1 = cljs.core.deref(internal_on_export_corner_header);
var row_headers = (function (){var iter__5628__auto__ = (function re_com$nested_grid$nested_grid_$_export_fn_$_iter__18991(s__18992){
return (new cljs.core.LazySeq(null,(function (){
var s__18992__$1 = s__18992;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__18992__$1);
if(temp__5823__auto__){
var s__18992__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__18992__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__18992__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__18994 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__18993 = (0);
while(true){
if((i__18993 < size__5627__auto__)){
var showing_row_path = cljs.core._nth(c__5626__auto__,i__18993);
if(cljs.core.truth_(showing_QMARK_(showing_row_path))){
var showing_row_path__$1 = (function (){var G__18997 = showing_row_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__18997,(1));
} else {
return G__18997;
}
})();
var this_depth = cljs.core.count(showing_row_path__$1);
cljs.core.chunk_append(b__18994,(function (){var iter__5628__auto__ = ((function (i__18993,s__18992__$1,showing_row_path__$1,this_depth,showing_row_path,c__5626__auto__,size__5627__auto__,b__18994,s__18992__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_grid$nested_grid_$_export_fn_$_iter__18991_$_iter__19000(s__19001){
return (new cljs.core.LazySeq(null,((function (i__18993,s__18992__$1,showing_row_path__$1,this_depth,showing_row_path,c__5626__auto__,size__5627__auto__,b__18994,s__18992__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__19001__$1 = s__19001;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__19001__$1);
if(temp__5823__auto____$1){
var s__19001__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19001__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first(s__19001__$2);
var size__5627__auto____$1 = cljs.core.count(c__5626__auto____$1);
var b__19003 = cljs.core.chunk_buffer(size__5627__auto____$1);
if((function (){var i__19002 = (0);
while(true){
if((i__19002 < size__5627__auto____$1)){
var i = cljs.core._nth(c__5626__auto____$1,i__19002);
var row_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_row_path__$1,(0),cljs.core.min.cljs$core$IFn$_invoke$arity$2((i + (1)),this_depth));
var map__19005 = cljs.core.meta(row_path);
var map__19005__$1 = cljs.core.__destructure_map(map__19005);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19005__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path,new cljs.core.Keyword(null,"path","path",-188191168),row_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
cljs.core.chunk_append(b__19003,(on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_row_header__$1.call(null,props)));

var G__19459 = (i__19002 + (1));
i__19002 = G__19459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19003),re_com$nested_grid$nested_grid_$_export_fn_$_iter__18991_$_iter__19000(cljs.core.chunk_rest(s__19001__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19003),null);
}
} else {
var i = cljs.core.first(s__19001__$2);
var row_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_row_path__$1,(0),cljs.core.min.cljs$core$IFn$_invoke$arity$2((i + (1)),this_depth));
var map__19008 = cljs.core.meta(row_path);
var map__19008__$1 = cljs.core.__destructure_map(map__19008);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19008__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path,new cljs.core.Keyword(null,"path","path",-188191168),row_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
return cljs.core.cons((on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_row_header__$1.call(null,props)),re_com$nested_grid$nested_grid_$_export_fn_$_iter__18991_$_iter__19000(cljs.core.rest(s__19001__$2)));
}
} else {
return null;
}
break;
}
});})(i__18993,s__18992__$1,showing_row_path__$1,this_depth,showing_row_path,c__5626__auto__,size__5627__auto__,b__18994,s__18992__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(i__18993,s__18992__$1,showing_row_path__$1,this_depth,showing_row_path,c__5626__auto__,size__5627__auto__,b__18994,s__18992__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})());

var G__19461 = (i__18993 + (1));
i__18993 = G__19461;
continue;
} else {
var G__19463 = (i__18993 + (1));
i__18993 = G__19463;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__18994),re_com$nested_grid$nested_grid_$_export_fn_$_iter__18991(cljs.core.chunk_rest(s__18992__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__18994),null);
}
} else {
var showing_row_path = cljs.core.first(s__18992__$2);
if(cljs.core.truth_(showing_QMARK_(showing_row_path))){
var showing_row_path__$1 = (function (){var G__19012 = showing_row_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19012,(1));
} else {
return G__19012;
}
})();
var this_depth = cljs.core.count(showing_row_path__$1);
return cljs.core.cons((function (){var iter__5628__auto__ = ((function (s__18992__$1,showing_row_path__$1,this_depth,showing_row_path,s__18992__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_grid$nested_grid_$_export_fn_$_iter__18991_$_iter__19013(s__19014){
return (new cljs.core.LazySeq(null,((function (s__18992__$1,showing_row_path__$1,this_depth,showing_row_path,s__18992__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__19014__$1 = s__19014;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__19014__$1);
if(temp__5823__auto____$1){
var s__19014__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19014__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19014__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19016 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19015 = (0);
while(true){
if((i__19015 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__19015);
var row_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_row_path__$1,(0),cljs.core.min.cljs$core$IFn$_invoke$arity$2((i + (1)),this_depth));
var map__19017 = cljs.core.meta(row_path);
var map__19017__$1 = cljs.core.__destructure_map(map__19017);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19017__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path,new cljs.core.Keyword(null,"path","path",-188191168),row_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
cljs.core.chunk_append(b__19016,(on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_row_header__$1.call(null,props)));

var G__19467 = (i__19015 + (1));
i__19015 = G__19467;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19016),re_com$nested_grid$nested_grid_$_export_fn_$_iter__18991_$_iter__19013(cljs.core.chunk_rest(s__19014__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19016),null);
}
} else {
var i = cljs.core.first(s__19014__$2);
var row_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_row_path__$1,(0),cljs.core.min.cljs$core$IFn$_invoke$arity$2((i + (1)),this_depth));
var map__19018 = cljs.core.meta(row_path);
var map__19018__$1 = cljs.core.__destructure_map(map__19018);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19018__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path,new cljs.core.Keyword(null,"path","path",-188191168),row_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
return cljs.core.cons((on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_row_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_row_header__$1.call(null,props)),re_com$nested_grid$nested_grid_$_export_fn_$_iter__18991_$_iter__19013(cljs.core.rest(s__19014__$2)));
}
} else {
return null;
}
break;
}
});})(s__18992__$1,showing_row_path__$1,this_depth,showing_row_path,s__18992__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(s__18992__$1,showing_row_path__$1,this_depth,showing_row_path,s__18992__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})(),re_com$nested_grid$nested_grid_$_export_fn_$_iter__18991(cljs.core.rest(s__18992__$2)));
} else {
var G__19473 = cljs.core.rest(s__18992__$2);
s__18992__$1 = G__19473;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__((function (){var G__19019 = row_paths__$1;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.rest(G__19019);
} else {
return G__19019;
}
})());
})();
var column_headers = (function (){var iter__5628__auto__ = (function re_com$nested_grid$nested_grid_$_export_fn_$_iter__19022(s__19023){
return (new cljs.core.LazySeq(null,(function (){
var s__19023__$1 = s__19023;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19023__$1);
if(temp__5823__auto__){
var s__19023__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19023__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19023__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19025 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19024 = (0);
while(true){
if((i__19024 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__19024);
cljs.core.chunk_append(b__19025,(function (){var iter__5628__auto__ = ((function (i__19024,i,c__5626__auto__,size__5627__auto__,b__19025,s__19023__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_grid$nested_grid_$_export_fn_$_iter__19022_$_iter__19027(s__19028){
return (new cljs.core.LazySeq(null,((function (i__19024,i,c__5626__auto__,size__5627__auto__,b__19025,s__19023__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__19028__$1 = s__19028;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__19028__$1);
if(temp__5823__auto____$1){
var s__19028__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19028__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first(s__19028__$2);
var size__5627__auto____$1 = cljs.core.count(c__5626__auto____$1);
var b__19030 = cljs.core.chunk_buffer(size__5627__auto____$1);
if((function (){var i__19029 = (0);
while(true){
if((i__19029 < size__5627__auto____$1)){
var showing_column_path = cljs.core._nth(c__5626__auto____$1,i__19029);
if(cljs.core.truth_(showing_QMARK_(showing_column_path))){
var showing_column_path__$1 = (function (){var G__19034 = showing_column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19034,(1));
} else {
return G__19034;
}
})();
var this_depth = cljs.core.count(showing_column_path__$1);
var column_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_column_path__$1,(0),cljs.core.min.cljs$core$IFn$_invoke$arity$2((i + (1)),this_depth));
var map__19033 = cljs.core.meta(column_path);
var map__19033__$1 = cljs.core.__destructure_map(map__19033);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19033__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path,new cljs.core.Keyword(null,"path","path",-188191168),column_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
cljs.core.chunk_append(b__19030,(on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_column_header__$1.call(null,props)));

var G__19486 = (i__19029 + (1));
i__19029 = G__19486;
continue;
} else {
var G__19487 = (i__19029 + (1));
i__19029 = G__19487;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19030),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19022_$_iter__19027(cljs.core.chunk_rest(s__19028__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19030),null);
}
} else {
var showing_column_path = cljs.core.first(s__19028__$2);
if(cljs.core.truth_(showing_QMARK_(showing_column_path))){
var showing_column_path__$1 = (function (){var G__19039 = showing_column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19039,(1));
} else {
return G__19039;
}
})();
var this_depth = cljs.core.count(showing_column_path__$1);
var column_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_column_path__$1,(0),cljs.core.min.cljs$core$IFn$_invoke$arity$2((i + (1)),this_depth));
var map__19038 = cljs.core.meta(column_path);
var map__19038__$1 = cljs.core.__destructure_map(map__19038);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19038__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path,new cljs.core.Keyword(null,"path","path",-188191168),column_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
return cljs.core.cons((on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_column_header__$1.call(null,props)),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19022_$_iter__19027(cljs.core.rest(s__19028__$2)));
} else {
var G__19488 = cljs.core.rest(s__19028__$2);
s__19028__$1 = G__19488;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__19024,i,c__5626__auto__,size__5627__auto__,b__19025,s__19023__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(i__19024,i,c__5626__auto__,size__5627__auto__,b__19025,s__19023__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5628__auto__((function (){var G__19043 = column_paths__$1;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.rest(G__19043);
} else {
return G__19043;
}
})());
})());

var G__19492 = (i__19024 + (1));
i__19024 = G__19492;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19025),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19022(cljs.core.chunk_rest(s__19023__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19025),null);
}
} else {
var i = cljs.core.first(s__19023__$2);
return cljs.core.cons((function (){var iter__5628__auto__ = ((function (i,s__19023__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_grid$nested_grid_$_export_fn_$_iter__19022_$_iter__19044(s__19045){
return (new cljs.core.LazySeq(null,(function (){
var s__19045__$1 = s__19045;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__19045__$1);
if(temp__5823__auto____$1){
var s__19045__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19045__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19045__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19047 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19046 = (0);
while(true){
if((i__19046 < size__5627__auto__)){
var showing_column_path = cljs.core._nth(c__5626__auto__,i__19046);
if(cljs.core.truth_(showing_QMARK_(showing_column_path))){
var showing_column_path__$1 = (function (){var G__19049 = showing_column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19049,(1));
} else {
return G__19049;
}
})();
var this_depth = cljs.core.count(showing_column_path__$1);
var column_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_column_path__$1,(0),cljs.core.min.cljs$core$IFn$_invoke$arity$2((i + (1)),this_depth));
var map__19048 = cljs.core.meta(column_path);
var map__19048__$1 = cljs.core.__destructure_map(map__19048);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19048__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path,new cljs.core.Keyword(null,"path","path",-188191168),column_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
cljs.core.chunk_append(b__19047,(on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_column_header__$1.call(null,props)));

var G__19497 = (i__19046 + (1));
i__19046 = G__19497;
continue;
} else {
var G__19498 = (i__19046 + (1));
i__19046 = G__19498;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19047),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19022_$_iter__19044(cljs.core.chunk_rest(s__19045__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19047),null);
}
} else {
var showing_column_path = cljs.core.first(s__19045__$2);
if(cljs.core.truth_(showing_QMARK_(showing_column_path))){
var showing_column_path__$1 = (function (){var G__19051 = showing_column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19051,(1));
} else {
return G__19051;
}
})();
var this_depth = cljs.core.count(showing_column_path__$1);
var column_path = cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(showing_column_path__$1,(0),cljs.core.min.cljs$core$IFn$_invoke$arity$2((i + (1)),this_depth));
var map__19050 = cljs.core.meta(column_path);
var map__19050__$1 = cljs.core.__destructure_map(map__19050);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19050__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path,new cljs.core.Keyword(null,"path","path",-188191168),column_path,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_], null);
return cljs.core.cons((on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_column_header__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_column_header__$1.call(null,props)),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19022_$_iter__19044(cljs.core.rest(s__19045__$2)));
} else {
var G__19503 = cljs.core.rest(s__19045__$2);
s__19045__$1 = G__19503;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__19023__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5628__auto__((function (){var G__19054 = column_paths__$1;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.rest(G__19054);
} else {
return G__19054;
}
})());
})(),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19022(cljs.core.rest(s__19023__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_depth)));
})();
var corner_headers = (function (){var iter__5628__auto__ = (function re_com$nested_grid$nested_grid_$_export_fn_$_iter__19056(s__19057){
return (new cljs.core.LazySeq(null,(function (){
var s__19057__$1 = s__19057;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19057__$1);
if(temp__5823__auto__){
var s__19057__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19057__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19057__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19059 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19058 = (0);
while(true){
if((i__19058 < size__5627__auto__)){
var row_index = cljs.core._nth(c__5626__auto__,i__19058);
cljs.core.chunk_append(b__19059,(function (){var iter__5628__auto__ = ((function (i__19058,row_index,c__5626__auto__,size__5627__auto__,b__19059,s__19057__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_grid$nested_grid_$_export_fn_$_iter__19056_$_iter__19060(s__19061){
return (new cljs.core.LazySeq(null,((function (i__19058,row_index,c__5626__auto__,size__5627__auto__,b__19059,s__19057__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__19061__$1 = s__19061;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__19061__$1);
if(temp__5823__auto____$1){
var s__19061__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19061__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first(s__19061__$2);
var size__5627__auto____$1 = cljs.core.count(c__5626__auto____$1);
var b__19063 = cljs.core.chunk_buffer(size__5627__auto____$1);
if((function (){var i__19062 = (0);
while(true){
if((i__19062 < size__5627__auto____$1)){
var column_index = cljs.core._nth(c__5626__auto____$1,i__19062);
var props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth),new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth)], null);
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),corner_header_edges(props)], null)], 0));
cljs.core.chunk_append(b__19063,(on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1(props__$1) : on_export_corner_header__$1.call(null,props__$1)));

var G__19509 = (i__19062 + (1));
i__19062 = G__19509;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19063),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19056_$_iter__19060(cljs.core.chunk_rest(s__19061__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19063),null);
}
} else {
var column_index = cljs.core.first(s__19061__$2);
var props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth),new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth)], null);
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),corner_header_edges(props)], null)], 0));
return cljs.core.cons((on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1(props__$1) : on_export_corner_header__$1.call(null,props__$1)),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19056_$_iter__19060(cljs.core.rest(s__19061__$2)));
}
} else {
return null;
}
break;
}
});})(i__19058,row_index,c__5626__auto__,size__5627__auto__,b__19059,s__19057__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(i__19058,row_index,c__5626__auto__,size__5627__auto__,b__19059,s__19057__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})());

var G__19511 = (i__19058 + (1));
i__19058 = G__19511;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19059),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19056(cljs.core.chunk_rest(s__19057__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19059),null);
}
} else {
var row_index = cljs.core.first(s__19057__$2);
return cljs.core.cons((function (){var iter__5628__auto__ = ((function (row_index,s__19057__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_grid$nested_grid_$_export_fn_$_iter__19056_$_iter__19071(s__19072){
return (new cljs.core.LazySeq(null,(function (){
var s__19072__$1 = s__19072;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__19072__$1);
if(temp__5823__auto____$1){
var s__19072__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19072__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19072__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19074 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19073 = (0);
while(true){
if((i__19073 < size__5627__auto__)){
var column_index = cljs.core._nth(c__5626__auto__,i__19073);
var props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth),new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth)], null);
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),corner_header_edges(props)], null)], 0));
cljs.core.chunk_append(b__19074,(on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1(props__$1) : on_export_corner_header__$1.call(null,props__$1)));

var G__19513 = (i__19073 + (1));
i__19073 = G__19513;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19074),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19056_$_iter__19071(cljs.core.chunk_rest(s__19072__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19074),null);
}
} else {
var column_index = cljs.core.first(s__19072__$2);
var props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"row-depth","row-depth",-1080529687),cljs.core.deref(row_depth),new cljs.core.Keyword(null,"column-depth","column-depth",-1033797001),cljs.core.deref(column_depth)], null);
var props__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),corner_header_edges(props)], null)], 0));
return cljs.core.cons((on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_corner_header__$1.cljs$core$IFn$_invoke$arity$1(props__$1) : on_export_corner_header__$1.call(null,props__$1)),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19056_$_iter__19071(cljs.core.rest(s__19072__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(row_index,s__19057__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})(),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19056(cljs.core.rest(s__19057__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_depth)));
})();
var cells = (function (){var iter__5628__auto__ = (function re_com$nested_grid$nested_grid_$_export_fn_$_iter__19085(s__19086){
return (new cljs.core.LazySeq(null,(function (){
var s__19086__$1 = s__19086;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19086__$1);
if(temp__5823__auto__){
var s__19086__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19086__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19086__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19088 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19087 = (0);
while(true){
if((i__19087 < size__5627__auto__)){
var row_path = cljs.core._nth(c__5626__auto__,i__19087);
if(cljs.core.truth_(showing_QMARK_(row_path))){
var row_path__$1 = (function (){var G__19092 = row_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19092,(1));
} else {
return G__19092;
}
})();
cljs.core.chunk_append(b__19088,(function (){var iter__5628__auto__ = ((function (i__19087,s__19086__$1,row_path__$1,row_path,c__5626__auto__,size__5627__auto__,b__19088,s__19086__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_grid$nested_grid_$_export_fn_$_iter__19085_$_iter__19094(s__19095){
return (new cljs.core.LazySeq(null,((function (i__19087,s__19086__$1,row_path__$1,row_path,c__5626__auto__,size__5627__auto__,b__19088,s__19086__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__19095__$1 = s__19095;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__19095__$1);
if(temp__5823__auto____$1){
var s__19095__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19095__$2)){
var c__5626__auto____$1 = cljs.core.chunk_first(s__19095__$2);
var size__5627__auto____$1 = cljs.core.count(c__5626__auto____$1);
var b__19097 = cljs.core.chunk_buffer(size__5627__auto____$1);
if((function (){var i__19096 = (0);
while(true){
if((i__19096 < size__5627__auto____$1)){
var column_path = cljs.core._nth(c__5626__auto____$1,i__19096);
if(cljs.core.truth_(showing_QMARK_(column_path))){
var column_path__$1 = (function (){var G__19102 = column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19102,(1));
} else {
return G__19102;
}
})();
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path__$1,new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path__$1], null);
cljs.core.chunk_append(b__19097,(on_export_cell__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_cell__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_cell__$1.call(null,props)));

var G__19520 = (i__19096 + (1));
i__19096 = G__19520;
continue;
} else {
var G__19521 = (i__19096 + (1));
i__19096 = G__19521;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19097),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19085_$_iter__19094(cljs.core.chunk_rest(s__19095__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19097),null);
}
} else {
var column_path = cljs.core.first(s__19095__$2);
if(cljs.core.truth_(showing_QMARK_(column_path))){
var column_path__$1 = (function (){var G__19114 = column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19114,(1));
} else {
return G__19114;
}
})();
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path__$1,new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path__$1], null);
return cljs.core.cons((on_export_cell__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_cell__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_cell__$1.call(null,props)),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19085_$_iter__19094(cljs.core.rest(s__19095__$2)));
} else {
var G__19523 = cljs.core.rest(s__19095__$2);
s__19095__$1 = G__19523;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__19087,s__19086__$1,row_path__$1,row_path,c__5626__auto__,size__5627__auto__,b__19088,s__19086__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(i__19087,s__19086__$1,row_path__$1,row_path,c__5626__auto__,size__5627__auto__,b__19088,s__19086__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5628__auto__(column_paths__$1);
})());

var G__19524 = (i__19087 + (1));
i__19087 = G__19524;
continue;
} else {
var G__19525 = (i__19087 + (1));
i__19087 = G__19525;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19088),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19085(cljs.core.chunk_rest(s__19086__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19088),null);
}
} else {
var row_path = cljs.core.first(s__19086__$2);
if(cljs.core.truth_(showing_QMARK_(row_path))){
var row_path__$1 = (function (){var G__19120 = row_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19120,(1));
} else {
return G__19120;
}
})();
return cljs.core.cons((function (){var iter__5628__auto__ = ((function (s__19086__$1,row_path__$1,row_path,s__19086__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_grid$nested_grid_$_export_fn_$_iter__19085_$_iter__19122(s__19123){
return (new cljs.core.LazySeq(null,((function (s__19086__$1,row_path__$1,row_path,s__19086__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__19123__$1 = s__19123;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__19123__$1);
if(temp__5823__auto____$1){
var s__19123__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19123__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19123__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19125 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19124 = (0);
while(true){
if((i__19124 < size__5627__auto__)){
var column_path = cljs.core._nth(c__5626__auto__,i__19124);
if(cljs.core.truth_(showing_QMARK_(column_path))){
var column_path__$1 = (function (){var G__19131 = column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19131,(1));
} else {
return G__19131;
}
})();
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path__$1,new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path__$1], null);
cljs.core.chunk_append(b__19125,(on_export_cell__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_cell__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_cell__$1.call(null,props)));

var G__19530 = (i__19124 + (1));
i__19124 = G__19530;
continue;
} else {
var G__19531 = (i__19124 + (1));
i__19124 = G__19531;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19125),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19085_$_iter__19122(cljs.core.chunk_rest(s__19123__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19125),null);
}
} else {
var column_path = cljs.core.first(s__19123__$2);
if(cljs.core.truth_(showing_QMARK_(column_path))){
var column_path__$1 = (function (){var G__19136 = column_path;
if(cljs.core.not(show_root_headers_QMARK_)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19136,(1));
} else {
return G__19136;
}
})();
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path__$1,new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path__$1], null);
return cljs.core.cons((on_export_cell__$1.cljs$core$IFn$_invoke$arity$1 ? on_export_cell__$1.cljs$core$IFn$_invoke$arity$1(props) : on_export_cell__$1.call(null,props)),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19085_$_iter__19122(cljs.core.rest(s__19123__$2)));
} else {
var G__19533 = cljs.core.rest(s__19123__$2);
s__19123__$1 = G__19533;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__19086__$1,row_path__$1,row_path,s__19086__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(s__19086__$1,row_path__$1,row_path,s__19086__$2,temp__5823__auto__,map__18989,map__18989__$1,row_paths__$1,map__18990,map__18990__$1,column_paths__$1,on_export_cell__$1,on_export_column_header__$1,on_export_row_header__$1,on_export_corner_header__$1,row_headers,column_headers,corner_headers,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
return iter__5628__auto__(column_paths__$1);
})(),re_com$nested_grid$nested_grid_$_export_fn_$_iter__19085(cljs.core.rest(s__19086__$2)));
} else {
var G__19534 = cljs.core.rest(s__19086__$2);
s__19086__$1 = G__19534;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(row_paths__$1);
})();
var G__19141 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"corner-headers","corner-headers",-2127546543),corner_headers,new cljs.core.Keyword(null,"row-headers","row-headers",1790514903),row_headers,new cljs.core.Keyword(null,"column-headers","column-headers",-966500841),column_headers,new cljs.core.Keyword(null,"cells","cells",-985166822),cells,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,corner_headers,column_headers),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.concat,row_headers,cells))], null);
return (on_export.cljs$core$IFn$_invoke$arity$1 ? on_export.cljs$core$IFn$_invoke$arity$1(G__19141) : on_export.call(null,G__19141));
});
var theme__$1 = re_com.theme.comp(pre_theme,theme);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
var temp__5823__auto___19538 = on_init_export_fn;
if(cljs.core.truth_(temp__5823__auto___19538)){
var init_19539 = temp__5823__auto___19538;
(init_19539.cljs$core$IFn$_invoke$arity$1 ? init_19539.cljs$core$IFn$_invoke$arity$1(export_fn) : init_19539.call(null,export_fn));
} else {
}

var temp__5823__auto__ = cljs.core.deref(_BANG_wrapper_ref);
if(cljs.core.truth_(temp__5823__auto__)){
var wrapper_ref = temp__5823__auto__;
if(cljs.core.truth_(virtualize_QMARK_)){
cljs.core.reset_BANG_(scroll_listener,wrapper_ref.addEventListener("scroll",on_scroll_BANG_));

return cljs.core.reset_BANG_(resize_observer,(new ResizeObserver(on_resize_BANG_)).observe(wrapper_ref));
} else {
return null;
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
var vec__19148 = reagent.core.argv(this$);
var seq__19149 = cljs.core.seq(vec__19148);
var first__19150 = cljs.core.first(seq__19149);
var seq__19149__$1 = cljs.core.next(seq__19149);
var _ = first__19150;
var map__19151 = seq__19149__$1;
var map__19151__$1 = cljs.core.__destructure_map(map__19151);
var row_tree__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19151__$1,new cljs.core.Keyword(null,"row-tree","row-tree",687483819));
var column_tree__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19151__$1,new cljs.core.Keyword(null,"column-tree","column-tree",841938146));
var on_export__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19151__$1,new cljs.core.Keyword(null,"on-export","on-export",1803619391));
var on_export_cell__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19151__$1,new cljs.core.Keyword(null,"on-export-cell","on-export-cell",1315067067));
var on_export_row_header__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19151__$1,new cljs.core.Keyword(null,"on-export-row-header","on-export-row-header",181805132));
var on_export_column_header__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19151__$1,new cljs.core.Keyword(null,"on-export-column-header","on-export-column-header",-899049368));
var on_export_corner_header__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19151__$1,new cljs.core.Keyword(null,"on-export-corner-header","on-export-corner-header",-941692713));
var seq__19152 = cljs.core.seq(new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_tree__$1,prev_row_tree,internal_row_tree], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_tree__$1,prev_column_tree,internal_column_tree], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_header_widths,prev_row_header_widths,internal_row_header_widths], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [column_header_heights,prev_column_header_heights,internal_column_header_heights], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_export__$1,null,internal_on_export], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_export_cell__$1,null,internal_on_export_cell], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_export_row_header__$1,null,internal_on_export_row_header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_export_column_header__$1,null,internal_on_export_column_header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [on_export_corner_header__$1,null,internal_on_export_corner_header], null)], null));
var chunk__19155 = null;
var count__19156 = (0);
var i__19157 = (0);
while(true){
if((i__19157 < count__19156)){
var vec__19176 = chunk__19155.cljs$core$IIndexed$_nth$arity$2(null,i__19157);
var external_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19176,(0),null);
var prev_external_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19176,(1),null);
var internal_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19176,(2),null);
var external_value = re_com.util.deref_or_value(external_prop);
var prev_external_value = re_com.util.deref_or_value(prev_external_prop);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_external_value,external_value)){
if(cljs.core.truth_(prev_external_prop)){
cljs.core.reset_BANG_(prev_external_prop,external_value);
} else {
}

cljs.core.reset_BANG_(internal_prop,external_value);


var G__19543 = seq__19152;
var G__19544 = chunk__19155;
var G__19545 = count__19156;
var G__19546 = (i__19157 + (1));
seq__19152 = G__19543;
chunk__19155 = G__19544;
count__19156 = G__19545;
i__19157 = G__19546;
continue;
} else {
var G__19548 = seq__19152;
var G__19549 = chunk__19155;
var G__19550 = count__19156;
var G__19551 = (i__19157 + (1));
seq__19152 = G__19548;
chunk__19155 = G__19549;
count__19156 = G__19550;
i__19157 = G__19551;
continue;
}
} else {
var temp__5823__auto__ = cljs.core.seq(seq__19152);
if(temp__5823__auto__){
var seq__19152__$1 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19152__$1)){
var c__5673__auto__ = cljs.core.chunk_first(seq__19152__$1);
var G__19552 = cljs.core.chunk_rest(seq__19152__$1);
var G__19553 = c__5673__auto__;
var G__19554 = cljs.core.count(c__5673__auto__);
var G__19555 = (0);
seq__19152 = G__19552;
chunk__19155 = G__19553;
count__19156 = G__19554;
i__19157 = G__19555;
continue;
} else {
var vec__19187 = cljs.core.first(seq__19152__$1);
var external_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19187,(0),null);
var prev_external_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19187,(1),null);
var internal_prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19187,(2),null);
var external_value = re_com.util.deref_or_value(external_prop);
var prev_external_value = re_com.util.deref_or_value(prev_external_prop);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_external_value,external_value)){
if(cljs.core.truth_(prev_external_prop)){
cljs.core.reset_BANG_(prev_external_prop,external_value);
} else {
}

cljs.core.reset_BANG_(internal_prop,external_value);


var G__19556 = cljs.core.next(seq__19152__$1);
var G__19557 = null;
var G__19558 = (0);
var G__19559 = (0);
seq__19152 = G__19556;
chunk__19155 = G__19557;
count__19156 = G__19558;
i__19157 = G__19559;
continue;
} else {
var G__19560 = cljs.core.next(seq__19152__$1);
var G__19561 = null;
var G__19562 = (0);
var G__19563 = (0);
seq__19152 = G__19560;
chunk__19155 = G__19561;
count__19156 = G__19562;
i__19157 = G__19563;
continue;
}
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__19194){
var map__19197 = p__19194;
var map__19197__$1 = cljs.core.__destructure_map(map__19197);
var props = map__19197__$1;
var show_zebra_stripes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19197__$1,new cljs.core.Keyword(null,"show-zebra-stripes?","show-zebra-stripes?",1314834236));
var resize_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19197__$1,new cljs.core.Keyword(null,"resize?","resize?",459924349),true);
var sticky_left = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19197__$1,new cljs.core.Keyword(null,"sticky-left","sticky-left",-1528709698),(0));
var on_resize = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19197__$1,new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),(function (p__19198){
var map__19199 = p__19198;
var map__19199__$1 = cljs.core.__destructure_map(map__19199);
var header_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19199__$1,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129));
var size_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19199__$1,new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225));
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19199__$1,new cljs.core.Keyword(null,"keypath","keypath",1965534711));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19199__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var G__19201 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_dimension,size_dimension], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"height","height",1025178622)], null),G__19201)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(internal_column_header_heights,re_com.nested_grid.safe_assoc,cljs.core.first(keypath),size);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"width","width",-384071477)], null),G__19201)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(internal_row_header_widths,re_com.nested_grid.safe_assoc,cljs.core.first(keypath),size);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"height","height",1025178622)], null),G__19201)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(internal_row_tree,cljs.core.update_in,keypath,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"size","size",1098693007),size], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"width","width",-384071477)], null),G__19201)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(internal_column_tree,cljs.core.update_in,keypath,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"size","size",1098693007),size], 0));
} else {
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19201))));

}
}
}
}
}));
var resize_row_height_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19197__$1,new cljs.core.Keyword(null,"resize-row-height?","resize-row-height?",1988704991),true);
var resize_column_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19197__$1,new cljs.core.Keyword(null,"resize-column-width?","resize-column-width?",-1090814270),true);
var resize_row_header_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19197__$1,new cljs.core.Keyword(null,"resize-row-header-width?","resize-row-header-width?",645501346),true);
var theme_cells_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19197__$1,new cljs.core.Keyword(null,"theme-cells?","theme-cells?",129212611));
var sticky_top = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19197__$1,new cljs.core.Keyword(null,"sticky-top","sticky-top",-851837397),(0));
var sticky_child_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19197__$1,new cljs.core.Keyword(null,"sticky-child?","sticky-child?",932069231));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19197__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19197__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var show_root_headers_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19197__$1,new cljs.core.Keyword(null,"show-root-headers?","show-root-headers?",482115222),true);
var resize_column_header_height_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19197__$1,new cljs.core.Keyword(null,"resize-column-header-height?","resize-column-header-height?",-478677866),true);
var ensure_reactivity_19566 = re_com.util.deref_or_value;
var external_keys_19567 = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-tree","row-tree",687483819),new cljs.core.Keyword(null,"row-header-widths","row-header-widths",2008727642),new cljs.core.Keyword(null,"row-height","row-height",527360749),new cljs.core.Keyword(null,"column-tree","column-tree",841938146),new cljs.core.Keyword(null,"column-header-heights","column-header-heights",1184593439),new cljs.core.Keyword(null,"column-width","column-width",405119380),new cljs.core.Keyword(null,"on-export","on-export",1803619391),new cljs.core.Keyword(null,"on-export-cell","on-export-cell",1315067067),new cljs.core.Keyword(null,"on-export-header","on-export-header",1679011768),new cljs.core.Keyword(null,"on-export-corner-header","on-export-corner-header",-941692713),new cljs.core.Keyword(null,"on-export-row-header","on-export-row-header",181805132),new cljs.core.Keyword(null,"on-export-column-header","on-export-column-header",-899049368)], null);
var external_props_19568 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(props,external_keys_19567);
var seq__19215_19569 = cljs.core.seq(external_props_19568);
var chunk__19216_19570 = null;
var count__19217_19571 = (0);
var i__19218_19572 = (0);
while(true){
if((i__19218_19572 < count__19217_19571)){
var prop_19573 = chunk__19216_19570.cljs$core$IIndexed$_nth$arity$2(null,i__19218_19572);
(ensure_reactivity_19566.cljs$core$IFn$_invoke$arity$1 ? ensure_reactivity_19566.cljs$core$IFn$_invoke$arity$1(prop_19573) : ensure_reactivity_19566.call(null,prop_19573));


var G__19574 = seq__19215_19569;
var G__19575 = chunk__19216_19570;
var G__19576 = count__19217_19571;
var G__19577 = (i__19218_19572 + (1));
seq__19215_19569 = G__19574;
chunk__19216_19570 = G__19575;
count__19217_19571 = G__19576;
i__19218_19572 = G__19577;
continue;
} else {
var temp__5823__auto___19578 = cljs.core.seq(seq__19215_19569);
if(temp__5823__auto___19578){
var seq__19215_19579__$1 = temp__5823__auto___19578;
if(cljs.core.chunked_seq_QMARK_(seq__19215_19579__$1)){
var c__5673__auto___19580 = cljs.core.chunk_first(seq__19215_19579__$1);
var G__19581 = cljs.core.chunk_rest(seq__19215_19579__$1);
var G__19582 = c__5673__auto___19580;
var G__19583 = cljs.core.count(c__5673__auto___19580);
var G__19584 = (0);
seq__19215_19569 = G__19581;
chunk__19216_19570 = G__19582;
count__19217_19571 = G__19583;
i__19218_19572 = G__19584;
continue;
} else {
var prop_19585 = cljs.core.first(seq__19215_19579__$1);
(ensure_reactivity_19566.cljs$core$IFn$_invoke$arity$1 ? ensure_reactivity_19566.cljs$core$IFn$_invoke$arity$1(prop_19585) : ensure_reactivity_19566.call(null,prop_19585));


var G__19586 = cljs.core.next(seq__19215_19579__$1);
var G__19587 = null;
var G__19588 = (0);
var G__19589 = (0);
seq__19215_19569 = G__19586;
chunk__19216_19570 = G__19587;
count__19217_19571 = G__19588;
i__19218_19572 = G__19589;
continue;
}
} else {
}
}
break;
}

var or__5142__auto__ = (((!(goog.DEBUG)))?null:re_com.validate.validate_args(re_com.validate.extract_arg_data(re_com.nested_grid.args_desc),props));
if(cljs.core.truth_(or__5142__auto__)){
return or__5142__auto__;
} else {
var part = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(re_com.part.part,re_com.nested_grid.part_structure,props);
var resize_BANG_ = (function (p__19223){
var map__19225 = p__19223;
var map__19225__$1 = cljs.core.__destructure_map(map__19225);
var props__$1 = map__19225__$1;
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19225__$1,new cljs.core.Keyword(null,"keypath","keypath",1965534711));
var size_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19225__$1,new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225));
var header_dimension = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19225__$1,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129));
var temp__5823__auto___19590 = (function (){var G__19227 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [header_dimension,size_dimension], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"height","height",1025178622)], null),G__19227)){
return cljs.core.deref(internal_row_tree);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"width","width",-384071477)], null),G__19227)){
return cljs.core.deref(internal_column_tree);
} else {
return null;

}
}
})();
if(cljs.core.truth_(temp__5823__auto___19590)){
var tree_19591 = temp__5823__auto___19590;
cljs.core._vreset_BANG_((function (){var G__19228 = header_dimension;
var G__19228__$1 = (((G__19228 instanceof cljs.core.Keyword))?G__19228.fqn:null);
switch (G__19228__$1) {
case "row":
return row_size_cache;

break;
case "column":
return column_size_cache;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19228__$1))));

}
})(),re_com.nested_grid.util.evict_BANG_(cljs.core._deref((function (){var G__19230 = header_dimension;
var G__19230__$1 = (((G__19230 instanceof cljs.core.Keyword))?G__19230.fqn:null);
switch (G__19230__$1) {
case "row":
return row_size_cache;

break;
case "column":
return column_size_cache;

break;
default:
throw (new Error((""+"No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19230__$1))));

}
})()),tree_19591,keypath));
} else {
}

return (on_resize.cljs$core$IFn$_invoke$arity$1 ? on_resize.cljs$core$IFn$_invoke$arity$1(props__$1) : on_resize.call(null,props__$1));
});
var row_width_resizers = (function (){var iter__5628__auto__ = (function re_com$nested_grid$nested_grid_$_iter__19233(s__19234){
return (new cljs.core.LazySeq(null,(function (){
var s__19234__$1 = s__19234;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19234__$1);
if(temp__5823__auto__){
var s__19234__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19234__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19234__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19236 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19235 = (0);
while(true){
if((i__19235 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__19235);
cljs.core.chunk_append(b__19236,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_grid.parts.resizer,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),resize_BANG_,new cljs.core.Keyword(null,"overlay","overlay",-139131598),overlay,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"row-header-width","row-header-width",-1813601584),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_row_header_widths),i)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","row-width-resizer","re-com.nested-grid/row-width-resizer",-373654205),i], null)], null)));

var G__19604 = (i__19235 + (1));
i__19235 = G__19604;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19236),re_com$nested_grid$nested_grid_$_iter__19233(cljs.core.chunk_rest(s__19234__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19236),null);
}
} else {
var i = cljs.core.first(s__19234__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_grid.parts.resizer,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129),resize_BANG_,new cljs.core.Keyword(null,"overlay","overlay",-139131598),overlay,new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"row-header-width","row-header-width",-1813601584),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),new cljs.core.Keyword(null,"index","index",-1531685915),i,new cljs.core.Keyword(null,"size","size",1098693007),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_row_header_widths),i)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","row-width-resizer","re-com.nested-grid/row-width-resizer",-373654205),i], null)], null)),re_com$nested_grid$nested_grid_$_iter__19233(cljs.core.rest(s__19234__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})();
var column_height_resizers = (function (){var iter__5628__auto__ = (function re_com$nested_grid$nested_grid_$_iter__19242(s__19243){
return (new cljs.core.LazySeq(null,(function (){
var s__19243__$1 = s__19243;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19243__$1);
if(temp__5823__auto__){
var s__19243__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19243__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19243__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19245 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19244 = (0);
while(true){
if((i__19244 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__19244);
cljs.core.chunk_append(b__19245,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i),i,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_column_header_heights),i),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"column","column",2078222095),overlay,new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","column-height-resizer","re-com.nested-grid/column-height-resizer",184622658),i], null)], null)));

var G__19609 = (i__19244 + (1));
i__19244 = G__19609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19245),re_com$nested_grid$nested_grid_$_iter__19242(cljs.core.chunk_rest(s__19243__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19245),null);
}
} else {
var i = cljs.core.first(s__19243__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i),i,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_column_header_heights),i),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"column","column",2078222095),overlay,new cljs.core.Keyword(null,"column-header-height","column-header-height",-1680092558),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","column-height-resizer","re-com.nested-grid/column-height-resizer",184622658),i], null)], null)),re_com$nested_grid$nested_grid_$_iter__19242(cljs.core.rest(s__19243__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_depth)));
})();
var row_height_resizers = (function() { 
var G__19610__delegate = function (p__19255){
var map__19256 = p__19255;
var map__19256__$1 = cljs.core.__destructure_map(map__19256);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19256__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var iter__5628__auto__ = (function re_com$nested_grid$nested_grid_$_iter__19257(s__19258){
return (new cljs.core.LazySeq(null,(function (){
var s__19258__$1 = s__19258;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19258__$1);
if(temp__5823__auto__){
var s__19258__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19258__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19258__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19260 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19259 = (0);
while(true){
if((i__19259 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__19259);
var row_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),i);
if(cljs.core.truth_((function (){var and__5140__auto__ = showing_QMARK_(row_path);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.map_QMARK_(cljs.core.peek(row_path));
} else {
return and__5140__auto__;
}
})())){
cljs.core.chunk_append(b__19260,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[row_path,offset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_sizes),i),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"row","row",-570139521),overlay,new cljs.core.Keyword(null,"row-height","row-height",527360749),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),i),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","row-height-resizer","re-com.nested-grid/row-height-resizer",-762244976),i], null)], null)));

var G__19616 = (i__19259 + (1));
i__19259 = G__19616;
continue;
} else {
var G__19617 = (i__19259 + (1));
i__19259 = G__19617;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19260),re_com$nested_grid$nested_grid_$_iter__19257(cljs.core.chunk_rest(s__19258__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19260),null);
}
} else {
var i = cljs.core.first(s__19258__$2);
var row_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),i);
if(cljs.core.truth_((function (){var and__5140__auto__ = showing_QMARK_(row_path);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.map_QMARK_(cljs.core.peek(row_path));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[row_path,offset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_sizes),i),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"row","row",-570139521),overlay,new cljs.core.Keyword(null,"row-height","row-height",527360749),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),i),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","row-height-resizer","re-com.nested-grid/row-height-resizer",-762244976),i], null)], null)),re_com$nested_grid$nested_grid_$_iter__19257(cljs.core.rest(s__19258__$2)));
} else {
var G__19620 = cljs.core.rest(s__19258__$2);
s__19258__$1 = G__19620;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1((cljs.core.count(cljs.core.deref(row_paths)) - (1))));
};
var G__19610 = function (var_args){
var p__19255 = null;
if (arguments.length > 0) {
var G__19621__i = 0, G__19621__a = new Array(arguments.length -  0);
while (G__19621__i < G__19621__a.length) {G__19621__a[G__19621__i] = arguments[G__19621__i + 0]; ++G__19621__i;}
  p__19255 = new cljs.core.IndexedSeq(G__19621__a,0,null);
} 
return G__19610__delegate.call(this,p__19255);};
G__19610.cljs$lang$maxFixedArity = 0;
G__19610.cljs$lang$applyTo = (function (arglist__19622){
var p__19255 = cljs.core.seq(arglist__19622);
return G__19610__delegate(p__19255);
});
G__19610.cljs$core$IFn$_invoke$arity$variadic = G__19610__delegate;
return G__19610;
})()
;
var column_width_resizers = (function() { 
var G__19623__delegate = function (p__19267){
var map__19268 = p__19267;
var map__19268__$1 = cljs.core.__destructure_map(map__19268);
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19268__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var style__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19268__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var iter__5628__auto__ = (function re_com$nested_grid$nested_grid_$_iter__19269(s__19270){
return (new cljs.core.LazySeq(null,(function (){
var s__19270__$1 = s__19270;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19270__$1);
if(temp__5823__auto__){
var s__19270__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19270__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19270__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19272 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19271 = (0);
while(true){
if((i__19271 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__19271);
var column_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i);
if(cljs.core.truth_((function (){var and__5140__auto__ = showing_QMARK_(column_path);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.map_QMARK_(cljs.core.peek(column_path));
} else {
return and__5140__auto__;
}
})())){
cljs.core.chunk_append(b__19272,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[column_path,offset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_sizes),i),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"column","column",2078222095),style__$1,overlay,new cljs.core.Keyword(null,"column-width","column-width",405119380),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),i),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","column-width-resizer","re-com.nested-grid/column-width-resizer",1686672855),i], null)], null)));

var G__19624 = (i__19271 + (1));
i__19271 = G__19624;
continue;
} else {
var G__19625 = (i__19271 + (1));
i__19271 = G__19625;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19272),re_com$nested_grid$nested_grid_$_iter__19269(cljs.core.chunk_rest(s__19270__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19272),null);
}
} else {
var i = cljs.core.first(s__19270__$2);
var column_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i);
if(cljs.core.truth_((function (){var and__5140__auto__ = showing_QMARK_(column_path);
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.map_QMARK_(cljs.core.peek(column_path));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.nested_grid.parts.resizer,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"size-dimension","size-dimension",-182346225),new cljs.core.Keyword(null,"header-dimension","header-dimension",-1862738129),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"dimension","dimension",543254198),new cljs.core.Keyword(null,"keypath","keypath",1965534711),new cljs.core.Keyword(null,"on-resize","on-resize",-2005528129)],[column_path,offset,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_sizes),i),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"column","column",2078222095),style__$1,overlay,new cljs.core.Keyword(null,"column-width","column-width",405119380),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),i),resize_BANG_])], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","column-width-resizer","re-com.nested-grid/column-width-resizer",1686672855),i], null)], null)),re_com$nested_grid$nested_grid_$_iter__19269(cljs.core.rest(s__19270__$2)));
} else {
var G__19626 = cljs.core.rest(s__19270__$2);
s__19270__$1 = G__19626;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(column_paths))));
};
var G__19623 = function (var_args){
var p__19267 = null;
if (arguments.length > 0) {
var G__19627__i = 0, G__19627__a = new Array(arguments.length -  0);
while (G__19627__i < G__19627__a.length) {G__19627__a[G__19627__i] = arguments[G__19627__i + 0]; ++G__19627__i;}
  p__19267 = new cljs.core.IndexedSeq(G__19627__a,0,null);
} 
return G__19623__delegate.call(this,p__19267);};
G__19623.cljs$lang$maxFixedArity = 0;
G__19623.cljs$lang$applyTo = (function (arglist__19628){
var p__19267 = cljs.core.seq(arglist__19628);
return G__19623__delegate(p__19267);
});
G__19623.cljs$core$IFn$_invoke$arity$variadic = G__19623__delegate;
return G__19623;
})()
;
var row_headers = (function (){var iter__5628__auto__ = (function re_com$nested_grid$nested_grid_$_iter__19280(s__19281){
return (new cljs.core.LazySeq(null,(function (){
var s__19281__$1 = s__19281;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19281__$1);
if(temp__5823__auto__){
var s__19281__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19281__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19281__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19283 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19282 = (0);
while(true){
if((i__19282 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__19282);
var row_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),i);
var path_ct = cljs.core.count(row_path);
var end_keypath = ((function (i__19282,s__19281__$1,row_path,path_ct,i,c__5626__auto__,size__5627__auto__,b__19283,s__19281__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__18909_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),p1__18909_SHARP_);
});})(i__19282,s__19281__$1,row_path,path_ct,i,c__5626__auto__,size__5627__auto__,b__19283,s__19281__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
(((i + (1)) + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (i__19282,s__19281__$1,row_path,path_ct,i,c__5626__auto__,size__5627__auto__,b__19283,s__19281__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__18908_SHARP_){
return (cljs.core.count(p1__18908_SHARP_) > path_ct);
});})(i__19282,s__19281__$1,row_path,path_ct,i,c__5626__auto__,size__5627__auto__,b__19283,s__19281__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.deref(row_paths))))));
var map__19285 = cljs.core.meta(row_path);
var map__19285__$1 = cljs.core.__destructure_map(map__19285);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19285__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19285__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var row_path_prop = (function (){var G__19287 = row_path;
if(cljs.core.not(show_root_headers_QMARK___$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19287,(1));
} else {
return G__19287;
}
})();
var cross_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_row_header_widths),(function (){var G__19293 = (path_ct - (1));
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__19293 - (1));
} else {
return G__19293;
}
})());
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_sizes),i);
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),i);
if(cljs.core.truth_((function (){var or__5142__auto____$1 = show_root_headers_QMARK___$1;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (i > (0));
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","row-header","re-com.nested-grid/row-header",-1715593243),new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path_prop,new cljs.core.Keyword(null,"path","path",-188191168),row_path_prop,new cljs.core.Keyword(null,"keypath","keypath",1965534711),keypath,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),re_com.nested_grid.util.keypath__GT_grid_line_name(keypath),new cljs.core.Keyword(null,"cross-size","cross-size",615011725),cross_size,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(cljs.core.truth_(branch_end_QMARK_)?"span 1":re_com.nested_grid.util.keypath__GT_grid_line_name(end_keypath)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(function (){var G__19302 = cljs.core.count(row_path);
var G__19302__$1 = (cljs.core.truth_(branch_end_QMARK_)?(G__19302 - (1)):G__19302);
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__19302__$1 - (1));
} else {
return G__19302__$1;
}
})(),new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),(-1)], null)], null);
var props__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-grid","row-header-label","re-com.nested-grid/row-header-label",-1216944026),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(size - (5))], null),(cljs.core.truth_(leaf_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(column_header_height_total)], null)),(cljs.core.truth_(branch_end_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(cross_size - (10))], null))], 0))),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_grid.parts.row_header_label], null))], null));
cljs.core.chunk_append(b__19283,part(new cljs.core.Keyword("re-com.nested-grid","row-header","re-com.nested-grid/row-header",-1715593243),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","row-header","re-com.nested-grid/row-header",-1715593243),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","row-header","re-com.nested-grid/row-header",-1715593243),keypath,branch_end_QMARK_], null),new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null)], null)));

var G__19630 = (i__19282 + (1));
i__19282 = G__19630;
continue;
} else {
var G__19631 = (i__19282 + (1));
i__19282 = G__19631;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19283),re_com$nested_grid$nested_grid_$_iter__19280(cljs.core.chunk_rest(s__19281__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19283),null);
}
} else {
var i = cljs.core.first(s__19281__$2);
var row_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),i);
var path_ct = cljs.core.count(row_path);
var end_keypath = ((function (s__19281__$1,row_path,path_ct,i,s__19281__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__18909_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),p1__18909_SHARP_);
});})(s__19281__$1,row_path,path_ct,i,s__19281__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
(((i + (1)) + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (s__19281__$1,row_path,path_ct,i,s__19281__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__18908_SHARP_){
return (cljs.core.count(p1__18908_SHARP_) > path_ct);
});})(s__19281__$1,row_path,path_ct,i,s__19281__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.deref(row_paths))))));
var map__19304 = cljs.core.meta(row_path);
var map__19304__$1 = cljs.core.__destructure_map(map__19304);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19304__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19304__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var row_path_prop = (function (){var G__19307 = row_path;
if(cljs.core.not(show_root_headers_QMARK___$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19307,(1));
} else {
return G__19307;
}
})();
var cross_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(safe_row_header_widths),(function (){var G__19309 = (path_ct - (1));
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__19309 - (1));
} else {
return G__19309;
}
})());
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_sizes),i);
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),i);
if(cljs.core.truth_((function (){var or__5142__auto____$1 = show_root_headers_QMARK___$1;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (i > (0));
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","row-header","re-com.nested-grid/row-header",-1715593243),new cljs.core.Keyword(null,"row-path","row-path",-709648669),row_path_prop,new cljs.core.Keyword(null,"path","path",-188191168),row_path_prop,new cljs.core.Keyword(null,"keypath","keypath",1965534711),keypath,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),re_com.nested_grid.util.keypath__GT_grid_line_name(keypath),new cljs.core.Keyword(null,"cross-size","cross-size",615011725),cross_size,new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(cljs.core.truth_(branch_end_QMARK_)?"span 1":re_com.nested_grid.util.keypath__GT_grid_line_name(end_keypath)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(function (){var G__19311 = cljs.core.count(row_path);
var G__19311__$1 = (cljs.core.truth_(branch_end_QMARK_)?(G__19311 - (1)):G__19311);
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__19311__$1 - (1));
} else {
return G__19311__$1;
}
})(),new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),(-1)], null)], null);
var props__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-grid","row-header-label","re-com.nested-grid/row-header-label",-1216944026),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(size - (5))], null),(cljs.core.truth_(leaf_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"sticky","sticky",-2121213869),new cljs.core.Keyword(null,"top","top",-1856271961),cljs.core.deref(column_header_height_total)], null)),(cljs.core.truth_(branch_end_QMARK_)?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(cross_size - (10))], null))], 0))),new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_grid.parts.row_header_label], null))], null));
return cljs.core.cons(part(new cljs.core.Keyword("re-com.nested-grid","row-header","re-com.nested-grid/row-header",-1715593243),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","row-header","re-com.nested-grid/row-header",-1715593243),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","row-header","re-com.nested-grid/row-header",-1715593243),keypath,branch_end_QMARK_], null),new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null)], null)),re_com$nested_grid$nested_grid_$_iter__19280(cljs.core.rest(s__19281__$2)));
} else {
var G__19633 = cljs.core.rest(s__19281__$2);
s__19281__$1 = G__19633;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(row_paths))));
})();
var column_headers = (function (){var iter__5628__auto__ = (function re_com$nested_grid$nested_grid_$_iter__19319(s__19320){
return (new cljs.core.LazySeq(null,(function (){
var s__19320__$1 = s__19320;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19320__$1);
if(temp__5823__auto__){
var s__19320__$2 = temp__5823__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19320__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19320__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19322 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19321 = (0);
while(true){
if((i__19321 < size__5627__auto__)){
var i = cljs.core._nth(c__5626__auto__,i__19321);
var column_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i);
var path_ct = cljs.core.count(column_path);
var end_keypath = ((function (i__19321,s__19320__$1,column_path,path_ct,i,c__5626__auto__,size__5627__auto__,b__19322,s__19320__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__18911_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),p1__18911_SHARP_);
});})(i__19321,s__19320__$1,column_path,path_ct,i,c__5626__auto__,size__5627__auto__,b__19322,s__19320__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
(((i + (1)) + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (i__19321,s__19320__$1,column_path,path_ct,i,c__5626__auto__,size__5627__auto__,b__19322,s__19320__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__18910_SHARP_){
return (cljs.core.count(p1__18910_SHARP_) > path_ct);
});})(i__19321,s__19320__$1,column_path,path_ct,i,c__5626__auto__,size__5627__auto__,b__19322,s__19320__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.deref(column_paths))))));
var map__19334 = cljs.core.meta(column_path);
var map__19334__$1 = cljs.core.__destructure_map(map__19334);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19334__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var branch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19334__$1,new cljs.core.Keyword(null,"branch?","branch?",-999323007));
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19334__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var column_path_prop = (function (){var G__19338 = column_path;
if(cljs.core.not(show_root_headers_QMARK___$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19338,(1));
} else {
return G__19338;
}
})();
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),i);
if(cljs.core.truth_((function (){var or__5142__auto____$1 = show_root_headers_QMARK___$1;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (i > (0));
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","column-header","re-com.nested-grid/column-header",-446298155),new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path_prop,new cljs.core.Keyword(null,"path","path",-188191168),column_path_prop,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"keypath","keypath",1965534711),keypath,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),re_com.nested_grid.util.keypath__GT_grid_line_name(keypath),new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),(cljs.core.truth_(end_keypath)?re_com.nested_grid.util.keypath__GT_grid_line_name(end_keypath):(cljs.core.truth_(leaf_QMARK_)?"span 1":"-1"
)),new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(function (){var G__19342 = cljs.core.count(column_path);
var G__19342__$1 = (cljs.core.truth_(branch_end_QMARK_)?(G__19342 - (1)):G__19342);
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__19342__$1 - (1));
} else {
return G__19342__$1;
}
})(),new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(-1)], null)], null);
var props__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-grid","column-header-label","re-com.nested-grid/column-header-label",1378193949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_grid.parts.column_header_label], null))], null));
cljs.core.chunk_append(b__19322,part(new cljs.core.Keyword("re-com.nested-grid","column-header","re-com.nested-grid/column-header",-446298155),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","column-header","re-com.nested-grid/column-header",-446298155),new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","column-header","re-com.nested-grid/column-header",-446298155),keypath,branch_end_QMARK_], null)], null)));

var G__19634 = (i__19321 + (1));
i__19321 = G__19634;
continue;
} else {
var G__19635 = (i__19321 + (1));
i__19321 = G__19635;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19322),re_com$nested_grid$nested_grid_$_iter__19319(cljs.core.chunk_rest(s__19320__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19322),null);
}
} else {
var i = cljs.core.first(s__19320__$2);
var column_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),i);
var path_ct = cljs.core.count(column_path);
var end_keypath = ((function (s__19320__$1,column_path,path_ct,i,s__19320__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__18911_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),p1__18911_SHARP_);
});})(s__19320__$1,column_path,path_ct,i,s__19320__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
(((i + (1)) + cljs.core.count(cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (s__19320__$1,column_path,path_ct,i,s__19320__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (p1__18910_SHARP_){
return (cljs.core.count(p1__18910_SHARP_) > path_ct);
});})(s__19320__$1,column_path,path_ct,i,s__19320__$2,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,cljs.core.drop.cljs$core$IFn$_invoke$arity$2((i + (1)),cljs.core.deref(column_paths))))));
var map__19349 = cljs.core.meta(column_path);
var map__19349__$1 = cljs.core.__destructure_map(map__19349);
var branch_end_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187));
var branch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,new cljs.core.Keyword(null,"branch?","branch?",-999323007));
var leaf_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19349__$1,new cljs.core.Keyword(null,"leaf?","leaf?",445442965));
var column_path_prop = (function (){var G__19353 = column_path;
if(cljs.core.not(show_root_headers_QMARK___$1)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19353,(1));
} else {
return G__19353;
}
})();
var keypath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),i);
if(cljs.core.truth_((function (){var or__5142__auto____$1 = show_root_headers_QMARK___$1;
if(cljs.core.truth_(or__5142__auto____$1)){
return or__5142__auto____$1;
} else {
return (i > (0));
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","column-header","re-com.nested-grid/column-header",-446298155),new cljs.core.Keyword(null,"column-path","column-path",-733367618),column_path_prop,new cljs.core.Keyword(null,"path","path",-188191168),column_path_prop,new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187),branch_end_QMARK_,new cljs.core.Keyword(null,"keypath","keypath",1965534711),keypath,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),re_com.nested_grid.util.keypath__GT_grid_line_name(keypath),new cljs.core.Keyword(null,"grid-column-end","grid-column-end",592662211),(cljs.core.truth_(end_keypath)?re_com.nested_grid.util.keypath__GT_grid_line_name(end_keypath):(cljs.core.truth_(leaf_QMARK_)?"span 1":"-1"
)),new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(function (){var G__19356 = cljs.core.count(column_path);
var G__19356__$1 = (cljs.core.truth_(branch_end_QMARK_)?(G__19356 - (1)):G__19356);
if(cljs.core.not(show_root_headers_QMARK___$1)){
return (G__19356__$1 - (1));
} else {
return G__19356__$1;
}
})(),new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(-1)], null)], null);
var props__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-grid","column-header-label","re-com.nested-grid/column-header-label",1378193949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"impl","impl",1677848700),re_com.nested_grid.parts.column_header_label], null))], null));
return cljs.core.cons(part(new cljs.core.Keyword("re-com.nested-grid","column-header","re-com.nested-grid/column-header",-446298155),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","column-header","re-com.nested-grid/column-header",-446298155),new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null),new cljs.core.Keyword(null,"props","props",453281727),props__$2,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","column-header","re-com.nested-grid/column-header",-446298155),keypath,branch_end_QMARK_], null)], null)),re_com$nested_grid$nested_grid_$_iter__19319(cljs.core.rest(s__19320__$2)));
} else {
var G__19636 = cljs.core.rest(s__19320__$2);
s__19320__$1 = G__19636;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(column_paths))));
})();
var corner_headers = (function (){var iter__5628__auto__ = (function re_com$nested_grid$nested_grid_$_iter__19364(s__19365){
return (new cljs.core.LazySeq(null,(function (){
var s__19365__$1 = s__19365;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19365__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var column_index = cljs.core.first(xs__6383__auto__);
var iterys__5624__auto__ = ((function (s__19365__$1,column_index,xs__6383__auto__,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_grid$nested_grid_$_iter__19364_$_iter__19366(s__19367){
return (new cljs.core.LazySeq(null,((function (s__19365__$1,column_index,xs__6383__auto__,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__19367__$1 = s__19367;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__19367__$1);
if(temp__5823__auto____$1){
var s__19367__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19367__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19367__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19369 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19368 = (0);
while(true){
if((i__19368 < size__5627__auto__)){
var row_index = cljs.core._nth(c__5626__auto__,i__19368);
var props__$1 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","corner-header","re-com.nested-grid/corner-header",-1624179948),new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(row_index + (1)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(column_index + (1))], null)], null);
var edge = corner_header_edges(props__$1);
var border_light = "thin solid #ccc";
var props__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),edge], null)], 0));
var props__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$2,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-grid","corner-header-label","re-com.nested-grid/corner-header-label",-758365361),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","corner-header-label","re-com.nested-grid/corner-header-label",-758365361),new cljs.core.Keyword(null,"props","props",453281727),props__$2], null))], null));
var borders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961)) : edge.call(null,new cljs.core.Keyword(null,"top","top",-1856271961))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833)) : edge.call(null,new cljs.core.Keyword(null,"right","right",-452581833))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bottom","bottom",-1550509018)) : edge.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937)) : edge.call(null,new cljs.core.Keyword(null,"left","left",-399115937))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),border_light], null):null)], 0));
cljs.core.chunk_append(b__19369,part(new cljs.core.Keyword("re-com.nested-grid","corner-header","re-com.nested-grid/corner-header",-1624179948),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","corner-header","re-com.nested-grid/corner-header",-1624179948),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1
,new cljs.core.Keyword(null,"props","props",453281727),(function (){var G__19373 = props__$3;
var G__19373__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__19373,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,borders)
;
if(cljs.core.truth_(show_root_headers_QMARK___$1)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__19373__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),(row_index - (1)),new cljs.core.Keyword(null,"column-index","column-index",470522340),(column_index - (1))], null)], 0));
} else {
return G__19373__$1;
}
})(),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","corner-header","re-com.nested-grid/corner-header",-1624179948),row_index,column_index], null)], null)));

var G__19637 = (i__19368 + (1));
i__19368 = G__19637;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19369),re_com$nested_grid$nested_grid_$_iter__19364_$_iter__19366(cljs.core.chunk_rest(s__19367__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19369),null);
}
} else {
var row_index = cljs.core.first(s__19367__$2);
var props__$1 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","corner-header","re-com.nested-grid/corner-header",-1624179948),new cljs.core.Keyword(null,"row-index","row-index",-828710296),row_index,new cljs.core.Keyword(null,"column-index","column-index",470522340),column_index,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),(row_index + (1)),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),(column_index + (1))], null)], null);
var edge = corner_header_edges(props__$1);
var border_light = "thin solid #ccc";
var props__$2 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([props__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edge","edge",919909153),edge], null)], 0));
var props__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props__$2,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-grid","corner-header-label","re-com.nested-grid/corner-header-label",-758365361),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","corner-header-label","re-com.nested-grid/corner-header-label",-758365361),new cljs.core.Keyword(null,"props","props",453281727),props__$2], null))], null));
var borders = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961)) : edge.call(null,new cljs.core.Keyword(null,"top","top",-1856271961))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right","right",-452581833)) : edge.call(null,new cljs.core.Keyword(null,"right","right",-452581833))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-right","border-right",-668932860),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bottom","bottom",-1550509018)) : edge.call(null,new cljs.core.Keyword(null,"bottom","bottom",-1550509018))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),border_light], null):null),(cljs.core.truth_((edge.cljs$core$IFn$_invoke$arity$1 ? edge.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937)) : edge.call(null,new cljs.core.Keyword(null,"left","left",-399115937))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),border_light], null):null)], 0));
return cljs.core.cons(part(new cljs.core.Keyword("re-com.nested-grid","corner-header","re-com.nested-grid/corner-header",-1624179948),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","corner-header","re-com.nested-grid/corner-header",-1624179948),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1
,new cljs.core.Keyword(null,"props","props",453281727),(function (){var G__19382 = props__$3;
var G__19382__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__19382,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,borders)
;
if(cljs.core.truth_(show_root_headers_QMARK___$1)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__19382__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-index","row-index",-828710296),(row_index - (1)),new cljs.core.Keyword(null,"column-index","column-index",470522340),(column_index - (1))], null)], 0));
} else {
return G__19382__$1;
}
})(),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-com.nested-grid","corner-header","re-com.nested-grid/corner-header",-1624179948),row_index,column_index], null)], null)),re_com$nested_grid$nested_grid_$_iter__19364_$_iter__19366(cljs.core.rest(s__19367__$2)));
}
} else {
return null;
}
break;
}
});})(s__19365__$1,column_index,xs__6383__auto__,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(s__19365__$1,column_index,xs__6383__auto__,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(column_depth))));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,re_com$nested_grid$nested_grid_$_iter__19364(cljs.core.rest(s__19365__$1)));
} else {
var G__19638 = cljs.core.rest(s__19365__$1);
s__19365__$1 = G__19638;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(row_depth)));
})();
var cells = (function (){var iter__5628__auto__ = (function re_com$nested_grid$nested_grid_$_iter__19385(s__19386){
return (new cljs.core.LazySeq(null,(function (){
var s__19386__$1 = s__19386;
while(true){
var temp__5823__auto__ = cljs.core.seq(s__19386__$1);
if(temp__5823__auto__){
var xs__6383__auto__ = temp__5823__auto__;
var ri = cljs.core.first(xs__6383__auto__);
var iterys__5624__auto__ = ((function (s__19386__$1,ri,xs__6383__auto__,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,corner_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function re_com$nested_grid$nested_grid_$_iter__19385_$_iter__19387(s__19388){
return (new cljs.core.LazySeq(null,((function (s__19386__$1,ri,xs__6383__auto__,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,corner_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header){
return (function (){
var s__19388__$1 = s__19388;
while(true){
var temp__5823__auto____$1 = cljs.core.seq(s__19388__$1);
if(temp__5823__auto____$1){
var s__19388__$2 = temp__5823__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__19388__$2)){
var c__5626__auto__ = cljs.core.chunk_first(s__19388__$2);
var size__5627__auto__ = cljs.core.count(c__5626__auto__);
var b__19390 = cljs.core.chunk_buffer(size__5627__auto__);
if((function (){var i__19389 = (0);
while(true){
if((i__19389 < size__5627__auto__)){
var ci = cljs.core._nth(c__5626__auto__,i__19389);
var row_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),ri);
var column_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),ci);
var row_keypath = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),ri);
var column_keypath = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),ci);
var zebra_stripe_QMARK_ = (cljs.core.truth_(show_zebra_stripes_QMARK_)?cljs.core.odd_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(row_keypath__GT_showing_index),row_keypath,(0))):null);
var row_meta = (function (){var G__19398 = cljs.core.meta(row_path);
if(cljs.core.truth_(zebra_stripe_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19398,new cljs.core.Keyword(null,"zebra?","zebra?",587025625),true);
} else {
return G__19398;
}
})();
var column_meta = cljs.core.meta(column_path);
if(cljs.core.truth_((function (){var and__5140__auto__ = showing_QMARK_(row_path);
if(cljs.core.truth_(and__5140__auto__)){
return showing_QMARK_(column_path);
} else {
return and__5140__auto__;
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),(function (){var G__19399 = row_path;
var G__19399__$1 = ((cljs.core.not(show_root_headers_QMARK___$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19399,(1)):G__19399);
if(cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(row_meta))){
return cljs.core.pop(G__19399__$1);
} else {
return G__19399__$1;
}
})(),new cljs.core.Keyword(null,"column-path","column-path",-733367618),(function (){var G__19400 = column_path;
var G__19400__$1 = ((cljs.core.not(show_root_headers_QMARK___$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19400,(1)):G__19400);
if(cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(column_meta))){
return cljs.core.pop(G__19400__$1);
} else {
return G__19400__$1;
}
})(),new cljs.core.Keyword(null,"row-meta","row-meta",354487365),row_meta,new cljs.core.Keyword(null,"column-meta","column-meta",-481642125),column_meta,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),re_com.nested_grid.util.keypath__GT_grid_line_name(row_keypath),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),re_com.nested_grid.util.keypath__GT_grid_line_name(column_keypath)], null)], null);
var cell_props = (function (){var G__19401 = props__$1;
var G__19401__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__19401,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-grid","cell-label","re-com.nested-grid/cell-label",1071076492),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),props__$1], null))], null)], null)], 0))
;
if(cljs.core.truth_(zebra_stripe_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__19401__$1,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f9f9f9"], null));
} else {
return G__19401__$1;
}
})();
var cell_props__$1 = (cljs.core.truth_(goog.DEBUG)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(cell_props,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.assoc,new cljs.core.Keyword(null,"on-click","on-click",1632826543),re_com.debug.log_on_alt_click(cell_props)):cell_props);
cljs.core.chunk_append(b__19390,part(new cljs.core.Keyword("re-com.nested-grid","cell","re-com.nested-grid/cell",1997200967),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","cell","re-com.nested-grid/cell",1997200967),new cljs.core.Keyword(null,"props","props",453281727),cell_props__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_path,column_path], null)], null)));

var G__19639 = (i__19389 + (1));
i__19389 = G__19639;
continue;
} else {
var G__19640 = (i__19389 + (1));
i__19389 = G__19640;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19390),re_com$nested_grid$nested_grid_$_iter__19385_$_iter__19387(cljs.core.chunk_rest(s__19388__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19390),null);
}
} else {
var ci = cljs.core.first(s__19388__$2);
var row_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_paths),ri);
var column_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_paths),ci);
var row_keypath = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(row_keypaths),ri);
var column_keypath = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(column_keypaths),ci);
var zebra_stripe_QMARK_ = (cljs.core.truth_(show_zebra_stripes_QMARK_)?cljs.core.odd_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(row_keypath__GT_showing_index),row_keypath,(0))):null);
var row_meta = (function (){var G__19406 = cljs.core.meta(row_path);
if(cljs.core.truth_(zebra_stripe_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19406,new cljs.core.Keyword(null,"zebra?","zebra?",587025625),true);
} else {
return G__19406;
}
})();
var column_meta = cljs.core.meta(column_path);
if(cljs.core.truth_((function (){var and__5140__auto__ = showing_QMARK_(row_path);
if(cljs.core.truth_(and__5140__auto__)){
return showing_QMARK_(column_path);
} else {
return and__5140__auto__;
}
})())){
var props__$1 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"row-path","row-path",-709648669),(function (){var G__19410 = row_path;
var G__19410__$1 = ((cljs.core.not(show_root_headers_QMARK___$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19410,(1)):G__19410);
if(cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(row_meta))){
return cljs.core.pop(G__19410__$1);
} else {
return G__19410__$1;
}
})(),new cljs.core.Keyword(null,"column-path","column-path",-733367618),(function (){var G__19412 = column_path;
var G__19412__$1 = ((cljs.core.not(show_root_headers_QMARK___$1))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(G__19412,(1)):G__19412);
if(cljs.core.truth_(new cljs.core.Keyword(null,"branch-end?","branch-end?",-1867880187).cljs$core$IFn$_invoke$arity$1(column_meta))){
return cljs.core.pop(G__19412__$1);
} else {
return G__19412__$1;
}
})(),new cljs.core.Keyword(null,"row-meta","row-meta",354487365),row_meta,new cljs.core.Keyword(null,"column-meta","column-meta",-481642125),column_meta,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-row-start","grid-row-start",-1827627988),re_com.nested_grid.util.keypath__GT_grid_line_name(row_keypath),new cljs.core.Keyword(null,"grid-column-start","grid-column-start",718549073),re_com.nested_grid.util.keypath__GT_grid_line_name(column_keypath)], null)], null);
var cell_props = (function (){var G__19413 = props__$1;
var G__19413__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__19413,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-grid","cell-label","re-com.nested-grid/cell-label",1071076492),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),props__$1], null))], null)], null)], 0))
;
if(cljs.core.truth_(zebra_stripe_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__19413__$1,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#f9f9f9"], null));
} else {
return G__19413__$1;
}
})();
var cell_props__$1 = (cljs.core.truth_(goog.DEBUG)?cljs.core.update.cljs$core$IFn$_invoke$arity$5(cell_props,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.assoc,new cljs.core.Keyword(null,"on-click","on-click",1632826543),re_com.debug.log_on_alt_click(cell_props)):cell_props);
return cljs.core.cons(part(new cljs.core.Keyword("re-com.nested-grid","cell","re-com.nested-grid/cell",1997200967),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","cell","re-com.nested-grid/cell",1997200967),new cljs.core.Keyword(null,"props","props",453281727),cell_props__$1,new cljs.core.Keyword(null,"theme","theme",-1247880880),(cljs.core.truth_(theme_cells_QMARK_)?theme__$1:null),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [row_path,column_path], null)], null)),re_com$nested_grid$nested_grid_$_iter__19385_$_iter__19387(cljs.core.rest(s__19388__$2)));
} else {
var G__19641 = cljs.core.rest(s__19388__$2);
s__19388__$1 = G__19641;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__19386__$1,ri,xs__6383__auto__,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,corner_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
,null,null));
});})(s__19386__$1,ri,xs__6383__auto__,temp__5823__auto__,part,resize_BANG_,row_width_resizers,column_height_resizers,row_height_resizers,column_width_resizers,row_headers,column_headers,corner_headers,or__5142__auto__,map__19197,map__19197__$1,props,show_zebra_stripes_QMARK_,resize_QMARK_,sticky_left,on_resize,resize_row_height_QMARK_,resize_column_width_QMARK_,resize_row_header_width_QMARK_,theme_cells_QMARK_,sticky_top,sticky_child_QMARK_,style,class$,show_root_headers_QMARK___$1,resize_column_header_height_QMARK_,vec__18929,scroll_left,scroll_top,content_height,content_width,_BANG_wrapper_ref,scroll_listener,resize_observer,overlay,hide_resizers_QMARK_,wrapper_ref_BANG_,on_scroll_BANG_,on_resize_BANG_,prev_row_tree,prev_column_tree,prev_row_header_widths,prev_column_header_heights,internal_row_tree,internal_column_tree,internal_on_export,internal_on_export_cell,internal_on_export_column_header,internal_on_export_row_header,internal_on_export_corner_header,row_size_cache,column_size_cache,row_traversal,column_traversal,complete_row_traversal,showing_QMARK_,row_keypath__GT_showing_index,complete_column_traversal,column_depth,row_depth,internal_row_header_widths,internal_column_header_heights,safe_column_header_heights,safe_row_header_widths,column_header_height_total,column_width_total,column_paths,column_keypaths,column_sizes,column_template,column_cross_template,row_header_width_total,row_height_total,row_paths,row_keypaths,row_sizes,row_template,row_cross_template,corner_header_edges,export_fn,theme__$1,map__18918,map__18918__$1,row_header_widths,pre_theme,on_export_cell,on_init_export_fn,column_header_heights,show_column_branches_QMARK_,on_export,column_tree,show_row_branches_QMARK_,on_export_column_header,column_tree_depth,row_tree,on_export_row_header,row_height,row_header_width,virtualize_QMARK_,theme,column_header_height,row_tree_depth,column_width,show_root_headers_QMARK_,on_export_corner_header))
;
var fs__5625__auto__ = cljs.core.seq(iterys__5624__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(column_paths)))));
if(fs__5625__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5625__auto__,re_com$nested_grid$nested_grid_$_iter__19385(cljs.core.rest(s__19386__$1)));
} else {
var G__19642 = cljs.core.rest(s__19386__$1);
s__19386__$1 = G__19642;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5628__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(cljs.core.deref(row_paths))));
})();
return part(new cljs.core.Keyword("re-com.nested-grid","wrapper","re-com.nested-grid/wrapper",-1866510015),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","wrapper","re-com.nested-grid/wrapper",-1866510015),new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"post-props","post-props",1836150684),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"class","class",-2030961996),class$], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sticky-child?","sticky-child?",932069231),sticky_child_QMARK_,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),wrapper_ref_BANG_], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),re_com.nested_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(column_header_height_total),cljs.core.deref(row_height_total)], null)),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),re_com.nested_grid.util.grid_cross_template.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(row_header_width_total),cljs.core.deref(column_width_total)], null))], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [part(new cljs.core.Keyword("re-com.nested-grid","cell-grid","re-com.nested-grid/cell-grid",-1747762926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","cell-grid","re-com.nested-grid/cell-grid",-1747762926),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__19420 = cells;
if(cljs.core.truth_((function (){var and__5140__auto__ = resize_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.deref(hide_resizers_QMARK_));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__19420,(cljs.core.truth_(resize_row_height_QMARK_)?row_height_resizers(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(resize_column_width_QMARK_)?column_width_resizers(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-row-end","grid-row-end",-128277830),(-1)], null),new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)):null)], 0));
} else {
return G__19420;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),cljs.core.deref(row_template),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cljs.core.deref(column_template)], null)], null)], null)),part(new cljs.core.Keyword("re-com.nested-grid","column-header-grid","re-com.nested-grid/column-header-grid",926868360),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","column-header-grid","re-com.nested-grid/column-header-grid",926868360),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sticky-top","sticky-top",-851837397),sticky_top,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__19423 = column_headers;
if(cljs.core.truth_((function (){var and__5140__auto__ = resize_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.deref(hide_resizers_QMARK_));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__19423,(cljs.core.truth_(resize_column_header_height_QMARK_)?column_height_resizers:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(resize_column_width_QMARK_)?column_width_resizers(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)):null)], 0));
} else {
return G__19423;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),cljs.core.deref(column_cross_template),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cljs.core.deref(column_template)], null)], null)], null)),part(new cljs.core.Keyword("re-com.nested-grid","row-header-grid","re-com.nested-grid/row-header-grid",-826916806),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","row-header-grid","re-com.nested-grid/row-header-grid",-826916806),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sticky-left","sticky-left",-1528709698),sticky_left,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__19425 = row_headers;
if(cljs.core.truth_((function (){var and__5140__auto__ = resize_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.deref(hide_resizers_QMARK_));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__19425,(cljs.core.truth_(resize_row_header_width_QMARK_)?row_width_resizers:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(resize_row_height_QMARK_)?row_height_resizers(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(-1)], null)):null)], 0));
} else {
return G__19425;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),cljs.core.deref(row_template),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cljs.core.deref(row_cross_template)], null)], null)], null)),part(new cljs.core.Keyword("re-com.nested-grid","corner-header-grid","re-com.nested-grid/corner-header-grid",-1096937690),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"theme","theme",-1247880880),theme__$1,new cljs.core.Keyword(null,"part","part",77757738),new cljs.core.Keyword("re-com.nested-grid","corner-header-grid","re-com.nested-grid/corner-header-grid",-1096937690),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"sticky-top","sticky-top",-851837397),sticky_top,new cljs.core.Keyword(null,"sticky-left","sticky-left",-1528709698),sticky_left,new cljs.core.Keyword(null,"children","children",-940561982),(function (){var G__19426 = corner_headers;
if(cljs.core.truth_((function (){var and__5140__auto__ = resize_QMARK_;
if(cljs.core.truth_(and__5140__auto__)){
return cljs.core.not(cljs.core.deref(hide_resizers_QMARK_));
} else {
return and__5140__auto__;
}
})())){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(G__19426,(cljs.core.truth_(resize_row_header_width_QMARK_)?row_width_resizers:null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(resize_column_header_height_QMARK_)?column_height_resizers:null)], 0));
} else {
return G__19426;
}
})(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),cljs.core.deref(column_cross_template),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),cljs.core.deref(row_cross_template)], null)], null)], null)),re_com.util.deref_or_value(overlay)], null)], null)], null));
}
})], null));
});

//# sourceMappingURL=re_com.nested_grid.js.map
