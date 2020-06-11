<template>
  <div class="newKwet" style="margin: 25px 25px;">
    <b-form-textarea
      id="textarea-state"
      v-model="text"
      @input="remaincharCount"
      :state="text.length <= 180"
      placeholder="Kwet Kwet Kwet"
      rows="3"
    ></b-form-textarea>
    <br />
    <span>{{ remaincharactersText }}</span>
    <div class="btn-group" style="margin: 25px 25px; ">
      <span class="btn btn-success btn-xs" v-on:click="placeKwet()">{{('Kwet!')}}</span>
    </div>

    <div>
      <b-overlay rounded="sm">
        <b-card title="Recent Kwets">
          <div v-for="kwet in kwets" :key="kwet.message">
            <div class="recentkwets">
              <b-card
                img-src="https://placedog.net/150/150"
                img-alt="Card image"
                img-left
                class="mb-3"
                :title="kwet.userName"
                :sub-title="kwet.timeStamp"
                align="left"
              >
                <b-card-text>{{kwet.message}}</b-card-text>
                <span class="btn btn-primary btn-xs" v-if="containsUser(kwet)" v-on:click="placeLike(kwet)">{{(kwet.likes.length + ' Like(s)')}}</span>

                <span class="btn btn-success btn-xs" v-else v-on:click="removeLike(kwet)">{{(kwet.likes.length + ' Like(s)')}}</span>
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
  name: "KwetterHome",
  data() {
    return {
      text: "",
      maxcharacter: 180,
      remaincharactersText: "Remaining 180 characters.",
      kwets: []
    };
  },
  methods: {
    async placeKwet(){
      console.log('placing kwets')
      var user = JSON.parse(localStorage.getItem('user'))
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          Id: user.id,
          UserName: user.name,
          Message: this.text
        }),
        headers: {
        'Content-Type': 'application/json',
        },
      }
      await fetch("http://localhost:5002/kwet", requestOptions);
    },
    async getKwets() {
      console.log('getting kwets')
      const requestOptions = {
        method: "GET"
      };
      let response = await fetch("http://localhost:5002/kwet", requestOptions);
      let body = await response.json();
      this.kwets = body;
    },
    async placeLike(kwet){
      console.log('placing Likes')
      var user = JSON.parse(localStorage.getItem('user'))
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          Id: user.id,
          UserName: user.name,
          KwetId: kwet.kwetId
          
        }),
        headers: {
        'Content-Type': 'application/json',
        },
      }
      await fetch("http://localhost:5002/kwet/placeLike", requestOptions);
    },
    containsUser(kwet){
      var user = JSON.parse(localStorage.getItem('user'))
      if (kwet.likes.some(e => e.userId === user.id)) {
        return false;
      }
      return true;
    },

    remaincharCount: function() {
      if (this.text.length > this.maxcharacter) {
        this.remaincharactersText =
          "Exceeded " + this.maxcharacter + " characters limit.";
      } else {
        var remainCharacters = this.maxcharacter - this.text.length;
        this.remaincharactersText =
          "Remaining " + remainCharacters + " characters.";
      }
    }
  },
   async mounted() {
      await this.getKwets();
    }
};
</script>