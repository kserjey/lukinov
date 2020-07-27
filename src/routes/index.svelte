<style>
	nav {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		padding: 16px;
	}

	nav button {
		padding: 0 16px;
		border: none;
		background: none;
		color: white;
		font-family: 'Abril Fatface';
		font-size: 24px;
	}

	nav h1 {
		margin: 0;
		color: white;
		font-size: 48px;
	}

	.photo {
		position: fixed;
		top: 0;
		max-width: 50%;
	}

	.photo:first-of-type {
		left: 0;
	}

	.photo:last-of-type {
		right: 0;
	}

	.bottom-button {
		position: fixed;
		left: 50%;
		bottom: 16px;
		padding: 8px 16px;
		transform: translateX(-50%);
	}
</style>

<svelte:head>
	<title>Home</title>
</svelte:head>

<img class="photo" alt='masha' src="/masha.jpeg" />
<img class="photo" alt='katya' src="/katya.jpeg" />

<nav>
	<button>Menu</button>
	<h1>Vladislav Lukinov</h1>
	<button>Contacts</button>
</nav>

<a class="bottom-button" href="/">
	<img alt='arrow bottom' src="/arrow-bottom.svg" />
</a>
