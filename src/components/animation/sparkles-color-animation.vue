<template>
  <span class="ksw-icon ksw-icon-SparklesColorAnimation" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <svg
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <linearGradient x1="-9.71445147e-14%" y1="-7.91033905e-14%" x2="100%" y2="100%" id="linearGradient-1">
          <stop stop-color="#2882FF" offset="0%"></stop>
          <stop stop-color="#5B65F5" offset="33.97935%"></stop>
          <stop stop-color="#B700FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="-9.71445147e-14%" y1="-7.91033905e-14%" x2="100%" y2="100%" id="linearGradient-2">
          <stop stop-color="#28DBFF" offset="0%"></stop>
          <stop stop-color="#995BF5" offset="44.4569398%"></stop>
          <stop stop-color="#D900FF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="-9.71445147e-14%" y1="-7.91033905e-14%" x2="100%" y2="100%" id="linearGradient-3">
          <stop stop-color="#3328FF" offset="0%"></stop>
          <stop stop-color="#ED5BF5" offset="49.4645979%"></stop>
          <stop stop-color="#FFDD00" offset="100%"></stop>
        </linearGradient>
      </defs>
      <g id="sparkles-color-animation" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
        <g ref="fill" stroke-width="1.5">
          <path
            d="M9.813,15.904 L9,18.75 L8.187,15.904 C7.75980789,14.4094508 6.59154924,13.2411921 5.097,12.814 L2.25,12 L5.096,11.187 C6.59054924,10.7598079 7.75880789,9.59154924 8.186,8.097 L9,5.25 L9.813,8.096 C10.2401921,9.59054924 11.4084508,10.7588079 12.903,11.186 L15.75,12 L12.904,12.813 C11.4094508,13.2401921 10.2411921,14.4084508 9.814,15.903 L9.813,15.904 Z"
            stroke="url(#linearGradient-1)"
            fill="url(#linearGradient-1)"
          ></path>
          <path
            d="M18.259,8.715 L18,9.75 L17.741,8.715 C17.4389168,7.50583806 16.4950388,6.56157565 15.286,6.259 L14.25,6 L15.286,5.741 C16.4950388,5.43842435 17.4389168,4.49416194 17.741,3.285 L18,2.25 L18.259,3.285 C18.5612535,4.49442443 19.5055756,5.4387465 20.715,5.741 L21.75,6 L20.715,6.259 C19.5055756,6.5612535 18.5612535,7.50557557 18.259,8.715 Z"
            stroke="url(#linearGradient-2)"
            fill="url(#linearGradient-2)"
          ></path>
          <path
            d="M16.894,20.567 L16.5,21.75 L16.106,20.567 C15.8820448,19.8951539 15.3548461,19.3679552 14.683,19.144 L13.5,18.75 L14.683,18.356 C15.3548461,18.1320448 15.8820448,17.6048461 16.106,16.933 L16.5,15.75 L16.894,16.933 C17.1179552,17.6048461 17.6451539,18.1320448 18.317,18.356 L19.5,18.75 L18.317,19.144 C17.6451539,19.3679552 17.1179552,19.8951539 16.894,20.567 Z"
            stroke="url(#linearGradient-3)"
            fill="url(#linearGradient-3)"
          ></path>
        </g>
        <g ref="stroke" stroke-width="1.5">
          <path
            d="M9.813,15.904 L9,18.75 L8.187,15.904 C7.75980789,14.4094508 6.59154924,13.2411921 5.097,12.814 L2.25,12 L5.096,11.187 C6.59054924,10.7598079 7.75880789,9.59154924 8.186,8.097 L9,5.25 L9.813,8.096 C10.2401921,9.59054924 11.4084508,10.7588079 12.903,11.186 L15.75,12 L12.904,12.813 C11.4094508,13.2401921 10.2411921,14.4084508 9.814,15.903 L9.813,15.904 Z"
            stroke="url(#linearGradient-1)"
          ></path>
          <path
            d="M18.259,8.715 L18,9.75 L17.741,8.715 C17.4389168,7.50583806 16.4950388,6.56157565 15.286,6.259 L14.25,6 L15.286,5.741 C16.4950388,5.43842435 17.4389168,4.49416194 17.741,3.285 L18,2.25 L18.259,3.285 C18.5612535,4.49442443 19.5055756,5.4387465 20.715,5.741 L21.75,6 L20.715,6.259 C19.5055756,6.5612535 18.5612535,7.50557557 18.259,8.715 Z"
            stroke="url(#linearGradient-2)"
          ></path>
          <path
            d="M16.894,20.567 L16.5,21.75 L16.106,20.567 C15.8820448,19.8951539 15.3548461,19.3679552 14.683,19.144 L13.5,18.75 L14.683,18.356 C15.3548461,18.1320448 15.8820448,17.6048461 16.106,16.933 L16.5,15.75 L16.894,16.933 C17.1179552,17.6048461 17.6451539,18.1320448 18.317,18.356 L19.5,18.75 L18.317,19.144 C17.6451539,19.3679552 17.1179552,19.8951539 16.894,20.567 Z"
            stroke="url(#linearGradient-3)"
          ></path>
        </g>
        <g ref="decoration" stroke="url(#linearGradient-1)">
          <path
            d="M19.75,2.75 C20.3022847,2.75 20.75,3.19771525 20.75,3.75 C20.75,3.19771525 21.1977153,2.75 21.75,2.75 C21.1977153,2.75 20.75,2.30228475 20.75,1.75 C20.75,2.30228475 20.3022847,2.75 19.75,2.75 Z"
          ></path>
          <path
            d="M13.25,9.25 C13.8022847,9.25 14.25,9.69771525 14.25,10.25 C14.25,9.69771525 14.6977153,9.25 15.25,9.25 C14.6977153,9.25 14.25,8.80228475 14.25,8.25 C14.25,8.80228475 13.8022847,9.25 13.25,9.25 Z"
          ></path>
          <path
            d="M3.25,4.25 C4.3545695,4.25 5.25,5.1454305 5.25,6.25 C5.25,5.1454305 6.1454305,4.25 7.25,4.25 C6.1454305,4.25 5.25,3.3545695 5.25,2.25 C5.25,3.3545695 4.3545695,4.25 3.25,4.25 Z"
          ></path>
          <path
            d="M6.00441063,7 C6.55669538,7 7.00441063,7.44771525 7.00441063,8 C7.00441063,7.44771525 7.45212588,7 8.00441063,7 C7.45212588,7 7.00441063,6.55228475 7.00441063,6 C7.00441063,6.55228475 6.55669538,7 6.00441063,7 Z"
          ></path>
          <path
            d="M20.75,21.25 C21.3022847,21.25 21.75,21.6977153 21.75,22.25 C21.75,21.6977153 22.1977153,21.25 22.75,21.25 C22.1977153,21.25 21.75,20.8022847 21.75,20.25 C21.75,20.8022847 21.3022847,21.25 20.75,21.25 Z"
          ></path>
          <path
            d="M3.25,19.75 C4.07842712,19.75 4.75,20.4215729 4.75,21.25 C4.75,20.4215729 5.42157288,19.75 6.25,19.75 C5.42157288,19.75 4.75,19.0784271 4.75,18.25 C4.75,19.0784271 4.07842712,19.75 3.25,19.75 Z"
          ></path>
          <path
            d="M17.75,13.75 C18.8545695,13.75 19.75,14.6454305 19.75,15.75 C19.75,14.6454305 20.6454305,13.75 21.75,13.75 C20.6454305,13.75 19.75,12.8545695 19.75,11.75 C19.75,12.8545695 18.8545695,13.75 17.75,13.75 Z"
          ></path>
        </g>
      </g>
    </svg>
  </span>
</template>
<script setup>
import { onMounted, ref, shallowRef } from "vue";
import { gsap } from "gsap";
import "~/styles/icon.css";

const props = defineProps({
  size: {
    type: [String, Number],
    default: "1em",
  },
});

const fill = ref(null);
const stroke = ref(null);
const decoration = ref(null);
const isHovering = ref(false); // 动画进行中的标志
const mainTl = shallowRef(null);
const decorationTl = ref(null);

onMounted(() => {
  // 创建时间轴
  mainTl.value = gsap
    .timeline({
      paused: true,
    })
    .add("hoverStart")
    .fromTo(
      fill.value.children,
      {
        autoAlpha: 0, // 初始透明度 0
      },
      {
        autoAlpha: 1,
        duration: 0.1,
      },
    )
    .fromTo(
      stroke.value.children,
      {
        autoAlpha: 1, // 初始透明度 0
      },
      {
        autoAlpha: 0,
        duration: 1,
      },
      "<", // 与上一个动画同时开始
    )
    .addLabel("loop")
    .to(
      fill.value.children,
      {
        keyframes: {
          "0%": { autoAlpha: 1, scale: 1 },
          "50%": { autoAlpha: 0.7, scale: 0.9 },
          "100%": { autoAlpha: 1, scale: 1 },
        },
        transformOrigin: "center center",
        repeat: -1,
        duration: 2,
        stagger: 0.1,
        onRepeat: () => {
          // 每次循环结束检查是否已结束hover状态
          if (!isHovering.value) {
            // 结束当前循环后暂停，并执行退出动画
            mainTl.value.pause(0);
            // mainTl.value.tweenFromTo("loop", "hoverStart");
          }
        },
      },
      ">",
    );

  gsap.set(decoration.value.children, {
    scale: 0,
    y: "random(2,3)",
    rotation: -90,
  });
  decorationTl.value = gsap.to(decoration.value.children, {
    keyframes: {
      "0%": { scale: 0 },
      "10%": { rotation: -90 },
      "50%": { scale: 0.7 },
      "100%": { scale: 0, rotation: "random([-180,45])", y: "random(-2,0)" },
    },
    transformOrigin: "center center",
    duration: 1.5,
    stagger: 0.1,
    paused: true,
    ease: "power3.out",
  });
});

// 鼠标移入事件处理函数
const mouseenter = (event) => {
  isHovering.value = true;
  mainTl.value.play(0);
  decorationTl.value.play(0);
};

const mouseleave = (event) => {
  isHovering.value = false; // 鼠标移出标记状态
  mainTl.value.reverse(0.1);
};
</script>
<style scoped></style>
