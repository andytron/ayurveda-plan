<template>
  <div
    v-if="data.length"
    class="mb-4 py-3 px-8 rounded-lg bg-yellow-200"
  >
    <ul class="list-disc">
      <li
        v-for="(item, index) in data"
        :key="index"
        class="italic text-left text-red-800"
      >
        {{ item.text }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  data: Array
})
</script>
