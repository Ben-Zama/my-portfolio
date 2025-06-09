<template>

    <div class="gridCard">
        <div class="card">
            <slot />
        </div>
    </div>

</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.gridCard {
    width: 100%;
    height: 100%;
    background: var(--secondary-color);
    border-radius: 15px;
    box-shadow: 2px 2px 8px var(--shadow-color), -2px -2px 8px var(--shadow-color);

    .card {
        width: 100%;
        height: 100%;
        border-radius: 5px
    }
}

</style>