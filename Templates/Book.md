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

**Highlights
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
	dv.el("h3", "Excalidraw Text");
	console.log(arrSlashSep.toString());
	let fullExcalidrawObj = JSON.parse(fullExcalidrawJson);
	let textJsonObj = JSON.parse(textJson);
	for (let i = 0; i < arrSlashSep.length; i++) {
		if (arrSlashSep[i].second.trim() == "") {
			continue;
		}
		console.log("val: " + arrSlashSep[i].second);
		let newTextJsonObj = Object.assign({}, textJsonObj);
		let blockId = generateString(6);
		newTextJsonObj["x"] += (i % 6 >= 3 ? 1: 0) * 800;
		newTextJsonObj["y"] += (i % 3) * 200 + Math.floor(i / 6) * 800;
		newTextJsonObj["id"] = blockId;
		newTextJsonObj["text"] = arrSlashSep[i].second;
		dv.paragraph(arrSlashSep[i].second + "\\^" + blockId);
		fullExcalidrawObj["elements"].push(newTextJsonObj);
	}
	
	dv.el("h3", "Json")
	dv.paragraph("```json\n")
	dv.paragraph(JSON.stringify(fullExcalidrawObj["elements"]))
	dv.paragraph("```")
}

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
				else {
					let pathWithoutMd = path.replace(".md", "")
					let link = pathWithoutMd.trim().slice( pathWithoutMd.lastIndexOf("/") + 1, pathWithoutMd.length)
					contentBeforeSlash += "\n[[" + pathWithoutMd  + "|" + link + "]]"
					//contentBeforeSlash += "<details> <summary></summary> <p>" + "[[" + pathWithoutMd  + "|" + link + "]]</p> </details>" 
				
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
pushTextToExcalidraw(arrSlashSep)
```