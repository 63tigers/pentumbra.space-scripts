const items = document.querySelectorAll('.item'); // Select all elements with the class 'item'
const tagList = document.getElementById('tag-list'); // Get the element where tags will be displayed
const selectedTags = new Set(); // Create a Set to store selected tags

function updateTagList() {
    tagList.innerHTML = ''; // Clear the existing tag list
    const tagCount = {}; // Object to keep track of tag counts
    items.forEach(item => {
        // Get tags from the 'data-tags' attribute and split them into an array
        const tags = item.getAttribute('data-tags').split(',').map(tag => tag.trim());
        tags.forEach(tag => {
            // Count occurrences of each tag
            tagCount[tag] = (tagCount[tag] || 0) + 1;
        });
    });
    // Create buttons for each tag with their respective counts
    for (const [tag, count] of Object.entries(tagCount)) {
        if (tag !== 'TW') { // Exclude the TW tag from the tag list
            const button = document.createElement('button'); // Create a new button element
            button.className = 'tag-button'; // Assign a class to the button
            button.textContent = `${tag} (${count})`; // Set the button text to show tag and count
            button.onclick = () => {
                // Toggle the selected state of the button
                button.classList.toggle('selected');
                // Add or remove the tag from the selectedTags Set
                selectedTags.has(tag) ? selectedTags.delete(tag) : selectedTags.add(tag);
                filterItems(); // Call filterItems to update the displayed items
            };
            tagList.appendChild(button); // Add the button to the tag list
        }
    }
}

function filterItems() {
    items.forEach(item => {
        // Get tags for the current item
        const tags = item.getAttribute('data-tags').split(',').map(tag => tag.trim());
        // Show or hide the item based on selected tags
        item.style.display = selectedTags.size === 0 || [...selectedTags].some(tag => tags.includes(tag)) ? 'block' : 'none';
    });
    // Remove blur from all items if any other tag is selected
    if (selectedTags.size > 0) {
        items.forEach(item => {
            const tags = item.getAttribute('data-tags').split(',').map(tag => tag.trim());
            if (tags.includes('TW')) {
                item.classList.add('blur');
            } else {
                item.classList.remove('blur');
            }
        });
    } else {
        items.forEach(item => {
            if (item.getAttribute('data-tags').includes('TW')) {
                item.classList.add('blur');
            }
        });
    }
}

updateTagList(); // Initialize the tag list

//const images = document.querySelectorAll('#item-container img');

images.forEach(image => {
    const tags = image.getAttribute('data-tags').split(',').map(tag => tag.trim());
    if (tags.includes('TW')) {
        image.classList.add('blur'); // Add blur class to images with the tag 'TW'
    }

    image.addEventListener('click', () => {
        const isZoomed = image.classList.toggle('zoomed');

        images.forEach(img => {
            if (img !== image) {
                img.classList.remove('zoomed');
            }
        });

        if (isZoomed) {
            image.style.position = 'fixed';
            image.style.top = '50%';
            image.style.cursor = 'zoom-out';
            image.style.left = '50%';
            image.style.transform = 'translate(-50%, -50%) scale(1.5)';
            image.style.zIndex = '1000';
            image.style.border = "2px solid yellow";
            image.classList.remove('blur'); // Remove blur when zoomed
        } else {
            image.style.position = 'static';
            image.style.transform = 'scale(1)';
            image.style.zIndex = '1';
            image.style.cursor = 'zoom-in';
            image.style.border = "none";
            image.style.zIndex = '9';
            if (tags.includes('TW')) {
                image.classList.add('blur'); // Reapply blur when not zoomed
            }
        }
    });
});
