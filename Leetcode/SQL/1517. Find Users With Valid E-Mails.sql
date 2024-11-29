SELECT user_id,
       name,
       mail
FROM   users
WHERE  mail ~ '^[a-zA-Z]+[a-zA-Z0-9_.-]*@leetcode\.com$'