<script setup lang="ts">
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <button name="menu">
    <div class="menu" :class="[isOpen ? 'open' : 'close']">
      <span class="line" />
      <span class="line" />
      <span class="line" />
    </div>
  </button>
</template>

<style scoped>
button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  aspect-ratio: 1/1;
  border-radius: 100vmax;
  background-color: rgba(240, 248, 255, 0.075);
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(3px * 3 + 4px * 2);
  width: 28px;
  position: relative;
}

.line {
  display: block;
  height: 3px;
  width: 100%;
  background-color: var(--color-highlight);
  transition: all 0.2s ease-out;
}

.open > .line {
  position: absolute;
  transform: translateY(-50%);
  transform-origin: center;
}

.open .line:nth-child(1) {
  top: 50%;
  transform: rotate(45deg);
}
.open .line:nth-child(2) {
  top: 50%;
  transform: scaleX(0%);
}

.open .line:nth-child(3) {
  top: 50%;
  transform: rotate(-45deg);
}

.close > .line {
  position: initial;
}

button:hover {
  cursor: pointer;
}
</style>
