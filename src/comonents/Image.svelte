<script>
  export let dimensions;
  export let src;
  export let alt;

  let className;
  export { className as class };
</script>

<style>
  img {
    display: inline-block;
    max-width: 100%;
    height: auto;
  }
</style>

<img
  class={className}
  width={dimensions.width}
  height={dimensions.height}
  {src}
  {alt}
/>
