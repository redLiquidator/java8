package com.example.sunday.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.sunday.implementation.MyImpl;

@RestController  //equals to @Controller+@ResponseBody
//@Controller
public class MyController {
	
	
	@Autowired  //using spring's dependency injection facilities
	private MyImpl myImpl;  //reference, not creating object
	
	//http://localhost:8081/api/check
	@GetMapping("/check")
	public String check() {
		return myImpl.getData();
	}
	
	//h.w: study 3 types of dependency Injection
	//1.field based : using @Autowired	
	//@Autowired
	private IngredientsDao dao;
	//public MyController(IngredientsDao dao) {
	//	this.dao = dao;  //2. constructor based dependency injection
	//}
	
	//public IngredientsDao dao; don't use public
	
	@GetMapping("/getAllIngredients")
	public List<String> getAllIngredients(){
		System.out.println("getAllIngredients()");
		return dao.getAllIngredients();   
	}

	//setter method based -> line27 -> getDao
	@Autowired
	public void setDao(IngredientsDao dao) {
		this.dao = dao;
	}

	@GetMapping("/getIngredient")
	public String getIngredient() {
		System.out.println("getIngredient()");   
		return dao.getIngredient();    //no actual data....!?!
	}
	
	//2.constructor based (https://www.baeldung.com/constructor-injection-in-spring)
	// firstly, I should add the following dependency
	//<dependency>
    //<groupId>org.springframework</groupId>
    //<artifactId>spring-context</artifactId>
    //<version>5.2.8.RELEASE</version>
	//</dependency>
	//there are multiple types of constructor based dependency injection
	//: Annotation Based Configuration,Implicit Constructor Injection,XML Based Configuration
	
	
}
