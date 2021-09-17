export const Controller = {
	start(){
		document.addEventListener('click', (event)=> {
			if(event.target.classList.contains('mdl-navigation__link')){
				var button = event.target;
				switch(button.dataset['action']){
					case 'openChat': this.Menu.openChat(); break;
					case 'restartChat': this.Menu.restartChat(); break;
				}
			}
		})

		if (sessionStorage.getItem('frame-state')) {
			this.Menu.startChat();
		}
	},
	Menu: {
		startChat() {
			const environment = localStorage.getItem('fenix-environment');
			const channel = localStorage.getItem('fenix-channel');
			const creditor = localStorage.getItem('fenix-creditor');
			const queue = localStorage.getItem('fenix-queue');
			const subject = localStorage.getItem('fenix-subject');

			if (!environment) {
				alert('Necessário informar o ambiente');
				return;
			}

			if (!channel) {
				alert('Necessário informar o canal');
				return;
			}

			if (!creditor) {
				alert('Necessário informar a hash credor');
				return;
			}

			const clientConfig = {
				enviroment: environment,
				channel: channel,
				creditor: creditor,
				queue: queue,
				subject: subject,
				identifier: 'Teste',
				data: {
					name: 'Teste'
				}
			}
			try {
				const fenixClient = new FenixClient(clientConfig);
				fenixClient.addId( 'chat_fenix' );
				fenixClient.setActions({ minimize: 'close' });

				fenixClient.style({
					width: window.innerWidth < 1280 ? '100vw' : '400px',
					height: window.innerWidth < 1280 ? 'calc( 100vh - 65px ) ' : '600px',
					position: 'fixed',
					bottom: window.innerWidth < 1280 ? '0' : '10px',
					right: window.innerWidth < 1280 ? '0' : '10px',
					overflow: 'hidden',
					backgroundColor: 'white',
					boxShadow: '0 0 2px #505050'
				});
		
				fenixClient.on('estabilished-attendance', () => {
					console.log("Customer just got his attendance ...: ");
				});
		
				fenixClient.on('finished-attendance', () => {
					console.log("Finished attendance ...: ");
				});

				fenixClient.display();
				window.fenixClient = fenixClient;
			} catch (e) {
				alert(e);
			}
		},
		openChat() {
			if ('fenixClient' in window) {
				window.fenixClient.toggle();
			} else {
				this.startChat();
			}
		},
		restartChat() {
			document.getElementById('chat_fenix').remove();
			this.startChat();
		}
	}
}