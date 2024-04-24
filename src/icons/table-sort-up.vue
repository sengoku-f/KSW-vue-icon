
  <template>
    <span :class="iconClasses">
      <svg
        xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-bind="$attrs" :fill="color"
      >
        <defs><clipPath id="master_svg0_3253_35896"><rect x="0" y="0" width="24" height="24" rx="0"></rect></clipPath><clipPath id="master_svg1_3253_35893"><rect x="0" y="0" width="24" height="24" rx="2"></rect></clipPath><clipPath id="master_svg2_3253_35894"><rect x="2" y="2" width="20" height="20" rx="0"></rect></clipPath></defs><g><g clip-path="url(#master_svg0_3253_35896)"></g><g clip-path="url(#master_svg1_3253_35893)"><g clip-path="url(#master_svg2_3253_35894)"><g><path d="M6.375,13.25C6.375,13.25,17.625,13.25,17.625,13.25C17.625,13.25,12,19.5,12,19.5C12,19.5,6.375,13.25,6.375,13.25C6.375,13.25,6.375,13.25,6.375,13.25Z" fill-opacity="1"></path></g><g><path d="M12,4.5C12,4.5,17.625,10.75,17.625,10.75C17.625,10.75,6.375,10.75,6.375,10.75C6.375,10.75,12,4.5,12,4.5C12,4.5,12,4.5,12,4.5Z" fill-opacity="1"></path></g></g></g></g>
      </svg>
    </span>
  </template>
  <script>
    export default {
      name: 'IconTableSortUp',
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
