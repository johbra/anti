(ns anything.events 
  (:require [re-frame.core :as rf]
            [anything.db :as db]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Hier werden die Ereignisse abgehandelt, die durch Benutzeraktionen ausgelöst werden.
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(rf/reg-event-db
 :initialize
 (fn [_]
   (reset! re-frame.db/app-db db/default-db)))

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
