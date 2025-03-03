// JavaScript Document
function vf(){
	//驗證姓名欄位
	if(f.username.value==""){//f要取成表單id，成為物件		
		alert("請輸入您的姓名");
		f.username.focus();//得到焦點在姓名欄位
		return false;//中斷程式的執行並且傳回false，避免繼續執行以下的程式，相當於java的break
	}
	
	//驗證密碼
	if(f.pwd.value!=f.cpwd.value){
		alert("密碼不一致");
		f.pwd.value="";
		f.cpwd.value="";
		f.pwd.focus();
		return false;
	}
	
	//驗證email與email格式
	if(f.email.value.length==0){
		alert("請輸入您的信箱");
		f.email.focus();
		return false;
	}
	else if(f.email.value.indexOf("@")==-1){//搜尋字串@，若找不到(數值為-1)
		alert("email格式錯誤");
		f.email.focus();
		return false;
	}
	
	//驗證電話
	if(document.getElementById("tel").value==""){
		alert("請輸入您的電話");
		f.tel.focus();
		return false;
	}
	f.submit();
	/*type="button"的按鈕是無法將資料送給PHP的，所以要寫這一行將資料送出
	  ，而且若此行以前的程式都無誤就送出資料
	*/
}