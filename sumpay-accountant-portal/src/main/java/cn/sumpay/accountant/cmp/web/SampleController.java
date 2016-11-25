package cn.sumpay.accountant.cmp.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("sumpay/accountant/")
@EnableAutoConfiguration
public class SampleController {

    @RequestMapping("home")
    @ResponseBody
    String home() {
        return "Hello World!";
    }
    @RequestMapping("/welcome.vhtml")
    public String test(){
    	return "test";
    }
    public static void main(String[] args) throws Exception {
        SpringApplication.run(SampleController.class, args);
    }
}