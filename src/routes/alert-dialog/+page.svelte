<script lang="ts">
  import "../../styles/app.scss";
  import "../../styles/global.scss";
  import { AlertDialog, Button } from "bits-ui";
  import { flyAndScale } from "$lib/utils.js";
  import { fade } from "svelte/transition";
</script>

<div class="container">
  <div class="main">
    <AlertDialog.Root>
      <AlertDialog.Trigger class="alert-dialog-trigger">
        <Button.Root class="button type--primary size--md">Alert</Button.Root>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay
          transition={fade}
          transitionConfig={{ duration: 150 }}
          class="overlay"
        />
        <AlertDialog.Content
          transition={flyAndScale}
          class="alert-content"
        >
          <div class="alert-details">
            <AlertDialog.Title class="alert-title"
              >Confirm your transaction</AlertDialog.Title
            >
            <AlertDialog.Description class="alert-description">
              This action cannot be undone. This will initiate a monthly wire in
              the amount of $10,000 to Huntabyte. Do you wish to continue?
            </AlertDialog.Description>
          </div>
          <div class="alert-action-container">
            <AlertDialog.Cancel class="alert-dialog-trigger "
              ><Button.Root class="button type--destructive size--md"
                >Cancel</Button.Root
              ></AlertDialog.Cancel
            >
            <AlertDialog.Action class="alert-dialog-trigger"
              ><Button.Root class="button type--confirmative size--md"
                >Continue</Button.Root
              ></AlertDialog.Action
            >
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
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
