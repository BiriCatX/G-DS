<script lang="ts">
    import "../../styles/app.scss";
    import "../../styles/global.scss";
    import { RangeCalendar } from "bits-ui";
    import { cn } from "$lib/utils";
    import { ChevronLeft, ChevronRight } from "lucide-svelte";
  </script>
   
<div class="container">
    <div class="main">
        <RangeCalendar.Root
        class="calendar-root"
        let:months
        let:weekdays
        weekdayFormat="short"
        fixedWeeks={true}
      >
        <RangeCalendar.Header class="calendar-header">
          <RangeCalendar.PrevButton
            class="calendar-button"
          >
            <ChevronLeft class="lucide-24" />
          </RangeCalendar.PrevButton>
          <RangeCalendar.Heading class="calendar-heading" />
          <RangeCalendar.NextButton
            class="calendar-button"
          >
            <ChevronRight class="lucide-24" />
          </RangeCalendar.NextButton>
        </RangeCalendar.Header>
        <div
          class="calendar-container"
        >
          {#each months as month}
            <RangeCalendar.Grid class="calendar-grid">
              <RangeCalendar.GridHead>
                <RangeCalendar.GridRow class="calendar-gridrow">
                  {#each weekdays as day}
                    <RangeCalendar.HeadCell
                      class="calendar-headcell"
                    >
                      <div>{day.slice(0, 2)}</div>
                    </RangeCalendar.HeadCell>
                  {/each}
                </RangeCalendar.GridRow>
              </RangeCalendar.GridHead>
              <RangeCalendar.GridBody>
                {#each month.weeks as weekDates}
                  <RangeCalendar.GridRow class="calendar-gridrow">
                    {#each weekDates as date}
                      <RangeCalendar.Cell
                        {date}
                        class="calendar-cell"
                      >
                        <RangeCalendar.Day
                          {date}
                          month={month.value}
                          class={cn(
                            "calendar-day"
                          )}
                        >
                          {date.day}
                        </RangeCalendar.Day>
                      </RangeCalendar.Cell>
                    {/each}
                  </RangeCalendar.GridRow>
                {/each}
              </RangeCalendar.GridBody>
            </RangeCalendar.Grid>
          {/each}
        </div>
      </RangeCalendar.Root>

    </div>
</div>

