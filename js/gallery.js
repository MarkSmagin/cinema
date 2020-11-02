const openGallery = document.getElementById('open_gallery');
const closeGallery = document.getElementById('gallery_close');
const gallery = document.getElementById('gallery');

openGallery.addEventListener('click', openGalleryWindow);
closeGallery.addEventListener('click', closeGalleryWindow);

function openGalleryWindow(e){
    e.preventDefault();
    gallery.classList.remove('hidden');
}

function closeGalleryWindow(e){
    e.preventDefault();
    gallery.classList.add('hidden');
}