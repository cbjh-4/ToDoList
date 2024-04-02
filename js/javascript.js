document.addEventListener('DOMContentLoaded', function() {
    // input_text 요소에 keypress 이벤트 리스너를 추가합니다.
    document.getElementById("input_text").addEventListener("keypress", function(event) {
        // 엔터 키가 눌렸는지 확인합니다.
        if (event.key === "Enter") {
            myFuc(); // 엔터 키가 눌리면 myFuc 함수를 호출합니다.
            event.preventDefault(); // 폼이 실제로 제출되는 것을 방지합니다.
        }
    });
});

function myFuc() {
    var input_text = document.getElementById("input_text").value; // 입력 필드에서 값 가져오기
    if (input_text.trim() !== "") { // 입력된 텍스트가 비어있지 않은지 확인
        var contents = document.getElementById("contents"); // contents 요소 찾기
        var uniqueId = 'item-' + Date.now(); // 현재 시간을 기반으로 한 고유 ID 생성        
        // 체크박스와 텍스트를 포함하는 li 요소 생성 및 고유 ID 부여
        var itemHtml = "<li id='" + uniqueId + "'><input type='checkbox'>" + input_text + "</li>";
        contents.innerHTML += itemHtml;        
        document.getElementById("input_text").value = ""; // 입력 필드 초기화
    }
}

function deleteFuc() {
    // 모든 체크박스 요소를 선택
    var checkboxes = document.querySelectorAll("#contents input[type='checkbox']");
    // 각 체크박스를 순회하면서 체크된 것들을 찾아 해당하는 항목(li) 삭제
    
    for(var i=0; i<checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkboxes[i].parentElement.remove();
        }
    }
}

function deleteAllFuc() {
    // 모든 체크박스 요소를 선택
    var checkboxes = document.querySelectorAll("#contents input[type='checkbox']");
    // 각 체크박스를 순회하면서 체크된 것들을 찾아 해당하는 항목(li) 삭제
    
    for(var i=0; i<checkboxes.length; i++) {
        checkboxes[i].parentElement.remove();        
    }
}

function deleteRecentFuc() {
    // 모든 체크박스 요소를 선택
    var checkboxes = document.querySelectorAll("#contents input[type='checkbox']");
    // 제일 마지막 행 삭제
    var lastElement = checkboxes.length-1;
    checkboxes[lastElement].parentElement.remove();           
}