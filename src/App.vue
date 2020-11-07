<template>
  <div id="app">
    <Navigation />
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <NavMobile />
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import NavMobile from "./components/NavMobile";

export default {
  name: "App",
  components: {
    Navigation,
    NavMobile,
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
h1,
h2,
h3,
h4,
p,
ul,
li {
  cursor: default;
}
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: rgb(102, 191, 243);
  background-color: #070919;
  
  
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
