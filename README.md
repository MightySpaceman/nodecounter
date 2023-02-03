# nodecounter
An API in node.js to take a count of page hits and things like that for my web projects.

# instructions
The script is designed to have multiple counters running at once - simply create a `.json` file in the `data` directory for each one. To increment the counter by one, submit a `POST` request to `http://device-ip:3131/json-file-name`. Remember not to include the `.json` of the file in the `json-file-name` part, just it's raw name.

To receive the number of a counter, just retreive it with a `GET` request from `http://device-ip:3131/json-file-name` in the form of UTF-8 plaintext.
