tags: #Daily
*<%tp.file.title%>*

# Time block
| Day 1                                                                                                                  | Day 2                                                                                                                  | Day 3                                                                                                                  | Day 4                                                                                                                  | Day 5                                                                                                                  | Day 6                                                                                                                  | Day 7                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -6, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Time-block]] | ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -5, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Time-block]] | ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -4, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Time-block]] | ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -3, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Time-block]] | ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -2, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Time-block]] | ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -1, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Time-block]] | ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", 0, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Time-block]] | 

# Quick capture
| Day 1                                                                                                                  | Day 2                                                                                                                  | Day 3                                                                                                                  | Day 4                                                                                                                  | Day 5                                                                                                                  | Day 6                                                                                                                  | Day 7                                                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -6, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Today's Quick Capture]] | ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -5, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Today's Quick Capture]] | ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -4, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Today's Quick Capture]] | ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -3, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Today's Quick Capture]] | ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -2, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Today's Quick Capture]] | ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -1, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Today's Quick Capture]] | ![[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", 0, tp.file.title.split("_")[1], "YYYY-MM-DD")%>#Today's Quick Capture]] | 

# Score
<% tp.file.cursor(1) %>
- note I create by project
- what I learn from each project
- journal I learn
- success learning circle I done -- just do complete circle after it fade
- success learning = brainstorm - search content - read - understand - remember - apply - result - done circle

# Feeling
- each stage in journal, what make you high/low/medium/bore/unsatisfied - why
- re talk to myself

# Review
- final result about higlight
- key-point

# Celebrate
- celebrate myself
- celebrate with other --

# Weekly Review:
[[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -6, tp.file.title.split("_")[1], "YYYY-MM-DD")%>]]
[[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -5, tp.file.title.split("_")[1], "YYYY-MM-DD")%>]]
[[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -4, tp.file.title.split("_")[1], "YYYY-MM-DD")%>]]
[[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -3, tp.file.title.split("_")[1], "YYYY-MM-DD")%>]]
[[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -2, tp.file.title.split("_")[1], "YYYY-MM-DD")%>]]
[[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", -1, tp.file.title.split("_")[1], "YYYY-MM-DD")%>]]
[[<%"Day Planners/Day Planner-"+tp.date.now("YYYYMMDD", 0, tp.file.title.split("_")[1], "YYYY-MM-DD")%>]]
<!--ID: 1642998563492-->

# Recap

# Habit Summary
```dataview
TABLE
  meditation AS "🧘",
  medicine AS "💊",
  push-ups AS "💪",
  ride-bike AS "🚲",
  presentation AS "🎤",
  write500words AS "🖊️",
  day-journal AS "📰",
  review-principle AS "🧑‍🏫",
  drink-1500ml AS "🧴",
  no-distraction AS "📵",
  focus-on-1thing AS "🥅",
  practice-memory AS "🧠",
  healthy-drink AS "🍼",
  eat-mindfulness AS "E🧘"
FROM "Day Planners" 
WHERE contains(file.name,"Day Planner-")
SORT file.ctime DESC
LIMIT 20
```