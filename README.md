# Express.js res.sendFile Error: ENOENT: no such file or directory

This repository demonstrates a common error encountered when using Express.js's `res.sendFile()` method to serve static files. The error occurs when the specified file path does not exist.

## Bug

The `bug.js` file contains an Express.js application that attempts to send a file using `res.sendFile()`. If the specified file path is incorrect or the file does not exist, the application will throw an `ENOENT` error.

## Solution

The `bugSolution.js` file demonstrates how to handle this error gracefully. It checks if the file exists before attempting to send it.  If the file does not exist, it sends a 404 Not Found response.