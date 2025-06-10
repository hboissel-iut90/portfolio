<template>
  <v-container>
    <v-card
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
        <v-card-text class="dirCol ">
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
            Il y a évidemment d’autres étapes qui ne sont pas présentées ici, les étapes sur la figure 1 ont été écrites au début de mon stage.
          </p>
          <p>
            Afin de démarrer l'application sur le nouveau téléphone, la première étape était de mettre à jour les dépendances et plugins d’android
            en adaptant à la version android du téléphone, c’est-à-dire, changer les librairies à une version plus récente
            tout en faisant attention à ne pas avoir la version la plus récente car le téléphone Samsung S20 étant sorti en 2020,
            il ne supporte pas les dernières versions. Dues aux nouvelles versions des dépendances,
            la deuxième étape était de corriger tous les bugs présents sur l’application.
          </p>
          <p>
            Dues aux nouvelles dépendances, la deuxième étape était de corriger tous les bugs présents sur les applications.
            Comme exemple, sur l’ensemble 1, on peut voir qu’on doit rajouter une variable parent pour chaque composant
            lié au layout (= élément servant de vue à l’application) dans les nouvelles versions d’android.
          </p>
        </v-card-text>

      </v-container>
      <v-container>
        <v-card-text class=" dirCol legImg">
          <img class="img2 borderImg" alt="Image not found" src="@/assets/IMG_20250410_163722.jpg"/>
          <p>Ensemble 2 : Liste des étapes de la mise à niveau</p>
        </v-card-text>
        <v-card-text class="txt">
          <p>
            La figure 1 présente 6 étapes que je devais réaliser pour la mise à niveau.
            Il y a évidemment d’autres étapes qui ne sont pas présentées ici, les étapes sur la figure 1 ont été écrites au début de mon stage.
          </p>
          <v-container class="txt" style=" padding-inline: 60px">
            <li><h4>zefzef</h4></li>
            <br>
            <li><h4>zffze</h4></li>
            <br>
            <li><h4></h4></li>
            <br>
            <li><h4></h4></li>
            <br>
            <li><h4></h4></li>
            <br>
            <li><h4></h4></li>
            <br>
            <li><h4></h4></li>
            <br>
            <li><h4></h4></li>
            <br>
            <li><h4>ege</h4></li>
          </v-container>
          <p>
            Afin de démarrer l'application sur le nouveau téléphone, la première étape était de mettre à jour les dépendances et plugins d’android
            en adaptant à la version android du téléphone, c’est-à-dire, changer les librairies à une version plus récente
            tout en faisant attention à ne pas avoir la version la plus récente car le téléphone Samsung S20 étant sorti en 2020,
            il ne supporte pas les dernières versions. Dues aux nouvelles versions des dépendances,
            la deuxième étape était de corriger tous les bugs présents sur l’application.
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