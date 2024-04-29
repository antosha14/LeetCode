SELECT 
ROUND(SUM(
CASE
    WHEN order_date=customer_pref_delivery_date THEN 1
    ELSE 0 
END)::NUMERIC/COUNT(customer_id)::NUMERIC*100, 2)
AS immediate_percentage FROM (
    SELECT customer_id, 
           MIN(order_date) AS order_date,
           MIN(customer_pref_delivery_date) AS customer_pref_delivery_date 
    FROM Delivery 
    GROUP BY customer_id
);

--WITH в качестве alies для SELECT
WITH FirstOrder AS (
    SELECT 
        *,
        ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) AS row_number
    FROM
        Delivery
)

SELECT
    ROUND(SUM(CASE WHEN order_date = customer_pref_delivery_date THEN 1 ELSE 0 END) / COUNT(DISTINCT customer_id)::NUMERIC * 100, 2) AS immediate_percentage
FROM FirstOrder
WHERE row_number = 1