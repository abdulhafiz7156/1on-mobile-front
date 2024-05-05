<template>
  <div class="order__card">
    <div class="order__card__text df">
      <div class="order__card__img">
        <img src="../../assets/images/barbershop.png" alt="">
      </div>
      <div class="order__card__title__time">
        <div class="order__card__time df">
          <p>{{$t('orderCardTime')}} 12:30</p>
          <div class="order__card__time__status confirmed">{{ $t('statusConfirmed') }}</div>
        </div>
        <div class="order__card__title">
          <h4>Topor barbershop</h4>
          <p>Xizmat: Soch turmagi, Soqol olish</p>
          <p>Barber: Farrux</p>
        </div>
      </div>
    </div>
    <div class="order__card__button df" v-if="buttonVisible">
      <button @click="visibleTop = true">{{$t('orderCardCancelButton')}}</button>
      <button @click="visibleTopEdit = true">{{$t('orderCardEditButton')}}</button>
    </div>
  </div>
  <Sidebar v-model:visible="visibleTop" position="bottom"
           class="sidebar"
           close-icon="pi pi-minus"
           style="height: 70%;"
  >
    <NotificationCard />
    <p class="sidebar__p">{{$t('orderCardWhyCancel')}}</p>

    <Dropdown v-model="selectedCity" :options="cities" optionLabel="name" :placeholder="$t('orderCardCancelReason')" class="w-full md:w-14rem custom__dropdown " />

    <div class="df order__card__buttons">
      <Button>{{$t('orderCardCancelButton')}}</Button>
      <Button @click="visibleTop = false">{{$('orderCardBacktoBack')}}</Button>
    </div>

  </Sidebar>
  <Sidebar v-model:visible="visibleTopEdit" position="bottom"
           class="sidebar"
           close-icon="pi pi-minus"
           style="height: 70%;"
  >
    <StaffCard/>
    <NotificationCard />
    <NotificationCard />
    <Button @click="visibleTopEdit = false">{{ $t('confirmButton') }}</Button>
  </Sidebar>

</template>

<script>
import { ref } from "vue";
import Button from "../Button/Button.vue";
import StaffCard from "../StaffCard/staffCard.vue";
import NotificationCard from "../NotificationCard/NotificationCard.vue";

export default {
  name: "OrderCard",
  components: {NotificationCard, StaffCard, Button},
  props: {
    buttonVisible: Boolean,
  },
  setup() {
    const visibleTop = ref(false);
    const visibleTopEdit = ref(false);
    const selectedCity = ref(null);
    const cities = ref([
        {"name": "Vaqtim yoq", "value": "0"},
        {"name": "Ish chiqib qoldi", "value": "1"},
    ]);
    return {
      visibleTop,
      visibleTopEdit,
      selectedCity,
      cities
    }

  }
}
</script>

<style scoped>
  .order__card {
    margin: 14px 0;

  }

  .order__card__text img {
    width: 55px;
    height: 60px;
    border-radius: 10px;
  }
  .order__card__title__time {
    width: 80%;
  }

  .order__card__text {
    justify-content: space-between;
    align-items: center;
  }

  .order__card__text {
    background-color: #272A2F;
    padding: 12px 16px;
    border-radius: 12px;
  }

  .order__card__text p {
    color: #C2C7CF;
    font-size: 14px;
    margin: 5px 0px;
  }

  .order__card__time__status{
    font-size: 14px;
    margin-left: 15px;
    padding: 5px 10px;
    border-radius: 8px;
  }

  .confirmed {
    background: #42474E;
    border: 1px solid #3E434A;
  }

  .waiting {
    background: #FFDE9D;
    color: #D97730;
  }

  .canceled {
    background: #FFDAD6;
    color: #4E0002;
    border: 1px solid #4E0002;
  }

  .order__card__title h4{
    color: #E0E2E8;
    margin: 10px 0;
  }

  .order__card__time {
    align-items: center;
  }

  .order__card__button {
    justify-content: space-between;
    margin: 20px 0;
  }

  .order__card__button button{
    background: #FFDAD6;
    border: none;
    border-radius: 100px;
    font-size: 14px;
    width: 48%;
    height: 48px;
    padding: 10px 24px 10px 24px;
    font-weight: 600;
  }

  .order__card__button button:first-child{
    color: #BA1A1A;
  }

  .order__card__button button:last-child{
    background: #9CCBFB;
    color: #003354;
  }

  .sidebar .notification__card {
    background: #101418;
  }

  .sidebar__p {
    text-align: center;
    margin: 25px 0;
  }

  .custom__dropdown {
    width: 100%;
    padding: 20px;
    background: #323539;
    outline: none;
  }
  .sidebar div {
    justify-content: space-between;
  }
  .order__card__buttons button {
    width: 48%;
  }
  .sidebar div button:first-child {
    background: #FFDAD6;
    color: #BA1A1A;
  }
  .sidebar .card-all {
    background: #101418;
  }

</style>