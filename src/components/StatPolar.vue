<template>
  <PolarArea :data="chartData" />
</template>

<script>
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { PolarArea } from 'vue-chartjs'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export default {
  name: 'BarChart',
  components: { PolarArea },
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