<script setup>
import { useDarkMode, useToggleDarkMode } from "@/hooks/useToggleDarkMode";

const onClickRight = event => {
  useToggleDarkMode(event);
};
</script>

<template>
  <van-nav-bar fixed placeholder @click-right="onClickRight">
    <template #right>
      <svg-icon class="text-[18px]" :name="useDarkMode() ? 'light' : 'dark'" />
    </template>
  </van-nav-bar>
</template>

<style scoped></style>
