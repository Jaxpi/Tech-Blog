const newPostForm = document.querySelector(".post-form");

newPostForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const post_title = document.querySelector("#create-title").value.trim();
  const post_content = document.querySelector("#create-content").value.trim();

  if (post_title && post_content) {
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({ post_title, post_content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to submit.");
    }
  }
});
