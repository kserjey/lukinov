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

	.background {
		display: flex;
		width: 100%;
		height: 100%;
	}

	.background img {
		flex: 1;
		max-width: 100%;
		height: auto;
		object-fit: cover;
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

<div class="background">
	<img alt='masha' src="/masha.jpeg" />
	<img alt='katya' src="/katya.jpeg" />
</div>

<nav>
	<button>Menu</button>
	<h1>Vladislav Lukinov</h1>
	<button>Contacts</button>
</nav>

<a class="bottom-button" href="/albums">
	<img alt='arrow bottom' src="/arrow-bottom.svg" />
</a>
