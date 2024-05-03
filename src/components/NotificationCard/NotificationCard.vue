<template>
  <div class="notification__card"> <!-- you can write here a click function which is gonna redirect to another page -->
      <div class="notification__card__title df">
        <p>Eslatma</p>
        <i class="bi bi-caret-right-fill"></i>
      </div>
      <div class="notification__card__description">
        <p>Bugun 9:00 da Topor barberda uchrashuv bor esingizdan chiqarmang.</p>
      </div>
  </div>
</template>

<script>
export default {
  name: "NotificationCard"
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