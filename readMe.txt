About Application :

 It is command-line based Application . It consist 3 files,first app.js ,2nd index.js,3rd package.json.

=> app.js is main file,however in index.js ,I created  functions such as add() ,remove() ,list() & so on and exports them to app.js file:
=>If you want to run this application ,first of all you have to install node.js in your system(You can search on google):
=>then you have to install inbuit - modules I used in this project.
=>So create a folder and paste this these three files to that folder.
=>then open that folder in cmd & terminal(if you open your folder in visual studio code , so press ctrl + ~(above to tab button) ,then terminal wil open )
=>then type npm install (please connect your system to internet),it will install all dependencies(module) used in that project.

NOW YOU CAN READY TO USE THIS PROJECT :

==>type in terminal
for adding note :
-:node app.js add --title="Title of note" --body="Description of Note"

for deleting note :
-:node app.js remove --title="Title of note you want to remove :"

for read particular note :
-:node app.js read --title="title of note you want to read"

for list all notes:
-:node app.js list
