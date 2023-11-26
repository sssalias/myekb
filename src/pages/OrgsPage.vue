<template>
  <MainLayout>
    <BaseTitle>Организации</BaseTitle>
    <DataList :headers="headers" :items="items" push-name="orgsById"/>
    <BaseLink class="link" :link="{name: 'createOrg'}">+</BaseLink>

  </MainLayout>
</template>

<script>

import MainLayout from "@/layouts/MainLayout.vue";
import BaseTitle from "@/components/BaseTitle.vue";
import DataList from "@/components/DataList.vue";
import UseOrgStore from "@/store/useOrgStore";
import BaseLink from "@/components/BaseLink.vue";
export default {
  components: {BaseLink, MainLayout, BaseTitle, DataList},
  data: () => ({
    store: UseOrgStore(),
    headers: [
      {
        text: 'Фото',
        value: 'photo'
      },
      {
        text: 'Наименование',
        value: 'title',
        sortable: true
      },
      {
        text: 'Описание',
        value: 'description'
      },
      {
        text: 'Адрес',
        value: 'address'
      }
    ],
    items: []
  }),
  methods: {
    async getData() {
      return await this.store.getAll()
    }
  },
  async mounted() {
    await this.getData()
        .then(res => this.items = res.data)
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
  }
</style>