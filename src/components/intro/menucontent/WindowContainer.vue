<template>
  <div class="comp__windowcontainer">
    <h1> {{ title }} </h1>
    <div class="window__exit">
      <button class="button__close"><router-link to="/">X</router-link></button>
      <router-link to="/"><span class="text__close">BACK TO<br> MENU</span></router-link>
    </div>
    <div class="list__scores">{{ highscores }}</div>
    <div class="list__rules">{{ rules }}</div>
  </div>
</template>

<script>

export default {
  props: ["highscores", "rules", "title"]
}
</script>

<style scoped>

.comp__windowcontainer {
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  grid-template-columns: repeat(12, 1fr);
  width: 80vw;
  height: 60vh;
  background: rgb(214, 255, 0);
  border: 5px solid rgb(169, 15, 241);
  border-radius: 0.8em;
  box-shadow: 5px 5px 5px rgb(63, 63, 63);
  margin: 0 auto;
}

h1 {
  grid-row: 1;
  grid-column: 4/10;
  text-align: center;
  font-size: 1.5em;
  font-weight: bolder;
  color: rgb(169, 15, 241);
}

  a:link, a:visited {
  text-decoration: none;
  color: rgb(169, 15, 241);
}

.window__exit {
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row: 1/3;
  grid-column: 1/3;
}

.button__close {
  border:  none;
  background: none;
  display: block;
  color: rgb(169, 15, 241);
  font-weight: bolder;
  font-size: 1.5em;
}

.text__close {
  display: block;
  font-size: 0.8em;
  text-align: center;
  color: rgb(169, 15, 241);
}

.list__scores, .list__rules {
  grid-row: 2/8;
  grid-column: 2/13;
  font-size: 1.2em;
  margin-top: 0.8em;
}

@media (min-width: 768px) {
  h1 {
    font-size: 2.5em;
  }
  
  .button__close {
    font-size: 2.5em;
  }

  .text__close {
    font-size: 1em;
  }

  .list__scores, .list__rules {
    grid-row: 2/8;
    grid-column: 2/13;
    font-size: 1.2em;
  }
  
  .list__scores {
    font-size: 1.5em;
  }

  .list__rules {
    font-size: 1.8em;
    line-height: 1.3em;
    overflow: scroll;
    word-wrap: normal;
    white-space: pre;
  }
}

</style>
