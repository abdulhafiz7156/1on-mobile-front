<template>
  <div class="order__card">
    <div class="order__card__text df">
      <div class="order__card__img">
        <img src="../../assets/images/barbershop.png" alt="">
      </div>
      <div class="order__card__title__time">
        <div class="order__card__time df">
          <p>Bugun: 12:30 da</p>
          <div class="order__card__time__status confirmed">Tasdiqlangan</div>
        </div>
        <div class="order__card__title">
          <h4>Topor barbershop</h4>
          <p>Xizmat: Soch turmagi, Soqol olish </p>
          <p>Barber: Farrux</p>
        </div>
      </div>
    </div>
    <div class="order__card__button df" v-if="buttonVisible">
      <button @click="visibleTop = true">Bekor qilish</button>
      <button>Ozgartirish</button>
    </div>
  </div>
  <Sidebar v-model:visible="visibleTop" position="bottom"
           class="sidebar"
           close-icon="pi pi-minus"
  >
  </Sidebar>


</template>

<script>
import { ref } from "vue";

export default {
  name: "OrderCard",
  props: {
    buttonVisible: Boolean,
  },
  setup() {
    const visibleTop = ref(false);
    return {
      visibleTop,
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
</style>