
function handleLike(blogId) {
    let likeCount = localStorage.getItem(blogId) || 0;

    likeCount++;
    
    const likeCounter = document.querySelector(`.like-counter[data-id="${blogId}"]`);
    likeCounter.textContent = `${likeCount} Likes`;

    localStorage.setItem(blogId, likeCount);
}

function addComment(blogId) {
    const commentInput = document.querySelector(`.comments-section textarea[data-id="${blogId}"]`);
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        const newComment = document.createElement('li');
        newComment.textContent = commentText;

        const commentList = document.querySelector(`.comments-section .comment-list[data-id="${blogId}"]`);
        commentList.appendChild(newComment);

        let comments = JSON.parse(localStorage.getItem(`comments-${blogId}`)) || [];

        comments.push(commentText);

        localStorage.setItem(`comments-${blogId}`, JSON.stringify(comments));

        commentInput.value = '';
    }
}

function initializeLikeCountersAndComments() {
    document.querySelectorAll('.blog-card').forEach(blogCard => {
        const blogId = blogCard.querySelector('.like-button').getAttribute('data-id');

        const likeCount = localStorage.getItem(blogId) || 0;

        const likeCounter = blogCard.querySelector('.like-counter');
        likeCounter.textContent = `${likeCount} Likes`;

        const storedComments = JSON.parse(localStorage.getItem(`comments-${blogId}`)) || [];

        const commentList = blogCard.querySelector('.comment-list');
        storedComments.forEach(commentText => {
            const newComment = document.createElement('li');
            newComment.textContent = commentText;
            commentList.appendChild(newComment);
        });
    });
}

window.addEventListener('load', initializeLikeCountersAndComments);
