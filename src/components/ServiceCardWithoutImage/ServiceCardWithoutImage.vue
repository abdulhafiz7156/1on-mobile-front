<script>
    import "./ServiceCardWithoutImage.css";
    import CardWI from "./elements/CardWithoutImage.vue";
    export default{
        components:{CardWI},
    }
</script>

<template>
    <div class="all">
        <header>
            <a href="#" class="icons"><img src="/src/assets/icons/back-icon.svg" alt="Back-icon"></a>
            <h2>Xizmat tanlash</h2>
        </header>
        <h3>Asosiy xizmatlar</h3>
        <div class="cards_2">
            <CardWI/>
            <CardWI/>
            <CardWI/>
            <CardWI/>
        </div>
        <h3>Qo’shimcha xizmatlar</h3>
        <div class="cards_2">
            <CardWI/>
            <CardWI/>
            <CardWI/>
            <CardWI/>
        </div>
    </div>
</template>

<style scoped></style>