import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization:'Client-ID 11bc37ced930e8011726f09505df6283c11de8c10258d9b9a7e9397c6765de91'
    }
});
