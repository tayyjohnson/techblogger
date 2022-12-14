// This function allows the user to edit a post
async function editFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector("#edit-title-form").value.trim();
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1];
const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);