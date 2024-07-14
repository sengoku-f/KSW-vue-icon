<script setup>
import { ref } from 'vue';
import useClipboard from "vue-clipboard3";
import IconCopy from './icon/Copy.vue'
import iconsData from "~/icons.json";
import packageData from "/package.json";

const { toClipboard } = useClipboard();

const iconNumber = iconsData.length;
const version = packageData.version;
const npmInstallCode = `npm i ksw-vue-icon@${version}`;

const showCopiedMessage = ref(false);
const opacityValue = ref(0);
const isThrottled = ref(false);

const displayCopiedMessage = () => {
  showCopiedMessage.value = true;
  requestAnimationFrame(() => {
    opacityValue.value = 1;
    setTimeout(() => {
      opacityValue.value = 0;
      setTimeout(() => {
        showCopiedMessage.value = false;
        isThrottled.value = false;
      }, 500);
    }, 1500);
  });
};

const copyCode = async () => {
  if (isThrottled.value) return;
  isThrottled.value = true;
  try {
    await toClipboard(npmInstallCode);
    displayCopiedMessage();
  } catch (error) {
    console.error('复制失败:', error);
    isThrottled.value = false;
  }
};
</script>

<template>
  <div class="relative overflow-hidden bg-slate-50 pt-6">
    <img alt="" src="/banner-bg.jpg" width="2556" height="630" decoding="async" data-nimg="future"
      class="absolute bottom-0 left-1/2 ml-[-639px] w-[1278px] max-w-none"
      style="color: transparent; --darkreader-inline-color: transparent" data-darkreader-inline-color="" />
    <div class="absolute inset-0 shadow-[inset_0_-1px_0_rgba(22,27,59,0.04)]"></div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="relative z-10 flex items-center justify-between">
        <div class="flex items-center gap-4">
          <img class="h-7" src="/klogo.svg" />
          <span class="text-xl font-semibold">KSW Design</span>
        </div>
        <div class="flex justify-center gap-8 lg:justify-start">
          <a class="-mx-1.5 -my-1 flex items-center gap-2 rounded-lg px-1.5 py-1 text-[0.8125rem] font-semibold leading-6 text-slate-900 transition hover:bg-slate-900/[0.03]"
            href="https://github.com/sengoku-f/KSW-vue-icon">
            <img class="size-6" src="/Github.svg" />
            Github</a>
          <a class="-mx-1.5 -my-1 flex items-center gap-2 rounded-lg px-1.5 py-1 text-[0.8125rem] font-semibold leading-6 text-slate-900 transition hover:bg-slate-900/[0.03]"
            href="https://www.npmjs.com/package/ksw-vue-icon"><img class="size-6" src="/NPM.svg" />NPM Packages</a>
          <a class="-mx-1.5 -my-1 flex items-center gap-2 rounded-lg px-1.5 py-1 text-[0.8125rem] font-semibold leading-6 text-slate-900 transition hover:bg-slate-900/[0.03]"
            href="/"><img class="size-6" src="/Mastergo.svg" />Mastergo File</a>
        </div>
      </div>
      <div class="flex justify-center text-center lg:pb-7 lg:pt-5 lg:text-left">
        <div class="flex max-w-[37rem] flex-col py-16 lg:pb-11 lg:pt-12">
          <div
            class="order-first flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-slate-500 lg:justify-start">
            <p>{{ iconNumber }} icons</p>
            <svg viewBox="0 0 2 2" aria-hidden="true" class="w-0.5 fill-current">
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <p>v{{ version }}</p>
            <svg viewBox="0 0 2 2" aria-hidden="true" class="w-0.5 fill-current">
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <p>Vue Next libraries</p>
          </div>
          <h1 class="mt-6 text-[1.75rem] font-extrabold leading-9 tracking-tight text-slate-900 md:text-4xl">
            Discover Ksw SVG Icons, Elevate Your UI with Effortless Integration.
          </h1>
          <div class="mt-10 flex justify-center gap-8 lg:justify-start">
            <a class="-mx-1.5 -my-1 flex items-center gap-3 rounded-full px-4 py-2 text-base font-medium leading-6 text-white transition bg-blue-600 hover:bg-blue-800"
              href="https://ksw.design.donxj.com/components/icon">
              Get Started</a>
            <button
              class="relative overflow-hidden -mx-1.5 -my-1 flex items-center gap-3 rounded-full px-4 py-2 text-base font-medium leading-6 text-slate-900 transition border border-slate-300 hover:border-blue-600 hover:text-blue-600"
              @click="copyCode()">
              {{ npmInstallCode }}
              <IconCopy />
              <div v-if="showCopiedMessage"
                class="absolute bg-white/[0.36] backdrop-blur-2xl top-0 left-0 w-full h-full flex items-center justify-center gap-2 transition duration-500"
                :style="{ opacity: opacityValue }" will-change="auto;">
                <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="2" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
                Copied!
              </div>
            </button>
          </div>
        </div>
        <div class="hidden lg:flex lg:flex-auto lg:justify-center">
          <!-- <div class="relative aspect-auto w-full flex justify-center items-center">
            <img class="absolute h-80 object-contain" src="/home.png" />
          </div> -->
          <div class="relative aspect-square w-72 flex-none">
            <svg viewBox="0 0 288 288" fill="none" class="absolute inset-0 h-full w-full overflow-visible">
              <g>
                <mask id="c" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="-333" y="-242" width="956"
                  height="927">
                  <path fill="url(#b)" d="M-333-242h956v927h-956z"></path>
                </mask>
                <g mask="url(#c)" fill="#94A3B8" fill-opacity=".1" stroke="#0F172A" stroke-opacity=".2" stroke-width="1"
                  stroke-dasharray="4 4" stroke-linecap="round" stroke-linejoin="round">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="m65.491 35.75c-16.426 0-29.741 13.316-29.741 29.741s13.315 29.741 29.741 29.741c16.425 0 29.741-13.316 29.741-29.741s-13.316-29.741-29.741-29.741zm-43.241 29.74c0-23.881 19.36-43.241 43.241-43.241s43.241 19.36 43.241 43.241-19.36 43.241-43.241 43.241-43.241-19.36-43.241-43.241z"
                    data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
                      --darkreader-inline-fill: #4b5e7b;
                      --darkreader-inline-stroke: #ffffff;
                    "></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="m222.51 35.75c-16.426 0-29.741 13.316-29.741 29.741s13.315 29.741 29.741 29.741c16.425 0 29.741-13.316 29.741-29.741s-13.316-29.741-29.741-29.741zm-43.241 29.74c0-23.881 19.36-43.241 43.241-43.241s43.241 19.36 43.241 43.241-19.36 43.241-43.241 43.241-43.241-19.36-43.241-43.241z"
                    data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
                      --darkreader-inline-fill: #4b5e7b;
                      --darkreader-inline-stroke: #ffffff;
                    "></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="m222.51 192.769c-16.426 0-29.741 13.316-29.741 29.741s13.315 29.741 29.741 29.741c16.425 0 29.741-13.316 29.741-29.741s-13.316-29.741-29.741-29.741zm-43.241 29.741c0-23.881 19.36-43.241 43.241-43.241s43.241 19.36 43.241 43.241-19.36 43.241-43.241 43.241-43.241-19.36-43.241-43.241z"
                    data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
                      --darkreader-inline-fill: #4b5e7b;
                      --darkreader-inline-stroke: #ffffff;
                    "></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="m65.49 192.769c-16.426 0-29.741 13.316-29.741 29.741s13.316 29.74 29.741 29.74 29.741-13.316 29.741-29.741-13.315-29.74-29.741-29.74zm-43.24 29.741c0-23.881 19.36-43.241 43.241-43.241s43.241 19.36 43.241 43.241-19.361 43.24-43.242 43.24-43.24-19.359-43.24-43.24z"
                    data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
                      --darkreader-inline-fill: #4b5e7b;
                      --darkreader-inline-stroke: #ffffff;
                    "></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="m-200.75 95.231h689.5v13.5h-689.5z"
                    data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
                      --darkreader-inline-fill: #4b5e7b;
                      --darkreader-inline-stroke: #ffffff;
                    "></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="m-200.75 179.27h689.5v13.5h-689.5z"
                    data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
                      --darkreader-inline-fill: #4b5e7b;
                      --darkreader-inline-stroke: #ffffff;
                    "></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="m192.769-200.75v689.5h-13.5v-689.5z"
                    data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
                      --darkreader-inline-fill: #4b5e7b;
                      --darkreader-inline-stroke: #ffffff;
                    "></path>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="m108.731-200.75v689.5h-13.5v-689.5z"
                    data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
                      --darkreader-inline-fill: #4b5e7b;
                      --darkreader-inline-stroke: #ffffff;
                    "></path>
                </g>
              </g>
              <defs>
                <radialGradient id="b" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(-492.00038 6.00263 -6.1904 -507.39124 188 139)">
                  <stop stop-color="#D9D9D9" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #303639"></stop>
                  <stop offset=".81" stop-color="#D9D9D9" stop-opacity="0" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #303639"></stop>
                </radialGradient>
              </defs>
            </svg>
            <div class="absolute inset-0 bg-white/[0.01] backdrop-blur-[2px]"></div>
            <svg viewBox="0 0 288 288" fill="none" aria-hidden="true"
              class="absolute inset-0 h-full w-full overflow-visible">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="m222.51 179.27h-29.74v-70.539h29.74c23.843 0 43.24-19.398 43.24-43.241s-19.397-43.24-43.24-43.24-43.24 19.397-43.24 43.24v29.741h-70.539v-29.741c0-23.843-19.397-43.24-43.24-43.24s-43.241 19.397-43.241 43.24 19.398 43.241 43.241 43.241h29.741v70.539h-29.741c-23.843 0-43.241 19.397-43.241 43.24s19.398 43.24 43.241 43.24 43.24-19.397 43.24-43.24v-29.74h70.539v29.74c0 23.843 19.397 43.24 43.24 43.24s43.24-19.397 43.24-43.24-19.397-43.24-43.24-43.24zm-29.74-113.78c0-16.399 13.342-29.74 29.74-29.74s29.74 13.341 29.74 29.74-13.342 29.741-29.74 29.741h-29.74zm-97.539 29.741h-29.74c-16.399 0-29.741-13.342-29.741-29.741s13.342-29.74 29.741-29.74 29.74 13.341 29.74 29.74zm0 127.279c0 16.398-13.341 29.74-29.74 29.74s-29.741-13.342-29.741-29.74 13.342-29.74 29.741-29.74h29.74zm84.039-43.24h-70.538v-70.539h70.538zm43.24 72.98c-16.398 0-29.74-13.342-29.74-29.74v-29.74h29.74c16.398 0 29.74 13.342 29.74 29.74s-13.342 29.74-29.74 29.74z"
                fill="#A78BFA" fill-opacity=".2" stroke="#8B5CF6" stroke-width="2" data-darkreader-inline-fill=""
                data-darkreader-inline-stroke="" style="
                  --darkreader-inline-fill: #20009d;
                  --darkreader-inline-stroke: #bd78ff;
                "></path>
              <g mask="url(#cc)" stroke-opacity=".1" stroke-width="1">
                <path d="M-69 287.5h445" stroke="url(#e)" />
                <path d="m366.5 144h-445" stroke="url(#e)" />
                <path d="M-69 0h445" stroke="url(#e)" />
                <path d="M.25 355V-90" stroke="url(#g)" />
                <path d="m144 366.5v-445" stroke="url(#g)" />
                <path d="M287.75 355V-90" stroke="url(#g)" />
                <path d="m366.496 366.496-405.808-405.808" stroke="url(#j)" />
                <path d="m327.19-39.19-366.813 366.813" stroke="url(#i)" />
                <circle cx="144" cy="144" r="121.75" stroke="#000" />
                <circle cx="144" cy="144" r="86.56" stroke="#000" />
              </g>
              <g stroke="#000" stroke-opacity=".2" stroke-linecap="round" stroke-linejoin="round" stroke-width="1"
                stroke-dasharray="2 4">
                <path d="m361.491 230.56h-436.986" stroke="url(#e)" />
                <path d="m361.491 265.75h-436.986" stroke="url(#e)" />
                <path d="m361.491 22.25h-436.986" stroke="url(#e)" />
                <path d="m361.491 57.44h-436.986" stroke="url(#e)" />
                <path d="m230.56 361.491v-436.986" stroke="url(#g)" />
                <path d="m265.75 361.491v-436.986" stroke="url(#g)" />
                <path d="m22.25 361.491v-436.986" stroke="url(#g)" />
                <path d="m57.44 361.491v-436.986" stroke="url(#g)" />
              </g>
              <defs>
                <linearGradient id="e" x1="375.75" y1="296.754" x2="-69.25" y2="296.754" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0F172A" stop-opacity="0" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset=".258" stop-color="#0F172A" stop-opacity=".6" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset=".521" stop-color="#0F172A" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset=".784" stop-color="#0F172A" stop-opacity=".6" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset="1" stop-color="#0F172A" stop-opacity="0" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                </linearGradient>
                <linearGradient id="f" x1="375.75" y1="9.254" x2="-69.25" y2="9.254" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0F172A" stop-opacity="0" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset=".258" stop-color="#0F172A" stop-opacity=".6" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset=".521" stop-color="#0F172A" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset=".784" stop-color="#0F172A" stop-opacity=".6" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset="1" stop-color="#0F172A" stop-opacity="0" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                </linearGradient>
                <linearGradient id="g" x1="9.504" y1="-89.75" x2="9.504" y2="355.25" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0F172A" stop-opacity="0" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset=".258" stop-color="#0F172A" stop-opacity=".6" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset=".521" stop-color="#0F172A" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset=".784" stop-color="#0F172A" stop-opacity=".6" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset="1" stop-color="#0F172A" stop-opacity="0" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                </linearGradient>
                <linearGradient id="h" x1="297.004" y1="-89.75" x2="297.004" y2="355.25" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#0F172A" stop-opacity="0" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset=".258" stop-color="#0F172A" stop-opacity=".6" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset=".521" stop-color="#0F172A" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset=".784" stop-color="#0F172A" stop-opacity=".6" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                  <stop offset="1" stop-color="#0F172A" stop-opacity="0" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #000820"></stop>
                </linearGradient>
                <linearGradient id="a">
                  <stop offset="0" stop-color="#0f172a" stop-opacity="0" />
                  <stop offset=".258" stop-color="#0f172a" stop-opacity=".6" />
                  <stop offset=".521" stop-color="#0f172a" />
                  <stop offset=".784" stop-color="#0f172a" stop-opacity=".6" />
                  <stop offset="1" stop-color="#0f172a" stop-opacity="0" />
                </linearGradient>
                <radialGradient id="b2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
                  gradientTransform="matrix(-492.00038 6.00263 -6.1904 -507.39124 188 139)">
                  <stop stop-color="#D9D9D9" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #303639"></stop>
                  <stop offset=".81" stop-color="#D9D9D9" stop-opacity="0" data-darkreader-inline-stopcolor=""
                    style="--darkreader-inline-stopcolor: #303639"></stop>
                </radialGradient>
                <mask id="cc" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="-333" y="-242" width="956"
                  height="927">
                  <path fill="url(#b2)" d="M-333-242h956v927h-956z"></path>
                </mask>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>