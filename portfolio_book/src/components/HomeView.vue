<template>
  <v-container style="font-size: large; margin-block: 200px">
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
  flex-direction: column;
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

.align {
  display: flex;
  align-items: center;
}

.txt {
  text-align: justify;
  font-weight: bold;
  font-size: medium;
}

.txtLink {
  text-align: center;
  font-weight: bold;
  font-size: medium;
  color: white;
}

.txtLinkHover:hover * {
  color: lightseagreen !important;
}

.link {
  text-decoration: none;
}

.borderImg {
  border: solid darkslategray 2px;
  border-radius: 20px;
}

.legImg {
  align-items: center;
  font-weight: bold;
}

.img {
  max-width: 90%;
}

.img1_5 {
  max-width: 70%;
}

.img2 {
  max-width: 50%;
}

.img2_5 {
  max-width: 35%;
}

.img3 {
  max-width: 25%;
}

.img4 {
  max-width: 10%;
}

.logos {
  max-width: 80px;
  max-height: 80px;
  border-radius: 0px;
  object-fit: contain;
}

/* Écrans très petits (téléphones mobiles < 480px) */
@media (max-width: 480px) {
  .logos {
    max-width: 50px;
    max-height: 50px;
  }
}

/* Écrans petits à moyens (tablettes 480px - 768px) */
@media (min-width: 481px) and (max-width: 768px) {
  .logos {
    max-width: 65px;
    max-height: 65px;
  }
}

/* Écrans moyens à grands (desktop 769px - 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .logos {
    max-width: 90px;
    max-height: 90px;
  }
}

/* Écrans très grands (desktop > 1024px) */
@media (min-width: 1025px) {
  .logos {
    max-width: 100px;
    max-height: 100px;
  }
}
</style>