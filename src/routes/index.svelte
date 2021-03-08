<script context="module">
  export async function preload() {
    return this.fetch('index.json').then((res) => res.json());
  }
</script>

<script>
  export let leftPhoto;
  export let rightPhoto;
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
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .background div {
    flex: 1;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  @media only screen and (max-aspect-ratio: 3/4) {
    .background div:last-child {
      display: none;
    }
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

<div class="background">
  <div style="background-image: url('{leftPhoto.url}')" />
  <div style="background-image: url('{rightPhoto.url}')" />
</div>

<h1>Vladislav Lukinov</h1>

<a class="bottom-button" href="/albums">
  <img alt="arrow bottom" src="/arrow-bottom.svg" />
</a>
