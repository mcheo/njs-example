## Objective
To replace pre-defined sensitive information inside POST request body before sending to upstream server. We can use Regex to search for sensitive information (defined in rewrite.js)


To test:

Start the demo
```
docker-compose -f docker-compose.yml up -d 
```

We will send POST request by using JSON file payload.
```
curl -X POST --header "Content-Type: application/json" http://localhost:8000/post -d @testdata.json''
```

Upstream server httpbin will return the request body it received. If everything works as expected, the output of above curl command will show the "masked" request body received at httpbin server.

You may play around with the rewrite.js file and testdata.json payload.
