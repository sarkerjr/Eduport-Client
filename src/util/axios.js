import axios from "axios";

const instance = axios.create({
    baseURL: "https://eduport-server.herokuapp.com/",
});

//Intercept all the requests to enter updated token and handle errors
instance.interceptors.request.use(
    (config) => {
        if (localStorage.getItem("token")) {
            config.headers.Authorization = localStorage.getItem("token");
        }
        return config;
    },
    (error) => {
        console.log("From axios.js : " + error);
        return Promise.reject(error);
    }
);

//Intercept all the responses to handle errors
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.log("From axios.js : " + error);
        if (error.response.status === 401) {
            localStorage.removeItem("token");
        }
        return Promise.reject(error);
    }
);

export default instance;
