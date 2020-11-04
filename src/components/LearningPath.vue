<template>
  <div>
    <div v-for="path in pathData" :key="path">
      <div class="box">
        <div class="d-flex align-items-center">
          <span class="pulsating-circle mr-3"></span>
          <h4 class="opacityRe">{{ path.date }}</h4>
        </div>
        <h4>{{ path.content }}</h4>
        <h4 class="opacityRe">{{ path.subContent }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import paths from "../learningPath";

export default {
  data() {
    return {
      pathData: paths,
    };
  },
};
</script>

<style scoped>
.opacityRe {
  opacity: 0.7;
  font-size: 18px;
}
.box {
  width: 500px;
  margin: 20px 0;
}

.pulsating-circle {
  border: 3px solid;
  border-radius: 30px;
  height: 18px;
  width: 18px;

  animation: pulsate 1s ease-out;
  animation-iteration-count: infinite;
  opacity: 0;
}
@keyframes pulsate {
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2, 1.2);
    opacity: 0;
  }
}

@media only screen and (max-width: 1000px) {
  .box {
    width: 90%;
  }
}
</style>