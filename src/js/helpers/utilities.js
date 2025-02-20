export const EditableSvg = (img) => {
	const imgID = img.getAttribute("id");
	const imgClass = img.getAttribute("class");
	const imgURL = img.getAttribute("src");

	fetch(imgURL)
		.then((response) => response.text())
		.then((data) => {
			const parser = new DOMParser();
			const html = parser.parseFromString(data, "image/svg+xml");
			let svg = html.querySelector("svg");

			if (typeof imgID !== "undefined") {
				svg.setAttribute("id", imgID);
			}

			if (typeof imgClass !== "undefined") {
				svg.classList.add(imgClass, "replaced-svg");
				svg.classList.remove(imgClass, "editable-svg");
			}

			svg.removeAttribute("xmlns:a");

			if (!svg.getAttribute("viewBox") && svg.getAttribute("height") && svg.getAttribute("width")) {
				svg.setAttribute("viewBox", "0 0 " + svg.getAttribute("width") + " " + svg.getAttribute("height"));
			}

			img.replaceWith(svg);
		});
};
