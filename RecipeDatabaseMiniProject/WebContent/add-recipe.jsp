<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!-- Add page to allow the user to add to the recipe database. -->
<!DOCTYPE html>
<html>
<head>
	<!-- Script for Week 8 -->
	<script src="RecipeChecker.js"></script>
	<!-- Added CSS to make the web page look pretty. -->
	<style>
	body 
	{
  		background-color: lightgrey;
	}
	a 
	{
   		background-color: grey;
  		box-shadow: 0 5px 0 darkgrey;
  		color: white;
  		padding: .25em .5em;
  		position: relative;
  		text-decoration: none;
	}
	a:hover 
	{
  		background-color: grey;
	}
	a:active 
	{
  		box-shadow: none;
  		top: 5px;
	}
	</style>
	<meta charset="ISO-8859-1">
	<title>Adding Recipe to Database</title>
</head>
<body>
	<input type = "text" style = "display:none" name = "messageText" size = "60" id = "messageText" readonly>
	<!-- Create a form with all the instance variables from RecipeInfo to allow the user to add to the database. -->
	<form action = "addRecipeServlet" onsubmit ="return submitCheckAdd()" method="post">
		Recipe Name: <input type ="text" name = "recipeName" id = "recipeName">
		<br>
		Recipe Type: <input type = "text" name = "recipeType" id = "recipeType">
		<br>
		Date Added: <input type ="text" id="month" name = "month" placeholder="mm" size="4"> <input type ="text" id="day" name = "day" placeholder="dd" size="4">, <input type ="text" id="year" name = "year" placeholder="yyyy" size="4">
		<br>
		Calories: <input type = "text" name = "calories" id = "calories">
		<br>
		Prep Time: <input type = "text" name = "prepTime" id = "prepTime">
		<br />
		<input type = "submit" value="Add Recipe" id = "submitButton">
	</form> <br />
	<!-- Link to return to the recipe's database. -->
	<p><a href = "viewAllRecipesServlet">Return Back to the List of Recipes</a></p>
</body>
</html>