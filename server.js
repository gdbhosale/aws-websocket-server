const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Health check endpoint
 */
app.get("/", (req, res) => {
  res.json({
    message: "Server is running!",
    timestamp: new Date().toISOString(),
  });
});

/**
 * UI to connect to WebSocket
 */
app.get("/ui", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

/**
 * WebSocket Connect API
 */
app.post("/connect", (req, res) => {
  console.log("/connect req.headers", req.headers);

  // WebSocket connection ID
  const connectionId = req.headers.connectionId;

  // Expecting Sec-WebSocket-Protocol to be "Token,JWT_TOKEN_STRING"
  const protocols = req.headers["sec-websocket-protocol"].split(",").map((p) => p.trim());

  // TODO Use protocols[1] (`JWT_TOKEN_STRING`) for validating the Connection Request

  // Return protocols[0] (`Token`) when Connection is valid
  res.setHeader("Sec-WebSocket-Protocol", protocols[0]);

  // TODO Save connection in DB with connectionId and userId from JWT_TOKEN_STRING

  // Return Blank 200 response
  res.status(200).end();
});

/**
 * WebSocket Disconnect API
 */
app.post("/disconnect", (req, res) => {
  console.log("/disconnect req.headers", req.headers);
  console.log("/disconnect req.body", req.body);

  // WebSocket connection ID
  const connectionId = req.body.connectionId;

  // TODO Remove connection from Database for connectionId

  // Return Blank 200 response
  res.status(200).end();
});

/**
 * Send Message to WebSocket
 */
app.post("/send-message", (req, res) => {
  console.log("/send-message req.body", req.body);

  // TODO Code to send message to WebSocket using connectionId

  res.json({
    message: "Message Sent",
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Available endpoints:`);
  console.log(`  GET   /             - Health check`);
  console.log(`  GET   /ui           - UI to connect to WebSocket`);
  console.log(`  POST  /connect      - WebSocket Connect API`);
  console.log(`  POST  /disconnect   - WebSocket Disconnect API`);
  console.log(`  POST  /send-message - Send Message to WebSocket`);
});

module.exports = app;
