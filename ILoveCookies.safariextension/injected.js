safari.self.tab.dispatchMessage("removeBlacklistedCookies", { domain:document.domain, cookie:document.cookie });

function handler(event)
{
	if (event.name == "removeCookie") {
		if (document.domain == event.message.domain) {
			document.cookie = event.message.cookie;
		}
	}
}

safari.self.addEventListener("message", handler, false);
