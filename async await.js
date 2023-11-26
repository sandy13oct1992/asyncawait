const Posts = [];
console.log(Posts);
function CreatePost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Posts.push(post);
      resolve("Promise1 resolved");
    }, 1000);
  });
}

function TimseStamp() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let date = new Date();
      Posts[Posts.length - 1] = {
        ...Posts[Posts.length - 1],
        time: `updated time ${date}`,
      };
      resolve("Promise2 resolved");
    }, 1000);
  });
}

function DeletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Posts.pop();
      resolve();
    }, 1000);
  });
}
function getPost() {
  let op = "";
  Posts.forEach((post) => {
    op += `<li>${post.name} ${post.time}</li>`;
  });
  document.body.innerHTML = op;
}
async function runcall() {
  try {
    await Promise.all([CreatePost({ name: "arun 1" }), TimseStamp()]);
    getPost();
    await Promise.all([CreatePost({ name: "arun 2" }), TimseStamp()]);
    getPost();
    await Promise.all([CreatePost({ name: "arun 3" }), TimseStamp()]);
    getPost();
    await DeletePost();
    getPost();
    await DeletePost();
    getPost();
    await DeletePost();
    getPost();
  } catch (e) {
    console.log(e);
  }
}
runcall();