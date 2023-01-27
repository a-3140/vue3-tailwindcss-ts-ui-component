<template>
  <button class="text-red-500">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TheButton",
});
</script>
