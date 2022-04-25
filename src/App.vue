<template>
  <div id="app">
    <div>
      <img @click="goHome" id="logo" src="./assets/images/music_logo.png" alt=""/>
      <h1 id="home_title">Mint Your Music</h1>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    goHome() {
      this.$router.push("/home");
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body, #app {
  height: 100%;
  width: 100%;
  margin: 0;
}
div {
  margin: 0;
}
#logo {
  height: 3rem;
  width: auto;
  position: absolute;
  left: 2rem;
  top: 10px;
}
#logo:hover {
  animation:turn 20s linear infinite;
  cursor: pointer;
}
@keyframes turn{
  0%{-webkit-transform:rotate(0deg);}
  25%{-webkit-transform:rotate(90deg);}
  50%{-webkit-transform:rotate(180deg);}
  75%{-webkit-transform:rotate(270deg);}
  100%{-webkit-transform:rotate(360deg);}
}
#home_title {
  font-family: 'Square Peg', cursive;
  font-size: 3rem;
  color: #6C63FF;
  margin: 2px 0;
}
</style>
