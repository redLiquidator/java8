package com.example.sunday.implementation;

import org.springframework.stereotype.Component;

import com.example.sunday.repository.MyInterface;

@Component  //class level annotation. when I run, spring looks for the right class with this annotation  springbook manages this object. it is loosely  
public class MyImpl implements MyInterface{

	
	@Override
	public String getData() {
		// TODO Auto-generated method stub
		return "spring di and ioc";
	}
	
}
