goog.provide('re_frame.alpha');
/**
 * Registers a handler.
 * 
 * `kind`: what kind of handler to register. Possible vals:
 * 
 * - `:sub`: runs a subscription query which is a map.
 * - `:legacy-sub`: runs a subscription query which is a vector.
 * - `:sub-lifecycle`: creates dataflow nodes, optionally caching them.
 * 
 * #### reg :sub
 * 
 * `(reg :sub query-id signal-fn computation-fn)`
 * 
 * Register a `signal-fn` and a `computation-fn` for a given `query-id`.
 * `computation-fn` is a function of `[signals query-map]`.
 * 
 * The two functions provide a "mechanism" for creating a node
 * in the signal graph. When a node of type `query-id` is needed,
 * the two functions can be used to create it.
 * 
 * - `query-id` - typically a namespaced keyword (later used in subscribe).
 * - `signal-fn` - optional. Returns the input signals required by this kind of node.
 * - `computation-fn` - computes the value (output) of the node from the input signals and the query.
 * 
 * Later, during app execution, a call to `(sub {:re-frame/q ::greet :name "dave"})`
 * will trigger the need for a new `::greet` signal graph node (matching the
 * query `{:re-frame/q ::greet :name "dave"}`). Re-frame will look up the
 * associated `signal-fn` and `computation-fn`, combining them to create the node.
 * 
 * Just to be clear: calling `reg :sub` does not immediately create a node.
 * It only registers a "mechanism" (the two functions) by which nodes
 * can be created later, when a node is brought into existence by the
 * use of `sub`.
 * 
 * ##### Declaring the `computation-fn`
 * 
 * The last argument to `reg` must be the actual `computation-fn`, but the
 * full declaration can be done in two ways:
 * 
 * 1. The standard way:
 * A function accepting two arguments, `input-values` and `query`:
 * 
 * ```clojure
 * (reg :sub :query-id
 *  (fn [input-values query]
 * (:foo input-values)))
 * ```
 * 
 * 2. Syntactic sugar:
 * The keyword `:->`, followed by a 1-arity `computation-function`:
 * 
 * `(reg :sub :query-id :-> computation-fn)`
 * 
 * This sugary variation allows you to pass a function that will expect only one argument,
 * namely the `input-values`, and entirely omit the `query`. A typical `computation-function`
 * expects two arguments, which can cause unfortunate results when attempting to use
 * clojure standard library functions, or other functions, in a functional manner.
 * 	
 * For example, a significant number of subscriptions exist only to get a value
 * from the `input-values`. As shown below, this subscription will simply retrieve
 * the value associated with the `:foo` key in our db:
 * 
 * ```clojure
 * (reg :sub
 *  :query-id
 *  (fn [db _] (:foo db))) ;; :<---- boilerplate
 * ```
 * 
 * This is slightly more boilerplate than we might want. 
 * Instead, we could use a keyword directly as a function:
 * 
 * `(reg :sub :query-id :foo)`
 * 
 * However, this could be dangerous. Remember that re-frame passes 
 * two arguments to the `computation-fn`: `input-values` and `query`. 
 * If the keyword `:foo` is missing from the `input-values`, our `:foo`
 * getter will use its second argument as a default value, returning the
 * `query`. That would be nonsense - the query is not the computation.
 * 
 * In other words, the computation should have no default output.
 * To achieve that, we use the token `:->`.
 * 
 * `(reg :sub :query-id :-> :foo)`
 * 
 * This form tells re-frame to pass only one argument to your `computation-fn`,
 * the `input-values`. Thus, your `:foo` getter will safely return `nil`
 * when the key is not found.
 * 
 * Beyond keywords, you can provide any 1-arity function.
 * For more complicated use cases, `partial`, `comp`, and anonymous functions 
 * will work as expected.
 * 
 * ##### Declaring the `signal-fn`
 * 
 * The argument(s) declared after `query-id` and before `computation-fn`
 *   define the `input signals` part of the "mechanism". They specify what input values 
 * "flow" into the `computation-fn` (as the 1st argument) when it is called.
 * 
 * So, there are three ways to declare the input signals.
 * But note, the 2nd way, in which a
 * `signal-fn` is explicitly supplied, is the most canonical and
 * instructive. The other two are really just sugary variations.
 * 
 * **First Variation**: No input signal function given:
 * 
 * ```clojure
 * (reg :sub :query-id
 *  computation-fn)   ;; has signature:  (fn [db query]  ... ret-value)
 * ```
 * 
 * the node's input signal defaults to `app-db`
 * and, as a result, the value within `app-db` (a map) is
 * given as the 1st argument when `a-computation-fn` is called.
 * 
 * **Second Variation**: A signal function is explicitly supplied.
 * 
 * ```clojure
 * (reg :sub :query-id
 *  signal-fn     ;; <-- here
 *  computation-fn)
 * ```
 * 
 * This is the most canonical and instructive of the three variations.
 * 
 * When a node is created, the `signal-fn` will be called, returning the input signal(s).
 * as either a singleton, if there is only one, or a sequence if there are many,
 * or a map with the signals as the values.
 * 
 * The current values of the returned signals will be supplied as the 1st argument to
 * the `computation-fn` when it is called - and subject to what this `signal-fn` returns,
 * this value will be either a singleton, sequence or map of them (paralleling
 * the structure returned by the `signal function`).
 * 
 * This example `signal function` returns a 2-vector of input signals.
 * 
 * ```clojure
 * (fn [query]
 *   [(sub {:re-frame/q :a})
 * (sub {:re-frame/q :b})])
 * ```
 * 
 * The associated computation function must be written
 * to expect a 2-vector of values for its first argument:
 * 
 * ```clojure
 * (fn [[a b] query]  ;; 1st argument is a seq of two values
 *   ...)
 * ```
 * 
 * If, on the other hand, the signal function was simpler and returned a singleton, like this:
 * 
 * ```clojure
 * (fn [query]
 *   (sub {:re-frame/q :a}))   ;; <-- returning a singleton
 * ```
 * then the associated computation function must be written to expect a single value
 * as the 1st argument:
 * 
 * ```clojure
 * (fn [a query]    ;; 1st argument is a single value
 *   ...)
 * ```
 * 
 * Further Note: variation #1 above, in which an `signal-fn` was not supplied, like this:
 * 
 * ```clojure
 * (reg :sub :query-id
 *  computation-fn)   ;; has signature:  (fn [db query]  ... ret-value)
 * ```
 * 
 * is the equivalent of using this
 * 2nd variation and explicitly supplying a `signal-fn` which returns `app-db`:
 * 
 * ```clojure
 * (reg :sub :query-id
 *  (fn [_ _] re-frame/app-db)   ;; <-- explicit signal-fn
 *  a-computation-fn)             ;; has signature:  (fn [db query-vec]  ... ret-value)
 * ```
 * 
 * **Third variation**: Syntactic sugar
 * 
 * ```clojure
 * (reg :sub :a-b-sub
 *  :<- [:a-sub]
 *  :<- [:b-sub]
 *  (fn [[a b] query]    ;; 1st argument is a seq of two values
 * {:a a :b b}))
 * ```
 * 
 * This 3rd variation is just syntactic sugar for the 2nd.  Instead of providing an
 * `signals-fn` you provide one or more pairs of `:<-` and a subscription vector.
 * 
 * If you supply only one pair, a singleton will be supplied to the computation function,
 * as if you had supplied a `signal-fn` returning only a single value:
 * 
 * ```clojure
 * (reg :sub :a-sub
 *  :<- [:a-sub]
 *  (fn [a query]      ;; only one pair, so 1st argument is a single value
 * ...))
 * ```
 * 
 * Syntactic sugar for both the `signal-fn` and `computation-fn` can be used together
 * and the direction of arrows shows the flow of data and functions. The example from
 * directly above is reproduced here:
 * 
 * ```clojure
 * (reg :sub :a-b-sub
 *  :<- [:a-sub]
 *  :<- [:b-sub]
 *  :-> (partial zipmap [:a :b]))
 * ```
 *   
 * For further understanding, read the tutorials, and look at the detailed comments in
 * /examples/todomvc/src/subs.cljs.
 * 
 * #### reg :legacy-sub
 * 
 * `(reg :legacy-sub query-id signal computation-fn)`
 * 
 * Register a `signal-fn` and a `computation-fn` for a given `query-id`.
 * For details, see `:sub`, above. Compared with `:sub`, `:legacy-sub`
 * supports a vector as the `query`, rather than a map. For instance:
 * 
 * `(sub [::greet {:name "dave"}])`
 * 
 * In this case, `::greet` is the `query-id`. Re-frame looks up the associated 
 * `signal-fn` and `computation-fn` and computes the output of the node,
 * creating it if necessary. It passes the entire vector to your `computation-fn`
 * as the second argument.
 * 
 * ##### Declaring the `computation-fn` (:legacy-sub)
 * 
 * Legacy subscriptions have another kind of syntactic sugar,
 * in addition to those supported by `:sub`:
 * 
 * The token `:=>`, followed by a multi-arity `computation-function`.
 * 
 * `(reg :legacy-sub :query-id :=> computation-fn)`
 * 
 * A vector `query` can be broken into two components, `[query-id & optional-values]`.
 * Some subscriptions require the `optional-values` for extra work within the subscription.
 * Canonically, we'd need to destructure these `optional-values`:
 * 
 * ```clojure
 * (reg :legacy-sub :query-id
 *  (fn [db [_ foo]] [db foo]))
 * ```
 * 
 * Again, we are writing boilerplate just to reach our values. Instead, we might prefer to
 * have direct access through a parameter vector like `[input-values optional-values]`.
 * That way, we could provide a multi-arity function directly as our `computation-fn`:
 * 
 * `(reg :legacy-sub :query-id :=> vector)  ;; Could also be (fn [db foo] [db foo])`
 * 
 * ##### Compatibility:
 * 
 * Query-maps are a more recent development for re-frame.
 * They are implemented in a backwards-compatible way.
 * That means you can pass either a vector or a map to `sub`,
 *   regardless of what kind of "mechanism" was registered for
 * that `query-id` (whether via `:sub` or `:legacy-sub`).
 * 
 * If you call `(reg :sub ...)`, you have registered a `computation-fn`
 * and `signal-fn` which both expect to be passed a `query-map`.
 * If you then call `(sub [...])`, passing a `query-vector`, re-frame will
 * transparently adapt your vector, passing an equivalent map to your functions.
 * 
 * Likewise, invoking a `:legacy-sub` mechanism with a `query-map`
 * will cause re-frame to pass along an equivalent vector.
 * 
 * When this conversion is done, re-frame includes the original form
 * in the metadata (using either `:re-frame/query-m` or `:re-frame/query-v`).
 * 
 * When converting from a map to a vector, `:re-frame/query-v` is used, if present.
 * Otherwise, the original map is included as the
 * second item (commonly thought of as the "params" of that query).
 * 
 * For instance, the query:
 * 
 * `{:re-frame/q ::items}`
 * 
 * converts to:
 * 
 * ```clojure
 * ^{:re-frame/query-m {:re-frame/q ::items}}
 * [::items {:re-frame/q ::items}]
 * ```
 * 
 * Likewise, the query:
 * 
 * `[::items 1 2 3]`
 * 
 * converts to:
 * 
 * ```clojure
 * {:re-frame/q         ::items
 *  :re-frame/lifecycle :safe
 *  :re-frame/query-v   [::items 1 2 3]}
 * ```
 * 
 * Note that since `1 2 3` aren't named, there's no way to represent them
 * in the map. Instead, they can be destructured from the `:re-frame/query-v` key.
 * 
 * This `:re-frame/query-v` is also taken into consideration when converting a
 * map to a vector. For instance:
 * 
 * ```clojure
 * {:re-frame/q         ::items
 *  :re-frame/lifecycle :reactive
 *  :re-frame/query-v   [::items 1 2 3]}
 * ```
 * 
 * converts to:
 * 
 * ```clojure
 * ^{:re-frame/query-m {:re-frame/q         ::items
 *                   :re-frame/lifecycle :reactive}}
 * [::items 1 2 3]
 * ```
 * 
 * #### reg :sub-lifecycle
 * 
 * `(reg :sub-lifecycle lifecycle-id lifecycle-fn)`
 * 
 * A lifecycle-fn controls how dataflow nodes are created,
 * sometimes managing their lifecycle within a cache (i.e. the signal graph).
 * 
 * When `sub` (or `subscribe`) is called, re-frame uses information within the `query`
 * to look up and call the associated lifecycle-fn. The lifecycle-fn returns the actual dataflow node.
 * 
 * It can do other things along the way - primarily, it can make use of a cache. This cache of nodes
 * can make a subscription more performant. Instead of creating a node and calculating
 * its value every time you call `sub`, re-frame can look up nodes it has already created,
 * along with their previous calculations.
 * 
 * The `lifecycle-id` determines which lifecycle-fn a subscription will use.
 * When `(sub query)` is called, re-frame always derives the `lifecycle-id` from the `query`:
 * 
 *   - Map queries can specify this with a `:re-frame/lifecycle` key.
 *   - Vector queries can include the `:re-frame/lifecycle` key in the vector's metadata.
 * 
 * When a `query` does not explicitly declare a lifecycle,
 * re-frame uses the `:safe` lifecycle by default.
 * 
 * ##### Writing a `lifecycle-fn`
 * 
 * Whenever `sub` is called, re-frame determines the `lifecycle-id` from the `query`.
 * Then, it calls the associated `lifecycle-fn`, passing it the `query`.
 * 
 * The task of a `lifecycle-fn` is return the dataflow node necessary to calculate
 * the output value for `query`. Along the way, it can also store the node
 * within a cache (a.k.a. the signal graph).
 * 
 * The `re-frame.query` namespace provides some helper functions for this:
 * 
 * **`cached`**
 * Accepts a `query`.
 * Returns the matching dataflow node from the signal graph,
 * or `nil` if it is not found.
 * 
 * **`handle`**
 * Accepts a `query`.
 * Returns a new dataflow node.
 * 
 * **`cache!`**
 * Accepts a `query` and a dataflow node.
 * Adds the dataflow node to the signal graph.
 * The node can be looked up later, using `cached`.
 * 
 * **`clear!`**
 * Accepts a `query`.
 * Removes the associated dataflow node from the signal graph.
 * 
 * ##### `lifecycle-fn` example
 * 
 * For demonstration, here is a "sliding" lifecycle-fn which caches the last three queries:
 * 
 * ```clojure
 * (def history (atom []))
 * (def size 3)
 * (def overflow? #(> (count @history) size))
 * (def slide! #(swap! history (comp vec rest)))
 * 
 * (defn sub-sliding [q]
 *   (if-let [cached-node (q/cached q)]
 *  cached-node
 *  (let [new-node (q/handle q)]
 *    (q/cache! q new-node)
 *    (swap! history conj q)
 *    (when (overflow?)
 *      (q/clear! (first @history))
 *      (slide!))
 *    new-node)))
 * 
 * (reg :sub-lifecycle :sliding sub-sliding)
 * ```
 * 
 * You can use your new lifecycle by declaring `:re-frame/lifecycle`:
 * 
 *   `(re-frame.alpha/sub ^{:re-frame/lifecycle :sliding} [:hi 1]})`
 * 
 * After subscribing to more than three different queries, the sliding behavior will happen,
 * clearing some of the corresponding dataflow nodes from the cache.
 * 
 *   ```clojure
 *   (re-frame.alpha/sub ^{:re-frame/lifecycle :sliding} [:hi 2]})
 *   (re-frame.alpha/sub ^{:re-frame/lifecycle :sliding} [:hi 3]})
 *   (re-frame.alpha/sub ^{:re-frame/lifecycle :sliding} [:hi 4]}) ;; now [:hi 1] is cleared
 *   ```
 * Note: Lifecycles are an alpha feature. Don't expect `re-frame.core` to work the same way.
 * It's totally valid to add metadata to a query, but `re-frame.core` will ignore it.
 * For instance, this subscription creates a dataflow node with the `:reactive` lifecycle,
 * even though you've "declared" something else:
 * 
 * `(re-frame.core/subscribe ^{:re-frame/lifecycle :sliding} [:hi 4]})`
 * 
 * On the other hand, re-frame.alpha can make use of nodes created by re-frame.core.
 * Specifically, the `:safe` lifecycle also checks for an equivalent query
 * in the cache of `:reactive` nodes.
 * That way, you can subscribe to a query using plain old `re-frame.core/subscribe` within a view function,
 * and, elsewhere, subscribe to that same query using `re-frame.alpha/sub`, without needing to recalculate.
 *   
 * ##### Standard lifecycles
 * 
 * Re-frame provides these lifecycles. The default lifecycle is `:safe`.
 * 
 * **`:no-cache`** Creates a dataflow node and eagerly computes a subscription's value,
 * without storing the node in the signal graph.
 * 
 * If the subscription depends on other subscriptions, then re-frame will try to dispose them,
 * effectively making them `:no-cache` as well (as long as nothing else depends on them).
 * Thus, input signals are also cleared from memory when they aren't needed.
 * 
 * Note: Technically, if an input subscription has inputs of its own, those won't get cleared from memory.
 * In practice, these deps-of-deps will be layer-2 subscriptions,
 * which should be simple enough to avoid leaking memory anyway.
 * Otherwise, you could write a new lifecycle-fn to recursively cleanup the full dependency tree.
 * 
 * **`:safe`** subscribes in a memory-safe way, using the cache when it can,
 * and eagerly computing its output when it can't.
 * 
 * Re-frame uses `:safe` by default, whenever you use `re-frame.alpha/sub`
 * or `re-frame.alpha/subscribe` without declaring a lifecycle explicitly.
 * 
 * There is one exception to this memory-safety, which should be negligible (see `:no-cache` for details).
 * 
 * If your dataflow node is already cached (for instance, by calling `sub` in the render-fn of a mounted component),
 * then `:safe` will use the cached node, skipping the eager computation and cleanup.
 * 
 * Re-frame also checks the cache for an equivalent node with the `:reactive` lifecycle.
 * If such a node exists, re-frame uses it directly, without re-calculating or touching the cache.
 * 
 * Consequently:
 * When there are no reagent components mounted which depend on the subscription,
 * then the subscription will recalculate its output each time it's called,
 * even when its inputs are the same.
 * 
 * But, as long as there are reagent components, then caching and deduplication will
 * work as normal. In most cases, we expect `:safe` to be a reasonable tradeoff
 * between performance and memory-safety.
 * 
 * **`:forever`** Creates a long-lived subscription.
 * Re-frame looks up the cached subscription, creating it if necessary.
 * The subscription is permanently cached, never cleared. Re-frame eagerly
 * runs the subscription on creation, to create its input signals.
 * 
 * This behavior extends to input signals, making `:forever` effectively "contagious".
 * If the subscription depends on other subscriptions,
 * those subscriptions will be permanently stored in the cache,
 * despite other mechanisms' attempts to clear them (see `:no-cache` and `:reactive`).
 * This is because reagent's internals prevent disposal of "watched" reactions, and
 * a `:forever` subscription "watches" its inputs forever.
 * 
 * **`:reactive`** Looks up subscription from a cache, creating it if necessary.
 * The subscription stays in the cache for as long as one or more reagent
 * components depend on it.
 * 
 * Given a specific `query`, re-frame stores a set of back-references to
 * each reagent component which depends on its dataflow node - in other
 * words, each component which called `(sub query)` within its render
 * function. References are added when components call `sub`, and
 * removed when they unmount.  When the last component unmounts, and no
 * components depend on the node, then re-frame clears the node.
 * 
 * `:reactive` is unsafe when called outside a reactive context (in other
 * words, not inside a reagent component's render function). Since
 * there is no component, there is no way to clear the node. In cases
 * where sub is called many times with many different queries, this
 * effectively leaks memory. Re-frame prints a warning in this case.
 * 
 * Note: for more details on reactive context, see https://day8.github.io/re-frame/flows-advanced-topics/#reactive-context
 */
re_frame.alpha.reg = (function re_frame$alpha$reg(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17006 = arguments.length;
var i__5877__auto___17007 = (0);
while(true){
if((i__5877__auto___17007 < len__5876__auto___17006)){
args__5882__auto__.push((arguments[i__5877__auto___17007]));

var G__17008 = (i__5877__auto___17007 + (1));
i__5877__auto___17007 = G__17008;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return re_frame.alpha.reg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(re_frame.alpha.reg.cljs$core$IFn$_invoke$arity$variadic = (function (kind,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.register.alpha.reg,kind,args);
}));

(re_frame.alpha.reg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.alpha.reg.cljs$lang$applyTo = (function (seq16955){
var G__16956 = cljs.core.first(seq16955);
var seq16955__$1 = cljs.core.next(seq16955);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16956,seq16955__$1);
}));

/**
 * Given a `query`, returns a Reagent `reaction` which will, over
 *   time, reactively deliver a stream of values. So, in FRP-ish terms,
 *   it returns a `Signal`.
 * 
 *   To obtain the current value from the Signal, it must be dereferenced:
 * 
 * 
 *    (let [signal (sub {:re-frame/q ::items})
 *          value  (deref signal)]     ;; could be written as @signal
 *      ...)
 * 
 * which is typically written tersely as simple:
 * 
 *    (let [items  @(sub {:re-frame/q ::items})]
 *      ...)
 * 
 *   `query` is a map containing:
 * 
 *   - `:re-frame/q`:         Required. Names the query. Typically a namespaced keyword.
 *   - `:re-frame/lifecycle`: Optional. See docs for `reg :sub-lifecycle`.
 * 
 *   The entire `query` is passed to the subscription handler. This means you can use
 *   additional keys to parameterise the query it performs.
 * 
 *   **Example Usage**:
 * 
 * ```clojure
 * (require '[re-frame :as-alias rf])
 * (sub {::rf/q         ::items
 *    ::rf/lifecycle ::rf/reactive
 *    :color         "blue"
 *    :size          :small})
 * ```
 *   Note: for any given call to `sub there must have been a previous call
 *   to `reg`, registering the query handler (functions) associated with
 *   `query-id`.
 * 
 *   **Flows**
 * 
 *   Flows have their own lifecycle, and you don't need to provide an `::rf/lifecycle` key.
 *   To subscribe to a flow, simply call:
 * 
 *    
 *    (sub :flow {:id :your-flow-id})
 * 
 *   **Legacy support**
 * 
 *   `dyn-v` is not supported.
 * 
 *   See also: `reg`
 */
re_frame.alpha.sub = (function re_frame$alpha$sub(var_args){
var G__16958 = arguments.length;
switch (G__16958) {
case 1:
return re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$1 = (function (q){
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$1(q);
}));

(re_frame.alpha.sub.cljs$core$IFn$_invoke$arity$2 = (function (id,q){
return re_frame.subs.alpha.sub.cljs$core$IFn$_invoke$arity$2(id,q);
}));

(re_frame.alpha.sub.cljs$lang$maxFixedArity = 2);

/**
 * Registers a `flow`.
 * 
 * A full tutorial can be found at https://day8.github.io/re-frame/Flows
 * 
 * Re-frame uses the flow registry to execute a dataflow graph.
 * 
 * On every event, re-frame runs each registered `flow`.
 * It resolves the flow's inputs, determines if the flow is live, and if so,
 * evaluates the output function, putting the result in `app-db` at the `:path`.
 * 
 * A `flow` is a map, specifying one dataflow node. It has keys:
 * 
 * **`:id`** - uniquely identifies the node.
 * 
 * - When a `flow` is already registered with the same `:id`, replaces it.
 * - You can provide an `id` argument to `reg-flow`, instead of including `:id`.
 * 
 * **`:inputs`** - a map of `keyword->input`. An input can be one of two types:
 * 
 * - vector: expresses a path in `app-db`.
 * - map: expresses the output of another flow, identified by a `::re-frame.flow.alpha/flow<-` key.
 *   Call the `re-frame.alpha/flow<-` function to construct this map.
 * 
 * **`:output`** - a function of the `keyword->resolved-input` map returning the output value of the node.
 * 
 * - A resolved vector input is the value in `app-db` at that path.
 * - A resolved `flow<-` input is the value in `app-db` at the path of the named flow.
 * - Re-frame topologically sorts the flows, to make sure any input flows always run first.
 * - Re-frame throws an error at registration time if any flow inputs form a cycle.
 * 
 * **`:path`** - specifies the `app-db` location where the `:output` value is stored.
 * 
 * **`:live-inputs`** - a map of `keyword->live-input` for the `:live?` function.
 * 
 * - A `live-input` works the same way an `input`.
 * 
 * **`:live?`** - a predicate function of the `keyword->resolved-live-input` map, returning the current lifecycle state of the node.
 * 
 * **`:cleanup`** - a function of `app-db` and the `:path`.
 * 
 * - Returns a new `app-db`.
 * - Runs the first time `:live?` returns `false`
 * - Runs when the flow is cleared (see `re-frame.alpha/clear-flow`).
 * 
 * The only required key is `:id`. All others have a default value:
 * 
 * - `:path`: `id` if `id` is sequential, otherwise `[id]`.
 * - `:inputs`: `{}`
 * - `:output`: `(constantly true)`
 * - `:live?`: `(constantly true)`
 * - `:live-inputs`: `{}`
 * - `:cleanup`: `re-frame.utils/dissoc-in`
 */
re_frame.alpha.reg_flow = (function re_frame$alpha$reg_flow(var_args){
var G__16960 = arguments.length;
switch (G__16960) {
case 1:
return re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1 = (function (flow){
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$1(flow);
}));

(re_frame.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2 = (function (id,flow){
return re_frame.flow.alpha.reg_flow.cljs$core$IFn$_invoke$arity$2(id,flow);
}));

(re_frame.alpha.reg_flow.cljs$lang$maxFixedArity = 2);

/**
 * Arguments: `[id]`
 *   Deregisters a flow, identified by `id`.
 * 
 *   Later, re-frame will update `app-db` with the flow's `:cleanup` function.
 * 
 *   If `clear-flow` is invoked by the `:clear-flow` effect, this cleanup happens in the `:after` phase of the same event returning `:clear-flow`.
 * 
 *   If you call `clear-flow` directly, cleanup will happen on the next event.
 */
re_frame.alpha.clear_flow = (function re_frame$alpha$clear_flow(var_args){
var G__16962 = arguments.length;
switch (G__16962) {
case 0:
return re_frame.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$0();
}));

(re_frame.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.flow.alpha.clear_flow.cljs$core$IFn$_invoke$arity$1(id);
}));

(re_frame.alpha.clear_flow.cljs$lang$maxFixedArity = 1);

/**
 * Returns the value within `db` at the `:path` given by the registered flow
 *   with an `:id` key equal to `id`, if it exists. Otherwise, returns nil.
 */
re_frame.alpha.get_flow = (function re_frame$alpha$get_flow(db,id){
return re_frame.flow.alpha.resolve_input(db,cljs.core.deref(re_frame.flow.alpha.flows),re_frame.flow.alpha.flow_LT__(id));
});
/**
 * Creates an input from a flow id.
 */
re_frame.alpha.flow_LT__ = (function re_frame$alpha$flow_LT__(id){
return re_frame.flow.alpha.flow_LT__(id);
});
re_frame.alpha.reg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"flow","flow",590489032),(function (db,input){
return re_frame.flow.alpha.resolve_input(db,cljs.core.deref(re_frame.flow.alpha.flows),input);
})], 0));
re_frame.alpha.reg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"sub","sub",-2093760025),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"live?","live?",-1539352230),(function (db,input){
return re_frame.flow.alpha.resolve_input(db,cljs.core.deref(re_frame.flow.alpha.flows),input);
})], 0));
/**
 * Equivalent to `sub`.
 * 
 *   Uses the `:safe` lifecycle by default, compared with `re-frame.core`, which uses `:reactive`.
 * 
 *   Flows each have their own lifecycle and are not cached using the same mechanism as subscriptions.
 *   Call `(subscribe [:flow {:id :your-flow-id}])` to subscribe to a flow.
 */
re_frame.alpha.subscribe = re_frame.alpha.sub;
/**
 * Equivalent to `reg` `:legacy-sub`.
 */
re_frame.alpha.reg_sub = (function re_frame$alpha$reg_sub(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17012 = arguments.length;
var i__5877__auto___17013 = (0);
while(true){
if((i__5877__auto___17013 < len__5876__auto___17012)){
args__5882__auto__.push((arguments[i__5877__auto___17013]));

var G__17014 = (i__5877__auto___17013 + (1));
i__5877__auto___17013 = G__17014;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_frame.alpha.reg_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.alpha.reg,new cljs.core.Keyword(null,"legacy-sub","legacy-sub",207431632),args);
}));

(re_frame.alpha.reg_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.alpha.reg_sub.cljs$lang$applyTo = (function (seq16963){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16963));
}));

re_frame.alpha.dispatch = (function re_frame$alpha$dispatch(event){
return re_frame.router.dispatch(event);
});
re_frame.alpha.dispatch_sync = (function re_frame$alpha$dispatch_sync(event){
return re_frame.router.dispatch_sync(event);
});
re_frame.alpha.reg_event_db = (function re_frame$alpha$reg_event_db(var_args){
var G__16965 = arguments.length;
switch (G__16965) {
case 2:
return re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.alpha.reg_event_db.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,re_frame.flow.alpha.interceptor,re_frame.std_interceptors.inject_global_interceptors,interceptors,re_frame.flow.alpha.do_fx,re_frame.std_interceptors.db_handler__GT_interceptor(handler)], null));
}));

(re_frame.alpha.reg_event_db.cljs$lang$maxFixedArity = 3);

re_frame.alpha.reg_event_fx = (function re_frame$alpha$reg_event_fx(var_args){
var G__16967 = arguments.length;
switch (G__16967) {
case 2:
return re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.alpha.reg_event_fx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,re_frame.flow.alpha.interceptor,re_frame.std_interceptors.inject_global_interceptors,interceptors,re_frame.flow.alpha.do_fx,re_frame.std_interceptors.fx_handler__GT_interceptor(handler)], null));
}));

(re_frame.alpha.reg_event_fx.cljs$lang$maxFixedArity = 3);

re_frame.alpha.reg_event_ctx = (function re_frame$alpha$reg_event_ctx(var_args){
var G__16969 = arguments.length;
switch (G__16969) {
case 2:
return re_frame.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3(id,null,handler);
}));

(re_frame.alpha.reg_event_ctx.cljs$core$IFn$_invoke$arity$3 = (function (id,interceptors,handler){
return re_frame.events.register(id,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.cofx.inject_db,re_frame.fx.do_fx,re_frame.flow.alpha.interceptor,re_frame.std_interceptors.inject_global_interceptors,interceptors,re_frame.flow.alpha.do_fx,re_frame.std_interceptors.ctx_handler__GT_interceptor(handler)], null));
}));

(re_frame.alpha.reg_event_ctx.cljs$lang$maxFixedArity = 3);

re_frame.alpha.clear_event = (function re_frame$alpha$clear_event(var_args){
var G__16971 = arguments.length;
switch (G__16971) {
case 0:
return re_frame.alpha.clear_event.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.alpha.clear_event.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.clear_event.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.events.kind);
}));

(re_frame.alpha.clear_event.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.events.kind,id);
}));

(re_frame.alpha.clear_event.cljs$lang$maxFixedArity = 1);

re_frame.alpha.reg_event_error_handler = (function re_frame$alpha$reg_event_error_handler(handler){
return re_frame.registrar.register_handler(new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),handler);
});
re_frame.alpha.reg_event_error_handler(re_frame.interceptor.default_error_handler);
re_frame.alpha.clear_sub = (function re_frame$alpha$clear_sub(var_args){
var G__16973 = arguments.length;
switch (G__16973) {
case 0:
return re_frame.alpha.clear_sub.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.alpha.clear_sub.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.clear_sub.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.subs.kind);
}));

(re_frame.alpha.clear_sub.cljs$core$IFn$_invoke$arity$1 = (function (query_id){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.subs.kind,query_id);
}));

(re_frame.alpha.clear_sub.cljs$lang$maxFixedArity = 1);

re_frame.alpha.reg_sub_raw = (function re_frame$alpha$reg_sub_raw(query_id,handler_fn){
return re_frame.registrar.register_handler(re_frame.subs.kind,query_id,(function re_frame$alpha$reg_sub_raw_$_raw_subs_handler_fn(db,q){
var G__16974 = db;
var G__16975 = re_frame.subs.alpha.compat(q);
return (handler_fn.cljs$core$IFn$_invoke$arity$2 ? handler_fn.cljs$core$IFn$_invoke$arity$2(G__16974,G__16975) : handler_fn.call(null,G__16974,G__16975));
}));
});
re_frame.alpha.clear_subscription_cache_BANG_ = (function re_frame$alpha$clear_subscription_cache_BANG_(){
return re_frame.subs.clear_subscription_cache_BANG_();
});
re_frame.alpha.reg_fx = (function re_frame$alpha$reg_fx(id,handler){
if(cljs.core.not((function (){var fexpr__16976 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"clear-flow","clear-flow",2086400997),null,new cljs.core.Keyword(null,"reg-flow","reg-flow",-1365926178),null], null), null);
return (fexpr__16976.cljs$core$IFn$_invoke$arity$1 ? fexpr__16976.cljs$core$IFn$_invoke$arity$1(id) : fexpr__16976.call(null,id));
})())){
} else {
throw (new Error((""+"Assert failed: "+"The effect keys `:reg-flow` and `:clear-flow` are reserved for `re-frame.alpha`"+"\n"+"(not (#{:clear-flow :reg-flow} id))")));
}

return re_frame.fx.reg_fx(id,handler);
});
re_frame.alpha.clear_fx = (function re_frame$alpha$clear_fx(var_args){
var G__16978 = arguments.length;
switch (G__16978) {
case 0:
return re_frame.alpha.clear_fx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.alpha.clear_fx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.clear_fx.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind);
}));

(re_frame.alpha.clear_fx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.fx.kind,id);
}));

(re_frame.alpha.clear_fx.cljs$lang$maxFixedArity = 1);

re_frame.alpha.reg_cofx = (function re_frame$alpha$reg_cofx(id,handler){
return re_frame.cofx.reg_cofx(id,handler);
});
re_frame.alpha.inject_cofx = (function re_frame$alpha$inject_cofx(var_args){
var G__16980 = arguments.length;
switch (G__16980) {
case 1:
return re_frame.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$1(id);
}));

(re_frame.alpha.inject_cofx.cljs$core$IFn$_invoke$arity$2 = (function (id,value){
return re_frame.cofx.inject_cofx.cljs$core$IFn$_invoke$arity$2(id,value);
}));

(re_frame.alpha.inject_cofx.cljs$lang$maxFixedArity = 2);

re_frame.alpha.clear_cofx = (function re_frame$alpha$clear_cofx(var_args){
var G__16982 = arguments.length;
switch (G__16982) {
case 0:
return re_frame.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$1(re_frame.cofx.kind);
}));

(re_frame.alpha.clear_cofx.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.registrar.clear_handlers.cljs$core$IFn$_invoke$arity$2(re_frame.cofx.kind,id);
}));

(re_frame.alpha.clear_cofx.cljs$lang$maxFixedArity = 1);

re_frame.alpha.debug = re_frame.std_interceptors.debug;
re_frame.alpha.path = (function re_frame$alpha$path(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17023 = arguments.length;
var i__5877__auto___17024 = (0);
while(true){
if((i__5877__auto___17024 < len__5876__auto___17023)){
args__5882__auto__.push((arguments[i__5877__auto___17024]));

var G__17025 = (i__5877__auto___17024 + (1));
i__5877__auto___17024 = G__17025;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_frame.alpha.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_frame.alpha.path.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.std_interceptors.path,args);
}));

(re_frame.alpha.path.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.alpha.path.cljs$lang$applyTo = (function (seq16983){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16983));
}));

re_frame.alpha.enrich = (function re_frame$alpha$enrich(f){
return re_frame.std_interceptors.enrich(f);
});
re_frame.alpha.unwrap = re_frame.std_interceptors.unwrap;
re_frame.alpha.trim_v = re_frame.std_interceptors.trim_v;
re_frame.alpha.after = (function re_frame$alpha$after(f){
return re_frame.std_interceptors.after(f);
});
re_frame.alpha.on_changes = (function re_frame$alpha$on_changes(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17026 = arguments.length;
var i__5877__auto___17027 = (0);
while(true){
if((i__5877__auto___17027 < len__5876__auto___17026)){
args__5882__auto__.push((arguments[i__5877__auto___17027]));

var G__17028 = (i__5877__auto___17027 + (1));
i__5877__auto___17027 = G__17028;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((2) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((2)),(0),null)):null);
return re_frame.alpha.on_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5883__auto__);
});

(re_frame.alpha.on_changes.cljs$core$IFn$_invoke$arity$variadic = (function (f,out_path,in_paths){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_frame.std_interceptors.on_changes,f,out_path,in_paths);
}));

(re_frame.alpha.on_changes.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_frame.alpha.on_changes.cljs$lang$applyTo = (function (seq16984){
var G__16985 = cljs.core.first(seq16984);
var seq16984__$1 = cljs.core.next(seq16984);
var G__16986 = cljs.core.first(seq16984__$1);
var seq16984__$2 = cljs.core.next(seq16984__$1);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16985,G__16986,seq16984__$2);
}));

re_frame.alpha.reg_global_interceptor = (function re_frame$alpha$reg_global_interceptor(interceptor){
return re_frame.settings.reg_global_interceptor(interceptor);
});
re_frame.alpha.clear_global_interceptor = (function re_frame$alpha$clear_global_interceptor(var_args){
var G__16988 = arguments.length;
switch (G__16988) {
case 0:
return re_frame.alpha.clear_global_interceptor.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return re_frame.alpha.clear_global_interceptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.clear_global_interceptor.cljs$core$IFn$_invoke$arity$0 = (function (){
return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$0();
}));

(re_frame.alpha.clear_global_interceptor.cljs$core$IFn$_invoke$arity$1 = (function (id){
return re_frame.settings.clear_global_interceptors.cljs$core$IFn$_invoke$arity$1(id);
}));

(re_frame.alpha.clear_global_interceptor.cljs$lang$maxFixedArity = 1);

re_frame.alpha.__GT_interceptor = (function re_frame$alpha$__GT_interceptor(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17030 = arguments.length;
var i__5877__auto___17031 = (0);
while(true){
if((i__5877__auto___17031 < len__5876__auto___17030)){
args__5882__auto__.push((arguments[i__5877__auto___17031]));

var G__17032 = (i__5877__auto___17031 + (1));
i__5877__auto___17031 = G__17032;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_frame.alpha.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_frame.alpha.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic = (function (p__16990){
var map__16991 = p__16990;
var map__16991__$1 = cljs.core.__destructure_map(map__16991);
var m = map__16991__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16991__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16991__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16991__$1,new cljs.core.Keyword(null,"after","after",594996914));
return re_frame.utils.apply_kw.cljs$core$IFn$_invoke$arity$variadic(re_frame.interceptor.__GT_interceptor,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m], 0));
}));

(re_frame.alpha.__GT_interceptor.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.alpha.__GT_interceptor.cljs$lang$applyTo = (function (seq16989){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq16989));
}));

re_frame.alpha.get_coeffect = (function re_frame$alpha$get_coeffect(var_args){
var G__16993 = arguments.length;
switch (G__16993) {
case 1:
return re_frame.alpha.get_coeffect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.alpha.get_coeffect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.alpha.get_coeffect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.get_coeffect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$1(context);
}));

(re_frame.alpha.get_coeffect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,key);
}));

(re_frame.alpha.get_coeffect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$3(context,key,not_found);
}));

(re_frame.alpha.get_coeffect.cljs$lang$maxFixedArity = 3);

re_frame.alpha.assoc_coeffect = (function re_frame$alpha$assoc_coeffect(context,key,value){
return re_frame.interceptor.assoc_coeffect(context,key,value);
});
re_frame.alpha.get_effect = (function re_frame$alpha$get_effect(var_args){
var G__16995 = arguments.length;
switch (G__16995) {
case 1:
return re_frame.alpha.get_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.alpha.get_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.alpha.get_effect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.get_effect.cljs$core$IFn$_invoke$arity$1 = (function (context){
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context);
}));

(re_frame.alpha.get_effect.cljs$core$IFn$_invoke$arity$2 = (function (context,key){
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$2(context,key);
}));

(re_frame.alpha.get_effect.cljs$core$IFn$_invoke$arity$3 = (function (context,key,not_found){
return re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,key,not_found);
}));

(re_frame.alpha.get_effect.cljs$lang$maxFixedArity = 3);

re_frame.alpha.assoc_effect = (function re_frame$alpha$assoc_effect(context,key,value){
return re_frame.interceptor.assoc_effect(context,key,value);
});
re_frame.alpha.enqueue = (function re_frame$alpha$enqueue(context,interceptors){
return re_frame.interceptor.enqueue(context,interceptors);
});
re_frame.alpha.set_loggers_BANG_ = (function re_frame$alpha$set_loggers_BANG_(new_loggers){
return re_frame.loggers.set_loggers_BANG_(new_loggers);
});
re_frame.alpha.console = (function re_frame$alpha$console(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17035 = arguments.length;
var i__5877__auto___17036 = (0);
while(true){
if((i__5877__auto___17036 < len__5876__auto___17035)){
args__5882__auto__.push((arguments[i__5877__auto___17036]));

var G__17037 = (i__5877__auto___17036 + (1));
i__5877__auto___17036 = G__17037;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((1) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((1)),(0),null)):null);
return re_frame.alpha.console.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5883__auto__);
});

(re_frame.alpha.console.cljs$core$IFn$_invoke$arity$variadic = (function (level,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_frame.loggers.console,level,args);
}));

(re_frame.alpha.console.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_frame.alpha.console.cljs$lang$applyTo = (function (seq16996){
var G__16997 = cljs.core.first(seq16996);
var seq16996__$1 = cljs.core.next(seq16996);
var self__5861__auto__ = this;
return self__5861__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16997,seq16996__$1);
}));

re_frame.alpha.make_restore_fn = (function re_frame$alpha$make_restore_fn(){
var handlers = cljs.core.deref(re_frame.registrar.kind__GT_id__GT_handler);
var app_db = cljs.core.deref(re_frame.db.app_db);
var subs_cache = cljs.core.deref(re_frame.subs.query__GT_reaction);
return (function (){
var original_subs_17038 = cljs.core.set(cljs.core.vals(subs_cache));
var current_subs_17039 = cljs.core.set(cljs.core.vals(cljs.core.deref(re_frame.subs.query__GT_reaction)));
var seq__16998_17040 = cljs.core.seq(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(current_subs_17039,original_subs_17038));
var chunk__16999_17041 = null;
var count__17000_17042 = (0);
var i__17001_17043 = (0);
while(true){
if((i__17001_17043 < count__17000_17042)){
var sub_17044 = chunk__16999_17041.cljs$core$IIndexed$_nth$arity$2(null,i__17001_17043);
re_frame.interop.dispose_BANG_(sub_17044);


var G__17045 = seq__16998_17040;
var G__17046 = chunk__16999_17041;
var G__17047 = count__17000_17042;
var G__17048 = (i__17001_17043 + (1));
seq__16998_17040 = G__17045;
chunk__16999_17041 = G__17046;
count__17000_17042 = G__17047;
i__17001_17043 = G__17048;
continue;
} else {
var temp__5823__auto___17049 = cljs.core.seq(seq__16998_17040);
if(temp__5823__auto___17049){
var seq__16998_17050__$1 = temp__5823__auto___17049;
if(cljs.core.chunked_seq_QMARK_(seq__16998_17050__$1)){
var c__5673__auto___17051 = cljs.core.chunk_first(seq__16998_17050__$1);
var G__17052 = cljs.core.chunk_rest(seq__16998_17050__$1);
var G__17053 = c__5673__auto___17051;
var G__17054 = cljs.core.count(c__5673__auto___17051);
var G__17055 = (0);
seq__16998_17040 = G__17052;
chunk__16999_17041 = G__17053;
count__17000_17042 = G__17054;
i__17001_17043 = G__17055;
continue;
} else {
var sub_17056 = cljs.core.first(seq__16998_17050__$1);
re_frame.interop.dispose_BANG_(sub_17056);


var G__17057 = cljs.core.next(seq__16998_17050__$1);
var G__17058 = null;
var G__17059 = (0);
var G__17060 = (0);
seq__16998_17040 = G__17057;
chunk__16999_17041 = G__17058;
count__17000_17042 = G__17059;
i__17001_17043 = G__17060;
continue;
}
} else {
}
}
break;
}

cljs.core.reset_BANG_(re_frame.registrar.kind__GT_id__GT_handler,handlers);

cljs.core.reset_BANG_(re_frame.db.app_db,app_db);

return null;
});
});
re_frame.alpha.purge_event_queue = (function re_frame$alpha$purge_event_queue(){
return re_frame.router.event_queue.re_frame$router$IEventQueue$purge$arity$1(null);
});
re_frame.alpha.add_post_event_callback = (function re_frame$alpha$add_post_event_callback(var_args){
var G__17003 = arguments.length;
switch (G__17003) {
case 1:
return re_frame.alpha.add_post_event_callback.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_frame.alpha.add_post_event_callback.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",arguments.length].join("")));

}
});

(re_frame.alpha.add_post_event_callback.cljs$core$IFn$_invoke$arity$1 = (function (f){
return re_frame.alpha.add_post_event_callback.cljs$core$IFn$_invoke$arity$2(f,f);
}));

(re_frame.alpha.add_post_event_callback.cljs$core$IFn$_invoke$arity$2 = (function (id,f){
return re_frame.router.event_queue.re_frame$router$IEventQueue$add_post_event_callback$arity$3(null,id,f);
}));

(re_frame.alpha.add_post_event_callback.cljs$lang$maxFixedArity = 2);

re_frame.alpha.remove_post_event_callback = (function re_frame$alpha$remove_post_event_callback(id){
return re_frame.router.event_queue.re_frame$router$IEventQueue$remove_post_event_callback$arity$2(null,id);
});
re_frame.alpha.register_handler = (function re_frame$alpha$register_handler(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17062 = arguments.length;
var i__5877__auto___17063 = (0);
while(true){
if((i__5877__auto___17063 < len__5876__auto___17062)){
args__5882__auto__.push((arguments[i__5877__auto___17063]));

var G__17064 = (i__5877__auto___17063 + (1));
i__5877__auto___17063 = G__17064;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_frame.alpha.register_handler.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_frame.alpha.register_handler.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.alpha.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \"register-handler\" has been renamed \"reg-event-db\" (look for registration of ",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args))),")"], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.alpha.reg_event_db,args);
}));

(re_frame.alpha.register_handler.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.alpha.register_handler.cljs$lang$applyTo = (function (seq17004){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17004));
}));

re_frame.alpha.register_sub = (function re_frame$alpha$register_sub(var_args){
var args__5882__auto__ = [];
var len__5876__auto___17065 = arguments.length;
var i__5877__auto___17066 = (0);
while(true){
if((i__5877__auto___17066 < len__5876__auto___17065)){
args__5882__auto__.push((arguments[i__5877__auto___17066]));

var G__17067 = (i__5877__auto___17066 + (1));
i__5877__auto___17066 = G__17067;
continue;
} else {
}
break;
}

var argseq__5883__auto__ = ((((0) < args__5882__auto__.length))?(new cljs.core.IndexedSeq(args__5882__auto__.slice((0)),(0),null)):null);
return re_frame.alpha.register_sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5883__auto__);
});

(re_frame.alpha.register_sub.cljs$core$IFn$_invoke$arity$variadic = (function (args){
re_frame.alpha.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \"register-sub\" is used to register the event ",(""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(args)))," but it is a deprecated part of the API. Please use \"reg-sub-raw\" instead."], 0));

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(re_frame.alpha.reg_sub_raw,args);
}));

(re_frame.alpha.register_sub.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_frame.alpha.register_sub.cljs$lang$applyTo = (function (seq17005){
var self__5862__auto__ = this;
return self__5862__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17005));
}));


//# sourceMappingURL=re_frame.alpha.js.map
