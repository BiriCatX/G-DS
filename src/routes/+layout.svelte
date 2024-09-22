<script lang="ts">
     import "../styles/app.scss";
    import "../styles/global.scss";
    import { Button } from "bits-ui";
  </script>
  
  <slot />
  
  <nav class="sidebar">
    <div class="heading">Documentation</div>
    <Button.Root class="button type--text size--sm" href="../" >Introduction</Button.Root>
    <Button.Root class="button type--text size--sm" disabled>Getting Started</Button.Root>
    <Button.Root class="button type--text size--sm" disabled>Installation</Button.Root>
    <Button.Root class="button type--text size--sm" href="../colorguidance">Color Guidance</Button.Root>
    <div class="sub-heading">Components</div>
    <Button.Root class="button type--text size--sm" href="../accordian">Accordian</Button.Root>
    <Button.Root class="button type--text size--sm" href="../alert-dialog">Alert Dialog</Button.Root>
    <Button.Root class="button type--text size--sm" href="../button">Button</Button.Root>
    <Button.Root class="button type--text size--sm" href="../checkbox">Checkbox</Button.Root>
    <Button.Root class="button type--text size--sm" href="../dialog">Dialog</Button.Root>
    <Button.Root class="button type--text size--sm" href="../input">Input</Button.Root>
    <Button.Root class="button type--text size--sm" href="../pagination">Pagination</Button.Root>
    <Button.Root class="button type--text size--sm" href="../radio-group">Radio Group</Button.Root>
    <Button.Root class="button type--text size--sm" href="../select">Select</Button.Root>
    <Button.Root class="button type--text size--sm" href="../sidebar">Sidebar</Button.Root>
    <Button.Root class="button type--text size--sm" href="../tabs">Tabs</Button.Root>
    <Button.Root class="button type--text size--sm" href="../textarea">Text Area</Button.Root>
  </nav>

