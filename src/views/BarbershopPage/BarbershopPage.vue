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
      <StaffCard @click="visibleTop = true" />
      <StaffCard @click="visibleTop = true" />
      <StaffCard @click="visibleTop = true" />
      <p v-if="allStaff" class="all__staff">+ Barcha hodimlar</p>
    </div>
    <div class="services">
      <h4>Asosiy xizmatlar</h4>
      <card />
      <card />
      <card />
      <card />
    </div>
  </div>
  <NavigationBar></NavigationBar>
  <div>
    <div class="card flex justify-content-center">
      <Sidebar v-model:visible="visibleTop" position="bottom" style="height: 90%;background: #181C20; border-top-left-radius: 28px;  border-top-right-radius: 28px; padding: 20px;"  class="sidebar">
        <StaffCard :plusVisible="plusVisible" />
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

export default {
  components: {card, StaffCard, NavigationBar, Header, Button},
  setup() {
    const headerTitle= ref("Topor barbershop")
    const allStaff = ref(false)
    const visibleTop = ref(true)
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
</style>
