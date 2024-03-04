package com.jeckchen.portal.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author JeckChen
 * @version 1.0.0
 * @className TestController.java
 * @description
 * @date 2024年02月22日 23:09
 */
@Slf4j
@RestController
@RequestMapping("/test")
public class TestController {
    @RequestMapping("/hello")
    public String hello() {
        System.out.println(1 / 0);
        log.info("hello");
        return "hello";
    }
}
