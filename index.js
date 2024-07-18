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
        selectedDiv.style.zIndex = 50; // Set higher z-index for the active collection
    }
}

// Show the first collection by default
showCollection('collection-1');