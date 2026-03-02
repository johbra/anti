(ns anything.views
  (:require [re-frame.alpha :as rf] 
            [anything.subs]
            [re-com.core :refer [v-box h-box box hyperlink
                                 label input-text single-dropdown]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Diese Funktionen realisieren die Benutzungsoberflache, indem sie mithilfe von Reagent
;; HTML generieren. Außerdem werden hier mithilfe von subscribe's die Abhängigkeiten von
;; Änderungen von Daten definiert.
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn product
  []
  (let [sp @(rf/subscribe [:selected-product])
        p (sp @(rf/subscribe [:products]))
        gettext (fn [e] (js/parseInt e))
        emit-amount #(rf/dispatch [:product-change sp :amount (gettext %)]) 
        emit-price  #(rf/dispatch [:product-change sp :price  (gettext %)])        
        ]
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
                  [h-box :children [[box :size "80px" :child "Total: "]
                                    (:total p)]]]])))

(defn address
  [adr]
  [v-box :children
   [[h-box :children [[box :size "80px" :child "street: "]    (:street adr)]]
    [h-box :children [[box :size "80px" :child "street-no: "] (:street-no adr)]]
    [h-box :children [[box :size "80px" :child "city-name: "] (:city-name adr)]]
    [h-box :children [[box :size "80px" :child "city-code: "] (:city-code adr)]]]])

(defn customer
  [cust]
  [v-box :children
   [[h-box :children [[box :size "80px" :child "first-name: "] (:first-name cust)]]
    [h-box :children [[box :size "80px" :child "last-name: "]  (:last-name cust)]]
    [h-box :children [[box :size "80px" :child "company: "]    (:company cust)]]
    [h-box :children [[box :size "80px" :child "address. "]
                      [hyperlink :style {:color "blue"}
                       :label (:city-name (:address cust))
                       :on-click #(rf/dispatch
                                   [:selected-cust-address (:address cust)])]]]]])
(defn customer-address
  [adr] 
  [v-box :children
   [[h-box :children [[box :size "80px" :child "street: "]    (:street adr)]]
    [h-box :children [[box :size "80px" :child "street-no: "] (:street-no adr)]]
    [h-box :children [[box :size "80px" :child "city-name: "] (:city-name adr)]]
    [h-box :children [[box :size "80px" :child "city-code: "] (:city-code adr)]]]])

(defn invoice
  [invoice] 
  [v-box :children 
   [[h-box :gap "5pt"
     :children [[label :label "date:"][box :child (:date invoice)]]]
    [h-box :gap "5pt"
     :children [[label :label "address:"]
                [hyperlink :style {:color "blue"}
                 :label (:city-name (:address invoice))
                 :on-click #(rf/dispatch [:selected-address (:address invoice)])]]]
    [h-box :gap "5pt"
     :children [[label :label "Sum:"][box :child (str (:Sum invoice))]]]
    [h-box :gap "5pt"
     :children [[label :label "VAT:"][box :child (str (:VAT invoice))]]]
    [h-box :gap "5pt"
     :children [[label :label "totals:"][box :child (str (:totals invoice))]]]
    (when (:items invoice)
      [h-box :gap "5pt"
       :children 
       [[label :label "items:"]
        [v-box :children
         (vec (for [[k i] (:items invoice)]
                [hyperlink :style {:color "blue"}
                 :label (:description i)
                 :on-click #(rf/dispatch [:selected-product k])]))]]])
    (when (:customer invoice)
      [h-box :gap "5pt"
       :children
       [[label :label "customer:"]
        [hyperlink :style {:color "blue"}
         :label (str (:first-name (:customer invoice))
                     " "(:last-name (:customer invoice)))
         :on-click #(rf/dispatch [:selected-customer (:customer invoice)])]]])
    ]])

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
        selctd-cuad @(rf/subscribe [:selected-cust-adr])]
    [v-box :gap "12pt" :children
     [[:h1 "A-Beispiel aus P-Schrift"]      
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
