<script>
  import { onMount } from 'svelte';

  export let dimensions;
  export let src;
  export let alt;

  let className;
  export { className as class };

  $: ratio = (dimensions.height / dimensions.width) * 100;

  let loaded = false;

  onMount(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      loaded = true;
    };
  });
</script>

<style>
  @keyframes load {
    from {
      left: -150px;
    }
    to {
      left: 100%;
    }
  }

  .wrapper {
    position: relative;
    visibility: hidden;
  }

  .wrapper::before {
    content: '';
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }

  img {
    display: inline-block;
    max-width: 100%;
    height: auto;
    background: #eee;
    background: linear-gradient(110deg, #ececec 8%, #f5f5f5 18%, #ececec 33%);
    background-size: 200% 100%;
    animation: 1.5s shine linear infinite;
  }
</style>

<!-- <div style="padding-bottom: {ratio}%" class='wrapper'/> -->
<img
  class={className}
  width={dimensions.width}
  height={dimensions.height}
  {alt}
/>
