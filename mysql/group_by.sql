# SELECT
#     c1, c2,..., cn, aggregate_function(ci)
# FROM
#     table
# WHERE
#     where_conditions
# GROUP BY c1 , c2,...,cn;
#
# MySQL evaluates the GROUP BY clause after the FROM and WHERE clauses and before the HAVING, SELECT, DISTINCT, ORDER BY and LIMIT clauses:

SELECT status, COUNT(*)
FROM classicmodels.orders
GROUP by status;

