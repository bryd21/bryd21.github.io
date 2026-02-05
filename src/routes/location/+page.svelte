<script>
	import { onMount } from 'svelte';

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
	<title>Location — ModuTennis</title>
	<meta name="description" content="Find ModuTennis at Tenafly Racquet Club." />
</svelte:head>

<div class="section container">
	<div class="reveal">
		<span class="section-label">Location</span>
		<h1>Tenafly Racquet Club</h1>
		<hr class="divider" />
	</div>

	<p class="reveal" style="max-width:480px; margin-bottom:2.5rem;">We train at Tenafly Racquet Club. Come visit and see the program in action.</p>

	<div class="map-wrap reveal">
		<iframe
			title="Tenafly Racquet Club map"
			loading="lazy"
			referrerpolicy="no-referrer-when-downgrade"
			src="https://www.google.com/maps?q=Tenafly+Racquet+Club&output=embed"
		>
		</iframe>
	</div>

	<div class="location-actions reveal" style="transition-delay:.06s">
		<p class="directions-label">Get directions</p>
		<a
			class="btn btn--ghost"
			href="https://www.google.com/maps/search/?api=1&query=Tenafly+Racquet+Club"
			target="_blank"
			rel="noopener"
		>
			Open in Google Maps
		</a>
	</div>
</div>
