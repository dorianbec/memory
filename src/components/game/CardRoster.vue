<template>
  <div class="comp__cardroster">
    <Card class="card" 
      v-for="(card, index) of images" 
      :key="index" 
      :card="card" 
      :turn="turn"
      />
  </div>
</template>

<script>

import Card from './Card'
import PairTracker from './PairTracker'
import Timer from './Timer'

import imageData from '../../api/imagedata'
import { mapActions, mapGetters } from 'vuex'
import { STATUS } from '../../vuex/store/status'

import endgame from '../../assets/sounds/endgame.mp3'
import failed from '../../assets/sounds/failed.mp3'
import success from '../../assets/sounds/success.wav'

export default {
  data: function() {
    // cards: []
    return imageData()  
  },

  computed: {
    ...mapGetters(['pairsLeft', 'status', 'timer', 'tryCount'])
  },
  
  methods: {
    ...mapActions(['match', 'reset', 'tryCounter', 'updatedStatus']),

    turn(id) {
      if (this.status === STATUS.READY) {
        this.updatedStatus(STATUS.PLAY)
      }

      for (let i in this.images ) {
        let image = this.images[i]
        if (image.id === id && this.isChecked <= 1) {
          this.images[i].returned = !this.images[i].returned
          if (this.images[i].returned ) {
            this.display++
            this.isChecked++
          } else {
            this.display--
            this.isChecked--
          }
          break;
        }
      }
      this.check()
    },

    check() {
      if (this.display == 2) {
        let imageFound = {
          image1: {},
          image2: {},
        }
        let firstFound = false
        let firstImage = imageFound.image1
        let secondImage = imageFound.image2
        
        for (let i in this.images) {
          let image = this.images[i]
          if (image.returned) {
            if (!firstFound) {
              firstImage = {index: i, image}
              firstFound = true
            } else if (firstFound) {
              firstFound = false
              secondImage = {index: i, image}
            }
            this.display = 0
            setTimeout( () => {
              // to prevent from looking at more than 2 cards simultaneously
              this.isChecked = 0;
            }, 1500)
          }
        }

        if (firstImage && secondImage) {
          this.tryCounter()
          if (firstImage.image.name === secondImage.image.name) {
            setTimeout( () => {
              this.images[firstImage.index].found = true
              this.images[secondImage.index].found = true
              this.images[firstImage.index].returned  = false
              this.images[secondImage.index].returned = false
              this.match()
              this.gameEnd()
            }, 1500)
            if (this.pairsLeft > 0) {
              // sound on matched pair
              let pair = new Audio(success)
              pair.play()
            }
            return this.pairsLeft
          } else {
              // sound on failed match
              let fail = new Audio(failed)
              fail.play()
            setTimeout( () => {
              this.images[firstImage.index].returned = false;
              this.images[secondImage.index].returned = false;
            }, 1500)
          }
        }
      }
    },

    shuffleCards(arr) {
      let length = arr.length
      while (length > 0) {
        let i = Math.floor(Math.random() * length)
        length--
        let temp = arr[length]
        arr[length] = arr[i]
        arr[i] = temp
      }
    },

    gameEnd() {
      if (this.pairsLeft === 0) {
        this.updatedStatus(STATUS.STOP)
        this.resetData()
        // sound on end of game
        let end = new Audio(endgame)
        end.play()
      }
    },

    resetData() {
      // resets the Data object once the game is finished. Ideally it only loads once the link in winmessage has been clicked.
      // for the moment there is also the reset action that resets status, timer and pairsleft
      Object.assign(this.$data, this.$options.data.call(this));
    },
  },

  beforeMount() {
    this.shuffleCards(this.images)
  },

  beforeUpdate() {
    this.shuffleCards(this.images)
  },

  components: { 
    Card, 
    PairTracker,
    Timer
  }
}
</script>

<style scoped>

.comp__cardroster {
  grid-row: 3/18;
  grid-column: 1/21;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

@media (min-width: 768px) {
  .comp__cardroster {
    grid-column: 1/21;
    grid-row: 3/19;
  }
}

</style>