<!-- src/components/ContactForm.svelte -->
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
  class="relative flex min-h-full w-96 max-w-[512px] flex-col justify-center rounded-3xl border border-zinc-600 bg-zinc-100/80 p-8 text-start shadow-xl">
  {#if isSubmitting}
    <div
      id="overlay"
      class="absolute inset-0 z-50 flex items-center justify-center rounded-3xl bg-zinc-100/90">
      <p class="inline-flex items-end text-zinc-800">
        Sending<span class="loading loading-dots loading-sm ms-1"></span>
      </p>
    </div>
  {/if}

  <h1 class="mb-2 text-xl font-semibold">Leave a message</h1>
  <p class="mb-6 text-sm">I'd love to hear from you!</p>

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
    class="mb-3 w-full rounded-lg border border-zinc-300 bg-transparent p-2"
    required />
  <input
    type="email"
    name="email"
    placeholder="Email"
    bind:value={email}
    class="mb-3 w-full rounded-lg border border-zinc-300 bg-transparent p-2"
    required />
  <textarea
    name="message"
    placeholder="Message"
    bind:value={message}
    class="mb-3 w-full rounded-lg border border-zinc-300 bg-transparent p-2"
    required></textarea>
  <button
    type="submit"
    class="w-full rounded-lg bg-zinc-800 p-2 font-semibold text-white"
    disabled={isSubmitting}>
    Send
  </button>
</form>
