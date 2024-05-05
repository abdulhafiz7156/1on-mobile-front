<template>
  <div class="header">
    <div class="header__menu__burger">
      <img src="../../assets/icons/menu__burger.svg" alt="Menu burger icon" @click="visibleLeft = true" >
<!--      you can add here click event to image-->
    </div>
    <div class="header__title">
      <p>{{title}}<slot></slot></p>
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
        <li><a href="/"><i class="bi bi-circle-fill"></i>{{ $t("navigationBarMain") }}</a></li>
        <li><a href="/barbershop"><i class="bi bi-scissors"></i>{{$t('headerSidebarBarbershops')}}</a></li>
        <li><a href="/order/"><i class="bi bi-clock"></i>{{$t('headerSidebarMeetsArchive')}}</a></li>
        <li><a href="/order/"><i class="bi bi-calendar2-event"></i>{{$t('headerSidebarActiveMeets')}}</a></li>
      </ul>
      <h5 class="container">{{$t('headerSidebarSubtitle')}}</h5>
      <ul>
        <li><a href=""><i class="bi bi-gear"></i>{{$t('headerSidebarSettings')}}</a></li>
        <li><a href=""><i class="bi bi-bell"></i>{{$t('headerSidebarNotifications')}}</a></li>
        <li class="header__unique__class">
          <PanelMenu :model="items" class="header__panel__menu">
            <template #item="{ item }">
              <a v-ripple class="flex align-items-center px-3 py-2 cursor-pointer">
                <span :class="[item.icon, 'text-primary']" />
                <span :class="['ml-2', { 'font-semibold': item.items }]">{{ item.label }}</span>
              </a>
            </template>
          </PanelMenu>
        </li>
      </ul>
    </div>
  </Sidebar>
  <Sidebar
      v-model:visible="visibleNotificationPopup"
      close-icon="null"
      class="header__sidebar__notification"
  >
    <div class="container">
      <HeaderPages right-visible="true" right-icon="bi bi-check-lg" @redirect-page="closePopup()" class="">{{$t('headerSidebarNotifications')}}</HeaderPages>
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
import {computed, ref} from "vue"
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
    const selectedLanguage = ref("Language")

    const closePopup = () => {
      visibleNotificationPopup.value = false
    }

    const items = ref([
      {
        label: computed(() => `${selectedLanguage.value}`),
        icon: 'pi pi-chevron-down',
        items: [
          {
            label: 'Uzbek tili',
            command: () => {
              localStorage.setItem('language', 'uz')
              window.location.reload();
            }
          },
          {
            label: 'Rus tili',
            command: () => {
              localStorage.setItem('language', 'ru')
              window.location.reload();
            }
          },
          {
            label: 'Ingiliz tili',
            command: () => {
              localStorage.setItem('language', 'en')
              window.location.reload();
            }
          }
        ]
      },
    ]);


    if(localStorage.getItem('language') === 'uz') {
      selectedLanguage.value = 'Til: Uzbek tili'
      items.value[0].items[0].label = "Uzbek tili"
      items.value[0].items[1].label = "Rus tili"
      items.value[0].items[2].label = "Ingiliz tili"
    } else if(localStorage.getItem('language') === 'ru') {
      selectedLanguage.value = 'Язык: Русский'
      items.value[0].items[0].label = "Узбекский язык"
      items.value[0].items[1].label = "Русккий язык"
      items.value[0].items[2].label = "Английский язык"
    } else if(localStorage.getItem('language') === 'en') {
      selectedLanguage.value = 'Language: English'
      items.value[0].items[0].label = "Uzbek"
      items.value[0].items[1].label = "Russian"
      items.value[0].items[2].label = "English"
    }

    return {
      visibleLeft,
      visibleNotificationPopup,
      closePopup,
      items,
      selectedLanguage,
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

.header__panel__menu .p-panelmenu-panel {
  padding: 10px 5px 10px 0px;
  border:none;
}

.header__panel__menu .pi {
  margin-right: 10px;
}
</style>