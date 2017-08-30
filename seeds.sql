-- Fake data to get us started


--
INSERT INTO clients (id, name, address, phone, email)
VALUES	(1, 'Harvey Smith', '123 First St', '202-555-9987', 'Harvey@gmail.com'),
		(2, 'Jose Jones', '1203 King St', '703-555-1234', 'Jose@aol.com'),
		(3, 'Barbara Geddes', '1 Southfork Way', '817-555-9876', 'Classic@Dallas.com'),
		(4, 'Pamela Ewing', '5665 Main Ave', '212-555-9987', 'EightiesFashion@gmail.com'),
		(5, 'Gary Frietas', '3232 Sims Cirle', '870-555-9987', 'Gary.Frie@gmail.com');
--


--
INSERT INTO orders (id, date_order_placed, quantity, comment, ClientID)
VALUES	(1, '2017-08-01', 2, 'Customer prefers text messages.', 1),
		(2, '2017-08-02', 1, 'lives in Alexandria', 2),
		(3, '2017-08-03', 1, 'works near Foggy Bottom', 3),
		(4, '2017-08-04', 2, 'moving out of town soon', 4),
		(5, '2017-08-05', 1, 'potential for future sales', 5);



--
INSERT INTO shoes (id, type, size, quantity, msrp, seller_price, OrderID)
VALUES	(1, 'Jordan 2', 10, 2, 159, 225, 5),
		(2, 'Jordan 4', 12, 1, 199, 245, 4),
		(3, 'Jordan 6', 15, 6, 182, 225, 3),
		(4, 'Jordan 11', 10, 5, 261, 300, 2),
		(5, 'Jordan 13', 13, 3, 250, 300, 1);
--

