/**
 * Reminder
 * 
 * You'll need your own credentials to be able to use our client SDK.
 * 
 * If you want to fully use our features you'll need to run this example inside a http(s) server.
 */

const chatFenix = new FenixClient({
    enviroment: 'homologation',
    channel: 'chat',
    creditor: 'YOUR_CREDITOR_HASH_GOES_HERE...',
    queue: 'YOUR_QUEUE_HASH_GOES_HERE...',
    subject: 'YOUR_SUBJECT_HASH_GOES_HERE...',
    identifier: 'Teste',
    data: {
        name: 'Teste'
    }
});

/**
 * This will make the frame hide when mimized or closed
 * see our wiki for more.
 */
chatFenix.setActions({
    minimize: 'close',
    close: 'close'
});

chatFenix.style({
    width: '400px',
    height: '550px',
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    overflow: 'hidden',
    borderTopRightRadius: '15px',
    borderTopLeftRadius: '15px',
    backgroundColor: 'white',
    boxShadow: '0 0 2px black',
    zIndex: '9999'
});

document.getElementById('open-chat').addEventListener('click', () => {
    chatFenix.toggle();
});
