<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`albums.json`).then(r => r.json()).then(albums => {
			return { albums };
		});
	}
</script>

<script>
  import { formatDate } from './_formatDate';
  export let albums;
  
  $: albumsByYear = albums.reduce((acc, album) => {
    const year = new Date(album.date).getFullYear();
    if (!acc[year]) return { ...acc, [year]: [album] };
    return { ...acc, [year]: [...acc[year], album] };
  }, {});

  $: years = Object.keys(albumsByYear).sort((a, b) => b - a);
</script>

<style>
  .year-albums {
    display: flex;
    align-items: flex-start;
    margin: 32px 0;
  }
  
  .year-albums h2 {
    width: 372px;
    margin: 0;
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

  .album p {
    margin-top: 32px;
    margin-bottom: 8px;
    line-height: 1em;
    font-size: 18px;
  }

  .album h3 {
    margin: 0;
    color: #b2b1b1;
    line-height: 1em;
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
            <img alt="album cover" src="/katya.jpeg" />
          </a>
          <p>{formatDate(album.date)}</p>
          <h3>{album.name}</h3>
        </article>
      {/each}
    </div>
  </section>
{/each}