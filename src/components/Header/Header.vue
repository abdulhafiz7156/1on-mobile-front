<template>
  <div class="header">
    <div class="header__menu__burger">
      <img src="../../assets/icons/menu__burger.svg" alt="Menu burger icon" @click="visibleLeft = true" >
<!--      you can add here click event to image-->
    </div>
    <div class="header__title">
      <p>{{title}}</p>
    </div>
    <div class="header__notifications">
      <img src="../../assets/icons/notification.svg" alt="Notification icon" @click="visibleNotificationPopup = true">
      <!--      you can add here click event to image-->
    </div>
  </div>
  <Sidebar
      v-model:visible="visibleLeft"
      close-icon="null"
      class="header__sidebar"
      header="1on.uz"
  >
    <div class="container">
      <ul>
        <li><a href="/"><i class="bi bi-circle-fill"></i>Asosiy</a></li>
        <li><a href="/barbershop"><i class="bi bi-scissors"></i>Barbershoplar</a></li>
        <li><i class="bi bi-clock"></i>Uchrashuv (Bron) tarixi</li>
        <li><i class="bi bi-calendar2-event"></i>Faol uchrashuvlar</li>
      </ul>
      <h5 class="container">Tizim</h5>
      <ul>
        <li><i class="bi bi-gear"></i>Sozlamalar</li>
        <li><i class="bi bi-bell"></i>Bildirishnomalar</li>
        <li><i class="bi bi-globe"></i>Til: Ozbekcha</li>
      </ul>
    </div>
  </Sidebar>
  <Sidebar
      v-model:visible="visibleNotificationPopup"
      close-icon="null"
      class="header__sidebar__notification"
  >
    <div class="container">
      <HeaderPages right-visible="true" right-icon="bi bi-check-lg" class="">Bildirishnomalar</HeaderPages>
      <NotificationCard/>
      <NotificationCard/>
      <NotificationCard/>
      <NotificationCard/>
      <NotificationCard/>
    </div>
  </Sidebar>

</template>

<script>
import "./Header.css"
import {ref} from "vue"
import HeaderPages from "../HeaderPages/HeaderPages.vue";
import NotificationCard from "../NotificationCard/NotificationCard.vue";
export default {
  components: {NotificationCard, HeaderPages},
  props: {
    title: String
  },
  setup(){
    const visibleLeft = ref(false)
    const visibleNotificationPopup = ref(false)
    return {
      visibleLeft,
      visibleNotificationPopup
    }

  }
}
</script>

<style >
.header__sidebar {
  width: 95%;
  background: #181C20 !important;
}

.header__sidebar .p-sidebar-header{
  justify-content: left !important;
  padding: 20px 20px 20px 36px;
}
</style>