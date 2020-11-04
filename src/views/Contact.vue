<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-around align-items-center">
      <i class="fas fa-envelope-open-text"></i>
      <div class="mt-5">
        <h2>Let's talk</h2>
        <p class="mt-5">
          Whether you are interested to do business with me, want to chat about
          some of my content, or just want to hang out, I am happy to talk to
          you.
        </p>
        <p>
          My preferred way of contact is via
          <a href="tel:+359876901805">phone</a> or
          <a href="mailto:contact@stoev.dev">email</a> .
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
</style>