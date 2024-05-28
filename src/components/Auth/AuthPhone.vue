<template>
  <Dialog
    class="popup"
    :visible="visible"
    modal
    header="Telefon raqamingizni kiriting"
    :dismissableMask="true"
    :closable="false"
    :style="{ width: '95%', padding: '16px'}"
  >
    <template #header>
      <h1 class="popup__title">Telefon raqamingizni kiriting</h1>
    </template>
    <form @submit.prevent="checkPhone">
      <div class="flex-auto">
        <div v-if="invalid" style="color: var(--red-600)">Telefon raqami notog’ri kiritilgan!</div>
        <InputMask type="text" class="phone" v-model="phoneValue" mask="(99) 999-99-99" placeholder="(99) 999-99-99"/>
      </div>
      <Button type="submit" class="auth__button">Yuborish</Button>
    </form>
  </Dialog>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputMask from "primevue/inputmask";
import {ref} from "vue";

defineProps<{visible: boolean}>()

const phoneValue = ref('')
const invalid = ref(false)

const checkPhone = () => {
  if (!phoneValue.value) {
    return invalid.value = true
  }


}
</script>

<style scoped>

</style>