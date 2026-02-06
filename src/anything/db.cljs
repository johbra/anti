(ns anything.db
  (:require [cljs-time.core :as t]
            [cljs-time.local :as l]))

(def default-db
  (let [now (l/local-now)
        datum (str (t/day now) "." (t/month now) "." (t/year now))]
    ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    ;; Diese Hash-Map stellt das Datenmodell für die Beispiel-Anwendung dar:
    {:invoices
     {:invoice1
      {:date datum
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
      {:date datum
       :address {:city-name "Elmshorn"}
       :customer nil}}
     ;; die folgenden Einträge dienen nur der Benutzungsoberfläche:
     :selected-invoice 0
     :selected-product nil
     :selected-address nil
     :selected-customer nil}))
