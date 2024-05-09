<script lang="ts">
  import { page } from "$app/stores";
  import { twMerge } from "tailwind-merge";

  export let menuItemsArray: any[];

  let current_url = "";
  $: {
    current_url = $page.url.pathname.split("/").filter(Boolean).pop() || "/";
  }
</script>

<div class="md:w-1/4 hidden md:block border-r sx-sidebar">
  {#if menuItemsArray}
    <ul class="dark:text-white px-12">
      <li
        class={`mt-2 w-full py-1 ${current_url === "/" ? "bg-blue-200 rounded-lg text-blue-500 dark:bg-blue-300" : ""}`}
      >
        <a href="/" class="p-1 w-full block">Introduction</a>
      </li>
      {#each menuItemsArray as menu}
        <li
          class={`mt-2 w-full py-1 ${current_url === menu ? "bg-blue-200 text-blue-500 rounded-lg dark:bg-blue-300" : ""}`}
        >
          <a href={`/components/${menu}`} class="w-full block p-1">{menu}</a>
        </li>
      {/each}
    </ul>
  {/if}
</div>
