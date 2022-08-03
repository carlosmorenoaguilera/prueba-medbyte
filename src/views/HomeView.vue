 <template>
  <div class="home">
  
   <table class="table table-striped table-bordered table-hover ">
    <thead>
      <tr><th scope="col" >Nombre</th><th scope="col">Precio</th> </tr>
    </thead>
    <tbody>
      <tr v-for="(pool, i) in pools" :key="i">
        <td>
          {{pool.name}}
        </td>
        <td>
          ${{pool.current_price}}
        </td>
      </tr>
    </tbody>
   </table>


  </div>
</template>

<script>
// @ is an alias to /src
import CoinsService from '@/Services/CoinsService'
export default {
  name: 'HomeView',
  data(){
    return {
      pools : []
    }
  },
  components: {
    
  }, 
  methods:{
    async getPoolList(){
      const response = await CoinsService.getPools()
      const filterCoins = ['bitcoin', 'ethereum', 'cardano']
      this.pools =  response.data.filter(i => {
        return i.id === filterCoins[0] || i.id === filterCoins[1] || i.id === filterCoins[2];
        })
    }

  },
  created (){
    this.getPoolList()
  }
}
</script>
