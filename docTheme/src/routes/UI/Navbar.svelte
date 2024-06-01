<script>
  import { DarkMode } from "flowbite-svelte";
  import { Menu } from "lucide-svelte";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();
</script>

<nav class="bg-white px-4 py-1 border-b dark:bg-black dark:text-white">
  <div class="container mx-auto flex justify-between items-center">
    <span class="text-lg font-semibold flex items-center gap-2"
      ><button
        on:click={() => {
          dispatch("mobile_menu_clicked", { value: true });
        }}><Menu size="20" class="md:hidden" /></button
      >
      <a href="/">
        <div class="flex items-center gap-1">
          <div>
            <div>Svelte Theme Template</div>
            <div class="logo-tagline -mt-3">Svelete Component Library</div>
          </div>
        </div>
      </a>
    </span>
    <span class="flex items-center">
      <DarkMode class="text-dark dark:text-white" />
      <a
        href="https://github.com/ananduremanan/svelte-docs-template"
        target="_blank">Github</a
      >
    </span>
  </div>
</nav>

<style>
  .logo-tagline {
    font-size: 8px;
  }
</style>
