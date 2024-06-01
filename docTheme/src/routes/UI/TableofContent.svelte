<script lang="ts">
  export let contentHtml;

  let headings: any[] = [];

  $: {
    if (contentHtml) {
      // Ensure this runs only in the browser
      if (typeof window !== "undefined") {
        let parser = new DOMParser();
        let doc = parser.parseFromString(contentHtml, "text/html");
        headings = [...doc.querySelectorAll("h3, h4")].map((heading: any) => ({
          text: heading.textContent,
          id:
            heading.id ||
            heading.textContent.replace(/\s+/g, "-").toLowerCase(),
          tag: heading.tagName.toLowerCase(),
        }));
      }
    }
  }
</script>

<div class="hidden md:block md:w-80 px-10 py-4">
  <div class="font-bold">On This Page</div>
  <ul class="ml-2 mt-2 text-sm">
    {#each headings as heading}
      <li
        class={`m-2 hover:text-blue-400 ${heading.tag === "h4" ? "ml-6" : ""}`}
      >
        <a href={`#${heading.id}`}>{heading.text}</a>
      </li>
    {/each}
  </ul>
</div>
