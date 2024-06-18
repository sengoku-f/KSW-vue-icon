<template>
  <div class="relative overflow-hidden bg-slate-50 pt-6">
    <img
      alt=""
      src="/banner-bg.jpg"
      width="2556"
      height="630"
      decoding="async"
      data-nimg="future"
      class="absolute bottom-0 left-1/2 ml-[-639px] w-[1278px] max-w-none"
      style="color: transparent; --darkreader-inline-color: transparent"
      data-darkreader-inline-color=""
    />
    <div
      class="absolute inset-0 shadow-[inset_0_-1px_0_rgba(22,27,59,0.04)]"
    ></div>
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
      <div class="flex items-center gap-4">
        <img class="h-7" src="/klogo.svg" />
        <span class="text-xl font-semibold">KSW Design</span>
      </div>
      <div class="flex justify-center text-center lg:pb-7 lg:pt-5 lg:text-left">
        <div class="flex max-w-[37rem] flex-col py-16 lg:pb-11 lg:pt-12">
          <div
            class="order-first flex items-center justify-center gap-4 text-[0.8125rem] leading-6 text-slate-500 lg:justify-start"
          >
            <p>{{ iconNumber }} icons</p>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              class="w-0.5 fill-current"
            >
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <p>v{{ version }}</p>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              class="w-0.5 fill-current"
            >
              <circle cx="1" cy="1" r="1"></circle>
            </svg>
            <p>Vue Next libraries</p>
          </div>
          <h1
            class="mt-6 text-[1.75rem] font-extrabold leading-9 tracking-tight text-slate-900 md:text-4xl"
          >
            Discover Ksw SVG Icons, Elevate Your UI with Effortless Integration.
          </h1>
          <div class="mt-10 flex justify-center gap-8 lg:justify-start">
            <a
              class="-mx-1.5 -my-1 flex items-center gap-3 rounded-lg px-1.5 py-1 text-[0.8125rem] font-semibold leading-6 text-slate-900 transition hover:bg-slate-900/[0.03]"
              href="https://github.com/sengoku-f/KSW-vue-icon"
            >
              <img class="size-6" src="/Github.svg" />
              Github</a
            >
            <a
              class="-mx-1.5 -my-1 flex items-center gap-3 rounded-lg px-1.5 py-1 text-[0.8125rem] font-semibold leading-6 text-slate-900 transition hover:bg-slate-900/[0.03]"
              href="https://www.npmjs.com/package/ksw-vue-icon"
              ><img class="size-6" src="/NPM.svg" />NPM Packages</a
            >
            <a
              class="-mx-1.5 -my-1 flex items-center gap-3 rounded-lg px-1.5 py-1 text-[0.8125rem] font-semibold leading-6 text-slate-900 transition hover:bg-slate-900/[0.03]"
              href="/"
              ><img class="size-6" src="/Mastergo.svg" />Mastergo File</a
            >
          </div>
        </div>
        <div class="hidden lg:flex lg:flex-auto lg:justify-center">
          <div
            class="relative aspect-auto w-full flex justify-center items-center"
          >
            <img class="absolute h-80 object-contain" src="/home.png" />
          </div>
          <!-- <div class="relative aspect-square w-72 flex-none hidden">
            <svg viewBox="0 0 288 288" fill="none" class="absolute inset-0 h-full w-full overflow-visible hidden">
              <g>
                <mask id="c" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="-333" y="-242" width="956"
                  height="927">
                  <path fill="url(#b)" d="M-333-242h956v927h-956z"></path>
                </mask>
                <g mask="url(#c)">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M108-488.25c-155.33 0-281.25 125.92-281.25 281.25C-173.25-51.67-47.33 74.25 108 74.25c155.33 0 281.25-125.92 281.25-281.25 0-155.33-125.92-281.25-281.25-281.25ZM-186.75-207c0-162.786 131.964-294.75 294.75-294.75S402.75-369.786 402.75-207 270.786 87.75 108 87.75-186.75-44.214-186.75-207Z"
                    fill="#94A3B8" fill-opacity=".1" stroke="#0F172A" stroke-opacity=".2" stroke-width="2"
                    stroke-dasharray="4 4" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
                      --darkreader-inline-fill: #4b5e7b;
                      --darkreader-inline-stroke: #ffffff;
                    "></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M-36-146.25c-155.33 0-281.25 125.92-281.25 281.25 0 155.33 125.92 281.25 281.25 281.25 155.33 0 281.25-125.92 281.25-281.25 0-155.33-125.92-281.25-281.25-281.25ZM-330.75 135c0-162.786 131.964-294.75 294.75-294.75S258.75-27.786 258.75 135 126.786 429.75-36 429.75-330.75 297.786-330.75 135Z"
                    fill="#94A3B8" fill-opacity=".1" stroke="#0F172A" stroke-opacity=".2" stroke-width="2"
                    stroke-dasharray="4 4" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
                      --darkreader-inline-fill: #4b5e7b;
                      --darkreader-inline-stroke: #ffffff;
                    "></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M342-74.25c-115.566 0-209.25 93.684-209.25 209.25S226.434 344.25 342 344.25 551.25 250.566 551.25 135 457.566-74.25 342-74.25ZM119.25 135c0-123.021 99.729-222.75 222.75-222.75S564.75 11.979 564.75 135 465.021 357.75 342 357.75 119.25 258.021 119.25 135Z"
                    fill="#94A3B8" fill-opacity=".1" stroke="#0F172A" stroke-opacity=".2" stroke-width="2"
                    stroke-dasharray="4 4" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
                      --darkreader-inline-fill: #4b5e7b;
                      --darkreader-inline-stroke: #ffffff;
                    "></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M234 114.75c-11.184 0-20.25 9.066-20.25 20.25s9.066 20.25 20.25 20.25 20.25-9.066 20.25-20.25-9.066-20.25-20.25-20.25ZM200.25 135c0-18.64 15.11-33.75 33.75-33.75s33.75 15.11 33.75 33.75-15.11 33.75-33.75 33.75-33.75-15.11-33.75-33.75ZM99 87.75c-26.096 0-47.25 21.155-47.25 47.25S72.904 182.25 99 182.25c26.095 0 47.25-21.155 47.25-47.25S125.095 87.75 99 87.75ZM38.25 135c0-33.551 27.199-60.75 60.75-60.75s60.75 27.199 60.75 60.75-27.199 60.75-60.75 60.75S38.25 168.551 38.25 135Z"
                    fill="#94A3B8" fill-opacity=".1" stroke="#0F172A" stroke-opacity=".1" stroke-width="2"
                    stroke-dasharray="4 4" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
                      --darkreader-inline-fill: #4b5e7b;
                      --darkreader-inline-stroke: #ffffff;
                    "></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M342-110.25C206.552-110.25 96.75-.448 96.75 135c0 135.448 109.802 245.25 245.25 245.25 135.448 0 245.25-109.802 245.25-245.25C587.25-.448 477.448-110.25 342-110.25ZM83.25 135C83.25-7.904 199.096-123.75 342-123.75S600.75-7.904 600.75 135 484.904 393.75 342 393.75 83.25 277.904 83.25 135Z"
                    fill="#94A3B8" fill-opacity=".1" stroke="#0F172A" stroke-opacity=".2" stroke-width="2"
                    stroke-dasharray="4 4" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
                      --darkreader-inline-fill: #4b5e7b;
                      --darkreader-inline-stroke: #ffffff;
                    "></path>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M108 195.75c-155.33 0-281.25 125.92-281.25 281.25 0 155.33 125.92 281.25 281.25 281.25 155.33 0 281.25-125.92 281.25-281.25 0-155.33-125.92-281.25-281.25-281.25ZM-186.75 477c0-162.786 131.964-294.75 294.75-294.75S402.75 314.214 402.75 477 270.786 771.75 108 771.75-186.75 639.786-186.75 477Z"
                    fill="#94A3B8" fill-opacity=".1" stroke="#0F172A" stroke-opacity=".2" stroke-width="2"
                    stroke-dasharray="4 4" data-darkreader-inline-fill="" data-darkreader-inline-stroke="" style="
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
              class="absolute inset-0 h-full w-full overflow-visible hidden">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M232.213 29.661a6.75 6.75 0 0 1 8.659 4.019 293.104 293.104 0 0 1 4.671 13.82 293.554 293.554 0 0 1 12.249 63.562c6.142 6.107 9.958 14.579 9.958 23.938 0 9.359-3.816 17.831-9.958 23.938a293.551 293.551 0 0 1-12.249 63.562 293.143 293.143 0 0 1-4.671 13.82 6.75 6.75 0 0 1-12.678-4.64c.937-2.56 1.838-5.137 2.702-7.731a279.258 279.258 0 0 0-88.553-26.124 207.662 207.662 0 0 0 8.709 22.888c4.285 9.53 1.151 21.268-8.338 26.747l-7.875 4.547c-9.831 5.675-22.847 2.225-27.825-8.542a256.906 256.906 0 0 1-16.74-48.337C60.857 190.897 38.25 165.588 38.25 135c0-33.551 27.199-60.75 60.75-60.75h9c8.258 0 16.431-.356 24.505-1.052 35.031-3.023 68.22-12.466 98.391-27.147a278.666 278.666 0 0 0-2.702-7.73 6.75 6.75 0 0 1 4.019-8.66Zm2.681 29.45a292.862 292.862 0 0 1-96.423 27.083c-3.74 15.652-5.721 31.994-5.721 48.806 0 16.812 1.981 33.154 5.721 48.806a292.884 292.884 0 0 1 96.423 27.083 280.39 280.39 0 0 0 9.636-55.608c.477-6.697.72-13.46.72-20.281 0-6.821-.243-13.584-.72-20.281a280.396 280.396 0 0 0-9.636-55.608ZM124.37 182.697A223.556 223.556 0 0 1 119.25 135c0-16.365 1.766-32.325 5.12-47.697a299.37 299.37 0 0 1-16.37.447h-9c-26.096 0-47.25 21.155-47.25 47.25S72.904 182.25 99 182.25h9c5.492 0 10.95.15 16.37.447Zm-20.039 13.053a243.387 243.387 0 0 0 14.937 42.049c1.434 3.103 5.418 4.481 8.821 2.516l7.875-4.547c3.054-1.763 4.429-5.84 2.775-9.519a221.156 221.156 0 0 1-10.907-29.811A285.523 285.523 0 0 0 108 195.75h-3.669Z"
                fill="#A78BFA" fill-opacity=".1" stroke="#8B5CF6" stroke-width="2" data-darkreader-inline-fill=""
                data-darkreader-inline-stroke="" style="
                  --darkreader-inline-fill: #20009d;
                  --darkreader-inline-stroke: #bd78ff;
                "></path>
              <g mask="url(#cc)">
                <path opacity=".1" d="M-69 287.5h445" stroke="url(#e)" stroke-width="1.5"></path>
                <path opacity=".1" d="M-69 0h445" stroke="url(#f)" stroke-width="1.5"></path>
                <path opacity=".1" d="M.25 355V-90" stroke="url(#g)" stroke-width="1.5"></path>
                <path opacity=".1" d="M287.75 355V-90" stroke="url(#h)" stroke-width="1.5"></path>
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
                <mask id="cc" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="-333" y="-242" width="956"
                  height="927">
                  <path fill="url(#b)" d="M-333-242h956v927h-956z"></path>
                </mask>
              </defs>
            </svg>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import iconsData from "@/icons/iconsData.json";
import packageData from "/package.json";
const iconNumber = iconsData.length;
const version = packageData.version;
</script>

<style scoped></style>
