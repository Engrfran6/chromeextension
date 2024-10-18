chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension Installed');
});

chrome.action.onClicked.addListener(() => {
  chrome.windows.create({
    url: chrome.runtime.getURL('out/index.html'),
    state: 'maximized',
  });
});
