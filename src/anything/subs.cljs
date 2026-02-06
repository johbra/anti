(ns anything.subs  
  (:require [re-frame.core :as rf]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Hier werden Zugriff Datenbankfelder registriert, wodurch Änderungen an diesen
;; zu Reaktionen auf der Benutzungsoberfläche führen.
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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

