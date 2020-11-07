<template>
  <div class="container mt-5">
    <div class="d-flex flex-column">
      <h2>
        Check my projects
        <a target="_blank" href="https://github.com/DimitarStBC">here</a>
      </h2>
      <div class="d-flex justify-content-around flex-wrap mt-5">
        <!-- card -->
        <mdb-card class="bg-dark sizeCard">
          <mdb-view hover>
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/personal-site-front"
            >
              <mdb-card-image class="bg-image vue" />
              <mdb-mask flex-center waves overlay="white-slight"></mdb-mask>
            </a>
          </mdb-view>
          <mdb-card-body class="d-flex flex-column justify-content-between">
            <mdb-card-title> <span> this.</span>site</mdb-card-title>
            <mdb-card-text>Vue framework with mdb library.</mdb-card-text>
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/personal-site-front"
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
            <mdb-card-title>Vue tasks</mdb-card-title>
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
              >Some fun projects I did along the way.</mdb-card-text
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
              >Weather application build with REST API. Capable of city
              changing.</mdb-card-text
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
              >Static JavaScript website with language functionalities and
              animations</mdb-card-text
            >
            <a
              target="_blank"
              href="https://github.com/DimitarStBC/staticPlainJavascript"
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
p {
  color: rgb(197, 197, 197) !important;
}
.bg-image {
  width: 100%;
  height: 200px;

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
}
.js {
  background-image: url("../assets/logos/js.webp");
}
.vue {
  background-image: url("../assets/logos/vue.webp");
}

span {
  color: rgb(226, 226, 22);
}
.sizeCard {
  width: 300px;
  height: 450px;

  margin: 20px 20px;
}
</style>