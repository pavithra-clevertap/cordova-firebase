Demo Cordova project.
Dependencies included in the project are below mentioned :- 
Firbase cordova plugin - https://github.com/dpa99c/cordova-plugin-firebasex-test
CleverTap cordova plugin https://github.com/CleverTap/clevertap-cordova
Android X

Stpes to check before you build the application
run the following commands in your terminal 
1> ionic
2> Cordova 
3> which Android
4> which java
5> echo $PATH (chehck for java and android path is set here or not)
6> Please add your own CT credentials when you are building your application (current the project is using 8RK-ZZ6-W75Z,611-32b)

If everything above is available then, go to the project folder 
 ->cordova prepare 
 ->cordova build android 
 -> cordova run android (if you have ADB enabled and physical devie is connected)
 
 For any futher questions please raise a issue here.
