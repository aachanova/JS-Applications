function attachEvents() {
  const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
  const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

  const btnLoadPostsElement = document.getElementById('btnLoadPosts');
  const btnViewPostsElement = document.getElementById('btnViewPost');
  const selectPostsElement = document.getElementById('posts');
  const h1PostTitleElement = document.getElementById('post-title');
  const pPostBodyElement = document.getElementById('post-body');
  const ulPostComments = document.getElementById('post-comments');

  btnLoadPostsElement.addEventListener('click', handleLoadPosts);
  btnViewPostsElement.addEventListener('click', handleViewPosts);

  let commonData;

  function handleLoadPosts() {
    fetch(postsUrl)
      .then(res => res.json())
      .then(data => addPost(data));

    function addPost(data) {
      commonData = data;

      selectPostsElement.innerHTML = '';
      for (let [id, postInfo] of Object.entries(data)) {

        let optionElement = document.createElement('option');
        optionElement.value = id;
        optionElement.textContent = postInfo.title;

        selectPostsElement.append(optionElement);
      }
    }
  }

  function handleViewPosts() {
    const selectedPostId = document.getElementById('posts').value;
    h1PostTitleElement.textContent = commonData[selectedPostId].title;
    pPostBodyElement.textContent = commonData[selectedPostId].body;

    fetch(commentsUrl)
      .then(res => res.json())
      .then(data => viewComment(data));

    function viewComment(data) {
      ulPostComments.innerHTML = '';

      for (let [id, commentObj] of Object.entries(data)) {
        if (commentObj.postId === selectedPostId) {
          const li = document.createElement('li');
          li.setAttribute('id', commentObj.id);
          li.textContent = commentObj.text;
          
          ulPostComments.appendChild(li);
        }
      }
    }
  }
}

attachEvents();