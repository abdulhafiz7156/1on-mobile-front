<template>
  <div class="header__pages">
    <div class="df__jcc__aic">
      <i class="bi bi-arrow-left"></i>
      <p><slot></slot></p>
    </div>
    <div class="header__pages__right">
      <i v-if="rightVisible" :class="rightIcon"></i>
      <i v-if="shareIcon" class="bi bi-share"></i>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    rightVisible: Boolean,
    rightIcon: String,
    shareIcon: Boolean,
  },
  name: "HeaderPages"
}
</script>

<style scoped>
.header__pages {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0px;
}

.header__pages i {
  font-size: 22px;
  margin-right: 10px;
}

.header__pages p {
  font-size: 22px;
  margin-left: 10px;
}
</style>