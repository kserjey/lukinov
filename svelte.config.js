import adapter from '@sveltejs/adapter-netlify';
import sveltePreprocess from 'svelte-preprocess';

/**
 * @type {import('@sveltejs/kit').Config}
 */
export default {
  kit: {
    adapter: adapter(),
  },
  preprocess: sveltePreprocess(),
};
