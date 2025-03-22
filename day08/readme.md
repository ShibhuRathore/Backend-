Understanding Authentication, Status Codes, and Middleware in Express.js
In backend development, authentication ensures that only authorized users can access or modify specific resources. In the context of our FoodMenu application, authentication is necessary to restrict access to sensitive operations like adding, updating, or deleting menu items. Without authentication, anyone could manipulate the database, leading to security vulnerabilities.

🔹 Why Use Status Codes?
Status codes are essential in web applications because they inform clients (Postman, browsers, frontend apps) about the result of their requests. They help developers debug issues and improve user experience. Here are some commonly used HTTP status codes:

200 OK → Request succeeded (e.g., fetching data successfully).
201 Created → New resource was successfully created (e.g., adding a food item).
400 Bad Request → The request has missing or invalid parameters.
401 Unauthorized → User authentication failed (e.g., incorrect login credentials).
403 Forbidden → User does not have permission (e.g., a normal user trying to delete an item).
404 Not Found → Requested resource does not exist.
500 Internal Server Error → Something unexpected went wrong on the server.
In our PATCH /admin route, we currently return a plain text response ("Item not exist"), but ideally, we should return a proper JSON response with the appropriate status code, such as:

js
Copy
Edit
return res.status(404).json({ message: "Item not found" });
🔹 How to Apply Authentication Middleware to All Routes?
In our server.js file, we currently pass the Auth middleware manually in routes like:

js
Copy
Edit
app.patch("/admin", Auth, (req, res) => { ... });
However, a cleaner and more efficient way is to apply the authentication middleware globally to all admin-related routes. Instead of adding Auth in every single route, we can group protected routes under a router-level middleware like this:

js
Copy
Edit
app.use("/admin", Auth);
Now, every route starting with /admin will automatically go through Auth before execution.

