addEventListener("fetch", (event) => {
  const response = new Response("<h2>It works!</h2>", {
    status: 200,
    headers: {
      server: "deploy",
      "content-type": "text/html",
    },
  });
  event.respondWith(response);
});
