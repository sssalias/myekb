<template>
  <div class="list">
    <DataTable
        class="table"
        :headers="headers"
        :items="items"
        :sort-by="sortBy"
        :sort-type="sortType"
        @click-row="show"
        table-class-name="customize-table"
        alternating
        >

      <template #item-photo="{photo_id}">
        <div class="img__wrapper">
          <img :src="src + photo_id">
        </div>
      </template>

      <template #item-del="{id}">
        <router-link :to="{name: 'editDish', params: {id: id}}">
          <button><font-awesome-icon :icon="['fas', 'pen-to-square']"/></button>
        </router-link>
        <button @click="del(id)"><font-awesome-icon :icon="['fas', 'trash']"/></button>
      </template>
    </DataTable>
  </div>
</template>

<script>


import DishesService from "@/services/DishesService";

export default {
  data: () => ({
    src: 'https://backend.umom.pro/photos/download?id=',
    sortType: 'asc',
    sortBy: 'title'
  }),
  props: ['headers', 'items', 'pushName', 'url', 'idless'],
  methods: {
    show(item) {
      if (this.pushName) {
        if (!this.idless) {
          this.$router.push({name: this.pushName, params: {id: item.id}})
        } else {
          this.$router.push({name: this.pushName})
        }
      }
    },
    async del(id) {
      await DishesService.deleteDish({id: id})
      location.reload()
    }
  }
}

</script>

<style lang="scss" scoped>
  .list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    z-index: 0;
    .table {
      padding: 1rem;
      //border: 1px solid #D3AE78;
      border: none;
    }
    .table {
      width: 100%;

    }
    .img__wrapper {
      height: 50px;
      width: 50px;
      img {
        object-fit: cover;
        height: 100%;
        width: 100%;
        border-radius: 10px;
      }
    }
    .button {
      width: 100%;
    }
  }
</style>