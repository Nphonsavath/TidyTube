document.addEventListener('DOMContentLoaded', () => {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Folder management
    const newFolderBtn = document.getElementById('new-folder');
    const foldersContainer = document.querySelector('.folders');

    newFolderBtn.addEventListener('click', () => {
        const folderName = prompt('Enter folder name:');
        if (folderName) {
            createFolder(folderName);
        }
    });

    function createFolder(name) {
        const folder = document.createElement('div');
        folder.className = 'folder';
        folder.innerHTML = `
            <div class="folder-header">
                <span class="folder-name">${name}</span>
                <button class="folder-options">⋮</button>
            </div>
            <div class="folder-content">
                <!-- Subscriptions will be added here -->
            </div>
        `;
        foldersContainer.appendChild(folder);
    }

    // Load saved folders from storage
    chrome.storage.sync.get(['folders'], (result) => {
        if (result.folders) {
            result.folders.forEach(folder => {
                createFolder(folder.name);
            });
        }
    });
}); 