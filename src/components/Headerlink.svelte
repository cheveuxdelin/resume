<script lang="ts">
  export let name: string;
  import { tab } from "../stores";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class={`uppercase cursor-pointer
          hover:text-gray-100
          ${name === $tab ? "!text-green-500" : ""}
          headerlink
    `}
  on:click={() => {
    $tab = name;
  }}
>
  {name}
</div>

<style>
  .headerlink:hover {
    transition: cubic-bezier(0.785, 0.135, 0.15, 0.86);
  }
</style>
