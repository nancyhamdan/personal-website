let music = [];

music[0] = new Audio('./audio/Dans-le-noir.mp3');
music[1] = new Audio('./audio/Mawtini.mp3');
music[2] = new Audio('./audio/Amour-Interdit.mp3');
music[3] = new Audio('./audio/G-Minor-Bach.mp3');
music[4] = new Audio('./audio/Isabella’s-Lullaby.mp3');

for (let i = 0; i < music.length; i++) {
    music[i].loop = true;
}

let video = document.getElementById('piano-video');
video.addEventListener('click', function() {
    if (video.muted) {
        video.muted = false;
    } else {
        video.muted = true;
    }

});

function showDescendants(descendants) {
    for (let i = 0; i < descendants.length; i++) {
        descendants[i].style.display = 'block';
    }
}

function hideDescendants(descendants) {
    for (let i = 0; i < descendants.length; i++) {
        descendants[i].style.display = 'none';
    }
}

let collapsibles = document.getElementsByClassName("collapsible");
for (let i = 0; i < collapsibles.length; i++) {
    collapsibles[i].addEventListener('click', function() {
        this.classList.toggle('active-collapsible');

        let content = this.nextElementSibling;
        let descendants = Array.prototype.slice.call(content.querySelectorAll("*"));

        if (content.style.height) {
            content.style.height = null;
            collapsibles[i].lastElementChild.classList.replace('fa-chevron-up', 'fa-chevron-down');
            music[i].pause();
            hideDescendants(descendants);
        } else {
            content.style.height = 40 + "%";
            this.lastElementChild.classList.replace('fa-chevron-down', 'fa-chevron-up');
            music[i].play();
            showDescendants(descendants);
        }

        let otherContent = document.getElementsByClassName('content');
        for (let i = 0; i < collapsibles.length; i++) {
            if (collapsibles[i] != this) {
                descendants = Array.prototype.slice.call(otherContent[i].querySelectorAll("*"));
                otherContent[i].style.height = null;
                collapsibles[i].classList.remove('active-collapsible');
                collapsibles[i].lastElementChild.classList.replace('fa-chevron-up', 'fa-chevron-down');
                hideDescendants(descendants);
                music[i].pause();
            }
        }
    });
}