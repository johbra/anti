(ns ^:figwheel-hooks anything.core
  (:require
   [re-frame.core :as rf]
   #_[re-frame.alpha :as rf] 
   [anything.views :as av]
   [anything.events]
   [anything.subs]
   [reagent.dom :as rdom]))

(defn ^:export main     ;; call this to bootstrap your app
  [] 
  (rf/dispatch-sync [:initialize]) 
  (rdom/render [av/ui]
               (js/document.getElementById "app")))

;; and this is what figwheel calls after each save
(defn ^:after-load re-render []
  (main))

;; this only gets called once
(defonce start-up (do (main) (js/console.log @re-frame.db/app-db) true))
