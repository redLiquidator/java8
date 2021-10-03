package com.example.sunday;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//spring initializr
//(SNAPSHOT) is recent version. do not use.
//Package name = Group + Artifact
//jar,war are executable files
//https://start.spring.io/
//Dependencies: add 1.Spring Boot DevTools, 2.Spring Web as default options
//open project file: click file> click open projects from file system

//homework
//a) Upgrade your STS
//b) Setup of maven as per the link shared
//c) Run the command :
//mvn spring-boot:run
//d) mvn package
//to create jar file

@RestController   //RestController = controller& response body 
@RequestMapping("/sunday123")   //general 
public class SundayController {

	//spring initializr
	//(SNAPSHOT) is recent version. do not use.
	//Package name = Group + Artifact
	//jar,war are executable files
	//https://start.spring.io/
	//Dependencies: add 1.Spring Boot DevTools, 2.Spring Web as default options
	//open project file: click file> click open projects from file system

	//homework
	//a) Upgrade your STS help->check for updates
	//b) Setup of maven as per the link shared
	//c) Run the command :
	//mvn spring-boot:run
	//d) mvn package
	//to create jar file

		
		@GetMapping            //@RequestMapping needs to specify which method(get, post..)
		public String getdata() {
			//String str = "123";
			return "hello spring";  // we didnt specify path, so http://localhost:8989/ will bring 'hello spring'. use postman.
									//but in application.properties, with server.servlet.context-path, I set default url of this project 
		
		} 
	}


