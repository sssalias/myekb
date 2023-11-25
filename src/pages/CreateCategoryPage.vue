<template>
  <MainLayout>
    <BaseTitle>Создать категорию</BaseTitle>
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
      <div class="photo">
        <label for="photo">Фото</label>
        <BaseInput
            type="file"
            id="photo"
            @change="uploadPhoto"
        />
      </div>
      <BaseButton @click="createOrg " class="btn">Создать</BaseButton>

    </BaseForm>
  </MainLayout>
</template>

<script>

import MainLayout from "@/layouts/MainLayout.vue";
import BaseForm from "@/components/BaseForm.vue";
import BaseInput from "@/components/BaseInput.vue";
import {getFormData} from "@/helpers/files";
import PhotoService from "@/services/PhotoService";
import BaseButton from "@/components/BaseButton.vue";
import CategoryService from "@/services/CategoryService";

export default {
  // TODO: photoID = null при загрузке
  components: {BaseButton, MainLayout, BaseInput, BaseForm},
  data: () => ({
    title: '',
    description: '',
    photoId: null,
    organizationId: null
  }),
  methods: {
    getPhoto(event) {
      this.photoFormData = getFormData(event)
    },
    async uploadPhoto() {
      if (this.photoFormData) {
        await PhotoService.uploadPhoto(this.photoFormData)
            .then(async (res) => {
              this.photoId = res.data.file_id
              await this.createOrg()
            })
            .catch(err => console.log(err))
      }
    },
    async createOrg() {
      const data = {
        title: this.title,
        description: this.description,
        organization_id: this.$route.params.id,
        photo_id: this.photoId
      }

      await CategoryService.createOrg(data)
          .then(() => {
            alert('Категория успешно добавлена!')
            this.$router.push({name: 'orgsById'})
          })
          .catch(e => alert('Что-пошло не так(: \n' + e))
    }
  }
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