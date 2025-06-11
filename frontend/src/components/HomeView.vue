<template>
  <v-container>
    <v-card-text style="margin-top: 100px;">
      <h1>Bienvenue sur le portfolio de Harry Boisselot.</h1>
    </v-card-text>
    <v-card-text>
      <h3 style="padding: 5px"><strong>Étudiant en deuxième de BUT Informatique à l'IUT Nord Franche-Comté.</strong></h3>
      <h3 style="padding: 5px"><strong>Venez découvrir mon expérience professionnelle développée</strong></h3>
      <h3 style="padding: 5px"><strong>pendant mon stage à l'Université Gustave Eiffel. </strong></h3>
    </v-card-text>
    <v-card-text class="spaceBtw" style="margin-bottom: 70px">
      <img class="logos" alt="Image not found" src="@/assets/logo_iut3.png">
      <img class="logos" alt="Image not found" src="@/assets/logo_UGE.png">
    </v-card-text>
    <v-btn
        @click="goTo('/contexte')"
        dark
    >
      Contexte
    </v-btn>

    <!-- <v-card-text class="spaceEvl" style="margin-top: 70px">
      <img class="logos2" alt="Image not found" src="@/assets/logo_iut3.png">
      <img class="logos2" alt="Image not found" src="@/assets/logo_UGE.png">
      <img class="logos2" alt="Image not found" src="@/assets/logo_UGE.png">
      <img class="logos2" alt="Image not found" src="@/assets/logo_UGE.png">
      <img class="logos2" alt="Image not found" src="@/assets/logo_UGE.png">
    </v-card-text>-->
  </v-container>
</template>

<script>
// import {mapActions} from "vuex";

export default {
  name: 'HomeView',
  methods: {
    // ...mapActions(['keepPage']),
    goTo(route) {
      if (this.$route.fullPath !== route) {
        this.$router.push(route);
      }
    }
  },
}
</script>

<style>
.spaceBtw {
  display: flex;
  justify-content: space-between;
}

.spaceEvl{
  display: flex;
  justify-content: space-evenly;
}

.glued {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.dirCol {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.txt {
  text-align: justify;
  font-weight: bold;
  font-size: medium;
}

.borderImg {
  border: solid darkslategray 2px;
  border-radius: 20px;
}

.align {
  align-items: center;
}

.img {
  max-width: 90%;
}

.logos {
  max-width: 400px;
  max-height: 80px;
  margin-left: 10px;
  border: solid darkslategray 0px;
  border-radius: 0px;
}

.logos2 {
  max-width: 100px;
  max-height: 80px;
  border: solid darkslategray 0px;
  border-radius: 0px;
}

.legImg {
  align-items: center;
  font-weight: bold;
}
</style>