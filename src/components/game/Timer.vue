<template>
  <div class="comp__timer">
    <p class="timer">{{ this.timer }}</p>
    &nbsp;&nbsp;
    <p> seconds</p>
    &nbsp;&nbsp; 
    &nbsp;&nbsp;
    <p class="trycounter">{{ this.tryCount }}</p>
    &nbsp;&nbsp;
    <p> tries</p>
  </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import { STATUS } from '../../vuex/store/status'

export default {
  data() {
    return STATUS
  },
  computed: {
    ...mapGetters(['status', 'timer', 'tryCount'])
  },
  methods: {
    ...mapActions(['reset', 'tryCounter'])
  }
}

</script>

<style scoped>

.comp__timer {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1/3;
  grid-column: 1/8;
  padding-top: 0.8em;
}

.timer, .trycounter {
  color: rgb(169, 15, 241);
  text-shadow: 2px 2px 1px rgb(25, 25, 26);
  font-size: 1.7rem;
  padding: 0.5rem;
}

@media (min-width: 768px) {
  .comp__timer {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-row: 1/3;
    grid-column: 1/8;
  }

  .timer, .trycounter {
    color: rgb(169, 15, 241);
    text-shadow: 2px 2px 1px rgb(25, 25, 26);
    font-size: 2.5rem;
    padding: 0.5rem;
  }
}

</style>