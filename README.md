# ShoeMarket

## Shoes Proposal Listing

### Team Members: 
* Ezha Randall
* Jonathan Ansley
* John Saugy
* Michael Megarbane


###Links:
 * [GitHub Repository](https://github.com/johnsaugy/SurchPort)
 * [Heroku](https://fierce-reef-37071.herokuapp.com/)
 * [ShoeMarket Presentation Slides](https://docs.google.com/presentation/d/10eg53H8cBBh-CqUtXjfIU4_xKamsFfYzyK1UxMCKnoo/edit#slide=id.p)


### Project Description:
We are creating a site for sellers of Men's Athletic shoes (e.g. Jordan, KD, Kyrie). The site will manage the inventory (shoe types/sizes/quantity) of shoes, msrp, sellers price, profit (sellers price – msrp will calculate profit), clients and their data (name, address, phone, email, etc). The site will also have a history of orders that have taken place, and it will update orders that will take place via a form for the seller to fill out.


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
