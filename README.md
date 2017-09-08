# ShoeMarket

## Shoes Proposal Listing

### Team Members: 
* Ezha Randall
* Jonathan Ansley
* John Saugy
* Michael Megarbane



### Project Description:
We are creating a site for sellers of Men'ss Nike shoes. The site will manage the inventory (shoe types/sizes/quantity) of shoes, msrp, sellers price, profit (sellers price – msrp will calculate profit), clients and their data (name, address, phone, email, etc). The site will also have a history of orders that have taken place, and it will update orders that will take place via a form for the seller to fill out.


### Instructions for database (initial setup):
Warning: This will drop any previous tables and delete any data.
1. In MySQL workbench, SQL Pro, or similar program, run schema.sql. It will drop the shoe database (if it exists) and will create the "shoe" database.
2. Go to bash and "npm start". That will have sequelize create the empty tables.
3. In MySQL workbench, SQL Pro, or similar program, run "seeds.sql". That will insert 5 rows of sample data into the tables.

Note: If you do not want to change your database each time you run "npm start", then go into server.js and change "force: true" to "force: false".


### Project 2 Requirements:

#### Your project must:

* Use a Node and Express Web Server;

* Be backed by a MySQL Database an ORM (not necessarily Sequelize);

* Have both GET and POST routes for retrieving and adding new data;

* Be deployed using [Heroku](https://www.heroku.com/) (with Data);

* Utilize at least one new library, package, or technology that we haven't discussed;

* Have a polished frontend / UI;

* Have folder structure that meets MVC Paradigm;

* Meet good quality coding standards (indentation, scoping, naming).



#### Suggestions

Your project should:

* Incorporate Basic Testing Framework, see Project Suggestions;

* Use Handlebars for Server-Side Templating

* Incorporate Authentication (JSON Web Tokens, Sessions, Etc.)

* Use an existing public dataset to power the database (This is probably not important.)

* Create a migration strategy for sharing data across team members.



#### JAWS DB:
Connection Info
Connection String

mysql://cba083b232k8bkub:v30zipawvqhy85bi@otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/lwi3r2j0i704lhq3


You can use your connection information to connect manually through a client such as HeidiSQL to administer your database.

Property	Value	Action
Host	otmaa16c1i9nwrek.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	
Username	cba083b232k8bkub	
Password	v30zipawvqhy85bi	
Reset
Port	3306