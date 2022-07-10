<template>
  <div class="main">
    <h1 class="text-3xl font-bold">Ayurveda Plan</h1>
    <nav class="nav flex justify-center gap-4 my-8">
      <button
        v-for="(meal, navIndex) in meals"
        :key="navIndex"
        :class="['nav-button transition-opacity capitalize text-xl sm:text-2xl', {
          'nav-button--active font-bold': selectedTabIndex === navIndex + 1
        }]"
        @click="selectedTabIndex = navIndex + 1"
      >
        {{ meal }}
      </button>
    </nav>
    <TabView v-for="(meal, mealIndex) in meals" :key="mealIndex" :meal="meal" :data="dataByType(meal)"
      v-show="selectedTabIndex === mealIndex + 1" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TabView from './TabView.vue'
import FOOD_DATA from '../data/data';

const meals = ref([
  'breakfast',
  'snack',
  'lunch',
  'dinner',
])

const selectedTabIndex = ref(1);

const dataByType = (meal) => {
  return FOOD_DATA.filter(item => {
    return item.meal.includes(meal) || !item.meal.length
  })
}
</script>

<style lang="scss">
.nav {
  &:hover {
    .nav-button:not(:hover) {
      @apply opacity-50;
    }
  }
}
</style>
