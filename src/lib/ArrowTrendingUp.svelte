<script lang="ts">
  export let size = '';
  export let viewBox = '';
  export let role = 'img';
  export let strokeWidth = '1.5';
  export let color = 'currentColor';
  export let variation: 'solid' | 'outline' | 'mini' = 'outline';

  if (variation === 'mini') {
    size = size || '20';
    viewBox = viewBox || '0 0 20 20';
  } else {
    size = size || '24';
    viewBox = viewBox || '0 0 24 24';
  }

  export let ariaLabel = 'arrow trending up';
</script>

<svg
  xmlns="http://www.w3.org/2000/svg"
  width={size}
  height={size}
  {...$$restProps}
  {role}
  aria-label={ariaLabel}
  fill="none"
  {viewBox}
  stroke-width={strokeWidth}
  on:click
  on:keydown
  on:keyup
  on:focus
  on:blur
  on:mouseenter
  on:mouseleave
  on:mouseover
  on:mouseout
>
  {#if variation === 'outline'}
    <path
      d="M2.25 18.0004L9 11.2504L13.3064 15.5568C14.5101 13.1885 16.5042 11.2027 19.1203 10.038L21.8609 8.81775M21.8609 8.81775L15.9196 6.53711M21.8609 8.81775L19.5802 14.759"
      stroke={color}
      stroke-width={strokeWidth}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  {:else if variation === 'mini'}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.577 4.87834C12.6842 4.47824 13.0955 4.2408 13.4956 4.34801L18.2766 5.6291C18.4688 5.68058 18.6326 5.80628 18.732 5.97854C18.8315 6.1508 18.8585 6.35552 18.807 6.54766L17.5259 11.3287C17.4187 11.7288 17.0074 11.9663 16.6073 11.8591C16.2072 11.7519 15.9698 11.3406 16.077 10.9405L16.8865 7.9195C14.6303 9.30965 12.7541 11.0901 11.2935 13.1222C11.1651 13.3009 10.9646 13.4142 10.7452 13.432C10.5259 13.4499 10.3098 13.3704 10.1542 13.2148L7 10.0607L2.28033 14.7803C1.98744 15.0732 1.51256 15.0732 1.21967 14.7803C0.926777 14.4874 0.926777 14.0126 1.21967 13.7197L6.46967 8.46968C6.76256 8.17679 7.23744 8.17679 7.53033 8.46968L10.6039 11.5433C12.1049 9.63051 13.9633 7.9506 16.1492 6.61197L13.1073 5.7969C12.7072 5.68969 12.4698 5.27844 12.577 4.87834Z"
      fill={color}
    />
  {:else}
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M15.2194 6.26756C15.3679 5.88086 15.8017 5.68771 16.1884 5.83615L22.1297 8.11679C22.3154 8.18807 22.4651 8.33021 22.546 8.51192C22.627 8.69364 22.6324 8.90005 22.5611 9.08575L20.2804 15.027C20.132 15.4137 19.6982 15.6069 19.3115 15.4584C18.9248 15.31 18.7316 14.8762 18.8801 14.4895L20.5118 10.2386L19.4253 10.7223C16.9721 11.8146 15.1036 13.6754 13.975 15.8959C13.8662 16.11 13.6614 16.2591 13.4241 16.2968C13.1869 16.3345 12.946 16.2563 12.7761 16.0864L9 12.3103L2.78033 18.53C2.48744 18.8229 2.01256 18.8229 1.71967 18.53C1.42678 18.2371 1.42678 17.7622 1.71967 17.4693L8.46967 10.7193C8.61032 10.5787 8.80109 10.4996 9 10.4996C9.19891 10.4996 9.38968 10.5787 9.53033 10.7193L13.1363 14.3253C14.4369 12.2042 16.3711 10.4402 18.8152 9.35203L19.9017 8.86828L15.6508 7.23652C15.2641 7.08808 15.071 6.65426 15.2194 6.26756Z"
      fill={color}
    />
  {/if}
</svg>

<!--
@component
[Go to docs](https://svelte-heros-v2.vercel.app)
## Props
@prop export let size = '';
@prop export let viewBox = '';
@prop export let role = 'img';
@prop export let strokeWidth = '1.5';
@prop export let color = 'currentColor';
@prop export let variation: 'solid' | 'outline' | 'mini' = 'outline';
@prop export let ariaLabel = 'arrow trending up';
-->
