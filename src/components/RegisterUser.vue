<template>
  <div class="contain">
    <p>Please register enzo</p>
    <b-alert
      variant="danger"
      dismissible
      fade
      :show="registerFailed"
      @dismissed="registerFailed=false"
    >Register Failed, please try again later.</b-alert>

    <b-alert
      variant="success"
      dismissible
      fade
      :show="registerSuccess"
      @dismissed="registerSuccess=false"
    >
      <a href="Home" class="alert-link">Register success, please click this to continue to login!</a>.
    </b-alert>

    <div class="form-group">
      <label for="inputName">{{('Username')}}:</label>
      <input
        v-model="name"
        type="text"
        class="form-control"
        id="inputName"
        v-bind:placeholder="('name')"
      />
    </div>
    <div class="form-group">
      <label for="inputEmail">{{('Email Address')}}:</label>
      <input
        v-model="email"
        type="email"
        class="form-control"
        id="inputEmail"
        v-bind:placeholder="('email')"
      />
    </div>
    <div class="form-group">
      <label for="unputPassword">{{('Password')}}:</label>
      <input
        v-model="password"
        type="password"
        class="form-control"
        id="inputPassword"
        v-bind:placeholder="('password')"
      />
    </div>

    <div class="btn-group" style="margin-right: 10px;">
      <span class="btn btn-success btn-xs" v-on:click="registerAccount()">{{('Register')}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterUser",
  data() {
    return {
      registerFailed: false,
      registerSuccess: false
    };
  },
  methods: {
    async registerAccount() {
    try{
      var response = await fetch("https://userservice.woutervandenboorn.software/user/", {
        mode: "cors",
        method: "post",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          password: this.password
        })
      })

      if(response.ok == false){
        throw response.ok}

      this.registerSuccess = true

      }
      catch{this.registerFailed = true}
    }
  }
};
</script>

<style scoped>
</style>