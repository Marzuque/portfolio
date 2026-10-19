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

const constellations = [
  {
    title: "Shelf Smart",
    subtitle: "AI-powered smart recipe modifier",
    kind: "Hackathon / applied AI",
    timeframe: "HACKATHON",
    pattern: "recipe-orbit",
    description: "An interactive recipe tool that adapts ingredients to dietary constraints and uses language models to suggest substitutions with nutritional comparisons.",
    skills: [
      { name: "LLM integration", detail: "Applied language-model components to generate context-aware ingredient substitutions." },
      { name: "Dietary constraints", detail: "Adapted recipes for requirements such as vegan and gluten-free diets." },
      { name: "Ingredient substitution", detail: "Mapped recipe ingredients to suitable alternatives." },
      { name: "Nutrition comparison", detail: "Presented nutritional comparisons to support personalized decisions." },
      { name: "Streamlit", detail: "Built an interactive interface for the end-to-end prototype." },
      { name: "MongoDB Atlas", detail: "Stored recipes in a cloud-hosted document database." },
      { name: "Product prototyping", detail: "Delivered a usable prototype connecting the core experience." },
      { name: "Personalization", detail: "Tailored recipe suggestions to individual dietary needs." },
      { name: "Usability-first design", detail: "Kept dietary preferences and an easy-to-use experience central to the prototype." }
    ],
    layout: [[18, 40], [27, 23], [43, 15], [57, 27], [79, 22], [86, 44], [69, 48], [53, 72], [35, 84]],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3], [3, 7], [7, 8], [8, 6], [1, 6]]
  },
  {
    title: "LLVM-Compatible Compiler",
    subtitle: "Graduate compilers",
    kind: "Programming languages / course project",
    timeframe: "AUG 2025 — DEC 2025",
    pattern: "compiler-pipeline",
    description: "A full compiler pipeline, from source text through parsing and semantic checks to LLVM intermediate representation.",
    skills: [
      { name: "Lexical analysis", detail: "Converted source text into a structured stream of tokens." },
      { name: "Recursive-descent parsing", detail: "Implemented the parser for the source language." },
      { name: "Abstract syntax trees", detail: "Represented parsed program structure for later compiler stages." },
      { name: "Semantic analysis", detail: "Checked program meaning and language rules." },
      { name: "Symbol tables", detail: "Designed structures for tracking names and semantic information." },
      { name: "Intermediate representations", detail: "Designed representations between front-end and code generation." },
      { name: "LLVM IR generation", detail: "Emitted LLVM-compatible intermediate code." },
      { name: "Compiler correctness", detail: "Applied compiler correctness concepts across a full pipeline." },
      { name: "Program analysis", detail: "Built understanding of how compilers inspect program structure." },
      { name: "System decomposition", detail: "Structured the implementation as connected stages in a complete compiler pipeline." }
    ],
    layout: [[15, 25], [31, 33], [47, 41], [64, 49], [81, 58], [37, 18], [48, 12], [61, 20], [53, 80], [70, 80]],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [2, 5], [5, 6], [6, 7], [7, 4], [3, 8], [8, 9]]
  },
  {
    title: "Sous-Chef",
    subtitle: "Intelligent kitchen assistant",
    kind: "Hackathon / full-stack product",
    timeframe: "HACKATHON",
    pattern: "kitchen-crossroads",
    description: "A meal-planning assistant for recipe discovery, nutrition tracking, and dietary accommodations, designed from Figma mockups and deployed for the web.",
    skills: [
      { name: "React.js", detail: "Built the interactive frontend for the meal-planning experience." },
      { name: "Bootstrap", detail: "Created a responsive interface across screen sizes." },
      { name: "Flask", detail: "Implemented the Python web-service layer." },
      { name: "Spoonacular API", detail: "Integrated external recipe and nutrition data." },
      { name: "Nutrition tracking", detail: "Presented nutritional information to support meal choices." },
      { name: "Dietary filtering", detail: "Tailored recommendations to preferences and calorie needs." },
      { name: "Figma to frontend", detail: "Translated design mockups into a functioning interface." },
      { name: "AWS Lightsail", detail: "Deployed the application to a cloud-hosted server." },
      { name: "Nginx", detail: "Configured web serving for the deployed application." },
      { name: "Full-stack delivery", detail: "Connected interface, backend, live data, and deployment." },
      { name: "Product design", detail: "Focused the experience on practical meal-planning workflows." },
      { name: "Frontend leadership", detail: "Led frontend design and translated Figma mockups into a responsive experience." }
    ],
    layout: [[13, 35], [21, 21], [36, 25], [41, 42], [30, 56], [16, 53], [59, 48], [57, 30], [72, 22], [87, 31], [84, 52], [72, 69]],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], [4, 6], [6, 7], [7, 8], [8, 9], [9, 10], [10, 6], [2, 7], [10, 11], [11, 6]],
    link: { href: "https://sous-chef.tech/", label: "Visit Sous-Chef" }
  },
  {
    title: "Malloc in xv6",
    subtitle: "Memory allocation algorithms",
    kind: "Operating systems / course project",
    timeframe: "MAR 2024 — MAY 2024",
    pattern: "allocator-arc",
    description: "Four allocator designs implemented and compared in xv6, with controlled tests and measurements to examine correctness, performance, and fragmentation tradeoffs.",
    skills: [
      { name: "xv6 internals", detail: "Worked within a teaching operating system and its memory model." },
      { name: "Dynamic allocation", detail: "Implemented four approaches to malloc and free." },
      { name: "Allocator design", detail: "Compared alternative strategies for finding and managing blocks." },
      { name: "Fragmentation", detail: "Evaluated how allocation patterns affect memory fragmentation." },
      { name: "Coalescing", detail: "Measured allocator behavior when combining free blocks." },
      { name: "Automated testing", detail: "Ran controlled allocation/free cycles to validate behavior." },
      { name: "Logging & instrumentation", detail: "Recorded allocator activity for repeatable analysis." },
      { name: "Seven performance metrics", detail: "Compared designs across seven measures, including time overhead." },
      { name: "Tradeoff analysis", detail: "Documented the performance and behavior tradeoffs of each design." },
      { name: "Technical communication", detail: "Presented the implementation and measured findings in a report." }
    ],
    layout: [[14, 42], [25, 34], [38, 26], [51, 32], [63, 42], [75, 51], [85, 63], [82, 40], [73, 25], [51, 75]],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [5, 7], [7, 8], [8, 4], [4, 9]],
    link: { href: "https://github.com/CSE3320-Spring-2024/malloc-Marzuque", label: "View source on GitHub" }
  },
  {
    title: "Autograd-Free Neural Network",
    subtitle: "Neural network trainer",
    kind: "Machine learning / independent project",
    timeframe: "JAN 2026 — JUL 2026",
    pattern: "learning-spiral",
    description: "An end-to-end neural-network trainer built to investigate learning dynamics and optimization failure modes with and without machine-learning libraries.",
    skills: [
      { name: "Forward propagation", detail: "Implemented the flow of inputs through network layers." },
      { name: "Backpropagation", detail: "Computed gradients to train network parameters." },
      { name: "Gradient descent", detail: "Implemented optimization updates and investigated their behavior." },
      { name: "Activation functions", detail: "Worked with nonlinear transformations within the network." },
      { name: "Loss functions", detail: "Measured prediction error to guide model training." },
      { name: "ML fundamentals", detail: "Applied mathematical foundations including gradients and stability." },
      { name: "Controlled experiments", detail: "Validated learning behavior through focused experiments." },
      { name: "Optimization diagnosis", detail: "Investigated training dynamics and optimization failure modes." },
      { name: "Framework fluency", detail: "Compared implementation with and without machine-learning libraries." },
      { name: "Generalization", detail: "Explored how training relates to performance beyond training examples." }
    ],
    layout: [[18, 64], [25, 46], [39, 34], [56, 29], [72, 34], [83, 48], [77, 66], [61, 75], [42, 72], [27, 82]],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7], [7, 8], [8, 9], [9, 0], [2, 8], [4, 7]]
  }
];

const bootScreen = document.getElementById("bootScreen");
const portfolio = document.getElementById("portfolio");
const projectList = document.getElementById("projectList");
const constellationMap = document.getElementById("constellationMap");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let bootTimer;
const videoRatios = new WeakMap();
let activeVideo = null;
let activeGameIndex = 0;
let activeConstellationIndex = null;

function buildVideo(project) {
  return `<div class="video-frame"><video class="project-video" data-src="${project.videoUrl}" muted playsinline loop controls preload="none" aria-label="Preview video for ${project.title}"></video><button class="video-play-prompt" type="button">Play muted preview</button><p class="video-error" hidden role="status">This file could not be decoded. Export it as an H.264 MP4 for browser playback.</p></div>`;
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

function constellationPoints(index, scale = 1) {
  const project = constellations[index];
  return constellations[index].skills.map((skill, skillIndex) => {
    const [x, y] = project.layout[skillIndex];
    return {
      x: 50 + (x - 50) * scale,
      y: 50 + (y - 50) * scale,
      skill
    };
  });
}

function starPath(x, y, size) {
  return Array.from({ length: 10 }, (_, pointIndex) => {
    const angle = (Math.PI * pointIndex) / 5 - Math.PI / 2;
    const radius = pointIndex % 2 === 0 ? size : size * 0.42;
    const command = pointIndex === 0 ? "M" : "L";
    return `${command}${(x + Math.cos(angle) * radius).toFixed(2)},${(y + Math.sin(angle) * radius).toFixed(2)}`;
  }).join(" ") + " Z";
}

function renderConstellationOverview() {
  constellationMap.innerHTML = `
    <div class="star-map-toolbar"><span>${String(constellations.length).padStart(2, "0")} / PROJECT CONSTELLATIONS</span><span>SELECT A STAR TO EXPLORE</span></div>
    <div class="constellation-overview">
      ${constellations.map((project, index) => {
        const points = constellationPoints(index, 0.78);
        const spokes = points.map(({ x, y }) => `<line x1="50" y1="50" x2="${x}" y2="${y}" />`).join("");
        const connections = project.connections.map(([from, to]) => `<line x1="${points[from].x}" y1="${points[from].y}" x2="${points[to].x}" y2="${points[to].y}" />`).join("");
        const stars = points.map(({ x, y }, skillIndex) => {
          const starSize = [2.7, 1.7, 2.2, 1.5][skillIndex % 4];
          return `<path class="map-skill-star map-skill-star--${skillIndex + 1}" d="${starPath(x, y, starSize)}" />`;
        }).join("");
        return `<button class="constellation-card" type="button" data-constellation-index="${index}" aria-label="Explore ${project.title}: ${project.subtitle}">
          <svg class="constellation-sketch constellation-sketch--${project.pattern}" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <g class="constellation-lines">${spokes}${connections}</g>
            ${stars}
            <circle class="map-project-star-halo" cx="50" cy="50" r="8" />
            <circle class="map-project-star" cx="50" cy="50" r="3.6" />
          </svg>
          <span class="constellation-card-copy"><span class="constellation-card-kind">${project.kind}</span><span class="constellation-card-title">${project.title}</span><span class="constellation-card-subtitle">${project.subtitle}</span><span class="constellation-card-action">EXPLORE CONSTELLATION <span aria-hidden="true">↗</span></span></span>
        </button>`;
      }).join("")}
    </div>`;
}

function renderConstellationDetail(index) {
  const project = constellations[index];
  const points = constellationPoints(index);
  const spokes = points.map(({ x, y }) => `<line x1="50" y1="50" x2="${x}" y2="${y}" />`).join("");
  const connections = project.connections.map(([from, to]) => `<line x1="${points[from].x}" y1="${points[from].y}" x2="${points[to].x}" y2="${points[to].y}" />`).join("");
  const stars = points.map(({ x, y, skill }, skillIndex) => `<span class="constellation-skill-star" style="--star-x:${x}%;--star-y:${y}%" title="${skill.name}"><i aria-hidden="true"></i><span>${String(skillIndex + 1).padStart(2, "0")}</span></span>`).join("");
  const link = project.link
    ? `<a class="constellation-project-link" href="${project.link.href}" target="_blank" rel="noreferrer">${project.link.label}<span aria-hidden="true"> ↗</span></a>`
    : "";

  constellationMap.innerHTML = `
    <div class="star-map-toolbar"><button class="constellation-back" type="button" data-constellation-back><span aria-hidden="true">←</span> ALL CONSTELLATIONS</button><span>${String(index + 1).padStart(2, "0")} / ${String(constellations.length).padStart(2, "0")}</span></div>
    <article class="constellation-detail">
      <div class="constellation-detail-copy">
        <p class="constellation-detail-kind">${project.kind} <span>/</span> ${project.timeframe}</p>
        <h3>${project.title}</h3>
        <p class="constellation-detail-subtitle">${project.subtitle}</p>
        <p class="constellation-detail-description">${project.description}</p>
        ${link}
      </div>
      <div class="constellation-detail-art constellation-detail-art--${project.pattern}" role="img" aria-label="${project.title} as a bright central star connected to ${project.skills.map((skill) => skill.name).join(", ")}">
        <svg class="detail-constellation-lines" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><g>${spokes}${connections}</g></svg>
        <span class="detail-orbit detail-orbit--outer" aria-hidden="true"></span><span class="detail-orbit detail-orbit--inner" aria-hidden="true"></span>
        ${stars}
        <span class="detail-project-star" aria-hidden="true"><i></i></span>
        <span class="detail-project-name">${project.title}</span>
      </div>
      <ul class="constellation-skill-notes" aria-label="Skills and contributions">
        ${project.skills.map((skill, skillIndex) => `<li><span class="skill-note-index">${String(skillIndex + 1).padStart(2, "0")}</span><span><strong>${skill.name}</strong><span>${skill.detail}</span></span></li>`).join("")}
      </ul>
    </article>`;
}

function renderConstellations(focusIndex = null) {
  activeConstellationIndex = focusIndex;
  if (focusIndex === null) renderConstellationOverview();
  else renderConstellationDetail(focusIndex);
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
constellationMap.addEventListener("click", (event) => {
  if (event.target.closest("[data-constellation-back]")) {
    const previousIndex = activeConstellationIndex;
    renderConstellations();
    constellationMap.querySelector(`[data-constellation-index="${previousIndex}"]`)?.focus({ preventScroll: true });
    return;
  }

  const card = event.target.closest("[data-constellation-index]");
  if (!card) return;
  const index = Number(card.dataset.constellationIndex);
  if (!Number.isInteger(index) || !constellations[index]) return;
  renderConstellations(index);
  constellationMap.querySelector("[data-constellation-back]")?.focus({ preventScroll: true });
});

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
renderConstellations();
renderGames();
bootTimer = window.setTimeout(enterPortfolio, reducedMotion ? 0 : 1950);
