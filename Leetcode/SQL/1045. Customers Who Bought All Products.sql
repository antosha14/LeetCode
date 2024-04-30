--having = select  

select
    customer_id
from Customer c
group by customer_id
having count(distinct(product_key)) = (select count(*) from Product)


--alternative with ali
with joined_tbl as (
    select c.customer_id, p.product_key
    from customer c
    left join product p on c.product_key = p.product_key
),

sum_tbl as (
    select customer_id, count(distinct product_key) as num_products
    from joined_tbl
    group by customer_id
)

select customer_id
from sum_tbl
where num_products = (select count(distinct product_key) from product)