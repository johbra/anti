(ns anything.core
  (:require
   [reagent.dom.client :as rdc]
   [re-frame.alpha :as rf] 
   [anything.views :as av]
   [anything.events]
   [anything.db    :as db]
   ))

(defonce root-container
  (rdc/create-root (js/document.getElementById "app")))

(defn main     ;; call this to bootstrap your app
  [] 
  (db/product-flows)
  (db/invoice-sum-flows)
  (db/invoice-field-flows :VAT db/vat)
  (db/invoice-field-flows :totals db/totals)
  (rdc/render root-container [av/ui]))

(defn ^:dev/after-load clear-cache-and-render!
  []
  ;; The `:dev/after-load` metadata causes this function to be called
  ;; after shadow-cljs hot-reloads code. We force a UI update by clearing
  ;; the Reframe subscription cache.
  (rf/clear-subscription-cache!)
  (main))

(defn run            ;; Your app calls this when it starts. See shadow-cljs.edn :init-fn.
  []
  (rf/dispatch-sync [:initialize]) ;; put a value into application state
  (main))                      ;; mount the application's ui into '<div id="app" />'
