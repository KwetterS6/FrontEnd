<template>
  <div id="app">
     <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#/">Kwetter</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#/Kwetter">Home</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#/Profile">Profile</b-dropdown-item>
          <b-dropdown-item v-on:click="Logout()">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #42b983;
}

.router-link-exact-active {
  color: #2c3e50;
}
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    Logout(){
      localStorage.clear();
    }
  },
  mounted: {}
};
</script>
