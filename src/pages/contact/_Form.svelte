<script>
  let name = "";
  let email = "";
  let message = "";
  let isSubmitting = false;
  let isSuccess = false;
  let errorMessage = "";

  const submitForm = async () => {
    isSubmitting = true;
    isSuccess = false;
    errorMessage = "";

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    });

    isSubmitting = false;

    const result = await response.json();

    if (response.ok) {
      console.log("Form submitted successfully");
      isSuccess = true;
      // Reset the form fields
      name = "";
      email = "";
      message = "";
    } else {
      console.error("Form submission failed: ", result.message);
      errorMessage = result.message || "Something went wrong, please try again.";
    }
  };
</script>

<form
  on:submit|preventDefault={submitForm}
  class="relative flex min-h-full w-96 max-w-[512px] flex-col justify-center rounded-3xl border border-transparent dark:border-neutral-400/20 dark:bg-dark-gradient bg-fixed bg-neutral-50 p-8 text-start shadow shadow-red-800 dark:shadow-amber-500">
  {#if isSubmitting}
    <div
      id="overlay"
      class="absolute inset-0 z-50 flex items-center justify-center rounded-3xl backdrop-blur">
      <span class="animate-pulse text-xl">Sending...</span>
    </div>
  {/if}

  <h1 class="mb-3 text-2xl sm:text-3xl font-semibold">Contact Me</h1>
  <p class="mb-6 text-sm sm:text-base">Feel free to reach out to me for any queries or feedback.</p>

  <!-- Display submission status to the user -->
  {#if isSubmitting}
    <p class="mb-6">Sending message...</p>
  {:else if isSuccess}
    <p class="mb-6 text-green-600">Message sent successfully!</p>
  {:else if errorMessage}
    <p class="mb-6 text-red-600">{errorMessage}</p>
  {/if}

  <input
    type="text"
    name="name"
    placeholder="Name"
    bind:value={name}
    class="mb-3 w-full rounded-lg border border-neutral-800/10 dark:border-neutral-400/5 bg-transparent px-4 py-2 duration-300 outline-1 focus:border-transparent focus:outline-red-800 dark:focus:outline-amber-500 outline-none"
    required />
  <input
    type="email"
    name="email"
    placeholder="Email"
    bind:value={email}
    class="mb-3 w-full rounded-lg border border-neutral-800/10 dark:border-neutral-400/5 bg-transparent px-4 py-2 duration-300 outline-1 focus:border-transparent focus:outline-red-800 dark:focus:outline-amber-500 outline-none"
    required />
  <textarea
    name="message"
    placeholder="Message"
    bind:value={message}
    class="mb-6 w-full rounded-lg border border-neutral-800/10 dark:border-neutral-400/5 bg-transparent px-4 py-2 duration-300 outline-1 focus:border-transparent focus:outline-red-800 dark:focus:outline-amber-500 outline-none"
    required></textarea>
  <button
    type="submit"
    class="w-full rounded-lg bg-gradient-to-br text-white/95 dark:text-neutral-800 from-red-800 to-orange-700 dark:from-amber-500 dark:to-orange-400 py-2 px-4 font-semibold text-neutral-800 font-['Sora_Variable'] border border-red-800 dark:border-transparent duration-300 outline-1 focus:outline-amber-500 outline-none"
    disabled={isSubmitting}>
    Send
  </button>
</form>
