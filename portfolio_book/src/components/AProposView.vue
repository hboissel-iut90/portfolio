<template>
    <div
    style="background-color: transparent">
      <v-container
          id="apropos">
        <h1>À propos</h1>
      </v-container>
      <v-container fluid
          class="spaceBtw">
        <v-card-text class="dirCol align legImg center">
          <img style="max-width: 35%; max-height: 90%" alt="Image not found" src="@/assets/Harry_BOISSELOT.png"/>
        </v-card-text>
        <v-container>
          <v-card-text>
            <h2>Harry Boisselot</h2>
          </v-card-text>
          <v-card-text class="txt">
            <p>
              Moi, c'est Harry Boisselot, 20 ans. Je suis passionné d'informatique, de jeux vidéo et de musique. J'aime pratiqué la course à pieds en amateur.
            </p>
            <p>
              Actuellement en études d'informatique en troisième année, mes connaissances en développement passe par la conception d'applications PC ou mobiles,
              de sites web ainsi que de l'intégration CI/CD.
            </p>
            <p>
              Je pratique une veille informationnelle sur plusieurs articles de sites informatique et "new tech" comme
              <a class="styleLink" href="https://www.clubic.com/">Clubic</a>,
              <a class="styleLink" href="https://www.lemondeinformatique.fr/">LeMondeInformatique</a>, ou encore
              <a class="styleLink" href="https://korben.info/">le site de Korben</a>.
            </p>
          </v-card-text>
        </v-container>
      </v-container>

      <v-container
          style="margin-top: 30px; cursor: pointer;"
          @click="scrollingTo('formContact')">
        <h3>Retrouver mon CV dans mes contacts !</h3>
        <v-container style="font-size: large; margin-top: 20px">V</v-container>
      </v-container>
  </div>
</template>

<script>

export default {
  name: 'AProposView',
  methods: {
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

<style scoped>
.styleLink {
  text-align: justify;
  font-weight: bold;
  font-size: medium;
  color: white;
}

.styleLink:hover {
  color: lightseagreen !important;
}
</style>