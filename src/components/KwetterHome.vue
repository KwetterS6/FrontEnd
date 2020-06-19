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
      <button
        type="button"
        class="btn btn-success btn-xs"
        v-if="remaincharactersText != 'Exceeded 180 characters limit.'"
        v-on:click="placeKwet()"
      >{{('Kwet!')}}</button>

      <button
        type="button"
        class="btn btn-warning btn-xs"
        disabled
        v-else
      >{{('To much Characters!')}}</button>
    </div>

    <b-alert
      variant="danger"
      dismissible
      fade
      :show="alertPlaceKwetNotPossible"
      @dismissed="alertPlaceKwetNotPossible=false"
    >Placing kwets Failed, please try again later.</b-alert>
     <b-alert
      variant="danger"
      dismissible
      fade
      :show="alertGetKwetsNotPossible"
      @dismissed="alertGetKwetsNotPossible=false"
    >Getting kwets Failed, please try again later.</b-alert>
     <b-alert
      variant="danger"
      dismissible
      fade
      :show="alertLikeKwetsNotPossible"
      @dismissed="alertLikeKwetsNotPossible=false"
    >Liking kwets Failed, please try again later.</b-alert>

    <div>
      <b-overlay rounded="sm">
        <b-card title="Recent Kwets">
          <div v-for="kwet in pageOfItems" :key="kwet.message">
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
                <b-card-text class="wrapper">{{kwet.message}}</b-card-text>
                <span
                  class="btn btn-primary btn-xs"
                  v-if="containsUser(kwet)"
                  v-on:click="placeLike(kwet)"
                >{{(kwet.likes.length + ' Like(s)')}}</span>

                <span
                  class="btn btn-success btn-xs"
                  v-else
                  v-on:click="removeLike(kwet)"
                >{{(kwet.likes.length + ' Like(s)')}}</span>
              </b-card>
            </div>
          </div>
          <div class="card-footer pb-0 pt-3">
            <jw-pagination :items="kwets" @changePage="onChangePage"></jw-pagination>
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
      kwets: [],
      alertPlaceKwetNotPossible: false,
      alertGetKwetsNotPossible: false,
      alertLikeKwetsNotPossible: false,
      pageOfItems: []
    };
  },
  methods: {
    async placeKwet() {
      var user = JSON.parse(localStorage.getItem("user"));
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          Id: user.id,
          UserName: user.name,
          Message: this.text
        }),
        headers: {
          "Content-Type": "application/json",
          "Authorization": user.token
        }
      };
      try {
        var response = await fetch(
          "https://kwet.woutervandenboorn.software/kwet/",
          requestOptions
        );
        if (response.ok == false) {
          throw response.status;
        }
        this.getKwets()
      } catch {
        this.alertPlaceKwetNotPossible = true;
      }
    },

    async getKwets() {
      const requestOptions = {
        method: "GET"
      };
      try{
      let response = await fetch("https://kwet.woutervandenboorn.software/kwet/", requestOptions);
      if (await response.ok == false){throw response.status}
      let body = await response.json();
      this.kwets = body;
      }
      
      catch{this.alertGetKwetsNotPossible}
    },

    async placeLike(kwet) {
      var user = JSON.parse(localStorage.getItem("user"));
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          Id: user.id,
          UserName: user.name,
          KwetId: kwet.kwetId
        }),
        headers: {
          "Content-Type": "application/json"
        }
      };
      await fetch("https://kwet.woutervandenboorn.software/kwet/placeLike", requestOptions);

      for (var i = 0; i < this.kwets.length; i++) {
        if (this.kwets[i].kwetId === kwet.kwetId) {
          this.kwets[i].likes = [
            ...this.kwets[i].likes,
            { userId: user.id, Name: user.name }
          ];
        }
      }
    },

    async removeLike(kwet) {
      var user = JSON.parse(localStorage.getItem("user"));
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          Id: user.id,
          UserName: user.name,
          KwetId: kwet.kwetId
        }),
        headers: {
          "Content-Type": "application/json"
        }
      };
      await fetch("https://kwet.woutervandenboorn.software/kwet/removeLike", requestOptions);

      for (var i = 0; i < this.kwets.length; i++) {
        for (var x = 0; x < this.kwets[i].likes.length; i++) {
          if (
            this.kwets[i].likes[x].userId === user.id &&
            this.kwets[i].kwetId === kwet.kwetId
          ) {
            this.kwets[i].likes.splice(x, 1);
          }
        }
      }
    },

    containsUser(kwet) {
      var user = JSON.parse(localStorage.getItem("user"));
      if (kwet.likes.some(e => e.userId === user.id)) {
        return false;
      }
      return true;
    },
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
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