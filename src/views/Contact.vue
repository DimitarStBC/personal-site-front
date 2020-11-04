<template>
  <div class="container mt-5">
    <div
      class="d-flex flex-sm-row flex-column justify-content-around align-items-center"
    >
      <i class="fas fa-envelope-open-text"></i>
      <div class="mt-5 ml-3">
        <h2>Let's talk</h2>
        <p class="mt-5">
          If you are interested to do business with me, want to chat about some
          of my content, or just hang out, I am happy to talk to you.
        </p>
        <p>
          You can contact me via
          <a href="tel:+359876901805">phone</a> or
          <a href="mailto:drowsa@tuta.io">email</a> .
        </p>
        <a
          target="_blank"
          class="mr-3"
          href="https://www.linkedin.com/in/dimitar-stoev-91464a114/"
          ><i class="fab fa-linkedin"></i
        ></a>
        <a target="_blank" href="https://github.com/DimitarStBC"
          ><i class="fab fa-github-square"></i
        ></a>
      </div>
    </div>
    <EndingLine />
  </div>
</template>

<script>
import EndingLine from "../components/EndingLine";

export default {
  name: "Contact",
  components: {
    EndingLine,
  },
};
</script>

<style scoped>
.fas {
  font-size: 250px;
}
h2 {
  font-size: 45px;
}
p {
  width: 600px;
  font-size: 23px;
}

.fab {
  font-size: 45px;
}

@media only screen and (max-width: 1000px) {
  .fas {
    font-size: 150px;
  }
  h2 {
    font-size: 30px;
  }
  p {
    width: 90%;
  }
}
</style>