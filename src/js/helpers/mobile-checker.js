export class MobileChecker {
	static userAgent = navigator.userAgent;

	static get isAndroid() {
		return Boolean(MobileChecker.userAgent.match(/Android/i));
	}

	static get isBlackBerry() {
		return Boolean(MobileChecker.userAgent.match(/BlackBerry/i));
	}

	static get isAppleOS() {
		return Boolean(MobileChecker.userAgent.match(/iPhone|iPad|iPod/i));
	}

	static get isOpera() {
		return Boolean(MobileChecker.userAgent.match(/Opera Mini/i));
	}

	isWindows() {
		return Boolean(MobileChecker.userAgent.match(/IEMobile/i));
	}

	static get isAny() {
		return (
			MobileChecker.isAndroid ||
			MobileChecker.isBlackBerry ||
			MobileChecker.isAppleOS ||
			MobileChecker.isOpera ||
			MobileChecker.isWindows
		);
	}
}
