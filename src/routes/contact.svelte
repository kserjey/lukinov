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
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    height: 100%;
    min-height: 0;
    padding: 0 32px 32px 32px;
  }

  .container > img {
    max-height: 100%;
  }

  .info-block {
    flex-grow: 1;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    margin-right: 32px;
  }

  .info-block .description {
    color: #b2b1b1;
  }

  .info-block .links {
    align-self: center;
    margin: auto 0 0 0;
    padding: 0;
    list-style-type: none;
  }

  .info-block .links li {
    display: inline;
    padding: 0 8px;
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
  <img src={photo.url} />
</div>
