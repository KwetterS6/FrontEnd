<template>
  <div class="newKwet" style="margin: 25px 25px;"> 
    <b-form-textarea 
      id="textarea-state"
      v-model="text"
      @input="remaincharCount"
      :state="text.length <= 180"
      placeholder="Kwet Kwet Kwet"
      rows="3"
      
    >
    </b-form-textarea >
    <br>
     <span>{{ remaincharactersText }}</span>
     <div class="btn-group" style="margin: 25px 25px; ">
      <span class="btn btn-success btn-xs" v-on:click="placeKwet()" >{{('Kwet!')}}</span>
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

  </div>

  
</template>

<script>
  export default {
    name: "KwetterHome",
    data() {
      return {
        text: '',
        maxcharacter: 180,
       remaincharactersText: "Remaining 180 characters."
      }
    },
    methods: {
       remaincharCount: function(){

         if(this.text.length > this.maxcharacter){
           this.remaincharactersText = "Exceeded "+this.maxcharacter+" characters limit.";
         }else{

           var remainCharacters = this.maxcharacter - this.text.length;
           this.remaincharactersText = "Remaining " + remainCharacters + " characters.";

         }
      }
    }
  }
</script>