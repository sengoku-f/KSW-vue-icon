
  <template>
    <span :class="iconClasses">
      <svg
        xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-bind="$attrs" :fill="color"
      >
        <defs><clipPath id="master_svg0_3105_4118"><rect x="0" y="0" width="24" height="24" rx="0"></rect></clipPath><clipPath id="master_svg1_3105_4120"><rect x="4" y="4" width="16" height="16" rx="2"></rect></clipPath></defs><g><g clip-path="url(#master_svg0_3105_4118)"></g><g clip-path="url(#master_svg1_3105_4120)"><rect x="4" y="4" width="16" height="16" rx="2" fill="#2882FF" fill-opacity="1"></rect><g><rect x="10" y="8" width="7" height="2" rx="1" fill="#FFFFFF" fill-opacity="1"></rect></g><g><rect x="10" y="11" width="7" height="2" rx="1" fill="#FFFFFF" fill-opacity="1"></rect></g><g><rect x="10" y="14" width="7" height="2" rx="1" fill="#FFFFFF" fill-opacity="1"></rect></g><g><rect x="7" y="8" width="2" height="2" rx="1" fill="#FFFFFF" fill-opacity="1"></rect></g><g><rect x="7" y="11" width="2" height="2" rx="1" fill="#FFFFFF" fill-opacity="1"></rect></g><g><rect x="7" y="14" width="2" height="2" rx="1" fill="#FFFFFF" fill-opacity="1"></rect></g></g></g>
      </svg>
    </span>
  </template>
  <script>
    export default {
      name: 'IconCTypeLegoColor',
      props: {
        size: {
          type: [Number, String],
          default: '1em'
        },
        color: {
          type: String,
          default: 'currentColor'
        },
        spin: {
          type: Boolean,
          default: false
        }
      },
      computed: {
        iconClasses() {
          return [
            'ksw' + '-icon',
            'ksw' + '-icon-' + this.$options.name.toLowerCase(),
            { ['ksw' + '-icon-spin']: this.spin }
          ];
        }
      }
    };
  </script>
