# Marzuque Fariz Portfolio

This is a static, PS2-inspired professional portfolio with a short boot reveal, project videos, an NYC crash-map visualization, an interactive project constellation map, and a selectable GIF showcase for three small games. Personal content is not part of v1.

## Files
- `index.html` — boot screen and professional page structure
- `styles.css` — graphite, silver, and blue visual system with responsive layouts
- `script.js` — profile transitions, editable project and constellation content, and click-to-load YouTube embeds

## Run locally
Open `index.html` directly in a browser, or serve the folder with:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy to GitHub Pages
1. Push this project to a GitHub repository.
2. In the repository settings, enable GitHub Pages.
3. Choose the branch and folder to publish (for a simple profile page, use the root branch or `/docs` if preferred).
4. Your profile site will be available at:
   `https://<username>.github.io/`

## Customization
The selected work section is driven by the `projects` array in `script.js`:

1. Update each project's `category`, `title`, `description`, and `tools` fields.
2. Add a project screenshot URL to `imageUrl`, a local H.264 MP4 path to `videoUrl`, or a YouTube video ID to `youtubeId`. The Data Mining project uses the NYC crash-map screenshot; the Senior Design and research projects have local video slots.
3. Local videos load as they approach the viewport, autoplay muted only while at least 60% visible, and pause when scrolled away or when the tab is hidden. Native controls allow manual playback and sound. Keep clips compressed for web delivery; the current secure-code clip is about 47 MB.
4. The Games shelf in `script.js` lists the three GIF paths and titles. Only the selected GIF is loaded at a time.
5. The `constellations` array in `script.js` supplies the five project summaries, timeframes, skills, individual star layouts, connections, and optional links for the interactive star map.
6. Update the experience and contact sections in `index.html` as needed.

The intro is silent and skippable. The page enters the professional portfolio directly after the intro.

## Upload readiness
The local MP4 files currently trigger a browser format error. Re-encode both as H.264 MP4 with AAC audio and fast-start metadata before publishing if you want the project videos to play. The rest of the portfolio is a static site and can be deployed to GitHub Pages using the steps above.
