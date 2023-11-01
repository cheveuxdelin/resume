<script lang="ts">
  import { blur } from "svelte/transition";
  export let src: string;
  let isHovered = false;
</script>

<div class="flex gap-5 overflow-scroll">
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <div
    style={`background-image: url(${src});`}
    class="w-[300px] h-[300px] flex items-end"
    on:mouseover={() => {
      isHovered = true;
    }}
    on:mouseleave={() => {
      isHovered = false;
    }}
  >
    {#if isHovered}
      <div
        class="backdrop-blur-sm bg-gray-500 w-full h-1/2"
        transition:blur={{ duration: 300}}
      >
        hola
      </div>
    {/if}
  </div>
</div>
