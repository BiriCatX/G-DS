<script lang="ts">
  import "../../styles/app.scss";
  import "../../styles/global.scss";

  import { Dialog, Separator, Label } from "bits-ui";
  import { flyAndScale } from "$lib/utils";
  import { X, LockOpen } from "lucide-svelte";
  import { fade } from "svelte/transition";
  import { Button } from "bits-ui";
</script>

<div class="container">
    <div class="main">
        <Dialog.Root>
            <Dialog.Trigger>
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
                <div class="flex flex-col items-start gap-1 pb-11 pt-7">
                  <Label.Root for="apiKey" class="input__container">API Key</Label.Root>
                  <div style="">
                    <input
                      id="apiKey"
                      class="input"
                      placeholder="secret_api_key"
                      type="password"
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div class="flex w-full justify-end">
                  <Dialog.Close>
                    <Button.Root class="button type--confirmative size--md"
                      >Save</Button.Root
                    >
                  </Dialog.Close>
                </div>
                <Dialog.Close
                  class="absolute right-5 top-5"
                >
                  <div>
                    <X class="lucide-24" />
                  </div>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>

    </div>
</div>


<style lang="scss">
    .container {
      display: flex;
      justify-content: center;
      padding: 30px;
    }
  
    .main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1.35em;
    }
  </style>