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


      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn dark v-bind="attrs" v-on="on">
            MENU
          </v-btn>
        </template>

        <v-list dark>
          <v-list-item
              v-for="(item, index) in items"
              :key="index"
              @click="goTo('/'+item.link)"
          >
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>
    <v-main style="margin-top: 10px">
      <router-view name="central"/>
    </v-main>
  </v-app>
</template>


<script>

import {mapActions} from "vuex";

export default {
  name: 'App',
  data() {
    return {
      items: [
        { title: 'Accueil', link: '' },
        { title: 'Contexte', link: 'contexte' },
        { title: 'Page 1', link: '1' },
        { title: 'Page 2', link: '2' },
        { title: 'Page 3', link: '3' }
      ]
    }
  },
  methods: {
    ...mapActions(['verifyPage', 'keepPage']),
    goTo(route){
      if (this.$route.fullPath !== route) {
        this.$router.push(route);
      }
    },
  },
  mounted() {
    this.verifyPage();
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-image: url("@/assets/w.jpg");
}
</style>
