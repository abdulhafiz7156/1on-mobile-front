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
      <HeaderPages>Xizmat tanlash</HeaderPages>
      <h4>Asosiy xizmatlar</h4>
        <div class="cards_2">
            <CardWI/>
            <CardWI/>
            <CardWI/>
            <CardWI/>
        </div>
        <h4>Qo’shimcha xizmatlar</h4>
        <div class="cards_2">
            <CardWI/>
            <CardWI/>
            <CardWI/>
            <CardWI/>
        </div>
        <Button>Tasdiqlash</Button>
    </div>
</template>

<style scoped></style>