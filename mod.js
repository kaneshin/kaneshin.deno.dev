addEventListener("fetch", (event) => {
  event.respondWith(
    new Response("<h2>It works!</h2>", {
      status: 200,
      headers: {
        server: "deploy",
        "content-type": "text/plain",
      },
    })
  );
});
