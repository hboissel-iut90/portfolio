<template>
  <v-container>
    <v-card
        style="border: black solid 2px"
        color="rgba(245,245,245)"
    >
      <v-container>
        <h1>Mise à niveau S8 à S20</h1>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            Cette mission consistait à reprendre deux applications similaires, du nom d’ÉlectroMob et VitaVélo,
            développées par le laboratoire, pour les rendre compatibles avec un téléphone Samsung S20 et de les ergonomiser.
            Les applications permettent d’enregistrer différents types de données par ces capteurs intégrés et une vidéo qui montrent le trajet du participant.
            De ce fait, je devais aussi vérifier l’intégrité des données enregistrées.
          </p>
          <p>
            Ces applications sont codées en langage de programmation Java/Kotlin avec l'environnement de développement (IDE) Android Studio.
          </p>
        </v-card-text>
      </v-container>
      <v-container
          class="spaceBtw">
        <v-card-text class=" dirCol legImg">
          <img class="img2 borderImg" alt="Image not found" src="@/assets/IMG_20250410_163722.jpg"/>
          <p>Figure 1 : Liste des étapes de la mise à niveau</p>
        </v-card-text>
        <v-card-text class="dirCol">
          <img class="img1 borderImg" alt="Image not found" src="@/assets/code_layout_avant.png"/>
          <i>Ancienne version</i>
          <img class="img1 borderImg" alt="Image not found" src="@/assets/code_layout_apres.png"/>
          <i>Nouvelle version</i>
          <p class="legImg">Ensemble 1 : Comparaison avec et sans binding dans deux versions du code de ElectroMob </p>
        </v-card-text>
      </v-container>
      <v-container
          class="spaceBtw">
        <v-card-text class="txt">
          <p>
            La figure 1 présente 6 étapes que je devais réaliser pour la mise à niveau.
            Les étapes sur la figure 1 ont été écrites au début de mon stage, il y a évidemment d’autres étapes.
          </p>
          <p>
            Afin de démarrer les applications sur le nouveau téléphone,
            cela nécessitait de réaliser la première et la deuxième étape.
            Pour cette première étape, il fallait mettre à jour les dépendances
            (aussi appelés librairies dans d’autres langages de programmation) et les plugins d’android
            tout en faisant attention à ce que toutes les dépendances soient compatibles à une version android,
            l’explication étant que chaque version d’une dépendance ne supporte que certaines versions d’android.
          </p>
          <p>
            Dues aux nouvelles dépendances, la deuxième étape était de corriger toutes les erreurs de compilation présentes
            sur les applications. Comme exemple, sur l’ensemble 1, on peut voir qu’on doit rajouter une variable parent
            pour chaque composant lié au layout (= élément servant de vue à l’application) dans les nouvelles versions d’android.
          </p>
        </v-card-text>

      </v-container>
      <v-container
          class="spaceBtw align">
        <v-card-text class="dirCol">
          <img class="img3 borderImg" alt="Image not found" src="@/assets/code_accelero_S8.png"/>
          <img class="img3 borderImg" alt="Image not found" src="@/assets/code_accelero_S20.png"/>
          <p class="legImg">Ensemble 2 : Comparaison de deux versions du code de ElectroMob entre S8 et S20</p>
        </v-card-text>
        <v-card-text class="dirCol">
          <img class="img0 borderImg" alt="Image not found" src="@/assets/comparaison_graph_accelero.png"/>
          <p class="legImg">Figure 2 : Comparaison de graphiques des axes d'accélération entre S8 et S20</p>
        </v-card-text>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            La troisième étape était la complexe et la plus importante, le but étant de définir si les capteurs enregistraient
            les bonnes données et si ces données étaient cohérentes avec celles enregistrées par le téléphone Samsung S8
            (qu’on nommera par la suite S8). En somme, cela demande des compétences d’analyse et de traitement de données.
            Les données enregistrées peuvent différer selon le modèle du téléphone et de la version d’android.
          </p>
          <p>Les données analysées et leurs capteurs : </p>
          <v-container class="txt" style="padding-inline: 60px">
            <li><h4>l’horodatage avec l’horloge interne du téléphone;</h4></li>
            <br>
            <li><h4>les axes d’accélération avec l’accéléromètre;</h4></li>
            <br>
            <li><h4>les vitesses de rotations avec le gyroscope;</h4></li>
            <br>
            <li><h4>la latitude avec la localisation GPS;</h4></li>
            <br>
            <li><h4>la longitude avec la localisation GPS;</h4></li>
            <br>
            <li><h4>l’altittude avec la localisation GPS;</h4></li>
            <br>
            <li><h4>la boussole avec la localisation GPS;</h4></li>
            <br>
            <li><h4>la vitesse GPS avec la localisation GPS;</h4></li>
            <br>
            <li><h4>les axes d’orientation, calculés avec les capteurs de gravité et champ magnétique de la Terre;</h4></li>
            <br>
            <li><h4>les axes de gravité avec le gravitomètre;</h4></li>
            <br>
          </v-container>
          <p>
            Dans l’ordre, les premières données que j’ai vérifié sont les axes d’accélération.
            En tout premier plan, ses données paraissaient cohérentes entre le S8 et le S20 (j’y reviendrai dessus plus tard).
          </p>
          <p>
            Puis les données suivantes sont les vitesses de rotation qui coïncident avec les données du S8.
          </p>
          <p>
            Ensuite, les cinq prochaines données dépendent du capteur GPS,
            capteur qui dépend de la qualité du réseau mais le réseau au laboratoire étant trop mauvaise,
            des tests sur ces données se sont faits plus tard.
          </p>
          <p>
            Il ne reste alors que les axes d’orientation et les axes de gravité.
            Les axes de gravité dépendants du capteur des axes d’accélération, cela me donne les mêmes résultats mais en nombre de g (l'unité).
            Je me suis alors concentré sur les axes d’orientation.
          </p>
        </v-card-text>
      </v-container>
      <v-container
          class="spaceBtw align">
        <v-card-text class="dirCol">
          <img class="img1_5 borderImg"  alt="Image not found" src="@/assets/screen_code_orient.png"/>
          <p class="legImg">Figure 3 : Capture d'écran des fonctions nécessaires aux axes d'orientation </p>
        </v-card-text>
        <v-card-text class="dirCol">
          <img class="img2 borderImg" alt="Image not found" src="@/assets/orientation_axis.png"/>
          <p class="legImg">
            Figure 4 : Illustration des axes d'orientation d'un téléphone
            <br>
          <a href="https://www.mathworks.com/help/simulink/supportpkg/android_ref/orientation.html" class="txt" style="color: black; font-size: small">
            (Tiré du site mathworks.com)
          </a>
          </p>
        </v-card-text>
      </v-container>
      <v-container class="txt">
        <v-card-text class="txt">
          <p>
            La compréhension de ce que représentent ces axes était la difficulté de cette tâche.
            Il faut savoir que ces données représentent les degrés de rotation par rapport aux axes sur lesquels tourne le téléphone.
            Pour mieux comprendre, on peut reprendre le vocabulaire de l’aviation,
            on parle de lacet pour tourner horizontalement vers la droite ou la gauche, tangage pour monter ou plonger le nez,
            et roulis pour tourner en tonneau sur la droite ou la gauche.
          </p>
          <p>
            Pour un téléphone, on peut apercevoir sur la figure 4 que le téléphone est en position couché, écran vers le plafond,
            que le lacet se nomme azimuth, le tangage : pitch, et le roulis : roll. Pour capturer les données dans l’application comme le montre la figure 3,
            on utilise une fonction qui prend en compte le capteur de gravité et le capteur de champ magnétique terrestre pour en faire une matrice de rotation
            et avoir nos axes d’orientation.
          </p>
        </v-card-text>
      </v-container>
      <v-container
          class="spaceBtw">
        <v-card-text class="txt">
          <p>
            Pour comprendre et arriver à un résultat concluant, il a fallu environ treize tests physiques où le téléphone enregistre chaque axe pour chaque test.
          </p>
          <p>
            Pour avoir les bonnes données d’orientation, la figure 5 démontre que les axes Y et Z de gravité ont dû être inversés
            pour la fonction de matrice. En effet, en faisant mes tests je me suis rendu compte que le tangage et le roulis étaient inversés,
            le problème étant que le roulis et le tangage n’ont pas les mêmes unités donc je ne pouvais pas seulement inverser les deux axes d’orientation.
          </p>
        </v-card-text>
        <v-container class="spaceBtw">
          <v-card-text>
            <img class="img2 borderImg" alt="Image not found" src="@/assets/axes_orient_tab.png"/>
            <p class="legImg">Figure 5 : Photo rognée du changement des axes d'orientation</p>
          </v-card-text>
        </v-container>
      </v-container>
      <v-container
          class="spaceBtw">
        <v-btn
            @click="goTo('/contexte')"
            dark
        >
          Contexte
        </v-btn>
        <v-card-text>1</v-card-text>
        <v-btn
            @click="goTo('/2')"
            dark
        >
          Page 2
        </v-btn>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>

import {mapActions} from "vuex";

export default {
  name: 'Page1View',
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

<style>
</style>