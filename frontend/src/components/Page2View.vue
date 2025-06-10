<template>
  <v-container>
    <v-card
        style="border: black solid 2px"
        color="rgba(245,245,245)"
    >
      <v-container>
        <h1>Ajout de nouvelles données</h1>
      </v-container>
      <v-container
          class="spaceBtw">
        <v-card-text class="txt">
          La figure 1 présente les différentes étapes que je devais réaliser dans les débuts de mon stage.
          J'ai posé le problème sur un tableau.
        </v-card-text>
        <v-card-text class="dirCol legImg">
          <img class="img2" alt="Image not found" src="@/assets/logo.png"/>
          Figure 1 : Liste des étapes de la mise à niveau + schémas des problèmes rencontrés pendant la réalisation
        </v-card-text>
      </v-container>
      <v-container
          class="spaceBtw"
      >

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

import {mapActions} from "vuex";

export default {
  name: 'Page2View',
  methods: {
    ...mapActions(['keepPage', 'verifyPage']),
    goTo(route) {
      if (this.$route.fullPath !== route) {
        this.$router.push(route);
      }
    }
  },
  async mounted() {
    await this.keepPage(this.$route.path);
    await this.verifyPage();
  }
}
</script>

<style scoped>

</style>