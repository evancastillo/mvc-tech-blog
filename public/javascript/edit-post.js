async function editFormHandler(event) {
  event.preventDefault();

  let post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];
  console.log(typeof parseInt(post_id));
  if (isNaN(post_id)) {
    console.log(post_id + ' is not a number');
    post_id = false;
  }

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const post_body = document.querySelector('textarea[name="post-body"]').value.trim();

  if (title) {
    const apiUrl = '/api/posts' + (post_id ? `/${post_id}` : '');
    const apiMethod = post_id ? 'PUT' : 'POST';
    console.log(apiMethod, apiUrl);
    const response = await fetch(apiUrl, {
      method: apiMethod,
      body: JSON.stringify({
        title,
        post_body
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
