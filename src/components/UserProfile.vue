<template>
  <div class="contain">
    <div style="margin: 25px 0px;">
      <b-overlay :show="show" rounded="sm">
        <b-card title="My Profile" :aria-hidden="show ? 'true' : null">
          <b-card-text>{{this.user.name}}</b-card-text>
          <b-card-text>{{this.user.email}}</b-card-text>
          <b-button :disabled="show" variant="primary" @click="show = true">Edit Profile</b-button>
        </b-card>
      </b-overlay>
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
  name: "UserProfile",
  components: {},
  data() {
    return {
      kwets: [],
      user: ''
    };
  },
  methods: {
    async getKwets() {

      const requestOptions = {
        method: "GET"
      };
      let response = await fetch("https://kwet.woutervandenboorn.software/kwet/" + this.user.id, requestOptions);
      let body = await response.json();
      this.kwets = body;
    }
  },
  async mounted() {
    this.user = JSON.parse(localStorage.getItem('user'))
    await this.getKwets();
  }
};
</script>

<style>
@import "../assets/kwetter.css";
</style>