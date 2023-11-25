<template>
  <MainLayout>
    <BaseTitle>Редактировать</BaseTitle>
    <BaseForm>
      <BaseInput
          type="text"
          placeholder="Название"
          v-model:value="title"
      />
      <BaseInput
          type="text"
          placeholder="Описание"
          v-model:value="description"
      />
      <BaseInput
          type="number"
          placeholder="Стоимость"
          v-model:value="price"
      />
      <BaseInput
          type="number"
          placeholder="Калории"
          v-model:value="calories"
      />
      <BaseInput
          type="number"
          placeholder="Белки"
          v-model:value="proteins"
      />
      <BaseInput
          type="number"
          placeholder="Жиры"
          v-model:value="fats"
      />
      <BaseInput
          type="number"
          placeholder="Углеводы"
          v-model:value="carbohydrates"
      />
      <div class="photo">
        <label for="photo">Фото</label>
        <BaseInput
            type="file"
            id="photo"
            @change="getPhoto"
        />
      </div>
      <BaseButton @click="uploadPhoto" class="btn">Редактировать</BaseButton>

    </BaseForm>
  </MainLayout>
</template>

<script>

import {defineComponent} from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";
import BaseForm from "@/components/BaseForm.vue";

import {getFormData} from "@/helpers/files";
import PhotoService from "@/services/PhotoService";
import DishesService from "@/services/DishesService";


export default defineComponent({
  components: {BaseForm, BaseButton, BaseInput, MainLayout},
  data: () => ({
    previousData: null,
    title: '',
    description: '',
    price: null,
    calories: null,
    proteins: null,
    fats: null,
    carbohydrates: null,
    categoryId: null,
    photoId: null,
    photoFormData: null
  }),
  methods: {
    async getPreviousData() {
      await DishesService.getByDishId({id: this.$route.params.id})
          .then(res => {
            this.title = res.data.title
            this.description = res.data.description
            this.price = res.data.price
            this.proteins = res.data.proteins
            this.fats = res.data.fats
            this.carbohydrates = res.data.carbohydrates
            this.categoryId = res.data.category_id
            this.photoId = res.data.photo_id
            console.log(res.data)
          })
          .catch(err => console.log(err))
    },


    getPhoto(event) {
      this.photoFormData = getFormData(event)
      console.log(this.photoFormData)
    },
    async uploadPhoto() {
      if (this.photoFormData) {
        await PhotoService.uploadPhoto(this.photoFormData)
            .then(async (res) => {
              this.photoId = res.data.file_id
              await this.editDish()
            })
      } else {
        await this.editDish()
      }
    },
    async editDish() {
      const data = {
        id: this.$route.params.id,
        title: this.title,
        description: this.description,
        category_id: this.$route.params.id,
        photo_id: this.photoId,
        price: this.price,
        calories: this.calories,
        proteins: this.proteins,
        fats: this.fats,
        carbohydrates: this.carbohydrates
      }
      await DishesService.editDish(data)
          .then(() => {
            alert('Блюдо успешно отредактировано!')
            this.$router.push({name: 'orgsById'})
          })
          .catch(e => alert('Что-то пошло не так(: \n' + e))
    }
  },
  async mounted() {
    await this.getPreviousData()
  }
})
</script>

<style lang="scss" scoped>
.photo {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.btn {
  width: 100%;
}
</style>