(ns anything.db
  (:require [cljs-time.core :as t]
            [cljs-time.local :as l]
            [re-frame.alpha :as rf]))

(def default-db
  (let [now (l/local-now)
        datum (str (t/day now) "." (t/month now) "." (t/year now))]
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    ;; Diese Hash-Map stellt das Datenmodell für die Beispiel-Anwendung dar:
    {:invoices
     {:invoice1 {:date datum
                 :address {:street "invoice-street"
                           :street-no "4711"
                           :city-name "Bremen"
                           :city-code "28"}
                 :Sum 0
                 :VAT 0
                 :totals 0
                 :items {:product1 {:description "Product1"
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
      :invoice2 {:date datum
                 :address {:city-name "Elmshorn"}
                 :customer nil}}
     ;; die folgenden Einträge dienen nur der Benutzungsoberfläche:
     :selected-invoice 0
     :selected-product nil
     :selected-address nil
     :selected-customer nil}))

(defn product-flow
  ;; Definition der Abhängigkeit :total = f(:price, :amount)
  [invoice-key product-key] 
  (when (:items (invoice-key (:invoices default-db)))
    (rf/reg-flow (keyword (str (name invoice-key) "-" (name product-key)))
                 {:inputs {:a [:invoices invoice-key :items product-key :amount]
                           :p [:invoices invoice-key :items product-key :price]}
                  :output (fn [{:keys [a p]}] (* a p))
                  :path   [:invoices invoice-key :items product-key :total]})))

(defn product-flows
  ;; erzeugt die "product-flows" für alle products aller invoices
  []
  (let [invoices (:invoices default-db)
        invs (vec (keys invoices)) 
        ips (for [i invs] [i (vec (keys (:items (i invoices))))])]
    (doseq [x ips] (doseq [y (second x)] (product-flow (first x) y)))))

(defn invoice-sum-flow
  ;; Definition der Abhängikeit :Sum = f(product-:totals)
  [invoice-key]
  (when (:items (invoice-key (:invoices default-db)))
    (let [p-keys (vec (keys (get-in default-db [:invoices invoice-key :items])))
          flows (for [p p-keys]
                  (rf/flow<- (keyword (str (name invoice-key) "-" (name p)))))
          inputs (zipmap p-keys flows)] 
      (rf/reg-flow (keyword (str (name invoice-key) "-sum"))
                   {:inputs inputs
                    :output (fn [t] (reduce + 0 (vals t)))
                    :path   [:invoices invoice-key :Sum ]}))))

(defn invoice-sum-flows
  ;; erzeugt die invoice-sum-flows für alle invoices
  []
  (let [inv-keys (vec (keys (:invoices default-db)))]
    (doseq [i inv-keys] (invoice-sum-flow i))))

(defn invoice-field-flow
  ;; Definition der Abhängigkeiten verschiedener invoice-fields von :Sum
  [invoice-key field f ]  
  (when (:items (invoice-key (:invoices default-db)))
    (rf/reg-flow (keyword (str (name invoice-key) "-" (name field)))
                 {:inputs {:sum (rf/flow<- (keyword (str (name invoice-key) "-sum")))}
                  :output f 
                  :path   [:invoices invoice-key field]})))

(def vat (fn [{:keys [sum]}]
           (.toLocaleString (* 0.19 sum) "de-DE" #js [])))

(def totals (fn [{:keys [sum]}]
              (.toLocaleString (* 1.19 sum) "de-DE" #js [])))

(defn invoice-field-flows
  ;; erzeugt die invoice-field-flows für alle invoices
  [field f]
  (let [inv-keys (vec (keys (:invoices default-db)))]
    (doseq [i inv-keys]
      (invoice-field-flow i field f))))
