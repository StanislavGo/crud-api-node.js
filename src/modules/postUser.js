import { v4 as uuid4 } from "uuid";

const postUser = async (USERS_DB, req, res) => {
  try {
    let requestBody = '';
    req.on('data', (chunk) => {
      requestBody += chunk.toString();
    });


    req.on("end", () => {
      const userData = JSON.parse(requestBody);

      if(!userData.username || !userData.age || !userData.hobbies) {
        res.writeHead(400);
        res.end(JSON.stringify({ message: "request body does not contain required fields" }));
      }
  
      const id = uuid4();
  
      const newUser = {
        id,
        username: userData.username,
        age: userData.age,
        hobbies: userData.hobbies,
      }
  
      USERS_DB.push(newUser);
  
      res.writeHead(201);
      res.end(JSON.stringify(newUser, null, 4));
    });
    console.log(USERS_DB);
  } catch {
    res.writeHead(500);
    res.end(JSON.stringify({ message: 'Internal Server Error' }));
  }
};

export { postUser };