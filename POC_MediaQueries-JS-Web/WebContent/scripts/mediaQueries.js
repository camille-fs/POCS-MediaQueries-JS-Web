/**********************************/
/***Method 1 - matchMedia *********/
/**********************************/

//Actualize the size of the window
function actualizeWindowSize()
{
	var window_size = document.getElementById("window_size");
	
	window_size.innerHTML= window.innerWidth + "px";
}

//Function to change displays in function of the size of the window
function redimensionnement() 
{
	///////////////////////////////////////////////////////////////////////
	////////////////////Actualise window size and type/////////////////////
	///////////////////////////////////////////////////////////////////////

	//On resize actualise window size
	actualizeWindowSize();
	
	//And actualise window type
	var result = document.getElementById("window_type");

	if("matchMedia" in window) //matchMedia is compatible with the browser
	{
		//If the window matches the media query
		if(window.matchMedia("(min-width: 1280px)").matches) 
		{
			result.innerHTML = 'BigWindow';
			
			////////////////////////////////////////////////////////
			////Create the script you want to load dynamically/////
			//////////////////////////////////////////////////////
			
			/*var jScript = document.createElement('script');
			jScript.type='text/javascript';
			jScript.src = 'scripts/javascript_style.js';
			
			//Fire a function on load
			jScript.onload = function() {
			}
			
			//Insert the script in the DOM at the end of the head
			document.getElementsByTagName('head')[0].appendChild(jScript);*/
		} 
		else if(window.matchMedia("(min-width: 800px) and (max-width: 1279px)").matches) 
		{
			result.innerHTML = 'MiddleWindow';
		} 
		else  if (window.matchMedia("(min-width: 491px) and (max-width: 799px)").matches)
		{
			result.innerHTML = 'LittleWindow';
		}
	}
	
	//////////////////////////////////////////////////////////////////////////////
	//Start or stop the slider depending on the width of the window with JQuery//
	////////////////////////////////////////////////////////////////////////////
	
	var width=$(window).width();

	//Big Windows
	if (width>=799) 
	{ 
		$('#slider').data('nivoslider').start();
	}
	else //Stop slider
	{
		$('#slider').data('nivoslider').stop();
	}
}
// Link the resize event to the redimensionnement function
window.addEventListener('resize', redimensionnement, false);

// Execute the function
redimensionnement();

/****************************************************************/
/***Method 3 - Stock a content in CSS to get it in javascript***/
/**************************************************************/

/*function redimensionnementCSS() 
{
	//On resize actualise window size
	actualizeWindowSize();

	var result = document.getElementById('window_type');
	var windowSize = window.getComputedStyle(document.body,':after').getPropertyValue('content');
	
	//From the after body content get the type of the window
	if(windowSize=='BigWindow')
	{
		result.innerHTML= 'BigWindow';
	}
	else if(windowSize=='MiddleWindow')
	{
		result.innerHTML= 'MiddleWindow';
	}
	else if(windowSize=='LittleWindow')
	{
		result.innerHTML= 'LittleWindow';
	}
}

//Link the resize event to the redimensionnemetn function
window.addEventListener('resize', redimensionnementCSS, false);

//Execute the function
redimensionnementCSS(); 
*/

/*********************************************/
/****Method 4 - Media Queries with JQuery****/
/*******************************************/


/*$(window).resize(function() {
	
	//On resize actualise window size
	actualizeWindowSize();

	var width = $(window).width();
	
	//Big Windows
	if (width>=1280) 
	{ 
		$('#window_type').html('BigWindow');
	}
	else if ((width>=800)&&(width<1279))  //Middle Windows
	{
		$('#window_type').html('MiddleWindow');
	}
	else if (width<800)
	{
		$('#window_type').html('LittleWindow'); //Little Windows
	}
});*/
