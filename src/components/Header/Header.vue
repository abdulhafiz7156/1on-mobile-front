<template>
  <div class="header">
    <div class="header__menu__burger">
      <img src="../../assets/icons/menu__burger.svg" alt="Menu burger icon">
<!--      you can add here click event to image-->
    </div>
    <div class="header__title">
      <p>{{title}}</p>
    </div>
    <div class="header__notifications">
      <img src="../../assets/icons/notification.svg" alt="Notification icon">
      <!--      you can add here click event to image-->
    </div>
  </div>
</template>

<script>
import "./Header.css"

export default {
  props: {
    title: String
  },
  setup(){


  }
}
</script>