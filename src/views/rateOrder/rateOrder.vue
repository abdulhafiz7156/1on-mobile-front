<script>

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
                <h4>Baholang</h4>
                <div class="stars">
                    <span class="pi pi-star"></span>
                    <span class="pi pi-star"></span>
                    <span class="pi pi-star"></span>
                    <span class="pi pi-star"></span>
                    <span class="pi pi-star"></span>
                </div>
                <div class="person-rev">
                    <div class="input-container">
                        <textarea placeholder="Fikringizni qoldiring" maxlength="235"></textarea>
                    </div>
                </div>
            </div>
        </main>
    </div>
</div>
</template>

<style scoped>

.stars{
    margin: 12px 0px 27px 0px;
}
.stars span{
    margin-right: 6px;
    font-size: 1.87rem;
}
.order{
    margin: 12px;
}
main h4{
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
} 
#status{
    width:93px;
    height:28px;
    font-size: 11px;
    font-weight: 500;
    border-radius: 8px;
    background: #42474E;
}

.person-rev textarea{
    width: 100%; 
    border: none;
    outline: none; 
    height: 100px;
    font-size: 16px;
    resize: vertical;
    color: #E0E2E8;
    padding: 8px 16px;
    background: #323539;
    border-radius: 4px 4px 0px 0px;
    border-bottom: white 0.1px solid;
}
.status_date{
    color: #C2C7CF;
    margin:8px 0px 24px 0px ;
}
.status_date h5{
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 8px;
}
.status_date p{
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 2px;
}
.status_date h4{
    font-size: 16px;
    font-weight: 400;
    color: #E0E2E8;
    margin-bottom: 8px;
}
</style>