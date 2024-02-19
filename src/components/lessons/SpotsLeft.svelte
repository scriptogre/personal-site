<script>
  import { quadOut } from "svelte/easing";
  import { tweened } from "svelte/motion";
  import { onMount } from "svelte";

  let classList;

  export { classList as class };

  export let spots;

  const spotsLeft = tweened(spots, {
    duration: 2000,
    easing: quadOut,
  });

  onMount(async () => {
    await spotsLeft.set(1);
  });
</script>

<span class={classList}>{Math.floor($spotsLeft)}/{spots} spots left </span>
