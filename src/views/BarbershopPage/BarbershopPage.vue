<template>
  <Header :title="headerTitle"></Header>

  <div class="container">
    <div class="barbershop__image__address">
      <div class="barbershop__image">
        <h3>Topor | Oybek metro filiali</h3>
        <p>Supporting Text</p>
      </div>
      <Button>fakkkk</Button>
      <Calendar v-model="date" />
    </div>
  </div>
  <NavigationBar></NavigationBar>
</template>

<script>
import Header from "../../components/Header/Header.vue";
import {ref} from "vue";
import NavigationBar from "../../components/NavigationBar/NavigationBar.vue";
import "./BarbershopPage.css"
export default {
  components: {NavigationBar, Header},
  setup() {
    const headerTitle= ref("Topor barbershop")
    return {
      headerTitle
    }
  }
}
</script>

<style scoped>

</style>