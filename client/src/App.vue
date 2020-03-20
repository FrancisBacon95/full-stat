<template>
  <div id="app">
    <Header/>
    <VueChartJS/>
    <router-view/>
    <!--<Footer/>-->
  </div>
</template>

<script>
import Header from '@/components/Header'
//import Footer from '@/components/Footer'
import VueChartJS from '@/components/VueChartJS'
export default {
  name : 'App',
  components:{
    Header,
    /*Footer,*/
    VueChartJS
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
