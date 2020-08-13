<style>
	h1 {
		position: fixed;
		top: 0;
		left: 50%;
		color: white;
		font-size: 48px;
		transform: translate(-50%);
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
	<h1>Vladislav Lukinov</h1>
</nav>

<a class="bottom-button" href="/albums">
	<img alt='arrow bottom' src="/arrow-bottom.svg" />
</a>
