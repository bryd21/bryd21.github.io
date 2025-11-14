<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	let formResult = { show: false, message: '', type: 'success' };
	let submitting = false;

	async function handleSubmit(e) {
		e.preventDefault();
		submitting = true;
		formResult.show = false;

		const formData = new FormData(e.target);
		const submitBtn = e.target.querySelector('button[type="submit"]');
		const originalBtnText = submitBtn.textContent;

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formData
			});

			const data = await response.json();

			if (data.success) {
				formResult = {
					show: true,
					message: 'Thanks! Your message has been sent successfully.',
					type: 'success'
				};
				e.target.reset();
			} else {
				throw new Error(data.message || 'Something went wrong');
			}
		} catch (error) {
			formResult = {
				show: true,
				message: `Error: ${error.message}. Please try again.`,
				type: 'error'
			};
		} finally {
			submitting = false;
			submitBtn.textContent = originalBtnText;
		}
	}

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
			<article class="card reveal">
				<h3>Modular plans</h3>
				<p>Short, stackable sessions that fit busy schedules and build consistency.</p>
			</article>
			<article class="card reveal" style="transition-delay:.06s">
				<h3>Clear feedback</h3>
				<p>Track reps, pace, and accuracy with simple inputs and clean charts.</p>
			</article>
			<article class="card reveal" style="transition-delay:.12s">
				<h3>Coach tools</h3>
				<p>Share drills, annotate sessions, and review progress week to week.</p>
			</article>
		</div>
	</div>
</section>

<section id="contact" class="section alt">
	<div class="container">
		<div class="section-header">
			<h2 class="reveal">Contact</h2>
		</div>
		<form on:submit={handleSubmit} class="form reveal" method="POST" style="margin-inline:auto;">
			<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY_HERE" />
			<input type="hidden" name="subject" value="New Contact from ModuTennis" />
			<input type="checkbox" name="botcheck" class="hidden" style="display: none;" />

			<label>
				Name
				<input name="name" autocomplete="name" required />
			</label>
			<label>
				Email
				<input type="email" name="email" autocomplete="email" required />
			</label>
			<label>
				Message
				<textarea name="message" rows="4" required></textarea>
			</label>
			<button class="btn" type="submit" disabled={submitting}>
				<span>{submitting ? 'Sending...' : 'Send'}</span>
			</button>
		</form>
		{#if formResult.show}
			<div
				id="form-result"
				class="form-result"
				class:success={formResult.type === 'success'}
				class:error={formResult.type === 'error'}
			>
				{formResult.message}
			</div>
		{/if}
	</div>
</section>

