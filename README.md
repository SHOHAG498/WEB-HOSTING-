# Web AR Starter

A simple marker-based WebAR demo using HTML, CSS, JavaScript, A-Frame and AR.js.

## Run it

1. Upload this folder to a GitHub repository.
2. In GitHub, open **Settings → Pages**, choose your branch and `/ (root)`, then save.
3. Open the published HTTPS URL on a phone and allow camera access.
4. Show a **Hiro marker** to the camera. The demo image appears above it.

Camera access normally requires HTTPS (GitHub Pages provides HTTPS) or localhost.
Test on a phone with a modern browser. WebAR support varies by browser/device.

## Add your own assets

- Replace `assets/images/demo.svg` with your image, then update the `src` in `index.html` if the filename changes.
- Add an MP4 video named `demo.mp4` to `assets/videos/`.
- Keep video encoded as H.264 MP4 for broad mobile compatibility. The video is muted because mobile browsers restrict autoplay.

## Hiro marker

Print or display the standard **AR.js Hiro marker**. Search the web for “AR.js Hiro marker” and use the standard black-and-white marker image. Keep it flat, well lit, and fully visible to the camera.

## Important

This is marker-based AR, not surface-placement AR. It tracks the Hiro marker and anchors the image/video to it. It does not upload camera footage to this project’s own server; the AR libraries run in the browser. Third-party CDN scripts are loaded from their respective hosts.
