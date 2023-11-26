<template>
  <Bar :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
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