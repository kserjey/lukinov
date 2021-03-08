<script context="module">
  export async function preload() {
    return this.fetch('index.json').then((res) => res.json());
  }
</script>

<script>
  import MediaQuery from '../comonents/MediaQuery.svelte';

  export let landscapePhoto;
  export let portraitPhoto;
</script>

<style>
  h1 {
    position: fixed;
    top: 50%;
    left: 50%;
    color: white;
    font-family: 'Bebas Neue', cursive;
    text-transform: uppercase;
    font-size: 48px;
    text-align: center;
    transform: translate(-50%, -50%);
  }

  .background {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .bottom-button {
    position: fixed;
    left: 50%;
    bottom: 16px;
    padding: 8px 16px;
    transform: translateX(-50%);
  }
</style>

<svelte:head>
  <title>Home</title>
</svelte:head>

<MediaQuery query="(max-aspect-ratio: 3/4)" let:matches>
  <div
    class="background"
    style="background-image: url('{(matches ? portraitPhoto : landscapePhoto).url}')"
  />
</MediaQuery>

<h1>Vladislav Lukinov</h1>

<a class="bottom-button" href="/albums">
  <img alt="arrow bottom" src="/arrow-bottom.svg" />
</a>
