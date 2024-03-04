package com.jeckchen.portal.core;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * @author JeckChen
 * @version 1.0.0
 * @className NoNeedLogin.java
 * @description
 * @date 2024年02月25日 02:18
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface NoNeedLogin {
}