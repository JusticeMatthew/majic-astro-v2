import 'astro';
declare module 'astro' {
  interface AstroClientDirectives {
    'client:after'?: boolean;
  }
}
