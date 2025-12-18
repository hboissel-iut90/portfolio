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
            <v-card-text class="align dirCol">
              <v-img class="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg" alt="Android"/>
              <p class="txtSkill">Android</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg" alt="Kotlin"/>
              <p class="txtSkill">Kotlin</p>
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
              <v-img class="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/quasar/quasar-original.svg" alt="Quasar"/>
              <p class="txtSkill">Quasar</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" alt="Laravel"/>
              <div class="txtSkill">Laravel</div>
              <p>En cours ...</p>
            </v-card-text>
          </div>
          <h3>Outils</h3>
          <div class="dirRow">
            <v-card-text class="align dirCol">
              <v-img class="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetbrains/jetbrains-original.svg" alt="JetBrains"/>
              <p class="txtSkill">JetBrains</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="@/assets/github_white.png" alt="Image not found"/>
              <p class="txtSkill">Github</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/gitlab/gitlab-original.svg" alt="Gitlab"/>
              <p class="txtSkill">Gitlab</p>
            </v-card-text>
            <v-card-text class="align dirCol">
              <v-img class="logos" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" alt="Docker"/>
              <p class="txtSkill">Docker</p>
            </v-card-text>
          </div>

          <h2>Soft Skills</h2>
          <div class="dirRow">
            <v-card-text class="align dirCol">
              <h3>Travail d'équipe</h3>
            </v-card-text>
            <v-card-text class="align dirCol">
              <h3>Autonome</h3>
            </v-card-text>
            <v-card-text class="align dirCol">
              <h3>Persévérant</h3>
            </v-card-text>
            <v-card-text class="align dirCol">
              <h3>Sociable</h3>
            </v-card-text>
            <v-card-text class="align dirCol">
              <h3>Curieux</h3>
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

.logos {
  max-width: 60px;
  max-height: 60px;
  object-fit: contain;
}

.logos-icon {
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>