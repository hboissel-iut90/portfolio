<template>
  <v-container>
    <v-card
        style="border: black solid 2px"
        color="rgba(245,245,245)"
    >
      <v-container>
        <v-container>
          <h1>Contexte</h1>
        </v-container>
        <v-container>
          <h2 style="padding: 10px">Où et quand ?</h2>
          <h4>Mon stage s'est déroulé du 7 avril 2025 au 27 juin 2025
            au Laboratoire Mécanismes d'Accidents de l'Université Gustave Eiffel.</h4>
          <h4>Adresse :
            <a href="https://www.google.fr/maps/place/Universit%C3%A9+Gustave+Eiffel+-+Laboratoire+M%C3%A9canismes+d'Accidents+-+Campus+M%C3%A9diterran%C3%A9e/@43.6356334,5.1166804,17z/data=!4m15!1m8!3m7!1s0x12c9fee3d3d3ca3f:0xdecdcbd3dfff620b!2s304+Chem.+Croix+Blanche,+13300+Salon-de-Provence!3b1!8m2!3d43.6356334!4d5.1166804!16s%2Fg%2F11c12p8c4g!3m5!1s0x12c9fee14d3fcbfb:0x7c91902166aa2622!8m2!3d43.6356461!4d5.1167421!16s%2Fg%2F1tgl637n?entry=ttu&g_ep=EgoyMDI1MDUyOC4wIKXMDSoASAFQAw%3D%3D"
               style="color: black">
              304 Chemin de la Croix Blanche
              13300 Salon de Provence – France</a>
          </h4>
        </v-container>
        <h3>_</h3>
        <v-container>
          <h2 style="padding: 10px">Missions</h2>
          <v-card-text class="txt" style="padding: 5px">
            Le laboratoire fait des expérimentations sur tout type de véhicule depuis plusieurs années
            en demandant à des volontaires de faire leurs trajets habituels avec un enregistreur de données de la route (EDR).
            Les expérimentations récentes se font sur des vélos et des vélos-cargo où l'on vient accrocher un téléphone
            pour enregistrer différentes données grâce à une application développée par le labo (application différente selon l'expérimentation).
            L'idée était de changer de téléphone car l'ancien modèle était trop vieux.
          </v-card-text>
          <h4> Mon stage a donc était découpé en plusieurs missions :</h4>
          <v-container class="txt" style=" padding-inline: 60px">
            <li><h4>mise à niveau de deux applications
              pour les passer d'un téléphone Samsung S8 à un téléphone Samsung S20;</h4></li>
            <br>
            <li><h4>ajout de nouvelles données dans les deux applications; </h4></li>
            <br>
            <li><h4>modification du protocole de rootage des téléphones.</h4></li>
          </v-container>
        </v-container>
      </v-container>
      <v-container
          class="spaceBtw">
        <v-btn
            @click="goTo('/')"
            dark
        >
          Accueil
        </v-btn>
        <v-btn
            @click="goTo('/1')"
            dark
        >
          Page 1
        </v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>

//import {mapActions} from "vuex";

export default {
  name: 'ContexteView',
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

<style>
</style>