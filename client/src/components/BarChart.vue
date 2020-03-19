<script>
  import { Bar } from 'vue-chartjs'
  import {getPosts} from '../PostService'; //최초의 데이터를 가져올 수 있도록 하는 함수를 가져온다.
  export default {
    extends: Bar,
    async created() {
      const ret = await getPosts()
      this.data=ret.data; //this.data에 최초의 데이터를 저장한다.
      var calender={ 
        //calender변수: 최초 데이터 중 month를 카운팅해서 12달을 모을 수 있도록 12개의 파라미터를 가진 array를 만든다.
        '1월':0,
        '2월':0,
        '3월':0,
        '4월':0,
        '5월':0,
        '6월':0,
        '7월':0,
        '8월':0,
        '9월':0,
        '10월':0,
        '11월':0,
        '12월':0,
      }
      //for문을 통해 최초의 데이터에 있는 month를 하나씩 카운팅해서 calender에 1씩 올린다.
      for(var index in this.data){
          if (this.data[index].month === '1'){
              calender['1월']+=1;
          } else if (this.data[index].month === '2'){
              calender['2월']+=1;
          } else if (this.data[index].month === '3'){
              calender['3월']+=1;
          } else if (this.data[index].month === '4'){
              calender['4월']+=1;
          } else if (this.data[index].month === '5'){
              calender['5월']+=1;
          } else if (this.data[index].month === '6'){
              calender['6월']+=1;
          } else if (this.data[index].month === '7'){
              calender['7월']+=1;
          } else if (this.data[index].month === '8'){
              calender['8월']+=1;
          } else if (this.data[index].month === '9'){
              calender['9월']+=1;
          } else if (this.data[index].month === '10'){
              calender['10월']+=1;
          } else if (this.data[index].month === '11'){
              calender['11월']+=1;
          } else if (this.data[index].month === '12'){
              calender['12월']+=1;
          } 
      }
      this.datasets= [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              pointBorderColor: '#249EBF',
              data: calender //datasets 중 data 파라미터에 calender를 넣어준다.
            }
          ]   
    },
    data () {
      return {
        data: [],
        datacollection: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          datasets: []
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }],
            xAxes: [ {
              gridLines: {
                display: false
              }
            }]
          },
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
    mounted () {
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>