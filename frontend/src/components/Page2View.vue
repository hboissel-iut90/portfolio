<template>
  <v-container style="font-size: large;">
    <v-card
        style="border: black solid 2px"
        color="rgba(245,245,245)"
    >
      <v-container>
        <h1>Ajout de nouvelles données</h1>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            Cette mission intervient à la suite de la passation S8 à S20 et vient compléter les données de capteurs par des données météorologiques ou de trafic routier.
            Elle a pour idée de prendre des données à partir d’API (= Interface de Programmation d’Application) à partir de requêtes en HTTP (= Protocole de Transfert HyperTexte)
            pour les transformer en données exploitables et les ajouter dans le fichier.
          </p>
        </v-card-text>
      </v-container>
      <v-container>
        <h2>Recherche d’API</h2>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            La première étape de cette mission était de trouver des API capables de nous fournir des données pertinentes pour le laboratoire, en temps réel,
            de préférence gratuitement, et de préférence sans passer par la création d’un compte. J’ai alors débuté les recherches par l’API météo.
          </p>
        </v-card-text>
      </v-container>
      <v-container>
        <v-container
            class="spaceBtw">
          <v-card-text class="dirCol align">
            <img class="img borderImg" alt="Image not found" src="@/assets/code_layout_avant.png"/>
            <i>Ancienne version</i>
            <img class="img borderImg" alt="Image not found" src="@/assets/code_layout_apres.png"/>
            <i>Nouvelle version</i>
          </v-card-text>
          <v-card-text class="dirCol align">
            <img class="img borderImg" alt="Image not found" src="@/assets/code_layout_avant.png"/>
            <i>Ancienne version</i>
            <img class="img borderImg" alt="Image not found" src="@/assets/code_layout_apres.png"/>
            <i>Nouvelle version</i>
          </v-card-text>
        </v-container>
          <p style="font-size: smaller" class="legImg">Ensemble 1 : API météo trouvées lors de mes recherches + API conseillée par mon tuteur </p>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            La première étape de cette mission était de trouver des API capables de nous fournir des données pertinentes pour le laboratoire, en temps réel,
            de préférence gratuitement, et de préférence sans passer par la création d’un compte. J’ai alors débuté les recherches par l’API météo.
          </p>
          <v-container class="txt" style="padding-inline: 60px">
            <ul>
              <li><h4>OpenMétéo, API gratuite sans compte et qui permet de faire cinq-cents requêtes par minutes et dix-mille par jour possédant un grand nombre de données en temps réel;</h4></li>
              <br>
              <li><h4>MétéoStat, API conseillée par mon tuteur, pouvant fournir un grand nombre de données gratuitement.</h4></li>
              <br>
            </ul>
          </v-container>
          <p>
            J’ai fait le choix de prendre OpenMétéo qui répondait à tous les critères, sachant que MétéoStat ne fournit que des tableurs et donc aucune donnée en temps réel.
          </p>
        </v-card-text>
        <v-card-text class="txt">
          <p>
            Une fois la base de donnée météo trouvée, il fallait s’attaquer à l’API de trafic routier.
          </p>
        </v-card-text>
        <v-card-text class=" dirCol align legImg">
          <img class="img borderImg" alt="Image not found" src="@/assets/IMG_20250410_163722.jpg"/>
          <p>Figure 1 : Benchmark des API de trafic routier</p>
        </v-card-text>
      </v-container>
      <v-container>
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

//import {mapActions} from "vuex";

export default {
  name: 'Page2View',
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