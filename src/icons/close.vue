
  <template>
    <span :class="iconClasses">
      <svg
        xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true" v-bind="$attrs" :fill="color"
      >
        <defs><clipPath id="master_svg0_234_14784"><rect x="0" y="0" width="24" height="24" rx="0"></rect></clipPath><clipPath id="master_svg1_3125_4250"><rect x="0" y="0" width="24" height="24" rx="0"></rect></clipPath></defs><g clip-path="url(#master_svg0_234_14784)"><g clip-path="url(#master_svg1_3125_4250)"></g><g><g><g transform="matrix(-0.7071070075035095,0.7071065306663513,-0.7071070671081543,-0.7071065306663513,38.0085796307917,-4.80772512511777)"><path d="M20,5.467968940734863L40.5514,5.467968940734863L40.5514,7.543968940734864L20,7.543968940734864L20,5.467968940734863Z" fill-rule="evenodd" fill-opacity="1"></path></g><g transform="matrix(0.7071070075035095,0.7071065306663513,-0.7071070671081543,0.7071065306663513,4.429954911961417,-2.6948550837097542)"><path d="M5.467958211898804,4L26.019358211898805,4L26.019358211898805,6.0760000000000005L5.467958211898804,6.0760000000000005L5.467958211898804,4Z" fill-rule="evenodd" fill-opacity="1"></path></g></g></g></g>
      </svg>
    </span>
  </template>
  <script>
    export default {
      name: 'IconClose',
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
