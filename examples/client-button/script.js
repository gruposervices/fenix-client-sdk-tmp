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
    identifier: 'Test',
    data: {
        name: 'Test'
    }
}, null, true);

/**
 * Styling the button and the header
 */
chatFenix.headerStyle({
    headerStartColor: '#00554D',
    headerEndColor: '#017761'
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

chatFenix.display();