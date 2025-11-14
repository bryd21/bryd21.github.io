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
	<title>About • ModuTennis</title>
	<meta name="description" content="About Steven Park, founder of ModuTennis." />
</svelte:head>

<div class="section container">
	<h1 class="reveal">About the founder, Steven Park</h1>
	<div class="about-grid">
		<div class="reveal">
			<img
				class="portrait"
				src="/IMG_8228.PNG.png"
				alt="Steven Park, founder of ModuTennis"
				loading="eager"
				decoding="async"
			/>
		</div>
		<div class="reveal" style="transition-delay:.06s">
			<p>
				Steven Park founded ModuTennis to make purposeful training simple and accessible. Drawing on years of
				coaching and competing, he focuses on building consistency through short, modular sessions that players
				can stack into powerful routines.
			</p>
			<p>
				Steve's approach blends fundamentals with modern feedback loops—clear goals, quick metrics, and steady
				iteration. Whether you're new to the sport or tuning high‑level details, the goal is the same: train
				smarter, enjoy more, and keep improving.
			</p>
			<p>
				When he's not on court, Steve refines drills, mentors juniors, and collaborates with coaches to keep
				the program evolving.
			</p>
		</div>
	</div>
</div>

