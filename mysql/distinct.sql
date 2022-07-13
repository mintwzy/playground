# SELECT DISTINCT
#     select_list
# FROM
#     table_name
# WHERE
#     search_condition
# ORDER BY
#     sort_expression;
#
# When executing the SELECT statement with the DISTINCT clause, MySQL evaluates the DISTINCT clause after the FROM, WHERE, and SELECT clause and before the ORDER BY clause:

SELECT DISTINCT state, city
FROM classicmodels.customers
WHERE state IS NOT NULL
ORDER BY state, city;
