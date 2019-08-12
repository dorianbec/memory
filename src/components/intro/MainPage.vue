<template>
  <div class="comp__mainpage">
    <GameMenu/>
  </div>
  
</template>

<script>
import GameMenu from './menucontent/GameMenu'

export default {
  components: { GameMenu }
}

</script>

<style scoped>

.comp__mainpage {
  width: 100%;
  height: auto;
  position: relative;
}

</style>


