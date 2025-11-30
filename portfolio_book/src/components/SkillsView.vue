<template>
  <v-container>
    <div style="margin-block: 50px">
      <v-container>
        <h1>Compétences</h1>
      </v-container>
      <v-container>
        <h3>
          Retrouver les langages de programmation, les technologies et les outils que je maîtrise.
        </h3>
      </v-container>
      <v-card
          style="border: black solid 2px; color: white; background-color: transparent"
      >
        <v-container>
          <v-card-text>
            <v-img class="logos" src="@/assets/github_white.png" alt="Image not found"/>
            <p></p>
          </v-card-text>
        </v-container>
      </v-card>
    </div>
  </v-container>
</template>

<script>

//import {mapActions} from "vuex";

export default {
  name: 'SkillsView',
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

.containHover:hover * {
  color: lightseagreen;
  border: lightseagreen 2px solid;
}

::v-deep(.txt textarea) {
  color: white !important;
}

.link {
  text-decoration: none;
  color: black;
}

.txtLink {
  text-align: center;
  font-weight: bold;
  font-size: medium;
  color: white;
}

.txtLinkHover:hover * {
  color: lightseagreen !important;
}

.align {
  align-items: center;
}

.borderImg {
  border: solid darkslategray 2px;
  border-radius: 20px;
}

.img {
  max-width: 90%;
}

.img2 {
  max-width: 50%;
}

.legImg {
  align-items: center;
  font-weight: bold;
}
</style>