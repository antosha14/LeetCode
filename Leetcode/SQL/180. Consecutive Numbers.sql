with T as (
    select
num,
lead(num) over(order by id) as lag1,
lead(num, 2) over(order by id) as lag2
from Logs)

select distinct num as ConsecutiveNums
from T
where num = lag1 and num = lag2

`select distinct L1.num as ConsecutiveNums from Logs as L1 
where 
L1.num=(select num from Logs where id=L1.id+1)
and
L1.num=(select num from Logs where id=L1.id+2)`