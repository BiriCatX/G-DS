<script lang="ts">
  import "../../styles/app.scss";
  import "../../styles/global.scss";
  import { DropdownMenu } from "bits-ui";
  import { flyAndScale } from "$lib/utils";
  import {
    UserCircle,
    CreditCard,
    Settings,
    UserCog,
    AudioWaveform,
    UserRoundPlus,
    Ellipsis,
    ChevronRight,
    UserRoundPen,
    Bug,
  } from "lucide-svelte";
</script>

<div class="container">
  <div class="main">
    <DropdownMenu.Root>
      <DropdownMenu.Trigger class="dropdown-trigger">
        <Ellipsis class="h-6 w-6 text-foreground" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        class="dropdown-context"
        transition={flyAndScale}
        sideOffset={8}
      >
        <DropdownMenu.Item class="dropdown-item">
          <div class="dropdown-content">
            <UserCircle class="lucide-24" />
            Profile
          </div>
        </DropdownMenu.Item>
        <DropdownMenu.Item class="dropdown-item">
          <div class="dropdown-content">
            <CreditCard class="lucide-24" />
            Billing
          </div>
        </DropdownMenu.Item>
        <DropdownMenu.Item class="dropdown-item">
          <div class="dropdown-content">
            <Settings class="lucide-24" />
            Settings
          </div>
        </DropdownMenu.Item>
        <DropdownMenu.Separator class="dropdown-seperator" />
        <DropdownMenu.Sub>
          <DropdownMenu.SubTrigger class="dropdown-sub-trigger">
            <div class="dropdown-content">
              <UserRoundPlus class="lucide-24" />
              Invite users
            </div>
            <div class="dropdown-chevron">
              <ChevronRight class="lucide-24" />
            </div>
          </DropdownMenu.SubTrigger>
          <DropdownMenu.SubContent
            class="dropdown-subcontent"
            transition={flyAndScale}
            sideOffset={10}
          >
            <DropdownMenu.Item class="dropdown-item">
              <div class="dropdown-content">
                <UserRoundPen class="lucide-24" />
                U-990i
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Item class="dropdown-item">
              <div class="dropdown-content">
                <UserCog class="lucide-24" />
                U-878j
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Item class="dropdown-item">
              <div class="dropdown-content">
                <AudioWaveform class="lucide-24" />
                M-672l
              </div>
            </DropdownMenu.Item>
            <DropdownMenu.Item class="dropdown-item">
              <div class="dropdown-content">
                <Bug class="lucide-24" />
                B-404o
              </div>
            </DropdownMenu.Item>
          </DropdownMenu.SubContent>
        </DropdownMenu.Sub>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </div>
</div>
