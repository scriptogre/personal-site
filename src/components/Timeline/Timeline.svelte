<script>
  let classList = "";
  export { classList as class };
  export let registrations;

  const today = new Date();
  const currentYear = new Date().getFullYear();
  const yearStart = new Date(currentYear, 0, 1);

  const calcPct = (date) => ((date - yearStart) / (1000 * 60 * 60 * 24) / 365) * 100; // Reusable Calculation for percentage

  $: registrationsOpen = registrations.some(
    (offer) => offer.startDate <= new Date() && offer.endDate >= new Date(),
  );

  const formattedDate = (date) => {
    const day = date.getDate();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const month = monthNames[date.getMonth()];
    return `${day} ${month}`;
  };
</script>

<div class="{classList} relative flex w-full items-center font-['Sora'] text-lg">
  <div class="absolute bottom-6 right-0 flex items-center">
    <div
      class="me-2 -translate-y-[1px] bg-gradient-to-br from-amber-400 to-orange-500 bg-clip-text text-xs text-transparent">
      Registration period
    </div>
    <div class="h-0.5 w-8 bg-gradient-to-br from-amber-400 to-orange-500"></div>
    <div class="size-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"></div>
  </div>
  <span class="me-3 text-sm">{currentYear}</span>

  <div class="relative me-3 flex h-0.5 w-full items-center whitespace-nowrap bg-neutral">
    <div class="group absolute" style="left: 0%">
      <div class="size-3 rounded-full bg-neutral"></div>
    </div>

    {#each registrations as r}
      <div class="group absolute z-10" style="left: {calcPct(r.startDate)}%">
        <span class="absolute top-6 text-sm text-amber-400 group-last:right-0"
          >{formattedDate(r.startDate)}</span>
        <div class="size-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"></div>
      </div>

      <div
        class="absolute h-0.5 w-full bg-gradient-to-br from-amber-400 to-orange-500"
        style="left: {calcPct(r.startDate)}%; width: {calcPct(r.endDate) - calcPct(r.startDate)}%;">
      </div>

      <div class="group absolute z-10" style="left: {calcPct(r.endDate)}%">
        <span class="absolute top-6 text-sm text-amber-400 group-last:right-0"
          >{formattedDate(r.endDate)}</span>
        <div class="size-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500"></div>
      </div>
    {/each}

    <div
      class="absolute bottom-4 flex w-0 flex-col items-center justify-center"
      style="left: {((today - yearStart) / (1000 * 60 * 60 * 24) / 365) * 100}%">
      <span
        class="mb-1 bg-gradient-to-br from-amber-400 to-orange-500 bg-clip-text text-base font-semibold text-transparent lg:text-xl"
        class:text-amber-400={registrationsOpen}>
        {registrationsOpen ? "You can register now" : "Registration closed"}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-4 animate-bounce"
        class:text-gray-300={!registrationsOpen}
        class:text-amber-400={registrationsOpen}
        viewBox="0 0 24 24"
        ><path
          fill="currentColor"
          d="M6 8a1 1 0 0 0-.8 1.6l6 8a1 1 0 0 0 1.6 0l6-8A1 1 0 0 0 18 8z" /></svg>
      <div
        class="absolute -bottom-[19px] size-2 rounded-full"
        class:bg-gray-300={!registrationsOpen}
        class:bg-gradient-to-br={registrationsOpen}
        class:from-amber-400={registrationsOpen}
        class:to-orange-500={registrationsOpen}>
      </div>
      <div
        class="absolute -bottom-[19px] size-2 rounded-full"
        class:bg-gray-300={!registrationsOpen}
        class:bg-gradient-to-br={registrationsOpen}
        class:from-amber-400={registrationsOpen}
        class:to-orange-500={registrationsOpen}
        class:animate-ping={registrationsOpen}>
      </div>
    </div>

    <div class="group absolute" style="left: 100%">
      <div class="size-3 rounded-full bg-neutral"></div>
    </div>
  </div>
</div>
