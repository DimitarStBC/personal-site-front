<template>
  <div class="d-flex justify-content-between align-items-center">
    <div class="customBar">
      <router-link
        class="link"
        :to="{
          name: 'Landing',
        }"
      >
        <i class="fas fa-igloo"></i>
      </router-link>
      <router-link
        class="link"
        :to="{
          name: 'About',
        }"
        ><i class="fas fa-info-circle"></i
      ></router-link>
      <router-link
        class="link"
        :to="{
          name: 'Projects',
        }"
        ><i class="fab fa-github"></i
      ></router-link>
      <router-link
        class="link"
        :to="{
          name: 'Uses',
        }"
        ><i class="fas fa-laptop-code"></i
      ></router-link>
      <router-link
        class="link"
        :to="{
          name: 'Contact',
        }"
        ><i class="fas fa-at"></i
      ></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavMobile",
};
</script>

<style scoped>
.customBar {
  display: none;
}

@media only screen and (max-width: 1000px) {
  .customBar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 60px;
    bottom: 0;
    border-top: 1px solid rgb(71, 123, 155);
    background-color: #070919;
  }
  .fas,
  .fab {
    font-size: 32px;
  }
}
</style>