setInterval(() => {
  fetch("https://speachcourse.herokuapp.com/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}, 900000);
