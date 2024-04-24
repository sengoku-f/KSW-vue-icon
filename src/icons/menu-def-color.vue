
  <template>
    <span :class="iconClasses">
      <svg
        xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-bind="$attrs" :fill="color"
      >
        <defs><clipPath id="master_svg0_3125_3533"><rect x="0" y="0" width="24" height="24" rx="0"></rect></clipPath><clipPath id="master_svg1_3125_3530"><rect x="0" y="0" width="24" height="24" rx="2"></rect></clipPath></defs><g><g clip-path="url(#master_svg0_3125_3533)"></g><g clip-path="url(#master_svg1_3125_3530)"><g style="opacity:0.5"><path d="M7,17L7,11C7,8.79086,8.79086,7,11,7L17,7C19.2091,7,21,8.79086,21,11L21,17C21,19.2091,19.2091,21,17,21L11,21C8.79086,21,7,19.2091,7,17ZM8,17Q8,18.2426,8.87868,19.121299999999998Q9.75736,20,11,20L17,20Q18.2426,20,19.121299999999998,19.121299999999998Q20,18.2426,20,17L20,11Q20,9.75736,19.121299999999998,8.87868Q18.2426,8,17,8L11,8Q9.75736,8,8.87868,8.87868Q8,9.75736,8,11L8,17Z" fill-rule="evenodd" fill="#2882FF" fill-opacity="1"></path></g><g><path d="M3,13L3,7C3,4.79086,4.79086,3,7,3L13,3C15.2091,3,17,4.79086,17,7L17,13C17,15.2091,15.2091,17,13,17L7,17C4.79086,17,3,15.2091,3,13Z" fill="#2882FF" fill-opacity="1"></path></g></g></g>
      </svg>
    </span>
  </template>
  <script>
    export default {
      name: 'IconMenuDefColor',
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
