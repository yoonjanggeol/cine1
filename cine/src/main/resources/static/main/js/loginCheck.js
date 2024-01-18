

var aa;
$(document).ready(function() {
	
		$.ajax({
			type: "GET",
			url:"/kakaoemail",
			dataType: 'json',
			
			success: function(data) {
				$('#reserve').on('click', function(e) {
				
			console.log('예매 클릭')
					console.log(data)
					/*console.log(data.entiMemId)*/
	
					if (data === null || data === undefined) {
						// 'loginid' 값이 null이거나 undefined인 경우
						e.preventDefault();
						console.log('로그인되지 않음2');
						openModal();
	
					} else{
						console.log('로그인');
					}
	
	
				});
	
	
	
			},
			error: function() {
	
				console.log("에러: ");
			}
		});
		
		
		// Ajax 요청을 보내고 응답을 쿠키에 저장하는 함수
	function saveResponseInCookie() {
	  // Ajax 요청 생성
	  var xhr = new XMLHttpRequest();
	  xhr.open("GET", "your_server_endpoint", true);
	
	  // Ajax 요청 완료 후 실행되는 콜백
	  xhr.onload = function () {
	    if (xhr.status === 200) {
	      var response = xhr.responseText; // Ajax 응답을 가져옴
	
	      // 쿠키에 응답을 저장
	      document.cookie = "ajaxResponse=" + encodeURIComponent(response);
	      console.log("응답이 쿠키에 저장되었습니다.");
	    } else {
	      console.error("Ajax 요청에 실패했습니다.");
	    }
	  };
	
	  // Ajax 요청 보내기
	  xhr.send();
	}
	
	// 함수 호출
	saveResponseInCookie();

		
		
	
		$.ajax({
			type: "GET",
			url: "/userinfo",
			dataType: 'json',
	
			success: function(data) {
	
				$('#reserve').on('click', function(e) {
	
					console.log('예매 클릭')
					console.log(data)
					/*console.log(data.entiMemId)*/
	
					if (data === null || data === undefined) {
						// 'loginid' 값이 null이거나 undefined인 경우
						e.preventDefault();
						console.log('로그인되지 않음1');
						openModal();
	
					} else{
						console.log('로그인');
					}
	
	
				});
	
	
	
			},
			error: function() {
	
				console.log("에러: ");
			}
		});
		
		
		
		
		
		
		
		
	
});







