-- merge 1 table on different fields with 2 parts of nessesary data

select e1.employee_id,
    e1.name,
    count(*) as reports_count,
    round(avg(e2.age),0) as average_age
from Employees e1
join Employees e2
on e1.employee_id = e2.reports_to
group by e1.employee_id,e1.name
order by e1.employee_id