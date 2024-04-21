importScripts(
  "https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js"
);
// For an optimal experience using Cloud Messaging, also add the Firebase SDK for Analytics.
// importScripts("https://www.gstatic.com/firebasejs/10.11.0/firebase-analytics.js");

firebase.initializeApp({
  apiKey: "AIzaSyAxnE9rjmzXSwURKIN4EAxqTaxHc5-OBd4",
  authDomain: "cafe-76da1.firebaseapp.com",
  projectId: "cafe-76da1",
  storageBucket: "cafe-76da1.appspot.com",
  messagingSenderId: "233415124003",
  appId: "1:233415124003:web:07c18f91ffc990af2dfd96",
  measurementId: "G-PER3NGXRVW",
});

firebase.messaging();

// messaging.setBackgroundMessageHandler((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//     body: "Background Message body.",
//     icon: "/firebase-logo.png",
//   };

//   return self.registration.showNotification(
//     notificationTitle,
//     notificationOptions
//   );
// });
