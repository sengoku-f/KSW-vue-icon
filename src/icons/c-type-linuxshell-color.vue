
  <template>
    <span :class="iconClasses">
      <svg
        xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-on="$listeners" :fill="color"
      >
        <defs><clipPath id="master_svg0_3105_4142"><rect x="0" y="0" width="24" height="24" rx="0"></rect></clipPath><clipPath id="master_svg1_3105_4144"><rect x="4" y="4" width="16" height="16" rx="2"></rect></clipPath></defs><g><g clip-path="url(#master_svg0_3105_4142)"></g><g clip-path="url(#master_svg1_3105_4144)"><rect x="4" y="4" width="16" height="16" rx="2" fill="#38363C" fill-opacity="1"></rect><g><path d="M9.21898,10.5L6.679908,12.61589L7.320092,13.38411L10.78102,10.5L7.320092,7.615889L6.679908,8.384111L9.21898,10.5Z" fill-rule="evenodd" fill="#FFFFFF" fill-opacity="1"></path></g><g><path d="M16,16.5L11,16.5L11,15.5L16,15.5L16,16.5Z" fill-rule="evenodd" fill="#FFFFFF" fill-opacity="1"></path></g></g></g>
      </svg>
    </span>
  </template>
  <script>
    export default {
      name: 'IconCTypeLinuxshellColor',
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
