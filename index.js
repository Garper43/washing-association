const ui = {
    gallery: {
        beforeImage: document.getElementById('before-image'),
        afterImage: document.getElementById('after-image'),
        slider: document.getElementById('slider'),
    }
}

ui.gallery.slider.addEventListener('input', (ev) => {
    console.log(Math.floor(ui.gallery.slider.value/100*ui.gallery.afterImage.offsetWidth) + 'px');
    ui.gallery.beforeImage.style.width = Math.floor(ui.gallery.slider.value/100*ui.gallery.afterImage.offsetWidth) + 'px';
});

