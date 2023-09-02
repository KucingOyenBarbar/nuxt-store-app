<template>
  <div class="hstack gap-2 py-3">
    <button v-for="category in categories" :key="category" @click="handleClick(category)" type="button"
      :class="`btn btn-outline-dark btn-md rounded shadow-0 border-0 ${category === isCategory ? 'active' : ''}`">{{
        category
      }}</button>
  </div>
</template>

<script lang="ts" setup>

const emits = defineEmits(['category'])
const props = defineProps(['isCategory'])
const categories: Categories[] = ['electronics', 'jewelery', "men's clothing", "women's clothing"]

const handleClick = (value: string) => {
  emits('category', value)

}

</script>