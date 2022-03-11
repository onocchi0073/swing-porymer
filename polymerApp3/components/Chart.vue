<script>
import { Scatter } from 'vue-chartjs'

export default {
  extends: Scatter,
  props: ['chartdata', 'options'],
  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style>
</style>