<template>
  <Toast />
  <HeaderPages :cancelable="true" @exit="$emit('exit')">{{$t('orderDateChoiceTime')}}</HeaderPages>
  <div>
    <h4 class="calendar__title">{{$t('orderDateChoiceDay')}}</h4>
    <div class="calendar">
      <div class="calendar__choice__day">{{formattedDate ? formattedDate : today}}</div>
      <Calendar v-model="date" dateFormat="dd/mm/yy" inline id="calendar" @date-select="handleCalendarChanges($event)"/>
    </div>
  </div>
  <div v-if="orderStore.freeTimes && date">
    <h4>{{$t('orderDateChoiceTime')}} </h4>
    <div class="calendar__time df">
      <div
        v-for="(times, index) in orderStore.freeTimes"
        :key="index"
        :class="times === selectedTime ? 'active' : ''"
        @click="selectedTime = times"
      >
        {{times}}
      </div>
    </div>
  </div>
  <Button v-if="selectedTime && date" @click="onConfirm">{{$t('confirmButton')}}</Button>
</template>

<script setup lang="ts">
import "./OrderDate.css"
import HeaderPages from "@/components/HeaderPages/HeaderPages.vue";
import { computed, onMounted, ref } from "vue";
import { useOrderStore } from "@/store/orderStore.ts";
import Toast from 'primevue/toast';

const emit = defineEmits<{
  (event: 'exit'): void,
  (event: 'confirm', time: string): void,
}>()


const date = ref(null)
const options = { weekday: 'short', month: 'short', day: 'numeric' };
const today = ref(new Date())
const selectedDate = ref('')
const selectedTime = ref('')
const orderStore = useOrderStore()

const handleCalendarChanges = () => {
  const year = date.value.getFullYear();
  const month = (date.value.getMonth() + 1).toString().padStart(2, '0');
  const day = date.value.getDate().toString().padStart(2, '0');
  selectedDate.value = `${year}-${month}-${day}`;

  orderStore.getTimeSlot(selectedDate.value);
}

const formattedDate = computed(() => {
  if (!date.value) return '';
  return date.value.toLocaleDateString('en-US', options);
})

const onConfirm = () => {
  const time = `${selectedDate.value} ${selectedTime.value}`
  console.log(time)
  emit('confirm', time)
  emit('exit')
}

onMounted(() => {
today.value = today.value.toLocaleDateString('en-US', options)
})
</script>

<style scoped>

</style>