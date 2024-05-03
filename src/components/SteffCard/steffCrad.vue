<script>

</script>

<template>
    <div class="card-all">
        <div class="df top">
            <div class="df">
                <b>M</b>
                <div>
                    <h4>Ja’far Rahimov</h4>
                    <div class="df img__rate">
                        <img src="/src/assets/icons/star-icon.svg" width="20px" height="20px">
                        <p> <span>(4.6)</span> Barber</p>
                    </div>
                </div>
            </div>
            <div class="df__jcc__aic">
                <img src="/src/assets/icons/plus.svg" alt="+">
            </div>
        </div>
        <div class="df bottom">
            <div>
                <div class="a">Navbat soni: 5</div>
            </div>
            <div class="df">
                <div class="b df__jcc__aic">9:00</div>
                <div class="b df__jcc__aic">9:00</div>
                <div class="b df__jcc__aic">9:00</div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .card-all{
        width: 100%;
        height: 115px;
        border-radius: 12px;
        background: #1C2024;
        padding: 16px;
    }
    .top{
        margin-bottom: 18px;
        justify-content: space-between;
    }
   
    .img__rate{
        margin-top: 6px;
        align-items: center;
    }
    .img__rate p{
        font-size: 12px;
        margin-left: 8px;
    }
    .img__rate span{
        margin-right: 8px;
    }
    b{
        min-width: 40px;
        height: 40px;
        display: flex;
        align-items:center;
        margin-right: 16px;
        border-radius: 100px;
        justify-content: center;
        background:#104A73;
    }
    .a{
        height:24px;
        font-size: 12px;
        border-radius: 30px;
        padding:4px 12px 4px 4px;
        border: 1px solid #8C9199;
    }
    .b{
        width: 50px;
        height: 23px;
        font-size: 12px;
        margin-left: 5px;
        border-radius: 8px;
        background: #3A4857;
    }
</style>