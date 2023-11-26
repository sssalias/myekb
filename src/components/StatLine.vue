<template>
  <Line :data="chartData" />
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

import { Line } from 'vue-chartjs'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)


export default {
  name: 'BarChart',
  components: { Line },
  props: ['labels', 'datasets', 'bckg'],
  data() {
    return {
      chartData: {
        labels: this.labels,
        datasets: this.datasets,
        backgroundColor: this.bckg
      }
    }
  }
}
</script>