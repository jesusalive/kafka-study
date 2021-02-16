# kafka-study

To works fine follow these steps:
1. Init kafka container with ```docker-compose up -d```
2. Install the dependencies of application with ```yarn``` or ```npm i```
3. Init main application with ```npm run dev``` or ```yarn dev```
4. Enter on micro-service folder (pdf-service) and install the dependencies of application with ```yarn``` or ```npm i```
5. Init micro-service with ```npm run dev``` or ```yarn dev```

Now just send a requisition to ```POST http://localhost:3000/get-pdf``` and check the micro-service console to see if it worked!
