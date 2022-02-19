---
tags: Learn/s
publish: true
aliases: 
  - 
cssclass: 
type: book
status: 🟥️
author:
general subject:
specific subject:
---
TARGET DECK: {{VALUE:Book Title}}
Source Link: {{VALUE:Calibre, Web, Paper}}
Location: {{VALUE:Location's Detail}}
![[Attachment/bookmind.jpg]]
----
**<%tp.file.title%>**
�📚📚📚📚📚📚📚📚📚📚📚📚📚📚📚📚📚📚

----
**Memory**
[[{{VALUE: Book Title}}-Mind Palace]]

[[{{VALUE: Book Title}}-Reference]]

[[{{VALUE: Book Title}}-Plan and Goal]]

---
**Content**
<%tp.file.cursor(1)%>

**Highlights**
```dataviewjs
let counter = 1
let level = 3
let arrSlashSep = []
async function extractHighlight1Level(path, level) {
	if (level == 0) {
		return
	}
	let content = await dv.io.load(path);
	let linkregexp = /[\w\d\S]*\[\[(.*)\]\]/g
	let highlightregexp = /[\w\d\S]*\=\=(.*)\=\=/g
	let linkAndHighlightRegexp = /(\=\=([^=\n]+)\=\=[ ]*(\^?(\w+)?)|\[\[([^\]\n]+)\]\])/mg
	let matchLinks = content.match(linkAndHighlightRegexp)
	for (let vari in matchLinks) {
		//dv.el("h2", matchLinks[vari])
		if (matchLinks[vari].startsWith("[[",0)) {
			let filePath = matchLinks[vari].replace(/\[\[/, "").replace(/\]\]/, "")
			let filePathWithExt = filePath + ".md"
			let file = dv.page(filePathWithExt)
			// dv.el("h4", filePath + " :") // Show the link 	title
			if (file !== undefined) {
				await extractHighlight1Level(filePathWithExt, level - 1)
			}
		}
		else if (matchLinks[vari].startsWith("==", 0)) {
			if (matchLinks[vari].includes("Switch to EXCALIDRAW VIEW in the MORE OPTIONS menu of this document.")) {
				continue
				}
			if (matchLinks[vari] !== undefined) {
				let contentAfterSlashAndBreakLine = ""
				let indexOfSlash = matchLinks[vari].indexOf("|")
				let contentBeforeSlash = (indexOfSlash != -1) ? matchLinks[vari].slice(0, indexOfSlash): matchLinks[vari]
				let contentAfterSlash = (indexOfSlash != -1) ? counter++ + "|" + matchLinks[vari].slice(indexOfSlash + 1): ""
				contentBeforeSlash = contentBeforeSlash.replace(/\=\=/g, "")
				contentAfterSlash = contentAfterSlash.replace(/\=\=/g, "").replace("**", "")
				if (matchLinks[vari].includes("\^")) {
					//dv.el("h4", "herehere" + matchLinks[vari])
					let blockLinkNumber = matchLinks[vari].slice(matchLinks[vari].indexOf("\^") + 1)
					if (contentBeforeSlash.includes("^")) {
						contentBeforeSlash = contentBeforeSlash.slice(0, contentBeforeSlash.indexOf("^"))
					}
					contentBeforeSlash += "[[" + path.replace(".md", "").trim() + "\#\^" + blockLinkNumber + "|" + blockLinkNumber + "]]"
					if (contentAfterSlash.includes("^")) {
						contentAfterSlash = contentAfterSlash.slice(0, contentAfterSlash.indexOf("^"))
					}
				}
				let splitContent = contentAfterSlash.split(" ")
				for (let varii in splitContent) {
					if (varii % 5 == 0 && varii > 0) {
					contentAfterSlashAndBreakLine += "\n"
					}
					contentAfterSlashAndBreakLine += splitContent[varii] + " "
					// No don't use this breakline, I think I can do it manually for my own adjustment, but no i Use It 😄 
				}
				let tempItem = {first: contentBeforeSlash, second: contentAfterSlashAndBreakLine}
				arrSlashSep.push(tempItem)
			}
		}
	}
}
await extractHighlight1Level(dv.current().file.path, level)
dv.table(["text", "image"], arrSlashSep.map(i=>[i.first, i.second]))
```