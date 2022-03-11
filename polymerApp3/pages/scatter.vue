<template>
  <div class="small">
    <scatter-chart :chart-data="datacollection"></scatter-chart>
    <button @click="regist()">グラフの更新</button>
  </div>
</template>

<script>
import ScatterChart from './LineChart.js';
import axios from 'axios';

export default {
  components: {
    ScatterChart
  },
  data() {
    return {
      datacollection: null,
    }
  },
  mounted () {
    this.getter()
    this.regist()
  },
  methods: {
    getter() {
      axios.get('https://ylbk2m65f5.execute-api.ap-northeast-1.amazonaws.com/dev/python-run')
      .then(response => (this.info = response.data.shift()))
      axios.get('https://ylbk2m65f5.execute-api.ap-northeast-1.amazonaws.com/dev/python-run')
      .then(response => (this.data = response.data.pop()))
    },
    // options: {
    //     plugins: {
    //         // 全体の設定
    //         datalabels: {
    //             color: '#36A2EB'
    //         }
    //     }
    // },
    regist() {
      this.getter();
      this.datacollection = {
        datasets: [
          {
            label: '分析結果',
            pointStyle: "rect",
            pointRadius: 50,
            backgroundColor: 'rgb(255, 48, 32, 0.5)',
            data: [{x: this.info, y: this.data}],
          },

          { label: '基準値',
            backgroundColor: 'rgb(0, 159, 255, 0.45)',
            data: [{x: 25, y: 60},
                  {x: 25, y: 60},
                  {x: 25, y: 35},
                  {x: 45, y: 40},
                  {x: 20, y: 205},
                  {x: 30, y: 305},
                  {x: 20, y: 250},
                  {x: 40, y: 300},
                  {x: 45, y: 320},
                  {x: 25, y: 200},
                  {x: 25, y: 300},
                  {x: 25, y: 290},
                  {x: 30, y: 370},
                  {x: 25, y: 370},
                  {x: 25, y: 200},
                  {x: 35, y: 360},
                  {x: 45, y: 360},
                  {x: 80, y: 370},
                  {x: 80, y: 725},
                  {x: 30, y: 565},
                  {x: 40, y: 495},
                  {x: 20, y: 645},
                  {x: 100, y: 510},
                  {x: 80, y: 345},
                  {x: 85, y: 165},
                  {x: 50, y: 575},
                  {x: 50, y: 405},
                  {x: 80, y: 360},
                  {x: 20, y: 320},
                  {x: 100, y: 215},
                  {x: 60, y: 250},
                  {x: 60, y: 700},
                  {x: 60, y: 350},
                  {x: 45, y: 350},
                  {x: 100, y: 150},
                  {x: 100, y: 150},
                  {x: 100, y: 20},
                  {x: 80, y: 300},
                  {x: 80, y: 300},
                  {x: 80, y: 275},
                  {x: 70, y: 350},
                  {x: 80, y: 300},
                  {x: 80, y: 60},
                  {x: 90, y: 180},
                  {x: 76, y: 180},
                  {x: 85, y: 370},
                  {x: 25, y: 260},
                  {x: 40, y: 850},
                  {x: 40, y: 325},
                  {x: 25, y: 300},
                  {x: 60, y: 610},
                  {x: 100, y: 35},
                  {x: 10, y: 210},
                  {x: 25, y: 220},
                  {x: 100, y: 200},
                  {x: 60, y: 220},
                  {x: 60, y: 230},
                  {x: 8, y: 385},
                  {x: 8, y: 410},
                  {x: 85, y: 180},
                  {x: 85, y: 200},
                  {x: 60, y: 290},
                  {x: 95, y: 250},
                  {x: 20, y: 345},
                  {x: 42.2, y: 350},
                  {x: 80, y: 345},
                  {x: 80, y: 360},
                  {x: 100, y: 240},
                  {x: 100, y: 240},
                  {x: 99, y: 440},
                  {x: 60, y: 350},
                  {x: 60, y: 680},
                  {x: 40, y: 680},
                  {x: 60, y: 395},
                  {x: 60, y: 1300},
                  {x: 20, y: 435},
                  {x: 55, y: 400},
                  {x: 55, y: 450},
                  {x: 80, y: 300},
                  {x: 100, y: 60},
                  {x: 55, y: 1000},
                  {x: 100, y: 500},
                  {x: 55, y: 1000},
                  {x: 95, y: 300},
                  {x: 55, y: 500},
                  {x: 35, y: 350},
                  {x: 35, y: 800},
                  {x: 25, y: 400},
                  {x: 40, y: 470},
                  {x: 25, y: 450},
                  {x: 25, y: 450},
                  {x: 5, y: 300},
                  {x: 15, y: 450},
                  {x: 25, y: 1500},
                  {x: 40, y: 880},
                  {x: 50, y: 1500},
                  {x: 50, y: 1500},
                  {x: 50, y: 500},
                  {x: 50, y: 600},
                  {x: 50, y: 1100},
                  {x: 25, y: 400},
                  {x: 80, y: 219},
                  {x: 120, y: 0},
                  ]
                }
              ]
            }
          }
        }
      }
</script>

<style>
.small {
  margin: 0px;
  align-items: center;
  text-align: center;
  width: 100vw;
  display: flex;
}
</style>