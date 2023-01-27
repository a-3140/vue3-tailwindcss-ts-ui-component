# Vue 3 + TypeScript + Vite + Tailwindcss used for UI Component Library

## Using in your project without uploading to npm

Update your main.ts in your Vue3 Project

```
import "<ui-lib-name>/dist/style.css";

import <UI-NAME> from "<ui-lib-name>";

createApp(App).use(<UI-NAME>).mount("#app");

```

## Directly use in your Vue3 Files

sample.vue

```

<script setup lang="ts"></script>

<template>
    <the-button>
      Click Here
    </the-button>
</template>

```

Removed `dist` folder from the gitignore to allow library to be installed via repository using `a-3140/vue3-tailwindcss-ts-ui-component`
