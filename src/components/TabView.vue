<template>
  <div :class="`tab-view ${meal}`">
    <div class="grid sm:grid-cols-3 lg:grid-cols-4 gap-4">
      <SnackOptions v-if="meal === 'snack'" />
      <div
        v-for="(type, typeIndex) in foodTypes"
        :key="typeIndex"
        class="food-by-type mb-4"
      >
        <h3 class="mb-4 capitalize font-bold">{{type}}</h3>
        <WarningsList
          v-if="warningByType(type)"
          :data="warningByType(type)"
        />
        <ul>
          <FoodItem
            v-for="(item, itemIndex) in data"
            :key="itemIndex"
            :data="foodByType(type, item)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SnackOptions from './SnackOptions.vue'
import WarningsList from './WarningsList.vue'
import FoodItem from './FoodItem.vue'
import WARNINGS_DATA from '../data/warnings';

const foodTypes = ref(props.meal === 'snack' ? [
  'grain',
  'dairy',
  'nuts & seeds',
  'fruits',
  'drink',
  'sweeteners',
] : [
  'grain',
  'dairy',
  'nuts & seeds',
  'fruits',
  'vegetables',
  'oils',
  'animal',
  'spices & herbs',
  'drink',
  'sweeteners',
])

const props = defineProps({
  meal: String,
  data: Object
})

const warningByType = (type) => {
  const list = WARNINGS_DATA
    .filter(item => {
      return item.type.includes(type)
    })

  return !!list[0] && list[0].items.length ? list[0].items.filter(item => {
    return item.meal.includes(props.meal)
  }) : []
}

const foodByType = (type, item) => {
  return item.type.includes(type) ? item : ''
}
</script>
