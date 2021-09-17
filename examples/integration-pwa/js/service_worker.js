const CACHE_NAME = 'v1.0.0';
const FILES = [
	'/',
	'/js/dist/app.bundle.js'
]

self.addEventListener('install', function(event){
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache){
			return cache.addAll(FILES);
		})
	)
})

self.addEventListener('activate', function (event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys
                .filter(function (key) {
                    return key.indexOf(CACHE_NAME) !== 0;
                })
                .map(function (key) {
                    return caches.delete(key);
                })
            );
        })
    );
});

self.addEventListener('push', function(event){
    var message = event.data.text();
    self.registration.showNotification('Push message received', {
        body: message,
        icon: '/img/pwa/tw_icon.png',
        actions: [
            {action: 'confirm', title: 'Ok'},
        ]
    })
});
