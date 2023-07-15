package com.miniproject.onlinemarketplace.utility;

public class LoginResponse {
    private boolean status;
    private String message;
    private int id;

    public LoginResponse(boolean status, String message, int id) {
        this.status = status;
        this.message = message;
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public boolean getStatus() {
        return status;
    }

    public int getId() {
        return id;
    }
}
