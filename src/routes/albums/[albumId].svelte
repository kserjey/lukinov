<script context="module">
  export async function preload({ params }) {
    return Promise.all([
      this.fetch(`albums/${params.albumId}.json`).then((res) => res.json()),
      this.fetch('contact.json').then((res) => res.json()),
    ]).then(([data, { links }]) => ({ ...data, links }));
  }
</script>

<script>
  import { afterUpdate } from 'svelte';
  import PrismicDOM from 'prismic-dom';
  import { formatDate } from './_formatDate';
  import Links from '../../comonents/Links.svelte';

  export let album;
  export let nextAlbum;
  export let links;

  let prevAlbum;
  let containerEl;

  afterUpdate(() => {
    if (prevAlbum?.id !== album) {
      containerEl.scrollLeft = 0;
    }
  });
</script>

<style>
  .container {
    display: flex;
    box-sizing: border-box;
    height: 100%;
    padding: 0 32px 32px 32px;
    overflow-y: scroll;
  }

  .container img {
    max-width: 100%;
    max-height: 100%;
    margin: 0 32px;
    object-fit: contain;
  }

  .info-block {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    max-width: 80%;
    margin-right: 56px;
  }

  .info-block h1 {
    margin-bottom: 16px;
    font-size: 96px;
    line-height: 1.1em;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .info-block time {
    margin-top: auto;
  }

  .info-block .description {
    margin-bottom: 8px;
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
    max-width: 100%;
    width: 512px;
    text-align: center;
    color: #b2b1b1;
  }

  .outro a {
    display: block;
    margin-bottom: 16px;
    color: #000000;
    font-family: 'Yeseva One', cursive;
    font-size: 72px;
  }

  .outro h3 {
    margin-bottom: 8px;
    color: #000000;
    font-size: 24px;
    text-transform: uppercase;
  }

  .outro .model-name {
    margin-bottom: 32px;
    text-transform: uppercase;
  }

  @media only screen and (max-width: 480px) {
    .container {
      flex-direction: column;
    }

    .container img {
      margin: 16px 0;
    }

    .info-block {
      max-width: none;
      margin: 0;
    }

    .info-block h1 {
      font-size: 48px;
    }

    .info-block .description {
      font-size: 18px;
    }

    .outro {
      padding-bottom: 32px;
    }
  }
</style>

<div class="container" bind:this={containerEl}>
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
      <Links {...links} />
    </div>
  {/if}
</div>
