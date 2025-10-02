const content = document.getElementById("cursor-circle-content");

function createCursor() {
  const elementReveal = document.createElement("div");
  elementReveal.style.opacity = "0";
  elementReveal.id = "cursor-circle";
  elementReveal.className = "mouse-circle";
  document.body.appendChild(elementReveal);
  return elementReveal;
}

function cursorRevealEffect() {
  if (!content) return;
  const elementReveal = createCursor();
  const revealEffectElement = document.querySelectorAll(".reveal-effect");

  if (!revealEffectElement || !revealEffectElement.length) return;
  Array.from(revealEffectElement).forEach((el) => {
    const fillText = el.querySelectorAll(".fill-text");
    Array.from(fillText).forEach((item) => setRevealEffect(item));
  });

  function setRevealEffect(fillText) {
    let targetX = 0,
      targetY = 0;
    let circleX = 0,
      circleY = 0;
    const speed = 0.18;

    content.addEventListener("mouseenter", () => {
      elementReveal.style.opacity = "1";
      fillText.style.opacity = "1";
    });

    content.addEventListener("mouseleave", () => {
      elementReveal.style.opacity = "0";
      fillText.style.opacity = "0";
    });

    content.addEventListener("mousemove", (e) => {
      const halfW = elementReveal.offsetWidth / 2;
      const halfH = elementReveal.offsetHeight / 2;
      targetX = e.clientX - halfW;
      targetY = e.clientY - halfH;

      const rect = fillText.getBoundingClientRect();
      const relX = e.clientX - rect.left;
      const relY = e.clientY - rect.top;

      const maskRadius = Math.max(50, Math.round(halfW));

      fillText.style.clipPath = `circle(${maskRadius}px at ${relX}px ${relY}px)`;
      fillText.style.webkitClipPath = `circle(${maskRadius}px at ${relX}px ${relY}px)`;
    });

    function animate() {
      circleX += (targetX - circleX) * speed;
      circleY += (targetY - circleY) * speed;

      elementReveal.style.transform = `translate3d(${circleX}px, ${circleY}px, 0)`;
      requestAnimationFrame(animate);
    }
    animate();
  }
}
cursorRevealEffect();

/* =============================================== */

const collections = document.querySelectorAll("#collections-name");
if (collections || collections.length > 0) {
  collections.forEach((collection) => setHeight(collection));
}

function setHeight(collection) {
  const { height } = collection.getBoundingClientRect();
  const newHeight = height - 450;
  collection.style.maxHeight = `${newHeight}px`;

  const seeMoreBtn = collection.querySelector("#see-more-btn");
  seeMoreBtn?.addEventListener("click", () => {
    if (collection) {
      collection.style.maxHeight = "none";
      seeMoreBtn.parentElement.style.display = "none";
    }
  });
}

/* =============================================== */
