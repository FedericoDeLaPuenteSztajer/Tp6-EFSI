import axios from 'axios';
//API page: https://thecatapi.com/es
//API key= "live_TKL5g40x6zhZ667a8J6wO5cvNbbgC1M7SGrjXogZs7H0TraV14TKD6VK5IwBKn7s" => almost unnecesary (For only getting ten images)
//Example: https://api.thecatapi.com/v1/images/search?limit=10 => returns 10 random images

const catApi = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/images/search?api_key=live_TKL5g40x6zhZ667a8J6wO5cvNbbgC1M7SGrjXogZs7H0TraV14TKD6VK5IwBKn7s'
})

export default catApi;