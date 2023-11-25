<template>
  <MainLayout>
    <BaseTitle>Категории</BaseTitle>
    <DataList :headers="headersCategory" :items="itemsCategory" push-name="dishes">
    </DataList>
    <router-link class="link" :to="{name: 'createCategory', params: {id: id}}">+</router-link>
    <BaseTitle>Заказы</BaseTitle>
    <DataList :headers="headersOrders" :items="itemsOrders" push-name="orgsById">
    </DataList>
  </MainLayout>
</template>

<script>

import MainLayout from "@/layouts/MainLayout.vue";
import DataList from "@/components/DataList.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import CategoryService from "@/services/CategoryService";
import BaseLink from "@/components/BaseLink.vue";
import UseDishesStore from "@/store/useDishesStore";
import OrderService from "@/services/OrderService";

export default {
  components: {BaseLink, MainLayout, DataList, BaseTitle},
  data: () => ({
    headersCategory: [
      {text: 'Название', value: 'title'},
      {text: 'Описание', value: 'description'}
    ],
    headersOrders: [
      {text: 'Доставка', value: 'delivery'},
      {text: 'Статус', value: 'isCompleted'},
    ],
    itemsCategory: [],
    itemsOrders: [],
    id: null,
    store: UseDishesStore()
  }),
  methods: {
    async getData() {
      return await CategoryService.getAll()
    },
    async getOrders() {
      console.log({organization_id: this.$route.params.id})
      return await OrderService.getAllByOrg({organization_id: this.$route.params.id})
    },
    getId() {
      this.id = this.$route.params.id
    }
  },
  async mounted() {
    await this.getData()
        .then(res => this.itemsCategory = res.data)
    await this.getOrders()
        .then(res => this.itemsOrders = res.data)
        .catch(err => console.log(err))
    this.getId()
  }
}

</script>

<style lang="scss" scoped>
.link {
  width: 100%;
  border-radius: 10px;
  background-color: #0E336A;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
</style>
