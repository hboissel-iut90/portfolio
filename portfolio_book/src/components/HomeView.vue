<template>
  <v-container style="font-size: large;">
    <v-card-text style="margin-top: 100px;">
      <h1>Bienvenue sur le portfolio de Harry Boisselot.</h1>
    </v-card-text>
    <v-card-text>
      <h3 style="padding: 5px"><strong>Étudiant en troisième de BUT Informatique à l'Université Marie et Louis Pasteur.</strong></h3>
      <h3 style="padding: 5px"><strong>Venez découvrir mon expérience professionnelle développée durant mon stage</strong></h3>
      <h3 style="padding: 5px"><strong>ou encore mes projets conçus mes études. </strong></h3>
    </v-card-text>
    <v-container
        @click="scrollingTo('apropos')"
        style="cursor: pointer;"
    >
      V
    </v-container>
    <v-card-text class="spaceEvl align" style="margin-top: 100px; padding-left: 130px">
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
    },
    scrollingTo(id) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: elementPosition, behavior: 'smooth' });
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

.img2 {
  max-width: 50%;
}

.logosUniv1 {
  max-height: 100px;
  border-radius: 0px;
  padding-left: 100px;
}

.logosUniv2 {
  max-width: 400px;
  max-height: 80px;
  border-radius: 0px;
}

.logos2 {
  max-width: 100px;
  max-height: 30px;
  border-radius: 0px;
}

.legImg {
  align-items: center;
  font-weight: bold;
}
</style>