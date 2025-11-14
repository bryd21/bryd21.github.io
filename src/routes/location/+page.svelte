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

	<div class="location-actions reveal" style="transition-delay:.06s">
		<p class="directions-label">Get directions:</p>
		<a
			class="btn"
			href="https://www.google.com/maps/search/?api=1&query=Tenafly+Racquet+Club"
			target="_blank"
			rel="noopener"
		>
			<span>
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: inline-block; vertical-align: middle; margin-right: 0.5rem;">
					<path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
				</svg>
				Open in Google Maps
			</span>
		</a>
	</div>
</div>

