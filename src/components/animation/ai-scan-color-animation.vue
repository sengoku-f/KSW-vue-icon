<template>
  <span class="ksw-icon ksw-icon-AiScanColorAnimation" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="none"
      version="1.1"
      :width="props.size"
      :height="props.size"
      viewBox="0 0 24 24"
    >
      <defs>
        <clipPath id="0558af64_a">
          <rect width="24" height="24" rx="0" />
        </clipPath>
        <linearGradient x2=".939" y2="1.054" id="0558af64_b">
          <stop offset="0%" stop-color="#2882FF" />
          <stop offset="31.429%" stop-color="#5B65F5" />
          <stop offset="100%" stop-color="#B700FF" />
        </linearGradient>
        <linearGradient x2="1.187" y2=".668" id="0558af64_c">
          <stop offset="0%" stop-color="#2882FF" />
          <stop offset="31.429%" stop-color="#5B65F5" />
          <stop offset="100%" stop-color="#B700FF" />
        </linearGradient>
        <linearGradient x2="1.187" y2=".668" id="0558af64_d">
          <stop offset="0%" stop-color="#2882FF" />
          <stop offset="31.429%" stop-color="#5B65F5" />
          <stop offset="100%" stop-color="#B700FF" />
        </linearGradient>
        <linearGradient x2="1.187" y2=".668" id="0558af64_e">
          <stop offset="0%" stop-color="#2882FF" />
          <stop offset="31.429%" stop-color="#5B65F5" />
          <stop offset="100%" stop-color="#B700FF" />
        </linearGradient>
        <linearGradient x2="1.187" y2=".668" id="0558af64_f">
          <stop offset="0%" stop-color="#2882FF" />
          <stop offset="31.429%" stop-color="#5B65F5" />
          <stop offset="100%" stop-color="#B700FF" />
        </linearGradient>
        <filter id="0558af64_g" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB" x="-.1" y="-.2" width="1.2" height="1.4">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation=".5" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient x1=".5" x2=".5" y2="1" id="0558af64_h">
          <stop offset="0%" stop-color="#A612FD" stop-opacity="0" />
          <stop offset="100%" stop-color="#5B65F5" stop-opacity=".5" />
        </linearGradient>
        <filter id="0558af64_i" filterUnits="objectBoundingBox" color-interpolation-filters="sRGB" x="-.05" y="-.1" width="1.1" height="1.2">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation=".25" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient x1=".5" x2=".5" y2="1" id="0558af64_j">
          <stop offset="0%" stop-color="#A612FD" stop-opacity="0" />
          <stop offset="91.429%" stop-color="#F200FF" stop-opacity="0" />
          <stop offset="100%" stop-color="#69C0FF" />
        </linearGradient>
      </defs>
      <g clip-path="url(#0558af64_a)">
        <path
          d="M16.209 6v12q0 .074.014.146.015.073.043.14.028.07.07.13.04.062.092.114.053.052.114.093.061.041.13.07.068.028.14.042.073.015.147.015t.146-.015q.072-.014.14-.042.069-.029.13-.07.062-.04.114-.093.052-.052.093-.114.041-.06.07-.13.028-.067.042-.14.015-.072.015-.146V6q0-.074-.015-.146-.014-.073-.042-.141-.029-.068-.07-.13-.04-.061-.093-.113-.052-.053-.114-.094-.061-.04-.13-.069-.068-.028-.14-.043-.072-.014-.146-.014t-.147.014q-.072.015-.14.043-.069.028-.13.07-.061.04-.114.093-.052.052-.093.113-.04.062-.07.13-.027.068-.042.14-.014.073-.014.147zm-4.322 7.125L10.02 7.628l-1.866 5.497h3.732zm.509 1.5l1.227 3.615v.001q.02.055.046.107.028.052.062.099.035.047.077.088.041.04.089.075.047.034.1.06.052.026.107.044.056.018.114.027.057.009.116.009.074 0 .146-.014.072-.015.14-.043.069-.028.13-.07.062-.04.114-.093.052-.052.093-.113.041-.062.07-.13.028-.068.042-.14.015-.073.015-.147 0-.124-.04-.241l-4.073-12q-.02-.055-.046-.107-.027-.052-.062-.099-.035-.047-.077-.088-.041-.04-.089-.075-.047-.034-.1-.06-.052-.026-.107-.044-.056-.018-.114-.027-.057-.009-.116-.009h-.479q-.058 0-.116.01-.058.008-.113.026-.056.018-.108.044t-.1.06q-.047.034-.089.075-.041.041-.076.088-.035.047-.062.099-.027.052-.046.107l-4.072 12q-.04.117-.04.241 0 .074.014.146.015.073.043.141.028.068.07.13.04.061.092.113.053.052.114.094.062.04.13.069.068.028.14.043.073.014.147.014.058 0 .116-.01.058-.008.113-.026.056-.018.108-.044t.1-.06q.047-.034.089-.075.041-.041.076-.088.035-.047.062-.099.027-.052.046-.107l1.227-3.616h4.75z"
          fill-rule="evenodd"
          fill="url(#0558af64_b)"
        />
        <g ref="scan">
          <path id="scan-bg" d="M2 2h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" fill="url(#0558af64_h)" filter="url(#0558af64_g)" />
          <path id="scan-light" d="M2 2h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" fill="url(#0558af64_j)" filter="url(#0558af64_i)" />
          <!-- <use href="#scan-bg" /> -->
          <use href="#scan-light" />
          <use href="#scan-light" />
        </g>
        <g>
          <path
            d="M4.5 2.75H7q.074 0 .146-.014.073-.015.141-.043.068-.028.13-.07.061-.04.113-.093.053-.052.094-.113.04-.062.069-.13.028-.068.043-.14.014-.073.014-.147t-.014-.146q-.015-.073-.043-.141-.028-.068-.07-.13-.04-.061-.093-.113-.052-.053-.113-.094-.062-.04-.13-.069-.068-.028-.14-.043Q7.073 1.25 7 1.25H4.5q-1.346 0-2.298.952T1.25 4.5v1.25q0 .074.014.146.015.073.043.141.028.068.07.13.04.061.093.113.052.053.113.094.062.04.13.069.068.028.14.043.073.014.147.014t.146-.014q.073-.015.141-.043.068-.028.13-.07.061-.04.113-.093.053-.052.094-.113.04-.062.069-.13.028-.068.043-.14.014-.073.014-.147V4.5q0-.725.513-1.237.512-.513 1.237-.513z"
            fill-rule="evenodd"
            fill="url(#0558af64_c)"
          />
          <path
            d="M1.25 18.25q0-.074.014-.146.015-.073.043-.141.028-.068.07-.13.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043.073-.014.147-.014t.146.014q.073.015.141.043.068.028.13.07.061.04.113.093.053.052.094.113.04.062.069.13.028.068.043.14.014.073.014.147v1.25q0 .725.513 1.237.512.513 1.237.513H7q.074 0 .146.014.073.015.141.043.068.028.13.07.061.04.113.093.053.052.094.113.04.062.069.13.028.068.043.14.014.073.014.147t-.014.146q-.015.073-.043.141-.028.068-.07.13-.04.061-.093.113-.052.053-.113.094-.062.04-.13.069-.068.028-.14.043-.073.014-.147.014H4.5q-1.346 0-2.298-.952T1.25 19.5v-1.25z"
            fill-rule="evenodd"
            fill="url(#0558af64_d)"
          />
          <path
            d="M17 1.25h2.5q1.346 0 2.298.952T22.75 4.5v1.25q0 .074-.014.146-.015.073-.043.141-.028.068-.07.13-.04.061-.093.113-.052.053-.113.094-.062.04-.13.069-.068.028-.14.043-.073.014-.147.014t-.146-.014q-.073-.015-.141-.043-.068-.028-.13-.07-.061-.04-.113-.093-.053-.052-.094-.113-.04-.062-.069-.13-.028-.068-.043-.14-.014-.073-.014-.147V4.5q0-.725-.513-1.237-.512-.513-1.237-.513H17q-.074 0-.146-.014-.073-.015-.141-.043-.068-.028-.13-.07-.061-.04-.113-.093-.053-.052-.094-.113-.04-.062-.069-.13-.028-.068-.043-.14-.014-.073-.014-.147t.014-.146q.015-.073.043-.141.028-.068.07-.13.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043.073-.014.147-.014z"
            fill-rule="evenodd"
            fill="url(#0558af64_e)"
          />
          <path
            d="M21.25 18.25q0-.074.014-.146.015-.073.043-.141.028-.068.07-.13.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043.073-.014.147-.014t.146.014q.073.015.141.043.068.028.13.07.061.04.113.093.053.052.094.113.04.062.069.13.028.068.043.14.014.073.014.147v1.25q0 1.346-.952 2.298t-2.298.952H17q-.074 0-.146-.014-.073-.015-.141-.043-.068-.028-.13-.07-.061-.04-.113-.093-.053-.052-.094-.113-.04-.062-.069-.13-.028-.068-.043-.14-.014-.073-.014-.147t.014-.146q.015-.073.043-.141.028-.068.07-.13.04-.061.093-.113.052-.053.113-.094.062-.04.13-.069.068-.028.14-.043.073-.014.147-.014h2.5q.725 0 1.237-.513.513-.512.513-1.237v-1.25z"
            fill-rule="evenodd"
            fill="url(#0558af64_f)"
          />
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

const scan = ref(null);
const isAnimating = ref(false); // 动画进行中的标志
const scanTimeline = shallowRef(null);

onMounted(() => {
  // 创建时间轴
  scanTimeline.value = gsap.timeline({
    repeat: -1,
    repeatDelay: 0,
    paused: true,
    onRepeat() {
      // 每次循环结束时检查动画状态
      if (!isAnimating.value) this.pause();
    },
  });
  const scanAnimate = gsap.fromTo(
    scan.value,
    {
      yPercent: -120,
      autoAlpha: 0, // 初始透明度 0
    },
    {
      yPercent: 120,
      duration: 1.5,
      ease: "power2.inOut",
      keyframes: {
        "0%": { autoAlpha: 0 },
        "35%": { autoAlpha: 1 },
        "75%": { autoAlpha: 1 },
        "100%": { autoAlpha: 0 },
      },
    },
  );
  scanTimeline.value.add(scanAnimate, 0);
});

// 鼠标移入事件处理函数
function mouseenter(event) {
  isAnimating.value = true;
  scanTimeline.value.play(); // 鼠标移入开始播放
}

function mouseleave(event) {
  isAnimating.value = false; // 鼠标移出标记状态
}
</script>
<style scoped>
svg #scan-light {
  mix-blend-mode: lighten;
  filter: blur(0.25px) brightness(2);
}
</style>
