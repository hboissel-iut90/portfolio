<template>
  <div
      style="background-color: transparent;">
    <v-container>
      <h1>Mes projets</h1>
    </v-container>

    <div style="margin-block: 20px">
      <v-container id="stage"
          class="spaceBtw projectSlot">
        <v-card-text class="logos">
          <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
          <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
          <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
          <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        </v-card-text>
        <v-card-text class="dirCol align legImg center">
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        </v-card-text>
        <v-card-text class="txt">
          <p>
            Cette mission intervient à la suite de la passation S8 à S20 et vient compléter les données de capteurs par
            des données météorologiques ou de trafic routier.
            Elle a pour idée de prendre des données à partir d’API (= Interface de Programmation d’Application) à partir
            de requêtes en HTTP (= Protocole de Transfert HyperTexte)
            pour les transformer en données exploitables et les ajouter dans le fichier.
          </p>
        </v-card-text>
      </v-container>
    </div>

    <div style="margin-block: 20px">
      <v-container id="saecreepy"
          class="spaceBtw projectSlot">
        <v-card-text class="logos">
          <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
          <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
          <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
          <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        </v-card-text>
        <v-card-text class="dirCol align legImg center">
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        </v-card-text>
        <v-card-text class="txt">
          <p>
            Cette mission intervient à la suite de la passation S8 à S20 et vient compléter les données de capteurs par
            des données météorologiques ou de trafic routier.
            Elle a pour idée de prendre des données à partir d’API (= Interface de Programmation d’Application) à partir
            de requêtes en HTTP (= Protocole de Transfert HyperTexte)
            pour les transformer en données exploitables et les ajouter dans le fichier.
          </p>
        </v-card-text>
      </v-container>
    </div>

    <div style="margin-block: 20px">
      <v-container id="saejeu"
          class="spaceBtw projectSlot">
        <v-card-text class="logos">
          <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
          <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
          <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
          <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        </v-card-text>
        <v-card-text class="dirCol align legImg center">
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        </v-card-text>
        <v-card-text class="txt">
          <p>
            Cette mission intervient à la suite de la passation S8 à S20 et vient compléter les données de capteurs par
            des données météorologiques ou de trafic routier.
            Elle a pour idée de prendre des données à partir d’API (= Interface de Programmation d’Application) à partir
            de requêtes en HTTP (= Protocole de Transfert HyperTexte)
            pour les transformer en données exploitables et les ajouter dans le fichier.
          </p>
        </v-card-text>
      </v-container>
    </div>

    <div style="margin-block: 20px">
      <v-container id="saeagricole"
          class="spaceBtw projectSlot">
        <v-card-text class="logos">
          <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
          <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
          <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
          <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        </v-card-text>
        <v-card-text class="dirCol align legImg center">
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        </v-card-text>
        <v-card-text class="txt">
          <p>
            Cette mission intervient à la suite de la passation S8 à S20 et vient compléter les données de capteurs par
            des données météorologiques ou de trafic routier.
            Elle a pour idée de prendre des données à partir d’API (= Interface de Programmation d’Application) à partir
            de requêtes en HTTP (= Protocole de Transfert HyperTexte)
            pour les transformer en données exploitables et les ajouter dans le fichier.
          </p>
        </v-card-text>
      </v-container>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ProjetsView',
  methods: {
    goTo(route) {
      if (this.$route.fullPath !== route) {
        this.$router.push(route);
      }
    }
  },
}
</script>

<style scoped>

.projectSlot {
  border: solid black 2px;
  border-radius: 20px;
  background-color: darkblue;
}

.txt {
  padding: 5px;
  text-align: center;
  font-weight: bold;
  font-size: medium;
  color: white;
}

.containHover:hover * {
  color: lightseagreen;
  border: lightseagreen 2px solid;
}

::v-deep(.txt textarea) {
  color: white !important;
}

.align {
  align-items: center;
}

.legImg {
  align-items: center;
  font-weight: bold;
}
</style>