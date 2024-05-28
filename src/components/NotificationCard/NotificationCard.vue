<template>
  <div class="notification__cards">
    <div class="notification__card" @click="callback" >
        <div class="notification__card__title df">
          <p>{{title}}</p>
          <i class="bi bi-caret-right-fill"></i>
        </div>
        <div class="notification__card__description">
          <p v-if="description">{{description}}</p>
          <p v-if="data">
            <span v-for="service in data" :key="service.id">{{service.name}}, </span>
          </p>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data?: { id: number, name: string }[],
  title: string,
  callback: () => void,
  description?: string | string[],
}>()
</script>

<style scoped>
.notification__card {
  width: 100%;
  padding: 12px 16px;
  background: #272A2F;
  border-radius: 12px;
  margin: 16px 0;
  cursor: pointer;
}

.notification__card__title {
  justify-content: space-between;
}

.notification__card__description p {
  color: #C2C7CF;
  font-size: 14px;
  width: 85%;
  margin-top: 10px;
}
</style>