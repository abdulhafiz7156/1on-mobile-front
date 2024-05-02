<script>
    export default{
        data(){
            return{
                imageUrl:"/src/assets/icons/plus.svg",
            }
        },methods:{
            addOrDelete(){
                if(this.imageUrl === "/src/assets/icons/plus.svg"){
                    this.imageUrl = "/src/assets/icons/minus.svg"
                }else{
                    this.imageUrl = "/src/assets/icons/plus.svg"
                }
            }
        }
    }
</script>

<template>
   <div id="card">
     <div class="df">
        <img src="/src/assets/images/Thumbnail.svg" alt="" width="56px" height="56px">
        <div>
            <p>Soch turmagi</p>
            <p>45 min | 200 000 so’m</p>
        </div>
     </div>
        <img @click="addOrDelete" :src="imageUrl" alt="">
    </div>
</template>

<style scoped></style>