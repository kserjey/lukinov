<script context="module">
  import Prismic from 'prismic-javascript';
  import { client } from '../../utils/client';

  export async function preload({ params }) {
    return client.getByID(params.albumId).then((album) => ({ album }));
  }
</script>

<script>
  import PrismicDOM from 'prismic-dom';
  import { formatDate } from './_formatDate';
  export let album;
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
    display: flex;
    flex-direction: column;
    margin-right: 56px;
  }

  .info-block h1 {
    font-size: 96px;
    white-space: nowrap;
  }

  .info-block time {
    margin-top: auto;
  }

  .description {
    color: #b2b1b1;
    font-size: 32px;
    font-family: 'Abril Fatface', cursive;
  }

  .model-name {
    color: #b2b1b1;
    text-transform: uppercase;
  }

  .outro {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 72px 164px;
  }

  .outro h2 {
    font-size: 24px;
  }

  .outro time {
    color: #b2b1b1;
  }

  .location {
    color: #b2b1b1;
    text-transform: uppercase;
    white-space: nowrap;
  }
</style>

<div class="container">
  <div class="info-block">
    <h1>{PrismicDOM.RichText.asText(album.data.name)}</h1>
    <p class="description">
      {PrismicDOM.RichText.asText(album.data.description)}
    </p>
    <time datetime={album.data.date}>{formatDate(album.data.date)}</time>
    <!-- <p class="model-name">{album.model}</p> -->
  </div>
  {#each album.data.photos as { photo }}<img src={photo.url} />{/each}
  <div class="outro">
    <h2>{PrismicDOM.RichText.asText(album.data.name)}</h2>
    <time datetime={album.data.date}>{formatDate(album.data.date)}</time>
    <!-- <p class="model-name">{album.model}</p> -->
    <!-- <p class="location">{album.location}</p> -->
  </div>
</div>
