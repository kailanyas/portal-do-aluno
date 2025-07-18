<template>
  <div>
    <label class="text-sm font-medium text-gray-700">{{ label }}</label>
    <input
      type="text"
      :value="value"
      class="w-full mt-1 p-2 border border-gray-300 rounded-md bg-gray-100"
      disabled
    />
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: String,
});
</script>
