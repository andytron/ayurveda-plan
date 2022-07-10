<template>
  <li
    v-if="!!data"
    class="food-item flex capitalize"
  >
    <span v-if="data.grade === 2">
      <font-awesome-icon icon="fa-solid fa-arrow-up" class="text-green-500" />
    </span>
    <span v-else-if="data.grade === 0">
      <font-awesome-icon icon="fa-solid fa-arrow-down" class="text-red-500" />
    </span>
    <p :class="['text-left', textColorClass]">{{ data.name }}</p>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  data: [Object, String]
})

const textColorClass = ref({
  'text-red-500': props.data.fodmap === 'high',
  'text-green-500': props.data.fodmap === 'low',
})
</script>

<style lang="scss">
.food-item {
  span {
    @apply mr-2;
  }
}
</style>
