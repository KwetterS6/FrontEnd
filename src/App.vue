<template>
  <div id="app">
    <nav
      class="navbar navbar-default"
      style="-webkit-border-radius: 0px;-moz-border-radius: 0px;border-radius: 0px;"
    >
      <div class="container">
        <div class="navbar-header">
          <button
            type="button"
            class="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/">Kwetter</router-link>
        </div>
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav">
            <li>
              <router-link to="/Temp">{{('temp')}}</router-link>
            </li>
            <li>
              <router-link to="/temp2">{{('temp')}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
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
  methods: {},
  mounted: {}
};
</script>
