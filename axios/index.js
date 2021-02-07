import Axios from 'axios';

export default Axios.create({
    baseURL: "https://api.unsplash.com/search/photos?per_page=100&client_id=2cba00c57a400fe8cdf7865b69458a9992d44d0600ddeef1acbaebdc033f497f&query=",
    headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
        // "proxy": "https://localhost:3000",
        // "Access-Control-Allow-Methods": "PUT, DELETE,POST,GET"


    },
})