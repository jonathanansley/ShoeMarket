-- Fake data to get us started


--
INSERT INTO clients (id, name, address, phone, email)
VALUES  (1, 'Harvey Smith', '123 First St', '202-555-9987', 'Harvey@gmail.com'),
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


INSERT INTO shoes (id, subBrand, type, size, quantity, msrp, seller_price)
VALUES  (1, 'Jordan', 'Jordan 2', 10, 1, 159, 225),
                (2,  'Jordan', 'Jordan 4', 12, 1, 199, 245),
                (3,  'Jordan', 'Jordan 6', 15, 1, 182, 225),
                (4, 'Jordan', 'Jordan 11', 10, 1, 200, 300),
                (5,  'Jordan','Jordan 13', 13, 1, 210, 310),
                (6,  'Lebron','LeBron', 13, 1, 220, 320),
        (7, 'KD', 'KD', 14, 1, 250, 350),
        (8, 'Kyrie', 'Kyrie', 13, 1, 190, 290),
        (9,  'Jordan', 'Jordan 3', 12, 1, 190, 290);
        (10,  'Jordan','Jordan 10', 11, 1, 200, 300);
--







INSERT INTO orders (id, date_order_placed, comment, ClientID, ShoeID)
VALUES  (1, '2017-06-12', 'Customer prefers text messages.', 1,5),
                (2, '2017-07-02', 'lives in Alexandria', 2,6),
                (3, '2017-08-03', 'works near Foggy Bottom', 3,7),
                (4, '2017-09-04', 'moving out of town soon', 4,3),
                (5, '2017-09-05', 'works near Ballston', 5,2),
        (6, '2017-09-05', 'potential for future sales', 6,4),
        (7, '2017-09-06', 'works near Court House', 7,9),
        (8, '2017-09-08', 'lives near Clarendon', 8,1),
        (9, '2017-09-09', 'lives near Farragut West', 9,9),
        (10, '2017-09-10', 'Lives near Springfield', 10,8);



--



