//common(global) axios configurations
//default url
axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";
axios.defaults.headers.common["auth"] = "Ibrahim";
//selector
const getBtn = document.querySelector("#get");
const postBtn = document.querySelector("#post");
const putPatchBtn = document.querySelector("#putPatch");
const deleteBtn = document.querySelector("#delete");
const simRequestBtn = document.querySelector("#simRequest");
const cusHeaderBtn = document.querySelector("#cusHeader");
const errorBtn = document.querySelector("#error");
const postContainer = document.querySelector(".post-container");

//EventListener
// getBtn.addEventListener("click", getPosts);
// postBtn.addEventListener("click", createPost);
// putPatchBtn.addEventListener("click", updatePost);
// deleteBtn.addEventListener("click", deletePost);
// simRequestBtn.addEventListener("click", getManyPosts);
// cusHeaderBtn.addEventListener("click", customeHeader);
// errorBtn.addEventListener("click", () => {});

getBtn.addEventListener("click", fbGetposts);
postBtn.addEventListener("click", fbCreatePost);
putPatchBtn.addEventListener("click", () => {});
deleteBtn.addEventListener("click", () => {});
simRequestBtn.addEventListener("click", () => {});
cusHeaderBtn.addEventListener("click", () => {});
errorBtn.addEventListener("click", () => {});

//Functions

function addingPosts(title, body) {
  //create total 3 elements post,post-header, post-body
  //no snake, kabob for variable name
  const postDiv = document.createElement("div");
  const postHeaderDiv = document.createElement("div");
  const postBodyDiv = document.createElement("div");

  //add axios response data to post-header & post-body
  postHeaderDiv.innerText = title;
  postBodyDiv.innerText = body;
  //add classname to the total 3 elements
  postHeaderDiv.classList.add("post-header");
  postBodyDiv.classList.add("post-body");
  postDiv.classList.add("post");
  //add header & body to the post div
  postDiv.appendChild(postHeaderDiv);
  postDiv.appendChild(postBodyDiv);
  //add postdiv to the container
  postContainer.appendChild(postDiv);
}
async function getPosts() {
  //   //way1
  //   axios
  //     //1 axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     //2 promise
  //     .then((res) => {
  //       console.log(res);
  //       console.log(1);
  //     })
  //     //3 promise
  //     .then(() => {
  //       console.log(2);
  //     })
  //     .catch((err) => {
  //       console.log("error");
  //     })
  //     .finally(() => {
  //       console.log("I am finally done with request");
  //     });
  //   //this console is executed at line 24
  //   //, which is , before promise is executed
  //   console.log(0);

  /*
   *
   */

  //way2 : axios as an object
  //starting with ? part is called query
  axios({
    method: "get",
    url: "/posts?_limit=5",
  })
    .then((res) => {
      console.log(res);
      res.data.forEach((item) => {
        addingPosts(item.title, item.body);
      });
    })
    .catch((err) => {
      console.log("error");
    })
    .finally(() => {
      console.log("I am finally done with request");
    });

  // way3
  //using es6  . add async to the function
  try {
    const posts = await axios.get("/posts");
    posts.data.forEach((item) => {
      addingPosts(item.title, item.body);
    });
  } catch (err) {
    console.log("error");
  } finally {
    console.log("I am finally done with request");
  }
}

function createPost() {
  //way1
  // axios({
  //   method: "post",
  //   url: "https://jsonplaceholder.typicode.com/posts",
  //   data: {
  //     title: "foo",
  //     body: "bar",
  //     userId: 1,
  //   },
  // })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => console.log(err));

  //way2
  axios
    .post("/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    })
    .then((res) => {
      console.log(res);
      if (res.status == 201) {
        addingPosts(res.data.title, res.data.body);
      }
    })
    .catch((err) => {
      console.log(err);
      alert("there was error");
    });
}

//modify only one item
function updatePost() {
  axios
    .patch("/posts/1", {
      title: "new updated title",
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
}

//delete a specific post
function deletePost() {
  axios
    .delete("/posts/1")
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
}

//sim request: send requests at the same time
function getManyPosts() {
  //we have two response
  axios
    .all([axios.get("/posts/1"), axios.get("/posts/2")])
    .then((res) => {
      console.log(res);
      let post1 = res[0].data;
      let post2 = res[1].data;
      addingPosts(post1.title, post1.body);
      addingPosts(post2.title, post2.body);
    })
    .catch((err) => console.log(err));
}

function customeHeader() {
  //way1
  //timeout:1000 when user makes a requests...
  //if the server doesn't answer within 10 seconds,
  //axios cancells the request.
  //if user clicks multiple times thinking they havent' got
  // the data, multiple requests will go to the server
  //in case the request fails, timeout is in effect
  //default 0 => no timeout.
  let config = {
    //only use "headers". header(x)
    headers: {
      language: "en",
    },
  };
  //axios ("url",)
  axios
    .post("/posts/2", {
      title: "foo",
      body: "bar",
      userId: 1,
      config,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
}

//this happens before the request
// axios.interceptors.request.use((config) => {
//   console.log(config);
//   console.log("interceptors");
//   console.log("I am before request");

//   if (config.headers.common.auth == "ibrahim") {
//     return config;
//   }
//   return config;
// });

//token is an example of interceptors
//token tells if the user is authorized
//we send key to the server. if the key is valid,
//send request

//this happens before the response
// axios.inteceptors.response.use((res) => {
//   console.log("I am before response");
//   return res;
// });

const fb_axios = axios.create({
  baseURL: "https://jinjoosunday-default-rtdb.firebaseio.com",
});

//axios.get("/posts"); //default one. https://jsonplaceholder.typicode.com/posts
//fb_axios.get("/posts"); //www.blah.com/posts

function fbCreatePost() {
  //object (json.stringfy) ->string
  fb_axios
    .post(
      "/posts.json",
      JSON.stringify({
        title: "test1",
        body: "Hello I am sunday",
      })
    )
    .then((res) => {
      console.log(res);
    });
}

function fbGetposts() {
  fb_axios.get("/posts.json").then((res) => {
    // fb_axios.get("/posts/.json").then((res) => {
    console.log(res);
    let posts = res.data;
    //forEach only works eith datatype array.
    //but in this case, it is object, so forEach doesnt work
    //posts.forEach((post)=>
    //)
    //loop through object
    for (const key in posts) {
      console.log(key);
      console.log(posts[key]);
      addingPosts(posts[key].title, posts[key].body);
    }
  });

  //console.log(user.user1)
  //console.log(user.["user1"])
}
