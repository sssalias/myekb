<template>
  <MainLayout>
    <BaseTitle>Новости</BaseTitle>
    <DataList :headers="headers" :items="items">

    </DataList>
    <router-link class="link" :to="{name: 'createNews'}">+</router-link>
  </MainLayout>
</template>

<script>
import MainLayout from "@/layouts/MainLayout.vue";
import DataList from "@/components/DataList.vue";
import NewsService from "@/services/NewsService";

export default {
  components: {DataList, MainLayout},
  data: () => ({
    headers: [
      {text: 'Фото', value: 'photo'},
      {text: 'Название', value: 'title'},
      {text: 'body', value: 'body'}
    ],
    items: []
  }),
  methods: {
    async getData() {
      await NewsService.getAll()
          .then(res => this.items = res.data)
          .catch(err => console.log(err))
    }
  },
  async mounted() {
    await this.getData()
    console.log(this.items)
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