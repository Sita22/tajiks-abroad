const baseUrl = "http://localhost:3000/";
const userId = "688347b0fc79648aed659172";

export const getUser = async () => {
  const response = await fetch(`${baseUrl}user/${userId}`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("Did not work to fetch data");
  }
}


export const getAllUsers = async () => {
  const response = await fetch(`${baseUrl}user`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("Did not work to fetch data");
  }
}

export const getAllTopics = async () => {
  const response = await fetch(`${baseUrl}topics`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("Did not work to fetch data");
  }
}


export const getCommunities = async () => {
  const response = await fetch(`${baseUrl}community`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("Did not work to fetch data");
  }
}


export const getAllPosts = async () => {
  const response = await fetch(`${baseUrl}posts`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("Did not work to fetch data");
  }
}


export const addPost = async (title, content, topic, author) => {
  const response = await fetch(`${baseUrl}${topic}/posts`, {
    method: "POST",
    body: JSON.stringify({title, content, author}),
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("Did not work to post data");
  }
}

export const addComment = async (content, postId, author) => {
  const response = await fetch(`${baseUrl}comments`, {
    method: "POST",
    body: JSON.stringify({content, author, postId}),
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("Did not work to post data");
  }
}

export const updateUser = async (userId, city, country) => {
  const response = await fetch(`${baseUrl}user/update`, {
    method: "POST",
    body: JSON.stringify({userId, city, country}),
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.log("Did not work to post data");
  }
}

// export const findCommunityByUserId = async () => {
//   const response = await fetch(`${baseUrl}community/${userId}`);
//   if (response.ok) {
//     const data = await response.json();
//     return data;
//   } else {
//     console.log("Did not work to fetch data");
//   }
// }

// export const getComments = async () => {
//   const response = await fetch(baseUrl);
//   if (response.ok) {
//     const data = await response.json();
//     return data;
//   } else {
//     console.log("Did not work to fetch data");
//   }
// }

// export const postEvent = async (title, date, venue) => {
//   const response = await fetch(baseUrl, {
//     method: "POST",
//     body: JSON.stringify({title, date, venue}),
//     headers: {
//       "Content-Type": "application/json"
//     }
//   })

//   if (response.ok) {
//     const data = await response.json();
//     return data;
//   } else {
//     console.log("Did not work to post data");
//   }
// }

