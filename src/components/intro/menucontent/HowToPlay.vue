<template>
  <div class="comp__howtoplay">
    <span><WindowContainer :title="name" :rules="rules" /></span>
  </div>
</template>

<script>

import WindowContainer from './WindowContainer'
import imageData from '../../../api/imagedata'

// gets length of the data object with the images in it
let pairsLeft = Object.keys(imageData().images).length / 2

const rulesText = `
  • Press Play
  • Flip any two cards
  • If the cards match, they'll disappear from the screen
  • Try to find all the pairs as fast as possible 
  • The game ends when all ${pairsLeft} pairs have been found
  • The timer starts once a card has been flipped  `

export default {
  data: function() {
    return {
      name: 'How To Play',
      rules: rulesText
    };
  },
  components: { WindowContainer }
}
</script>

<style scoped>

.comp__howtoplay {
  height: 100vh;
}

</style>