<template>
  <Doughnut :data="chartData" />
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)


export default {
  name: 'BarChart',
  components: { Doughnut },
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