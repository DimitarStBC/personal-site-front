<template>
  <div class="container mt-5">
    <h4>My working set up and apps</h4>
    <div class="d-flex flex-column mt-5">
      <div class="d-flex align-items-center">
        <h1>Editor</h1>
        <i class="fas fa-code"></i>
      </div>
      <ul>
        <li>
          Editor:
          <a target="_blank" href="https://code.visualstudio.com/"
            >Visual Studio Code</a
          >
        </li>
        <li>
          Editor theme:
          <a
            target="_blank"
            href="https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme"
            >One Dark Pro</a
          >
        </li>
        <li>
          Second editor:
          <a target="_blank" href="https://www.jetbrains.com/idea/">
            IntelliJ IDEA</a
          >
        </li>
      </ul>
      <div class="d-flex align-items-center mt-5">
        <h1>Desktop Apps</h1>
        <i class="fas fa-window-restore"></i>
      </div>
      <ul>
        <li>
          Email provider:
          <a target="_blank" href="https://tutanota.com/">Tutanota</a>
        </li>
        <li>
          Primary web browser:
          <a target="_blank" href="https://www.google.com/chrome/"
            >Google Chrome</a
          >
        </li>
        <li>
          Secondary web browser:
          <a target="_blank" href="https://www.mozilla.org/en-US/firefox/"
            >Firefox</a
          >
        </li>
        <li>
          Office Suite:
          <a
            target="_blank"
            href="https://www.libreoffice.org/download/download/"
            >Libre Office</a
          >
        </li>
        <li>
          Todo App: <a target="_blank" href="https://asana.com/">Asana</a>
        </li>
      </ul>
      <div class="d-flex align-items-center mt-5">
        <h1>Hosting</h1>
        <i class="fas fa-server"></i>
      </div>
      <ul>
        <li>
          Front-End:
          <a target="_blank" href="https://www.netlify.com/">Netlify</a>
        </li>
        <li>
          Back-End:
          <a target="_blank" href="https://www.heroku.com/">Heroku</a>
        </li>
        <li>
          Domain provider:
          <a target="_blank" href="https://www.icn.bg/">ICN</a>
        </li>
      </ul>
      <div class="d-flex align-items-center mt-5">
        <h1>Workstation Setup</h1>
        <i class="fas fa-laptop"></i>
      </div>
      <ul>
        <li>Laptop: <a target="_blank" href="https://www.acer.com">Acer</a></li>
        <li>
          Operational System:
          <a
            target="_blank"
            href="https://www.microsoft.com/bg-bg/software-download/windows10"
            >Windows 10</a
          >
        </li>
        <li>
          Second Operational System:
          <a target="_blank" href="https://ubuntu.com/">Ubuntu 20.04</a>
        </li>
        <li>
          External screen:
          <a
            target="_blank"
            href="https://www.philips.bg/c-p/271E1SCA_00/full-hd-curved-lcd-monitor"
            >271E1SCA/00</a
          >
        </li>
      </ul>
    </div>
    <EndingLine />
  </div>
</template>

<script>
import EndingLine from "../components/EndingLine";

export default {
  name: "Uses",
  components: {
    EndingLine,
  },
};
</script>

<style scoped>
.fas {
  font-size: 32px;
  margin: 0 10px;
}

ul li {
  font-size: 20px;
}
</style>