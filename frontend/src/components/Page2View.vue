<template>
  <v-container style="font-size: large;">
    <v-card
        style="border: black solid 2px"
        color="rgba(245,245,245)"
    >
      <v-container>
        <h1>Ajout de nouvelles données</h1>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            Cette mission intervient à la suite de la passation S8 à S20 et vient compléter les données de capteurs par des données météorologiques ou de trafic routier.
            Elle a pour idée de prendre des données à partir d’API (= Interface de Programmation d’Application) à partir de requêtes en HTTP (= Protocole de Transfert HyperTexte)
            pour les transformer en données exploitables et les ajouter dans le fichier.
          </p>
        </v-card-text>
      </v-container>
      <v-container>
        <h2>Recherche d’API</h2>
      </v-container>
      <v-container
          class="spaceBtw">
        <v-btn
            @click="goTo('/1')"
            dark
        >
          Page 1
        </v-btn>
        <v-card-text>2</v-card-text>
        <v-btn
            @click="goTo('/3')"
            dark
        >
          Page 3
        </v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>

//import {mapActions} from "vuex";

export default {
  name: 'Page2View',
  methods: {
    //...mapActions(['keepPage', 'verifyPage']),
    goTo(route) {
      if (this.$route.fullPath !== route) {
        this.$router.push(route);
      }
    }
  },
  /*
  async mounted() {
    await this.keepPage(this.$route.path);
    await this.verifyPage();
  }

   */
}
</script>

<style scoped>

</style>