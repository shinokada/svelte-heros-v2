<script lang="ts">
	export let size = '24';
	export let color = 'currentColor';
	export let variation: 'solid' | 'outline' = 'outline';
	let viewBox: string;
	let svgpath: string;
	let svgoutline = `<path d="M15.3622 5.21385C18.2427 6.50093 20.25 9.391 20.25 12.7499C20.25 17.3062 16.5563 20.9999 12 20.9999C7.44365 20.9999 3.75 17.3062 3.75 12.7499C3.75 10.5378 4.62058 8.52914 6.03781 7.0477C6.8043 8.11811 7.82048 8.99755 9.00121 9.60089C9.04632 6.82521 10.348 4.35503 12.3621 2.73438C13.1255 3.75813 14.1379 4.61845 15.3622 5.21385Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> <path d="M12 18.0003C14.0711 18.0003 15.75 16.3214 15.75 14.2503C15.75 12.347 14.3321 10.7749 12.4949 10.5327C11.4866 11.4372 10.7862 12.6781 10.5703 14.0789C9.78769 13.8876 9.06529 13.5428 8.43682 13.0782C8.31559 13.4469 8.25 13.841 8.25 14.2503C8.25 16.3214 9.92893 18.0003 12 18.0003Z" stroke="${color}" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/> `;
	let svgsolid = `<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9633 2.28603C12.8416 2.12274 12.6586 2.01599 12.4565 1.99035C12.2545 1.9647 12.0506 2.02235 11.8919 2.15005C10.0218 3.65487 8.7174 5.83801 8.35322 8.32662C7.69665 7.85065 7.11999 7.27076 6.6476 6.61105C6.51764 6.42957 6.3136 6.3154 6.09095 6.29959C5.8683 6.28377 5.65017 6.36795 5.49587 6.52925C3.95047 8.14466 3 10.3371 3 12.7499C3 17.7205 7.02944 21.7499 12 21.7499C16.9706 21.7499 21 17.7205 21 12.7499C21 9.089 18.8143 5.94023 15.6798 4.5343C14.5706 3.99281 13.6547 3.21308 12.9633 2.28603ZM15.75 14.2503C15.75 16.3214 14.0711 18.0003 12 18.0003C9.92893 18.0003 8.25 16.3214 8.25 14.2503C8.25 13.841 8.31559 13.4469 8.43682 13.0782C9.06529 13.5428 9.78769 13.8876 10.5703 14.0789C10.7862 12.6781 11.4866 11.4372 12.4949 10.5327C14.3321 10.7749 15.75 12.347 15.75 14.2503Z" fill="${color}"/> `;
	$: switch (variation) {
		case 'outline':
			svgpath = svgoutline;
			viewBox = '0 0 24 24';
			break;
		case 'solid':
			svgpath = svgsolid;
			viewBox = '0 0 24 24';
			break;
		default:
			svgpath = svgoutline;
			viewBox = '0 0 24 24';
	}
	export let ariaLabel = 'fire';
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	width={size}
	height={size}
	class={$$props.class}
	{...$$restProps}
	aria-label={ariaLabel}
	fill="none"
	{viewBox}
	stroke-width="2"
	on:click
>
	{@html svgpath}
</svg>
