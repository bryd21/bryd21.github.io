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
	<title>ModuTennis • Train smarter</title>
	<meta name="description" content="ModuTennis — modular tennis training, drills, and progress tracking." />
</svelte:head>

<section class="hero">
	<div class="hero__background">
		<img
			src="/front.jpeg"
			alt="Tennis training session"
			loading="eager"
			decoding="async"
		/>
	</div>
	<div class="container">
		<div class="hero__content reveal">
			<h1>Train smarter with ModuTennis</h1>
			<p>Modular plans, drills, and progress tracking—built for players and coaches who demand excellence.</p>
			<div class="cta">
				<a href="/about" class="btn btn--white"><span>Meet the founder</span></a>
				<a href="/location" class="btn btn--ghost-light"><span>Visit us</span></a>
			</div>
		</div>
	</div>
</section>

<section class="section">
	<div class="container">
		<div class="section-header">
			<h2 class="reveal">What you get</h2>
			<p class="muted reveal">Professional training solutions designed for serious players and dedicated coaches.</p>
		</div>
		<div class="grid-3">
			<article class="card card-green reveal">
				<h3>Modular plans</h3>
				<p>Short, stackable sessions that fit busy schedules and build consistency.</p>
			</article>
			<article class="card card-blue reveal" style="transition-delay:.06s">
				<h3>Clear feedback</h3>
				<p>Track reps, pace, and accuracy with simple inputs and clean charts.</p>
			</article>
			<article class="card card-purple reveal" style="transition-delay:.12s">
				<h3>Coach tools</h3>
				<p>Share drills, annotate sessions, and review progress week to week.</p>
			</article>
		</div>
	</div>
</section>

<section id="contact" class="section alt">
	<div class="container">
		<div class="section-header">
			<h2 class="reveal">Get in touch</h2>
			<p class="reveal">Ready to elevate your game? We'd love to hear from you.</p>
		</div>
		<div class="contact-card reveal">
			<a href="mailto:contact@modutennis.me" class="email-link">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>
				<span>contact@modutennis.me</span>
			</a>
		</div>
	</div>
</section>

