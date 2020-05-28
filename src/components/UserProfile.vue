<template>
<div class="contain">



  <div style="margin: 25px 0px;">
    <b-overlay :show="show" rounded="sm">
      <b-card title="My Profile" :aria-hidden="show ? 'true' : null">
        <ul>
          <li v-for="kwet in kwets" :key="kwet.message"> {{kwet.message}}</li>
        </ul>
        <b-card-text>*ProfileName*</b-card-text>
        <b-card-text>*User-Details*</b-card-text>
         <b-button :disabled="show" variant="primary" @click="show = true">
          Edit Profile
        </b-button>
      </b-card>
    </b-overlay>
  </div>


   <div> 
    <b-overlay :show="show" rounded="sm">
      <b-card title="Recent Kwets" :aria-hidden="show ? 'true' : null">
        <div class="recentkwets">
        <b-card img-src="https://placekitten.com/150/150" img-alt="Card image" img-left class="mb-3" title="Username" sub-title="05/05/2020 14:53" align="left" >
      <b-card-text >
        My thirth Kwet!!!
      </b-card-text>
      </b-card>
      <b-card img-src="https://placekitten.com/150/150" img-alt="Card image" img-left class="mb-3" title="Username" sub-title="04/05/2020 12:00" align="left">
      <b-card-text>
        My second kwet!!
      </b-card-text>
      </b-card>
      <b-card img-src="https://placekitten.com/150/150" img-alt="Card image" img-left class="mb-3" title="Username" sub-title="03/05/2020 09:12"  align="left">
      <b-card-text>
        My first kwet!

              
      </b-card-text>
      </b-card>
        </div>
      </b-card>
    </b-overlay>
  </div>
   <div> 
    <b-overlay rounded="sm">
      <b-card title="Recent Kwets">

        <div v-for="kwet in kwets" :key="kwet.message">
        <div class="recentkwets">
      <b-card img-src="https://placekitten.com/150/150" img-alt="Card image" img-left class="mb-3" :title= kwet.userId :sub-title= kwet.timeStamp align="left" >
      <b-card-text >
        {{kwet.message}}
      </b-card-text>
      </b-card>
        </div>
        </div>

      </b-card>
    </b-overlay>


  </div>
</div>
</template>

<script>

export default {
  name: 'UserProfile',
  components: {
  },
  data() {
    return {
      kwets: []
    }
  },
  methods: {
    async getKwets()
      {
        const requestOptions = {
          method: "GET",
        }
        let response = await fetch('http://localhost:5002/kwet', requestOptions)
        let body = await response.json()
        this.kwets = body
      }
  },
  async mounted(){
    await this.getKwets()
  }
}
</script>

<style>
 @import '../assets/kwetter.css';
</style>