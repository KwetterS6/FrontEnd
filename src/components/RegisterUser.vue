<template>
  <div class="contain">
    <p>Please register enzo </p>
    <div class="form-group">
            <label for="inputName">{{('Username')}}:</label>
            <input
              v-model="name"
              type="text"
              class="form-control"
              id="inputName"
              v-bind:placeholder="('name')"
            >
          </div>
          <div class="form-group">
            <label for="inputEmail">{{('Email Address')}}:</label>
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="inputEmail"
              v-bind:placeholder="('email')"
            >
          </div>
          <div class="form-group">
            <label for="unputPassword">{{('Password')}}:</label>
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="inputPassword"
              v-bind:placeholder="('password')"
            >
          </div>
          

    <div class="btn-group" style="margin-right: 10px;">
      <span class="btn btn-success btn-xs" v-on:click="registerAccount()" >{{('Register')}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegisterUser",
    data() {
        return {
            
        }
    },
    methods: {
        async registerAccount(){
            fetch("https://userservice.woutervandenboorn.software/user/", 
            {
            mode: 'cors',
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
})
.then( (response) => { 
   console.log(response.data);
});
    }
}
};
</script>

<style scoped>
</style>