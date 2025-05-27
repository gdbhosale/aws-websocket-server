# Node.js AWS API Gateway WebSocket Handling Server

AWS API Gateway WebSocket with Node.js on EC2 Using HTTP Proxy Integration and Sec-WebSocket-Protocol Support

## API Endpoints

- `GET /` - Health check endpoint
- `POST /connect` - WebSocket Connect API
- `POST /disconnect` - WebSocket Disconnect API
- `POST /send-message` - Send Message to WebSocket

## Local Development

### Prerequisites

- Node.js (v18 or higher)
- npm

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Start the production server:

```bash
npm start
```

The server will be available at `http://localhost:3000`

## Docker

### Build the Docker image

```bash
docker build -t aws-websocket-server .
```

### Run the Docker container

```bash
docker run -p 3000:3000 aws-websocket-server
```

### Using Docker Compose (optional)

Create a `docker-compose.yml` file:

```yaml
version: "3.8"
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

Then run:

```bash
docker-compose up
```

## Testing the APIs

### Health Check

```bash
curl http://localhost:3000/
```

## Project Structure

```
.
├── server.js          # Main application file
├── package.json       # Node.js dependencies and scripts
├── Dockerfile         # Docker configuration
├── .dockerignore      # Docker ignore file
├── .gitignore         # Git ignore file
└── README.md          # This file
```

## License

MIT
