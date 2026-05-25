import axios from 'axios';

export const axiosClient = axios.create({
    baseURL: `http://${import.meta.env.VITE_API_HOST}:${import.meta.env.VITE_API_PORT}`,
    headers: {
        'Content-Type': 'application/json',
    },
    validateStatus: function (status) {
        console.log(status);

        return true;
    }
});
