<script lang="ts">
  import type Manager from "../manager.js"
  import { onMount } from "svelte"

  let {
    manager,
  }: {
    manager: Manager
  } = $props()

  let image = $state("")

  onMount(() => {
    manager.state.onChange(manager.IMAGE_KEY, (newValue) => {
      image = newValue
    })
  })
</script>

<p>Camera Stream</p>
{#if image == null}
  <p>Waiting</p>
{:else if image == ""}
  <p>Disabled</p>
{:else}
  <img src={"data:image/jpeg;base64," + image} alt="Camera Stream" />
{/if}

<style>
  p {
    margin: 0;
  }

  img {
    width: 100%;
    height: auto;
  }
</style>
