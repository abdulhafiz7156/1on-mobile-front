<script setup lang="js">

</script>

<template>
    <div id="all">
        <header>
            <a href="#" class="icons mr"><img src="/src/assets/icons/back-icon.svg" alt="Back-icon"></a>
            <a href="#" class="icons"><img src="/src/assets/icons/message-icon.svg" alt="Message"></a>
            <button class="icons"><img src="/src/assets/icons/share-icon.svg" alt="Share"></button>
        </header>
        <div class="info">
            <img src="/src/assets/images/avatar.svg" alt="Avatar" class="avatar">
            <h2>Ja’far Rahimov</h2>
            <div class="df img__rate">
                <img src="/src/assets/icons/star-icon.svg">
                <p> <span>(4.6)</span> Barber</p>
            </div>
            <div class="br-services">
                <h3>Ko’rsatadigan xizmatlari</h3>
                <img src="/src/assets/icons/arrow-right-icon.svg">
                <p>Soqol olish, Soch turmagi</p>
            </div>
        </div>
        <h3 class="h3">Fikrlar</h3>
        <div class="reviews" id='v-for="(el,index) in array" :key="index"' > 
            <div class="person-rev">
                <b>M</b>
                <h3>Mamurov Ismoilbek</h3>
                <p>Supporting line text lorem ipsum dolor sit amet, consectetur.</p>
                <img class="img" src="/src/assets/icons/5-stars-icon.svg">
            </div>
        </div>
        <div class="person-rev">
            <b>M</b>
            <h3>Mamurov Ismoilbek</h3>
            <p>Supporting line text lorem ipsum dolor sit amet, consectetur.</p>
            <img class="img" src="/src/assets/icons/5-stars-icon.svg">
        </div>
        <button class="reserve">Bron qilish</button>
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    font-weight: 400;
    color: #E3E1E9;
    background: transparent;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}
#all{
    width: 345px;
    display: grid;
    justify-items: center;
}
.h3{
    margin-left: -288px;
}
header{
    display: flex;
    padding: 12px 4px;
}
.info{
    display: flex;
    align-items: center;
    flex-direction: column;
}
.img__rate{
    align-items: center;
}
.img__rate p{
    margin-left: 8px;
}
.img__rate span{
    margin-right: 8px;
}
.avatar{
    width: 100px;
    height: 100px;
    margin-bottom: 16px;
}
.info h2{
    margin-bottom: 16px;
}
.br-services{
    width: 343px;
    height: 88px;
    display: flex;
    flex-wrap: wrap;
    border-radius: 12px;
    background-color: #181C20;
    margin: 29px auto 24px auto;
    padding: 12px 16px 24px 16px;
    justify-content: space-between;
}
.reviews{
    display: block;
}
.reserve{
    width: 345px;
    height: 48px;
    border: none;
    font-size: 14px;
    font-weight: 500;
    color: #003354;
    border-radius: 100px;
    background: #9CCBFB;
}
.reserve:active{
    background: #96bbe0;
    transform: scale(0.95);
}
.br-services img{
    width: 24px;    
    height: 24px;
    margin-left: 24px;
}
.icons{
    margin: 0;
    padding: 0;
    width: 48px;
    height: 48px;
    border: none;
}
a:active,header button:active{
    border-radius: 100%;
    background-color: rgba(59, 59, 59, 0.438);
}
.person-rev{
    display: flex;
    width: 343px;
    border-radius: 12px;
    background-color: #181C20;
    margin: 10px ;
    padding: 12px 16px 24px 16px;
    flex-wrap: wrap;
}
.mr{
    margin-right: 225px;
}
p{
    color: #C2C7CF;
    font-size: 14px;
    font-weight: 300;
}
.person-rev h3{
    margin: 10px 15px;
}
.person-rev p{
    font-size: 14px;
    font-weight: 400;
    margin: 8px 20px 8px 55px;
}
b{
    width: 40px;
    height: 40px;
    border-radius: 100px;
    display: flex;
    align-items:center ;
    justify-content: center;
    background:#104A73;
}
.img{
    margin-left: 55px;
}
</style>