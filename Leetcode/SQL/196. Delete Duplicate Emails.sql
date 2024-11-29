with temp as (select email from Person
group by email
having count(email) > 1)

delete from Person where email in (select * from temp)
and id not in (select min(id) from Person group by email)