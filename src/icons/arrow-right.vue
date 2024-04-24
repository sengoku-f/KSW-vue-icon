
  <template>
    <span :class="iconClasses">
      <svg
        xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-on="$listeners" :fill="color"
      >
        <defs><clipPath id="master_svg0_3125_05327"><rect x="0" y="0" width="24" height="24" rx="0"></rect></clipPath><clipPath id="master_svg1_3125_05328"><rect x="0" y="0" width="24" height="24" rx="0"></rect></clipPath></defs><g clip-path="url(#master_svg0_3125_05327)"><g clip-path="url(#master_svg1_3125_05328)"></g><g transform="matrix(0,-1,1,0,-10,30)"><g><g><path d="M18,26.5234L11.02422,20.159531C10.911577,20.0567654,10.766101,20,10.615385,20C10.275517,20,10,20.282768,10,20.631579C10,20.811982,10.0751679,20.983774,10.206545,21.10363L17.591160000000002,27.84047C17.82432,28.053179999999998,18.17568,28.053179999999998,18.408839999999998,27.84047L25.7929,21.10416L25.7929,21.10416C25.924799999999998,20.983774,26,20.811982,26,20.631579C26,20.282768,25.7245,20,25.3846,20C25.2339,20,25.0884,20.0567654,24.9758,20.159531L24.9758,20.159531L18,26.5234Z" fill-rule="evenodd" fill-opacity="1"></path></g></g></g></g>
      </svg>
    </span>
  </template>
  <script>
    export default {
      name: 'IconArrowRight',
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
