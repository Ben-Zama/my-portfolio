<template>

    <div class="gridCard">
        <div class="card">
            <slot />
            <button v-if="showButton">
                <i class="bi bi-arrow-right"></i>
            </button>
        </div>
    </div>

</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  showButton: {
    type: Boolean,
    default: true,
  },
})

</script>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.gridCard {
    width: 100%;
    height: 100%;
    display: flex;
    background: var(--secondary-color);
    border-radius: 15px;
    box-shadow: 2px 2px 8px var(--shadow-color), -2px -2px 8px var(--shadow-color);
    padding: 10px;
    transition: border 0.1s, transform 0.3s;
    border: 1px solid transparent;
    
    &:hover {
        border: .1px solid var(--accent-color);
        transform: scale(1.025);
    }

    .card {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 10px;
        padding: 0 10px;
        position: relative;
        border-radius: 5px;
        cursor: pointer;
        
        &:hover button {
            background-color: var(--accent-color);
            border-color: var(--accent-color);
            color: var(--secondary-color);
        }
        
        button {
            position: absolute;
            right: 10px;
            bottom: 10px;
            height: 35px;
            width: 35px;
            border: 1px solid var(--primary-color);
            border-radius: 50%;
            color: var(--primary-color);
            transition: all 0.3s;
        }
    }
}

</style>