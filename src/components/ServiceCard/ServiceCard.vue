<script>
    import "./ServiceCard.css";
    import Card from "./elements/card.vue";
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
        <h3>Asosiy xizmatlar</h3>
        <div class="cards">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
        <h3>Qo’shimcha xizmatlar</h3>
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