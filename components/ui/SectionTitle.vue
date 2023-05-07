<template>
  <div class="section__title">
    <span class="mark">
      <IconsIconMark />
    </span>
    <span class="title">
      <slot />
    </span>
  </div>
</template>

<style scoped>
.section__title {
  display: flex;
  align-items: center;
  column-gap: 4px;
  margin: 32px 0px 24px;
}

.mark {
  color: var(--color-highlight);
  /* height: 6px; */
  width: 8px;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

svg {
  display: block;
  width: 100%;
  height: auto;
}

.title {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-gray-3);
  letter-spacing: -0.01em;
  text-transform: uppercase;

  background: var(--color-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;

  opacity: 0.7;
}
</style>
