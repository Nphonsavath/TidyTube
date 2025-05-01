// Listen for extension installation
chrome.runtime.onInstalled.addListener(() => {
    // Initialize storage with default values
    chrome.storage.sync.set({
        folders: [],
        watchHistory: [],
        preferences: {
            autoCategorize: true,
            discoverFrequency: 'weekly'
        }
    });
});

// Listen for messages from content script or popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'GET_SUBSCRIPTIONS') {
        // TODO: Implement YouTube API call to get subscriptions
        sendResponse({ success: true });
    } else if (request.type === 'SAVE_FOLDER') {
        chrome.storage.sync.get(['folders'], (result) => {
            const folders = result.folders || [];
            folders.push(request.folder);
            chrome.storage.sync.set({ folders }, () => {
                sendResponse({ success: true });
            });
        });
    }
    return true; // Required for async response
});

// Function to fetch YouTube subscriptions
async function fetchSubscriptions() {
    // TODO: Implement YouTube API integration
    return [];
}

// Function to analyze watch history for recommendations
async function analyzeWatchHistory() {
    // TODO: Implement watch history analysis
    return [];
} 