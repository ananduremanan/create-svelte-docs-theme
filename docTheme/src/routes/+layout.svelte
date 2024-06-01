<script lang="ts">
  import "../app.css";
  import Navbar from "./UI/Navbar.svelte";
  import Sidebar from "./UI/Sidebar.svelte";
  import { onMount, afterUpdate } from "svelte";
  import { page } from "$app/stores";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  import { fetchData, getNextPage, getPreviousPage } from "./utils/menuutils";
  import TableofContent from "./UI/TableofContent.svelte";

  let showSideBar = false;
  let menuItemsArray: any[] = [];
  let current_url = "/";
  let nextPage = "";
  let previousPage = "";
  let contentHtml: any;

  const toggleSidebar = () => {
    showSideBar = !showSideBar;
  };

  function assignIdsToHeadings(article: any) {
    const headings = article.querySelectorAll("h3, h4");
    headings.forEach((heading: any) => {
      if (!heading.id) {
        const id = heading.textContent
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-");
        heading.id = id;
      }
    });
  }

  async function init() {
    current_url = $page.url.pathname.split("/").filter(Boolean).pop() || "/";
    menuItemsArray = await fetchData();
    nextPage = getNextPage(current_url, menuItemsArray);
    previousPage = getPreviousPage(current_url, menuItemsArray);
    if (typeof document !== "undefined") {
      const article = document.querySelector("article");
      if (article) {
        contentHtml = article.innerHTML;
        assignIdsToHeadings(article);
      }
    }
  }

  onMount(init);
  afterUpdate(init);
</script>

<div class="flex flex-col h-screen">
  <Navbar
    on:mobile_menu_clicked={() => {
      toggleSidebar();
    }}
  />
  <div class="flex flex-1 overflow-hidden">
    <Sidebar bind:showSideBar />
    <div class="p-1 flex-1 overflow-auto content-container">
      <article
        class="prose lg:prose-xl dark:prose-invert px-4 md:text-base sx-content dark:prose-pre:bg-gray-700 mb-8"
      >
        <slot />
        <div class="flex justify-between mt-4">
          {#if previousPage}
            <a
              href={`/components/${previousPage}`}
              class="flex items-center justify-center font-thin no-underline"
              ><ChevronLeft size="20" /> {previousPage}</a
            >
          {/if}
          {#if nextPage}
            <a
              href={`/components/${nextPage}`}
              class="flex items-center justify-center font-thin no-underline"
              >{nextPage} <ChevronRight size="20" />
            </a>
          {/if}
        </div>
      </article>
    </div>
    <TableofContent {contentHtml} />
  </div>
</div>
