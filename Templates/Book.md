---
tags: 0Learn/start
publish: true
aliases: 
  - 
cssclass: 
type: {{VALUE:Calibre, Web, Paper, Collection}}
status: 🟥️
---
relate to MOC:
TARGET DECK: {{VALUE:Book Title}}
Location: {{VALUE:Location's Detail & nLoc}}
![[Attachment/bookmind.jpg]]
----
**<%tp.file.title%>**
�📚📚📚📚📚📚📚📚📚📚📚📚📚📚📚📚📚📚

{{VALUE:Book Title}} - MP @front **{{VALUE:Book Title}} - Memory Palace** @flashcard
MP URL link>
![[Attachment/{{VALUE:Book Title}} - MemoryPalace.excalidraw.md]]

[[{{VALUE:Book Title}} - Reference]]
[[{{VALUE:Book Title}} - Voice]]
[[{{VALUE:Book Title}} - Plan and Goal]]

**Auditory**
```query
path:"voice/{{VALUE:Book Title}}"
```

**Highlights**
```dataviewjs
let textJson = '{'+
			'"type": "text",'+
			'"version": 98,'+
			'"versionNonce": 1890989478,'+
			'"isDeleted": false,'+
			'"id": "s1SJDNQh",'+
			'"fillStyle": "hachure",'+
			'"strokeWidth": 1,'+
			'"strokeStyle": "solid",'+
			'"roughness": 1,'+
			'"opacity": 100,'+
			'"angle": 0,'+
			'"x": -550.333333333333286,'+
			'"y": -1100.33333333333329,'+
			'"strokeColor": "#ff0000",'+
			'"backgroundColor": "transparent",'+
			'"width": 195,'+
			'"height": 25,'+
			'"seed": 50458031,'+
			'"groupIds": [],'+
			'"strokeSharpness": "sharp",'+
			'"boundElementIds": [],'+
			'"fontSize": 30,' + 
			'"fontFamily": 1,'+
			'"text": "",'+
			'"rawText": "",'+
			'"baseline": 18,'+
			'"textAlign": "left",'+
			'"verticalAlign": "top"'+
		'}';
let fullExcalidrawJson = '{'+
	'"type": "excalidraw",'+
	'"version": 2,'+
	'"source": "https://excalidraw.com",'+
	'"elements": [],'+
	'"appState": {'+
		'"theme": "light",'+
		'"viewBackgroundColor": "#ffffff",'+
		'"currentItemStrokeColor": "#000000",'+
		'"currentItemBackgroundColor": "transparent",'+
		'"currentItemFillStyle": "hachure",'+
		'"currentItemStrokeWidth": 1,'+
		'"currentItemStrokeStyle": "solid",'+
		'"currentItemRoughness": 1,'+
		'"currentItemOpacity": 100,'+
		'"currentItemFontFamily": 1,'+
		'"currentItemFontSize": 20,'+
		'"currentItemTextAlign": "left",'+
		'"currentItemStrokeSharpness": "sharp",'+
		'"currentItemStartArrowhead": null,'+
		'"currentItemEndArrowhead": "arrow",'+
		'"currentItemLinearStrokeSharpness": "round",'+
		'"gridSize": null'+
	'},'+
	'"files": {}'+
'}';

let SEP = "---"
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function pushTextToExcalidraw(arrSlashSep) {
	dv.el("p", "**Excalidraw Text**");
	let excalidrawText = ""
	console.log(arrSlashSep.toString());
	let fullExcalidrawObj = JSON.parse(fullExcalidrawJson);
	let textJsonObj = JSON.parse(textJson);
	let cnt = 0
	for (let i = 0; i < arrSlashSep.length; i++) {
		if (arrSlashSep[i].second.trim() == "") {
			continue;
		}
//		console.log("val: " + arrSlashSep[i].second);
		let newTextJsonObj = Object.assign({}, textJsonObj);
		let blockId = generateString(6);
		newTextJsonObj["x"] += (cnt % 6 >= 3 ? 1: 0) * 800;
		newTextJsonObj["y"] += (400 - (cnt % 3) * 200) + Math.floor(cnt / 6) * 800;
		//console.log(cnt + ", " + newTextJsonObj["x"] + "," + newTextJsonObj["y"])
		newTextJsonObj["id"] = blockId;
		newTextJsonObj["text"] = arrSlashSep[i].second;
		excalidrawText += "\n" + arrSlashSep[i].second + "\^" + blockId
		fullExcalidrawObj["elements"].push(newTextJsonObj);
		cnt++
	}
	dv.paragraph("```\n"+excalidrawText + "\n```")
	dv.el("p", "**Json**")
	dv.paragraph("```json\n" + "," + JSON.stringify(fullExcalidrawObj["elements"]).slice(1, -1) + "\n```\n")
}
let counter = 1
let level = 3
let arrSlashSep = []
let arrSlashSepOrg = []
let arrSlashSepOrgFirstNSecond = []
async function extractHighlight1Level(path, level) {
	if (level == 0) {
		return
	}
	let content = await dv.io.load(path);
	let linkAndHighlightRegexp = /(\=\=([^=\n]+)\=\=[ ]*(\^?(\w+)?)|\[\[([^\]\n]+)\]\])/mg
	let matchLinks = content.match(linkAndHighlightRegexp)
	for (let vari in matchLinks) {
		//dv.el("h2", matchLinks[vari])
		if (matchLinks[vari].startsWith("[[",0)) {
			let filePath = matchLinks[vari].replace(/\[\[/, "").replace(/\]\]/, "")
			let filePathWithExt = filePath + ".md"
			let file = dv.page(filePathWithExt)
			// dv.el("h4", filePath + " :") // Show the link 	title
			if (!filePath.includes("- Voice") && file !== undefined) {
				arrSlashSep.push({first: SEP, second: ""})
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
				let fullNoteLink = "" 
				let origItem = {first: "", second: ""}
				if (matchLinks[vari].includes("\^")) {
					//dv.el("h4", "herehere" + matchLinks[vari])
					let blockLinkNumber = matchLinks[vari].slice(matchLinks[vari].indexOf("\^") + 1)
					if (contentBeforeSlash.includes("^")) {
						contentBeforeSlash = contentBeforeSlash.slice(0, contentBeforeSlash.indexOf("^"))
					}
					origItem.first = contentBeforeSlash
					fullNoteLink = " [[" + path.replace(".md", "").trim() + "\#\^" + blockLinkNumber + "|" + counter + "]]"
					contentBeforeSlash += fullNoteLink
					if (contentAfterSlash.includes("^")) {
						contentAfterSlash = contentAfterSlash.slice(0, contentAfterSlash.indexOf("^"))
					}
					origItem.second = contentAfterSlash
				}
				else {
					let pathWithoutMd = path.replace(".md", "")
					let link = pathWithoutMd.trim().slice( pathWithoutMd.lastIndexOf("/") + 1, pathWithoutMd.length)
					origItem.first = contentBeforeSlash
					contentBeforeSlash += "\n" +" [[" + pathWithoutMd  + "|" + link + "]]" 
					//contentBeforeSlash += "<details> <summary></summary> <p>" + "[[" + pathWithoutMd  + "|" + link + "]]</p> </details>" 
				}
				origItem.second = contentAfterSlash
				let splitContent = contentAfterSlash.split(" ")
				for (let varii in splitContent) {
					if (varii % 5 == 0 && varii > 0) {
					contentAfterSlashAndBreakLine += "\n"
					}
					contentAfterSlashAndBreakLine += splitContent[varii] + " "
				}
				let tempItem = {first: contentBeforeSlash, second: contentAfterSlashAndBreakLine}
				arrSlashSep.push(tempItem)
				if (fullNoteLink !== "") {
					contentAfterSlash += " " + fullNoteLink
				}
				arrSlashSepOrgFirstNSecond.push(origItem)
				arrSlashSepOrg.push(contentAfterSlash)
			}
		}
	}
}
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

function printHighlightStory(arrSlashSep) {
	dv.paragraph("**Highlight's Story**");
	let highlightStory = ""
	for (let i = 0; i < arrSlashSep.length; i++) {
		let highlight = arrSlashSep[i]
		if (!isBlank(highlight)) {
			highlightStory += " (" + highlight + ")";
		}
	}
	dv.paragraph(highlightStory);
}

async function printHighlightTable(arrSlashSep) {
	await extractHighlight1Level(dv.current().file.path, level)
	let numImage = 0
	let numHighlight = 0
	for (let i = 0; i < arrSlashSep.length; i++) {
		if (!arrSlashSep[i].first.includes(SEP)) {
			numHighlight += 1;
		}
		if (!isBlank(arrSlashSep[i].second)) {
			numImage += 1;
		}
	}
	dv.paragraph("**Number of Highlight**: " + numHighlight)
	dv.paragraph("**Number of Image**: " + numImage)
	for (let i = 0; i < arrSlashSep.length - 1; i++) {
		if (arrSlashSep[i].first.includes(SEP) && arrSlashSep[i + 1].first.includes(SEP)) {
			arrSlashSep.splice(i + 1, 1)
			i--;
		}
	}
	dv.table(["text", "image"], arrSlashSep.map(i=>[i.first, i.second]))
}

function printHighlightTextForVoice(arrSlashSep) {
	dv.paragraph("**For Voice**");
	let counter = 1
	let content = ""
	for (let i = 0; i < arrSlashSep.length; i++) {
		content += "\nLine " + counter + ", Text: " + arrSlashSep[i].first + "; Image: " + arrSlashSep[i].second
		counter++
	}
	dv.paragraph("```\n" + content + "\n```")
}

await printHighlightTable(arrSlashSep)
printHighlightStory(arrSlashSepOrg)
printHighlightTextForVoice(arrSlashSepOrgFirstNSecond)
pushTextToExcalidraw(arrSlashSep)
```
{{VALUE:Book Title}} - ToC @front **{{VALUE:Book Title}} - Table OF Content** @flashcard
<%tp.file.cursor(1)%>
