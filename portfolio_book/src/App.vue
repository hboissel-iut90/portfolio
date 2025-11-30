<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      dark
      height="80"
    >
      <v-container class="d-flex align-center">
        <v-btn
            text
            @click="goTo('/')"
        >
          <v-img
            alt="Logo IUT"
            class="shrink"
            contain
            src="@/assets/logo_iut2.png"
            transition="scale-transition"
            width="200"
          />
        </v-btn>
      </v-container>

      <v-spacer></v-spacer>

      <v-btn
          dark
          @click="goTo('/')"
          style="margin-right: 20px">
        ACCUEIL
      </v-btn>

      <v-btn
          dark
          @click="goTo('/projets')"
          style="margin-right: 20px">
        PROJETS
      </v-btn>
    </v-app-bar>
    <v-main style="margin-top: 10px">
      <router-view name="skills"/>
      <router-view name="central"/>
      <router-view name="apropos"/>
      <router-view name="footer"/>
    </v-main>
  </v-app>
</template>


<script>

export default {
  name: 'App',
  methods: {
    goTo(route){
      if (this.$route.fullPath !== route) {
        this.$router.push(route);
      }
    },
  },
}
</script>

<style>
#app {
  font-family: "DejaVu Sans Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("@/assets/blue-indigo.jpg");

}
</style>
