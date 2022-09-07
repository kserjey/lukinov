<script context="module">
  export async function load({ fetch }) {
    const props = await fetch('/contact.json').then((res) => res.json());
    return { props };
  }
</script>

<script>
  import PrismicDOM from 'prismic-dom';
  import Links from '../comonents/Links.svelte';

  export let name;
  export let description;
  export let photo;
  export let links;
</script>

<style>
  .container {
    min-height: 0;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 32px 32px 32px;
  }

  .photo-wrapper {
    width: 100%;
  }

  .photo-wrapper img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .info-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 32px;
  }

  .description {
    margin-bottom: 24px;
    font-size: 24px;
    text-align: center;
  }

  .description h1 {
    margin-bottom: 8px;
    font-size: 48px;
    text-align: center;
  }

  .description :global(p) {
    color: var(--grey);
  }

  .location p {
    margin-bottom: 16px;
    font-size: 24px;
    text-align: center;
  }

  @media only screen and (max-aspect-ratio: 3/4) {
    .container {
      min-height: auto;
      flex-direction: column-reverse;
      padding: 0 32px 16px 32px;
    }

    .info-block {
      margin: 0;
      text-align: center;
    }
  }
</style>

<div class="container">
  <div class="info-block">
    <div class="description">
      <h1>{PrismicDOM.RichText.asText(name)}</h1>
      {@html PrismicDOM.RichText.asHtml(description)}
    </div>
    <div class="location">
      <p>Saint-Petersburg, Russia</p>
    </div>
    <Links {...links} />
  </div>
  <div class="photo-wrapper"><img src={photo.url} /></div>
</div>
