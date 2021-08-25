class FenixClient {

    constructor(args, element = null, header = false) {
        this.styleToMaximize = null;
        this.styleToMinimize = null;
        this.arguments = args;
        this.container = null;   
        this.currentLocation = window.location.href;
        this.window = window;
        this.createContainer(element, header);
        this.style(false);
        this.start();

        this.actions = {
            close: '',
            minimize: 'minimize',
            maximize: 'maximize'
        };

        this.methods = {
            close: this.hide.bind(this),
            minimize: this.minimize.bind(this),
            maximize: this.maximize.bind(this)
        }
        window.addEventListener('message', (message) => {
            if(message && message.data){
                console.log("[Fenix] Receiving event ...: ", message.data);
                let action = this.actions[message.data];

                if(this.methods[action]){
                    this.methods[action]();
                }
            }  
        });

        this.events = [
            new EventListener('created-customer'),
            new EventListener('on-queue'),
            new EventListener('established-attendance'),
            new EventListener('finished-attendance'),
            new EventListener('rating'),
            new EventListener('close'),
            new EventListener('minimize'),
            new EventListener('maximize'),
        ];
    }
    
    setActions(action){
        this.actions = {
            ...this.actions,
            ...action
        }
    }

    start() {
        if(this.container) {
            var params = this.arguments,
                chatEndpoint = '';
                
            if (!params || !params.creditor) {
                throw Error("There's not enough arguments to open frame");
            }
            
            let channel =  params.channel ? params.channel : 'chat' ;
            let enviroment = params.enviroment ? params.enviroment : 'production';
            
            switch(enviroment) {
                case 'production':
                    chatEndpoint = 'https://fenixclient.servicesdigital.com.br';
                    break;
                case 'homologation':
                    chatEndpoint = 'https://fenixhomolog.servicesdigital.com.br:82';
                    break;
            }

            let creditorID = params.creditor ? params.creditor : undefined;
            let queueID = params.queue && params.creditor ? params.queue : undefined;
            let subjectID = params.subject && params.queue ? params.subject : undefined;
            let identifier = params.identifier && params.subject ? params.identifier : undefined;

            chatEndpoint += '/' + channel + '/';
            chatEndpoint += creditorID ? creditorID : '';
            chatEndpoint += queueID ? '/' + queueID : '';
            chatEndpoint += subjectID ? '/' + subjectID : '';
            chatEndpoint += identifier ? '/' + identifier : '';
            
            let query = params.data && params.identifier ? params.data : undefined;
            if(query){
                chatEndpoint += '?'
                Object.keys(query).forEach(function(key){
                    chatEndpoint += key + '=' + query[key] + '&';
                });

                if (params.token) {
                    this.token = params.token;
                    chatEndpoint += chatEndpoint.substring(chatEndpoint.lenght - 1) == "&" ? 'token='+params.token : '&token='+params.token;
                }

                if (params.origin) {
                    chatEndpoint += chatEndpoint.substring(chatEndpoint.lenght - 1) == "&" ? 'entry_point='+params.origin : '&entry_point='+params.origin;
                }
            }

            this.frame.setAttribute('src', chatEndpoint);
            this.frame.addEventListener('load', () => { this.sendMessage(queueID, subjectID) }, false);
        } else {
            throw Error("Frame element is not started or not found");
        }
    }
    
    style(styles = null) {
        let container = this.container;
        if(container) {
            if (styles) {
                Object.keys(styles).forEach(function(attribute, value){
                    container.style[attribute] = styles[attribute];
                });
                this.currentStyle = styles;
            } 
            this.frameState();
        } else {
            throw Error("Frame element is not started or not found");
        }
    }
    
    display() {
        let container = this.container;
        if(container) {
            container.style.display = 'block';
            sessionStorage.setItem('frame-state','maximized');
        } else {
            throw Error("Frame element is not started or not found");
        }
    }
    
    hide(element = null) {
        let el = element || this.container;
        if(el) {
            el.style.display = 'none';
            sessionStorage.setItem('frame-state','hide');
        } else {
            throw Error("Frame element is not started or not found");
        }
    }
    
    minimizeOrMaximize(element = null) {
        let el = element || this.container;
        var frameState = sessionStorage.getItem('frame-state');
        if(el) {
            switch(frameState) {
                case 'minimized': 
                    this.maximize();
                    break;
                case 'maximized':
                    this.minimize();
                    break;
                default:
                    this.maximize();
                    break;
            }
        } else {
            throw Error("Frame element is not started or not found");
        }
    }

    minimize(element = null) {
        let el = element || this.container;
        if(el) {

            if (this.fenixHeader) {
                el.style.cssText += `height: 65px !important; width: 65px !important;`
                el.style.borderRadius = '50px';
                this.fenixHeader.style.paddingTop = '10px';
                this.fenixHeader.style.paddingRight = '5px';
                this.fenixHeader.style.height = '70px';
                this.closeHeader.style.display    = 'block';
                this.chatIcon.style.display = 'block';
            } else {

                if (this.styleToMinimize) {
                    Object.keys(this.styleToMinimize).forEach( (attribute, value) => {
                        el.style.cssText += `${attribute}: ${this.styleToMinimize[attribute]} !important`;
                    });
                }
            }

            this.sendActionToChangeState('minimize');
            sessionStorage.setItem('frame-state','minimized');
        } else {
            throw Error("Frame element is not started or not found");
        }
    }

    maximize(element = null) {
        let el = element || this.container;
        let self = this;
        if(el) {
            el.style.display = 'block';
            if (this.fenixHeader) {
                this.fenixHeader.style.paddingTop = '0';
                this.fenixHeader.style.paddingRight = '0';
                this.fenixHeader.style.height     = '10px';
                this.closeHeader.style.display    = 'block';
                this.chatIcon.style.display       = 'none';
            }

            if(this.currentStyle) {
                el.style.borderRadius   = '0';
                Object.keys(self.currentStyle).forEach(function(attribute, value){
                    el.style[attribute] = self.currentStyle[attribute];
                });
            }

            if (this.styleToMaximize) {
                Object.keys(this.styleToMaximize).forEach( (attribute, value) =>{
                    el.style.cssText += `${attribute}: ${this.styleToMaximize[attribute]} !important`;
                });
            }
            
            this.sendActionToChangeState('maximize');
            sessionStorage.setItem('frame-state','maximized');
        } else {
            throw Error("Frame element is not started or not found");
        }
    }

    toggle(element = null) {
        let el = element || this.container;
        if(el) {
            if (el.style.display == "block") {
                this.hide();
            } else {
                this.display();
            }
        } else {
            throw Error("Frame element is not started or not found");
        }
    }
    
    addClass(listOfClasses) {
        let el = this.container;
        if(el) {
            for (let Class of listOfClasses) {
                el.classList.add(Class);
            }
        } else {
            throw Error("Frame element is not started or not found");
        }
    }

    addId(id) {
        let el = this.container;
        if(el) {
            el.setAttribute('id', id);
        } else {
            throw Error("Frame element is not started or not found");
        }
    }

    frameState() {
        let el = this.container;
        if(el) {
            var frameState = sessionStorage.getItem('frame-state');
            
            switch (frameState) {
                case 'minimized':
                    this.minimize();
                    break;
                case 'maximized':
                    this.maximize();
                    break;
                case 'hide':
                    this.hide();
                    break;
                default:
                    this.hide();
                    break;
            }
        } else {
            throw Error("Frame element is not started or not found");
        }
    }

    createContainer(element, header) {
        if (!element) {
            console.warn('Frame is being created beacause was not found');
        }

        let container = element ? (document.querySelector(element) ? document.querySelector(element) : document.createElement('div')) : document.createElement('div');
        let iframe = document.createElement('iframe');
        let bodyDiv = document.createElement('div');

        bodyDiv.appendChild(iframe);
        container.appendChild(bodyDiv);
        
        document.body.appendChild(container);
        
        this.container = container;
        this.bodyDiv = bodyDiv;
        this.frame = iframe;
        
        this.addClass(['chat-fenix-container']);
        bodyDiv.setAttribute('class', 'chat-fenix-iframe-div');

        bodyDiv.style.width  = '100%';
        bodyDiv.style.height = '100%';
        this.headerIsActive  = header;

        if (header && !document.querySelector(element)) {
            iframe.style.height = 'calc(100% - 10px)';
            this.createHeaderDiv();
        } else {
            iframe.style.height = '100%';
        }
    }

    createHeaderDiv() {
        if (this.container) {
            let header      = document.createElement('div');
            let container   = this.container;
            let chatIconContainer = document.createElement('div');
            let chatIconWrp = document.createElement('div');
            let chatIcon    = document.createElement('div'); 
            let iconStraps  = document.createElement('span');
            let closeHeader = document.createElement('div');
            
            header.appendChild(closeHeader);
            chatIconWrp.appendChild(chatIcon);
            chatIconWrp.appendChild(iconStraps);
            chatIconContainer.appendChild(chatIconWrp);
            header.appendChild(chatIconContainer);
            
            chatIconContainer.setAttribute('class', 'chat-fenix-chat-icon');
            chatIconWrp.setAttribute('class', 'chat-fenix-icon-wrp');
            chatIcon.setAttribute('class'   , 'chat-fenix-icon');
            header.setAttribute('class'     , 'chat-fenix-header');
            closeHeader.setAttribute('class', 'chat-fenix-close-header');
            
            container.insertBefore(header, container.childNodes[0]);

            this.fenixHeader = header;
            this.chatIcon    = chatIconContainer;
            this.closeHeader = closeHeader;

            header.addEventListener('click', () => {
                this.minimizeOrMaximize();
            }, false);

        } else {
            throw Error("Frame element is not started or not found");
        }
    }

    headerStyle(headerCustomization) {
        let container    = this.container;
        let header       = this.fenixHeader;

        if(container && this.headerIsActive) {
            if (headerCustomization) {
                let headerStart =  (headerCustomization.headerStartColor ? headerCustomization.headerStartColor : '#fff');
                let headerEnd   =  (headerCustomization.headerEndColor   ? headerCustomization.headerEndColor : '#fff');
                header.style.background = `linear-gradient(to right, ${headerStart} 4%, ${headerEnd} 100%)`;
            }
        } else {
            console.warn("Header is not active or not found");
        }
    }

    sendActionToChangeState(action) {
        let data = {
            action
        }
        this.frame.contentWindow.postMessage(data, '*');
    }

    sendMessage(queueID = null, subjectID = null) {
        let data = {
            queueId: queueID,
            subjectId: subjectID,
            endpoint: window.location.href,
            token: this.token
        }
        this.frame.contentWindow.postMessage(data, '*');
    }

    onMinimize(style) {
        if (typeof style !== 'object') {
            throw Error(`Method ( onMinimize ) expects parameter to be ( object ) got ( ${typeof style} )`);
        } else {
            this.styleToMinimize = style;
        }
    }

    onMaximize(style) {
        if (typeof style !== 'object') {
            throw Error(`Method ( onMaximize ) expects parameter to be ( object ) got ( ${typeof style} )`);
        } else {
            this.styleToMaximize = style;
        }
    }

    on(event, cb) {
        this.events.forEach( (eventListenerInstance) => {
            eventListenerInstance.setCallbackListener(event, cb);
        });
    }
}

class EventListener {

    constructor(event) {
        this.event = event;
        this.listeners = new Array();
        window.addEventListener('message', (message) => {
            if(message && message.data && message.data == this.event){
                this.execute();
            }  
        });
    }

    setCallbackListener(event, cb) {
        if (this.event == event) {
            this.listeners.push(cb);
        }
    }

    getEvent() {
        return this.event;
    }

    execute() {
        this.listeners.forEach( (callback) => {
            callback();
        })
    }
}
