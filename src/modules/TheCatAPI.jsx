import axios from 'axios';
//API page: https://www.omdbapi.com/
//API key= "live_TKL5g40x6zhZ667a8J6wO5cvNbbgC1M7SGrjXogZs7H0TraV14TKD6VK5IwBKn7s"
//Example: https://www.omdbapi.com/?apikey=21273b29&s=Toy+Story => devuelve los resultados similares

const api = axios.create({
    baseURL: 'https://www.omdbapi.com'
})

export default api;