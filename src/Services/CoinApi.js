import axios from 'axios'



export default () => {

    return axios.create({
        baseURL: 'https://api.coingecko.com',
        Headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Accept-Encoding': 'deflate',
            'X-CoinAPI-Key': process.env.API_TOKEN,

        }
    });
}