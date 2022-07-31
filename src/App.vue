<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center">
        <v-app-bar-title>art1sec's Flächenumrechner</v-app-bar-title>
      </div>
    </v-app-bar>

    <v-main>
      <AreaCalc />
    </v-main>
  </v-app>
</template>

<script>
import AreaCalc from "./components/AreaCalc";

export default {
  name: "App",
  components: {
    AreaCalc,
  },
  created() {
    document.title =
      "Flächenumrechner (Hektar, Saarland, Fußballfelder, ...) - © Martin Schmitz";
  },
};
</script>
