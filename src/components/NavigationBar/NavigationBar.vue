<template>
  <div class="navigation__bars df">
    <div class="navigation__bar" @click="setActive('main', '/')">
      <img src="../../assets/icons/house.svg"
           alt="asosiy"
           :class="{ 'active__navigation__bar': pathname === '/' }"
      >
      <p :class="{ 'active__navigation__bar__p': pathname === '/' }">Asosiy</p>
    </div>
    <div class="navigation__bar" @click="setActive('meets', '/order')">
      <img src="../../assets/icons/calendar.svg" alt="uchrashuvlar"
           :class="{ 'active__navigation__bar': pathname === '/order' }"
      >
      <p :class="{ 'active__navigation__bar__p': pathname === '/order' }">Uchrashuvlar</p>
    </div>
    <div class="navigation__bar" @click="setActive('profil', 'profile')">
      <img src="../../assets/icons/user.svg" alt="profil"
           :class="{ 'active__navigation__bar': pathname === 'profile' }"
      >
      <p :class="{ 'active__navigation__bar__p': pathname === 'profile' }">Profil</p>
    </div>
  </div>
</template>

<script>
import "./NavigationBar.css"
import {ref} from "vue";
import {useRouter} from 'vue-router'
export default {
  setup() {
    const router = useRouter();
    const active = ref('main');
    const pathname = ref(window.location.pathname)
    const setActive = (key, path) => {
      active.value = key;
      router.push(path);
    };

    return {
      active,
      setActive,
      router,
      pathname
    }
  }
}
</script>
