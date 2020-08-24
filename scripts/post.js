function editPost() {
    var button = document.getElementById('editPostBtn');
    var blogBody = document.getElementById('postBody');
    var blogTitleNew = document.getElementById('blogTitleNew');
    if (blogBody.contentEditable == 'true') {
        blogBody.contentEditable = 'false';
        blogBody.style.border = 'none';
        blogTitleNew.contentEditable = 'false';
        blogTitleNew.style.border = 'none';
        button.innerHTML = 'Edit <i class="fa fa-edit"></i>';
    } else {
        blogBody.contentEditable = 'true';
        blogBody.style.border = '1px solid red';
        blogTitleNew.contentEditable = 'true';
        blogTitleNew.style.border = '1px solid red';
        button.innerHTML = 'Save <i class="fa fa-save"></i>';
    }
}

var likeCount = 0;

function likePost() {
    likeCount++;
    document.getElementById('likeBtn').innerHTML = '<i class="fa fa-thumbs-up"></i> Liked!';
    if (likeCount == 1) {
        document.getElementById('likeText').innerHTML = likeCount + ' person likes this!';
    } else {
        document.getElementById('likeText').innerHTML = likeCount + ' people have liked this!';
    }
}

function addUserComment(id) {
    var newComment = id.value + '<br>';
    var existingComments = document.getElementById('userCommentList').innerHTML;
    document.getElementById('userCommentList').innerHTML = '<p class="commentBlock">'+newComment+'</p>' + existingComments;
    var userComment = document.getElementById('userComment');
    userComment.value = userComment.defaultValue;
}