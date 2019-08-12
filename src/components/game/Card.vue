<template>
    <div class="comp__card" v-on:click="turn(card.id)" :class="[card.found ? 'card--hidden' : 'card--show']">
      <img v-if="card.returned" :src="card.src" />
      <img v-else src="../../assets/card-images-back/cardback.png"/>
    </div>
</template>

<script>
export default {
  props: {
    card: Object,
    turn: Function
  }
}
</script>

<style scoped>

.comp__card {
  width: 9vw;
  height: 9vw;
  flex: 0 0 10%;
  position: relative;
}

img {
  width: 8vw;
  height: auto;
  margin: 0.2em;
  border: 2px solid rgb(0, 195, 255);
  border-radius: 0.3em;
  box-shadow: 1px 1px 2px rgb(25, 25, 26);
}

.card--show {
  opacity: 1;
}

.card--hidden {
  visibility: hidden;
}

@media (min-width: 768px) {
  .comp__card {
    width: 8.8vw;
    height: 8.8vw;
  }

  img {
    width: 7.8vw;
    margin: 0.3em;
    border: 3px solid rgb(0, 195, 255);
    border-radius: 0.5em;
    box-shadow: 2px 2px 3px rgb(25, 25, 26);
  }
}

@media (min-width: 1024px) {
  .comp__card {
    width: 11vw;
    height: 11vw;
    flex: 0 0 12%;
  }

  img {
    width: 10vw;
    margin: 0.5em;
  }
}

</style>

