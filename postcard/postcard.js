async function loadPostCard() {
    const postCardPlaceholder = document.getElementById("center");
    const response = await fetch("postcard/postcard.html");
    const postCardHtml = await response.text();
    postCardPlaceholder.innerHTML = postCardHtml;

    createPosts(posts);
    initializeModal();
    initializePostForm();

}




const toggleCommentsDisplay = (postElement) => {
    const commentList = postElement.querySelector("#comments-list");
    const commentsToggleButton = postElement.querySelector(".comments-toggle");
    const comments = Array.from(commentList.children);

    if (commentsToggleButton.textContent === "Show all comments") {

        comments.forEach((comment) => (comment.style.display = "flex"));
        commentsToggleButton.textContent = "Show less";
    } else {

        comments.forEach((comment, index) => {
            comment.style.display = index < 2 ? "flex" : "none";
        });
        commentsToggleButton.textContent = "Show all comments";
    }
};




const handleComment = (post, postElement) => {
    const commentInput = postElement.querySelector("#comment-input");
    const commentList = postElement.querySelector("#comments-list");
    const commentsCount = postElement.querySelector("#comments");
    const commentsSection = postElement.querySelector(".comments-list");

    const newComment = commentInput.value.trim();

    if (newComment) {

        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");

        const commentProfileImg = document.createElement("img");
        commentProfileImg.classList.add("comment-profile-img");
        commentProfileImg.src = "img/profile.jpg";
        commentProfileImg.alt = "User Profile";

        const commentContent = document.createElement("div");
        commentContent.classList.add("comment-content");

        const commentUsername = document.createElement("span");
        commentUsername.classList.add("comment-username");
        commentUsername.textContent = post.username;

        const commentText = document.createElement("p");
        commentText.classList.add("comment-text");
        commentText.textContent = newComment;

        commentContent.appendChild(commentUsername);
        commentContent.appendChild(commentText);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-comment");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            commentList.removeChild(commentElement);
            post.comments -= 1;
            commentsCount.textContent = `${post.comments} Comments`;
        });

        commentElement.appendChild(commentProfileImg);
        commentElement.appendChild(commentContent);
        commentElement.appendChild(deleteButton);

        commentList.appendChild(commentElement);

        commentInput.value = "";

        post.comments += 1;
        commentsCount.textContent = `${post.comments} Comments`;

        if (post.comments === 1) {
            commentsSection.classList.remove("hidden");
        }


        toggleCommentsDisplay(postElement);
    }
};

const initializeComments = (postElement) => {
    const commentList = postElement.querySelector("#comments-list");
    const commentsToggleButton = document.createElement("button");
    commentsToggleButton.classList.add("comments-toggle");
    commentsToggleButton.textContent = "Show all comments";

    commentList.after(commentsToggleButton);

    commentsToggleButton.addEventListener("click", () => {
        toggleCommentsDisplay(postElement);
    });


    const comments = Array.from(commentList.children);
    comments.forEach((comment, index) => {
        comment.style.display = index < 2 ? "flex" : "none";
    });
};




const posts = [
    {
        profileImg: "img/dado_profile.webp",
        username: "BabySitter1",
        location: "1d · Prishtine, Kosove",
        content: "Hi! I’m [Your Name], an experienced and caring nanny with [X] years of experience in childcare. I’m passionate about providing a safe, nurturing, and fun environment for children. I enjoy engaging kids in creative activities, helping with homework, and ensuring they feel loved and supported. I’m available for [full-time/part-time] work and can provide references upon request. Looking forward to helping your family!",
        images: ["img/Cute-Room.jpg", "img/another_room1.png"],
        likes: 125,
        comments: 10,
        isLiked: false,
    },
    {
        profileImg: "img/profile.jpg",
        username: "BabySitter2",
        location: "2d · Gjilan, Kosove",
        content: "Looking for experienced babysitters!",
        images: ["img/recieve.png"],
        likes: 200,
        comments: 15,
        isLiked: false,
    },
];



const toggleLike = (post, likesElement, heartIcon) => {
    post.isLiked = !post.isLiked;
    if (post.isLiked) {
        post.likes += 1;
        heartIcon.classList.add("fa-solid");
        heartIcon.classList.remove("fa-regular");
        heartIcon.style.color = "#e2687e";


        heartIcon.addEventListener("mouseenter", () => {
            heartIcon.style.color = "#e2687e";
        });
        heartIcon.addEventListener("mouseleave", () => {
            heartIcon.style.color = "#e2687e";
        });
    } else {
        post.likes -= 1;
        heartIcon.classList.add("fa-regular");
        heartIcon.classList.remove("fa-solid");
        heartIcon.style.color = "black";


        heartIcon.addEventListener("mouseenter", () => {
            heartIcon.style.color = "#e2687e";
        });
        heartIcon.addEventListener("mouseleave", () => {
            heartIcon.style.color = "black";
        });
    }
    likesElement.textContent = `${post.likes} likes`;
};
const populatePost = (post, templatePost) => {
    templatePost.querySelector("#profile-img").src = post.profileImg;
    templatePost.querySelector("#username").textContent = post.username;
    templatePost.querySelector("#location").textContent = post.location;
    templatePost.querySelector("#content").textContent = post.content;

    const imagesContainer = templatePost.querySelector("#images");
    imagesContainer.innerHTML = "";
    post.images.forEach((imgSrc) => {
        const img = document.createElement("img");
        img.src = imgSrc;
        imagesContainer.appendChild(img);
    });

    const likesElement = templatePost.querySelector("#likes");
    likesElement.textContent = `${post.likes} likes`;
    templatePost.querySelector("#comments").textContent = `${post.comments} Comments`;

    const heartButton = templatePost.querySelector(".fa-heart");
    heartButton.addEventListener("click", () => {
        toggleLike(post, likesElement, heartButton);
    });

    const submitCommentButton = templatePost.querySelector("#submit-comment");
    submitCommentButton.addEventListener("click", () => {
        handleComment(post, templatePost);
    });


    initializeComments(templatePost);
};



const createPosts = (postsData) => {
    const postContainer = document.getElementById("post-container");
    const templatePost = document.querySelector(".post");


    if (!postContainer || !templatePost) {
        console.error("Post container or template not found!");
        return;
    }

    postsData.forEach((post) => {
        const newPost = templatePost.cloneNode(true);
        newPost.style.display = "block";
        populatePost(post, newPost);
        postContainer.appendChild(newPost);
    });
};

function toggleModalVisibility(show) {
    const modal = document.getElementById("post-modal");
    if (show) {
        modal.style.display = "block";
        modal.style.display = "none";
    }
}

function initializeModal() {
    const addButton = document.getElementById("add");
    const closeButton = document.getElementById("close-modal");


    addButton.addEventListener("click", () => {
        toggleModalVisibility(true);
    });


    closeButton.addEventListener("click", () => {
        toggleModalVisibility(false);
    });


    const modal = document.getElementById("post-modal");
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            toggleModalVisibility(false);
        }
    });
}

function initializePostForm() {

    const postForm = document.getElementById('post-form');
    const postImagesInput = document.getElementById('post-images');
    const imagePreview = document.getElementById('image-preview');
    const postContainer = document.getElementById("post-container");
    const templatePost = document.querySelector(".post");

    if (!postContainer || !templatePost) {
        console.error("Post container or template not found!");
        return;
    }


    const handleFileSelection = (event) => {
        const files = event.target.files;
        imagePreview.innerHTML = '';

        Array.from(files).forEach((file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                imagePreview.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    };


    const handleFormSubmission = (event) => {
        event.preventDefault();
        const postContent = document.getElementById('post-content').value.trim();
        const files = postImagesInput.files;

        if (!postContent && files.length === 0) {
            alert('Post content or at least one image is required.');
            return;
        }


        const images = [];
        Array.from(files).forEach((file) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                images.push(e.target.result);


                if (images.length === files.length) {
                    addNewPost(postContent, images);
                }
            };
            reader.readAsDataURL(file);
        });


        if (files.length === 0) {
            addNewPost(postContent, []);
        }
    };

    const addNewPost = (content, images) => {
        const newPost = {
            profileImg: "img/profile.jpg",
            username: "CurrentUser",
            location: "Just now · Your Location",
            content,
            images,
            likes: 0,
            comments: 0,
            isLiked: false,
        };


        posts.unshift(newPost);

        const newPostElement = templatePost.cloneNode(true);
        newPostElement.style.display = "block";
        populatePost(newPost, newPostElement);
        postContainer.prepend(newPostElement);


        postForm.reset();
        imagePreview.innerHTML = '';
        toggleModalVisibility(false);
    };


    postImagesInput.addEventListener('change', handleFileSelection);
    postForm.addEventListener('submit', handleFormSubmission);
}






document.addEventListener('DOMContentLoaded', loadPostCard);
