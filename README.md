# Weather App

This is a front-end web application that displays the latest weather information for different cities around the world. The application uses the [openweathermap.org] API to fetch the weather data and implements a data caching mechanism to improve performance. The application also follows a responsive UI design that adapts to both desktop and mobile devices. The application is compatible with the latest versions of Chrome, Firefox, and Safari browsers.

The application is based on the front-end assignment given by [Fidenz Technologies], The application fulfills all the requirements and steps specified in the assignment, such as extracting city codes, calling the API, creating the UI, and implementing data caching. The application also includes a docker file to deploy it with all the required services.

## Technologies

The application is developed using [React], a JavaScript library for building user interfaces, and [Vite], a fast and lightweight web development tool.

## Installation

To install the application, you need to have [Node.js] and [npm] installed on your machine. You also need to register with the [openweathermap.org] to access the API and get an API token.

- Clone this repository or download it as a zip file.
- Navigate to the project folder and run `npm install` to install all the dependencies.
- Create a `.env` file in the root directory and add your API token as `VITE_API_KEY=your_api_token`.
- Run `npm run dev` to start the development server.
- Open `http://localhost:3000` in your browser to see the application.

## Deployment

To deploy the application, you need to have [Docker] installed on your machine.

- Build the application by running `npm run build`.
- Build the docker image by running `docker build -t weather-app .`.
- Run the docker container by running `docker compose up`.
- Open `http://localhost` in your browser to see the application.

## License

This project is licensed under the MIT License - see the [LICENSE] file for details.
