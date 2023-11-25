<template>
  <MainLayout>
    <BaseTitle>Создать организацию</BaseTitle>
    <BaseForm>
      <BaseInput
        placeholder="Наименование"
        type="text"
        v-model:value="title"
      />
      <BaseInput
          placeholder="Описание"
          type="text"
          v-model:value="description"
      />
      <BaseInput
          placeholder="Адрес"
          type="text"
          v-model:value="address"
      />
      <div class="photo">
        <label for="photo">Фото</label>
        <BaseInput
            placeholder="Наименование"
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
import BaseTitle from "@/components/BaseTitle.vue";
import BaseForm from "@/components/BaseForm.vue";
import BaseInput from "@/components/BaseInput.vue";
import BaseButton from "@/components/BaseButton.vue";

import PhotoService from "@/services/PhotoService";

import {getFormData} from "@/helpers/files";
import OrgService from "@/services/OrgService";

export default {
  data: () => ({
    title: '',
    description: '',
    address: '',
    photoFormData: null,
    photoId: null
  }),
  components: {BaseButton, MainLayout, BaseTitle, BaseForm, BaseInput},
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
        address: this.address,
        photo_id: this.photoId
      }
      await OrgService.createOrg(data)
          .then(res => console.log(res))
          .catch(e => console.log(e))
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
