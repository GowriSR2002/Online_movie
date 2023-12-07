# Online_movie
CREATE TABLE IF NOT EXISTS theatres (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL);

CREATE TABLE IF NOT EXISTS movies (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL,theatreId INT,
    FOREIGN KEY (theatreId) REFERENCES theatres(id));

CREATE TABLE IF NOT EXISTS showtimes (id INT AUTO_INCREMENT PRIMARY KEY,time VARCHAR(255) NOT NULL,date DATE NOT NULL,movieId INT,FOREIGN KEY (movieId) REFERENCES movies(id));


CREATE TABLE IF NOT EXISTS halls (id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255) NOT NULL,movieId INT,
showtimeId INT,totalSeats INT,availableSeats INT,FOREIGN KEY (movieId) REFERENCES movies(id),FOREIGN KEY (showtimeId) REFERENCES showtimes(id));




INSERT INTO theatres (name) VALUES
('New Theatre'),
('Aries PLEX'),
('Central Theatre');


INSERT INTO movies (name, theatreId) VALUES
('Animal', 1),
('Sam Bahadur', 1),
('Kaadal', 2);
('Don 3', 3),
('Mean Girls', 3);


INSERT INTO showtimes (time, date, movieId) VALUES
('12:00 PM', '2023-12-10', 1),
('3:00 PM', '2023-12-10', 1),
('6:00 PM', '2023-12-10', 2),
('9:00 PM', '2023-12-11', 3);

INSERT INTO halls (name, movieId, showtimeId, totalSeats, availableSeats) VALUES
('Hall 1', 1, 1, 100, 100),
('Hall 2', 1, 2, 120, 120),
('Hall 3', 2, 3, 80, 80),
('Hall 4', 3, 4, 150, 150);
