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
          <img class="img borderImg" alt="Image not found" src="@/assets/tableau_routier.png"/>
          <p>Figure 1 : Benchmark des API de trafic routier</p>
        </v-card-text>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            Comme présenté sur la figure 1, j’ai pu trouvé six API de trafic routier présentant chacune leurs propres données.
            En les prenant à chacun leur tour : TomTom, fournisseur de données météo et routières,
            avait des conditions d’utilisateur ne permettant d’exploiter une autre API météo que celle leur appartenant,
            ce qui bloque l’utilisation de leurs API; le Cerema, centre national français d’études sur les transports,
            Waze et l’API Google n’ont pas de données exploitables dans le cadre des recherches du laboratoire;
            Bizon futé, autre organisation française sur le trafic routier, offre des données trop complexe à exploiter;
            et pour pouvoir accéder à l’API de Coyote, il faut les contacter sur leur site web.
          </p>
          <p>
            Par rapport aux API météo, il est plus difficile d’accéder à des données de trafic routier gratuitement et en temps réel,
            pour première raison que chaque API demande d’avoir un compte,
            mais surtout la seconde qui provient du fait qu’il est difficile pour les gestionnaires de routes de fournir des données en continu
            car cette tâche peut être chronophage et peut ne pas être leur priorité, mais aussi que toutes les routes de France ne sont pas publiques,
            contrairement aux données météo qui ne sont pas des données appartenant à un tiers.
          </p>
          <p>
            Il n’y a finalement pas eu de décision concernant le choix de l’API.
          </p>
        </v-card-text>
        <v-card-text class="txt">
          En parallèle des recherches, j’ai crée mon code d’envoi de requête pour tester les réponses de certaines API.
        </v-card-text>
      </v-container>
      <v-container>
        <h2>Implémentation des API</h2>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            Le code d’implémentation des données météorologiques et celui des données de trafic routier sont les mêmes à quelques détails près,
            je ne présenterai alors que le code pour l’API météo.
          </p>
          <p>

          </p>
        </v-card-text>
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