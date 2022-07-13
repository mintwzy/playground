# SELECT
#     select_list
# FROM t1
# INNER JOIN t2 ON join_condition1
# INNER JOIN t3 ON join_condition2
# ...;
#
SELECT
    productCode,
    productName,
    textDescription
FROM
    classicmodels.products t1
INNER JOIN classicmodels.productlines t2
    ON t1.productLine = t2.productLine;


SELECT
    productCode,
    productName,
    textDescription
FROM
    classicmodels.products
INNER JOIN classicmodels.productlines USING (productLine);


SELECT t1.orderNumber, t1.status, SUM(quantityOrdered*priceEach) AS total
FROM classicmodels.orders AS t1
INNER JOIN classicmodels.orderdetails AS t2
    ON t1.orderNumber = t2.orderNumber
GROUP BY t1.orderNumber;


SELECT
    orderNumber,
    productName,
    msrp,
    priceEach
FROM
    products p
INNER JOIN orderdetails o ON p.productCode = o.productCode AND p.MSRP > o.priceEach
WHERE p.productCode = 'S10_1678';
