we use body with put post patch and we use parameters with get and delete HTTP Request
only sensitive data is forwarded through data 
and non sensitive data can be send through parameters and they are visible on the url/link-> localhost:3000/book?author=vikas


server can only send 1 response to 1 request 


Middleware->Middleware is a function that sits between the request and response cycle in a web application. It processes incoming requests before they reach the request handler and can modify the request, response, or terminate the request early. Middleware is commonly used for:

Logging
Authentication
Request parsing (e.g., JSON body parsing)
Error handling


Request/Route Handler->A request handler (also called a route handler or controller) is a function that processes an HTTP request and sends a response. It is typically the final function in the request-response cycle, where business logic is executed.

Diffrence between API and Middleware
Middleware is a function that processes requests before they reach the final request handler, while an API is an endpoint that handles client requests directly and returns responses. Middleware is used for tasks like authentication, logging, validation, and error handling, whereas an API is responsible for fetching/storing data, performing business logic, and interacting with databases. Middleware runs between the client request and the final response, modifying or verifying data, while an API is the final handler that executes business logic and returns data. Middleware is optional but enhances request handling, whereas an API is essential for client-server communication.