var modal = document.getElementById('deletePostModal');
var postItemId;

function openModal(id){
postItemId = id;

    modal.style.display = 'block';
}

function closeModal(){
    modal.style.display = 'none';
}

function deleteItem() { 
var myobj = document.getElementById(postItemId);
myobj.remove(); 
closeModal(); 
}


/*
function deleteItem(){
    var elements = document.getElementsByClassName('postItem');
    elements[0].parentNode.removeChild(elements[0]);
    elements ++;
    
}
*/
