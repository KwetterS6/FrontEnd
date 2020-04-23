<template>
  <div class="contain">
    <p>Welcome to Kwetter! please login or register!</p>
    <div class="form-group">
            <label for="inputName">{{('Name')}}:</label>
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
    <div class="btn-group" style="margin-right: 10px;">
      <router-link class="btn btn-success" to="/login">{{('Login')}}</router-link>
    </div>
    <div class="btn-group" style="margin-right: 10px;">
      <router-link class="btn btn-success" to="/Register">{{('register')}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
</style>