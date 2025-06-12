<template>
  <v-container style="font-size: large;">
    <v-card
        style="border: black solid 2px"
        color="rgba(245,245,245)"
    >
      <v-container>
        <h1>Protocole de rootage de téléphone</h1>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p></p>
        </v-card-text>
      </v-container>
      <v-container style="color: gray">
        <h2>En progression ...</h2>
      </v-container>
      <v-container
          class="spaceBtw">
        <v-btn
            @click="goTo('/2')"
            dark
        >
          Page 2
        </v-btn>
        <v-card-text class="style2" style="margin-right: 90px">3</v-card-text>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>

//import {mapActions} from "vuex";

export default {
  name: 'Page3View',
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