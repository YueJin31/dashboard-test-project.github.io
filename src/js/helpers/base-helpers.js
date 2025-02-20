import { MobileChecker } from "./mobile-checker";

export class BaseHelpers {
	static html = document.documentElement;
	static header = document.querySelector(".header");
	static firstScreen = document.querySelector("[data-observ]");

	static checkWebpSupport() {
		const testWebp = (callback) => {
			const webP = new Image();

			webP.onload = webP.onerror = () => callback(webP.height === 2);
			webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
		};

		testWebp((support) => {
			const className = support ? "webp" : "no-webp";
			BaseHelpers.html.classList.add(className);

			console.log(support ? "webp поддерживается" : "webp не поддерживается");
		});
	}

	static addTouchClass() {
		if (MobileChecker.isAny) {
			BaseHelpers.html.classList.add("touch");
		}
	}

	static addLoadedClass() {
		window.addEventListener("load", () => {
			setTimeout(() => {
				BaseHelpers.html.classList.add("loaded");
			}, 0);
		});
	}

	static get getHash() {
		return location.hash?.replace("#", "");
	}

	static setHash(hash) {
		hash = hash ? `#${hash}` : location.href.split("#")[0];
		history.pushState("", "", hash);
	}

	static headerFixed() {
		const headerStickyObserver = new IntersectionObserver(([entry]) => {
			BaseHelpers.html.classList.toggle("header-is-sticky", !entry.isIntersecting);
		});

		if (BaseHelpers.firstScreen) {
			headerStickyObserver.observe(BaseHelpers.firstScreen);
		}
	}

	static calcScrollbarWidth() {
		const scrollbarWidth = (window.innerWidth - document.body.clientWidth) / 16 + "rem";
		BaseHelpers.html.style.setProperty("--bh-scrollbar-width", scrollbarWidth);
	}
}
