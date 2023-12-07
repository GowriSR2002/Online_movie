// script.js
function loadMovies() {
    const theatreDropdown = document.getElementById("theatre");
    const movieDropdown = document.getElementById("movie");

    // Replace with actual server request to fetch movies based on the selected theatre
    const selectedTheatre = theatreDropdown.value;
    const movies = getMoviesFromServer(selectedTheatre);

    // Clear existing options
    movieDropdown.innerHTML = '<option value="" disabled selected>Select Movie</option>';

    // Populate movie dropdown
    movies.forEach((movie) => {
        const option = document.createElement("option");
        option.value = movie.id;
        option.text = movie.name;
        movieDropdown.add(option);
    });

    // Enable movie dropdown
    movieDropdown.disabled = false;
}

function loadDates() {
    const movieDropdown = document.getElementById("movie");
    const dateDropdown = document.getElementById("date");

    // Replace with actual server request to fetch dates based on the selected movie
    const selectedMovie = movieDropdown.value;
    const dates = getDatesFromServer(selectedMovie);

    // Clear existing options
    dateDropdown.innerHTML = '<option value="" disabled selected>Select Date</option>';

    // Populate date dropdown
    dates.forEach((date) => {
        const option = document.createElement("option");
        option.value = date;
        option.text = date;
        dateDropdown.add(option);
    });

    // Enable date dropdown
    dateDropdown.disabled = false;
}

function loadShowtimes() {
    const dateDropdown = document.getElementById("date");
    const showtimesContainer = document.getElementById("showtimes-container");

    // Replace with actual server request to fetch showtimes based on the selected date
    const selectedDate = dateDropdown.value;
    const showtimes = getShowtimesFromServer(selectedDate);

    // Clear existing content
    showtimesContainer.innerHTML = '';

    // Populate showtimes container
    showtimes.forEach((showtime) => {
        const button = document.createElement("button");
        button.innerText = showtime;
        button.onclick = () => loadHallInfo(showtime); // Add a function to load hall information
        showtimesContainer.appendChild(button);
    });
}

function loadHallInfo(showtime) {
    const hallInfoContainer = document.getElementById("hall-info");

    // Replace with actual server request to fetch hall information based on the selected showtime
    const hallInfo = getHallInfoFromServer(showtime);

    // Display hall information
    hallInfoContainer.innerHTML = `<p>Hall: ${hallInfo.hall}</p><p>Available Seats: ${hallInfo.availableSeats}</p>`;
}

// Dummy functions for simulation (replace with actual server requests)
function getMoviesFromServer(theatre) {
    // Simulate fetching movies from the server based on the selected theatre
    return [
        { id: 1, name: "Animal" },
        { id: 2, name: "Sam Bahadur" },
        { id: 3, name: "Don3" },
        { id: 4, name: "Kaadal" },
        { id: 5, name: "Mean Girls" },
        // Add more movies as needed
    ];
}

// script.js
function loadMovies() {
    const theatreDropdown = document.getElementById("theatre");
    const movieDropdown = document.getElementById("movie");

    // Replace with actual server request to fetch movies based on the selected theatre
    const selectedTheatre = theatreDropdown.value;
    const movies = getMoviesFromServer(selectedTheatre);

    // Clear existing options
    movieDropdown.innerHTML = '<option value="" disabled selected>Select Movie</option>';

    // Populate movie dropdown
    movies.forEach((movie) => {
        const option = document.createElement("option");
        option.value = movie.id;
        option.text = movie.name;
        movieDropdown.add(option);
    });

    // Enable movie dropdown
    movieDropdown.disabled = false;
}

function loadDates() {
    const movieDropdown = document.getElementById("movie");
    const dateDropdown = document.getElementById("date");

    // Replace with actual server request to fetch dates based on the selected movie
    const selectedMovie = movieDropdown.value;
    const dates = getDatesFromServer(selectedMovie);

    // Clear existing options
    dateDropdown.innerHTML = '<option value="" disabled selected>Select Date</option>';

    // Populate date dropdown
    dates.forEach((date) => {
        const option = document.createElement("option");
        option.value = date;
        option.text = date;
        dateDropdown.add(option);
    });

    // Enable date dropdown
    dateDropdown.disabled = false;
}

function loadShowtimes() {
    const dateDropdown = document.getElementById("date");
    const showtimesContainer = document.getElementById("showtimes-container");

    // Replace with actual server request to fetch showtimes based on the selected date
    const selectedDate = dateDropdown.value;
    const showtimes = getShowtimesFromServer(selectedDate);

    // Clear existing content
    showtimesContainer.innerHTML = '';

    // Populate showtimes container
    showtimes.forEach((showtime) => {
        const button = document.createElement("button");
        button.innerText = showtime;
        button.onclick = () => loadHallInfo(showtime); // Add a function to load hall information
        showtimesContainer.appendChild(button);
    });
}

// Dummy function for simulation (replace with actual server request)

function getDatesFromServer(movie) {
    // Simulate fetching dates from the server based on the selected movie
    return ["2023-12-10", "2023-12-11", "2023-12-12"];
}

// ... (rest of the code remains unchanged)

function getShowtimesFromServer(date) {
    // Simulate fetching showtimes from the server based on the selected date
    return ["12:00 PM", "3:00 PM", "6:00 PM", "9:00 PM"];
}

function getHallInfoFromServer(showtime) {
    // Simulate fetching hall information from the server based on the selected showtime
    return { hall: "Hall 1", availableSeats: 100 };
}
