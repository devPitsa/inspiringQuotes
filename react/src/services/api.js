import axios from 'axios'

const api = axios.create({
    baseURL: 'https://19cprlbhrc.execute-api.us-east-1.amazonaws.com/dev/graphql',
});

export default api ; 