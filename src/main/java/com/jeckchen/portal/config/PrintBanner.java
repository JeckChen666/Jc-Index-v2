package com.jeckchen.portal.config;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ansi.AnsiColor;
import org.springframework.boot.ansi.AnsiOutput;
import org.springframework.boot.ansi.AnsiStyle;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.stereotype.Component;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.nio.charset.StandardCharsets;

/**
 * @author JeckChen
 * @version 1.0.0
 * @className PrintBanner.java
 * @description
 * @date 2024年02月22日 23:38
 */
@Component
@Slf4j
public class PrintBanner implements ApplicationListener<ApplicationReadyEvent> {

    public static final String[] BANNER = {"", " ____  ____  ____  ____ ", "(_  _)(  __)/ ___)(_  _)", "  )(   ) _) \\___ \\  )(", " (__) (____)(____/ (__) "};
    private final String bannerName = " :: Test :: ";
    @Value("${test.version}")
    private String version;

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        Log log = LogFactory.getLog(PrintBanner.class);
        log.info("start finish");

        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        PrintStream printStream = new PrintStream(baos);
        for (String s : BANNER) {
            printStream.println(s);
        }

        version = (version != null) ? " (v" + version + ")" : "";
        StringBuilder padding = new StringBuilder();
        while (padding.length() < 24 - (version.length() + bannerName.length())) {
            padding.append(" ");
        }

        printStream.println(AnsiOutput.toString(AnsiColor.GREEN, bannerName, AnsiColor.DEFAULT, padding.toString(), AnsiStyle.FAINT, version));
        log.info(baos.toString(StandardCharsets.UTF_8));

    }

}