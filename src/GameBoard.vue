<template>
  <div id="game">
    <LogoInGame/>
    <CardRoster/>
    <Timer/>
    <PairTracker/>
    <QuitButton quitMsg='Are you NOT sure?'>Quit Game</QuitButton>
    <WinMessage/>
  </div>
</template>

<script>
import CardRoster from '@/components/game/CardRoster'
import LogoInGame from '@/components/LogoInGame'
import PairTracker from '@/components/game/PairTracker'
import QuitButton from '@/components/game/QuitButton'
import Timer from '@/components/game/Timer'
import WinMessage from '@/components/game/WinMessage'

import { mapActions } from 'vuex'
import { STATUS } from './vuex/store/status'

export default {
  name: 'game',
  methods: {
    ...mapActions(['reset', 'updatedStatus'])
  },

  created() {
    this.updatedStatus(STATUS.READY)
    this.reset()
  },

  components: { 
    CardRoster, 
    LogoInGame, 
    PairTracker, 
    QuitButton,
    Timer, 
    WinMessage
  }

}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe');

#game {
  background: rgb(214, 255, 0);
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(20, minmax(0, 1fr));
  grid-template-rows: repeat(20, minmax(0, 1fr));
}

.logo--aligned {
  display: none;
}

.copyright {
  display: none
}

</style>
