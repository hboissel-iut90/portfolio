<template>
  <v-container style="font-size: large;">
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
            développées par le laboratoire, pour les rendre compatibles avec un téléphone Samsung S20 (qu’on nommera par la suite S20)
            et de les ergonomiser.  Les applications permettent d’enregistrer différents types de données par ces capteurs intégrés
            et une vidéo qui montrent le trajet du participant. De ce fait, je devais aussi vérifier l’intégrité des données enregistrées.
            La dernière étape étant de tester l’application en conditions réelles.
          </p>
          <p>
            Ces applications sont codées en langage de programmation Java/Kotlin avec l'environnement de développement (IDE) Android Studio.
          </p>
        </v-card-text>
      </v-container>
      <v-container>
        <h3>Démarrage de l'application sur S20</h3>
      </v-container>
      <v-container
          class="spaceBtw">
        <v-card-text class=" dirCol align legImg">
          <img class="img borderImg" alt="Image not found" src="@/assets/IMG_20250410_163722.jpg"/>
          <p>Figure 1 : Liste des étapes de la mise à niveau</p>
        </v-card-text>
        <v-card-text class="dirCol align">
          <img class="img borderImg" alt="Image not found" src="@/assets/code_layout_avant.png"/>
          <i>Ancienne version</i>
          <img class="img borderImg" alt="Image not found" src="@/assets/code_layout_apres.png"/>
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
      <v-container style="margin-top: 30px">
        <h3>Intégrité des données</h3>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            La troisième étape était la complexe et la plus importante, le but étant de définir si les capteurs enregistraient les bonnes données
            et si ces données étaient cohérentes avec celles enregistrées par le téléphone Samsung S8 (qu’on nommera par la suite S8). Ce qu’il faut savoir,
            c’est que l’application fonctionne en position horizontale, caméra frontale à gauche, due aux besoins des expérimentations.
            Il y a donc un besoin de transformer ce qui est capturé pour rester en adéquation avec les données réelles du véhicule. Fort heureusement,
            ces changements ont été fait sur les versions des S8.
            Cependant, les données enregistrées peuvent différer selon le modèle du téléphone et de la version d’android.
            En somme, cela demande des compétences d’analyse et de traitement de données.
          </p>
          <p>Les données analysées et leurs capteurs : </p>
          <v-container class="txt" style="padding-inline: 60px">
            <ul>
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
            </ul>
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
            Les axes de gravité dépendants du capteur des axes d’accélération, cela me donne les mêmes résultats mais en unité de g.
            Je me suis alors concentré sur les axes d’orientation.
          </p>
        </v-card-text>
      </v-container>
      <v-container
          class="spaceBtw align">
        <v-card-text class="dirCol align">
          <img class="img_5 borderImg"  alt="Image not found" src="@/assets/screen_code_orient.png"/>
          <p class="legImg">Figure 2 : Capture d'écran des fonctions nécessaires aux axes d'orientation </p>
        </v-card-text>
        <v-card-text class="dirCol align">
          <img class="img borderImg" alt="Image not found" src="@/assets/orientation_axis.png"/>
          <p class="legImg">
            Figure 3 : Illustration des axes d'orientation d'un téléphone
            <br>
          <a href="https://www.mathworks.com/help/simulink/supportpkg/android_ref/orientation.html" class="txt" style="color: black; font-size: small">
            (Tiré du site mathworks.com)
          </a>
          </p>
        </v-card-text>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            La compréhension de ce que représentent ces axes était la difficulté de cette tâche.
            Il faut savoir que ces données représentent les degrés de rotation par rapport aux axes sur lesquels tourne le téléphone.
            Pour mieux comprendre, on peut reprendre le vocabulaire de l’aviation,
            on parle de lacet pour tourner horizontalement vers la droite ou la gauche, tangage pour monter ou plonger le nez,
            et roulis pour tourner en tonneau sur la droite ou la gauche.
          </p>
          <p>
            Pour un téléphone, on peut apercevoir sur la figure 3 que le téléphone est en position couché,
            écran vers le plafond, que le lacet se nomme azimuth, le tangage : pitch, et le roulis : roll.
            Pour capturer les données dans l’application comme le montre la figure 2, on utilise une fonction qui prend en compte le capteur de gravité
            et le capteur de champ magnétique terrestre pour en faire une matrice de rotation et avoir nos axes d’orientation.
          </p>
        </v-card-text>
      </v-container>
      <v-container
          class="spaceBtw">
        <v-card-text class="txt">
          <p>
            Pour avoir les bonnes données d’orientation, la figure 4 démontre que les axes Y et Z de gravité ont dû être inversés pour la fonction de matrice.
            En effet, en faisant mes tests je me suis rendu compte que le tangage et le roulis étaient inversés,
            le problème étant que le roulis et le tangage n’ont pas les mêmes unités donc je ne pouvais pas seulement inverser les deux axes d’orientation.
          </p>
          <p>
            Pour comprendre et arriver à un résultat concluant, il a fallu environ treize tests physiques où le téléphone enregistre chaque axe pour chaque test.
          </p>
        </v-card-text>
        <v-container class="spaceBtw">
          <v-card-text>
            <img class="img borderImg" alt="Image not found" src="@/assets/axes_orient_tab.png"/>
            <p class="legImg">Figure 4 : Photo rognée du changement des axes d'orientation</p>
          </v-card-text>
        </v-container>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            Pour revenir à ce qui est dit précédemment, les axes d’accélération semblait cohérents.
            Ici, la difficulté était de déterminer les résultats attendus car il y a des normes pour les axes que l’on retrouve quand,
            par exemple, on enregistre un véhicule allant droit devant lui. Or, les axes d’un téléphone ne correspondent pas aux normes.
          </p>
        </v-card-text>
      </v-container>
      <v-container>
        <v-card-text class="dirCol align">
          <img class="img borderImg" alt="Image not found" src="@/assets/comparaison_graph_accelero.png"/>
          <p class="legImg">Figure 5 : Comparaison de graphiques des axes d'accélération entre S8 et S20</p>
        </v-card-text>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            Comme le montre la figure 5, on obtient les mêmes résultats sur S8 que sur S20. Pourtant, quand j’ai présenté les résultats à ma supérieure,
            supérieure qui s’occupe du traitement des données de l’application, elle a affirmé que l’axe X était inversé par rapport à la norme des axes.
          </p>
          <p>
            Cette erreur d’axe d’accélération X était présente dans les anciennes versions des applications.
            Par faute de traitement de données, l’erreur n’a pas été corrigée.
          </p>
        </v-card-text>
      </v-container>
      <v-container>
        <h3>Tests en conditions réelles</h3>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            Pour m’aider dans la finalisation, un collègue faisant du vélo pour ce rendre au laboratoire a accepter de prendre un téléphone du labo pour ses trajets.
            Pour cela, on a utilisé un prototype de support S20 que l’on a accroché sur le guidon de son vélo, voir figure 6 ci-dessous. Puis 1 à 3 fois par semaine,
            je reprenais le téléphone pour vérifier les fichiers et pour modifier l’application si besoin.
          </p>
          <p>
            J’ai aussi fait de mon côté des tests en conditions réelles en prenant un téléphone et en faisant mes trajets.
            Cela permet d’avoir plus de matière pour déceler des erreurs ou des bugs.
          </p>
        </v-card-text>
      </v-container>
      <v-container class="spaceBtw">
        <v-card-text class="dirCol align">
          <img class="img borderImg" alt="Image not found" src="@/assets/proto_support_s20_zoom.png"/>
          <p class="legImg">Figure 6 : Photo du prototype de support de S20 </p>
        </v-card-text>
        <v-card-text class="txt">
          <p>Ces tests m’ont permis de détecter différents problèmes :</p>
          <v-container class="txt" style="padding-inline: 30px">
            <ul>
              <li><h4>le téléphone n’enregistrant plus de données après une minute de veille à cause d’une fonctionnalité système : le «Doze Mode»;</h4></li>
              <br>
              <li><h4>un problème d’envoi des données causé par le réseau mobile qui dysfonctionnait ou par le rootage
                <a style="color: darkblue" @click="goTo('/3')"> (voir page 3) </a>
                      qui était dans une version bloquant l’utilisation du réseau;</h4></li>
              <br>
              <li><h4>un bug d’enregistrements des données dans le fichier produit par une fonctionnalité android obsolète : Sensor.TYPE_ORIENTATION.</h4></li>
              <br>
            </ul>
          </v-container>
          <p>
            Mais ils m’ont aussi permis de vérifier s’il n’y avait pas de la perte de données, comme des fichiers vides ou corrompus.
          </p>
        </v-card-text>
      </v-container>
      <v-container>
        <v-card-text class="txt">
          <p>
            Pour conclure, cette mission m’a appris autant du savoir dans le développement d’applications mobiles avec des nouveaux principes
            comme la gestion des capteurs d’un téléphone, que dans la physique avec le traitement des axes, mais aussi du savoir-faire,
            en remaniant des applications nouvelles pour moi dans une version d’android différente à Android JetPack Compose.
          </p>
        </v-card-text>
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

//import {mapActions} from "vuex";

export default {
  name: 'Page1View',
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