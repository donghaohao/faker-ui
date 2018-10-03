<template>
  <div class="h-button">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'HButton'
}
</script>
<style>
.h-button {
  font-size: 20px;
  color: #f00;
  width: 750px;
}
</style>
