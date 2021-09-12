package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//homework
//a) Upgrade your STS
//b) Setup of maven as per the link shared
//c) Run the command :
//mvn spring-boot:run
//d) mvn package
//to create jar file

@RestController   //RestController = controller& response body 
public class SundayController {
	
	@GetMapping            //@RequestMapping
	public String getdata() {
		return "hello spring";
	} 
}
