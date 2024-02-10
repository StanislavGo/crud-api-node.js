import { v4 as uuid4 } from "uuid";

const postUser = async (USERS_DB, req, res) => {
  try {
    let requestBody = '';
    req.on('data', (chunk) => {
      requestBody += chunk.toString();
    });


    req.on("end", () => {
      let status = 201;
      const userData = JSON.parse(requestBody);
      const id = uuid4();

      const newUser = {
        id,
        username: userData.username,
        age: userData.age,
        hobbies: userData.hobbies,
      }

      let body = JSON.stringify(newUser, null, 4);

      if(!userData.username || !userData.age || !userData.hobbies) {
        status = 400;
        body = JSON.stringify({ message: "request body does not contain required fields" });
      }
  
      USERS_DB.push(newUser);
  
      res.writeHead(status);
      res.end(body);
    });
  } catch {
    res.writeHead(500);
    res.end(JSON.stringify({ message: 'Internal Server Error' }));
  }
};

export { postUser };