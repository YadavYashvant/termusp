# Termusp

**Termusp** is a web-based terminal emulator that allows users to execute shell commands remotely. Built with **Spring Boot** for the backend and **Next.js** for the frontend, this project uses WebSockets to provide real-time interaction between the client and server.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup (Spring Boot)](#backend-setup-spring-boot)
  - [Frontend Setup (Next.js)](#frontend-setup-nextjs)
- [Running the Application](#running-the-application)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Security Considerations](#security-considerations)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Termusp is a simple, web-based terminal emulator. Users can enter shell commands in the frontend, which are executed on the server, with output streamed back to the client in real-time. This project is ideal for learning about WebSockets, client-server communication, and real-time data handling.

## Technologies Used

- **Backend**: Spring Boot, Java WebSocket
- **Frontend**: Next.js, React
- **Real-time Communication**: WebSocket

## Architecture

- **Spring Boot**: Runs the server and executes shell commands received from the client via WebSocket.
- **Next.js**: Provides the frontend UI, where users can input commands and view output in real-time.
- **WebSocket**: Manages a bidirectional communication channel between the frontend and backend.

## Prerequisites

- **Java Development Kit (JDK)** (version 11 or later)
- **Node.js** and **npm**
- Basic understanding of WebSocket, Spring Boot, and Next.js.

## Installation

### Backend Setup (Spring Boot)

1. Clone this repository and navigate to the `server` directory:
   ```bash
   git clone https://github.com/YadavYashvant/termsup.git
   cd termusp/server
   ```

2. Install dependencies and build the Spring Boot application:
   ```bash
   ./mvnw clean install
   ```

3. Run the Spring Boot application:
   ```bash
   ./mvnw spring-boot:run
   ```
   
   By default, the backend will run on `http://localhost:8080`.

### Frontend Setup (Next.js)

1. Navigate to the `client` directory:
   ```bash
   cd ../client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the Next.js development server:
   ```bash
   npm run dev
   ```

   The frontend will run on `http://localhost:3000`.

## Running the Application

1. **Start the Backend**: Run the Spring Boot server on `localhost:8080`.
2. **Start the Frontend**: Run the Next.js frontend server on `localhost:3000`.

Once both are running, open your browser and go to `http://localhost:3000` to access Termusp.

## Usage

1. Enter a shell command in the text input field at the bottom of the terminal UI.
2. Press Enter or submit the command to send it to the backend.
3. The backend will execute the command and stream the output back to the frontend in real-time.

## Project Structure

The project is organized into two main parts:

```
termusp/
├── server/          # Spring Boot backend to handle WebSocket and command execution
│   ├── src/main/...
│   ├── pom.xml       # Maven configuration
│   └── ...
└── client/         # Next.js frontend with terminal UI
    ├── pages/...
    ├── package.json  # Node dependencies
    └── ...
```

### Key Files

- `server/src/main/java/com/example/terminal/TerminalWebSocketHandler.java`: Handles WebSocket messages, executes shell commands, and sends back output.
- `client/pages/index.js`: Main UI component that connects to the WebSocket, takes input, and displays output.

## Security Considerations

This project demonstrates the fundamentals of WebSocket communication with a shell. **Do not use this in production without significant security improvements**:

1. **Command Filtering**: Limit commands or implement whitelisting to prevent malicious commands.
2. **Authentication**: Restrict access to authorized users only.
3. **Sandboxing**: Use Docker or other containers to execute commands in a safe, isolated environment.

## Future Improvements

- **User Authentication**: Implement user login and authorization.
- **Command Limiting**: Restrict available commands and sanitize inputs.
- **Improved UI**: Add styling, command history, and enhance the terminal UI.
- **Error Handling**: Better error messages and handling for failed commands.
- **Docker Support**: Enable running commands inside Docker containers to enhance security.

## Contributing

Contributions are welcome! Please fork the repository and create a new branch for any feature or bug fix. Make sure to submit a pull request with a detailed description of your changes.

## License

This project is licensed under the MIT License.
