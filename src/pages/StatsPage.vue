<template>
  <div v-if="type === 'Bar'" class="stat bar">
    <Stat v-if="!loading" :labels="labels" :datasets="datasets"/>
  </div>
  <div v-if="type === 'Doughnut'" class="stat doughnut">
    <StatDoughnut  v-if="!loading" :labels="labels" :datasets="datasets"/>
  </div>
  <div v-if="type === 'Line'" class="stat line">
    <StatLine v-if="!loading" :labels="labels" :datasets="datasets"/>
  </div>
  <div v-if="type === 'Polar'" class="stat polar">
    <StatPolar v-if="!loading" :labels="labels" :datasets="datasets" />
  </div>

</template>

<script>
import Stat from "@/components/StatBar.vue";
import StatDoughnut from "@/components/StatDought.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import StatsService from "@/services/StatsService";
import StatLine from "@/components/StatLine.vue";
import StatPolar from "@/components/StatPolar.vue";
export default {
  components: {MainLayout, Stat, StatDoughnut, StatLine, StatPolar},
  props: ['label', 'values', 'param', 'type'],
  data: () => ({
    stats: [],
    labels: null,
    datasets: null,
    loading: true
  }),
  methods: {
    async getAllStats() {
      await StatsService.getAll()
          .then(res => this.stats = res.data)
          .catch(err => console.log(err))
    },
    async getChart() {
      // await StatsService.getSum(this.stats, 'category', 'Обед')
      return await StatsService.getChart(this.stats,this.param, this.values)
    },
    async getDatasets() {
      this.datasets = [
        {
          label: this.label,
          data: await this.getChart(),
          backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16', '#660066']
        }
      ]
      this.loading = false
    },
    async getLabels() {
      this.labels = this.values
    }
  },
  async mounted() {
    console.log(this.labels)
    await this.getAllStats()
    await this.getLabels()
    await this.getChart()
    await this.getDatasets()
  }
}
</script>

<style lang="scss" scoped>
</style>