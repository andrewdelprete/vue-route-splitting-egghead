<template>
  <div class="wrapper">
    <div>
      <p>Close using this button:</p>
      <button @click="$emit('close')">Close</button>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
}
</style>
