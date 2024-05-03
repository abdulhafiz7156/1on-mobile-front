<script>
export default {
  data() {
    return {
        imageUrl:'',
        popupStatus: false,
    };
  },
  methods: {
    openPopup(num) {
        if(num === 1){
            this.imageUrl = '/src/assets/images/Item-1.png'
        }else if(num === 2){
            this.imageUrl = '/src/assets/images/Item-2.png'
        }else if(num === 3){
            this.imageUrl = '/src/assets/images/Item-3.png'
        }
        this.popupStatus = true;
    },closePopup(){
        const ifNone = document.getElementsByClassName('ifnone');
        ifNone.style = 'display: block;'
        this.popupStatus = false
    }
  },
};
</script>

<template>
<div class="order">
    <div class="ifnone">
        <main>
            <div class="info">
                <div id="status" class="df__jcc__aic">Yakunlangan</div>
                <div class="status_date">
                    <h5>14-Fevral: 12:30 da</h5>
                    <h4>Topor barbershop</h4>
                    <p>Xizmat: Soch turmagi, Soqol olish</p>
                    <p>Barber: Farrux</p>
                </div>
            </div>
            <div>
                <h4>Fikrlar</h4>
                <div class="person-rev">
                    <div class="df">
                        <b class="df__jcc__aic" >M</b>
                        <div>
                            <h3>Mamurov Ismoilbek</h3>
                            <p>Supporting line text lorem ipsum dolor sit amet, consectetur.</p>
                        </div>
                    </div>
                    <div>
                        <img class="img" src="/src/assets/icons/5-stars-icon.svg">
                    </div>
                </div>
            </div>
            <div class="images">
                <h4>Suratlar</h4>
                <div class="df images-el">
                    <img src="/src/assets/images/Item-1.png" @click="openPopup(1)" width="154px">
                    <img src="/src/assets/images/Item-2.png" @click="openPopup(2)" width="154px">
                    <img src="/src/assets/images/Item-3.png" @click="openPopup(3)" width="154px">
                </div>
            </div>
        </main>
    </div>
    <div class="fullscreen-image" v-if="popupStatus">
        <button @click="popupStatus = false"><i class="pi pi-arrow-left"></i></button>
        <button><i class="pi pi-trash"></i></button>
        <div :style="{ backgroundImage: 'url(' + imageUrl + ')' }"></div>
        <p>Yangicha turmag</p>
        <!-- <img :src="imageUrl" alt="Полноэкранное изображение"> -->
    </div>
</div>
</template>

<style scoped>
.order{
    margin: 16px;
}
.fullscreen-image {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999; 
    position: fixed;
    background-color: #000; 
}
.fullscreen-image div {
    top: 0;
    left: 0;
    width: 96%;
    height: 96%;
    margin: 10px;
    z-index: 1000;    
    position: fixed;
    border-radius: 16px;
    background-size: cover;
    background-position: center;
}
.fullscreen-image button {
    top: 33px;
    left: 25px;
    border: none;
    z-index: 1001; 
    width: 40px;
    height: 40px;
    position: absolute;
    border-radius: 100px;
    background: #003354;
}
.fullscreen-image p{
    font-size: 16px;
    font-weight: 500;
    left: 25px;
    bottom: 35px;
    z-index: 1002;
    position: absolute;
}
.fullscreen-image button:nth-child(2){
    left: auto;
    right: 30px;
}
main h4{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
}
.popup img{
    width:100vw;
    height: 100vh;
}
header i{
    margin-right:20px ;
}
header h4{
    font-size: 16px;
    font-weight: 500;
}
.images{
    margin-top: 24px;
    overflow-x: scroll;  
}
.images div img{
    border-radius: 28px;
    margin: 16px 8px 16px 0px;
}    
#status{
    width:93px;
    height:28px;
    font-size: 11px;
    font-weight: 500;
    border-radius: 8px;
    background: #42474E;
}
b{
    min-width: 40px;
    height: 40px;
    border-radius: 100px;
    background:#104A73;
}
.person-rev{
    width: 98%;
    flex-wrap: wrap;
    margin-top: 10px;
    padding: 12px 16px;
    border-radius: 12px;
    background-color: #181C20;
}
.person-rev div h3{
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.5px;
    margin: 10px 15px;
}
.person-rev div p{
    font-size: 14px;
    font-weight: 400;
    margin: 8px 16px;
}
.person-rev>div:last-child{
    margin-left: 56px;
}
.status_date{
    margin:8px 0px 24px 0px ;
}
.status_date h5{
    font-size: 12px;
    font-weight: 500;
    color: #C2C7CF;
    margin-bottom: 8px;
}
.status_date h4{
    font-size: 16px;
    font-weight: 400;
    color: #E0E2E8;
    margin-bottom: 8px;
}
.status_date p{
    font-size: 14px;
    font-weight: 400;
    color: #C2C7CF;
    margin-bottom: 2px;
}
</style>