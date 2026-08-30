import { story } from './data/story.js';

class RedStillnessEngine {
  constructor() {
    this.canvas = document.getElementById('particleCanvas');
    this.ctx = this.canvas ? this.canvas.getContext('2d') : null;
    this.particles = [];
    this.animFrameId = null;

    this.state = this.loadState() || {
      currentNode: 'start',
      history: [],
      visitedNodes: ['start'],
      soundEnabled: false
    };

    this.initCanvas();
    this.initEvents();
    this.render();
  }

  loadState() {
    try {
      const saved = localStorage.getItem('red_stillness_state');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.warn('Could not load persistent state:', e);
      return null;
    }
  }

  saveState() {
    try {
      localStorage.setItem('red_stillness_state', JSON.stringify(this.state));
    } catch (e) {
      console.warn('Could not save persistent state:', e);
    }
  }

  initCanvas() {
    if (!this.canvas || !this.ctx) return;
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const count = isReducedMotion ? 20 : 60;

    this.particles = Array.from({ length: count }, () => ({
      x: Math.random() * this.canvas.width,
      y: Math.random() * this.canvas.height,
      radius: Math.random() * 2 + 1,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      alpha: Math.random() * 0.5 + 0.2
    }));

    this.animateParticles();
  }

  resizeCanvas() {
    if (!this.canvas) return;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  animateParticles() {
    if (!this.ctx) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = this.canvas.width;
      if (p.x > this.canvas.width) p.x = 0;
      if (p.y < 0) p.y = this.canvas.height;
      if (p.y > this.canvas.height) p.y = 0;

      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(180, 40, 40, ${p.alpha})`;
      this.ctx.fill();
    });

    this.animFrameId = requestAnimationFrame(() => this.animateParticles());
  }

  navigateTo(nodeId) {
    if (!story[nodeId]) return;
    this.state.history.push(this.state.currentNode);
    this.state.currentNode = nodeId;
    if (!this.state.visitedNodes.includes(nodeId)) {
      this.state.visitedNodes.push(nodeId);
    }
    this.saveState();
    this.render();
  }

  goBack() {
    if (this.state.history.length === 0) return;
    this.state.currentNode = this.state.history.pop();
    this.saveState();
    this.render();
  }

  restart() {
    this.state = {
      currentNode: 'start',
      history: [],
      visitedNodes: ['start'],
      soundEnabled: this.state.soundEnabled
    };
    this.saveState();
    this.render();
  }

  initEvents() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'b' || e.key === 'B') {
        this.goBack();
      } else if (e.key === 'r' || e.key === 'R') {
        this.restart();
      } else if (e.key >= '1' && e.key <= '9') {
        const index = parseInt(e.key, 10) - 1;
        const choices = story[this.state.currentNode]?.choices || [];
        if (choices[index]) {
          this.navigateTo(choices[index].target);
        }
      }
    });

    const backBtn = document.getElementById('backBtn');
    const restartBtn = document.getElementById('restartBtn');

    if (backBtn) backBtn.addEventListener('click', () => this.goBack());
    if (restartBtn) restartBtn.addEventListener('click', () => this.restart());
  }

  render() {
    const node = story[this.state.currentNode];
    if (!node) return;

    const titleEl = document.getElementById('chapterTitle');
    const textEl = document.getElementById('storyText');
    const choicesEl = document.getElementById('choicesContainer');
    const progressEl = document.getElementById('progressBar');
    const backBtn = document.getElementById('backBtn');

    if (titleEl) titleEl.textContent = node.title || 'THE RED STILLNESS';
    if (textEl) textEl.innerHTML = node.text;

    if (backBtn) {
      backBtn.disabled = this.state.history.length === 0;
      backBtn.setAttribute('aria-disabled', this.state.history.length === 0 ? 'true' : 'false');
    }

    if (progressEl) {
      const totalNodes = Object.keys(story).length;
      const pct = Math.round((this.state.visitedNodes.length / totalNodes) * 100);
      progressEl.style.width = `${pct}%`;
      progressEl.setAttribute('aria-valuenow', pct);
    }

    if (choicesEl) {
      choicesEl.innerHTML = '';
      (node.choices || []).forEach((choice, idx) => {
        const btn = document.createElement('button');
        btn.className = 'choice-btn';
        btn.setAttribute('type', 'button');
        btn.setAttribute('tabindex', '0');
        btn.innerHTML = `<span class="choice-num">${idx + 1}.</span> ${choice.text}`;
        btn.addEventListener('click', () => this.navigateTo(choice.target));
        choicesEl.appendChild(btn);
      });
    }

    const mainContainer = document.getElementById('mainContainer');
    if (mainContainer) mainContainer.scrollTop = 0;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.redEngine = new RedStillnessEngine();
});
