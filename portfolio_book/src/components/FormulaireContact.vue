<template>
  <div
      style="background-color: black"
      class="dirCol"
      id="formContact"
  >
    <v-card-text style="padding-top: 40px; color: white">
      <h1>Pour me contacter : </h1>
    </v-card-text>

    <v-container
        fluid
        style="padding-inline: 100px"
        class="dirRow">
      <v-container
          class="dirCol"
          style="padding-block: 20px; padding-inline: 100px;">

        <div
            class="dirRow">
          <v-card-text
              class="dirCol containHover">
            <label style="padding-right: 20px" class="txt" for="nom">Nom :</label>
            <input class="txt" type="text" id="nom" v-model="nom"/>
          </v-card-text>
          <v-card-text
              class="dirCol containHover">
            <label class="txt" for="prenom">Prénom :</label>
            <input class="txt" type="text" id="prenom" v-model="prenom"/>
          </v-card-text>
        </div>

        <v-card-text
            class="dirCol containHover">
          <label class="txt" for="mail">Email :</label>
          <input class="txt" type="email" id="mail" v-model="email"/>
        </v-card-text>
        <v-card-text
            class="dirCol containHover">
          <label class="txt" for="objet">Objet :</label>
          <input class="txt" type="text" id="mail" v-model="objet"/>
        </v-card-text>
        <v-card-text
            class="dirCol containHover">
          <label class="txt" for="message">Message :</label>
          <v-textarea color="white" class="txt" variant="outlined" v-model="msg" auto-grow counter="1000"></v-textarea>
        </v-card-text>
        <v-card-text
            style="padding-inline: 300px"
            class="dirCol">
          <v-btn color="#111111" class="txt" @click="sendContact()">Envoyer</v-btn>
        </v-card-text>
      </v-container>

      <v-container
          style="margin-top: 25px"
          class="spaceEvl dirCol">
        <v-container
            class="dirCol align">
          <div class="dirRow">
            <a class="link" href="https://github.com/hboissel-iut90">
              <v-container class="txtLinkHover">
                <img class="logos" alt="Image not found" src="@/assets/github_white.png">
                <div class="txtLink">Github</div>
                <div class="txtLink">hboissel-iut90</div>
              </v-container>
            </a>
          </div>
          <div class="dirRow">
            <a class="link" href="mailto:harry.boisselot@edu.univ-fcomte.fr">
              <v-container class="txtLinkHover">
                <img class="logos" alt="Image not found" src="@/assets/email_univ.png">
                <div class="txtLink">Email universitaire</div>
                <div class="txtLink">harry.boisselot@edu.univ-fcomte.fr</div>
              </v-container>
            </a>
            <a class="link" href="mailto:harry.boisselot@gmail.com">
              <v-container class="txtLinkHover">
                <img class="logos" alt="Image not found" src="@/assets/email_pro.png">
                <div class="txtLink">Email professionnelle</div>
                <div class="txtLink">harry.boisselot@gmail.com</div>
              </v-container>
            </a>
          </div>
        </v-container>
        <v-container>
          <h3>Mon CV</h3>
          <div class="txtLink">Cliquer pour télécharger</div>

          <a class="link" href="@/assets/CV_Stage_Harry_BOISSELOT.png" download>
            <v-container>
              <img class="img4" style alt="Image not found" src="@/assets/CV_Stage_Harry_BOISSELOT.png" />
            </v-container>
          </a>
        </v-container>
      </v-container>
    </v-container>

  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: 'FormulaireContact',
  data() {
    return {
      nom: "",
      prenom: "",
      email: "",
      objet: "",
      msg: "",
    }
  },
  methods: {
    ...mapActions(['registerContact']),
    goTo(route) {
      if (this.$route.fullPath !== route) {
        this.$router.push(route);
      }
    },
    sendContact() {
      const data = {
        nom: this.nom,
        prenom: this.prenom,
        email: this.email,
        objet: this.objet,
        msg: this.msg,
      };

      this.registerContact(data);

      this.nom = "";
      this.prenom = "";
      this.email = "";
      this.objet = "";
      this.msg = "";
    }
  },
}
</script>

<style scoped>
.txt {
  padding: 5px;
  text-align: center;
  font-weight: bold;
  font-size: medium;
  font-family: "DejaVu Sans Mono", monospace;
  color: white;
  border: solid whitesmoke 2px;
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

.borderImg {
  border: solid darkslategray 2px;
  border-radius: 20px;
}

.logos {
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