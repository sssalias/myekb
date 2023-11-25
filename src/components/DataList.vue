<template>
  <div class="list">
    <DataTable
        :headers="headers"
        :items="items"
        border-cell
        :sort-by="sortBy"
        :sort-type="sortType"
        @click-row="show"
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
        <button @click="del(id)"><font-awesome-icon :icon="['fas', 'trash']" /></button>
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
  props: ['headers', 'items', 'pushName', 'url'],
  methods: {
    show(item) {
      if (this.pushName) {
        this.$router.push({name: this.pushName, params: {id: item.id}})
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