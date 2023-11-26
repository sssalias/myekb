<template>
  <MainLayout>
    <BaseTitle>Категории</BaseTitle>
    <DataList :headers="headersCategory" :items="itemsCategory" push-name="dishes">
    </DataList>
    <router-link class="link" :to="{name: 'createCategory', params: {id: id}}">+</router-link>
    <BaseTitle>Заказы</BaseTitle>
    <DataList :headers="headersOrders" :items="itemsOrders" :idless="true" push-name="order">
    </DataList>
  </MainLayout>
</template>

<script>

import MainLayout from "@/layouts/MainLayout.vue";
import DataList from "@/components/DataList.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import CategoryService from "@/services/CategoryService";
import BaseLink from "@/components/BaseLink.vue";
import OrderService from "@/services/OrderService";
import useOrderDishOrgs from "@/store/useOrderDishOrgs";

export default {
  components: {BaseLink, MainLayout, DataList, BaseTitle},
  data: () => ({
    store: useOrderDishOrgs(),
    headersCategory: [
      {text: 'Название', value: 'title'},
      {text: 'Описание', value: 'description'}
    ],
    headersOrders: [
      {text: 'Доставка', value: 'delivery'},
      {text: 'Этаж', value: 'floor'},
      {text: 'Место', value: 'workstation'},
      {text: 'Статус', value: 'is_completed'},
    ],
    itemsCategory: [],
    itemsOrders: [],
    id: null,
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
        .then(res => {
          this.itemsOrders = res.data
          let dishes = []
          let id = 0
          for (let item of this.itemsOrders) {
            item.id = id++
            dishes.push(item.dishes)
            // dishes[this.itemsOrders.indexOf(item)] = item.dishes

            if (item.delivery) {
              item.delivery = 'Доставить'
            } else {
              item.delivery = 'Самовывоз'
            }
            if (item.is_completed) {
              item.is_completed = 'Готово'
            } else {
              item.is_completed = 'Не готово'
            }
            for (let key of Object.keys(item.user)) {
              if (key !== 'id') {
                item[key] = item.user[key]
              }
            }
          }
          this.store.addOrders(dishes)
          console.log(dishes)
        })
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
