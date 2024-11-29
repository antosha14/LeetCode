select id, 
    coalesce(
        case
            when id % 2 != 0 then lead(student) over ()
            else lag(student) over ()
        end,
        student
    ) as student
from seat
