<template>
  <div class="header__pages">
    <div class="df__jcc__aic">
      <i class="bi bi-arrow-left" @click="redirectPreventPage()"></i>
      <p><slot></slot></p>
    </div>
    <div class="header__pages__right">
      <i v-if="rightVisible" :class="rightIcon" @click="$emit('redirectPage')"></i>
      <i v-if="shareIcon" class="bi bi-share"></i>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  props:{
    rightVisible: Boolean,
    rightIcon: String,
    shareIcon: Boolean,
  },
  name: "HeaderPages",
  setup() {
    const router = useRouter();
    const redirectPreventPage = () => {
      router.go(-1)
    }
    return {
      redirectPreventPage,
    }

  }
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