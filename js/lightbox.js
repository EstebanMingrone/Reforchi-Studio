import Lightbox from 'bs5-lightbox';

const options = {
	keyboard: true,
	size: 'fullscreen',
    controls: true,
    close: true
};

document.querySelectorAll('.my-lightbox-toggle').forEach((el) => el.addEventListener('click', (e) => {
	e.preventDefault();
	const lightbox = new Lightbox(el, options);
	lightbox.show();
}));