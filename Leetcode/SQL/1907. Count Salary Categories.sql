SELECT *
FROM (
    VALUES
        ('Low Salary', (SELECT COUNT(*) FROM Accounts WHERE income < 20000)),
        ('Average Salary', (SELECT COUNT(*) FROM Accounts WHERE income BETWEEN 20000 AND 50000)),
        ('High Salary', (SELECT COUNT(*) FROM Accounts WHERE income > 50000))
) t(category, accounts_count)


``
SELECT 'High Salary' as category, COUNT( CASE WHEN income > 50000 THEN income ELSE null END) as accounts_count FROM Accounts
UNION
SELECT 'Low Salary' as category, COUNT( CASE WHEN income < 20000 THEN income ELSE null END) as accounts_count FROM Accounts
UNION
SELECT 'Average Salary' as category, COUNT( CASE WHEN income >= 20000 and income <= 50000 THEN income ELSE null END) as accounts_count FROM Accounts ORDER BY accounts_count DESC