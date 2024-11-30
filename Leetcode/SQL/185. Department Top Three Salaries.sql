with a as (select * , dense_rank() over (partition by departmentid order by salary desc) as top_sa
from Employee
)
select d.name as Department , a.name as Employee , salary
from a join Department d on a.departmentid = d.id
where top_sa <=3

--------------------------------------------------------------------------------------------------------------

with rankedEmployeeByDep as (
    select 
            emp.id,
            emp.name as employeeName,
            dep.name as departmentName,
            emp.salary as salary,
            dense_rank() over(partition by emp.departmentId order by emp.salary desc) as rank 
        from Employee as emp
            left join Department as dep on dep.id = emp.departmentId
) select result.departmentName as Department, result.employeeName as Employee, result.salary as Salary
    from rankedEmployeeByDep as result where result.rank <=3