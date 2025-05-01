// Function to check if we're on a YouTube page
function isYouTubePage() {
    return window.location.hostname.includes('youtube.com');
}

// Function to inject our custom UI elements
function injectCustomUI() {
    if (!isYouTubePage()) return;

    // Add folder management to subscription list
    const subscriptionList = document.querySelector('ytd-guide-section-renderer[section-identifier="subscriptions"]');
    if (subscriptionList) {
        // TODO: Add folder management UI to subscription list
    }

    // Add discover section to guide
    const guide = document.querySelector('ytd-app');
    if (guide) {
        // TODO: Add discover section to YouTube's guide
    }
}

// Listen for messages from popup or background script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'INJECT_UI') {
        injectCustomUI();
        sendResponse({ success: true });
    }
});

// Initialize when page loads
document.addEventListener('yt-navigate-finish', injectCustomUI);
if (document.readyState === 'complete') {
    injectCustomUI();
} else {
    document.addEventListener('DOMContentLoaded', injectCustomUI);
} 