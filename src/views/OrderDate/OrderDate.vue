<template>
  <div class="container">
    <HeaderPages>Vaqt tanlash</HeaderPages>
    <div>
      <h4>Kunni tanlang</h4>
      <div class="calendar">
        <Calendar v-model="date" inline showWeek id="calendar" />
      </div>
    </div>
  </div>
</template>

<script>
import "./OrderDate.css"
import HeaderPages from "../../components/HeaderPages/HeaderPages.vue";
export default {
  name: "OrderDate",
  components: {HeaderPages}
}
</script>

<style scoped>

</style>