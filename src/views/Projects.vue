<template>
  <div class="container mt-5">
    <div class="d-flex flex-column">
      <h2>
        Check my repos
        <a target="_blank" href="https://github.com/DimitarStBC">here</a>
      </h2>
      <div class="d-flex justify-content-around flex-wrap mt-5">
        <!-- card -->
        <mdb-card class="bg-dark sizeCard">
          <mdb-view hover>
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/HTML-CSS-design"
            >
              <mdb-card-image class="bg-image html" />
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body class="d-flex flex-column justify-content-between">
            <mdb-card-title>Pure html and css site</mdb-card-title>
            <mdb-card-text>no JavaScript site</mdb-card-text>
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/HTML-CSS-design"
              ><mdb-btn outline="info">Go to</mdb-btn></a
            >
          </mdb-card-body>
        </mdb-card>
        <!-- end of card -->
        <!-- card -->
        <mdb-card class="bg-dark sizeCard">
          <mdb-view hover>
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/JavaScript-Projects"
            >
              <mdb-card-image class="bg-image js" />
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body class="d-flex flex-column justify-content-between">
            <mdb-card-title>Small JavaScript projects</mdb-card-title>
            <mdb-card-text
              >Some quick examples of JavaScript controll</mdb-card-text
            >
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/JavaScript-Projects"
              ><mdb-btn outline="info">Go to</mdb-btn></a
            >
          </mdb-card-body>
        </mdb-card>
        <!-- end of card -->

        <!-- card -->
        <mdb-card class="bg-dark sizeCard">
          <mdb-view hover>
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/Weather-App"
            >
              <mdb-card-image class="bg-image js" />
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body class="d-flex flex-column justify-content-between">
            <mdb-card-title>Weather app</mdb-card-title>
            <mdb-card-text
              >Weather application build with rest API</mdb-card-text
            >
            <a target="_blank" href="https://github.com/DimitarStBC/Weather-App"
              ><mdb-btn outline="info">Go to</mdb-btn></a
            >
          </mdb-card-body>
        </mdb-card>
        <!-- end of card -->

        <!-- card -->
        <mdb-card class="bg-dark sizeCard">
          <mdb-view hover>
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/staticPlainJavascript"
            >
              <mdb-card-image class="bg-image js" />
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body class="d-flex flex-column justify-content-between">
            <mdb-card-title>Static JavaScript site</mdb-card-title>
            <mdb-card-text
              >Simple static JavaScript website with language functionalities
              and animations</mdb-card-text
            >
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/staticPlainJavascript"
              ><mdb-btn outline="info">Go to</mdb-btn></a
            >
          </mdb-card-body>
        </mdb-card>
        <!-- end of card -->

        <!-- card -->
        <mdb-card class="bg-dark sizeCard">
          <mdb-view hover>
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/tasksManagment"
            >
              <mdb-card-image class="bg-image vue" />
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body class="d-flex flex-column justify-content-between">
            <mdb-card-title>Vue tasks managment system</mdb-card-title>
            <mdb-card-text
              >Task system with json placeholder functionalities</mdb-card-text
            >
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/tasksManagment"
              ><mdb-btn outline="info">Go to</mdb-btn></a
            >
          </mdb-card-body>
        </mdb-card>
        <!-- end of card -->

        <!-- card -->
        <mdb-card class="bg-dark sizeCard">
          <mdb-view hover>
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/tilesandcarpets"
            >
              <mdb-card-image class="bg-image vue" />
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body class="d-flex flex-column justify-content-between">
            <mdb-card-title>Vue carpet cleaning bussiness</mdb-card-title>
            <mdb-card-text
              >Website created with Vue for a carpet cleaning
              service</mdb-card-text
            >
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/tilesandcarpets"
              ><mdb-btn outline="info">Go to</mdb-btn></a
            >
          </mdb-card-body>
        </mdb-card>
        <!-- end of card -->
      </div>
    </div>
    <EndingLine />
  </div>
</template>

<script>
import EndingLine from "../components/EndingLine";

import {
  mdbCard,
  mdbCardImage,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbBtn,
  mdbView,
  mdbMask,
} from "mdbvue";

export default {
  name: "Projects",
  components: {
    EndingLine,
    mdbCard,
    mdbCardImage,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbBtn,
    mdbView,
    mdbMask,
  },
};
</script>

<style scoped>
.bg-image {
  width: 100%;
  height: 200px;

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.js {
  background-image: url("../assets/logos/js.png");
}
.vue {
  background-image: url("../assets/logos/vue.png");
}
.html {
  background-image: url("../assets/logos/htmlcss.webp");
}
.sizeCard {
  width: 300px;
  height: 450px;

  margin: 20px 20px;
}
</style>