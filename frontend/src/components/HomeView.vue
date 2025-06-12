<template>
  <v-container style="font-size: large;">
    <v-card-text style="margin-top: 100px;">
      <h1>Bienvenue sur le portfolio de Harry Boisselot.</h1>
    </v-card-text>
    <v-card-text>
      <h3 style="padding: 5px"><strong>Étudiant en deuxième de BUT Informatique à l'Université Marie et Louis Pasteur.</strong></h3>
      <h3 style="padding: 5px"><strong>Venez découvrir mon expérience professionnelle développée</strong></h3>
      <h3 style="padding: 5px"><strong>pendant mon stage à l'Université Gustave Eiffel. </strong></h3>
    </v-card-text>
    <v-card-text class="spaceBtw " style="margin-bottom: 70px">
      <img class="logosUniv1" alt="Image not found" src="@/assets/UMLP.png">
      <img class="logosUniv2" alt="Image not found" src="@/assets/logo_UGE.png">
    </v-card-text>
    <v-btn
        @click="goTo('/contexte')"
        dark
    >
      Contexte
    </v-btn>
    <v-card-text class="spaceEvl align" style="margin-top: 100px; padding-left: 130px">
      <a style="text-decoration: none; color: black" href="https://github.com/hboissel-iut90">
        <v-container>
         <img class="logos2" alt="Image not found" src="@/assets/github.png">
          <p class="txt">Github</p>
        </v-container>
      </a>
      <a style="text-decoration: none; color: black" href="mailto:harry.boisselot@edu.univ-fcomte.fr">
        <v-container>
          <img class="logos2" alt="Image not found" src="@/assets/email_univ.png">
          <p class="txt">Email universitaire</p>
        </v-container>
      </a>
      <a style="text-decoration: none; color: black" href="mailto:harry.boisselot@gmail.com">
        <v-container>
          <img class="logos2" alt="Image not found" src="@/assets/email_pro.png">
          <p class="txt">Email professionnelle</p>
        </v-container>
      </a>
    </v-card-text>
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

.spaceEvl {
  display: flex;
  justify-content: space-evenly;
}

.center {
  display: flex;
  justify-content: center;
}

.glued {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.dirCol {
  display: flex;
  flex-direction: column;
}

.dirRow {
  display: flex;
  flex-direction: row;
}

.txt {
  text-align: justify;
  font-weight: bold;
  font-size: large;
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

.logosUniv1 {
  max-height: 100px;
  border: solid darkslategray 0px;
  border-radius: 0px;
  padding-left: 100px;
}

.logosUniv2 {
  max-width: 400px;
  max-height: 80px;
  border: solid darkslategray 0px;
  border-radius: 0px;
}

.logos2 {
  max-width: 100px;
  max-height: 30px;
  border: solid darkslategray 0px;
  border-radius: 0px;
}

.legImg {
  align-items: center;
  font-weight: bold;
}
</style>