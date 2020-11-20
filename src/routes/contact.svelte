<script context="module">
  import Prismic from 'prismic-javascript';
  import { client } from '../utils/client';

  export async function preload({ params, query }) {
    return client.getSingle('about_me').then(({ data }) => ({
      ...data,
      vkLink: data.vk_link,
      instagramLink: data.instagram_link,
      phoneNumber: data.phone_number,
    }));
  }
</script>

<script>
  import PrismicDOM from 'prismic-dom';

  export let name;
  export let description;
  export let photo;
  export let vkLink;
  export let instagramLink;
  export let phoneNumber;
  export let email;

  $: links = [
    { name: 'vk', link: PrismicDOM.Link.url(vkLink) },
    { name: 'instagram', link: PrismicDOM.Link.url(instagramLink) },
    { name: 'email', link: email && `mailto:${email}` },
    { name: 'phone', link: phoneNumber && `tel:${phoneNumber}` },
  ].filter((item) => !!item.link);
</script>

<style>
  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 32px 32px 32px;
  }

  .photo-wrapper {
    width: 100%;
  }

  .photo-wrapper img {
    max-width: 100%;
  }

  .info-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-right: 32px;
  }

  .info-block h1 {
    margin-bottom: 8px;
  }

  .description {
    margin-bottom: 24px;
    color: #b2b1b1;
  }

  .links {
    align-self: center;
    margin: auto 0 0 0;
    padding: 0;
    list-style-type: none;
  }

  .links li {
    display: inline;
    padding: 0 8px;
  }

  .links img {
    width: 40px;
    height: 40px;
  }

  @media only screen and (max-aspect-ratio: 3/4) {
    .container {
      flex-direction: column;
      padding: 0 32px 16px 32px;
    }

    .info-block {
      margin: 0 0 24px 0;
      text-align: center;
    }
  }
</style>

<div class="container">
  <div class="info-block">
    <h1>{PrismicDOM.RichText.asText(name)}</h1>
    <div class="description">
      {@html PrismicDOM.RichText.asHtml(description)}
    </div>
    <ul class="links">
      {#each links as item}
        <li>
          <a href={item.link}><img alt={item.name} src="/{item.name}.svg" /></a>
        </li>
      {/each}
    </ul>
  </div>
  <div class="photo-wrapper"><img src={photo.url} /></div>
</div>
