<template>
  <div class="comp__winmessage" v-if="this.pairsLeft === 0">
    <div class="winmessage" >
      <span>Well Done!!</span><br/><br/>
      <span>You found all the pairs in {{ this.timer }} seconds! <br/>You needed {{ this.tryCount }} tries.</span>
    </div>
    <a class="playagain" v-on:click.stop.prevent="reset" href>Press here to play again</a>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import HighScores from '../intro/menucontent/HighScores'

export default {
  data() {
    return {
      status: true
    }
  },
  computed: {
    ...mapGetters(['pairsLeft', 'timer', 'tryCount'])
  },
  methods: {
    ...mapActions(['reset']),
    // mounted() {
    //   this.$root.$on('testing1', () => {
    //     console.log("mounting testing1")
    //   })
    // }
  },
}
</script>

<style scoped>

.comp__winmessage {
  margin: 0 auto;
  grid-row: 7/20;
  grid-column: 2/20;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  width: 80%;
  height: 70%;
  border-radius: 15px;
  border: 6px solid rgb(169, 15, 241);
  background-color: rgb(0, 195, 255);
  z-index: 1;
}

.winmessage {
  color: rgb(214, 255, 0);
  font-size: 1.2em;
  font-weight: 200;
  padding: 0.5em;
}

.playagain {
  color: rgb(214, 255, 0);
  text-decoration: none;
  font-size: 1.8em;
  font-weight: 600;
  padding: 0.5em;
}

@media (min-width: 768px) {
  .winmessage {
    font-size: 1.5em;
  }

  .playagain {
    font-size: 2.2em;
  }
}

@media (min-width: 1024px) {
  .winmessage {
    font-size: 2.0em;
  }

  .playagain {
    font-size: 2.9em;
  }
}

</style>