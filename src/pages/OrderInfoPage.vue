<template>
  <MainLayout>
    <BaseTitle>Заказ {{ this.$route.params.id }}</BaseTitle>
    <DataList :headers="headers" :items="store.items"/>
  </MainLayout>
</template>

<script>

import MainLayout from "@/layouts/MainLayout.vue"
import DataList from "@/components/DataList.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import useOrderDishOrgs from "@/store/useOrderDishOrgs";

export default {
  components: {
    BaseTitle,
    DataList,
    MainLayout
  },
  data: () => ({
    store: useOrderDishOrgs() ,
    headers: [
      {text: 'Фото', value: 'photo'},
      {text: 'Название', value: 'title'},
      {text: 'Описание', value: 'description'},
      {text: 'Цена', value: 'price'},
      {text: 'Калории', value: 'calories'},
      {text: 'Белки', value: 'proteins'},
      {text: 'Жиры', value: 'fats'},
      {text: 'Углеводы', value: 'carbohydrates'},
      {text: 'Время года', value: 'year'},
      {text: 'Время дня', value: 'day'},
      {text: 'Колчичество заказов', value: 'count'},
      {text: 'Погода', value: 'weather'},
      {text: '', value: 'del'}
    ],
  }),
  mounted() {
    console.log(this.store)
  }
}
</script>

<style lang="scss" scoped>

</style>