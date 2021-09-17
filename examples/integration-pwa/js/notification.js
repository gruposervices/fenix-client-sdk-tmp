const PUBLIC_KEY = "BBZejeSiAno7068TAxztOSUED83OOUO9N1BZIVjYeJ79sXbPvKUUA1sm0D2MzO4c4iii0ettoAkOjHgXwpvaa1w";

function urlBase64ToUint8Array(base64String) {
   var padding = "=".repeat((4 - base64String.length % 4) % 4);
   var base64 = (base64String + padding).replace(/\-/g, "+").replace(/_/g, "/");
   var rawData = window.atob(base64);
   var outputArray = new Uint8Array(rawData.length);
   for (var i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
   }
   return outputArray;
}

export const FenixNotification = {
   subscribeUserToNotification(){
      Notification.requestPermission().then(function(permission){
         // Notificação
      })
   }
}