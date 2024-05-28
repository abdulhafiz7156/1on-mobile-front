<script setup>
import {ref, computed} from 'vue'
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from "primevue/usetoast";
import { useAuthStore } from '@/store/authStore';
import { useRouter } from "vue-router";

const router = useRouter();
const { getGCode } = useAuthStore();

const name = ref(true)
const username = ref('')
const surname = ref('')
const submitted = ref(false);
const toast = useToast();

const isNameValid = computed(() => username.value.trim() !== '');
const isSurNameValid = computed(() => surname.value.trim() !== '');

function submitForm() {
  submitted.value = true;
  if (!isNameValid.value || !isSurNameValid.value) {
    return;
  }
  if (isSurNameValid.value || isNameValid.value) {
    name.value = false
    code.value = true
  }
}

const show = () => {
  toast.add({severity: 'warn', summary: 'Tez kunda', life: 1000});
}

const isLetter = (e) => {
  let char = String.fromCharCode(e.keyCode); // Get the character
  if (/^[A-Za-z]+$/.test(char)) return true; // Match with regex
  else e.preventDefault(); // If not match, don't add to input text
}
</script>

<template>
  <Dialog
    v-model:visible="name"
    modal
    header="Qo’shimcha ma’lumotlar"
    :dismissableMask="true"
    :closable="false"
    :style="{ width: '95%', padding: '16px'}"
  >
    <template #header>
      <h1 class="popup__title">Qo’shimcha ma’lumotlar</h1>
    </template>
    <form @submit.prevent="submitForm">
      <div class="flex-auto">
        <div v-if="submitted && !isNameValid" style="color: var(--red-600)">Name is required.</div>
        <InputText type="text" v-on:keypress="isLetter($event)" v-model="username" class="phone" placeholder="Ism" invalid></InputText>
      </div>
      <div class="flex-auto">
        <div v-if="submitted && !isSurNameValid" style="color: var(--red-600)">Surname is required.</div>
        <InputText type="text" v-model="surname" class="phone" placeholder="Familiya" v-on:keypress="isLetter($event)"/>
      </div>
      <div class="try-again">
        <p class="try-again-skip" @click="name = false, code= true, countdown()">O’tkazib yuborish</p>
        <Button type="submit" class="auth__button name__side">Tasdiqlash</Button>
      </div>
    </form>
    <div class="auth__socials">
      <p class="subtitle">Kirishning boshqa yo’llari</p>
      <div class="socials-icons">
        <Toast/>
        <button @click="getGCode" class="pi pi-google"></button>
        <button class="pi pi-apple"></button>
        <button class="pi pi-facebook"></button>
      </div>
    </div>
  </Dialog>
</template>

<style lang="scss">
.opt {
  display: flex;
  width: 100%;
  justify-content: center;
  height: 56px;
  padding-bottom: 12px;

  input {
    height: 100%;
  }
}

.auth__button {
  width: 100%;
  padding: 14px 0;
  background: #9CCBFB;
  border: 0;
  display: flex;
  justify-content: center;
  span {
    color: #003354;
  }
}

.name__side {
  width: auto !important;
  padding: 14px 30px;
}


.popup__title {
  padding-bottom: 12px;
  font-size: 24px;
}

.try-again {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;

  .try-again-skip {
    color: #9CCBFB !important;
  }
}

.phone {
  width: 100%;
  padding: 16px 0 16px 16px;
  margin-bottom: 20px;
  border: #72777F 1px solid;
  border-radius: 16px
}

.subtitle {
  color: #C2C7CF;
  padding-bottom: 12px;
  font-size: 14px;
}

.auth__socials {
  padding-top: 16px;
  text-align: center;

  .socials-icons {
    display: flex;
    gap: 12px;
    justify-content: center;

    button {
      background: #fff;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: none;
      color: #333;
      cursor: pointer;
      transition: .3s;
      font-size: 20px;

      &:hover {
        background: #ccc;
      }
    }
  }
}

</style>