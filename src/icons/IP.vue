
  <template>
    <span :class="iconClasses">
      <svg
        xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-on="$listeners" :fill="color"
      >
        <defs><clipPath id="master_svg0_3105_4224"><rect x="0" y="0" width="24" height="24" rx="0"></rect></clipPath><clipPath id="master_svg1_3105_4235"><rect x="4" y="4" width="16" height="16" rx="2"></rect></clipPath></defs><g><g clip-path="url(#master_svg0_3105_4224)"></g><g clip-path="url(#master_svg1_3105_4235)"><g><path d="M7.715,16L9.442,8.52L10.96,8.52L9.233,16L7.715,16ZM13.611,13.844L12.676,13.844L12.181000000000001,16L10.663,16L12.39,8.52L14.546,8.52Q15.767,8.52,16.311500000000002,9.0205Q16.856,9.521,16.856,10.632Q16.856,12.205,15.9925,13.0245Q15.129,13.844,13.611,13.844ZM13.809000000000001,12.524Q14.501999999999999,12.524,14.898,12.0345Q15.294,11.545,15.294,10.654Q15.294,10.236,15.096,10.038Q14.898,9.84,14.436,9.84L13.6,9.84L12.984,12.524L13.809000000000001,12.524Z" fill-opacity="1"></path></g></g></g>
      </svg>
    </span>
  </template>
  <script>
    export default {
      name: 'IconIp',
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
