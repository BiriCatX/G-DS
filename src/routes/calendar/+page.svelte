<script lang="ts">
  import "../../styles/app.scss";
  import "../../styles/global.scss";
  import { Calendar } from "bits-ui";
  import { ChevronLeft, ChevronRight } from "lucide-svelte";
  const isDateUnavailable: Calendar.Props["isDateUnavailable"] = (date) => {
    return date.day === 17 || date.day === 18;
  };
</script>

<div class="container">
  <div class="main">
    <Calendar.Root
      class="calendar-root"
      let:months
      let:weekdays
      {isDateUnavailable}
      weekdayFormat="short"
      fixedWeeks={true}
    >
      <Calendar.Header class="calendar-header">
        <Calendar.PrevButton class="calendar-button">
          <ChevronLeft class="lucide-24" />
        </Calendar.PrevButton>
        <Calendar.Heading class="calendar-heading" />
        <Calendar.NextButton class="calendar-button">
          <ChevronRight class="lucide-24" />
        </Calendar.NextButton>
      </Calendar.Header>
      <div class="calendar-container">
        {#each months as month, i (i)}
          <Calendar.Grid class="calendar-grid">
            <Calendar.GridHead>
              <Calendar.GridRow class="calendar-gridrow">
                {#each weekdays as day}
                  <Calendar.HeadCell class="calendar-headcell">
                    <div>{day.slice(0, 2)}</div>
                  </Calendar.HeadCell>
                {/each}
              </Calendar.GridRow>
            </Calendar.GridHead>
            <Calendar.GridBody>
              {#each month.weeks as weekDates}
                <Calendar.GridRow class="calendar-gridrow">
                  {#each weekDates as date}
                    <Calendar.Cell {date} class="calendar-cell">
                      <Calendar.Day
                        {date}
                        month={month.value}
                        class="calendar-day"
                      >
                        {date.day}
                      </Calendar.Day>
                    </Calendar.Cell>
                  {/each}
                </Calendar.GridRow>
              {/each}
            </Calendar.GridBody>
          </Calendar.Grid>
        {/each}
      </div>
    </Calendar.Root>
  </div>
</div>
