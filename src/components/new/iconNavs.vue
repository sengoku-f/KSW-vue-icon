<template>
  <div class="md:w-1/4">
    <ul class="space-y-2">
      <li v-for="category in categories" :key="category">
        <button @click="changeCategory(category)" :class="['px-4 py-2 rounded', { 'bg-blue-500 text-white': selectedCategory === category }]">
          {{ category }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>
