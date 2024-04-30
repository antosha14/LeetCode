--where in select
-- В HAVING нужно включать консолидацию!!!!!!!
-- Если нужно выбрать минимум делаем это не через HAVING, а просто в селекте

select product_id, year first_year, quantity, price
from Sales
where (product_id, year) in (select product_id, min(year)
                            from Sales group by 1)