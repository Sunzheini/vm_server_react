## Frontend for the Virtual Machines Control REST Server
This is a project with React created using Pycharm IDE.

# Functionalities
The backend is a Django server, and the 2 have the following functionalities:
1. The React Server is accessed with http://localhost:3000/, not https!
2. Login functionality. Only logged-in users have access to delete items. Only admin users 
can access the users app.
3. Virtual machine control functionality. The user can create a new virtual machine of
a predefined type and the edit its functions, i.e. start, stop and give different commands
to the IDEs installed on the virtual machines.
4. Python scripts execution functionality. The user can upload a python script and execute it
on the machine, which hosts the django server.


# Running the project
In order to run the project you must have both the frontend and the backend running. read
the backend Readme.md file for more information regarding the backend setup.
You have to adjust routes/urlsList.js file to match your case, again synchronizing
with the backend.


# Structure
This React project has a App.js file, which contains the main logic and redirects to
other components, variables or functions as needed. Also:
1. The components folder contains all the components used in the project, which are 
divided in sections.
2. The public folder contains the index.html file, as well as the css file.
3. The context folder contains the context files, which are used to pass data between
components.
4. The routes folder contains the routes files, as well as the URLs file.
5. The services folder contains the services files, related to the 3 main functionalities
which are used to make requests to the backend.