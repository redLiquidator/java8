package com.example.sunday.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Component;

@Component
public class IngredientsDao {
	public List<String> ingredients = Arrays.asList("Salt","Lemon");
	public String ingredient = "pepper";
	
	public List<String> getAllIngredients() {
		return ingredients;
	}

	/*
	 * public void setAllIngredients(List<String> ingredients) { this.ingredients =
	 * ingredients; }
	 */
	public String getIngredient() {
		return ingredient;
	}
	/*
	 * public void setIngredient(String ingredient) { this.ingredient = ingredient;
	 * }
	 */
	
}
