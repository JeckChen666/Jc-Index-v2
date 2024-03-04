package com.jeckchen.portal;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@EnableAsync
@SpringBootApplication
public class JcIndexV2Application {

    public static void main(String[] args) {
        SpringApplication.run(JcIndexV2Application.class, args);
    }

}
