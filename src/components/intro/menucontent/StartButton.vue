<template>
  <div class="comp__startbutton" >
    <a href="/GameBoard"><button class="btn" >Start</button></a>
  </div>
</template>

<style scoped>

.comp__startbutton {
  position: absolute;
  top: 65%;
  right: 10%;
}

.btn {
  display: block;
  width: 180px;
  height: 50px;
  background: rgb(169, 15, 241);
  border: rgb(169, 15, 241);
  border-radius: 1.1em 4em;
  font-size: 1.6em;
  font-weight: bolder;
  color: white;
  box-shadow: 4px 4px 5px rgb(63, 63, 63);
  margin: 0.5em 1em;
  cursor: pointer;
}

a:link, a:visited {
  text-decoration: none;
  color: rgb(169, 15, 241);
}

@media (min-width: 768px) {

  .component {
    top: 70%;
    right: 10%;
  }

  .btn {
    height: 70px;
    width: 240px;
    font-size: 2.5em;
  }
}

</style>
