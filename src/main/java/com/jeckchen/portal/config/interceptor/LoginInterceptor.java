package com.jeckchen.portal.config.interceptor;


import com.jeckchen.portal.config.exception.NotLoginException;
import com.jeckchen.portal.core.NeedLogin;
import com.jeckchen.portal.core.NoNeedLogin;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.method.HandlerMethod;
import org.springframework.web.servlet.HandlerInterceptor;

/**
 * @author JeckChen
 * @version 1.0.0
 * @className LoginInterceptor.java
 * @description
 * @date 2024年02月25日 02:14
 */
@Component
public class LoginInterceptor implements HandlerInterceptor {

    @Value("${loginValidator.enableNeedLoginAnnotation}")
    private boolean enableNeedLoginAnnotation;
    @Value("${loginValidator.enableNoNeedLoginAnnotation}")
    private boolean enableNoNeedLoginAnnotation;

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        // 如果关闭注解使用，则全部返回true
        if (!enableNeedLoginAnnotation && !enableNoNeedLoginAnnotation) {
            return true;
        }
        // 如果启动无需登录注解，则默认所有的接口都需要登录校验。判断是否使用注解，若使用则返回true
        if (enableNoNeedLoginAnnotation) {
            boolean isNoNeedLogin = ((HandlerMethod) handler).getMethodAnnotation(NoNeedLogin.class) != null;
            if (isNoNeedLogin) {
                return true;
            }
            String token = request.getHeader("token");
            if (StringUtils.isBlank(token)) {
                throw new NotLoginException("请先登录");
            }
        }
        // 如果启动需要登录注解，则默认所有的接口都不需要登录校验。判断是否使用注解，若使用则进行登录校验
        if (enableNeedLoginAnnotation) {
            boolean isNeedLogin = ((HandlerMethod) handler).getMethodAnnotation(NeedLogin.class) != null;
            if (isNeedLogin) {
                String token = request.getHeader("token");
                if (StringUtils.isBlank(token)) {
                    throw new NotLoginException("请先登录");
                }
            }
            return true;
        }
        // TODO:获取token后可查询用户信息保存到TreadLocal
        return true;
    }
}
