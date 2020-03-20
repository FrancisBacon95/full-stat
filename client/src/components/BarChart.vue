<script>
import { Bar } from "vue-chartjs";
//import {getPosts} from '../PostService'; //최초의 데이터를 가져올 수 있도록 하는 함수를 가져온다.
import axios from "axios";

export default {
  extends: Bar,
  mounted() {
    const url = "api/posts/";
    axios.get(url).then(res => {
      //console.log(res);
      this.data = res.data;
      //calender data
      let calender=[0,0,0,0,0,0,0,0,0,0,0,0];
      //for문을 통해 최초의 데이터에 있는 month를 하나씩 카운팅해서 calender에 1씩 올린다.
      for (var index in this.data) {
        calender[Number(this.data[index].month)-1]++;
      }
      this.datasets = [
        {
          label: "월간 업로드량",
          backgroundColor: "#f87979",
          pointBackgroundColor: "white",
          borderWidth: 1,
          pointBorderColor: "#249EBF",
          data: calender //datasets 중 data 파라미터에 calender를 넣어준다.
        }
      ];
      this.datacollection.datasets=this.datasets;
      this.renderChart(this.datacollection, this.options)
    });
  },
  data() {
    return {
      data: [],
      datacollection: {
        labels:[
        '1월',
        '2월',
        '3월',
        '4월',
        '5월',
        '6월',
        '7월',
        '8월',
        '9월',
        '10월',
        '11월',
        '12월',
        ],
        datasets: []
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    };
  }
  /*mounted () {
      this.renderChart(this.datacollection, this.options)
    }*/
};
</script>