function loginValue()
		{
			var password = document.getElementById("password").value;
                var y = document.getElementById("clear");
				var z = document.getElementById("all");			
			if(password=="03052003")
			{
				alert('Oke, pass chị nhập đã chính xác!!!');
						y.remove(y);
						z.style.display = 'block';
				 return false;
        	}
			else{
				alert("Pass chị nhập sai rồi nha, pass có 8 kí tự nha!");
				return false;
			}
	}
			