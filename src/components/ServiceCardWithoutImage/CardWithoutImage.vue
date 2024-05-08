<script>
    export default{
      props: {
        services: Array
      },
       setup(){

       }
    }
</script>

<template>
  <div class="card__without__image__cards">
    <div class="card_2" v-for="service in services">
      <div>
        <p>{{ service.name }}</p>
        <p>{{service.time}} {{$t('minute')}} | {{service.price}} {{$t('currency')}} </p>
      </div>
      <img src="/src/assets/icons/minus.svg" alt="My Image" />
    </div>
  </div>
</template>

<style scoped></style>