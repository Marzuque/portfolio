// Replace the descriptions, tools, and media IDs with project-specific details as they are ready.
const projects = [
  {
    category: "Research / LLM security",
    title: "Secure Code Generation with LLMs",
    description: "Researching whether prompt structure and specification design can help predict security risks in AI-generated code, reducing token costs of full code generation methods by up to 41%.",
    tools: ["Python", "Bandit/CodeQL", "Langchain", "Code Security", "Prompt analysis"],
    imageUrl: "",
    videoUrl: "assets/Secure Code Generation web.mp4",
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
    videoUrl: "assets/Senior Design web.mp4",
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
    projectNodeIndex: 0,
    projectLabelSide: "top",
    description: "An interactive recipe tool that adapts ingredients to dietary constraints and uses language models to suggest substitutions with nutritional comparisons.",
    skills: [
      { name: "MongoDB Atlas", detail: "Stored recipes in a cloud-hosted document database.", labelSide: "top" },
      { name: "LLM integration", detail: "Generated context-aware ingredient substitution suggestions.", labelSide: "bottom" },
      { name: "Dietary constraints", detail: "Adapted recipes for requirements such as vegan and gluten-free diets.", labelSide: "top" },
      { name: "Nutrition comparison", detail: "Compared nutritional profiles for recipe substitutions.", labelSide: "bottom" }
    ],
    strengths: [
      { name: "Streamlit", detail: "Built the interactive application interface." },
      { name: "End-to-end prototyping", detail: "Delivered a working prototype connecting the recipe experience, AI suggestions, and stored data." },
      { name: "User-centered problem solving", detail: "Focused the project on adapting recipes to practical dietary needs." }
    ],
    layout: [[50, 17], [25, 43], [75, 43], [22, 75], [78, 75]],
    connections: [[0, 1], [0, 2], [1, 3], [2, 4], [3, 4]]
  },
  {
    title: "LLVM-Compatible Compiler",
    subtitle: "Graduate compilers",
    kind: "Programming languages / course project",
    timeframe: "AUG 2025 — DEC 2025",
    pattern: "compiler-pipeline",
    projectNodeIndex: 2,
    projectLabelSide: "right",
    description: "A full compiler pipeline, from source text through parsing and semantic checks to LLVM intermediate representation.",
    skills: [
      { name: "Lexical analysis", detail: "Converted source text into a stream of tokens." },
      { name: "Recursive-descent parsing & ASTs", detail: "Parsed source code and represented its structure as an abstract syntax tree.", labelSide: "top" },
      { name: "Semantic analysis & symbol tables", detail: "Checked language rules and tracked names across program scopes." },
      { name: "Intermediate representations", detail: "Designed representations between parsing and code generation." },
      { name: "LLVM IR generation", detail: "Generated LLVM-compatible intermediate code." }
    ],
    strengths: [
      { name: "Compiler correctness", detail: "Applied correctness concepts across a complete compiler pipeline." },
      { name: "System decomposition", detail: "Structured a complex compiler as connected stages with clear responsibilities." }
    ],
    layout: [[15, 42], [36, 40], [56, 42], [70, 54], [81, 68], [78, 83]],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]]
  },
  {
    title: "Sous-Chef",
    subtitle: "Intelligent kitchen assistant",
    kind: "Hackathon / full-stack product",
    timeframe: "HACKATHON",
    pattern: "kitchen-crossroads",
    projectNodeIndex: 2,
    description: "A meal-planning assistant for recipe discovery, nutrition tracking, and dietary accommodations, designed from Figma mockups and deployed for the web.",
    skills: [
      { name: "React.js", detail: "Built the interactive frontend for meal planning." },
      { name: "Flask", detail: "Implemented the Python web-service layer." },
      { name: "Spoonacular API", detail: "Integrated recipe and nutrition data.", labelSide: "bottom" },
      { name: "AWS Lightsail & Nginx", detail: "Deployed and served the application from a cloud-hosted server." },
      { name: "Bootstrap", detail: "Implemented responsive UI components." }
    ],
    strengths: [
      { name: "Frontend leadership", detail: "Led frontend design and turned Figma mockups into a responsive user experience." },
      { name: "Full-stack delivery", detail: "Connected the frontend, Flask service, third-party data, and cloud deployment." },
      { name: "Product thinking", detail: "Designed around meal planning, nutrition tracking, and dietary accommodations." }
    ],
    layout: [[18, 69], [28, 52], [45, 38], [63, 51], [79, 68], [72, 84]],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [3, 5]],
    link: { href: "https://sous-chef.tech/", label: "Visit Sous-Chef" }
  },
  {
    title: "Malloc in xv6",
    subtitle: "Memory allocation algorithms",
    kind: "Operating systems / course project",
    timeframe: "MAR 2024 — MAY 2024",
    pattern: "allocator-arc",
    projectNodeIndex: 2,
    projectLabelSide: "left",
    description: "Four allocator designs implemented and compared in xv6, with controlled tests and measurements to examine correctness, performance, and fragmentation tradeoffs.",
    skills: [
      { name: "malloc / free", detail: "Built four dynamic memory allocation implementations in xv6." },
      { name: "Allocator strategies", detail: "Compared distinct block-finding and allocation approaches." },
      { name: "Automated testing", detail: "Ran controlled allocation/free cycles to validate correctness." },
      { name: "Logging & instrumentation", detail: "Recorded allocator behavior for repeatable measurements." },
      { name: "Fragmentation & coalescing", detail: "Measured fragmentation and free-block coalescing behavior." }
    ],
    strengths: [
      { name: "xv6", detail: "Implemented allocator designs within an operating-system codebase." },
      { name: "Four allocator designs", detail: "Implemented and compared four malloc/free approaches." },
      { name: "Seven performance metrics", detail: "Evaluated time overhead, block-finding behavior, coalescing, and other allocator measures." },
      { name: "Tradeoff analysis", detail: "Documented and presented performance and fragmentation tradeoffs." }
    ],
    layout: [[14, 29], [32, 36], [50, 47], [67, 59], [82, 44], [79, 19]],
    connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [3, 5], [2, 4]],
    link: { href: "https://github.com/CSE3320-Spring-2024/malloc-Marzuque", label: "View source on GitHub" }
  },
  {
    title: "Autograd-Free Neural Network",
    subtitle: "Neural network trainer",
    kind: "Machine learning / independent project",
    timeframe: "JAN 2026 — JUL 2026",
    pattern: "learning-spiral",
    projectNodeIndex: 4,
    description: "An end-to-end neural-network trainer built to investigate learning dynamics and optimization failure modes with and without machine-learning libraries.",
    skills: [
      { name: "Forward & backpropagation", detail: "Implemented input propagation and gradient computation for training.", labelSide: "bottom" },
      { name: "Gradient descent", detail: "Implemented parameter updates for model optimization." },
      { name: "Activation functions", detail: "Implemented nonlinear transformations within the network.", labelSide: "left" },
      { name: "Loss functions", detail: "Measured prediction error to guide training." },
      { name: "ML libraries", detail: "Built and compared implementations with and without machine-learning libraries." }
    ],
    strengths: [
      { name: "Mathematical foundations", detail: "Applied gradients, optimization, numerical stability, and generalization concepts." },
      { name: "Controlled experimentation", detail: "Validated learning behavior through focused experiments." },
      { name: "Debugging optimization failures", detail: "Investigated training dynamics and failure modes." }
    ],
    layout: [[24, 17], [32, 43], [40, 78], [72, 17], [64, 43], [56, 78]],
    connections: [[0, 1], [1, 2], [3, 4], [4, 5], [0, 3], [1, 4]]
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
let portfolioEntered = false;

function buildVideo(project) {
  return `<div class="video-frame"><video class="project-video" data-src="${project.videoUrl}" muted playsinline loop preload="auto" aria-label="Preview video for ${project.title}"></video><button class="video-play-prompt" type="button">Play muted preview</button><p class="video-error" hidden role="status">This file could not be decoded. Export it as an H.264 MP4 for browser playback.</p></div>`;
}

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
    const frame = video.closest(".video-frame");
    video.addEventListener("loadeddata", () => {
      frame.classList.remove("is-buffering");
      frame.classList.add("is-frame-ready");
      video.controls = true;
    });
    video.addEventListener("waiting", () => frame.classList.add("is-buffering"));
    video.addEventListener("playing", () => frame.classList.remove("is-buffering"));
    video.addEventListener("error", () => {
      frame.classList.add("has-error");
      frame.querySelector(".video-error").hidden = false;
    });
  }
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    video.closest(".video-frame").classList.add("is-frame-ready");
    video.controls = true;
  }
  loadProjectVideo(video);
  videoPlaybackObserver.observe(video);
}

function loadProjectVideo(video) {
  if (video.src || !video.dataset.src) return;
  video.src = video.dataset.src;
  video.load();
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
  if (portfolioEntered) return;
  portfolioEntered = true;
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
  return project.layout.map(([layoutX, layoutY], nodeIndex) => {
    const isProject = nodeIndex === project.projectNodeIndex;
    const skillIndex = nodeIndex < project.projectNodeIndex ? nodeIndex : nodeIndex - 1;
    const [x, y] = [layoutX, layoutY];
    return {
      x: 50 + (x - 50) * scale,
      y: 50 + (y - 50) * scale,
      isProject,
      skill: isProject ? null : project.skills[skillIndex]
    };
  });
}

function constellationLabelSide({ x, y }, isProject = false) {
  if (isProject) return y < 50 ? "top" : "bottom";
  if (x <= 18) return "right";
  if (x >= 82) return "left";
  if (x <= 32) return "right";
  if (x >= 68) return "left";
  if (y < 30) return "bottom";
  if (y > 70) return "top";
  return x < 50 ? "right" : "left";
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
        const connections = project.connections.map(([from, to]) => `<line x1="${points[from].x}" y1="${points[from].y}" x2="${points[to].x}" y2="${points[to].y}" />`).join("");
        const stars = points.map(({ x, y, isProject }, skillIndex) => {
          if (isProject) return "";
          const starSize = [2.7, 1.7, 2.2, 1.5][skillIndex % 4];
          return `<path class="map-skill-star map-skill-star--${skillIndex + 1}" d="${starPath(x, y, starSize)}" />`;
        }).join("");
        const projectPoint = points[project.projectNodeIndex];
        return `<button class="constellation-card" type="button" data-constellation-index="${index}" aria-label="Explore ${project.title}: ${project.subtitle}">
          <svg class="constellation-sketch constellation-sketch--${project.pattern}" viewBox="0 0 100 100" aria-hidden="true" focusable="false">
            <g class="constellation-lines">${connections}</g>
            ${stars}
            <circle class="map-project-star-halo" cx="${projectPoint.x}" cy="${projectPoint.y}" r="8" />
            <circle class="map-project-star" cx="${projectPoint.x}" cy="${projectPoint.y}" r="3.6" />
          </svg>
          <span class="constellation-card-copy"><span class="constellation-card-kind">${project.kind}</span><span class="constellation-card-title">${project.title}</span><span class="constellation-card-subtitle">${project.subtitle}</span><span class="constellation-card-action">EXPLORE CONSTELLATION <span aria-hidden="true">↗</span></span></span>
        </button>`;
      }).join("")}
    </div>`;
}

function renderConstellationDetail(index) {
  const project = constellations[index];
  const points = constellationPoints(index);
  const connections = project.connections.map(([from, to]) => `<line x1="${points[from].x}" y1="${points[from].y}" x2="${points[to].x}" y2="${points[to].y}" />`).join("");
  const stars = points.map(({ x, y, isProject, skill }) => {
    const labelSide = isProject
      ? project.projectLabelSide || constellationLabelSide({ x, y }, true)
      : skill.labelSide || constellationLabelSide({ x, y });
    if (isProject) return `<span class="detail-project-star" data-label-side="${labelSide}" style="--star-x:${x}%;--star-y:${y}%" aria-hidden="true"><i></i><span>${project.title}</span></span>`;
    return `<span class="constellation-skill-star" data-label-side="${labelSide}" style="--star-x:${x}%;--star-y:${y}%" title="${skill.name}"><i aria-hidden="true"></i><span>${skill.name}</span></span>`;
  }).join("");
  const link = project.link
    ? `<a class="constellation-project-link" href="${project.link.href}" target="_blank" rel="noreferrer">${project.link.label}<span aria-hidden="true"> ↗</span></a>`
    : "";
  const contributions = [...project.skills, ...project.strengths];
  const previousIndex = (index + constellations.length - 1) % constellations.length;
  const nextIndex = (index + 1) % constellations.length;

  constellationMap.innerHTML = `
    <div class="star-map-toolbar">
      <button class="constellation-back" type="button" data-constellation-back><span aria-hidden="true">←</span> ALL CONSTELLATIONS</button>
      <div class="constellation-stepper" aria-label="Browse project constellations">
        <button class="constellation-step" type="button" data-constellation-step="${previousIndex}" aria-label="Previous constellation: ${constellations[previousIndex].title}">←</button>
        <span aria-live="polite">${String(index + 1).padStart(2, "0")} / ${String(constellations.length).padStart(2, "0")}</span>
        <button class="constellation-step" type="button" data-constellation-step="${nextIndex}" aria-label="Next constellation: ${constellations[nextIndex].title}">→</button>
      </div>
    </div>
    <article class="constellation-detail">
      <div class="constellation-detail-copy">
        <p class="constellation-detail-kind">${project.kind} <span>/</span> ${project.timeframe}</p>
        <h3>${project.title}</h3>
        <p class="constellation-detail-subtitle">${project.subtitle}</p>
        <p class="constellation-detail-description">${project.description}</p>
        ${link}
      </div>
      <div class="constellation-detail-art constellation-detail-art--${project.pattern}" role="img" aria-label="${project.title} as the brightest star, connected to ${project.skills.map((skill) => skill.name).join(", ")}">
        <svg class="detail-constellation-lines" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><g>${connections}</g></svg>
        <span class="detail-orbit detail-orbit--outer" aria-hidden="true"></span><span class="detail-orbit detail-orbit--inner" aria-hidden="true"></span>
        ${stars}
      </div>
      <ul class="constellation-skill-notes" aria-label="Skills and contributions">
        ${contributions.map((skill, skillIndex) => `<li><span class="skill-note-index">${String(skillIndex + 1).padStart(2, "0")}</span><span><strong>${skill.name}</strong><span>${skill.detail}</span></span></li>`).join("")}
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
  const stepButton = event.target.closest("[data-constellation-step]");
  if (stepButton) {
    const index = Number(stepButton.dataset.constellationStep);
    if (!Number.isInteger(index) || !constellations[index]) return;
    renderConstellations(index);
    constellationMap.querySelector(`[data-constellation-step="${index}"]`)?.focus({ preventScroll: true });
    return;
  }

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
const startupVideosReady = [...projectList.querySelectorAll(".project-video")].map((video) => new Promise((resolve) => {
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA || video.error) {
    resolve();
    return;
  }
  video.addEventListener("loadeddata", resolve, { once: true });
  video.addEventListener("error", resolve, { once: true });
}));
const introFinished = new Promise((resolve) => {
  bootTimer = window.setTimeout(resolve, reducedMotion ? 0 : 1950);
});
const videoStartupDeadline = new Promise((resolve) => window.setTimeout(resolve, 1200));
const startupMedia = reducedMotion
  ? Promise.resolve()
  : Promise.race([Promise.all(startupVideosReady), videoStartupDeadline]);
Promise.all([introFinished, startupMedia]).then(enterPortfolio);
