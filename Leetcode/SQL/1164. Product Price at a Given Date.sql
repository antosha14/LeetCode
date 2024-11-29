with res_ as (select product_id,max(change_date) as change_date
from (select * from products where change_date <= '2019-08-16') as res 
group by product_id)

(select p.product_id,p.new_price as price from products p join res_ r on
    p.product_id = r.product_id and p.change_date = r.change_date)
union
(select distinct product_id,10 as price 
from products 
where product_id not in (select product_id from res_)
)
;