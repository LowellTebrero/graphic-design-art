function toggle() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('w-change');  
}

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {  
    panel.addEventListener('click',()=> {
        removeActiveClasses() 
        panel.classList.add('active');
    } )
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}

function showCollection(collectionId) {
    // Hide all collections
    document.querySelectorAll('.collections').forEach(div => {
        div.classList.remove('active');
        div.style.zIndex = 0; // Reset z-index
    });

    // Show and set z-index for the selected collection
    const selectedDiv = document.getElementById(collectionId);
    if (selectedDiv) {
        selectedDiv.classList.add('active');
        selectedDiv.style.zIndex = 10; // Set higher z-index for the active collection
    }
}

// Show the first collection by default
showCollection('collection-1');

function handleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (window.innerWidth >= 640) {
        if (sidebar) {
            sidebar.classList.remove('w-change');
        }
    } else {
        if (sidebar) {
            sidebar.classList.add('w-change');
        }
    }
}

// Add event listeners for resize and initial load
window.addEventListener('resize', handleSidebar);
document.addEventListener('DOMContentLoaded', handleSidebar);

// Call the function initially
handleSidebar();

