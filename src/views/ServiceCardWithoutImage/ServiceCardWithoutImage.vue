<script setup lang="ts">
import "./ServiceCardWithoutImage.css";
import { useOrganizationStore } from "../../store/organizationStore";
import { useOrderStore } from "../../store/orderStore";
import { ref} from "vue";
import CardWithoutImage from "@/components/ServiceCardWithoutImage/CardWithoutImage.vue";

const data = useOrganizationStore()
const orderStore = useOrderStore()
const totalTime = ref(0)

const sendTime = () => {
  orderStore.setServicesTime(totalTime.value);
}
</script>

<template>
    <div class="all">
      <HeaderPages>{{$t('ServiceCardWithoutImageChoiceService')}}</HeaderPages>
      <h4>{{$t('barbershopPageAllServices')}}</h4>
        <div class="cards_2">
            <CardWithoutImage
              :services="data.services"
              :total-time="totalTime"
              @change-time="(time: number) => totalTime = time"
            />
        </div>
        <Button @click="sendTime">{{$t('confirmButton')}}</Button>
    </div>
</template>

<style scoped></style>