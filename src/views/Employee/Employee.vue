<template>
  <div class="container">
    <HeaderPages>{{ $t('employee') }}</HeaderPages>
    <div class="employee__cards">
      <StaffCard :plusVisible="true" />
      <StaffCard :plusVisible="true" />
      <StaffCard :plusVisible="true" />
      <StaffCard :plusVisible="true" />
      <StaffCard :plusVisible="true" />
      <StaffCard :plusVisible="true" />
      <StaffCard :plusVisible="true" />
      <StaffCard :plusVisible="true" />
      <StaffCard :plusVisible="true" />
      <StaffCard :plusVisible="true" />
      <StaffCard :plusVisible="true" />
      <StaffCard :plusVisible="true" />
    </div>
  </div>
</template>

<script>
import HeaderPages from "../../components/HeaderPages/HeaderPages.vue"
import StaffCard from "../../components/StaffCard/staffCard.vue";

export default {
  components: {
    StaffCard,
    HeaderPages
  },
}
</script>

<style scoped>

</style>