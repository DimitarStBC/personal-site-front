<template>
  <div>
    <div v-for="lang in langs" :key="lang">
      <h4 class="opacityRe">{{ lang.lang }}</h4>
      <span>{{ lang.sub }}</span>
    </div>
  </div>
</template>

<script>
import languages from "../languages";

export default {
  name: "Languages",
  data() {
    return {
      langs: languages,
    };
  },
};
</script>

<style scoped>
.opacityRe {
  opacity: 0.6;
  font-size: 28px;
}
</style>