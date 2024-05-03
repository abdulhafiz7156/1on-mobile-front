<template xmlns:h="http://www.w3.org/1999/xhtml">
  <Button label="Show" @click="visible = true"/>
  <br>
  <br>
  <Button label="Name" @click="name = true"/>
  <br>
  <br>
  <Button label="Code" @click="code = true"/>

  <!--  :closable="false"-->
  <Dialog class="popup" v-model:visible="visible" modal header="Telefon raqamingizni kiriting"
          close-icon="false"
          :style="{ width: '95%', padding: '16px'}">
    <template #header>
      <h1 class="popup__title">Telefon raqamingizni kiriting</h1>
    </template>
    <div class="flex-auto">
      <InputMask type="text" class="phone" v-model="phonenum" mask="+998 (99) 999-99-99"
                 placeholder="+998 (99) 999-99-99"/>
    </div>
    <Button label="Yuborish" class="auth__button" rounded/>
    <div class="auth__socials">
      <p class="subtitle">Kirishning boshqa yo’llari</p>
      <div class="socials-icons">
        <img src="../../assets/images/authicons/google.png" alt="">
        <img src="../../assets/images/authicons/apple.png" alt="">
        <img src="../../assets/images/authicons/facebook.png" alt="">
      </div>
    </div>
  </Dialog>


  <Dialog v-model:visible="name" modal header="Qo’shimcha ma’lumotlar"
          :style="{ width: '95%', padding: '16px'}">
    <template #header>
      <h1 class="popup__title">Qo’shimcha ma’lumotlar</h1>
    </template>
    <form @submit.prevent="submitForm">
      <div class="flex-auto">
        <div v-if="submitted && !isNameValid" style="color: var(--red-600)">Name is required.</div>
        <InputText type="text" v-model="username" class="phone" placeholder="Ism" invalid></InputText>
      </div>
      <div class="flex-auto">
        <div v-if="submitted && !isSurNameValid" style="color: var(--red-600)">Surname is required.</div>
        <InputText type="text" v-model="surname" class="phone" placeholder="Familiya"/>
      </div>
      <div class="try-again">
        <p class="try-again-skip">O’tkazib yuborish</p>
        <Button type="submit" label="Tasdiqlash" class="auth__button name__side" rounded/>
      </div>
    </form>
  </Dialog>


  <Dialog v-model:visible="code" modal header="Telefon raqamingizni tasdiqlang!"
          :style="{ width: '95%', padding: '16px'}">
    <template #header>
      <h1 class="popup__title">Telefon raqamingizni tasdiqlang!</h1>
    </template>
    <p class="subtitle">**7753 raqamiga yuborilgan kodni kiriting</p>
    <div class="flex-auto">
      <InputOtp v-model="value" class="opt" integer-only/>
    </div>

    <div class="try-again">
      <Button label="Tasdiqlash" class="auth__button" rounded integerOnly/>
    </div>
  </Dialog>


</template>

<script>
import { ref, computed } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength } from '@vuelidate/validators'
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputMask from 'primevue/inputmask';
import InputOtp from 'primevue/inputotp';


export default {
  components: {Dialog, Button, InputMask, InputOtp},
  setup() {
    const visible = ref(false)
    const name = ref(false)
    const code = ref(false)
    const phonenum = ref(+998)
    const username = ref('')
    const surname = ref('')
    const submitted = ref(false);

    const isNameValid = computed(() => username.value.trim() !== '');
    const isSurNameValid = computed(() => surname.value.trim() !== '');

    function submitForm() {
      submitted.value = true;
      if (!isNameValid.value || isSurNameValid.value) {
        return;
      }
      // Form submission logic here
      console.log('Form submitted successfully');
    }

    return {
      visible,
      name,
      code,
      Dialog,
      Button,
      InputMask,
      phonenum,
      username,
      submitted,
      isNameValid,
      isSurNameValid,
      submitForm,
      surname
    }
  }
}
</script>

<style lang="scss">


.popup {
  .p-dialog-header-icons {
    display: none;
  }
}


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
  span {
    color: #003354;
  }
}

.name__side {
  width: auto;
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
  }
}

</style>