<template>
  <div class="container">
    <HeaderPages>Vaqt tanlash</HeaderPages>
    <div>
      <h4 class="calendar__title">Kunni tanlang</h4>
      <div class="calendar">
        <div class="calendar__choice__day">{{formattedDate ? formattedDate : today}}</div>
        <Calendar v-model="date" inline id="calendar" @date-select="hanldeCalendarChanges($event)"/>
      </div>
    </div>
    <div>
      <h4>Vaqtni tanlang</h4>
      <div class="calendar__time df">
        <div>8:30</div>
        <div>8:30</div>
        <div class="deactive__div">8:30</div>
        <div>8:30</div>
        <div>8:30</div>
        <div  class="deactive__div">8:30</div>
        <div>8:30</div>
        <div  class="deactive__div">8:30</div>
        <div>8:30</div>
        <div>8:30</div>
        <div  class="deactive__div">8:30</div>
        <div  class="deactive__div">8:30</div>
      </div>
    </div>
    <Button>Tasdiqlash</Button>
  </div>
</template>

<script>
import "./OrderDate.css"
import HeaderPages from "../../components/HeaderPages/HeaderPages.vue";
import {computed, ref} from "vue";

export default {
  name: "OrderDate",
  components: {HeaderPages},
  setup() {
    const date = ref(null)
    const today = ref(new Date())
    const options = { weekday: 'short', month: 'short', day: 'numeric' };
    today.value = today.value.toLocaleDateString('en-US', options)
    const formattedDate = computed(() => {
      if (!date.value) return '';
      return date.value.toLocaleDateString('en-US', options);
    });
    const hanldeCalendarChanges = () => {
      console.log(formattedDate)
    }


    return {
      date,
      today,
      formattedDate,
      hanldeCalendarChanges
    }
  }
}
</script>

<style scoped>

</style>