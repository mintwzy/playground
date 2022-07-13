# SELECT
#    select_list
# FROM
#    table_name
# ORDER BY
#    column1 [ASC|DESC],
#    column2 [ASC|DESC],
#    ...;
SELECT
    contactLastName,
    contactFirstName
FROM
    classicmodels.customers
ORDER BY
    contactLastName DESC,
    contactFirstName;


SELECT orderNumber, orderLineNumber, quantityOrdered*priceEach AS subtotal
FROM classicmodels.orderdetails
ORDER BY subtotal DESC;


# Suppose that you want to sort the sales orders based on their statuses in the following order:
#
# In Process
# On Hold
# Canceled
# Resolved
# Disputed
# Shipped
SELECT
    orderNumber, status
FROM
    orders
ORDER BY FIELD(status,
               'In Process',
               'On Hold',
               'Cancelled',
               'Resolved',
               'Disputed',
               'Shipped');
