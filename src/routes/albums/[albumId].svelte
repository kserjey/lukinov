<script context="module">
  import Prismic from 'prismic-javascript';
  import { client } from '../../utils/client';

  export async function preload({ params }) {
    return Promise.all([
      client.getByID(params.albumId),
      client.query(Prismic.Predicates.at('document.type', 'album'), {
        orderings: '[my.album.date desc]',
        after: params.albumId,
      }),
    ]).then(
      ([album, afterAlbum]) =>
        console.log(afterAlbum) || {
          album,
          nextAlbum: afterAlbum.results[0],
        }
    );
  }
</script>

<script>
  import PrismicDOM from 'prismic-dom';
  import { formatDate } from './_formatDate';
  export let album;
  export let nextAlbum;
</script>

<style>
  .container {
    height: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 32px;
    overflow-y: scroll;
  }

  .container img {
    max-height: 100%;
    margin: 0 32px;
  }

  .info-block {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    max-width: 640px;
    margin-right: 56px;
  }

  .info-block h1 {
    font-size: 96px;
  }

  .info-block time {
    margin-top: auto;
  }

  .info-block .description {
    color: #b2b1b1;
    font-size: 32px;
  }

  .info-block .model-name {
    color: #b2b1b1;
    text-transform: uppercase;
  }

  .outro {
    align-self: center;
    flex-shrink: 0;
    width: 512px;
    text-align: center;
    color: #b2b1b1;
  }

  .outro a {
    display: block;
    margin-bottom: 16px;
    color: #000000;
    font-size: 72px;
    text-decoration: none;
  }

  .outro a:hover {
    text-decoration: underline;
  }

  .outro h3 {
    color: #000000;
    font-size: 24px;
  }
</style>

<div class="container">
  <div class="info-block">
    <h1>{PrismicDOM.RichText.asText(album.data.name)}</h1>
    <div class="description">
      {@html PrismicDOM.RichText.asHtml(album.data.description)}
    </div>
    <time datetime={album.data.date}>{formatDate(album.data.date, true)}</time>
    <p class="model-name">{PrismicDOM.RichText.asText(album.data.model)}</p>
  </div>
  {#each album.data.photos as { photo }}<img src={photo.url} />{/each}
  {#if nextAlbum}
    <div class="outro">
      <a href="/albums/{nextAlbum.id}">Next</a>
      <h3>{PrismicDOM.RichText.asText(nextAlbum.data.name)}</h3>
      <time
        datetime={nextAlbum.data.date}
      >{formatDate(nextAlbum.data.date)}</time>
      <p class="model-name">
        {PrismicDOM.RichText.asText(nextAlbum.data.model)}
      </p>
    </div>
  {/if}
</div>
