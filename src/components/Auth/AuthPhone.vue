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
      <h1 class="popup__title">
        Telefon raqamingizni {{ secondStep ? 'tasdiqlang' : 'kiriting' }}
      </h1>
    </template>
    <template v-if="!secondStep">
      <form @submit.prevent="checkPhone">
        <div class="flex-auto">
          <div v-if="invalid" style="color: var(--red-600)">Telefon raqami notog’ri kiritilgan!</div>
          <InputMask type="text" class="phone" v-model="phone" mask="(99) 999-99-99" placeholder="(99) 999-99-99"/>
        </div>
        <Button type="submit" class="auth__button">Yuborish</Button>
      </form>
    </template>
    <template v-else>
      <p class="subtitle">**{{phone.slice(-4)}} raqamiga yuborilgan kodni kiriting</p>
      <form @submit.prevent="checkCode">
        <div class="flex-auto">
          <div v-if="invalidcode" style="color: var(--red-600)">Tasdiqlash kodi notog’ri</div>
          <InputOtp v-model="codeValue" class="opt" integer-only/>
        </div>
        <p v-if="getAgain>0" style="color: #E0E2E8;">Qayta yuborish 00:{{ getAgain }}</p>
        <p v-else style="color: #3B96DD;" @click="ass">Qayta yuborish</p>
        <div class="try-again">
          <Button type="submit" class="auth__button" rounded>Tasdiqlash</Button>
        </div>
      </form>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputMask from "primevue/inputmask";
import { ref } from "vue";
import InputOtp from "primevue/inputotp";

defineProps<{visible: boolean}>()
const emit = defineEmits<{(event: 'close'): void}>()

const phone = ref('')
const codeValue = ref('')
const secondStep = ref(false)
const invalidcode = ref(false)
const invalid = ref(false)
const getAgain = ref(100);

const checkPhone = () => {
  phone.value = phone.value.replace(/\D/g, '')
  if (phone.value.length !== 9) {
    return invalid.value = true
  }

  if (invalid.value) invalid.value = false

  secondStep.value = true
  countdown()
}

const checkCode = () => {
  if (codeValue.value.length !== 4) {
    invalidcode.value = true
  } else {
    invalidcode.value = false
    secondStep.value = false
    emit('close')
  }
}

const countdown = () => {
  getAgain.value = 100;

  const count = setInterval(() => {
    getAgain.value--;

    if (getAgain.value === 0) {
      clearInterval(count);
    }
  }, 1000);
};
</script>

<style scoped>

</style>