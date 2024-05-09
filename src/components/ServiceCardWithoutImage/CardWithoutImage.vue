<script setup lang="ts">
import { ref } from 'vue'
import { ServiceI } from "@/types/interfaces.ts";
const changeIcon = ref(['pi pi-plus', 'pi pi-plus', 'pi pi-plus'])
const addedServices = ref([])
const addedTime = ref([])

const props = defineProps<{
  services: ServiceI[],
  totalTime: number,
}>()

const emit = defineEmits<{(e: 'changeTime', time: number)}>()

const addStore = (index, id) => {
  changeIcon.value[index] = changeIcon.value[index] === 'pi pi-plus' ? 'pi pi-minus' : 'pi pi-plus';
  addedServices.value.push(props.services.find(service => service.id === id));
  addedTime.value = [];
  addedServices.value.forEach(item => {
    addedTime.value.push(item.time);
  });
  emit('changeTime', addedTime.value.reduce((acc, curr) => acc + curr, 0))
}
</script>

<template>
  <div class="card__without__image__cards">
    <div class="card_2" v-for="(service, index) in services" @click="addStore(index, service.id)">
      <div>
        <p>{{ service.name }}</p>
        <p>{{service.time}} {{$t('minute')}} | {{service.price}} {{$t('currency')}} </p>
      </div>
      <i :class="changeIcon[index]" ></i>
    </div>
  </div>
</template>

<style scoped></style>