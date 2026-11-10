(() => {
  const imageButton = document.getElementById("image-btn");
  const videoButton = document.getElementById("video-btn");
  const imagePlane = document.getElementById("ar-image");
  const videoPlane = document.getElementById("ar-video");
  const video = document.getElementById("demo-video");
  const marker = document.getElementById("hiro-marker");
  const hint = document.getElementById("hint");
  const status = document.getElementById("status");

  let selectedMode = "image";

  function selectMode(mode) {
    selectedMode = mode;
    const showVideo = mode === "video";
    imagePlane.setAttribute("visible", String(!showVideo));
    videoPlane.setAttribute("visible", String(showVideo));
    imageButton.classList.toggle("active", !showVideo);
    videoButton.classList.toggle("active", showVideo);

    if (showVideo) {
      // Playback begins after a user tap, satisfying mobile browser policies.
      video.play().catch(() => {
        hint.querySelector("span").textContent =
          "Tap Show video again if playback does not begin, and check that demo.mp4 exists.";
      });
    } else {
      video.pause();
    }
  }

  imageButton.addEventListener("click", () => selectMode("image"));
  videoButton.addEventListener("click", () => selectMode("video"));

  marker.addEventListener("markerFound", () => {
    status.textContent = "Marker detected";
    hint.querySelector("span").textContent =
      selectedMode === "video" ? "Hiro marker found — video is displayed." : "Hiro marker found — image is displayed.";
  });

  marker.addEventListener("markerLost", () => {
    status.textContent = "Looking for marker…";
    hint.querySelector("span").textContent = "Move the camera back toward the Hiro marker.";
  });

  video.addEventListener("error", () => {
    if (selectedMode === "video") {
      hint.querySelector("span").textContent =
        "Video file not found. Add an MP4 named demo.mp4 in assets/videos/.";
    }
  });

  selectMode("image");
})();
