<template>
  <MainLayout>
    <BaseTitle>Заказ</BaseTitle>
    <DataList :headers="headers" :items="store.items[0]"/>
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
      {text: '№', value: 'count'},
      {text: 'Фото', value: 'photo'},
      {text: 'Название', value: 'title'},
      {text: 'Описание', value: 'description'},
      {text: 'Цена', value: 'price'},
      {text: 'Калории', value: 'calories'},
      {text: 'Белки', value: 'proteins'},
      {text: 'Жиры', value: 'fats'},
    ],
  }),
  mounted() {
    console.log(this.store.items)
  }
}
</script>

<style lang="scss" scoped>

</style>