<script context="module">
  export async function preload({ params, query }) {
    return this.fetch('contact.json').then((res) => res.json());
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
    /* todo: padding and box-sizing */
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
    color: #b2b1b1;
  }

  .links {
    align-self: center;
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  .links li {
    display: inline-flex;
    padding: 0 4px;
  }

  .links img {
    width: 40px;
    height: 40px;
  }

  @media only screen and (max-aspect-ratio: 3/4) {
    .container {
      flex-direction: column-reverse;
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
    <div class="description">
      <h1>{PrismicDOM.RichText.asText(name)}</h1>
      {@html PrismicDOM.RichText.asHtml(description)}
    </div>
    <div>
      <p style="font-size: 24px; text-align: center;">
        Saint-Petersburg, Russia
      </p>
      <p style="font-size: 24px; text-align: center;">{email}</p>
    </div>
    <div style="text-align: center">
      <h4 style="margin-bottom: 8px">Follow Vladislav</h4>
      <ul class="links">
        {#each links as item}
          <li>
            <a href={item.link}><img
                alt={item.name}
                src="/{item.name}.svg"
              /></a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
  <div class="photo-wrapper"><img src={photo.url} /></div>
</div>
