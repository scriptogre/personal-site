<script>
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  export let href;

  let y = 0;
  let showButton = true; // Start with hidden button

  // Function to determine button visibility
  const handleScroll = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;
    const scrollBottom = documentHeight - windowHeight - y;

    showButton = scrollBottom > 1000; // Hide if scrolled past 1000px from bottom
  };

  // Hide button on mount
  onMount(() => {
    handleScroll();
  });
</script>

<svelte:window bind:scrollY={y} on:scroll={handleScroll} />

{#if showButton}
  <div class="fixed bottom-0 z-10 w-full backdrop-blur" transition:fly={{ y: 50, duration: 700 }}>
    <div class="grid place-items-center py-4">
      <a
        {href}
        class="relative flex w-fit items-center justify-center gap-2 rounded-md border border-transparent bg-gradient-to-br from-amber-400 to-orange-500 px-4 py-3 font-['Sora'] leading-none text-black shadow-sm duration-500 hover:scale-105"
        >Skip to Registration</a>
    </div>
  </div>
{/if}
