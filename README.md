# AWI Project - Prello

This web application is a 5th year project of IT students at Polytech Montpellier, France. 

The app can be launched in dev mode following these steps :
- Pull the project
- Create a stettings.json in ther server folder (see the structure downbellow)
- Open two terminal
  - In the first one, go in the client folder and run "npm start"
  - In the second terminal, go in ther server "meteor -p 9000 --settings settings.json"


# Structure of the settings.json

This file set up the variable to use the functionnalites of the Polytech Login in the app
{
"CREDENTIALS": "",
"URL_LDAP": "",
"BASE_DN": "",
"BASE_STUDENT_SEARCH": "",
"BASE_PERMANENT_SEARCH": "",
"PASSWORD": ""
}
