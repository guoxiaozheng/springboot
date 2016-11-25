package cn.sumpay.accountant.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import cn.sumpay.accountant.service.BankBalanceCheckService;

import com.google.gson.Gson;


@Controller
@RequestMapping("/sumpay")
//@EnableAutoConfiguration
public class TestController {

	@Autowired
	BankBalanceCheckService bankBalanceCheckService;
	@RequestMapping("home")
	@ResponseBody
	String home() {
		return "Hello World!";
	}

//	@RequestMapping(method = RequestMethod.GET, params = "action=test")
	@RequestMapping(method = RequestMethod.GET, value="test")
	@ResponseBody
	public String test() {
		Gson gson = new Gson();
		return gson.toJson(bankBalanceCheckService.queryList());
	}
}
