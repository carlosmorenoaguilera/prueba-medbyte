import CoinApi from '@/Services/CoinApi'

export default {

    getPools() {
        return CoinApi().get('/api/v3/coins/markets?vs_currency=usd')
    }



}