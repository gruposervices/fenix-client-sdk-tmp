/**
 * Reminder
 * 
 * You'll need your own credentials to be able to use our client SDK.
 * 
 * If you want to fully use our features you'll need to run this example inside a http(s) server.
 */

function startChat() {
    fenix_client = new FenixClient({
        enviroment: 'production',
        channel: 'chat',
        creditor: 'WkFxamxtclpDUE9YQzhjOU9Nczdmdz09',
        queue: 'Wk04S0xNdmJGU2ZnRHM4QjRaYml0UT09',
        subject: 'UENKR2ZidzZuME5tZlNKYUZSTjV4QT09'
    });

    fenix_client.style({
        width: '400px',
        height: '550px',
        position: 'fixed',
        bottom: '80px',
        right: '10px',
        overflow: 'hidden',
        backgroundColor: 'white',
        boxShadow: '0 0 2px black',
        zIndex: '9999'
    });

    fenix_client.setActions({ minimize: 'close', close: 'close' });
    fenix_client.display();

    window.fenix_client = fenix_client;
}

/**
 * With this it will toggle between starting the client or just changing his display
 */
document.getElementById('open-chat').addEventListener('click', () => {
    if ('fenix_client' in window && sessionStorage.getItem('frame-state')) {
        window.fenix_client.toggle();
    } else {
        startChat();
    }
});

/**
 * If the client is already started
 */
if (sessionStorage.getItem('frame-state')) {
    startChat();
}