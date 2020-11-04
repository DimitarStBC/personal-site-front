<template>
  <div class="container d-flex flex-column mt-5">
    <div class="d-flex flex-row justify-content-around align-items-center">
      <div class="image-bg"></div>
      <div class="paraControl">
        <div class="d-flex">
          <h2>Hello</h2>
          <i class="fas wave-animation fa-hand-paper"></i>
        </div>
        <p>
          Hi, I'm Dimitar Stoev, a happily married 30 year old full-stack web
          developer. I am doing freelance work based in Burgas , but I am also
          doing work for international clients. Feel free to explore the content
          bellow and don't forget to check my amazing portfolio!
        </p>
      </div>
    </div>
    <div class="d-flex flex-column mt-5">
      <div class="d-flex align-items-center">
        <h1>Learning path</h1>
        <i class="fas fa-file-code"></i>
      </div>
      <LearningPath />
      <EndingLine />
      <div class="d-flex align-items-center">
        <h1>Technologies</h1>
        <i class="fas fa-cogs"></i>
      </div>
      <Technologies />
      <EndingLine />
      <div class="d-flex align-items-center">
        <h1>What I plan to learn next</h1>
        <i class="fas fa-wrench"></i>
      </div>
      <ul class="mt-3">
        <li>Linux</li>
        <li>Ruby on Rails</li>
      </ul>
      <EndingLine />
      <div class="d-flex align-items-center">
        <h1>Languages</h1>
        <i class="fas fa-language"></i>
      </div>
      <Languages />
      <EndingLine />
      <div class="d-flex align-items-center">
        <h1>Hobbies and interests</h1>
        <i class="fas fa-grin-alt"></i>
      </div>
      <HobbyInterests />
      <EndingLine />
    </div>
  </div>
</template>

<script>
import LearningPath from "../components/LearningPath";
import EndingLine from "../components/EndingLine";
import Technologies from "../components/Technologies";
import Languages from "../components/Languages";
import HobbyInterests from "../components/HobbyInterests";

export default {
  name: "About",
  components: {
    LearningPath,
    EndingLine,
    Technologies,
    Languages,
    HobbyInterests,
  },
};
</script>

<style scoped>
.wave-animation {
  font-size: 25px !important;
  animation-name: wave;
  animation-duration: 2.5s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
}
.fas {
  font-size: 35px;
  margin: 0 10px;
}
ul li {
  font-size: 20px;
}
@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.paraControl {
  width: 60%;
}
.image-bg {
  width: 200px;
  height: 200px;
  background-image: url("../assets/me.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50%;
}
</style>