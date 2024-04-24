
  <template>
    <span :class="iconClasses">
      <svg
        xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-on="$listeners" :fill="color"
      >
        <defs><clipPath id="master_svg0_3105_4151"><rect x="0" y="0" width="24" height="24" rx="0"></rect></clipPath><clipPath id="master_svg1_3105_4153"><rect x="4" y="4" width="16" height="16" rx="2"></rect></clipPath></defs><g><g clip-path="url(#master_svg0_3105_4151)"></g><g clip-path="url(#master_svg1_3105_4153)"><g><ellipse cx="12" cy="12" rx="8" ry="8" fill="#F0F0F0" fill-opacity="1"></ellipse></g><g><ellipse cx="12" cy="12" rx="6.5" ry="6.5" fill="#5D83AC" fill-opacity="1"></ellipse></g><g><path d="M7,14.5L9,14.5L12,10.5L14,13L11,13L10,14.5L17,14.5L12.81373,8.63923C12.414909999999999,8.080878,11.585090000000001,8.080878,11.18627,8.63923L7,14.5Z" fill="#FFFFFF" fill-opacity="1"></path></g></g></g>
      </svg>
    </span>
  </template>
  <script>
    export default {
      name: 'IconCTypeAutoitColor',
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
