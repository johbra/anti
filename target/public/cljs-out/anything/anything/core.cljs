(ns ^:figwheel-hooks anything.core
  (:require
   [re-frame.core :as rf]
   #_[re-frame.alpha :as rf]
   [reagent.dom :as rdom] 
   [re-com.core :refer [v-box h-box box gap button title alert-box hyperlink
                        scroller label input-text single-dropdown ]]
   [cljs-time.local :as l]
   [cljs-time.core :as t]))

(defn heute
  []
  (str (t/day (l/local-now)) "." 
       (t/month (l/local-now)) "."
       (t/year (l/local-now)))
  )

(rf/reg-event-db              ;; sets up initial application state
 :initialize                 ;; usage:  (dispatch [:initialize])
 (fn [_ _]                   ;; the two parameters are not important here, so use _
   (let [db 
         {:invoices
          {:invoice1
           {:date (heute)
            :address {:street "invoice-street"
                      :street-no "4711"
                      :city-name "Bremen"
                      :city-code "28"}
            :Sum 0
            :VAT 0
            :totals 0
            :items
            {:product1 {:description "Product1"
                        :amount 5
                        :price 3
                        :total 0
                        }
             :product2  {:description "Product2"
                         :amount 3
                         :price 6
                         :total 0}}
            :customer {:first-name "Jack"
                       :last-name  "Cust"
                       :company    "JC"
                       :address {:street "customer-street"
                                 :street-no "2"
                                 :city-name "Hamburg"
                                 :city-code "20"}}}
           :invoice2
           {:date (heute)
            :address {:city-name "Elmshorn"}
            :customer nil}}
          :selected-invoice 0
          :selected-product nil
          :selected-address nil
          :selected-customer nil}] 
     db)))

(rf/reg-event-db             
 :product-change       
 (fn [db [_ product key new-value]]  
   (assoc-in db [:invoices :invoice1 :items product key] new-value)))

(rf/reg-event-db             
 :invoice-sum       
 (fn [db [_  key new-value]] 
   (assoc-in db [:invoices key :Sum] new-value)))

(rf/reg-event-db             
 :invoice-vat       
 (fn [db [_  key new-value]] 
   (assoc-in db [:invoices key :VAT] new-value)))

(rf/reg-event-db             
 :invoice-totals       
 (fn [db [_  key new-value]] 
   (assoc-in db [:invoices key :totals] new-value)))

(rf/reg-event-db             
 :select-invoice
 [rf/debug]
 (fn [db [_ new-value]]  
   (assoc db :selected-invoice new-value)))

(rf/reg-event-db             
 :selected-address
 [rf/debug]
 (fn [db [_ new-value]]  
   (assoc db :selected-address (if (:selected-address db) nil new-value))))

(rf/reg-event-db             
 :selected-customer
 [rf/debug]
 (fn [db [_ new-value]] 
   (if (:selected-customer db)
     (assoc db :selected-customer nil :selected-cust-address nil)
     (assoc db :selected-customer new-value))))

(rf/reg-event-db             
 :selected-cust-address
 [rf/debug]
 (fn [db [_ new-value]]  
   (assoc db :selected-cust-address (if (:selected-cust-address db) nil new-value))))

(rf/reg-event-db             
 :selected-product
 [rf/debug]
 (fn [db [_ new-value]] 
   (assoc db :selected-product (if (:selected-product db) nil new-value))))

(rf/reg-sub 
 :products 
 (fn [db _] 
   (:items (:invoice1 (:invoices db)))))

(rf/reg-sub 
 :invoices 
 (fn [db _] 
   (:invoices db)))

(rf/reg-sub 
 :selected-invoice
 (fn [db _] 
   (:selected-invoice db)))

(rf/reg-sub 
 :selected-product
 (fn [db _] 
   (:selected-product db)))

(rf/reg-sub 
 :selected-address
 (fn [db _] 
   (:selected-address db)))

(rf/reg-sub 
 :selected-customer
 (fn [db _] 
   (:selected-customer db)))

(rf/reg-sub 
 :selected-cust-adr
 (fn [db _] 
   (:selected-cust-address db)))

(defn product
  []
  (let [sp @(rf/subscribe [:selected-product])
        p (sp @(rf/subscribe [:products]))
        ttl        (* (:amount p) (:price p))  
        gettext (fn [e] (js/parseInt e))
        emit-amount #(rf/dispatch [:product-change sp :amount (gettext %)]) 
        emit-price  #(rf/dispatch [:product-change sp :price  (gettext %)])        
        ] 
    (rf/dispatch [:product-change sp :total ttl])
    (when sp
      [v-box
       :children [[h-box :children [[box :size "80px" :child "Description: "]
                                    (:description p)]]
                  [h-box :children [[box :size "80px" :child "Amount: "]
                                    [input-text :model (str (:amount p))
                                     :on-change emit-amount
                                     :change-on-blur? false
                                     :validation-regex  #"^[-+]?[0-9]*$"
                                     :attr {:type "number"}
                                     :style {:background-color "beige"}]
                                    ]]
                  [h-box :children [[box :size "80px" :child "Price: "]
                                    [input-text :model (str (:price p))
                                     :on-change emit-price
                                     :change-on-blur? false
                                     :validation-regex  #"^[-+]?[0-9]*$"
                                     :attr {:type "number"}
                                     :style {:background-color "beige"}]
                                    ]]
                  [h-box :children [[box :size "80px" :child "Total: "] ttl]]]])))

(defn address
  [adr]
  [v-box :children
   [[h-box :children [[box :size "80px" :child "street: "]    (:street adr)]]
    [h-box :children [[box :size "80px" :child "street-no: "] (:street-no adr)]]
    [h-box :children [[box :size "80px" :child "city-name: "] (:city-name adr)]]
    [h-box :children [[box :size "80px" :child "city-code: "] (:city-code adr)]]]]
  )

(defn customer
  [cust]
  [v-box :children
   [[h-box :children [[box :size "80px" :child "first-name: "]    (:first-name cust)]]
    [h-box :children [[box :size "80px" :child "last-name: "]    (:last-name cust)]]
    [h-box :children [[box :size "80px" :child "company: "]    (:company cust)]]
    [h-box :children [[box :size "80px" :child "address. "]
                      [hyperlink :style {:color "blue"}
                       :label (:city-name (:address cust))
                       :on-click #(rf/dispatch
                                   [:selected-cust-address (:address cust)])]]]
    #_[h-box :children [[box :size "80px" :child "city-name: "] (:city-name cust)]]
    #_[h-box :children [[box :size "80px" :child "city-code: "] (:city-code cust)]]]]
  )

(defn customer-address
  [adr]
  (println adr)
  [v-box :children
   [[h-box :children [[box :size "80px" :child "street: "]    (:street adr)]]
    [h-box :children [[box :size "80px" :child "street-no: "] (:street-no adr)]]
    [h-box :children [[box :size "80px" :child "city-name: "] (:city-name adr)]]
    [h-box :children [[box :size "80px" :child "city-code: "] (:city-code adr)]]]])

(defn invoice
  [inv]
  (let [prodcts @(rf/subscribe [:products])
        invoice-key @(rf/subscribe [:selected-invoice])
        sum (reduce + 0 (map #(* (:amount %) (:price %)) (vals (:items inv))))
        _ (rf/dispatch [:invoice-sum invoice-key  (str sum)])
        _ (rf/dispatch [:invoice-vat invoice-key
                        (.toLocaleString (* 0.19 sum) "de-DE" #js [] )])
        _ (rf/dispatch [:invoice-totals invoice-key
                        (.toLocaleString (* 1.19 sum) "de-DE" #js [] )])
        ]
    [v-box :children
     [[h-box :gap "5pt"
       :children [[label :label "date:"][box :child (:date inv)]]]
      [h-box :gap "5pt"
       :children [[label :label "address:"]
                  [hyperlink :style {:color "blue"}
                   :label (:city-name (:address inv))
                   :on-click #(rf/dispatch [:selected-address (:address inv)])]]]
      [h-box :gap "5pt"
       :children [[label :label "Sum:"][box :child (str (:Sum inv))]]]
      [h-box :gap "5pt"
       :children [[label :label "VAT:"][box :child (str (:VAT inv))]]]
      [h-box :gap "5pt"
       :children [[label :label "totals:"][box :child (str (:totals inv))]]]
      (when (:items inv)
        [h-box :gap "5pt"
         :children 
         [[label :label "items:"]
          [v-box :children
           (vec (for [[k v] (:items inv)]
                  [hyperlink :style {:color "blue"}
                   :label k
                   :on-click #(rf/dispatch [:selected-product k])]))]]])
      (when (:customer inv)
        [h-box :gap "5pt"
         :children
         [[label :label "customer:"]
          [hyperlink :style {:color "blue"}
           :label (str (:first-name (:customer inv)) " "(:last-name (:customer inv)))
           :on-click #(rf/dispatch [:selected-customer (:customer inv)])]]])
      ]]))

(defn select-box
  [lable values selected-value callback-fn]
  [v-box
   :gap "5px"
   :children
   [[label :label [:b lable]]
    [single-dropdown
     :width "100px"
     :placeholder "AAAAAAAAA" 
     :choices (for [v values] {:id {:key v} :label v})
     :model (if (= selected-value 0) nil {:key selected-value})
     :placeholder "?" 
     :on-change callback-fn]]
   ]) 

(defn ui []
  (let [invcs @(rf/subscribe [:invoices])
        selctd-inv @(rf/subscribe [:selected-invoice])
        selctd-prod @(rf/subscribe [:selected-product])
        selctd-addr @(rf/subscribe [:selected-address])
        selctd-cust @(rf/subscribe [:selected-customer])
        selctd-cuad @(rf/subscribe [:selected-cust-adr])
        _ nil #_(println invcs)]
    [v-box :gap "12pt" :children
     [[:h1 "Anything-Beispiel aus P-Schrift"]
                                        ;[h-box :gap "12pt" :children
      [h-box :gap "12pt" :children
       [(select-box "Invoices" (vec (keys invcs)) selctd-inv 
                    #(rf/dispatch [:select-invoice (first (vals %))])) 
        (when (not (= selctd-inv 0)) (invoice (selctd-inv invcs)))
        (when selctd-prod (product))
        (when selctd-addr (address selctd-addr))
        (when selctd-cust (customer selctd-cust))
        (when selctd-cuad (customer-address selctd-cuad))]]
      ]]) 
  )

(defn ^:export main     ;; call this to bootstrap your app
  [] 
  (rf/dispatch-sync [:initialize]) 
  (rdom/render [ui]
               (js/document.getElementById "app")))

;; and this is what figwheel calls after each save
(defn ^:after-load re-render []
  (main))

;; this only gets called once
(defonce start-up (do (main) (js/console.log @re-frame.db/app-db) true))
