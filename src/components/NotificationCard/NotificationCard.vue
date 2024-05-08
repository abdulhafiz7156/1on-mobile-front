<template>
  <div class="notification__cards">
    <div class="notification__card" @click="redirect()" > <!-- you can write here a click function which is gonna redirect to another page -->
        <div class="notification__card__title df">
          <p>{{title}}</p>
          <i class="bi bi-caret-right-fill"></i>
        </div>
        <div class="notification__card__description">
          <p>{{description}}</p>
          <p>
            <span v-for="service in data" :key="service.id">{{service.name}}, </span>
          </p>
        </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
  name: "NotificationCard",
  props: {
    data: Array,
    title: String,
    service: Boolean,
    description: String,
  },
  setup(props) {
    const router = useRouter();
    const redirect = () => {
       if (props.service) {
        router.push('/services2')
      } else if(props.service === false){
        router.push('/order/date')
      }
    }
    return {
      router,
      redirect
    }
  }
}
</script>

<style scoped>
.notification__card {
  width: 100%;
  padding: 12px 16px;
  background: #272A2F;
  border-radius: 12px;
  margin: 16px 0;
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