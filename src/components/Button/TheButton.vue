<script lang="ts">
export default {
  name: "TheButton",
};
</script>

<script setup lang="ts">
import { classNames } from "../../utils";

defineProps<{
  label: string;
  type: "primary" | "secondary";
  classes: string;
  clickHandler: () => void;
}>();

const primary = "text-white bg-lochinvar-700 hover:bg-lochinvar-800";
const secondary =
  "text-black bg-white hover:bg-gray-100 border-gray-300 border";
</script>

<template>
  <button
    @click="clickHandler"
    :class="
      classNames(
        type === 'secondary' ? secondary : primary,
        'font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none tracking-wide',
        classes
      )
    "
  >
    {{ label }}
  </button>
</template>
