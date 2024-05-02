<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button"
}
</script>

<style scoped>
button {
  width: 100%;
  background: #9CCBFB;
  color: #003354;
  border-radius: 100px;
  border: none;
  height: 48px;
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0px;
}
</style>