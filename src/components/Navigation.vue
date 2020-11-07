<template>
  <mdb-navbar expand="large" class="pl-5 pr-5 sticky dark-bg">
    <router-link
      class="link mt-2"
      :to="{
        name: 'Landing',
      }"
    >
      <h4 class="pointerCursor">Dimitar <span> Stoev </span></h4>
    </router-link>

    <mdb-navbar-toggler>
      <mdb-navbar-nav
        class="d-flex justify-content-center align-items-center"
        right
      >
        <router-link
          class="link"
          :to="{
            name: 'About',
          }"
          ><mdb-nav-item>About</mdb-nav-item></router-link
        >
        <router-link
          class="link"
          :to="{
            name: 'Projects',
          }"
          ><mdb-nav-item>Projects</mdb-nav-item></router-link
        >
        <router-link
          class="link"
          :to="{
            name: 'Uses',
          }"
          ><mdb-nav-item>Uses</mdb-nav-item></router-link
        >

        <router-link
          class="link"
          :to="{
            name: 'Contact',
          }"
          ><mdb-btn size="sm" outline="info">Contact</mdb-btn></router-link
        >
      </mdb-navbar-nav>
    </mdb-navbar-toggler>
  </mdb-navbar>
</template>

<script>
import {
  mdbBtn,
  mdbNavbar,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
} from "mdbvue";
export default {
  name: "Navigation",
  components: {
    mdbBtn,
    mdbNavbar,

    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
  },
};
</script>

<style scoped>
.pointerCursor {
  cursor: pointer;
}
.sticky {
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 3;
}
span {
  color: rgb(30, 247, 236);
  transition: 0.2s ease-in-out;
}

.link {
  color: rgb(86, 201, 236);
  transition: 0.2s ease-in-out;
}
.link:hover {
  color: rgb(73, 177, 209);
}
.link:hover span {
  color: rgb(63, 152, 179);
}
.dark-bg {
  background-color: #070919;
  color: rgb(71, 123, 155);
}
</style>