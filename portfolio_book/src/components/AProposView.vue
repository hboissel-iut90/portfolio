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
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
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
            </p>
          </v-card-text>
        </v-container>
      </v-container>
      <v-container
          class="spaceBtw">
        <v-card-text class="txt">
          <p>
          </p>
          <p>
          </p>
          <p>
          </p>
        </v-card-text>
      </v-container>

      <v-container
          style="margin-top: 30px"
          @click="scrollingTo('formContact')">
        <h3>Retrouver mon CV dans mes contacts !</h3>
        <img class="logos2" alt="V" src="@/assets/w.jpg">
      </v-container>
      <!--v-container>
        < v-card-text class="txt">
          <v-container class="txt" style="padding-inline: 60px">
            <ul>
              <li><h4>l’horodatage avec l’horloge interne du téléphone;</h4></li>
              <br>
              <li><h4>les axes d’accélération avec l’accéléromètre;</h4></li>
              <br>
              <li><h4>les vitesses de rotations avec le gyroscope;</h4></li>
              <br>
            </ul>
          </v-container>
        </v-card-text>
      </v-container-->

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

<style>
</style>