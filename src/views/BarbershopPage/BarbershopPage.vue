<template>
  <Header v-if="organizationStore.organization">{{ organizationStore.organization.name }}</Header>

  <div class="barbershop__image__address">
    <div class="barbershop__image">
      <h3 v-if="organizationStore.organization">{{organizationStore.organization.name}} | {{organizationStore.organization.address}}</h3>
      <p>Supporting Text</p>
    </div>
  </div>

  <div class="container">
    <div class="staff">
      <h4>{{ $t('employee') }}</h4>
      <StaffCard
        :plus-visible="true"
        @get-id="openPopup"
        :employees="organizationStore.employees"
      />
      <p v-if="allStaff" class="all__staff">{{$t('barbershopPageAllEmployee')}}</p>
    </div>
    <div class="services">
      <h4>{{$t('barbershopPageAllServices')}}</h4>
      <card/>
      <card/>
      <card/>
      <card/>
    </div>
  </div>
  <NavigationBar></NavigationBar>
  <Sidebar
    v-model:visible="firstTab"
    position="bottom"
    class="sidebar"
    close-icon="pi pi-minus"
  >
    <StaffCard
      :employees="[chosenEmployee]"
    />
    <NotificationCard title="Xizmatlar" :description="servicesText" :callback="toServiceTab"/>
    <NotificationCard title="Kun va vaqti" :description="selectedDate || 'Не выбрано'" :callback="toDateTab" />
    <Button v-if="selectedServices.length && selectedDate.length" @click="confirmOrder">{{ $t('confirmButton') }}</Button>
  </Sidebar>
  <Sidebar
    v-model:visible="serviceTab"
    position="bottom"
    class="sidebar"
    close-icon="pi pi-minus"
  >
    <ServiceCardWithoutImage
      @exit="toFirstTab"
      @complete="services => selectedServices = services"
    />
  </Sidebar>
  <Sidebar
    v-model:visible="dateTab"
    position="bottom"
    class="sidebar"
    close-icon="pi pi-minus"
  >
    <OrderDate @exit="toFirstTab" @confirm="time => selectedDate = time" />
  </Sidebar>
  <AuthPhone @close="phoneDialog = false" :visible="phoneDialog" />
</template>

<script setup lang="ts">
import {computed, ref} from "vue"
import { useOrganizationStore } from "@/store/organizationStore.ts"
import NotificationCard from "@/components/NotificationCard/NotificationCard.vue";
import "./BarbershopPage.css"
import ServiceCardWithoutImage from "@/components/ServiceCardWithoutImage/ServiceCardWithoutImage.vue";
import OrderDate from "@/components/OrderDate/OrderDate.vue";
import axios from "axios";
import {useAuthStore} from "@/store/authStore.ts";
import AuthPhone from "@/components/Auth/AuthPhone.vue";
import {apiUrl} from "@/main.ts";

const organizationStore = useOrganizationStore()
const userStore = useAuthStore()

const allStaff = ref(true)
const firstTab = ref(false)
const serviceTab = ref(false)
const dateTab = ref(false)
const selectedServices = ref([])
const selectedDate = ref('')
const plusVisible = ref(false)
const chosenEmployee = ref(null)
const phoneDialog = ref(false)

const servicesText = computed(() => {
  if (!selectedServices.value.length) return 'Ничего не выбрано'

  return selectedServices.value.map(service => service.name).join(', ')
})
const openPopup = (id: number) => {
  firstTab.value = true
  chosenEmployee.value = organizationStore.employees.find(r => r.id === id)
}
const toServiceTab = () => {
  serviceTab.value = true
  firstTab.value = false
}
const toDateTab = () => {
  dateTab.value = true
  firstTab.value = false
}
const toFirstTab = () => {
  serviceTab.value = false
  dateTab.value = false
  firstTab.value = true
}

const confirmOrder = () => {
  if (!selectedServices.value.length || !selectedDate.value) return

  if (!userStore.user.phone) return phoneDialog.value = true

  const data = {
    employee_id: chosenEmployee.value.id,
    start_time: selectedDate.value,
    organization_id: organizationStore.organization.id,
    added_by: 1,
    service_ids: selectedServices.value.map(service => service.id),
    client_info: {
      full_name: userStore.user.full_name,
      phone: userStore.user.phone,
    }
  }

  axios.post(`${apiUrl}/organization/${organizationStore.organization.id}/order`, data)
    .then(() => {
      selectedDate.value = ''
      selectedServices.value = []
      firstTab.value = false
    })
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
