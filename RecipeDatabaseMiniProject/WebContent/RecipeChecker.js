/**
 * This is a JavaScript file that checks the recipe before it's submitted to verify if all the elements are correct (when editing a recipe or adding one).
 */

function submitCheckAdd()
{
	var recipeName = document.getElementById('recipeName').value;
	var recipeType = document.getElementById('recipeType').value;
	var month = document.getElementById('month').value;
	var day = document.getElementById('day').value;
	var year = document.getElementById('year').value;
	var calories = document.getElementById('calories').value;
	var prepTime = document.getElementById('prepTime').value;
	
	if (recipeName.length > 40)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your recipe name, it is longer than 40 characters."
		return false;
	}
	
	else if (recipeType.length > 20)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your recipe type, it is longer than 20 characters."
		return false;
	}
	
	else if (month.length > 2)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your month, it is longer than 2 characters."
		return false;
	}
	else if (month.length < 2)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your month, it is less than 2 characters."
		return false;
	}
	
	else if (day.length > 2)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your day, it is longer than 2 characters."
		return false;
	}
	else if (day.length < 2)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your day, it is less than 2 characters."
		return false;
	}
	
	else if (year.length > 2)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your year, it is longer than 2 characters."
		return false;
	}
	else if (year.length < 2)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your year, it is less than 2 characters."
		return false;
	}
	
	else if (isNaN(calories)) 
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your calories, it needs to be a number."
		return false;
	}
	else if (calories <= 0)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your calories, it needs to be greater than 0."
		return false;
	}
	
	else if (prepTime.length > 30)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your prep time, it is longer than 30 characters."
		return false;
	}
	else
	{
		document.getElementById('messageText').style.display = 'none';
		return true;
	}
}

function submitCheckEdit()
{
	var recipeName = document.getElementById('recipeName').value;
	var recipeType = document.getElementById('recipeType').value;
	var calories = document.getElementById('calories').value;
	var prepTime = document.getElementById('prepTime').value;
	
	if (recipeName.length > 40)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your recipe name, it is longer than 40 characters."
		return false;
	}
	
	else if (recipeType.length > 20)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your recipe type, it is longer than 20 characters."
		return false;
	}
	
	else if (isNaN(calories)) 
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your calories, it needs to be a number."
		return false;
	}
	else if (calories <= 0)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your calories, it needs to be greater than 0."
		return false;
	}
	
	else if (prepTime.length > 30)
	{
		document.getElementById('messageText').style.display = 'block';
		document.getElementById('messageText').value = "Error. Fix your prep time, it is longer than 30 characters."
		return false;
	}
	else
	{
		document.getElementById('messageText').style.display = 'none';
		return true;
	}
}