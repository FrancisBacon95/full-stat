<template>
    <div class="column">
        <h3>Bar Chart</h3>
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
