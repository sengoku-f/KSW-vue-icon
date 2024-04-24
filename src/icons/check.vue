
  <template>
    <span :class="iconClasses">
      <svg
        xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-on="$listeners" :fill="color"
      >
        <defs><clipPath id="master_svg0_234_53157"><rect x="0" y="0" width="24" height="24" rx="0"></rect></clipPath><clipPath id="master_svg1_3105_3541"><rect x="0" y="0" width="24" height="24" rx="0"></rect></clipPath></defs><g clip-path="url(#master_svg0_234_53157)"><g clip-path="url(#master_svg1_3105_3541)"></g><g><g><g><path d="M7.95227,20.4714L21.7534,4.657534L20.2466,3.342466L7.86591,17.5286L3.713564,13.29941L2.286436,14.7006L7.95227,20.4714Z" fill-rule="evenodd" fill-opacity="1"></path></g></g></g></g>
      </svg>
    </span>
  </template>
  <script>
    export default {
      name: 'IconCheck',
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
