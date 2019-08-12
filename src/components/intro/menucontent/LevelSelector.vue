<template>
  <div class="comp__levelselector">
    <div class="container" v-for="{level, cards} in levels" :key="level">
      <label class="level__block">
        <span class="level">{{ level }}</span><br />  
        <span class="cards">{{ cards }} cards</span>
        <input type="radio" name="level">
        <span class="radio__btn"></span>
      </label>
    </div>
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      levels: [
        {level: "Easy", cards: "20"},
        {level: "Medium", cards: "40"},
        {level: "Hard", cards: "54"},
      ]
    }
  }
}
</script>

<style scoped>

.comp__levelselector {
  position: absolute;
  top: 40%;
  left: 25%;
}

.level__block {
  display: block;
  position: relative;
  color: rgb(0, 195, 255);
  user-select: none;
  padding-left: 2.2em;
  margin-bottom: 0.5em;
}

.level {
  font-size: 1.2em;
  padding-left: 0.5em;
}

.cards {
  font-size: 0.8em;
  padding-left: 0.7em;
}

.level__block input {
  display: none;
}

.radio__btn {
  position: absolute;
  top: 5px;
  left: 5px;
  width: 25px;
  height: 25px;
  background: white;
  border: 2px solid rgb(169, 15, 241);
  border-radius: 50%;
  box-shadow: 1px 1px 3px rgb(10, 10, 10);
}

.radio__btn:after {
  content: "";
  position: absolute;
  display: none;
}

.level__block input:checked ~ .radio__btn:after {
  display: block;
}

.level__block .radio__btn:after {
  top: 2px;
  left: 2px;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  background: rgb(169, 15, 241);
}

@media (min-width: 768px) {

  .level__block {
    padding-left: 2.5em;
    margin-bottom: 1.5em;
    line-height: 2em;
  }

  .level {
    font-size: 2.2em;
    padding: 0 0 0 1.4em;
  }

  .cards {
    font-size: 1.1em;
    padding: 0 0 0 2.8em;
  }

  .radio__btn {
    width: 55px;
    height: 55px;
    border: 3px solid rgb(169, 15, 241);
    box-shadow: 3px 3px 5px rgb(10, 10, 10);
  }

  .level__block .radio__btn:after {
    top: 3px;
    left: 3px;
    width: 49px;
    height: 49px;
  }
}

</style>

