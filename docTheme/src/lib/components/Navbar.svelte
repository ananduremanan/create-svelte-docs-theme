<script lang="ts">
  import { DarkMode } from "flowbite-svelte";
  import { EllipsisVertical } from "lucide-svelte";
  import { page } from "$app/stores";

  export let menuItemsArray: any[];

  let current_url = "";
  $: {
    current_url = $page.url.pathname.split("/").filter(Boolean).pop() || "/";
  }

  let showMenuMobile = false;
</script>

<nav
  class="p-4 flex justify-between items-center glass fixed top-0 dark:text-white z-50 md:px-16 border-b w-full dark:border-b-0"
>
  <a href="/">GBS Svelte Building Block</a>
  <div class="flex justify-center items-center gap-2">
    <DarkMode />
    <input
      placeholder="Search Documentation"
      class="bg-gray-100 px-2 py-1 rounded-lg outline-none hidden md:block"
    />
    <a
      href="https://github.com/ananduremanan/svelte-docs-template"
      target="_blank"><img src="/icons/github.svg" alt="" class="w-6 h-6" /></a
    >
    <button
      on:click={() => {
        showMenuMobile = !showMenuMobile;
      }}
    >
      <EllipsisVertical size="18" class="md:hidden" />
    </button>
  </div>
</nav>

{#if showMenuMobile}
  <div class="z-10 sticky top-16 bg-white p-4 border-b glass">
    {#if menuItemsArray}
      <ul class="dark:text-white">
        <li
          class={`mt-2 w-full py-1 ${current_url === "/" ? "bg-blue-200 rounded-lg text-blue-500 dark:bg-blue-300" : ""}`}
        >
          <a
            href="/"
            class="p-1 w-full block"
            on:click={() => {
              showMenuMobile = !showMenuMobile;
            }}>Introduction</a
          >
        </li>
        {#each menuItemsArray as menu}
          <li
            class={`mt-2 w-full py-1 ${current_url === menu ? "bg-blue-200 text-blue-500 rounded-lg dark:bg-blue-300" : ""}`}
          >
            <a
              href={`/components/${menu}`}
              class="w-full block p-1"
              on:click={() => {
                showMenuMobile = !showMenuMobile;
              }}>{menu}</a
            >
          </li>
        {/each}
      </ul>
    {/if}
  </div>
{/if}

<style>
  .glass {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
  }
</style>
