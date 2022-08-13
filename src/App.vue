<template>
  <v-app>
    <v-app-bar app color="#1C1C1C" dark height="100px">
      <v-spacer></v-spacer>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-0"
          contain
          src="./assets/logo.png"
          transition="scale-transition"
          width="200"
        />

        <v-container fill-height fluid>
          <v-row align="center" justify="center">
            <div v-for="item in items" class="list" :key="item">
              <v-btn text x-large>{{
                item.text
              }}</v-btn>
            </div>
            <v-icon color="red darken-2">mdi-twitter </v-icon>
          </v-row>
        </v-container>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      items: [
        {
          text: "Mint",
          href: "/",
        },
        {
          text: "Roadmap",
          href: "/roadmap",
        },
        {
          text: "FAQ",
          href: "/FQA",
        },
      ],
    };
  },
};
</script>
