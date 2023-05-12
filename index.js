const ui = {
    gallery: {
        image: document.getElementById('before-image'),
        slider: document.getElementById('slider'),
    }
}

ui.gallery.slider.addEventListener('input', (ev) => {
    ui.gallery.image.style.width = ui.gallery.slider.value + '%';
});

