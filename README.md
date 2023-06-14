Requirements:
   - Files and folders are already shared in `whatsapp` group.
   - `npm start` both the folders in different terminals.
   - Client and Server folder should contain `node_modules` installations.
   - Signup and create database in mongo atlas, use the key in `.env` file.
   - Signup and login to show the dashboard as the `task is only for the dashboard`.


Notes:
 - For working and time-saving, you can directly login using following credentials:
    email: techlife_user@mailinator.com
    password: Techlife123!
 - For reference, see the shared image.
 - If required extra components can be created.
 - Please update the excel with github links of all the created projects before saturday 10-june-2023.


Tasks:
    1- Show the logged in user's `email` on the dashboard.
    2- If logout button is clicked, `/logout` api will be called.
    3- Add the book in the newly created schema `books`, if book name already exists than show the error else show the success message.
    4- There should be `no error`, `no logs`, and `no warnings` in the `browser console` and `terminal`.
    5- Push all the code to `github` and update the excel sheet with the link.

    Desciption of tasks:
        Frontend: On dashboard after logging in (it is already working):
            - On top left there will be the `email` of the person who is signed in. It is already saved in our state and can be accessed using `userContext.email`.
            - on top right should be a `logout` button, upon which endpoint `/logout` will be called and user will be moved to login page once he is successfully logged out. Api is already created in our `loginRoutes.js` file: server/routes/loginRoutes.js
            - There should be two input fields (`bookName` & `writer`) and a button (`Add Book`) that will post the book in the database.
            - If the bookname is already in our database, it should just show a message:
                    Book already exists in our database.
                else message will be shown as:
                    Book is saved.

        Backend:
            Make a separate schema of `books` just as we already have a schema of `users`.
                Schema includes:
                    bookName (String)
                    writer (String)
                    date (Date)
            Create a post api for saving book in mongodb.


Hints:
    - Try to do the tasks in sequence.
    - All the tasks are already working in existing project.
    - Try to understand the code firstly with respect to given tasks.
    - Css can be written in `theme.js` or `App.css`.


 Project Errors:
   - If frontend is giving error:
        Go to this file in your client folder: `client/package.json`
        In proxy, just add the `/` at last. It will become:
            "proxy": "http://localhost:5000/",
   - If backend is giving error while registering or logging in the application:
        Remove `await` from line `#27` of `server/routes/loginRoutes.js`. Save it and than try to register the user.
   - If mongodb is giving error:
        Go to: https://cloud.mongodb.com/
        Click `Network Access` from left panel.
        In `IP Access List` click the `+ADD IP ADDRESS` button on the right.
        Restart the terminal.


Deployment:
Follow the well-explained steps: https://niruhan.medium.com/deploying-mern-fullstack-application-on-the-web-for-free-with-netlify-and-heroku-87d888012635