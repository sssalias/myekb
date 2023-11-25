<template>
  <MainLayout>
    <BaseTitle>Блюда</BaseTitle>
    <DataList :headers="headers" :items="items">

    </DataList>
    <router-link class="link" :to="{name: 'createDish', params: {id: id}}">+</router-link>

  </MainLayout>
</template>

<script>

import MainLayout from "@/layouts/MainLayout.vue";

import DataList from "@/components/DataList.vue";
import DishesService from "@/services/DishesService";
// TODO: Обрабатывать стастистические данные на слое серивсов
export default {
  components: {MainLayout, DataList},
  data: () => ({
    years: ['Зима', 'Весна', 'Лето', 'Осень'],
    days: ['Ночь', 'Утро', 'День', 'Вечер'],
    weather: ['Ясно', 'Переменная обласночть', 'Постоянная облачность', 'Дождь', 'Снег'],
    count: 1000,
    id: null,
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
    items: []
  }),
  methods: {
    getRandomInt(max) {
      return Math.floor(Math.random() * max);
    },
    async getData() {
      const data = {category_id: this.$route.params.id}
      return await DishesService.getById(data)
      // return await DishesService.getAll()
    },
    pushStats() {
      for (let el of this.items) {
        el.year = this.years[this.getRandomInt(3)]
        el.day = this.days[this.getRandomInt(3)]
        el.weather = this.weather[this.getRandomInt(4)]
        el.count = this.getRandomInt(1000)
      }
    }
  },
  async mounted() {
    await this.getData()
        .then(res => {
          this.items = res.data
          console.log(res.data)
        })
        .catch(err => console.log(err))
    this.pushStats()
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