---
date: <%tp.file.title.split("-")[1]%>
meditation: x
medicine: x
push-ups: x
ride-bike: x
presentation: x
write500words: x
day-journal: x
review-principle: x
drink-1500ml: x
no-distraction: x
focus-on-1thing: x
practice-memory: x
healthy-drink: x
eat-mindfulness: x
---
tags: #Daily
# <% tp.file.title %>
[[<% "Day Planners/Day Planner-" + tp.date.now("YYYYMMDD", -1, tp.file.title, "YYYY-MM-DD") %>]]  <== **Today** ==> [[<% "Day Planners/Day Planner-" + tp.date.now("YYYYMMDD", 1, tp.file.title, "YYYY-MM-DD") %>]] 
# Most Important Tasks (MIT)
## On my own
```tasks
priority is above low
starts before <%tp.date.now("YYYY-MM-DD", 1, tp.file.title.split("-")[1], "YYYYMMDD")%>
not done
description does not include [[@
path does not include Template
sort by due date
sort by path
limit 3
```
## With Team
```tasks
starts before <%tp.date.now("YYYY-MM-DD", 1, tp.file.title.split("-")[1], "YYYYMMDD")%>
priority is above low
not done
description includes [[@
path does not include Templates
sort by due date
sort by path
limit 3
```
# Due in 3 days
```tasks
due before <%tp.date.now("YYYY-MM-DD", 3, tp.file.title.split("-")[1], "YYYYMMDD")%>
not done
sort by due
path does not include Templates
limit 3
```
# Low priority task
```tasks
starts <%tp.date.now("YYYY-MM-DD", 0, tp.file.title.split("-")[1], "YYYYMMDD")%>
priority is low
not done
path does not include Templates
limit 3
```
# Time-block
## Morning
- [ ] 07:00
- [ ] 07:30
- [ ] 08:00
- [ ] 08:30
- [ ] 09:00 Relax 30 minutes
- [ ] 09:30
- [ ] 10:00
- [ ] 10:30
- [ ] 11:00
## Afternoon
- [ ] 12:30
- [ ] 13:00
- [ ] 13:30
- [ ] 14:00
- [ ] 14:30
- [ ] 15:00 Relax 30 minutes
- [ ] 15:30
- [ ] 16:00
- [ ] 16:30
- [ ] 17:00
## Evening
- [ ] 19:00 
- [ ] 19:30 
- [ ] 20:00 
# Agenda
(Write before the event start)

# Day Journal
## 3 highlight I accomplished Today 
- 
## What Did I Learn About Today?
- 
## 3 things I'm grateful for
- 
## I forgive

## Done today !! High 5 with ME
```tasks
done <%tp.date.now("YYYY-MM-DD", 0, tp.file.title.split("-")[1], "YYYYMMDD")%>
path does not include Template
sort by path
```

# Tomorrow's Task
## On my own
```tasks
priority is above low
starts before <%tp.date.now("YYYY-MM-DD", 2, tp.file.title.split("-")[1], "YYYYMMDD")%>
not done
description does not include [[@
path does not include Template
sort by due date
sort by path
limit 3
```
## With Team
```tasks
priority is above low
starts before <%tp.date.now("YYYY-MM-DD", 2, tp.file.title.split("-")[1], "YYYYMMDD")%>
not done
description includes [[@
path does not include Template
sort by due date
sort by path
limit 3
```

# Today's note

# Today's Quick Capture
## Learn
![[Quick Capture/Learn_<%tp.date.now("YYYY-MM-DD", 0, tp.file.title.split("-")[1], "YYYYMMDD")%>]]
## Thought, Ideas
![[Quick Capture/Thought_<%tp.date.now("YYYY-MM-DD", 0, tp.file.title.split("-")[1], "YYYYMMDD")%>]]
## Task
![[Quick Capture/Task_<%tp.date.now("YYYY-MM-DD", 0, tp.file.title.split("-")[1], "YYYYMMDD")%>]]
## Clipboard Note
![[Quick Capture/Note_<%tp.date.now("YYYY-MM-DD", 0, tp.file.title.split("-")[1], "YYYYMMDD")%>]]