# crud-api-node.js
implementation of CRUD API using in-memory database underneath.
1. Clone this repository.
2. Open your VS code and go to crud-api-node.js folder.
3. Install all dependences using: npm install
4. Start the program by writing npm start in console.

Then you can POST new user. Forward next steps to do it:
1. You just need to start app using npm start method, and go to the Postman.
2. Select a type of the method (In our case is POST).
3. In Postman you need to write localhost:PORT/api/users (Replace "PORT" with PORT that contains in .env file).
![image](https://github.com/StanislavGo/crud-api-node.js/assets/137794935/29b1bf71-671a-4010-ac83-e26a4fdcc619)
4. Write information about this user:
![image](https://github.com/StanislavGo/crud-api-node.js/assets/137794935/6da08fe6-9b1e-4ce9-803f-57f6f75423f2)
After you finish, the program will show you this user.

Also, you can GET all users. Follow next steps to get all users:
1. Select a type of the method (In our case is GET).
2. Make sure that the URL is correct - localhost:PORT/api/users (Replace PORT with PORT that contains in .env file).
3. Click on "Send" button.
![image](https://github.com/StanislavGo/crud-api-node.js/assets/137794935/a94d30de-d89d-4e1f-823a-4fa78bba05b7)
After this, you will see full list of all users.

Then, let's delete our user. This is how you can do it:
1. Write localhost:PORT/api/users/id in Postman (Make sure to replace "PORT" with PORT that contains in .env file and replace "id" with id of your user).
2. Select a type of the method (In our case is DELETE).
3. Click on "Send" button.
After this your user will be deleted.
