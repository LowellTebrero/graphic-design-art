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


// function handleResize() {
//     const navList = document.getElementById('navList');
//     if (window.innerWidth <= 640) {
//         if (navList) {
//             navList.remove();
//         }
//     } else {
//         if (!document.getElementById('navList')) {
//             const navDiv = document.querySelector('.nav');
//             const newNavList = document.createElement('ul');
//             newNavList.className = 'flex gap-x-8 lg:gap-x-12 xl:gap-x-16 hidden sm:block';
//             newNavList.id = 'navList';
//             newNavList.innerHTML = `
//                 <li><button type="button" class="px-2 rounded-sm font-light text-base collection" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0">Home</button></li>
//                 <li><button type="button" class="px-2 rounded-sm font-light text-base collection" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1">Product</button></li>
//                 <li><button type="button" class="px-2 rounded-sm font-light text-base collection" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2">About</button></li>
//                 <li><button type="button" class="px-2 rounded-sm font-light text-base collection" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3">Contact</button></li>
//                 <li><button type="button" class="px-2 rounded-sm font-light text-base collection" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4">IDK</button></li>
//             `;
//             navDiv.appendChild(newNavList);
//         }
//     }
// }

// window.addEventListener('resize', handleResize);
// document.addEventListener('DOMContentLoaded', handleResize);