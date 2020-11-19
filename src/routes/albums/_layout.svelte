<script>
  import { stores } from '@sapper/app';
  const { page } = stores();
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

<nav>
  {#if $page.params.albumId}
    <a href="/albums">Albums</a>
  {:else}<a href="/">Main</a>{/if}
  <a href="/contacts">Contacts</a>
</nav>

<slot />
