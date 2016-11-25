package cn.sumpay.accountant;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
@ComponentScan("cn.sumpay.accountant,cn.sumpay.accountant.controller,cn.sumpay.accountant.service")
@ImportResource("classpath:dubbo/dubbo-consumer.xml")
public class Cmp {
	public static void main(String[] args) throws Exception {
		SpringApplication.run(Cmp.class, args);
	}

}
