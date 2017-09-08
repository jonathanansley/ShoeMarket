-- Fake data to get us started


--
INSERT INTO clients (id, name, address, phone, email)
VALUES	(1, 'Harvey Smith', '123 First St', '202-555-9987', 'Harvey@gmail.com'),
		(2, 'Jose Jones', '1203 King St', '703-555-1234', 'Jose@aol.com'),
		(3, 'Barbara Geddes', '1 Southfork Way', '817-555-9876', 'Classic@Dallas.com'),
		(4, 'Pamela Ewing', '5665 Main Ave', '212-555-9987', 'EightiesFashion@gmail.com'),
		(5, 'Gary Frietas', '3232 Lake Drive', '870-555-9987', 'Gary.Frie@gmail.com'),
        (6, 'Jim Smith', '3232 Sims Circle', '202-555-9807', 'JamesSmith@gmail.com'),
        (7, 'Tina Turner', '3232 Oak Street', '201-555-9927', 'Tina.Turner@gmail.com'),
        (8, 'Merle Haggard', '3232 Cherry Lane', '874-555-9787', 'Merle.Hag@aol.com'),
        (9, 'Crystal Gayle', '3232 Cypress Lane', '878-555-6987', 'Crystal@gayle.com'),
        (10, 'Tom T. Hall', '3232 Chestut Drive', '321-555-5987', 'Tom.Hall@gmail.com');
--


--
INSERT INTO orders (id, date_order_placed, quantity, comment, ClientID)
VALUES	(1, '2017-06-12', 2, 'Customer prefers text messages.', 1),
		(2, '2017-07-02', 1, 'lives in Alexandria', 2),
		(3, '2017-08-03', 1, 'works near Foggy Bottom', 3),
		(4, '2017-09-04', 2, 'moving out of town soon', 4),
		(5, '2017-09-05', 1, 'works near Ballston', 5),
        (6, '2017-09-05', 3, 'potential for future sales', 6),
        (7, '2017-09-06', 1, 'works near Court House', 7),
        (8, '2017-09-08', 2, 'lives near Clarendon', 8),
        (9, '2017-09-09', 1, 'lives near Farragut West', 9),
        (10, '2017-09-10', 1, 'Lives near Springfield', 10);



--
INSERT INTO shoes (id, type, size, quantity, msrp, seller_price, OrderID)
VALUES	(1, 'Jordan 2', 10, 2, 159, 225, 5),
	(2, 'Jordan 4', 12, 1, 199, 245, 4),
	(3, 'Jordan 6', 15, 3, 182, 225, 3),
	(4, 'Jordan 11', 10, 2, 200, 300, 2),
	(5, 'Jordan 13', 13, 3, 210, 310, 1),
        (6, 'LeBron', 13, 3, 220, 320, 10),
        (7, 'KD', 14, 1, 250, 350, 9),
        (8, 'Kyrie', 13, 1, 190, 290, 8),
        (9, 'Jordan 3', 12, 1, 190, 290, 7),
        (10, 'Jordan 10', 11, 3, 200, 300, 6);
--

