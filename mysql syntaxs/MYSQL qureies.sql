--1.Creating Database in our SQL qurey syntax:
		
	CREATE DATABASE db_name;

--2.Drop Database in our SQL qurey syntax:

	DROP DATABASE db_name;

--3.Creating our Table the Database syntax:

	USE db_name;

	CREATE TABLE table_name ( 
column_name1 datatype constraint,
column_name2 datatype constraint,
column_name2 datatype constraint
);

--4.used to select any data from the database syntax:

Basic Syntax:	SELECT	col1, col2 FROM table_name;

To Select ALL:	SELECT	* FROM table_name;

--5.Insert values in a columns syntax:

	INSERT INTO table_name
(colname1, colname2)
VALUES
(col1_v1, col2_v1),
(col1_v2, col2_v2);

--6.primary key and foreign key syntax:
	
	PRIMARY KEY syntax:

		CREATE TABLE table(1)_name ( 
column_name1 datatype constraint,
column_name2 datatype constraint,
column_name2 datatype constraint,
PRIMARY KEY (ID)
);

	FOREIGN KEY syntax:

		CREATE TABLE table(2)_name ( 
column_name1 datatype constraint,
column_name2 datatype constraint,
column_name2 datatype constraint,
FOREIGN KEY(cust_id) REFERENCE column_name(ID)
);
	
--6.Where Clause syntax:

	SELECT	col1, col2 FROM table_name
	WHERE conditions;
	
--7.Order By Clause syntax:

	SELECT	col1, col2 FROM table_name
	ORDER BY col_name(s) ASC;

--8.Aggregate Functions syntax:

	SELECT max(column_name) FROM Table_name;
	SELECT min(column_name) FROM Table_name;
	SELECT avg(column_name) FROM Table_name;
	SELECT sum(column_name) FROM Table_name;
	SELECT count(column_name) FROM Table_name;

--9.General order with condition syntax:

	SELECT	column(s) FROM table_name
	WHERE condition
	GROUP BY column(s) 
	HAVING condition
	ORDER BY column(s) ASC;

--10.update Queries syntax:

	UPDATE table_name
	SET col1 = val1, col2 = val2
	WHERE condition;

--11.Delete Queries syntax:

	DELETE FROM table_name
	WHERE condition;

--12.INNER join syntax:

	SELECT column(s) FROM tableA 
	INNER JOIN tableB
	ON tableA.col_name = tableB.col_name;

--13.LEFT join syntax:3

	SELECT column(s) FROM tableA
	LEFT JOIN tableB
	ON tableA.col_name = tableB.col_name;

--14.RIGTH join syntax:

	SELECT column(s) FROM tableA
	RIGHT JOIN tableB
	ON tableA.col_name = tableB.col_name;

--15.sub queries syntax:

	SELECT column(s)
	FROM table_name
	WHERE col_name operator (subquery);




























