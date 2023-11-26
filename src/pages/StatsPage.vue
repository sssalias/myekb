<!--<template>-->
<!--  <MainLayout>-->
<!--    <Stat v-if="chartData" :data="chartData"/>-->
<!--  </MainLayout>-->
<!--</template>-->

<!--<script>-->
<!--import MainLayout from "@/layouts/MainLayout.vue";-->
<!--import Stat from "@/components/Stat.vue";-->

<!--export default {-->
<!--  data: () => ({-->
<!--    chartData: null-->
<!--  }),-->
<!--  components: {Stat, MainLayout},-->
<!--  methods: {-->
<!--    fillData() {-->
<!--      this.chartData = {-->
<!--        labels: [1, 2],-->
<!--        datasets: [-->
<!--          {-->
<!--            label: 'Хуй 1',-->
<!--            data: [1, 2, 3]-->
<!--          },-->
<!--          {-->
<!--            label: 'Хуй 2',-->
<!--            data: [4, 5, 6]-->
<!--          }-->
<!--        ]-->
<!--      }-->
<!--    }-->
<!--  },-->
<!--  mounted() {-->
<!--    this.fillData()-->
<!--    console.log(this.chartData)-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style lang="scss" scoped>-->

<!--</style>-->
<template>
  <MainLayout>
    <Stat/>
  </MainLayout>
</template>

<script>
import Stat from "@/components/Stat.vue";
import MainLayout from "@/layouts/MainLayout.vue";
export default {
  components: {MainLayout, Stat}
}
</script>

<style lang="scss" scoped>

</style>