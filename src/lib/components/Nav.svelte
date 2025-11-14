<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	let menuOpen = false;
	let menuElement;
	let toggleElement;

	function toggleMenu() {
		menuOpen = !menuOpen;
		if (menuOpen) {
			document.body.classList.add('lock');
		} else {
			document.body.classList.remove('lock');
		}
	}

	function closeMenuOnLinkClick(e) {
		const target = e.target;
		if (target.tagName === 'A' && menuOpen) {
			toggleMenu();
		}
	}

	onMount(() => {
		// Close menu when clicking outside
		const handleClickOutside = (e) => {
			if (menuOpen && menuElement && !menuElement.contains(e.target) && !toggleElement?.contains(e.target)) {
				toggleMenu();
			}
		};
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	});
</script>

<header class="site-header">
	<div class="container nav">
		<a class="brand" href="/">ModuTennis</a>

		<button
			bind:this={toggleElement}
			class="nav-toggle"
			aria-expanded={menuOpen}
			aria-controls="menu"
			aria-label="Menu"
			on:click={toggleMenu}
		>
			<span class="bar"></span><span class="bar"></span><span class="bar"></span>
		</button>

		<nav id="menu" bind:this={menuElement} class="menu" class:open={menuOpen} aria-label="Primary" on:click={closeMenuOnLinkClick}>
			<a href="/" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>Home</a>
			<a href="/about" aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>About</a>
			<a href="/location" aria-current={$page.url.pathname === '/location' ? 'page' : undefined}>Location</a>
			<a href="/#contact" class="btn btn--ghost">Contact</a>
		</nav>
	</div>
</header>

