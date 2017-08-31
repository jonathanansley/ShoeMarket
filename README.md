# ShoeMarket

inventory and order history for athletic shoes

To get us started, I copied the \15-sequelize\Activities\15-Post-Author-Joins\Solved


Shoes Proposal Listing

Team Members: 
Ezha Randall, Jonathan Ansley, John Saugy, Michael Megarbane


Project Description:
We are creating a site for sellers of Mens Nike shoes. The site will manage the inventory (shoe types/sizes/quantity) of shoes, msrp, sellers price, profit (sellers price – msrp will calculate profit), clients and their data (name, address, phone, email, etc). The site will also have a history of orders that have taken place, and it’ll update orders that will take place via a form for the seller to fill out.

Instructions for database (initial setup):
Warning: This will drop any previous tables and delete any data.
1. In MySQL workbench, SQL Pro, or similar program, run schema.sql. It will drop the shoe database (if it exists) and will create the "shoe" database.
2. Go to bash and "npm start". That will have sequelize create the empty tables.
3. In MySQL workbench, SQL Pro, or similar program, run "seeds.sql". That will insert 5 rows of sample data into the tables.