<script>
  import "../app.css";
  import Navbar from "./UI/Navbar.svelte";
  import Sidebar from "./UI/Sidebar.svelte";

  let showSideBar = false;

  const toggleSidebar = () => {
    showSideBar = !showSideBar;
  };
</script>

<div class="flex flex-col h-screen">
  <Navbar
    on:mobile_menu_clicked={() => {
      toggleSidebar();
    }}
  />
  <div class="flex flex-1 overflow-hidden">
    <Sidebar bind:showSideBar />
    <div class="p-1 flex-1 overflow-auto">
      <article
        class="prose lg:prose-xl dark:prose-invert px-4 md:text-base sx-content dark:prose-pre:bg-gray-700"
      >
        <slot />
      </article>
    </div>
  </div>
</div>

<style global>
  body {
    @apply m-0 p-0;
  }
</style>
