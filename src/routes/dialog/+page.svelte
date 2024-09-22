<script lang="ts">
  import "../../styles/app.scss";
  import "../../styles/global.scss";

  import { Dialog, Separator, Label } from "bits-ui";
  import { flyAndScale } from "$lib/utils";
  import { fade } from "svelte/transition";
  import { Button } from "bits-ui";
</script>

<div class="container">
    <div class="main">
        <Dialog.Root>
            <Dialog.Trigger class="dialog-trigger">
              <Button.Root class="button type--secondary size--md"
                >New API Key</Button.Root
              >
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay
                transition={fade}
                transitionConfig={{ duration: 150 }}
                class="overlay"
              />
              <Dialog.Content transition={flyAndScale} class="dialog-content ">
                <Dialog.Title
                  class="dialog-title"
                  >Create API key</Dialog.Title
                >
                <Separator.Root class="dialog-seperator" />
                <Dialog.Description class="dialog-description">
                  Create and manage API keys. You can create multiple keys to organize
                  your applications.
                </Dialog.Description>
                <div class="">
                  <Dialog.Close class="dialog-trigger">
                    <Button.Root class="button type--confirmative size--md"
                      >Close</Button.Root
                    >
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

    </div>
</div>
