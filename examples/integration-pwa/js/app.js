import { Controller } from './controller';
import { FenixNotification } from './notification';

if('serviceWorker' in navigator){
	navigator.serviceWorker.register('./dist/service_worker.js')
	.then((registration) => {
		console.log('Service Worker registered with scope: ', registration.scope);
		FenixNotification.subscribeUserToNotification();
	})
	.catch((err) => {
		console.log('Service Worker registration failed: ', err);
	})
}

if ( localStorage.getItem('fenix-environment') ) {
	document.getElementById('fenix-environment').value = localStorage.getItem('fenix-environment');
}

if ( localStorage.getItem('fenix-channel') ) {
	document.getElementById('fenix-channel').value = localStorage.getItem('fenix-channel');
}
document.getElementById('fenix-creditor').value = localStorage.getItem('fenix-creditor');
document.getElementById('fenix-queue').value = localStorage.getItem('fenix-queue');
document.getElementById('fenix-subject').value = localStorage.getItem('fenix-subject');

document.getElementById('fenix-environment').addEventListener('change', (event) => {
	localStorage.setItem('fenix-environment', event.target.value);
});

document.getElementById('fenix-channel').addEventListener('change', (event) => {
	localStorage.setItem('fenix-channel', event.target.value);
});

document.getElementById('fenix-creditor').addEventListener('input', (event) => {
	localStorage.setItem('fenix-creditor', event.target.value);
});

document.getElementById('fenix-queue').addEventListener('input', (event) => {
	localStorage.setItem('fenix-queue', event.target.value);
});

document.getElementById('fenix-subject').addEventListener('input', (event) => {
	localStorage.setItem('fenix-subject', event.target.value);
});

Controller.start();
