<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  export let showSideBar: boolean;

  let menuItemsArray: any[] = [];

  async function fetchData() {
    const modules = import.meta.glob("../components/**/*.svx");
    const menuItems = Object.keys(modules).map(
      (item) => item.replace("../components/", "").split("/")[0]
    );
    menuItemsArray = menuItems;
  }

  let current_url = "/";
  $: {
    current_url = $page.url.pathname.split("/").filter(Boolean).pop() || "/";
  }

  onMount(fetchData);
</script>

<div
  class={`h-full border-r overflow-y-auto bg-white dark:bg-black dark:text-white p-4 transition-all transform w-80 ${!showSideBar ? "hidden" : "block w-64"} md:block`}
>
  <ul>
    <li
      class={`py-1 ${current_url === "/" ? "bg-blue-200 rounded-lg text-blue-500 dark:bg-blue-300" : ""}`}
    >
      <a
        href="/"
        class="block p-1"
        on:click={() => {
          showSideBar = !showSideBar;
        }}>Introduction</a
      >
    </li>
    {#each menuItemsArray as menu}
      <li
        class={` py-1 ${current_url === menu ? "bg-blue-200 text-blue-500 rounded-lg dark:bg-blue-300" : ""}`}
      >
        <a
          data-sveltekit-preload-data="tap"
          href={`/components/${menu}`}
          class="block p-1"
          on:click={() => {
            showSideBar = !showSideBar;
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}>{menu}</a
        >
      </li>
    {/each}
  </ul>
</div>
