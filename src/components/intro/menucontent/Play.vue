<template>
  <div class="comp__play">
      <WindowContainer :title="name" />
      <LevelSelector />
      <StartButton />
  </div>
</template>

<script>

import LevelSelector from './LevelSelector'
import StartButton from './StartButton'
import WindowContainer from './WindowContainer'

export default {

  // this component will be used when implementing a multi-level game
  
  data: function() {
    return {
      name: 'Choose your level'
    };
  },
  components: { LevelSelector, StartButton, WindowContainer }
}
</script>

<style scoped>

.comp__play {
  height: 100vh;
}

</style>