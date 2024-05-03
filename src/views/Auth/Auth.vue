<template>
  <Dialog class="popup" v-model:visible="visible" modal header="Telefon raqamingizni kiriting" :dismissableMask="true" :closable="false"
          :style="{ width: '95%', padding: '16px'}">
    <template #header>
      <h1 class="popup__title">Telefon raqamingizni kiriting</h1>
    </template>
    <form @submit.prevent="checkPhone">
      <div class="flex-auto">
        <div v-if="invalid" style="color: var(--red-600)">Telefon raqami notog’ri kiritilgan!</div>
        <InputMask type="text" class="phone" v-model="phonenum" mask="(99) 999-99-99" placeholder="(99) 999-99-99"/>
      </div>

      <Button type="submit" class="auth__button">Yuborish</Button>
    </form>
    <div class="auth__socials">
      <p class="subtitle">Kirishning boshqa yo’llari</p>
      <div class="socials-icons">
        <Toast/>
        <img src="../../assets/images/authicons/google.png" alt="">
        <img @click="show()" src="../../assets/images/authicons/apple.png" alt="">
        <img @click="show()" src="../../assets/images/authicons/facebook.png" alt="">
      </div>
    </div>
  </Dialog>


  <Dialog v-model:visible="name" modal header="Qo’shimcha ma’lumotlar" :dismissableMask="true" :closable="false"
          :style="{ width: '95%', padding: '16px'}">
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
  </Dialog>


  <Dialog v-model:visible="code" modal header="Telefon raqamingizni tasdiqlang!" :dismissableMask="true" :closable="false"
          :style="{ width: '95%', padding: '16px'}">
    <template #header>
      <h1 class="popup__title">Telefon raqamingizni tasdiqlang!</h1>
    </template>
    <p class="subtitle">**7753 raqamiga yuborilgan kodni kiriting</p>
    <form @submit.prevent="checkCode">
      <div class="flex-auto">
        <div v-if="invalidcode" style="color: var(--red-600)">Tasdiqlash kodi notog’ri</div>
        <InputOtp v-model="invalidcodeinp" class="opt" integer-only/>
      </div>
      <p v-if="getAgain>0" style="color: #E0E2E8;">Qayta yuborish 00:{{ getAgain }}</p>
      <p v-else style="color: #3B96DD;" @click="ass">Qayta yuborish</p>
      <div class="try-again">
        <Button type="submit" class="auth__button" rounded>Tasdiqlash</Button>
      </div>
    </form>
  </Dialog>


</template>

<script>
import {ref, computed} from 'vue'
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import InputMask from 'primevue/inputmask';
import InputOtp from 'primevue/inputotp';
import Toast from 'primevue/toast';
import {useToast} from "primevue/usetoast";

export default {
  components: {Dialog, Button, InputMask, InputOtp, Toast},
  setup() {
    const visible = ref(true)
    const name = ref(false)
    const code = ref(false)
    const phonenum = ref('')
    const username = ref('')
    const surname = ref('')
    const submitted = ref(false);
    const invalid = ref(false);
    const invalidcodeinp = ref('');
    const invalidcode = ref(false);
    const getAgain = ref(59);
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
        countdown()
      }
    }

    const show = () => {
      toast.add({severity: 'warn', summary: 'Tez kunda', life: 1000});
    };

    const countdown = () => {
      getAgain.value = 59;

      const mycounter = setInterval(() => {
        getAgain.value--;

        if (getAgain.value === 0) {
          clearInterval(mycounter);
        }
      }, 1000);
    };


    const checkPhone = () => {
      if (phonenum.value.length < 9) {
        invalid.value = true
      } else {
        invalid.value = false
        visible.value = false
        name.value = true
      }
    }


    const checkCode = () => {
      if (invalidcodeinp.value.length < 4) {
        invalidcode.value = true
      } else {
        invalidcode.value = false
        code.value = false
      }
    }

    const isLetter = (e) => {
      let char = String.fromCharCode(e.keyCode); // Get the character
      if (/^[A-Za-z]+$/.test(char)) return true; // Match with regex
      else e.preventDefault(); // If not match, don't add to input text
    }



    return {
      checkCode,
      invalid,
      checkPhone,
      visible,
      name,
      code,
      show,
      Dialog,
      invalidcodeinp,
      invalidcode,
      Button, isLetter,
      InputMask,
      phonenum,
      username,
      submitted,
      isNameValid,
      isSurNameValid,
      submitForm,
      surname,
      getAgain,
      countdown,
    }
  }
}
</script>

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
  }
}

</style>