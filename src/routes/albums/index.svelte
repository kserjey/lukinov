<script context="module">
  export async function load({ fetch }) {
    const props = await fetch('/albums.json').then((res) => res.json());
    return { props };
  }
</script>

<script>
  import { onMount } from 'svelte';
  import PrismicDOM from 'prismic-dom';
  import { formatDate } from './_formatDate';
  import { getImgixSrcset } from '../../utils/getImgixSrcset';

  export let albums = [];
  export let hasMore;

  let SvelteInfiniteScroll;
  let page = 1;

  onMount(async () => {
    const module = await import('svelte-infinite-scroll');
    SvelteInfiniteScroll = module.default;
  });

  async function loadMore() {
    page += 1;
    const response = await fetch(`albums.json?page=${page}`);
    const data = await response.json();
    albums = [...albums, ...data.albums];
    hasMore = data.hasMore;
  }

  $: albumsByYear = albums.reduce((acc, album) => {
    const year = PrismicDOM.Date(album.data.date).getFullYear();
    if (!acc[year]) return { ...acc, [year]: [album] };
    return { ...acc, [year]: [...acc[year], album] };
  }, {});

  $: years = Object.keys(albumsByYear).sort((a, b) => b - a);
</script>

<style>
  .year-album {
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 64px 32px 64px;
  }

  .year-album h2 {
    min-width: 200px;
    margin-right: 32px;
    font-size: 72px;
  }

  .albums {
    width: 100%;
    display: grid;
    grid-gap: 16px 32px;
    grid-template-columns: repeat(auto-fill, 256px);
    justify-content: space-evenly;
  }

  .album img {
    max-width: 100%;
    background: var(--grey);
  }

  .album time {
    margin-top: 32px;
    margin-bottom: 8px;
    font-size: 18px;
  }

  .album h3 {
    color: var(--grey);
    font-size: 18px;
  }

  @media only screen and (max-width: 872px) {
    .year-album {
      flex-direction: column;
      align-items: center;
      padding: 0 32px 16px 32px;
    }

    .year-album h2 {
      margin: 0 0 16px 0;
    }

    .albums {
      margin: 0;
    }
  }
</style>

{#each years as year (year)}
  <section class="year-album">
    <h2>{year}</h2>
    <div class="albums">
      {#each albumsByYear[year] as album (album.id)}
        <article class="album">
          <a href="/albums/{album.id}">
            <img
              alt="album cover"
              srcset={getImgixSrcset(album.data.photos[0].photo.url, 256)}
            />
          </a>
          <time datetime={album.data.date}>{formatDate(album.data.date)}</time>
          <h3>{PrismicDOM.RichText.asText(album.data.name)}</h3>
        </article>
      {/each}
    </div>
  </section>
  <svelte:component
    this={SvelteInfiniteScroll}
    window
    {hasMore}
    on:loadMore={loadMore}
  />
{/each}
