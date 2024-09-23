<script lang="ts">
  import "../../styles/app.scss";
  import "../../styles/global.scss";

  import { Select } from "bits-ui";
  import { flyAndScale } from "$lib/utils";
  import { Palette , ChevronsDownUp, Check } from "lucide-svelte";

  const themes = [
    { value: "light-monochrome", label: "Light Monochrome" },
    { value: "dark-green", label: "Dark Green" },
    { value: "svelte-orange", label: "Svelte Orange" },
    { value: "punk-pink", label: "Punk Pink" },
  ];
</script>

<section class="container">
  <div class="main">
    <Select.Root items={themes}>
      <Select.Trigger
        class="select-trigger"
        aria-label="Select a theme"
      >
        <Palette class="lucide-16"/>
        <Select.Value class="select-value" placeholder="Select a theme" />
        <ChevronsDownUp class="lucide-16" />
      </Select.Trigger>
      <Select.Content
        class="select-content"
        transition={flyAndScale}
        sideOffset={8}
      >
        {#each themes as theme}
          <Select.Item
            class="select-item"
            value={theme.value}
            label={theme.label}
          >
            {theme.label}
            <Select.ItemIndicator class="select-itemindicator" asChild={false}>
              <Check class="lucide-16"/>
            </Select.ItemIndicator>
          </Select.Item>
        {/each}
      </Select.Content>
      <Select.Input name="favoriteFruit" />
    </Select.Root>
  </div>
</section>

<style>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: center;
    padding: 30px;
  }

  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.35em;
  }
</style>
