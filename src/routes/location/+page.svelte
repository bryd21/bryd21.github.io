<script>
	import { onMount } from 'svelte';

	// Reveal-on-scroll animations
	onMount(() => {
		const observer = new IntersectionObserver(
			(entries, obs) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('in-view');
						obs.unobserve(entry.target);
					}
				});
			},
			{ threshold: 0.12 }
		);
		document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
	});
</script>

<svelte:head>
	<title>Location • ModuTennis</title>
	<meta name="description" content="Find ModuTennis at Tenafly Racquet Club." />
</svelte:head>

<div class="section container">
	<h1 class="reveal">Our location</h1>
	<p class="muted reveal">We operate at Tenafly Racquet Club.</p>

	<div class="map-wrap reveal">
		<iframe
			title="Tenafly Racquet Club map"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			src="https://www.google.com/maps?q=Tenafly+Racquet+Club&output=embed"
		>
		</iframe>
	</div>

	<div class="reveal" style="transition-delay:.06s">
		<p>
			<strong>Directions:</strong> Tap for navigation:
			<a
				class="btn btn--ghost"
				href="https://www.google.com/maps/search/?api=1&query=Tenafly+Racquet+Club"
				target="_blank"
				rel="noopener"
			>
				Open in Google Maps
			</a>
		</p>
	</div>
</div>

