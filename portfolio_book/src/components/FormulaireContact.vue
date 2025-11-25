<template>
    <v-card
        color="black"
        class="dirCol"
    >
      <v-card-text style="padding-block: 25px; color: white">
        <h1>Pour me contacter : </h1>
      </v-card-text>

      <v-container
      class="dirRow">
        <v-card-text
        class="dirCol"
        style="padding-block: 50px;">
          <v-card-text
              class="dirCol containHover">
            <label style="padding-right: 20px" class="txt" for="nom">Nom :</label>
            <input class="txt" type="text" id="nom" v-model="form"/>
          </v-card-text>
          <v-card-text
              class="dirCol containHover">
            <label class="txt" for="prenom">Prénom :</label>
            <input class="txt" type="text" id="prenom" v-model="form"/>
          </v-card-text>
          <v-card-text
              class="dirCol containHover">
            <label class="txt" for="mail">Email :</label>
            <input class="txt" type="email" id="mail" v-model="form"/>
          </v-card-text>
          <v-card-text
              class="dirCol containHover">
            <label class="txt" for="message">Message :</label>
            <v-textarea color="white" class="txt" variant="outlined" v-model="form" auto-grow counter="1000"></v-textarea>
          </v-card-text>
        </v-card-text>

        <v-card-text
            class="dirCol align"
            style="margin-top: 100px">
          <a style="text-decoration: none; color: black" href="https://github.com/hboissel-iut90">
            <v-container>
              <img class="logos2" alt="Image not found" src="@/assets/github.png">
              <p class="txtLink">Github</p>
            </v-container>
          </a>
          <a style="text-decoration: none; color: black" href="mailto:harry.boisselot@edu.univ-fcomte.fr">
            <v-container>
              <img class="logos2" alt="Image not found" src="@/assets/email_univ.png">
              <p class="txtLink">Email universitaire</p>
            </v-container>
          </a>
          <a style="text-decoration: none; color: black" href="mailto:harry.boisselot@gmail.com">
            <v-container>
              <img class="logos2" alt="Image not found" src="@/assets/email_pro.png">
              <p class="txtLink">Email professionnelle</p>
            </v-container>
          </a>
        </v-card-text>

      </v-container>

    </v-card>
</template>

<script>
// import {mapActions} from "vuex";

export default {
  name: 'FormulaireContact',
  data() {
    return {
      form: ""
    }
  },
  methods: {
    // ...mapActions(['keepPage']),
    goTo(route) {
      if (this.$route.fullPath !== route) {
        this.$router.push(route);
      }
    }
  },
}
</script>

<style scoped>
.spaceBtw {
  display: flex;
  justify-content: space-between;
}

.spaceEvl {
  display: flex;
  justify-content: space-evenly;
}

.center {
  display: flex;
  justify-content: center;
}

.glued {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.dirCol {
  display: flex;
  flex-direction: column;
}

.dirRow {
  display: flex;
  flex-direction: row;
}

.txt {
  padding: 5px;
  text-align: center;
  font-weight: bold;
  font-size: large;
  font-family: "DejaVu Sans Mono", monospace;
  color : white;
  border: solid whitesmoke 2px;
}

.containHover:hover * {
  color: lightseagreen;
  border: lightseagreen 2px solid;
}

::v-deep(.txt textarea) {
  color: white !important;
}

.txtLink {
  text-align: justify;
  font-weight: bold;
  font-size: large;
  color: white;
}

.borderImg {
  border: solid darkslategray 2px;
  border-radius: 20px;
}

.align {
  align-items: center;
}

.img {
  max-width: 90%;
}

.img2 {
  max-width: 50%;
}

.logos2 {
  max-width: 100px;
  max-height: 30px;
  border: solid darkslategray 0px;
  border-radius: 0px;
}

.legImg {
  align-items: center;
  font-weight: bold;
}
</style>