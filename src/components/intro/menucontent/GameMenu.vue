<template>
  <div class="comp__gamemenu">
    <button class="btn" v-for="button in buttons" :key="button.index"><a :href="button.path">{{ button.title }}</a></button>
  </div>

</template>

<script>

export default {
  data () {
    return {
      buttons: [
        { 
          title: "Play", 
          path: '/gameboard' 
        }, 
        { 
          title: "How To Play", 
          path: '/howtoplay' 
        }, 
        { 
          title: "Highscores", 
          path: '/highscores' 
        },
        { 
          title: "More Games", 
          path: '/highscores' 
        },
      ]
    }
  }
}

</script>

<style scoped>

.comp__gamemenu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 1em;
}

.btn {
  display: block;
  width: 240px;
  height: 60px;
  margin: 0.5em;
  background: rgb(214, 255, 0);
  border: 7px solid rgb(169, 15, 241);
  border-radius: 1.1em 4em;
  box-shadow: 5px 5px 2px rgb(63, 63, 63);
  font-size: 1.8em;
  color: rgb(169, 15, 241);
  font-weight: bolder;
  cursor: pointer;
}

a:link, a:visited {
  text-decoration: none;
  color: rgb(169, 15, 241);
}

@media (min-width: 768px) {
  .comp__gamemenu {
    width: initial;
    flex-direction: column;
    align-items: center;
    margin-top: 1.5em;
  }

  .btn {
    height: 80px;
    width: 360px;
    font-size: 2.5em;
  }
}

</style>