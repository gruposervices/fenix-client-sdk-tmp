## Fenix Client
FenixClient is a library to facilitate the implementation of e-mail, stream, phone, chat and sms channels by developers of the partners tools. <br>
It abstracts the complexity of channel integration through a JavaScript library providing a simple and intuitive communication interface. <br>
For more details see the [wiki](link_wiki) <br>
For a default usage [example](https://github.com/gruposervices/fenix-client-sdk-tmp/blob/master/examples/default/index.js)

## Installation
`FenixClient` is written in JavaScript and will be distributed as package via `npm`.

Using as NPM package:
<br>
*Under construction* <br>

The version distributed via npm is under development. <br>
Consider downloading the **latest [release](https://github.com/gruposervices/fenix-client-sdk-tmp/releases)**


## Using Fenix Client
After download unzip *src/css* and *src/js* files in your project directory structure.<br>

### Importing
Import javascript and css files into your project files
```html
fenix-client-sdk.js
fenix-client.css
```

### Instantiating the client
After hiring Fenix some router hashes are provided for integration. <br>
With the router hashes it is possible to instantiate the client through the library that will build and embed the channel into the platform.

```javascript
const chat = new FenixClient({
  enviroment: 'homologation',
  channel: 'chat',
  creditor: '10cd395cf71c18328c863c08e78f3fd0',
  queue: '10cd395cf71c18328c863c08e78f3fd0',
  subject: '10cd395cf71c18328c863c08e78f3fd0',
  identifier: 'Client identifier',
  data: {
    name: 'Customer Name'    
  }
}
```

#### Enviroment settings
Specify enviroment settings to validate or put on production mode. *The hashes will change according to the environment*

```javascript
enviroment: 'homologation'
```
Values:<br>
* `homologation` : Enviroment for validations
* `production` : Enviroment for productive mode
* 
Required: :heavy_check_mark:

#### Channel settings
The client can embed some Fenix channels. *Channels will be available according to the contract.*
```javascript
channel: 'chat'
```
Values: <br>
* `chat` : Chat channel (default)
* `sms` : SMS channel
* `email` : E-mail channel
* `video-stream` : Audio and video interactive streaming

Required: :heavy_check_mark:

#### Routing hashes settings
When contract Fenix some routing hashes are provided. This hashes route customers to organization business rules.
Routing works as a tree. [Click here](wiki_details_of_creditor_queue_subject) to see details.

```javascript
creditor: '10cd395cf71c18328c863c08e78f3fd0',
queue: '10cd395cf71c18328c863c08e78f3fd0',
subject: '10cd395cf71c18328c863c08e78f3fd0'
```
Parameters: <br>
* `creditor` : Corresponding organization hash. Provided after contract. <br>Required: :heavy_check_mark:
* `queue` : Corresponding segmentation hash. When specify the client routes customers to a specific segmentation. Provided after contract. <br> Required: If empty customers should select the segmentation queue.
* `subject` : Corresponding subject hash. When specify the client routes customers to a specific subject. Provided after contract. <br> Required: If empty customers should select the subject.

#### Customer Identifier
To direct customers directly to attendance service you should specify all routing hashes (creditor, queue, subject) and a customer identifier.<br>
The identifier is important for extracting reports.<br>
```javascript
identifier: 'Client identifier'
```
Some identifiers need to be provided following a pattern according to the channel<br>
| Channel             |  Pattern                                  |
| ------------------- | ------------------------------------------|
|  Chat               |  Any. Example: 11111111111                |
|  Sms                |  Phone number. Example: 4199987552        |
|  Email              |  Valid e-mail. Example: email@email.com   |
|  Video Stream       |  Any. Example: marcelo123                 |

Required: If empty customers should input data on a form.
