<script>
  export let title = "";
  export let content = "";
</script>

<div
  class="flex flex-col shadow-lg rounded-xl border p-4 justify-center items-center hover:animate-bounce cursor-pointer"
>
  <div class="text-lg md:text-2xl">{title}</div>
  <p class="text-xs mt-2">
    {content}
  </p>
</div>
