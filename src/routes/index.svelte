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
    color: white;
    font-family: 'Teko', cursive;
    font-size: 48px;
    font-weight: 300;
    text-transform: uppercase;
  }

  .background {
    display: flex;
    justify-content: center;
    align-items: center;
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
  >
    <h1>Vladislav Lukinov</h1>
  </div>
</MediaQuery>

<a class="bottom-button" href="/albums">
  <img alt="arrow bottom" src="/arrow-bottom.svg" />
</a>
