<template>
  <div
      style="background-color: transparent;">
    <v-container>
      <h1>Projets</h1>
    </v-container>
    <v-container class="dirRow">
      <v-container v-for="proj in projetsLink" :key="proj.id" class="dirRow center">
        <v-btn dark @click="scrollingTo(proj.id)">
          {{ proj.name }}
        </v-btn>
      </v-container>
    </v-container>

    <div class="projectCard">
      <v-container id="stage"
                   class="dirCol projectSlot">
        <h2>Stage du semestre 4 de mon BUT</h2>
        <div class="dirRow">
          <v-card-text class="logos">
            <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
            <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
            <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
            <img class="img" alt="Image not found" src="@/assets/email_pro.png"/>
            <img class="img" alt="Image not found" src="@/assets/email_univ.png"/>
            <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
          </v-card-text>
          <v-card-text class="align">
            <img class="img2" alt="Image not found" src="@/assets/proto_support_s20.png"/>
          </v-card-text>
          <v-card-text class="txt">
              Durée : 12 semaines <br/>
              Lieu : Université Gustave Eiffel, Salon de Provence <br/><br/>
              Sujet : Mise à jour d'une application mobile
          </v-card-text>

        </div>
      </v-container>
    </div>

    <div class="projectCard">
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
        <v-card-text class="align">
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        </v-card-text>
        <v-card-text class="txt">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </v-card-text>
      </v-container>
    </div>

    <div class="projectCard">
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
        <v-card-text class="align">
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        </v-card-text>
        <v-card-text class="txt">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </v-card-text>
      </v-container>
    </div>

    <div class="projectCard">
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
        <v-card-text class="align">
          <img class="img" alt="Image not found" src="@/assets/logo_iut2.png"/>
        </v-card-text>
        <v-card-text class="txt">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </v-card-text>
      </v-container>
    </div>

  </div>
</template>

<script>

export default {
  name: 'ProjetsView',
  data() {
    return {
      projetsLink: [
        {id: 'stage', name: 'Stage'},
        {id: 'saecreepy', name: 'CreepyNight'},
        {id: 'saejeu', name: 'Jeu de plateau'},
        {id: 'saeagricole', name: 'FieldTrack'},
      ],
    };
  },
  methods: {
    goTo(route) {
      if (this.$route.fullPath !== route) {
        this.$router.push(route);
      }
    },
    scrollingTo(id) {
      const element = document.getElementById(id);
      if (element) {
        const offset = 100;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({top: elementPosition, behavior: 'smooth'});
      }
    }
  },
}
</script>

<style scoped>

.projectSlot {
  border: solid black 2px;
  border-radius: 20px;
  background-color: #000044;
}

.projectCard {
  margin-block: 50px;
}

.txt {
  padding: 5px;
  text-align: justify;
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

.logos {
  border-radius: 0px;
  object-fit: contain;
}

/* Écrans très petits (téléphones mobiles < 480px) */
@media (max-width: 480px) {
  .logos {
    max-width: 20%;
  }
}

/* Écrans petits à moyens (tablettes 480px - 768px) */
@media (min-width: 481px) and (max-width: 768px) {
  .logos {
    max-width: 10%;
  }
}

/* Écrans moyens à grands (desktop 769px - 1024px) */
@media (min-width: 769px) and (max-width: 1024px) {
  .logos {
    max-width: 8%;
  }
}

/* Écrans très grands (desktop > 1024px) */
@media (min-width: 1025px) {
  .logos {
    max-width: 8%;
  }
}
</style>