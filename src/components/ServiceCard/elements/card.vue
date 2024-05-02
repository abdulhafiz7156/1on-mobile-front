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
       <img src="/src/assets/images/Thumbnail.svg" alt="" width="56px" height="56px">
       <p><b>Soch turmagi</b><br> 30 min | 150 000 so’m</p>
       <img @click="addOrDelete" :src="imageUrl" alt="">
    </div>
</template>

<style scoped></style>