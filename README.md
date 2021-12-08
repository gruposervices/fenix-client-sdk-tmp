## Fenix Client
FenixClient is a library to facilitate the implementation of e-mail, stream, phone, chat and sms channels by developers of the partners tools. <br>
It abstracts the complexity of channel integration through a JavaScript library providing a simple and intuitive communication interface. <br> <br>
For more details see the [wiki](https://github.com/gruposervices/fenix-client-sdk-tmp/wiki). <br>
For a basic usage [example](https://github.com/gruposervices/fenix-client-sdk-tmp/tree/master/examples/basic).

## Reminder
To be able to use our ClientSDK you'll need your own key credentials.<br>
To be able to fully utilize the ClientSDK features, you'll need to at least serve your page through a HTTP server.

## Running examples
Clone this repo
```html
git clone https://github.com/gruposervices/fenix-client-sdk-tmp.git
```

Install packages
```html
npm install
```

Running example<br>
On `example_name` you put the example's folder name
```
npm run example --name=example_name
```

Example
```
npm run example --name=basic
```

## Installation
`FenixClient` is written in JavaScript and will be distributed as package via `npm`.

### CDN
You can get the lastest version from our CDN 
```html
https://cdn.fenixdigital.services/client/sdk/fenix-client-sdk-1.1.0.min.js
```

### NPM
The version distributed via npm is under development. <br>

### Latest Release Download
Consider downloading the **latest [release](https://github.com/gruposervices/fenix-client-sdk-tmp/releases)**<br>

## Using Fenix Client
After download unzip _src/css_ and _src/js_ files in your project directory structure.<br>

### Importing
Import javascript and css files into your project files
```html
fenix-client-sdk.min.js
fenix-client.css
```

Importing from our CDN
```html
https://cdn.fenixdigital.services/client/sdk/fenix-client-sdk-1.1.0.min.js
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
})
```

#### Enviroment settings
Specify environment settings to validate or put on production mode. _The hashes will change according to the environment_

```javascript
enviroment: 'homologation'
```
Values:<br>
- `homologation` : Environment for validations
- `production` : Environment for productive mode

Required: :heavy_check_mark:

#### Channel settings
The client can embed some Fenix channels. _Channels will be available according to the contract._

```javascript
channel: 'chat'
```
Values: <br>
- `chat` : Chat channel (default)
- `sms` : SMS channel
- `email` : E-mail channel
- `video-stream` : Audio and video interactive streaming

Required: :heavy_check_mark:

#### Routing hashes settings
When contract Fenix some routing hashes are provided. This hashes route customers to organization business rules.
Routing works as a tree. [Click here](https://github.com/gruposervices/fenix-client-sdk-tmp/wiki/Attendance-routing-tree) to see details.

```javascript
creditor: '10cd395cf71c18328c863c08e78f3fd0',
queue: '10cd395cf71c18328c863c08e78f3fd0',
subject: '10cd395cf71c18328c863c08e78f3fd0'
```
Parameters: <br>
- `creditor` : Corresponding organization hash. Provided after contract. <br>Required: :heavy_check_mark:
- `queue` : Corresponding segmentation hash. When specify the client routes customers to a specific segmentation. Provided after contract. <br> Required: If empty customers should select the segmentation queue.
- `subject` : Corresponding subject hash. When specify the client routes customers to a specific subject. Provided after contract. <br> Required: If empty customers should select the subject.

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

#### Additional parameters
According to the contract, additional parameters can be sent

```javascript
data: {    
    enabled_key: 'Custom value'
}
```
Additional parameters must be enabled for the client to be able to send to Fenix.<br>
Required: :heavy_multiplication_x:
