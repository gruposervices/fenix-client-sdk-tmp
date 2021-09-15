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

chatFenix.setActions({ minimize: 'close' });

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

chatFenix.on('on-queue', () => {
    console.log("Customer on queue ...: ");
});

chatFenix.on('created-customer', () => {
    console.log("Customer created ...: ");
});

chatFenix.on('estabilished-attendance', () => {
    console.log("Customer just got his attendance ...: ");
});

chatFenix.on('finished-attendance', () => {
    console.log("Finished attendance ...: ");
});

chatFenix.on('rating', () => {
    console.log("Customer just rated his attendance ...:");
});
  
chatFenix.on('minimize', () => {
    console.log("Frame was minimized ...:");
});

chatFenix.on('maximize', () => {
    console.log("Frame was maximized ...:");
});

chatFenix.on('close', () => {
    console.log("Frame was closed ...:");
});

document.getElementById('open-chat').addEventListener('click', () => {
    chatFenix.toggle();
});
