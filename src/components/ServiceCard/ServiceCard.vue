<script>
    import "./ServiceCard.css";
    import Card from "./card.vue";
    export default{
        components:{Card},
    }
</script>

<template>
    <div class="all">
        <header>
            <a href="#" class="icons"><img src="/src/assets/icons/back-icon.svg" alt="Back-icon"></a>
            <h2>Xizmat tanlash</h2>
        </header>
        <h4>Asosiy xizmatlar</h4>
        <div class="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <h4>Qo’shimcha xizmatlar</h4>
        <div class="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <button class="reserve">Tasdiqlash</button>
    </div>
</template>

<style scoped></style>