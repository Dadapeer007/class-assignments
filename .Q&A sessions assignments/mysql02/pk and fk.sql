create database myschool;
use myschool;

CREATE TABLE citys (
    id INT not null unique primary key,
    city_name varchar(50)
);
insert into citys values
(1,"gadag"),
(2,"mysore"),
(3,"koppal");
select*from citys;
CREATE TABLE students (
    id INT not null unique,
    first_name VARCHAR(50),
    city int not null,
    primary key (id),
    foreign key (city) references citys (id)
);

insert into students values
(1,"raju",2),
(2,"ravi",3),
(3,"rani",3);
select*from students;
