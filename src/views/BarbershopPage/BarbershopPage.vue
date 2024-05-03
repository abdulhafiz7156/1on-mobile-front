<template>
  <Header :title="headerTitle"></Header>

  <div class="barbershop__image__address">
    <div class="barbershop__image">
      <h3>Topor | Oybek metro filiali</h3>
      <p>Supporting Text</p>
    </div>
  </div>

  <div class="container">
    <div class="staff">
      <h4>Hodimlar</h4>
      <StaffCard @click="visibleTop = true"/>
      <StaffCard @click="visibleTop = true"/>
      <StaffCard @click="visibleTop = true"/>
      <p v-if="allStaff" class="all__staff">+ Barcha hodimlar</p>
    </div>
    <div class="services">
      <h4>Asosiy xizmatlar</h4>
      <card/>
      <card/>
      <card/>
      <card/>
    </div>
  </div>
  <NavigationBar></NavigationBar>
  <div>
    <div class="card flex justify-content-center">
      <Sidebar v-model:visible="visibleTop" position="bottom"
               class="sidebar"
               close-icon="pi pi-minus"
      >
          <StaffCard :plusVisible="plusVisible"/>
          <NotificationCard />
          <NotificationCard />
          <Button>Tasdiqlash</Button>
      </Sidebar>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import {ref} from "vue";
import NavigationBar from "../../components/NavigationBar/NavigationBar.vue";
import "./BarbershopPage.css"
import StaffCard from "../../components/StaffCard/staffCard.vue";
import card from "../../components/ServiceCard/card.vue";
import Button from "../../components/Button/Button.vue";
import NotificationCard from "../../components/NotificationCard/NotificationCard.vue";

export default {
  components: {NotificationCard, card, StaffCard, NavigationBar, Header, Button},
  setup() {
    const headerTitle = ref("Topor barbershop")
    const allStaff = ref(false)
    const visibleTop = ref(false)
    const plusVisible = ref(false)
    return {
      headerTitle,
      allStaff,
      visibleTop,
      plusVisible,
    }
  }
}
</script>

<style scoped>
.header {
  padding: 30px 4px 0px 4px;
}

.custom__services {
  background: #101418 !important;
}

.services #card:last-child {
  margin-bottom: 100px;
}
.sidebar .notification__card {
  background: #101418;
}

.sidebar .card-all {
  background: #101418;

}
</style>
