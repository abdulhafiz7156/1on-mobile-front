<script>
import HeaderPages from "../../components/HeaderPages/HeaderPages.vue";
import Button from "../../components/Button/Button.vue";
import {ref} from "vue"
export default {
  components: {HeaderPages, Button},
  setup(){
    const stars = ref(null)
    const textarea = ref(null)
    return {
      stars,
      textarea,
    }
  }
}
</script>

<template>
<div class="order">
    <div class="ifnone">
        <HeaderPages>{{$t('rateOrder')}}</HeaderPages>
        <main>
            <div class="info">
                <div id="status" class="df__jcc__aic">{{$t('statusCompleted')}}</div>
                <div class="status_date">
                    <h5>14-Fevral: 12:30 da</h5>
                    <h4>Topor barbershop</h4>
                    <p>Xizmat: Soch turmagi, Soqol olish</p>
                    <p>{{$t('barber')}}: Farrux</p>
                </div>
            </div>
            <div>
                <h4>Baholang</h4>
                <div class="stars">
                  <Rating v-model="stars" :cancel="false" />
                </div>
                <div class="person-rev">
                    <div class="input-container">
                      <Textarea v-model="textarea" variant="filled" rows="5" cols="30" :placeholder="$t('rateOrderLeaveReview')" />
                    </div>
                </div>
            </div>
            <div class="order__rate__images">
              <h4>Suratlar</h4>
              <div class="order__rate__file__uploaders df">
                <FileUpload class="order__rate__file__uploader" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" upload-icon="pi pi-plus" />
                <FileUpload class="order__rate__file__uploader" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" upload-icon="pi pi-plus" />
                <FileUpload class="order__rate__file__uploader" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" upload-icon="pi pi-plus" />
                <FileUpload class="order__rate__file__uploader" mode="basic" name="demo[]" url="/api/upload" accept="image/*" :maxFileSize="1000000" upload-icon="pi pi-plus" />
              </div>
            </div>
          <Button>{{ $t('confirmButton') }}</Button>
        </main>
    </div>
</div>
</template>

<style>
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
    font-size: 12px;
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

.order__rate__file__uploader span {
  width: 154px;
  height: 205px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9CCBFB;
}

.order__rate__file__uploader span:before {
  background: #272A2F;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.order__rate__file__uploader {
  background: #323539;
  border:none;
  border-radius: 28px;
  margin-right: 6px;
}

.order__rate__file__uploaders{
  width: 94vw;
  overflow-x: scroll;
}

.p-button-label {
  display: none !important;
}

.order__rate__images h4 {
  margin: 10px 0;
}
</style>