<template>
  <div
      style="background-color: transparent;">
    <v-container>
      <h1>Mes projets</h1>
    </v-container>
    <v-container
        class="spaceBtw">
      <v-card-text class="logos2">
        <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
        <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
        <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
        <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
        <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
      </v-card-text>
      <v-card-text class="dirCol align legImg center">
        <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
      </v-card-text>
      <v-card-text class="txt">
        <p>
          Cette mission intervient à la suite de la passation S8 à S20 et vient compléter les données de capteurs par
          des données météorologiques ou de trafic routier.
          Elle a pour idée de prendre des données à partir d’API (= Interface de Programmation d’Application) à partir
          de requêtes en HTTP (= Protocole de Transfert HyperTexte)
          pour les transformer en données exploitables et les ajouter dans le fichier.
        </p>
      </v-card-text>
    </v-container>
    <v-container
        class="spaceBtw">
      <v-card-text class="logos2">
        <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
        <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
        <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
        <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
        <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
      </v-card-text>
      <v-card-text class="dirCol align legImg center">
        <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
      </v-card-text>
      <v-card-text class="txt">
        <p>
          Cette mission intervient à la suite de la passation S8 à S20 et vient compléter les données de capteurs par
          des données météorologiques ou de trafic routier.
          Elle a pour idée de prendre des données à partir d’API (= Interface de Programmation d’Application) à partir
          de requêtes en HTTP (= Protocole de Transfert HyperTexte)
          pour les transformer en données exploitables et les ajouter dans le fichier.
        </p>
      </v-card-text>
    </v-container>
    <v-container
        class="spaceBtw">
      <v-card-text class="logos2">
        <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
        <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
        <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
        <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
        <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
      </v-card-text>
      <v-card-text class="dirCol align legImg center">
        <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
      </v-card-text>
      <v-card-text class="txt">
        <p>
          Cette mission intervient à la suite de la passation S8 à S20 et vient compléter les données de capteurs par
          des données météorologiques ou de trafic routier.
          Elle a pour idée de prendre des données à partir d’API (= Interface de Programmation d’Application) à partir
          de requêtes en HTTP (= Protocole de Transfert HyperTexte)
          pour les transformer en données exploitables et les ajouter dans le fichier.
        </p>
      </v-card-text>
    </v-container>
    <v-container
        class="spaceBtw">
      <v-card-text class="logos2">
        <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
        <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
        <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
        <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
        <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
      </v-card-text>
      <v-card-text class="dirCol align legImg center">
        <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
      </v-card-text>
      <v-card-text class="txt">
        <p>
          Cette mission intervient à la suite de la passation S8 à S20 et vient compléter les données de capteurs par
          des données météorologiques ou de trafic routier.
          Elle a pour idée de prendre des données à partir d’API (= Interface de Programmation d’Application) à partir
          de requêtes en HTTP (= Protocole de Transfert HyperTexte)
          pour les transformer en données exploitables et les ajouter dans le fichier.
        </p>
      </v-card-text>
    </v-container>
  </div>
</template>

<script>

//import {mapActions} from "vuex";

export default {
  name: 'ProjetsView',
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