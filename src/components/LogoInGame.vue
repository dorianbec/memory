<template>
  <div class="comp__logoingame">
    <img class="logo--dark" src="../assets/logo-game-darksubtitle.png">
  </div>
</template>

<style scoped>

.comp__logoingame {
  grid-row: 1/3;
  grid-column: 17/21;
  text-align: right;
  display: block;
}

.logo--dark {
  padding-top: 2vh;
  width: 70%;
  height: auto;
}

@media (min-width: 768px) {
  .logo--dark {
    width: 80%;
  }
}
</style>