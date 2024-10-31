package com.yashvant.termusp.server;

// src/main/java/com/example/terminal/TerminalWebSocketHandler.java

import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.BufferedReader;
import java.io.InputStreamReader;

public class TerminalWebSocketHandler extends TextWebSocketHandler {

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {
        String command = message.getPayload();

        // Run command and capture output
        Process process = Runtime.getRuntime().exec(command);
        BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        String line;
        StringBuilder output = new StringBuilder();

        while ((line = reader.readLine()) != null) {
            output.append(line).append("\n");
            session.sendMessage(new TextMessage(line));
        }

        process.waitFor();
        session.sendMessage(new TextMessage("Command completed."));
    }
}
