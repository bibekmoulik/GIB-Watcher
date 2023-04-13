
function clear()
{
	document.getElementById("ID").value = "";
	document.getElementById("IDENTIFICATION").value = "";
	document.getElementById("STATUS").value = "";
	document.getElementById("CREATION_TIME_FROM").value = "";
	document.getElementById("CREATION_TIME_TO").value = "";
	document.getElementById("ORDER_BY").value = "";
}

function search()
{
	var ID = document.getElementById("ID").value;
	var IDENTIFICATION = document.getElementById("IDENTIFICATION").value;
	var STATUS = document.getElementById("STATUS").value;
	var CREATION_TIME_FROM = document.getElementById("CREATION_TIME_FROM").value;
	var CREATION_TIME_TO = document.getElementById("CREATION_TIME_TO").value;
	var ORDER_BY = document.getElementById("ORDER_BY").value;
	
	var reqXML = "";
	
	var reqXML = reqXML + "<Watcher><Search_Transactions>";
	var reqXML = reqXML + "<ID>"+ID+"</ID>";
	var reqXML = reqXML + "<IDENTIFICATION>"+IDENTIFICATION+"</IDENTIFICATION>";
	var reqXML = reqXML + "<STATUS>"+STATUS+"</STATUS>";
	var reqXML = reqXML + "<CREATION_TIME_FROM>"+CREATION_TIME_FROM+"</CREATION_TIME_FROM>";
	var reqXML = reqXML + "<CREATION_TIME_TO>"+CREATION_TIME_TO+"</CREATION_TIME_TO>";
	var reqXML = reqXML + "<ORDER_BY>"+ORDER_BY+"</ORDER_BY>";
	var reqXML = reqXML + "</Search_Transactions></Watcher>";
	
	
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "http://192.168.0.212:7800/gib-watcher/search");
	xhr.send(reqXML);
	
	/*try {
		xhr.send(reqXML);
		if (xhr.status != 200) {
		alert('Error ${xhr.status}: ${xhr.statusText}');
		} else {
		alert(xhr.response);
		}
	} catch(err) {alert("Request failed");}
	
	*/
	
	
	
	
	
	
	
	
	xhr.onerror = function() {alert("Network Error");};
	
	xhr.onprogress = function(event) {document.getElementById("ID").style.visibility = "visible";};
	//element.style.visibility = 'hidden';      // Hide
	//element.style.visibility = 'visible';     // Show
	
	//xhr.onload = () => alert(xhr.response);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4)
		{
			alert(xhr.response);
		}
	};
}




function search1() {
    //$('input[type=button]').attr('disabled', true);
    //$("#MemberDetails").html('');
    //$("#MemberDetails").addClass("loading");
    $.ajax({
        type: "OPTION",
        url: "http://192.168.0.212:7800/gib-watcher/search",
        data: "{'MemberNumber': 'dhurr'}",
        //data: "{'MemberNumber': '" + $("#txt_id").val() + "'}",
        //data: "<root>test</root>",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: onSearchSuccess,
        error: onSearchError
    });
}

function onSearchSuccess(data, status) {
    //jQuery code will go here...
	alert("success");
}

function onSearchError(request, status, error) {
    //jQuery code will go here...
	alert("failure");
}
