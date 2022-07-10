<template>
  <div class="snack-options py-3 px-8 rounded-lg bg-green-200">
    <h3 class="mb-4 font-bold">(Options)</h3>
    <ul class="list-disc">
      <li
        v-for="(item, index) in SNACKS_DATA"
        :key="index"
        class="text-left"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import SNACKS_DATA from '../data/snacks';
</script>
