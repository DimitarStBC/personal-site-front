<template>
  <div id="app">
    <Navigation />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";

export default {
  name: "App",
  components: {
    Navigation,
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}
.fade-enter {
  opacity: 0;
}
.fade-leave-to {
  opacity: 1;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: rgb(63, 152, 179);
}
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(102, 191, 243);
  background-color: #070919;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
