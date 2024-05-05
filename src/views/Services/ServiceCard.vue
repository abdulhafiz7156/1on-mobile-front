<script>
    import "./ServiceCard.css";
    import Card from "../../components/ServiceCard/card.vue";
    import Button from "../../components/Button/Button.vue";
    import HeaderPages from "../../components/HeaderPages/HeaderPages.vue";

    export default{
        components:{HeaderPages, Card},
    }
</script>

<template>
    <div class="all">
        <HeaderPages>{{$t('ServiceCardWithoutImageChoiceService')}}</HeaderPages>
        <h4>{{$t('barbershopPageAllServices')}}</h4>
        <div class="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <h4>{{$t('barbershopPageAllServices')}}</h4>
        <div class="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
      <Button>{{$t('confirmButton')}}</Button>
    </div>
</template>

<style scoped></style>