<template>
  <MainLayout class="layout">
    <BaseTitle>Статистика</BaseTitle>
    <div class="all">
      <StatsPage type="Doughnut" label="Категории блюд" :values="['Завтраки', 'Гарниры', 'Закуски и салаты', 'Первые блюда', 'Основные блюда']" :param="['category']" />
      <StatsPage type="Line" label="Категории блюд" :values="['Завтраки', 'Гарниры', 'Закуски и салаты', 'Первые блюда', 'Основные блюда']" :param="['category']" />
      <StatsPage type="Bar" label="Блюда по погоде" :values="['Пасмурно', 'Солнечно', 'Дождливо', 'Холодно', 'Жарко']" :param="['weather']" />
      <StatsPage type="Polar" label="Блюда по погоде" :values="['Пасмурно', 'Солнечно', 'Дождливо', 'Холодно', 'Жарко']" :param="['weather']" />
    </div>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import StatsPage from "@/pages/StatsPage.vue";
import BaseTitle from "@/components/BaseTitle.vue";

export default {
  components: {BaseTitle, StatsPage, MainLayout}

}
</script>

<style lang="scss" scoped>
  .layout {

    .all {
      box-shadow: 2px 2px 10px 0 lightgray;
      padding: 2rem;
      border-radius: 10px;
      width: 100%;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      justify-items: center;
      gap: 2rem;
      align-items: center;
    }
  }
</style>