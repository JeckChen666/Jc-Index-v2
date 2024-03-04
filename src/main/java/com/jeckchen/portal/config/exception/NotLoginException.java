package com.jeckchen.portal.config.exception;

/**
 * @author JeckChen
 * @version 1.0.0
 * @className NotLoginException.java
 * @description
 * @date 2024年02月25日 01:15
 */
public class NotLoginException extends RuntimeException {
    public NotLoginException(String message) {
        super(message);
    }
}
