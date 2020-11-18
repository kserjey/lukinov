<script context="module">
  import Prismic from 'prismic-javascript';
  import { client } from '../utils/client';

  export async function preload({ params, query }) {
    return client.getSingle('homepage').then(({ data }) => ({
      leftPhoto: data.left_photo,
      rightPhoto: data.right_photo,
    }));
  }
</script>

<script>
  export let leftPhoto;
  export let rightPhoto;
</script>

<style>
  h1 {
    position: fixed;
    top: 0;
    left: 50%;
    color: white;
    font-size: 48px;
    transform: translate(-50%);
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
  }

  .background div img {
    max-width: 100%;
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
  <div><img src={leftPhoto.url} /></div>
  <div><img src={rightPhoto.url} /></div>
</div>

<nav>
  <h1>Vladislav Lukinov</h1>
</nav>

<a class="bottom-button" href="/albums">
  <img alt="arrow bottom" src="/arrow-bottom.svg" />
</a>
