<script>
    import "./ServiceCardWithoutImage.css";
    import CardWI from "../../components/ServiceCardWithoutImage/CardWithoutImage.vue";
    import Button from "../../components/Button/Button.vue";
    import {useOrganizationStore} from "../../store/organizationStore";
    import {useOrderStore} from "../../store/orderStore";
    export default{
        components:{CardWI, Button},
        setup() {
          const data = useOrganizationStore()
          const orderStore = useOrderStore()

          const sendTime = (time) => {
              orderStore.setServicesTime(totalTime.value);
          }

          return {
            data,
            sendTime,
          }
        }
    }
</script>

<template>
    <div class="all">
      <HeaderPages>{{$t('ServiceCardWithoutImageChoiceService')}}</HeaderPages>
      <h4>{{$t('barbershopPageAllServices')}}</h4>
        <div class="cards_2">
            <CardWI :services="data.services"/>
        </div>
<!--        <h4>{{$t('ServiceCardWithoutImageAdditionalServices')}}</h4>-->
<!--        <div class="cards_2">-->
<!--            <CardWI/>-->
<!--            <CardWI/>-->
<!--            <CardWI/>-->
<!--            <CardWI/>-->
<!--        </div>-->
        <Button @click="sendTime">{{$t('confirmButton')}}</Button>
    </div>
</template>

<style scoped></style>