<template>
  <Header v-if="data.organization">{{ data.organization.name }}</Header>

  <div class="barbershop__image__address">
    <div class="barbershop__image">
      <h3 v-if="data.organization">{{data.organization.name}} | {{data.organization.address}}</h3>
      <p>Supporting Text</p>
    </div>
  </div>

  <div class="container">
    <div class="staff">
      <h4>{{ $t('employee') }}</h4>
      <StaffCard
        :plus-visible="true"
        @get-id="openPopup"
        :employees="data.employees"
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
  <div>
    <div class="card flex justify-content-center">
      <Sidebar
        v-model:visible="visibleTop"
        position="bottom"
        class="sidebar"
        close-icon="pi pi-minus"
      >
        <StaffCard
          :employees="choosenEmployee"
        />
        <NotificationCard :data="data.services" title="Xizmatlar" :service="true"/>
        <NotificationCard  title="Kun va vaqti" description="12-Sentabr 2024, 12:00" :service="false" />
        <Button>{{ $t('confirmButton') }}</Button>
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
import { useOrganizationStore } from '../../store/organizationStore.ts'

export default {
  components: {NotificationCard, card, StaffCard, NavigationBar, Header, Button},
  setup() {
    const allStaff = ref(true)
    const visibleTop = ref(false)
    const plusVisible = ref(false)
    const data = useOrganizationStore()
    const choosenEmployee = ref(null)
    const openPopup = (id) => {
      visibleTop.value = true
      choosenEmployee.value = data.employees.filter(r => r.id === id)
    }
    return {
      allStaff,
      visibleTop,
      plusVisible,
      openPopup,
      choosenEmployee,
      data
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
