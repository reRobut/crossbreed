// ═══════════════════════════════════════════════════
// SOUND ENGINE
// ═══════════════════════════════════════════════════
// Sounds:
//   grow.mp3 / drop.mp3  — played randomly when a flower finishes growing
//   gold.mp3             — played when flower(s) are sold

const SFX = (() => {
  const cache = {};

  function load(name) {
    if (cache[name]) return cache[name];
    const audio = new Audio(name);
    audio.preload = 'auto';
    cache[name] = audio;
    return audio;
  }

  // Preload all sounds immediately
  load('grow.mp3');
  load('drop.mp3');
  load('gold.mp3');
  load('coin.mp3');

  function play(name) {
    try {
      const src = cache[name] || load(name);
      // Clone so overlapping plays work correctly
      const clone = src.cloneNode();
      clone.volume = 0.6;
      clone.play().catch(() => {/* autoplay blocked, ignore */});
    } catch (e) {
      // Silently ignore any audio errors
    }
  }

  return {
    grow() {
      // Randomly play either grow.mp3 or drop.mp3
      play(Math.random() < 0.5 ? 'grow.mp3' : 'drop.mp3');
    },
    gold() {
      play('gold.mp3');
    },
    coin() {
      play('coin.mp3');
    },
  };
})();
