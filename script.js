// Replace the descriptions, tools, and media IDs with project-specific details as they are ready.
const projects = [
  {
    category: "Research / LLM security",
    title: "Secure Code Generation with LLMs",
    description: "Researching whether prompt structure and specification design can help predict security risks in AI-generated code, reducing token costs of full code generation methods by up to 41%.",
    tools: ["Python", "Bandit/CodeQL", "Langchain", "Code Security", "Prompt analysis"],
    imageUrl: "",
    videoUrl: "assets/Secure Code Generation.mp4",
    youtubeId: ""
  },
  {
    category: "Data mining / Course project",
    title: "Data Mining Project",
    description: "A map-based view of New York City traffic data, analyzing andplotting fatal-crash locations alongside landmarks using publically available data to analyze traffic safety patterns and identify high-risk areas.",
    tools: ["Data mining", "Machine Learning", "R","Visualization"],
    imageUrl: "assets/Screenshot 2026-09-25 205331.png",
    youtubeId: ""
  },
  {
    category: "Senior design / Applied AI",
    title: "Senior Design Final Project",
    description: "Going from natural language requirements to a deterministic software specification, documentation and implementation using Dr. Kung's fourteen step software construction methodology .",
    tools: ["Java", "AI / machine learning", "Visual interface", "UML", "Team project"],
    imageUrl: "",
    videoUrl: "assets/Senior Design.mp4",
    youtubeId: ""
  }
];

const games = [
  { title: "Aim Trainer", gif: "assets/AT Small.gif" },
  { title: "Parry Form", gif: "assets/PF Small.gif" },
  { title: "Roller Madness", gif: "assets/Cut Roller Madness Smaller (online-video-cutter.com).gif" }
];

const bootScreen = document.getElementById("bootScreen");
const portfolio = document.getElementById("portfolio");
const projectList = document.getElementById("projectList");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let bootTimer;
const videoRatios = new WeakMap();
let activeVideo = null;
let activeGameIndex = 0;

function buildVideo(project) {
  return `<div class="video-frame"><video class="project-video" data-src="${project.videoUrl}" muted playsinline loop controls preload="none" aria-label="Preview video for ${project.title}"></video><button class="video-play-prompt" type="button">Play muted preview</button><p class="video-error" hidden role="status">This file could not be decoded. Export it as an H.264 MP4 for browser playback.</p><span class="video-caption">MUTED PREVIEW / AUTO-PAUSES OFF SCREEN</span></div>`;
}

const videoSourceObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    const video = entry.target;
    if (!video.src) {
      video.src = video.dataset.src;
      video.load();
    }
    videoSourceObserver.unobserve(video);
  });
}, { rootMargin: "240px 0px", threshold: 0 });

const videoPlaybackObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target;
    videoRatios.set(video, entry.intersectionRatio);
    if (entry.intersectionRatio >= 0.6) {
      loadProjectVideo(video);
      playProjectVideo(video);
    } else {
      video.pause();
      if (activeVideo === video) activeVideo = null;
    }
  });
}, { threshold: [0, 0.6, 1] });

function observeProjectVideo(video) {
  if (!video.dataset.handlersAttached) {
    video.dataset.handlersAttached = "true";
    video.addEventListener("error", () => {
      const frame = video.closest(".video-frame");
      frame.classList.add("has-error");
      frame.querySelector(".video-error").hidden = false;
    });
  }
  if (!video.src) videoSourceObserver.observe(video);
  videoPlaybackObserver.observe(video);
}

function loadProjectVideo(video) {
  if (video.src || !video.dataset.src) return;
  video.src = video.dataset.src;
  video.load();
  videoSourceObserver.unobserve(video);
}

function playProjectVideo(video) {
  if (document.visibilityState !== "visible" || (videoRatios.get(video) ?? 0) < 0.6) return;
  projectList.querySelectorAll(".project-video").forEach((otherVideo) => {
    if (otherVideo !== video) otherVideo.pause();
  });
  video.muted = true;
  activeVideo = video;
  video.play().then(() => {
    video.closest(".video-frame").classList.add("is-playing");
  }).catch(() => {
    video.closest(".video-frame").classList.remove("is-playing");
  });
}

function viewportRatio(element) {
  const rect = element.getBoundingClientRect();
  const visibleWidth = Math.max(0, Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0));
  const visibleHeight = Math.max(0, Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0));
  return rect.width && rect.height ? (visibleWidth * visibleHeight) / (rect.width * rect.height) : 0;
}

function enterPortfolio() {
  window.clearTimeout(bootTimer);
  if (reducedMotion) {
    bootScreen.hidden = true;
    portfolio.hidden = false;
    document.querySelector(".wordmark").focus({ preventScroll: true });
    return;
  }

  bootScreen.classList.add("is-leaving");
  window.setTimeout(() => {
    bootScreen.hidden = true;
    portfolio.hidden = false;
    document.querySelector(".wordmark").focus({ preventScroll: true });
  }, 430);
}

function renderProjects() {
  projectList.innerHTML = projects.map((project, index) => {
    const number = String(index + 1).padStart(2, "0");
    const tools = project.tools.map((tool) => `<span>${tool}</span>`).join("");
    const media = project.imageUrl && project.videoUrl
      ? `<div class="project-media project-gallery"><div class="media-tabs" role="tablist" aria-label="${project.title} media"><button class="media-tab is-active" type="button" role="tab" aria-selected="true" data-media-tab="map">Map</button><button class="media-tab" type="button" role="tab" aria-selected="false" data-media-tab="video">Video</button></div><div class="gallery-canvas"><img class="project-image" src="${project.imageUrl}" alt="${project.title} crash map"><div class="gallery-video" hidden>${buildVideo(project)}</div></div></div>`
      : project.videoUrl
      ? `<div class="project-media media-slot">${buildVideo(project)}</div>`
      : project.imageUrl
      ? `<div class="project-media media-slot"><img class="project-image" src="${project.imageUrl}" alt="${project.title} project preview"></div>`
      : project.youtubeId
      ? `<button type="button" class="load-video" data-youtube-id="${project.youtubeId}" aria-label="Load video for ${project.title}"><span class="media-play" aria-hidden="true">▶</span><span>Play project film</span></button><span class="media-note">YOUTUBE / CLICK TO LOAD</span>`
      : `<button type="button" class="load-video" data-youtube-id="" aria-label="Video placeholder for ${project.title}"><span class="media-play" aria-hidden="true">+</span><span>Add project video</span></button><span class="media-note">VIDEO SLOT / ${number}</span>`;
    return `<article class="project-row"><span class="project-number">${number}</span><div class="project-title"><h3>${project.title}</h3><span class="project-type">${project.category}</span></div><div class="project-description-wrap"><p class="project-description">${project.description}</p><div class="project-tools">${tools}</div></div>${media.startsWith("<div") ? media : `<div class="media-slot">${media}</div>`}</article>`;
  }).join("");

  projectList.querySelectorAll(".project-video").forEach(observeProjectVideo);
}

function renderGames(focusIndex = null) {
  const previousIndex = (activeGameIndex + games.length - 1) % games.length;
  const nextIndex = (activeGameIndex + 1) % games.length;
  const visibleGames = [
    { index: previousIndex, position: "previous" },
    { index: activeGameIndex, position: "featured" },
    { index: nextIndex, position: "next" }
  ];

  gameDeck.innerHTML = visibleGames.map(({ index, position }) => {
    const game = games[index];
    const isFeatured = position === "featured";
    const number = String(index + 1).padStart(2, "0");
    const preview = isFeatured
      ? `<img src="${game.gif}" alt="${game.title} gameplay preview" loading="lazy">`
      : `<span class="game-card-placeholder" aria-hidden="true">${number}</span>`;
    return `<button class="game-card game-card--${position}" type="button" data-game-index="${index}" aria-pressed="${isFeatured}" aria-label="${isFeatured ? `Selected game: ${game.title}` : `Show ${game.title}`} "><span class="game-card-image">${preview}</span><span class="game-card-info"><span class="game-card-index">${number} / GAME</span><span class="game-card-title">${game.title}</span>${isFeatured ? '<span class="game-card-state">NOW SHOWING</span>' : '<span class="game-card-state">SELECT TO VIEW</span>'}</span></button>`;
  }).join("");

  if (focusIndex !== null) {
    gameDeck.querySelector(`[data-game-index="${focusIndex}"]`)?.focus({ preventScroll: true });
  }
}

document.getElementById("skipIntro").addEventListener("click", enterPortfolio);
projectList.addEventListener("click", (event) => {
  const mediaTab = event.target.closest("[data-media-tab]");
  if (mediaTab) {
    const gallery = mediaTab.closest(".project-gallery");
    const showingVideo = mediaTab.dataset.mediaTab === "video";
    gallery.querySelectorAll("[data-media-tab]").forEach((tab) => {
      const isSelected = tab === mediaTab;
      tab.classList.toggle("is-active", isSelected);
      tab.setAttribute("aria-selected", String(isSelected));
    });
    gallery.querySelector(".project-image").hidden = showingVideo;
    const videoPanel = gallery.querySelector(".gallery-video");
    videoPanel.hidden = !showingVideo;
    const video = videoPanel.querySelector("video");
    if (showingVideo) observeProjectVideo(video);
    else {
      video.pause();
      videoPlaybackObserver.unobserve(video);
      if (!video.src) videoSourceObserver.unobserve(video);
      videoRatios.set(video, 0);
    }
    return;
  }

  const playPrompt = event.target.closest(".video-play-prompt");
  if (playPrompt) {
    const video = playPrompt.closest(".video-frame").querySelector("video");
    const ratio = viewportRatio(video);
    videoRatios.set(video, ratio);
    loadProjectVideo(video);
    playProjectVideo(video);
    return;
  }

  const button = event.target.closest(".load-video");
  const videoId = button?.dataset.youtubeId;
  if (!videoId) return;

  const media = button.closest(".media-slot");
  const frame = document.createElement("iframe");
  frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1`;
  frame.title = `${button.getAttribute("aria-label")} video`;
  frame.loading = "lazy";
  frame.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  frame.allowFullscreen = true;
  media.replaceChildren(frame);
  media.classList.add("is-loaded");
});

const gameDeck = document.getElementById("gameDeck");
gameDeck.addEventListener("click", (event) => {
  const card = event.target.closest("[data-game-index]");
  if (!card) return;
  const selectedIndex = Number(card.dataset.gameIndex);
  if (selectedIndex === activeGameIndex) return;
  activeGameIndex = selectedIndex;
  renderGames(selectedIndex);
});

gameDeck.addEventListener("keydown", (event) => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  event.preventDefault();
  const direction = event.key === "ArrowRight" ? 1 : -1;
  activeGameIndex = (activeGameIndex + direction + games.length) % games.length;
  renderGames(activeGameIndex);
});

projectList.addEventListener("play", (event) => {
  const video = event.target.closest(".project-video");
  if (!video) return;
  const ratio = viewportRatio(video);
  videoRatios.set(video, ratio);
  if (ratio < 0.6 || document.visibilityState !== "visible") {
    video.pause();
    return;
  }
  projectList.querySelectorAll(".project-video").forEach((otherVideo) => {
    if (otherVideo !== video) otherVideo.pause();
  });
  activeVideo = video;
}, true);

projectList.addEventListener("pause", (event) => {
  const video = event.target.closest(".project-video");
  if (!video) return;
  video.closest(".video-frame").classList.remove("is-playing");
  if (activeVideo === video) activeVideo = null;
}, true);

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    projectList.querySelectorAll(".project-video").forEach((video) => video.pause());
    return;
  }

  projectList.querySelectorAll(".project-video").forEach((video) => {
    if (viewportRatio(video) >= 0.6 && !video.closest("[hidden]")) {
      videoRatios.set(video, viewportRatio(video));
      playProjectVideo(video);
    }
  });
});

renderProjects();
renderGames();
bootTimer = window.setTimeout(enterPortfolio, reducedMotion ? 0 : 1950);
