<template>
  <div class="container mt-5 h-90">
    <div class="pt-3">
      <h1>Hello, I'm Dimitar</h1>
      <h1>and <span class="heart"></span> web development</h1>
    </div>
    <div class="imageControl d-flex justify-content-center">
      <img src="../assets/landing.webp" alt="" />
    </div>
    <div>
      <p>
        I am a freelancing full-stack developer, living in the beautiful city of
        Burgas. I mostly work with JavaScript (Node.js & Vue.js), and also have
        experience with C#, Java, and Angular.
      </p>
      <p>
        If you have any web development needs, feel free to
        <router-link
          :to="{
            name: 'Contact',
          }"
          >contact</router-link
        >
        or
        <router-link
          class="link"
          :to="{
            name: 'About',
          }"
          >get to know me</router-link
        >
        a little better.
      </p>
    </div>
    <EndingLine />
  </div>
</template>

<script>
import EndingLine from "../components/EndingLine";

export default {
  name: "Landing",
  components: {
    EndingLine,
  },
};
</script>

<style scoped>
p {
  font-size: 25px;
}
.imageControl img {
  width: 600px;
}
.heart {
  background-color: red;
  display: inline-block;
  height: 30px;
  margin: 0 10px;
  position: relative;
  top: 0;
  transform: rotate(-45deg);
  width: 30px;
}

.heart:before,
.heart:after {
  content: "";
  background-color: red;
  border-radius: 50%;
  height: 30px;
  position: absolute;
  width: 30px;
}

.heart:before {
  top: -15px;
  left: 0;
}

.heart:after {
  left: 15px;
  top: 0;
}

@media only screen and (max-width: 1000px) {
  .imageControl img {
    width: 90%;
  }
}
</style>