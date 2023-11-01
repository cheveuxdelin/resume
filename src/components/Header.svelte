<script lang="ts">
  import Headerlink from "./Headerlink.svelte";
  import { tab } from "../stores";
  import { onMount } from "svelte";

  export let defaultTab: string;
  export let tabs: string[];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-int eractions -->
<header
  class="p-5 grid items-center text-xs"
  style="grid-template-columns: 1fr auto 1fr;"
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    class="
      cursor-pointer
      w-fit
    "
    on:click={() => {
      $tab = defaultTab;
    }}
  >
    <slot name="Home" />
  </div>

  <nav class="flex gap-14 w-fit mx-auto">
    {#each tabs as t}
      {#if t !== defaultTab}
        <Headerlink name={t} />
      {/if}
    {/each}
  </nav>

  <div />
</header>
