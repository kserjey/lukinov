<script lang="ts">
  interface Photo {
    dimensions: {
      width: number;
      height: number;
    };
    alt: null | string;
    copyright: null;
    url: string;
  }

  export let photo: Photo;
  export let srcset: string;
</script>

<style>
  img {
    max-inline-size: 100%;
    block-size: auto;
    background: var(--grey);
  }
</style>

<img
  class={$$restProps.class}
  width={photo.dimensions.width}
  height={photo.dimensions.height}
  alt={photo.alt}
  {srcset}
  loading="lazy"
/>
