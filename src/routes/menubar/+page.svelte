<script lang="ts">
  import "../../styles/app.scss";
  import "../../styles/global.scss";
  import { Menubar } from "bits-ui";
  import { flyAndScale } from "$lib/utils";
  import {
    ChevronRight,
    Cat,
    Check,
    ToggleRight,
    ToggleLeft,
  } from "lucide-svelte";

  let bookmarks = false;
  let fullUrls = true;
  let pixelGrid = true;
  let layoutGrid = false;
  let view = "table";
  let profile = "pavel";
</script>

<div class="container">
  <div class="main">
    <Menubar.Root class="menubar-root">
      <Cat class="lucide-24" />
      <Menubar.Menu>
        <Menubar.Trigger class="menubar-trigger">View</Menubar.Trigger>
        <Menubar.Content
          class="menubar-content"
          transition={flyAndScale}
          align="start"
          sideOffset={3}
        >
          <Menubar.CheckboxItem class="menubar-item" bind:checked={pixelGrid}>
            Pixel grid
            <Menubar.CheckboxIndicator>
              <ToggleRight class="lucide-24" />
            </Menubar.CheckboxIndicator>
            {#if !pixelGrid}
              <ToggleLeft class="lucide-24" />
            {/if}
          </Menubar.CheckboxItem>
          <Menubar.CheckboxItem class="menubar-item" bind:checked={layoutGrid}>
            Layout grid
            <Menubar.CheckboxIndicator class="ml-auto">
              <ToggleRight class="lucide-24" />
            </Menubar.CheckboxIndicator>
            {#if !layoutGrid}
              <ToggleLeft class="lucide-24" />
            {/if}
          </Menubar.CheckboxItem>
          <Menubar.Separator />
          <Menubar.RadioGroup bind:value={view}>
            <Menubar.RadioItem value="table" class="menubar-item">
              Table
              <Menubar.RadioIndicator>
                <Check class="lucide-24" />
              </Menubar.RadioIndicator>
            </Menubar.RadioItem>
            <Menubar.RadioItem value="board" class="menubar-item">
              Board
              <Menubar.RadioIndicator>
                <Check class="lucide-24" />
              </Menubar.RadioIndicator>
            </Menubar.RadioItem>
            <Menubar.RadioItem value="gallery" class="menubar-item">
              Gallery
              <Menubar.RadioIndicator>
                <Check class="lucide-24" />
              </Menubar.RadioIndicator>
            </Menubar.RadioItem>
          </Menubar.RadioGroup>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class="menubar-trigger">Edit</Menubar.Trigger>
        <Menubar.Content
          class="menubar-content"
          transition={flyAndScale}
          align="start"
          sideOffset={3}
        >
          <Menubar.Item class="menubar-item">Undo</Menubar.Item>
          <Menubar.Item class="menubar-item">Redo</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Sub>
            <Menubar.SubTrigger class="menubar-subtrigger">
              Find

              <ChevronRight class="lucide-24" />
            </Menubar.SubTrigger>
            <Menubar.SubContent
              class="menubar-content"
              transition={flyAndScale}
            >
              <Menubar.Item class="menubar-item">Search the web</Menubar.Item>
              <Menubar.Separator />
              <Menubar.Item class="menubar-item">Find...</Menubar.Item>
              <Menubar.Item class="menubar-item">Find Next</Menubar.Item>
              <Menubar.Item class="menubar-item">Find Previous</Menubar.Item>
            </Menubar.SubContent>
          </Menubar.Sub>
          <Menubar.Separator />
          <Menubar.Item class="menubar-item">Cut</Menubar.Item>
          <Menubar.Item class="menubar-item">Copy</Menubar.Item>
          <Menubar.Item class="menubar-item">Paste</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class="menubar-trigger">View</Menubar.Trigger>
        <Menubar.Content
          class="menubar-content"
          transition={flyAndScale}
          align="start"
          sideOffset={3}
        >
          <Menubar.CheckboxItem class="menubar-item" bind:checked={bookmarks}>
            Show Bookmarks Bar
            <Menubar.CheckboxIndicator>
              <ToggleRight class="lucide-24" />
            </Menubar.CheckboxIndicator>
            {#if !bookmarks}
              <ToggleLeft class="lucide-24" />
            {/if}
          </Menubar.CheckboxItem>
          <Menubar.CheckboxItem class="menubar-item" bind:checked={fullUrls}>
            Show Full URLs
            <Menubar.CheckboxIndicator>
              <ToggleRight class="lucide-24" />
            </Menubar.CheckboxIndicator>
            {#if !fullUrls}
              <ToggleLeft class="lucide-24" />
            {/if}
          </Menubar.CheckboxItem>
          <Menubar.Separator />
          <Menubar.Item class="menubar-item">Reload</Menubar.Item>
          <Menubar.Item class="menubar-item">Force Reload</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item class="menubar-item">Toggle Fullscreen</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item class="menubar-item">Hide Sidebar</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
      <Menubar.Menu>
        <Menubar.Trigger class="menubar-trigger">Profiles</Menubar.Trigger>
        <Menubar.Content
          class="menubar-content"
          transition={flyAndScale}
          align="start"
          sideOffset={3}
        >
          <Menubar.RadioGroup bind:value={profile}>
            <Menubar.RadioItem class="menubar-item" value="hunter">
              Hunter
              <Menubar.RadioIndicator>
                <Check class="lucide-24" />
              </Menubar.RadioIndicator>
            </Menubar.RadioItem>
            <Menubar.RadioItem class="menubar-item" value="pavel">
              Pavel
              <Menubar.RadioIndicator>
                <Check class="lucide-24" />
              </Menubar.RadioIndicator>
            </Menubar.RadioItem>
            <Menubar.RadioItem class="menubar-item" value="adrian">
              Adrian
              <Menubar.RadioIndicator>
                <Check class="lucide-24" />
              </Menubar.RadioIndicator>
            </Menubar.RadioItem>
          </Menubar.RadioGroup>
          <Menubar.Separator />
          <Menubar.Item class="menubar-item">Edit...</Menubar.Item>
          <Menubar.Separator />
          <Menubar.Item class="menubar-item">Add Profile...</Menubar.Item>
        </Menubar.Content>
      </Menubar.Menu>
    </Menubar.Root>
  </div>
</div>
