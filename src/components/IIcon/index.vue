<script setup>
import { Icon as IconifyIconComp } from "@iconify/vue";

const props = defineProps({
  icon: {
    type: [String, Object],
    default: ""
  }
});
</script>

<template>
  <IconifyIconComp :icon="props.icon" class="i-icon" />
</template>

<style scoped>
.i-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
