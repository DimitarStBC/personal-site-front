<template>
  <div
    class="d-flex flex-row flex-wrap justify-content-around mt-5 containerControl"
  >
    <div
      class="imageControl d-flex justify-content-center align-items-center"
      v-for="skill in skills"
      :key="skill"
    >
      <img :src="skill.logo" />
    </div>
  </div>
</template>

<script>
import technologies from "../technologies";

export default {
  name: "Technologies",

  data() {
    return {
      skills: technologies,
    };
  },
};
</script>

<style scoped>
.containerControl {
  width: 70%;
  margin: auto;
}
.imageControl {
  width: 120px;
  height: 120px;
  padding: 5px;
  margin: 5px 20px;
  background-color: rgb(255, 255, 255);
}
.imageControl img {
  width: 100%;
}
@media only screen and (max-width: 1000px) {
  .containerControl {
    width: 100%;
  }
  .imageControl {
    margin: 5px 5px;
  }
}
</style>