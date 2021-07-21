## Objective
To replace pre-defined sensitive information inside POST request body before sending to upstream server. We can use Regex to search for sensitive information.


To test:

We will send POST request by using JSON file payload. Feel free to change the input.
```
curl -X POST --header "Content-Type: application/json" http://localhost:8000/post -d @testdata.json''
```

You may tweak the rewrite.js file to play with the regex.
