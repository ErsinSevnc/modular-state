<template>
  <div id="app">
    <h3>Hello new project & New year for me</h3>
    <h5>Focus on State Management</h5>
    <Container />
  </div>
</template>

<script>
import Container from './components/Container'
export default {
  name: "App",
  components: {Container},
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  padding: 0;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: rgba(0, 0, 0, 0.14);
  width: 100%;
  height: 100%;
}
</style>
