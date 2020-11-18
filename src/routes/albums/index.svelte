<script context="module">
  import Prismic from 'prismic-javascript';
  import { client } from '../../utils/client';

  export async function preload({ params, query }) {
    return client
      .query(Prismic.Predicates.at('document.type', 'album'))
      .then(({ results }) => ({ albums: results }));
  }
</script>

<script>
  import PrismicDOM from 'prismic-dom';
  import { formatDate } from './_formatDate';
  export let albums = [];

  $: albumsByYear = albums.reduce((acc, album) => {
    const year = PrismicDOM.Date(album.data.date).getFullYear();
    if (!acc[year]) return { ...acc, [year]: [album] };
    return { ...acc, [year]: [...acc[year], album] };
  }, {});

  $: years = Object.keys(albumsByYear).sort((a, b) => b - a);
</script>

<style>
  .year-albums {
    display: flex;
    align-items: flex-start;
    padding: 16px 0;
  }

  .year-albums:first-child {
    padding-top: 32px;
  }

  .year-albums:last-child {
    padding-bottom: 32px;
  }

  .year-albums h2 {
    width: 372px;
    padding-left: 72px;
    font-size: 72px;
  }

  .albums {
    flex: 1;
    display: grid;
    /* TODO: Responsibility */
    grid-gap: 32px 128px;
    grid-template-columns: repeat(auto-fill, 242px);
    margin-right: 72px;
  }

  .album img {
    max-width: 100%;
  }

  .album time {
    margin-top: 32px;
    margin-bottom: 8px;
    font-size: 18px;
  }

  .album h3 {
    color: #b2b1b1;
    font-size: 18px;
  }
</style>

{#each years as year (year)}
  <section class="year-albums">
    <h2>{year}</h2>
    <div class="albums">
      {#each albumsByYear[year] as album (album.id)}
        <article class="album">
          <a href="/albums/{album.id}">
            <img alt="album cover" src={album.data.photos[0].photo.url} />
          </a>
          <time datetime={album.data.date}>{formatDate(album.data.date)}</time>
          <h3>{PrismicDOM.RichText.asText(album.data.name)}</h3>
        </article>
      {/each}
    </div>
  </section>
{/each}
