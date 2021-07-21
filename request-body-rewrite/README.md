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

You may play around with the rewrite.js file and testdata.json payload.
