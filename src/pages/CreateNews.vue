<template>
  <MainLayout>
    <BaseTitle>Создать новость</BaseTitle>
    <BaseForm>
      <BaseInput
          type="text"
          placeholder="Заголовок"
          v-model:value="title"
      />
      <BaseInput
          type="text"
          placeholder="Содержание"
          v-model:value="body"
      />
      <div class="photo">
        <label for="photo">Фото</label>
        <BaseInput
            type="file"
            id="photo"
            @change="getPhoto"
        />
      </div>
      <BaseButton @click="uploadPhoto" class="btn">Создать</BaseButton>
    </BaseForm>
  </MainLayout>
</template>

<script>

import MainLayout from "@/layouts/MainLayout.vue";
import BaseForm from "@/components/BaseForm.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

import {getFormData} from "@/helpers/files";
import NewsService from "@/services/NewsService";
import PhotoService from "@/services/PhotoService";

export default {
  components: {MainLayout, BaseForm, BaseInput, BaseButton},
  data: () => ({
    title: '',
    body: '',
    photoFormData: null,
    photo_id: null
  }),
  methods: {
    getPhoto(event) {
      this.photoFormData = getFormData(event)
      console.log(this.photoFormData)
    },
    async getData() {
      await NewsService.getAll()
          .then(res => {
            this.items = res.data
          })
          .catch(err => console.log(err))
    },
    async uploadPhoto() {
      if (this.photoFormData) {
        await PhotoService.uploadPhoto(this.photoFormData)
            .then(async (res) => {
              this.photoId = res.data.file_id
              await this.createDish()
            })
      }
    },
    async createDish() {
      const data = {
        title: this.title,
        body: this.body,
        photo_id: this.photoId
      }
      await NewsService.createNew(data)
          .then(() => {
            alert('Новость успешно создана!')
            this.$router.push({name: 'news'})
          })
          .catch(e => alert('Что-то пошло не так(: \n' + e))
    }
  },
}
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