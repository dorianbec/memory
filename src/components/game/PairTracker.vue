<template>
  <div class="comp__pairtracker">
    <p>PAIRS LEFT: </p>&nbsp;
    <p class="pairsLeft"> {{ pairsLeft }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['pairsLeft'])
  }
}

</script>

<style scoped>

.comp__pairtracker {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.0em;
  font-weight: 800;
  grid-row: 1/3;
  grid-column: 8/17;
  padding-top: 0.6em;
}

.pairsLeft {
  color: rgb(169, 15, 241);
  text-shadow: 2px 2px 1px rgb(25, 25, 26);
  font-size: 1.7rem;
  padding: 0.5rem;
}

@media (min-width: 768px) {
  .comp__pairtracker {
    font-size: 1.8em;
  }

  .pairsLeft {
    font-size: 2.5rem;
  }
}

</style>