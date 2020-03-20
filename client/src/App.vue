<template>
  <div id="app">
    <Header/>
    <VueChartJS/>
    <router-view/>
    <div class='footer'>
      <p>개발자: 이유원, 최재혁</p>
      <p>도움 주신 분: 데이터 몬스터즈</p>
      <p>통계학과를 위한 공모전/대회 종합 웹 애플리케이션</p>
    </div>
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

.footer {
  height:4.0; 
  background-color: #17a2b8;
  color : white;
}
</style>
