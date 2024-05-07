<script setup lang="ts">
import { useOrganizationStore } from './store/organizationStore.ts'
import {onMounted} from "vue";

const { initOrganization } = useOrganizationStore()

onMounted(() => {
  initOrganization()
})
</script>

<template>
  <router-view />
</template>

<style scoped>

</style>
