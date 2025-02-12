import axios from 'axios';
import React from 'react';


const axiosSecure = axios.create({
    baseURL:'http://localhost:3000'
}) 

const UseAxiosSecure = () => {
    return axiosSecure;
};

export default UseAxiosSecure;