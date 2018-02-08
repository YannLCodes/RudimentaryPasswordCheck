

		document.getElementById("btn").onclick=function()
			{
				var valueEntered = document.getElementById("pass").value;
				var life = "42";
				if (valueEntered==life)
					{
						document.getElementById("guide").innerHTML="Correct!";
					}

				else
				{
					document.getElementById("guide").innerHTML="Try a whole number between 41 and 43";
				}				
			}
		
	