<script>
  import PrismicDOM from 'prismic-dom';

  export let vkLink;
  export let instagramLink;
  export let telegramLink;
  export let phoneNumber;
  export let email;

  $: links = [
    { name: 'vk', link: PrismicDOM.Link.url(vkLink) },
    { name: 'instagram', link: PrismicDOM.Link.url(instagramLink) },
    { name: 'email', link: email && `mailto:${email}` },
    { name: 'telegram', link: PrismicDOM.Link.url(telegramLink) },
    { name: 'phone', link: phoneNumber && `tel:${phoneNumber}` },
  ].filter((item) => !!item.link);
</script>

<style>
  .container {
    text-align: center;
    color: #000000;
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
</style>

<div class="container">
  <h4 style="margin-bottom: 8px">Follow Vladislav</h4>
  <ul class="links">
    {#each links as item}
      <li>
        <a href={item.link}> <img alt={item.name} src="/{item.name}.svg" /> </a>
      </li>
    {/each}
  </ul>
</div>
