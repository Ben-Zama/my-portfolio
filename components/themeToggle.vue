<template>
  <label class="switch">
    <span class="sun" :class="{ active: !isDark }">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g fill="#ffd43b">
          <circle cx="12" cy="12" r="5" />
          <path
            d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1-.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1-.75.29zm-12.02 12.02a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1-.7.24zm6.36-14.36a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm0 17a1 1 0 0 1-1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm-5.66-14.66a1 1 0 0 1-.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.29zm12.02 12.02a1 1 0 0 1-.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1-.71.24z"
          />
        </g>
      </svg>
    </span>
    <span class="moon" :class="{ active: isDark }">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
        <path
          d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
        />
      </svg>
    </span>
    <input type="checkbox" class="input" v-model="isDark" />
    <span class="slider"></span>
  </label>
</template>

<script setup>
import { useTheme } from "../composables/useTheme";
const { isDark } = useTheme();
</script>

<style>
.switch {
  font-size: 12px;
  position: relative;
  display: inline-block;
  width: 59px;
  height: 29px;
  cursor: pointer;
}

.switch .input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #73c0fc;
  transition: background-color 0.4s;
  border-radius: 25px;
}

.slider::before {
  position: absolute;
  content: "";
  height: 25px;
  width: 25px;
  border-radius: 18px;
  left: 2px;
  bottom: 2px;
  z-index: 2;
  background-color: #e8e8e8;
  transition: transform 0.4s;
}

.sun svg,
.moon svg {
  position: absolute;
  width: 20px;
  height: 20px;
  z-index: 1;
  opacity: 0;
  transition: transform 0.4s;
  cursor: pointer;
}

.sun.active svg {
  top: 5px;
  left: 32px;
  opacity: 1;
  animation: rotate 15s linear infinite;
}

.moon.active svg {
  top: 4px;
  left: 4px;
  fill: #73c0fc;
  opacity: 1;
  animation: tilt 5s linear infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes tilt {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.input:checked + .slider {
  background-color: #183153;
}

.input:focus + .slider {
  box-shadow: 0 0 1px #183153;
}

.input:checked + .slider::before {
  transform: translateX(30px);
}
</style>