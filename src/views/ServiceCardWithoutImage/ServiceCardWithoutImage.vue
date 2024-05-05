<script>
    import "./ServiceCardWithoutImage.css";
    import CardWI from "../../components/ServiceCardWithoutImage/CardWithoutImage.vue";
    import Button from "../../components/Button/Button.vue";
    export default{
        components:{CardWI},
    }
</script>

<template>
    <div class="all">
      <HeaderPages>$t('ServiceCardWithoutImageChoiceService')</HeaderPages>
      <h4>{{$t('barbershopPageAllServices')}}</h4>
        <div class="cards_2">
            <CardWI/>
            <CardWI/>
            <CardWI/>
            <CardWI/>
        </div>
        <h4>{{$t('ServiceCardWithoutImageAdditionalServices')}}</h4>
        <div class="cards_2">
            <CardWI/>
            <CardWI/>
            <CardWI/>
            <CardWI/>
        </div>
        <Button>{{$t('confirmButton')}}</Button>
    </div>
</template>

<style scoped></style>