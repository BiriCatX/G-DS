<script lang="ts">
  import "../../app.css";
  import "../../styles/app.scss";
  import "../../styles/global.scss";
  import { Checkbox, Label } from "bits-ui";
  import { Check, X } from 'lucide-svelte';
</script>

<div class="flex items-center space-x-3">
  <Checkbox.Root
    id="terms"
    aria-labelledby="terms-label"
    class="checkbox-root"
    checked="indeterminate"
  >
    <Checkbox.Indicator
      let:isChecked
      let:isIndeterminate
      class="checkbox-background"
    >
      {#if isChecked}
      <Check class="lucide-16"/>
      {:else if isIndeterminate}
      <X class="lucide-16"/>
      {/if}
    </Checkbox.Indicator>
  </Checkbox.Root>
  <Label.Root
    id="terms-label"
    for="terms"
    class="label-root"
  >
    Accept terms and conditions
  </Label.Root>
</div>
