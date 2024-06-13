<script lang="ts">
  import Card from "$lib/Card.svelte";
  import { onMount } from "svelte";

  let isCopied = false;
  let isCopiedBun = false;

  async function copyToClipboard(text: string, isBun: boolean) {
    try {
      await navigator.clipboard.writeText(text);
      if (isBun) {
        isCopiedBun = true;
      } else {
        isCopied = true;
      }
      setTimeout(() => {
        isCopied = false;
        isCopiedBun = false;
      }, 2000);
    } catch (err) {
      console.error("Error in copying text: ", err);
    }
  }
</script>

<section
  class="flex flex-col justify-center items-center text-center mt-12 md:px-60"
>
  <h1 class="text-2xl font-bold">Svelte Docs Generator</h1>
  <p class="text-sm">
    Effortlessly Generate Documentation for Your Svelte Projects and More
  </p>

  <div class="mt-8">
    <p>Installation</p>
    <button
      class="bg-gray-200 p-2 mt-2 px-4"
      on:click={() =>
        copyToClipboard("npx create-svelte-docs-theme@latest mydocs", false)}
    >
      <code>npx create-svelte-docs-theme@latest mydocs</code>
    </button>
    {#if isCopied}
      <p class="text-green-500">Text copied to clipboard</p>
    {/if}
  </div>

  <span>Or</span>

  <div class="">
    <button
      class="bg-gray-200 p-2 mt-2 px-4"
      on:click={() =>
        copyToClipboard("bunx create-svelte-docs-theme@latest mydocs", true)}
    >
      <code>bunx create-svelte-docs-theme@latest mydocs</code>
    </button>
    {#if isCopiedBun}
      <p class="text-green-500">Text copied to clipboard</p>
    {/if}
  </div>

  <div class="mt-4">
    Watch it in action <a
      href="https://gbs-svelte-bblock.netlify.app/"
      class="underline decoration-dotted font-bold"
      target="_blank">@here</a
    >
  </div>

  <div class="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
    <Card
      title="Dark Mode"
      content="Inbuilt support for dark mode, ensuring seamless readability and comfort even during late-night coding sessions."
    />
    <Card
      title="Tailwind Support"
      content="Craft stunning documentation effortlessly with built-in Tailwind CSS support, empowering customization and style of documentation with ease."
    />
    <Card
      title="Effortless Customization"
      content="Tailor every documentation effortlessly with intuitive customization options to personalize themes, layouts, and styles according to project's unique requirements."
    />
    <Card
      title="SVX Support"
      content="Integration of Markdown content alongside Svelte components for comprehensive and dynamic documentation."
    />
  </div>

  <p class="mt-16">
    For Bug Report, Code, Questions and More <a
      href="https://github.com/ananduremanan/create-svelte-docs-theme"
      class="underline decoration-dotted">Github</a
    >
  </p>
  <p>Svelte Docs Generator © 2024</p>
</section>
