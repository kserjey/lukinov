<script>
  import { page } from '$app/stores';
</script>

<style>
  nav {
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;
    padding: 0 32px;
  }

  nav a {
    font-family: 'Yeseva One', cursive;
    font-size: 24px;
  }
</style>

{#if $page.url.pathname !== '/'}
  <nav>
    {#if $page.url.pathname === '/albums' || $page.url.pathname === '/albums/'}
      <a href="/">Main</a>
    {:else}<a href="/albums">Albums</a>{/if}
    <a href="/contact">Contact</a>
  </nav>
{/if}

<slot />
