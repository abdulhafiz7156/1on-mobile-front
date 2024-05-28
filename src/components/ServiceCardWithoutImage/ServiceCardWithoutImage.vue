<script setup lang="ts">
import "./ServiceCardWithoutImage.css";
import { useOrganizationStore } from "@/store/organizationStore.ts";
import { useOrderStore } from "@/store/orderStore.ts";
import { ref } from "vue";
import { useRouter } from 'vue-router'
import { ServiceI } from "@/types/interfaces.ts";

const emit = defineEmits<{
  (event: 'exit'): void,
  (event: 'complete', services: ServiceI[]): void
}>()

const data = useOrganizationStore()
const orderStore = useOrderStore()
const totalTime = ref(0)
const selectedServices = ref<ServiceI[]>([])
const errorEmpty = ref(false)
const router = useRouter()

const sendTime = () => {
  if (!selectedServices.value.length) {
    return errorEmpty.value = true
  }

  if (errorEmpty.value) errorEmpty.value = false
  emit('complete', selectedServices.value)
  emit('exit')
  selectedServices.value = []
}

const toggleItem = (service: ServiceI) => {
  const existedItem = selectedServices.value.find(item => item.id === service.id)

  if (existedItem) {
    selectedServices.value = selectedServices.value.filter(item => item.id !== service.id)
  } else {
    selectedServices.value.push(service)

    if (errorEmpty.value) errorEmpty.value = false
  }
}

const isSelected = (serviceId: number) => {
  return selectedServices.value.find(item => item.id === serviceId)
}
</script>

<template>
  <HeaderPages :cancelable="true" @exit="$emit('exit')">{{$t('ServiceCardWithoutImageChoiceService')}}</HeaderPages>
  <h4>{{$t('barbershopPageAllServices')}}</h4>

  <div
    class="card_2"
    v-for="service in data.services"
    @click="toggleItem(service)"
    :class="isSelected(service.id) ? 'active' : ''"
  >
    <div>
      <p>{{ service.name }}</p>
      <p>{{service.time}} {{$t('minute')}} | {{service.price}} {{$t('currency')}} </p>
    </div>
    <i :class="isSelected(service.id) ? 'pi pi-minus' : 'pi pi-plus'" ></i>
  </div>
  <Button v-if="selectedServices.length" @click="sendTime">{{$t('confirmButton')}}</Button>
</template>

<style scoped></style>