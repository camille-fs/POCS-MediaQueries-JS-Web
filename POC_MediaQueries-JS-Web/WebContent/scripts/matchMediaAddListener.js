
/****************************************************************/
/*************Method 2 - matchMedia addListener*****************/
/**************************************************************/

//Actualize the size of the window
function actualizeWindowSize()
{
	var window_size = document.getElementById("window_size");
	
	window_size.innerHTML= window.innerWidth + "px";
}

//Link the resize event to the actualizeWindowSize function
window.addEventListener('resize', actualizeWindowSize, false);


function redimensionnementWithAddListener() 
{
	if(window.matchMedia) //matchMedia is a property of window object
	{
		//Keep a reference to a MediaQueryList
		var bigW=window.matchMedia("(min-width: 1280px)");
		var middleW=window.matchMedia("(min-width: 800px) and (max-width: 1279px)");
		var littleW=window.matchMedia("(min-width: 491px) and (max-width: 799px)");
		
		//Add a listener to trigger the function when the media query state changes
		bigW.addListener(handleBigW);
		middleW.addListener(handleMiddleW);
		littleW.addListener(handleLittleW);
	}
	
	//Big Window
	function handleBigW(bigW) 
	{
		var result = document.getElementById('window_type');
		
		if(bigW.matches) //If the media query (bigW) matches the window properties 
		{
			result.innerHTML = 'BigWindow';
		}
	}
	

	//Middle Window
	function handleMiddleW(middleW) 
	{
		var result = document.getElementById('window_type');
		
		if(middleW.matches) //If the media query (middleW) matches the window properties 
		{
			result.innerHTML = 'MiddleWindow';
		}
	}

	//Little Window
	function handleLittleW(littleW) 
	{
		var result = document.getElementById('window_type');
		
		if(littleW.matches) //If the media query (littleW) matches the window properties 
		{
			result.innerHTML = 'LittleWindow';
		}
	}
}

//Execute the function
redimensionnementWithAddListener();