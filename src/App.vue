<template>
  <div id="app">
    <div id="nav">
      <router-link to="/about">Susan</router-link> |
      <router-link to="/">Clark</router-link> |
      <router-link to="/town">Josh</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    if (this.$workbox) {
      this.$workbox.addEventListener('waiting', () => {
        this.showUpgradeUI = true
      })
    }
  },
  methods: {
    async accept () {
      this.showUpgradeUI = false
      await this.$workbox.messageSW({ type: 'SKIP_WAITING' })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
