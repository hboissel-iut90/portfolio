<template>
    <v-card
        style="border: black solid 2px; background-color: transparent"
    >
      <h1 class="">
        Compétences
      </h1>
      <v-container>
        <v-card-text class="">
          <p></p>
        </v-card-text>
      </v-container>
    </v-card>
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