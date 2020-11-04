<template>
  <div class="mt-5">
    <div v-for="hobby in hobbies" :key="hobby">
      <h2>{{ hobby.title }}</h2>
      <p class="opacityRe">{{ hobby.content }}</p>
    </div>
  </div>
</template>

<script>
import hobbyInterest from "../hobbyInterests";

export default {
  name: "HobbyInterests",
  data() {
    return {
      hobbies: hobbyInterest,
    };
  },
};
</script>

<style scoped>
.opacityRe {
  opacity: 0.6;
  font-size: 20px;
  width: 60%;
}
</style>