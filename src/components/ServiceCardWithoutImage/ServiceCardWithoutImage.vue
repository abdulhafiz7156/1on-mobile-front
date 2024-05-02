<script>
    import "./ServiceCardWithoutImage.css";
    import CardWI from "./CardWithoutImage.vue";
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
    </div>
</template>

<style scoped></style>