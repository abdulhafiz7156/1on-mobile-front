<template>
  <div class="navigation__bars df">
    <div class="navigation__bar" @click="setActive('main')">
      <img src="../../assets/icons/house.svg"
           alt="asosiy"
           :class="{ 'active__navigation__bar': active === 'main' }"
      >
      <p :class="{ 'active__navigation__bar__p': active === 'main' }">Asosiy</p>
    </div>
    <div class="navigation__bar" @click="setActive('meets')">
      <img src="../../assets/icons/calendar.svg" alt="uchrashuvlar"
           :class="{ 'active__navigation__bar': active === 'meets' }"
      >
      <p :class="{ 'active__navigation__bar__p': active === 'meets' }">Uchrashuvlar</p>
    </div>
    <div class="navigation__bar" @click="setActive('profil')">
      <img src="../../assets/icons/user.svg" alt="profil"
           :class="{ 'active__navigation__bar': active === 'profil' }"
      >
      <p :class="{ 'active__navigation__bar__p': active === 'profil' }">Profil</p>
    </div>
  </div>
</template>

<script>
import "./NavigationBar.css"
import {ref} from "vue";
export default {
  setup() {
    const active = ref('main'); // Set default active state to 'asosiy'

    const setActive = (key) => {
      active.value = key;
    };


    return {
      active,
      setActive,
    }
  }
}
</script>
