<template>
  <div class="comp__highscores">
      <WindowContainer :title="name"  />
      <div class="highscores">  
        <ul class="green">
          <li v-for="highscore in highscores" :key="highscore.index">
            {{ highscore.time }} {{ highscore.tries }} {{ highscore.date }}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>

import WindowContainer from './WindowContainer'
import { mapGetters } from 'vuex'

export default {
  data: function() {
    return {
      name: 'Highscores',
      highscores: []
    };
  },  
  components: { 
    WindowContainer 
  },
  computed: {
    ...mapGetters(['timer', 'tryCount'])
  },
  // methods: {
  //   addScore: function() {
  //     this.$root.$emit("testing1")

  //     // let current_datetime = new Date()
  //     // let formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
  //     // console.log(formatted_date)

  //     var today = new Date()
  //     this.highscores.push({ time: this.timer, tries: this.tryCount, date: today })
  //     console.log(this.timer)
  //     console.log(this.tryCount)
  //   },
  // },
  // mounted() {
  //   console.log("mounted")
  //   if (localStorage.getItem("highscores")) {
  //     this.highscores = JSON.parse(localStorage.getItem("highscores"))
  //   }
  //   console.log("localstorage :", localStorage)
  // },
  // watch: {
  //   highscores: {
  //     handler() {
  //       console.log("changed")
  //       localStorage.setItem("highscores", JSON.stringify(this.highscores))
  //     }
  //   }
  // },
  // // updated: function() {
  // //   this.addScore()
  // // }
}

</script>

<style scoped>

.comp__highscores {
  height: 100vh;
}

.highscores {
  width: 500px;
  height: 200px;
  background: rgb(102, 61, 61);
  z-index: 1;
  top: -300px;
  margin: 0 auto;
  position: relative;
}

ul {
  background: green;
  color: white;
  font-size: 1.5em;
}

</style>