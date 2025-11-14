<script>
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
</script>

<a class="skip" href="#main">Skip to content</a>

<Nav />

<main id="main">
	<slot />
</main>

<Footer />

