<template>
  <div class="contain">
    <p>Welcome to Kwetter! please login or register!</p>
    <b-alert
      variant="danger"
      dismissible
      fade
      :show="stillLoggedIn"
      @dismissed="stillLoggedIn=false"
    >You have to log out begore logging in!.</b-alert>
    <b-alert
      variant="danger"
      dismissible
      fade
      :show="loginFailed"
      @dismissed="loginFailed=false"
    >Incorrect credentials, please check your email and password.</b-alert>
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
            <label for="inPutPassword">{{('Password')}}:</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="inputPassword"
              v-bind:placeholder="('password')"
            >
          </div>
          
    <div class="btn-group" style="margin-right: 10px;">
       <span class="btn btn-success btn-xs" v-on:click="login()" >{{('Login')}}</span>
    </div>
    <div class="btn-group" style="margin-right: 10px;">
      <router-link class="btn btn-success" to="/Register">{{('Register')}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      loginFailed: false,
      stillLoggedIn: false
      };
  },
methods: 
{
  async login()
  {
    var user = JSON.parse(localStorage.getItem("user"));
    try{
      if (user != null){throw user}
    let options = 
    {
      method: "post",
      headers: 
      {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.name,
        email: this.email,
        password: this.password
      })
    }

    let response = await fetch("https://userservice.woutervandenboorn.software/user/login", options)
    let data = await response.json()
    if(response.ok) {
      localStorage.setItem("user", JSON.stringify(data.user))
      this.$router.push('Kwetter')
    }
    this.loginFailed = true
  }
  catch{this.stillLoggedIn = true} 
  }
  
}
}
</script>

<style scoped>
</style>