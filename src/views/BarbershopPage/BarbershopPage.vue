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
      <StaffCard />
      <StaffCard />
      <StaffCard />
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
</template>

<script>
import Header from "../../components/Header/Header.vue";
import {ref} from "vue";
import NavigationBar from "../../components/NavigationBar/NavigationBar.vue";
import "./BarbershopPage.css"
import StaffCard from "../../components/StaffCard/staffCard.vue";
import card from "../../components/ServiceCard/card.vue";
export default {
  components: {card, StaffCard, NavigationBar, Header},
  setup() {
    const headerTitle= ref("Topor barbershop")
    const allStaff = ref(true)
    return {
      headerTitle,
      allStaff
    }
  }
}
</script>

<style scoped>

</style>
