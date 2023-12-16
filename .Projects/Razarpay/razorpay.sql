create database Razorpay;
use Razorpay;
create table customers(
    customer_id int unique auto_increment primary key,
    customer_name varchar(50) not null,
    email varchar(100) unique not null,
    phone_number varchar(15),
    address varchar(100)
);
select * from customers;
insert into customers values
(1,"asad","asad@gmail.com",12345,"asad at bidar"),
(2,"ravi","ravi@gmail.com",67890,"ravi at gadag"),
(3,"raju","raju@gmail.com",11123,"raju at mysore"),
(4,"asif","asif@gmail.com",14151,"asif at koppal");
select * from customers;


create table companies(
    company_id int auto_increment primary key unique,
    company_name varchar(100) not null,
    email varchar(100) unique not null,
    phone_number varchar(15),
    address varchar(100)
);
insert into companies values
(1,"sbi","sbi@gmail.com",12345,"modi nagar dehli"),
(2,"panjabbank","panjabbank@gmail.com",67890,"haripal nagar panjab"),
(3,"andrabank","andarbank@gmail.com",11123,"chappradahlli andrapradies"),
(4,"karnntakabank","kbl@gmail.com",14151,"sriranrga pattana karnataka");
select * from companies;

create table transactions(
    transaction_id int auto_increment primary key,
    foreign key(customer_id) references customers(customer_id),
    customer_id int,
    foreign key(company_id) references companies(company_id),
    company_id int,
    amount DECIMAL(10,2) NOT NULL,
    transaction_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
select * from transactions;
insert into transactions 
(transaction_id,customer_id,company_id,amount)
values
(102,3,2,9841.03),
(103,2,1,2655.05),
(104,1,4,1022.06),
(105,4,1,007.09);
create table paymentmethods(
    payment_id int auto_increment primary key,
    foreign key (customer_id) references customers(customer_id),
    customer_id int,
    payment_type varchar(50) not null,
    card_number varchar(16) unique,
    expiry_date date
);
select * from paymentmethods;
alter table paymentmethods modify expiry_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
insert into paymentmethods values
(1002,4,"debit card",147963,"22-03-09 13:17:00");
create table balances(
    id int auto_increment primary key,
    customer_id int,
    foreign key(customer_id) references Customers(customer_id),
    balance decimal(10,2)
    );
    select * from balances;
    insert into balances values
    (05,1,6542.07),
    (06,2,2456.06),
    (07,3,4568.09),
    (08,4,8654.00);
select balance from Balances
where customer_id = 1;
update Balances
set balance = balance + 50.00
where customer_id = 1;
select balance from Balances
where Balance<5000 and customer_id=2;
select * from customers
order by customer_name asc;

select * from customers inner join paymentmethods
on customers.customer_id=payment_id;









