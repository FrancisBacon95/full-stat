<template>
    <div class="column" style="margin: 5% 5% 5% 5%">
        <h3>연간 공모전/대회 현황</h3><h5>(2019년 기준)</h5>
        <bar-chart></bar-chart>
    </div>
</template>

<script>
  import BarChart from '@/components/BarChart'
  //import Reactive from '@/components/Reactive'
  
  export default {
    name: 'VueChartJS',
    components: {
      BarChart,
      //Reactive
    },
    data () {
      return {
        datacollection: null
      }
    },
  }
</script>
