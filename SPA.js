//i can name like two better ways i couldve done this
document.addEventListener("DOMContentLoaded", function() {
            const links = document.querySelectorAll('#linkList a');
            const iframe = document.getElementById('iframe');

            // Load the first link into the iframe
            if (links.length > 0) {
                iframe.src = links[0].href;
            }

            // Add click event to each link
            links.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault(); // Prevent default link behavior
                    iframe.src = this.href; // Set iframe source to the clicked link
                });
            });
        });
