<template>
  <v-container>
    <div style="margin-block: 50px">
      <v-container>
        <h1>Compétences</h1>
      </v-container>
      <v-card class="slot">
        <v-container>
          <h2>Hard Skills</h2>
          <h3>Langages de programmation</h3>
          <div class="dirRow">
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/java.png" alt="Image not found"/>
              <p class="txtSkill">Java</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/python.png" alt="Image not found"/>
              <p class="txtSkill">Python</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/c++.png" alt="Image not found"/>
              <p class="txtSkill">C++</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/c.png" alt="Image not found"/>
              <p class="txtSkill">C</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/luau.png" alt="Image not found"/>
              <p class="txtSkill">Luau</p>
            </v-card-text>
          </div>
          <div class="dirRow">
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/php.png" alt="Image not found"/>
              <div class="txtSkill">PHP</div>
              <p>En cours ...</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/html.png" alt="Image not found"/>
              <p class="txtSkill">HTML 5</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/css.png" alt="Image not found"/>
              <p class="txtSkill">CSS</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/js.png" alt="Image not found"/>
              <p class="txtSkill">JavaScript</p>
            </v-card-text>
          </div>
          <h3>Templates</h3>
          <div class="dirRow">
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/logo.png" alt="Image not found"/>
              <p class="txtSkill">VueJS</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/ionic.png" alt="Image not found"/>
              <p class="txtSkill">Ionic</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/email_univ.png" alt="Image not found"/>
              <p class="txtSkill">Quasar</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/email_univ.png" alt="Image not found"/>
              <div class="txtSkill">Laravel</div>
              <p>En cours ...</p>
            </v-card-text>
          </div>
          <h3>Outils</h3>
          <div class="dirRow">
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/email_univ.png" alt="Image not found"/>
              <p class="txtSkill">JetBrains</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/github_white.png" alt="Image not found"/>
              <p class="txtSkill">Github</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/email_univ.png" alt="Image not found"/>
              <p class="txtSkill">Gitlab</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/email_univ.png" alt="Image not found"/>
              <p class="txtSkill">Docker</p>
            </v-card-text>
          </div>
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

.slot {
  border: solid black 2px;
  border-radius: 20px;
  background-color: transparent;
  color: white;
}

.txtSkill {
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