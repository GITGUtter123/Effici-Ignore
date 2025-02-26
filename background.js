chrome.webRequest.onHeadersReceived.addListener(
  (details) => {
    const headers = details.responseHeaders.filter(
      (header) => !["x-frame-options", "content-security-policy"].includes(header.name.toLowerCase())
    );
    return { responseHeaders: headers };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "responseHeaders"]
);
