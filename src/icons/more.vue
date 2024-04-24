
  <template>
    <span :class="iconClasses">
      <svg
        xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-bind="$attrs" :fill="color"
      >
        <defs><clipPath id="master_svg0_3105_3979"><rect x="0" y="0" width="24" height="24" rx="0"></rect></clipPath></defs><g><g clip-path="url(#master_svg0_3105_3979)"></g><g><g><rect x="3" y="10" width="4" height="4" rx="2" fill-opacity="1"></rect></g><g><rect x="10" y="10" width="4" height="4" rx="2" fill-opacity="1"></rect></g><g><rect x="17" y="10" width="4" height="4" rx="2" fill-opacity="1"></rect></g></g></g>
      </svg>
    </span>
  </template>
  <script>
    export default {
      name: 'IconMore',
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
