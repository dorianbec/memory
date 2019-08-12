<template>
  <div id="app">
    <Logo class="logo--aligned" />
    <router-view></router-view>
    <span class="copyright">v0.1.0 - © Caramel Publishing</span>
  </div>
</template>

<script>
  import Logo from '@/components/Logo'
  import MainPage from '@/components/intro/MainPage'

  export default {
    name: 'app',
    components: { 
      Logo, 
      MainPage 
    }
  }

</script>

<style>

@import url('https://fonts.googleapis.com/css?family=ZCOOL+KuaiLe');

* {
  margin: 0;
  overflow: hidden;
  font-family: 'ZCOOL KuaiLe', cursive;
}

#app {
  background: rgb(0, 195, 255);
  height: 100vh;
}

.logo--aligned {
  text-align: center;
}

.copyright {
  font-size: 0.8em;
  font-weight: 800;
  color: rgb(214, 255, 0);
  position: absolute;
  bottom: 0;
  margin: 0 0 1.5vh 1.5vh;
}

</style>
