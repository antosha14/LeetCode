SELECT TO_CHAR(trans_date, 'YYYY-MM') AS month, country AS country, COUNT(DISTINCT id) AS trans_count, 
COUNT(
CASE
  WHEN state='approved' THEN 1
ELSE null END) AS approved_count, 
SUM(amount) AS trans_total_amount,
SUM(
CASE
  WHEN state='approved' THEN amount
ELSE 0 END) AS approved_total_amount
FROM Transactions
GROUP BY month, country
ORDER BY country DESC;  

--Оптимизация через SUM с нулём вместо COUNT
select to_char(trans_date, 'YYYY-MM') as month,
        country, 
        count(*) as trans_count,
        sum(case when state = 'approved' then 1 else 0 end) as approved_count,
        sum(amount) as trans_total_amount, 
        sum(case when state = 'approved' then amount else 0 end) as approved_total_amount
    from Transactions
    group by month, country