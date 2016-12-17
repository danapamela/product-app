#proyecto final
###plugins

**SQLite**
cordova plugin add https://github.com/litehelpers/Cordova-sqlite-storage.git


**Storage**
cordova plugin add cordova-sqlite-storage --save
npm install --save @ionic/storage

**Network Information**
ionic plugin add cordova-plugin-network-information

**Geolocation**
ionic plugin add cordova-plugin-geolocation



Diego Ariza - diegoari24@hotmail.com - 3204175939  
Dana Camelo  
Christian Sosa - owen_cammus@hotmail.com - 3008101803  
Edison Bermudez 



cordova plugin rm cordova-plugin-console
cordova build --release android
keytool -genkey -v -keystore proyecto123.keystore -alias proyecto123 -keyalg RSA -keysize 2048 -validity 10000
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore proyecto123.keystore platforms\android\build\outputs\apk\android-release-unsigned.apk proyecto123
C:\Users\Administrador\AppData\Local\Android\Sdk\build-tools\25.0.1\zipalign -v 4 platforms\android\build\outputs\apk\android-release-unsigned.apk HelloWorld.apk