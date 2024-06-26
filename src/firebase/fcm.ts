import { getMessaging, onMessage, getToken} from "firebase/messaging";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./config";

export const initializeFirebase = async(tokenCallback : Function) => {
  const permission = await Notification.requestPermission();

  if(permission === 'granted') {

    const firebaseApp = initializeApp(firebaseConfig);
    const messaging = getMessaging(firebaseApp);
    const currentToken = await getToken(messaging, {vapidKey:"BOUorOG3iUomKGyYYq6rZSQP7M8s-10KjforHTVnfZt-g_19eAI4KGfQ2fXxEDB5cGmzHU-PEJasAVothy-7eMI"})
      
    if (currentToken) {
        // Send the token to your server and update the UI if necessary
        alert(currentToken)
        console.log(currentToken)
        tokenCallback(currentToken)
      } else {
        // Show permission request UI
        console.log('No registration token available. Request permission to generate one.');
      }
  
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
    });

  } else {
    alert('Permission denied')
  }

}