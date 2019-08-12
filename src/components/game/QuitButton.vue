<template>
  <v-layout class="comp__quitbutton">
    <v-dialog v-model="dialog" persistent width="initial">
      <template v-slot:activator="{ on }">
        <v-btn  v-on="on" class="btn--quit">Quit Game</v-btn>
      </template>
      <v-card class="exit__modal">
        <v-card-text class="exit__message">Are you sure you want to quit the game?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <a href="/"><v-btn  class="exit__confirm">Yes</v-btn></a>
          <v-btn  @click="dialog = false" class="exit__confirm">No</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    }
  }
</script>

<style scoped>

.comp__quitbutton {
  grid-row: 18/21;
  grid-column: 17/21;
}

.btn--quit {
  display: block;
  width: 18vw;
  height: 5vw;
  background: rgb(169, 15, 241);
  border: 3px solid rgb(71, 20, 95);
  border-radius: 1.1em 4em;
  font-size: 1.0em;
  font-weight: bolder;
  color: white;
  margin-top: 0.1em;
  cursor: pointer;
  padding: 0;
}

.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {
  /* vuetify related class */
  background: rgb(169, 15, 241);
}

.v-btn:not(.v-btn--depressed):not(.v-btn--flat) {
  /* vuetify related class */
  box-shadow: 4px 4px 5px rgb(63, 63, 63);
}

a {
  text-decoration: none;
}

.exit__modal {
  margin: 0 auto;
  width: 60vw;
  display: flex;
  flex-direction: column;
  background: rgb(245, 245, 245);
  border: 5px solid rgb(71, 20, 95);
  border-radius: 0.8em;
  text-align: center;
  align-items: center;
}

.exit__message {
  padding: 0.5em 1em 0.2em 1em;
  font-size: 1.5em;
  color: rgb(169, 15, 241);
}

.exit__confirm {
  width: 16vw;
  height: 12vh;
  border: 1px solid black;
  background: rgb(169, 15, 241);
  border: 3px solid rgb(71, 20, 95);
  font-size: 1.6em;
  font-weight: 800;
  color: rgb(214, 255, 0);
  margin: 0.5em;
  box-shadow: 1px 1px 2px rgb(25, 25, 26);
  
}

@media (min-width: 768px) {
  .comp__quitbutton {
    grid-row: 18/21;
    grid-column: 16/21;
  }

  .btn--quit {
    width: 20vw;
    height: 5vh;
    font-size: 1.6em;
    margin-top: 0.7em;
    min-height: 40px;
  }

  .exit__modal {
    width: 50vw;
  }

  .exit__message {
    font-size: 2.2em;
  }

  .exit__confirm {
    width: 15vw;
    height: 6vw;
    margin: 0.5em;
    font-size: 2.2em;
  }
}

@media (min-width: 1024px) {
  .comp__quitbutton {
    grid-row: 19/21;
    grid-column: 16/21;
  }

  .btn--quit {
    width: 21vw;
    height: 7vh;
    font-size: 2.0em;
    margin-top: 2vh;
    padding: 0;
  }

  .exit__confirm {
    height: 5vw;
  }
}

</style>
