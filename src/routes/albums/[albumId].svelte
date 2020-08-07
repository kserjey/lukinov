<script context="module">
  export async function preload({ params }) {
    const res = await this.fetch(`albums/${params.albumId}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { album: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { formatDate } from "./_formatDate";
  export let album;
</script>

<style>
  .album {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    padding: 32px;
    overflow-y: scroll;
  }

  .info-block {
    display: flex;
    flex-direction: column;
    margin-right: 56px;
  }

  .name {
    margin: 0;
    font-size: 96px;
  }

  .description {
    margin: 0;
    color: #b2b1b1;
    font-size: 32px;
  }

  .date {
    margin: auto 0 0 0;
  }

  .model-name,
  .location {
    margin: 0;
    color: #b2b1b1;
  }

  .photo {
    max-height: 100%;
    margin-right: 72px;
  }

  .photo:last-of-type {
    margin-right: 0;
  }

  .controls {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 72px 216px;
  }

  .next {
    margin-bottom: 16px;
    color: black;
    font-size: 72px;
    text-decoration: none;
  }

  .name-secondary {
    margin: 0;
    color: black;
    font-size: 24px;
  }

  .socials {
    margin: auto 0 0 0;
    color: black;
    font-size: 18px;
  }
</style>

<div class="album">
  <div class="info-block">
    <h2 class="name">{album.name}</h2>
    <p class="description">{album.description}</p>
    <p class="date">{formatDate(album.date)}</p>
    <p class="model-name">{album.model}</p>
  </div>
  {#each Array.from({ length: 5 }) as photo}
    <img class="photo" src="/katya.jpeg" />
  {/each}
  <div class="controls">
    <a class="next" href="/">Next</a>
    <p class="name-secondary">{album.name}</p>
    <p class="model-name">{album.model}</p>
    <p class="location">{album.location}</p>
    <p class="socials">Follow Vladislav</p>
  </div>
</div>
