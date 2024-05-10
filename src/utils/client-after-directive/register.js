/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
  name: 'client:after',
  hooks: {
    'astro:config:setup': ({ addClientDirective }) => {
      addClientDirective({
        name: 'after',
        entrypoint: './src/utils/client-after-directive/after.js',
      });
    },
  },
});
