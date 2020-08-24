function toggleModal(modalID) {
    var modal = document.getElementById(modalID);
    if (modal.style.display == '') {
        modal.style.display = 'block';
    } else {
        modal.style.display = '';
    }
}

function toggleCreatePostModal() {
    toggleModal('createPostModal');
}

function allPostsRedirect() {
    window.location.href = 'html/postslist.html';
}

document.getElementById('allPosts').addEventListener('click', allPostsRedirect);