'use strict';
/* ================================================================
   STUDENT DASHBOARD — script.js v2.0
   Shared: Sidebar · Terminal · Interpreter · Modals · Animations
   ================================================================ */

/* ── Scroll Reveal ──────────────────────────────────────────── */
function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  els.forEach(el => obs.observe(el));
}

/* ── Counter Animation ──────────────────────────────────────── */
function countUp(el, target, dur = 1400) {
  const start = performance.now();
  const run = now => {
    const p = Math.min((now - start) / dur, 1);
    const ease = 1 - Math.pow(1 - p, 4);
    el.textContent = Math.round(target * ease);
    if (p < 1) requestAnimationFrame(run);
    else el.textContent = target;
  };
  requestAnimationFrame(run);
}

function initCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { countUp(e.target, +e.target.dataset.count); obs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  els.forEach(el => obs.observe(el));
}

/* ── Progress Bars ──────────────────────────────────────────── */
function initProgressBars() {
  const bars = document.querySelectorAll('.progress-bar[data-w]');
  if (!bars.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { setTimeout(() => { e.target.style.width = e.target.dataset.w + '%'; }, 150); obs.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  bars.forEach(b => obs.observe(b));
}

/* ── SVG Progress Rings ─────────────────────────────────────── */
function initRings() {
  document.querySelectorAll('[data-ring]').forEach(ring => {
    const pct = +ring.dataset.ring;
    const r = +ring.dataset.r || 44;
    const circ = 2 * Math.PI * r;
    const fill = ring.querySelector('.ring-fill');
    if (!fill) return;
    fill.style.strokeDasharray = circ;
    fill.style.strokeDashoffset = circ;
    setTimeout(() => { fill.style.strokeDashoffset = circ - (pct / 100) * circ; }, 300);
  });
}

/* ── Button Ripple ──────────────────────────────────────────── */
function initRipples() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const r = document.createElement('span');
      r.className = 'ripple';
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height) * 2;
      r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX - rect.left - size / 2}px;top:${e.clientY - rect.top - size / 2}px`;
      this.appendChild(r);
      setTimeout(() => r.remove(), 700);
    });
  });
}

/* ── Toast ──────────────────────────────────────────────────── */
window.showToast = function (msg, type = 'info', dur = 3200) {
  document.querySelector('.toast')?.remove();
  const t = document.createElement('div');
  const icons = { success: '✓', error: '✗', info: 'ℹ' };
  t.className = `toast t-${type}`;
  t.innerHTML = `<span style="font-size:16px">${icons[type] || 'ℹ'}</span><span>${msg}</span>`;
  document.body.appendChild(t);
  requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 400); }, dur);
};

/* ── Modals ─────────────────────────────────────────────────── */
window.openModal = function (id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Initialize copy buttons for dynamic content
    modal.querySelectorAll('.copy-btn').forEach(btn => {
      if (!btn._init) {
        btn._init = true;
        btn.onclick = () => {
          const code = btn.nextElementSibling?.innerText || btn.parentNode.querySelector('code')?.innerText || '';
          navigator.clipboard.writeText(code).then(() => {
            const old = btn.innerText;
            btn.innerText = '✓';
            setTimeout(() => btn.innerText = old, 1500);
          });
        };
      }
    });
  }
};
window.closeModal = function (id) {
  const m = document.getElementById(id);
  if (!m) return;
  m.classList.remove('open');
  document.body.style.overflow = '';
};

function initModals() {
  document.querySelectorAll('.modal-overlay').forEach(m => {
    m.addEventListener('click', e => { if (e.target === m) closeModal(m.id); });
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id)); });
}

/* ── Copy Buttons ───────────────────────────────────────────── */
function initCopyBtns() {
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const code = btn.closest('.code-block');
      const text = code.innerText.replace(btn.innerText, '').trim();
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = '✓ Copied'; btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
      });
    });
  });
}

/* ── Accordion ──────────────────────────────────────────────── */
function initAccordions() {
  document.querySelectorAll('.accordion-header').forEach(h => {
    h.addEventListener('click', () => {
      h.classList.toggle('open');
      h.nextElementSibling?.classList.toggle('open');
    });
  });
}

/* ── Page Transition ────────────────────────────────────────── */
function initPageTransitions() {
  document.querySelectorAll('a[href]').forEach(a => {
    const href = a.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('mailto') || href.startsWith('javascript')) return;
    if (a.target === '_blank') return;
    a.addEventListener('click', e => {
      e.preventDefault();
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.28s ease';
      setTimeout(() => { window.location.href = href; }, 280);
    });
  });
}

/* ── Task Storage ───────────────────────────────────────────── */
const TASK_KEY = 'ss_tasks_v2';
window.loadTasks = () => { try { return JSON.parse(localStorage.getItem(TASK_KEY)) || {}; } catch { return {}; } };
window.saveTask = (id, done) => { const s = loadTasks(); s[id] = done; localStorage.setItem(TASK_KEY, JSON.stringify(s)); };
window.getStats = () => {
  const s = loadTasks();
  const all = Object.keys(s).filter(k => s[k]);
  return { total: all.length, python: all.filter(k => k.startsWith('py-')).length, linux: all.filter(k => k.startsWith('lx-')).length };
};

function initTasks() {
  const state = loadTasks();
  document.querySelectorAll('.task-card[data-id]').forEach(card => {
    const id = card.dataset.id;
    const btn = card.querySelector('.complete-btn');
    const badge = card.querySelector('.task-status');
    if (state[id]) applyDone(card, btn, badge);
    btn?.addEventListener('click', () => {
      saveTask(id, true);
      applyDone(card, btn, badge);
      showToast('Task completed! 🎉', 'success');
      refreshTaskStats();
    });
  });
  refreshTaskStats();
}

function applyDone(card, btn, badge) {
  card.classList.add('done');
  if (btn) { btn.textContent = 'Completed ✓'; btn.disabled = true; }
  if (badge) { badge.textContent = 'Done'; badge.className = 'badge badge-done task-status'; }
}

window.refreshTaskStats = function () {
  const s = getStats();
  document.querySelectorAll('[data-stat="total"]').forEach(el => el.textContent = s.total);
  document.querySelectorAll('[data-stat="python"]').forEach(el => el.textContent = s.python);
  document.querySelectorAll('[data-stat="linux"]').forEach(el => el.textContent = s.linux);
  // progress bars
  const pb = p => p === 0 ? 0 : Math.round((p / 10) * 100);
  document.querySelectorAll('.progress-bar[data-stat-py]').forEach(b => { b.style.width = pb(s.python) + '%'; });
  document.querySelectorAll('.progress-bar[data-stat-lx]').forEach(b => { b.style.width = pb(s.linux) + '%'; });
  document.querySelectorAll('[data-stat-count-py]').forEach(el => el.textContent = s.python);
  document.querySelectorAll('[data-stat-count-lx]').forEach(el => el.textContent = s.linux);
  // rings
  document.querySelectorAll('[data-ring-stat="python"]').forEach(el => { el.dataset.ring = pb(s.python); });
  document.querySelectorAll('[data-ring-stat="linux"]').forEach(el => { el.dataset.ring = pb(s.linux); });
};

/* ── Tabs ───────────────────────────────────────────────────── */
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabs => {
    tabs.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;
        tabs.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const container = tabs.closest('[data-tabs-wrap]') || document;
        container.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        container.querySelector(`[data-tab-content="${target}"]`)?.classList.add('active');
      });
    });
  });
}

/* ── Python Interpreter (Professional IDE) ──────────────────── */

/* Syntax Highlighter — One Dark Pro palette */
function highlightPython(code) {
  let h = code.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  // 1. Hide strings and comments using placeholders
  const phs = [];
  h = h.replace(/(""[\s\S]*?"""|'''[\s\S]*?'''|f?"[^"]*"|f?'[^']*'|#.*)/g, (match) => {
    const id = `__PYPH_${phs.length}__`;
    phs.push(match);
    return id;
  });

  const kws = 'def|class|return|if|elif|else|for|while|import|from|as|in|not|and|or|is|try|except|finally|raise|with|yield|pass|break|continue|lambda|True|False|None|global|nonlocal|assert|del|async|await';
  const bifs = 'print|len|range|type|int|str|float|list|dict|set|tuple|bool|input|open|map|filter|zip|enumerate|sorted|reversed|sum|min|max|abs|round|any|all|isinstance|hasattr|getattr|setattr|super|staticmethod|classmethod|property|exec|eval|input';

  // 2. Highlighting words (now safe because tags aren't added yet)
  h = h.replace(/\b(\w+)\b/g, (match) => {
    if (new RegExp('^(' + kws + ')$').test(match)) return `<span class="interp-hl-kw">${match}</span>`;
    if (new RegExp('^(' + bifs + ')$').test(match)) return `<span class="interp-hl-fn">${match}</span>`;
    if (/^\d+\.?\d*$/.test(match)) return `<span class="interp-hl-nm">${match}</span>`;
    return match;
  });

  // 3. Restore hidden items with their specific classes
  h = h.replace(/__PYPH_(\d+)__/g, (match, idx) => {
    const orig = phs[parseInt(idx)];
    const isComment = orig.startsWith('#');
    return `<span class="${isComment ? 'interp-hl-cm' : 'interp-hl-st'}">${orig}</span>`;
  });

  // 4. Specific post-processing for def/class names
  h = h.replace(/(<span class="interp-hl-kw">def<\/span>\s+)(\w+)/g, '$1<span class="interp-hl-fn">$2</span>');
  h = h.replace(/(<span class="interp-hl-kw">class<\/span>\s+)(\w+)/g, '$1<span class="interp-hl-cl">$2</span>');

  return h;
}

/* Global updateEditor — called from oninput on textarea */
window.updateEditor = function () {
  const editor = document.getElementById('interp-editor');
  const backdrop = document.getElementById('interp-backdrop');
  const lineNums = document.getElementById('interp-line-nums');
  if (!editor) return;

  // Highlight
  if (backdrop) {
    backdrop.innerHTML = highlightPython(editor.value) + '\n'; // trailing newline for height match
  }

  // Line numbers
  if (lineNums) {
    const n = editor.value.split('\n').length;
    lineNums.innerHTML = Array.from({ length: n }, (_, i) => `<div style="line-height:1.6;font-family:'JetBrains Mono',monospace">${i + 1}</div>`).join('');
  }
};

function initInterpreter() {
  const editor = document.getElementById('interp-editor');
  const backdrop = document.getElementById('interp-backdrop');
  const lineNums = document.getElementById('interp-line-nums');
  const runBtn = document.getElementById('interp-run-btn');
  const output = document.getElementById('interp-output');
  if (!editor || !runBtn || !output) return;

  /* Initial highlight */
  updateEditor();

  /* Sync scroll between textarea and backdrop */
  editor.addEventListener('scroll', () => {
    if (backdrop) {
      backdrop.scrollTop = editor.scrollTop;
      backdrop.scrollLeft = editor.scrollLeft;
    }
    if (lineNums) {
      lineNums.style.transform = `translateY(-${editor.scrollTop}px)`;
    }
  });

  /* Tab key inserts 4 spaces */
  editor.addEventListener('keydown', e => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const s = editor.selectionStart;
      const end = editor.selectionEnd;
      editor.value = editor.value.slice(0, s) + '    ' + editor.value.slice(end);
      editor.selectionStart = editor.selectionEnd = s + 4;
      updateEditor();
    }
    /* Enter key — auto indent */
    if (e.key === 'Enter') {
      e.preventDefault();
      const s = editor.selectionStart;
      const before = editor.value.slice(0, s);
      const after = editor.value.slice(editor.selectionEnd);
      const lastLine = before.split('\n').pop();
      const indent = lastLine.match(/^\s*/)[0];
      const extra = lastLine.trimEnd().endsWith(':') ? '    ' : '';
      editor.value = before + '\n' + indent + extra + after;
      editor.selectionStart = editor.selectionEnd = s + 1 + indent.length + extra.length;
      updateEditor();
    }
  });

  /* Run Code via Piston API */
  runBtn.addEventListener('click', async () => {
    const code = editor.value.trim();
    if (!code) {
      output.innerHTML = '<span style="color:#484f58">// No code to run</span>';
      return;
    }

    output.innerHTML = '<span style="color:#8b949e">⏳ Executing...</span>';
    runBtn.disabled = true;
    runBtn.textContent = '⏳ Running...';

    try {
      const res = await fetch('https://emkc.org/api/v2/piston/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          language: 'python',
          version: '3.10.0',
          files: [{ name: 'main.py', content: code }]
        })
      });
      const d = await res.json();
      const out = d.run?.stdout || '';
      const err = d.run?.stderr || '';

      if (err && out) {
        output.innerHTML = `<span style="color:#98c379">${esc(out)}</span>\n<span style="color:#e06c75">${esc(err)}</span>`;
      } else if (err) {
        output.innerHTML = `<span style="color:#e06c75">${esc(err)}</span>`;
      } else if (out) {
        output.innerHTML = `<span style="color:#98c379">${esc(out)}</span>`;
      } else {
        output.innerHTML = '<span style="color:#484f58">// Program finished with no output</span>';
      }
    } catch (e) {
      output.innerHTML = `<span style="color:#e06c75">Connection Error\n${esc(e.message)}</span>`;
    }

    runBtn.disabled = false;
    runBtn.textContent = '▶ Run Code';
  });
}

/* ── Python Documentation Data ───────────────────── */
const pythonModules = {
  'math': {
    d: 'Provides mathematical functions defined by the C standard, like square roots and trigonometry.',
    f: [
      { n: 'math.sqrt(x)', d: 'Returns the square root of x.', e: 'import math\nprint(math.sqrt(16))', o: '4.0' },
      { n: 'math.ceil(x)', d: 'Returns the smallest integer >= x (rounds up).', e: 'import math\nprint(math.ceil(4.2))', o: '5' },
      { n: 'math.floor(x)', d: 'Returns the largest integer <= x (rounds down).', e: 'import math\nprint(math.floor(4.8))', o: '4' },
      { n: 'math.pi', d: 'Mathematical constant Pi (3.14159...)', e: 'import math\nprint(math.pi)', o: '3.141592653589793' }
    ]
  },
  'random': {
    d: 'Implements pseudo-random number generators for various distributions.',
    f: [
      { n: 'random.random()', d: 'Returns a random float in [0.0, 1.0).', e: 'import random\nprint(random.random())', o: '0.453... (Random Value)' },
      { n: 'random.randint(a, b)', d: 'Returns a random integer N such that a <= N <= b.', e: 'import random\nprint(random.randint(1, 10))', o: '7 (Random Number)' },
      { n: 'random.choice(seq)', d: 'Returns a random element from a sequence.', e: 'import random\nprint(random.choice(["a", "b", "c"]))', o: '"b" (Randomly chosen)' }
    ]
  },
  'os': {
    d: 'Provides a portable way of using operating system dependent functionality.',
    f: [
      { n: 'os.getcwd()', d: 'Returns the current working directory.', e: 'import os\nprint(os.getcwd())', o: '/home/student' },
      { n: 'os.listdir(path)', d: 'Return a list of entries in the directory.', e: 'import os\nprint(os.listdir("."))', o: '["main.py", "data.csv"]' }
    ]
  },
  'sys': {
    d: 'System parameters and functions.',
    f: [
      { n: 'sys.platform', d: 'Platform identifier (e.g. "linux", "win32").', e: 'import sys\nprint(sys.platform)', o: 'linux' },
      { n: 'sys.version', d: 'Python version string.', e: 'import sys\nprint(sys.version)', o: '3.10.12 ...' }
    ]
  },
  'json': {
    d: 'JSON encoder and decoder.',
    f: [
      { n: 'json.dumps(obj)', d: 'Serialize obj to a JSON formatted string.', e: 'import json\nprint(json.dumps({"id": 1}))', o: '{"id": 1}' },
      { n: 'json.loads(s)', d: 'Deserialize s to a Python object.', e: 'import json\nprint(json.loads(\'{"a": 1}\'))', o: "{'a': 1}" }
    ]
  },
  'datetime': {
    d: 'Basic date and time types.',
    f: [
      { n: 'datetime.datetime.now()', d: 'Current local date and time.', e: 'import datetime\nprint(datetime.datetime.now())', o: '2026-05-07 11:20:05.123' },
      { n: 'datetime.date.today()', d: 'Current local date.', e: 'import datetime\nprint(datetime.date.today())', o: '2026-05-07' }
    ]
  },
  're': {
    d: 'Regular expression operations (pattern matching).',
    f: [
      { n: 're.search(pattern, string)', d: 'Scan through string looking for pattern.', e: 'import re\nprint(re.search(r"\\d+", "User 123"))', o: '<re.Match object; span=(5, 8), match="123">' },
      { n: 're.findall(pattern, string)', d: 'Return all non-overlapping matches.', e: 'import re\nprint(re.findall(r"\\w+", "Hi world"))', o: "['Hi', 'world']" }
    ]
  },
  'statistics': {
    d: 'Mathematical statistics functions.',
    f: [
      { n: 'statistics.mean(data)', d: 'Arithmetic mean (average) of data.', e: 'import statistics\nprint(statistics.mean([1, 2, 3, 4]))', o: '2.5' },
      { n: 'statistics.median(data)', d: 'Median (middle value) of data.', e: 'import statistics\nprint(statistics.median([1, 3, 5]))', o: '3' }
    ]
  },
  'itertools': {
    d: 'Functions creating iterators for efficient looping.',
    f: [
      { n: 'itertools.cycle(iterable)', d: 'Cycle indefinitely through an iterable.', e: 'import itertools\n# cycles a, b, c, a, b...', o: 'Iterator Object' },
      { n: 'itertools.count(start)', d: 'Count indefinitely starting from start.', e: 'import itertools\ncounter = itertools.count(10)', o: 'Iterator (10, 11, ...)' }
    ]
  }
};

const pythonBuiltins = [
  { n: 'abs()', d: 'Returns the absolute value of a number.', e: 'abs(-5)', o: '5' },
  { n: 'aiter()', d: 'Returns an asynchronous iterator.', e: 'aiter(obj)', o: 'Async Iterator' },
  { n: 'all()', d: 'Returns True if all elements of the iterable are true.', e: 'all([True, 1, "yes"])', o: 'True' },
  { n: 'any()', d: 'Returns True if any element of the iterable is true.', e: 'any([0, False, 1])', o: 'True' },
  { n: 'anext()', d: 'Awaits the next item from an async iterator.', e: 'await anext(it)', o: 'Next Item' },
  { n: 'ascii()', d: 'Returns a string containing a printable representation.', e: 'ascii("ö")', o: "'\\xf6'" },
  { n: 'bin()', d: 'Converts an integer number to a binary string.', e: 'bin(3)', o: "'0b11'" },
  { n: 'bool()', d: 'Converts a value to a Boolean (True or False).', e: 'bool(1)', o: 'True' },
  { n: 'breakpoint()', d: 'Drops you into the debugger.', e: 'breakpoint()', o: '(Debugger Entry)' },
  { n: 'bytearray()', d: 'Returns a new array of bytes.', e: 'bytearray(5)', o: "bytearray(b'\\x00\\x00\\x00\\x00\\x00')" },
  { n: 'bytes()', d: 'Returns a new "bytes" object.', e: 'bytes(5)', o: "b'\\x00\\x00\\x00\\x00\\x00'" },
  { n: 'callable()', d: 'Returns True if the object appears callable.', e: 'callable(print)', o: 'True' },
  { n: 'chr()', d: 'Returns a string representing a character from Unicode.', e: 'chr(97)', o: "'a'" },
  { n: 'classmethod()', d: 'Transforms a method into a class method.', e: '@classmethod\ndef f(cls): pass', o: 'Method Object' },
  { n: 'compile()', d: 'Compiles source into a code or AST object.', e: 'compile("1+1", "", "eval")', o: 'Code Object' },
  { n: 'complex()', d: 'Returns a complex number.', e: 'complex(1, 2)', o: '(1+2j)' },
  { n: 'delattr()', d: 'Deletes the named attribute from an object.', e: 'delattr(obj, "name")', o: 'None' },
  { n: 'dict()', d: 'Creates a new dictionary.', e: 'dict(a=1, b=2)', o: "{'a': 1, 'b': 2}" },
  { n: 'dir()', d: 'Returns a list of valid attributes of an object.', e: 'dir([])', o: "['append', 'clear', ...]" },
  { n: 'divmod()', d: 'Returns a tuple containing quotient and remainder.', e: 'divmod(10, 3)', o: '(3, 1)' },
  { n: 'enumerate()', d: 'Returns an enumerate object (index, value).', e: 'list(enumerate(["a", "b"]))', o: "[(0, 'a'), (1, 'b')]" },
  { n: 'eval()', d: 'Parses and evaluates a Python expression.', e: 'eval("1 + 1")', o: '2' },
  { n: 'exec()', d: 'Executes Python code dynamically.', e: 'exec("print(\'hi\')")', o: 'hi' },
  { n: 'filter()', d: 'Constructs an iterator from elements that are true.', e: 'list(filter(lambda x: x>0, [-1, 1]))', o: '[1]' },
  { n: 'float()', d: 'Returns a floating point number.', e: 'float("3.14")', o: '3.14' },
  { n: 'format()', d: 'Formats a value into a string representation.', e: 'format(0.5, ".2%")', o: "'50.00%'" },
  { n: 'frozenset()', d: 'Returns a new frozenset object (immutable).', e: 'frozenset([1, 2])', o: 'frozenset({1, 2})' },
  { n: 'getattr()', d: 'Returns the value of a named attribute.', e: 'getattr(obj, "attr")', o: 'Value' },
  { n: 'globals()', d: 'Returns the current global symbol table.', e: 'globals()', o: '{...}' },
  { n: 'hasattr()', d: 'Returns True if object has the named attribute.', e: 'hasattr(obj, "name")', o: 'True' },
  { n: 'hash()', d: 'Returns the hash value of an object.', e: 'hash("hi")', o: '123456789...' },
  { n: 'help()', d: 'Invokes the built-in help system.', e: 'help(str)', o: '(Help Output)' },
  { n: 'hex()', d: 'Converts an integer to a hexadecimal string.', e: 'hex(255)', o: "'0xff'" },
  { n: 'id()', d: 'Returns the unique identity of an object.', e: 'id(obj)', o: '140735...' },
  { n: 'input()', d: 'Reads a line of input from the user.', e: 'name = input("Name: ")', o: '(User Input)' },
  { n: 'int()', d: 'Returns an integer number.', e: 'int("42")', o: '42' },
  { n: 'isinstance()', d: 'Returns True if obj is an instance of classinfo.', e: 'isinstance(5, int)', o: 'True' },
  { n: 'issubclass()', d: 'Returns True if class is a subclass of another.', e: 'issubclass(bool, int)', o: 'True' },
  { n: 'iter()', d: 'Returns an iterator object.', e: 'iter([1, 2])', o: 'List Iterator' },
  { n: 'len()', d: 'Returns the length (number of items) of an object.', e: 'len("Hi")', o: '2' },
  { n: 'list()', d: 'Creates a new list.', e: 'list("abc")', o: "['a', 'b', 'c']" },
  { n: 'locals()', d: 'Returns the current local symbol table.', e: 'locals()', o: '{...}' },
  { n: 'map()', d: 'Applies function to every item of iterable.', e: 'list(map(str.upper, ["a", "b"]))', o: "['A', 'B']" },
  { n: 'max()', d: 'Returns the largest item in an iterable.', e: 'max(1, 5, 2)', o: '5' },
  { n: 'memoryview()', d: 'Returns a memory view object.', e: 'memoryview(b"abc")', o: 'MemoryView Object' },
  { n: 'min()', d: 'Returns the smallest item in an iterable.', e: 'min(1, 5, 2)', o: '1' },
  { n: 'next()', d: 'Retrieves the next item from an iterator.', e: 'next(it)', o: 'Value' },
  { n: 'object()', d: 'Returns a new featureless object.', e: 'object()', o: 'Object instance' },
  { n: 'oct()', d: 'Converts an integer to an octal string.', e: 'oct(8)', o: "'0o10'" },
  { n: 'open()', d: 'Opens a file and returns a file object.', e: 'open("file.txt", "r")', o: 'File Object' },
  { n: 'ord()', d: 'Returns the Unicode code point of a character.', e: 'ord("a")', o: '97' },
  { n: 'pow()', d: 'Returns base to the power exp.', e: 'pow(2, 3)', o: '8' },
  { n: 'print()', d: 'Prints objects to the text stream.', e: 'print(42)', o: '42' },
  { n: 'property()', d: 'Returns a property attribute.', e: '@property\ndef x(self): return 1', o: 'Property Object' },
  { n: 'range()', d: 'Returns an immutable sequence of numbers.', e: 'list(range(3))', o: '[0, 1, 2]' },
  { n: 'repr()', d: 'Returns a printable string representation.', e: 'repr("hi")', o: "'\\'hi\\''" },
  { n: 'reversed()', d: 'Returns a reverse iterator.', e: 'list(reversed([1, 2]))', o: '[2, 1]' },
  { n: 'round()', d: 'Rounds a number to n digits precision.', e: 'round(3.14159, 2)', o: '3.14' },
  { n: 'set()', d: 'Creates a new set.', e: 'set([1, 1, 2])', o: '{1, 2}' },
  { n: 'setattr()', d: 'Sets the value of a named attribute on an object.', e: 'setattr(obj, "x", 10)', o: 'None' },
  { n: 'slice()', d: 'Returns a slice object.', e: 's = slice(1, 5)', o: 'slice(1, 5, None)' },
  { n: 'sorted()', d: 'Returns a new sorted list.', e: 'sorted([3, 1, 2])', o: '[1, 2, 3]' },
  { n: 'staticmethod()', d: 'Transforms a method into a static method.', e: '@staticmethod\ndef f(): pass', o: 'Static Method' },
  { n: 'str()', d: 'Returns a string version of an object.', e: 'str(42)', o: "'42'" },
  { n: 'sum()', d: 'Sums the items of an iterable.', e: 'sum([1, 2])', o: '3' },
  { n: 'super()', d: 'Returns a proxy object that delegates method calls.', e: 'super().__init__()', o: 'Base Instance' },
  { n: 'tuple()', d: 'Creates a new tuple.', e: 'tuple([1, 2])', o: '(1, 2)' },
  { n: 'type()', d: 'Returns the type of an object.', e: 'type(5)', o: "<class 'int'>" },
  { n: 'vars()', d: 'Returns the __dict__ attribute of an object.', e: 'vars(obj)', o: '{...}' },
  { n: 'zip()', d: 'Aggregates elements from multiple iterables.', e: 'list(zip([1,2], ["a","b"]))', o: "[(1, 'a'), (2, 'b')]" },
  { n: '__import__()', d: 'Advanced import function.', e: '__import__("os")', o: 'OS Module' }
];

window.openModuleDocs = function (name) {
  const mod = pythonModules[name.toLowerCase()];
  if (!mod) return;
  const title = document.getElementById('fn-modal-title');
  const body = document.getElementById('fn-modal-body');
  if (!title || !body) return;

  title.innerText = `Module: ${esc(name)}`;
  let html = `<p style="color:var(--text-secondary);margin-bottom:24px;line-height:1.6">${esc(mod.d)}</p>`;
  mod.f.forEach(f => {
    html += `
      <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:var(--r-lg);padding:18px;margin-bottom:12px">
        <div style="font-family:var(--font-code);color:var(--primary-light);font-size:15px;margin-bottom:8px">${esc(f.n)}</div>
        <p style="font-size:13px;color:var(--text-muted);margin-bottom:12px">${esc(f.d)}</p>
        <div class="code-block" style="background:#08080c;padding:12px;margin:8px 0;font-size:12px">
          <button class="copy-btn">Copy</button><code>${esc(f.e)}</code>
        </div>
        <div class="output-box" style="background:rgba(34,197,94,0.08);border-left:3px solid var(--success);padding:10px;border-radius:0 var(--r-md) var(--r-md) 0;font-size:12px;color:var(--success)">${esc(f.o)}</div>
      </div>
    `;
  });
  body.innerHTML = html;
  openModal('fn-modal');
};

window.searchFor = function (q) {
  if (!q) return;
  const query = q.toLowerCase().trim().replace('()', '');
  const f = pythonBuiltins.find(x => x.n.toLowerCase().includes(query));

  if (f) {
    const title = document.getElementById('fn-modal-title');
    const body = document.getElementById('fn-modal-body');
    if (title && body) {
      title.innerText = `Built-in: ${esc(f.n)}`;
      body.innerHTML = `
        <div style="background:rgba(255,255,255,0.03);border:1px solid var(--border);border-radius:var(--r-lg);padding:24px">
          <p style="color:var(--text-secondary);font-size:15px;margin-bottom:20px">${esc(f.d)}</p>
          <div class="section-label">Example Usage:</div>
          <div class="code-block" style="background:#08080c;padding:15px;margin:8px 0"><code>${esc(f.e)}</code></div>
          <div class="section-label">Expected Output:</div>
          <div class="output-box" style="background:rgba(34,197,94,0.08);border-left:3px solid var(--success);padding:10px;border-radius:0 var(--r-md) var(--r-md) 0;font-size:12px;color:var(--success)">${esc(f.o)}</div>
        </div>
      `;
      openModal('fn-modal');
    }
  } else {
    if (pythonModules[query]) {
      openModuleDocs(query);
    } else {
      showToast('Function/Module not found in index.', 'info');
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('py-search-btn');
  const inp = document.getElementById('py-search');
  if (btn && inp) {
    btn.onclick = () => searchFor(inp.value);
    inp.onkeypress = (e) => { if (e.key === 'Enter') searchFor(inp.value); };
  }
});

function esc(t) { const d = document.createElement('div'); d.appendChild(document.createTextNode(t)); return d.innerHTML; }

/* ── Linux Terminal ─────────────────────────────────────────── */
function initTerminal() {
  const inp = document.getElementById('terminal-input');
  const out = document.getElementById('terminal-output');
  const pdisp = document.getElementById('terminal-prompt-display');
  if (!inp || !out) return;

  /* Virtual FS */
  const FS = {
    type: 'dir',
    children: {
      home: {
        type: 'dir', children: {
          student: {
            type: 'dir', children: {
              'Documents': { type: 'dir', children: {} },
              'Downloads': { type: 'dir', children: {} },
              'Projects': { type: 'dir', children: {} },
              'readme.txt': { type: 'file', content: 'Welcome to the Linux Terminal Simulator!\nPractice Linux commands here.', perms: 'rw-r--r--', owner: 'student', size: 57 },
              'notes.txt': { type: 'file', content: 'Linux is powerful.\nKeep practicing!', perms: 'rw-r--r--', owner: 'student', size: 35 }
            }
          }
        }
      },
      etc: { type: 'dir', children: { 'hostname': { type: 'file', content: 'linux-env', perms: 'r--r--r--', owner: 'root', size: 9 } } },
      tmp: { type: 'dir', children: {} },
      var: { type: 'dir', children: {} }
    }
  };

  let cwd = '/home/student';
  let history = [];
  let histIdx = -1;
  let cmdHistory = [];

  function getNode(path) {
    const p = resolvePath(path);
    if (p === '/') return FS;
    const parts = p.split('/').filter(Boolean);
    let node = FS;
    for (const part of parts) {
      if (!node.children?.[part]) return null;
      node = node.children[part];
    }
    return node;
  }

  function setNode(path, node) {
    const p = resolvePath(path);
    const parts = p.split('/').filter(Boolean);
    let parent = FS;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!parent.children[parts[i]]) return false;
      parent = parent.children[parts[i]];
    }
    if (!parent.children) parent.children = {};
    parent.children[parts[parts.length - 1]] = node;
    return true;
  }

  function delNode(path) {
    const p = resolvePath(path);
    const parts = p.split('/').filter(Boolean);
    let parent = FS;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!parent.children?.[parts[i]]) return false;
      parent = parent.children[parts[i]];
    }
    delete parent.children?.[parts[parts.length - 1]];
    return true;
  }

  function resolvePath(input) {
    if (input === '~') return '/home/student';
    let p = input.startsWith('/') ? input : cwd + '/' + input;
    const parts = p.split('/').filter(Boolean);
    const stack = [];
    for (const pp of parts) { if (pp === '..') { stack.pop(); } else if (pp != '.') { stack.push(pp); } }
    return '/' + stack.join('/');
  }

  function displayPath() { return cwd === '/home/student' ? '~' : cwd.replace('/home/student', '~'); }
  function getPrompt() { return `student@linux-env:${displayPath()}$ `; }

  function updatePrompt() { if (pdisp) pdisp.textContent = getPrompt(); }

  function print(html) {
    const buf = document.getElementById('terminal-buffer');
    if (!buf) return;
    const d = document.createElement('div');
    d.className = 't-line';
    d.innerHTML = html;
    buf.appendChild(d);
    out.scrollTop = out.scrollHeight;
  }
  function printPrompt(cmd) { print(`<span class="t-prompt-str">${esc(getPrompt())}</span><span class="t-cmd-str">${esc(cmd)}</span>`); }
  function printOut(text) { print(`<span class="t-out-str">${esc(text)}</span>`); }
  function printErr(text) { print(`<span class="t-err-str">${esc(text)}</span>`); }

  function lsOutput(node, showAll, longFmt) {
    if (!node?.children) return '';
    const entries = Object.entries(node.children);
    if (!showAll) { /* skip hidden */ }
    if (!entries.length) { printOut(''); return; }
    let lines = [];
    if (longFmt) {
      const now = new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
      entries.forEach(([name, n]) => {
        const perms = n.perms || (n.type === 'dir' ? 'drwxr-xr-x' : '-rw-r--r--');
        const pre = n.type === 'dir' ? 'd' : '- ';
        const size = n.size || 4096;
        const p = n.type === 'dir' ? perms : '- ' + perms;
        const colored = n.type === 'dir' ? `<span class="t-dir-str">${esc(name)}</span>` : `<span class="t-file-str">${esc(name)}</span>`;
        lines.push(`${p.substring(0, 10) || '----------'} 1 student student ${String(size).padStart(5)} ${now} ${colored}`);
      });
    } else {
      lines = entries.map(([name, n]) => n.type === 'dir' ? `<span class="t-dir-str">${esc(name)}</span>` : `<span class="t-file-str">${esc(name)}</span>`);
    }
    const div = document.createElement('div'); div.className = 't-line';
    if (longFmt) { div.innerHTML = lines.join('\n'); div.style.whiteSpace = 'pre'; }
    else { div.innerHTML = lines.join('  '); }
    out.appendChild(div); out.scrollTop = out.scrollHeight;
  }

  function buildTree(node, prefix, name, lines) {
    if (!lines) lines = [];
    if (name) lines.push(prefix + (node.type === 'dir' ? `<span class="t-dir-str">${esc(name)}/</span>` : esc(name)));
    if (node.type === 'dir' && node.children) {
      const ents = Object.entries(node.children);
      ents.forEach(([n, ch], i) => {
        const last = i === ents.length - 1;
        const con = last ? '└── ' : '├── ';
        const sub = last ? '    ' : '│   ';
        if (ch.type === 'dir') { lines.push(prefix + con + `<span class="t-dir-str">${esc(n)}/</span>`); buildTree(ch, prefix + sub, '', lines); }
        else lines.push(prefix + con + esc(n));
      });
    }
    return lines;
  }

  const cmds = {
    ls(args) {
      const flags = args.filter(a => a.startsWith('-')).join('');
      const la = flags.includes('l') || flags.includes('a');
      const longFmt = flags.includes('l');
      const target = args.find(a => !a.startsWith('-'));
      const node = target ? getNode(cwd + '/' + target) : getNode(cwd);
      if (!node) { printErr(`ls: cannot access '${target}': No such file or directory`); return; }
      lsOutput(node, la, longFmt);
    },
    cd(args) {
      const dest = args[0] || '~';
      const target = dest === '~' ? '/home/student' : resolvePath(dest);
      const node = getNode(target);
      if (!node) { printErr(`bash: cd: ${dest}: No such file or directory`); return; }
      if (node.type !== 'dir') { printErr(`bash: cd: ${dest}: Not a directory`); return; }
      cwd = target; updatePrompt();
    },
    pwd() { printOut(cwd); },
    mkdir(args) {
      if (!args[0]) { printErr('mkdir: missing operand'); return; }
      const recursive = args.includes('-p');
      const names = args.filter(a => !a.startsWith('-'));
      names.forEach(name => {
        const p = resolvePath(name);
        if (getNode(p)) { printErr(`mkdir: cannot create directory '${name}': File exists`); return; }
        setNode(p, { type: 'dir', children: {}, perms: 'drwxr-xr-x', owner: 'student' });
      });
    },
    touch(args) {
      if (!args[0]) { printErr('touch: missing file operand'); return; }
      args.forEach(a => { if (!getNode(resolvePath(a))) setNode(resolvePath(a), { type: 'file', content: '', perms: '-rw-r--r--', owner: 'student', size: 0 }); });
    },
    rm(args) {
      if (!args[0]) { printErr('rm: missing operand'); return; }
      const rec = args.includes('-r') || args.includes('-rf');
      const names = args.filter(a => !a.startsWith('-'));
      names.forEach(name => {
        const node = getNode(resolvePath(name));
        if (!node) { printErr(`rm: cannot remove '${name}': No such file or directory`); return; }
        if (node.type === 'dir' && !rec) { printErr(`rm: cannot remove '${name}': Is a directory`); return; }
        delNode(resolvePath(name));
      });
    },
    cp(args) {
      if (args.length < 2) { printErr('cp: missing destination operand'); return; }
      const src = getNode(resolvePath(args[0]));
      if (!src) { printErr(`cp: cannot stat '${args[0]}': No such file or directory`); return; }
      setNode(resolvePath(args[1]), JSON.parse(JSON.stringify(src)));
    },
    mv(args) {
      if (args.length < 2) { printErr('mv: missing destination operand'); return; }
      const src = getNode(resolvePath(args[0]));
      if (!src) { printErr(`mv: cannot stat '${args[0]}': No such file or directory`); return; }
      setNode(resolvePath(args[1]), JSON.parse(JSON.stringify(src)));
      delNode(resolvePath(args[0]));
    },
    cat(args) {
      if (!args[0]) { printErr('cat: missing file operand'); return; }
      const node = getNode(resolvePath(args[0]));
      if (!node) { printErr(`cat: ${args[0]}: No such file or directory`); return; }
      if (node.type === 'dir') { printErr(`cat: ${args[0]}: Is a directory`); return; }
      printOut(node.content || '');
    },
    echo(args) {
      const ri = args.indexOf('>');
      if (ri !== -1) {
        const text = args.slice(0, ri).join(' ').replace(/^['"]|['"]$/g, '');
        const file = args[ri + 1];
        if (!file) { printErr('echo: missing file operand'); return; }
        const p = resolvePath(file);
        setNode(p, { type: 'file', content: text, perms: '-rw-r--r--', owner: 'student', size: text.length });
        return;
      }
      printOut(args.join(' ').replace(/^['"]|['"]$/g, ''));
    },
    grep(args) {
      const flags = args.filter(a => a.startsWith('-'));
      const rest = args.filter(a => !a.startsWith('-'));
      const [pattern, filename] = rest;
      if (!pattern) { printErr('grep: no pattern'); return; }
      if (!filename) { printErr('grep: missing file'); return; }
      const node = getNode(resolvePath(filename));
      if (!node) { printErr(`grep: ${filename}: No such file or directory`); return; }
      if (node.type === 'dir') { printErr(`grep: ${filename}: Is a directory`); return; }
      const ci = flags.includes('-i');
      const lines = node.content.split('\n').filter(l => (ci ? l.toLowerCase() : l).includes(ci ? pattern.toLowerCase() : pattern));
      if (!lines.length) { return; }
      lines.forEach(l => print(`<span class="t-out-str">${esc(l)}</span>`));
    },
    chmod(args) {
      if (args.length < 2) { printErr('chmod: missing operand'); return; }
      const node = getNode(resolvePath(args[1]));
      if (!node) { printErr(`chmod: cannot access '${args[1]}': No such file or directory`); return; }
      node.perms = (node.type === 'dir' ? 'd' : '-') + args[0];
      printOut(`mode of '${args[1]}' changed to ${args[0]}`);
    },
    find(args) {
      const nameArg = args.indexOf('-name');
      const pattern = nameArg !== -1 ? args[nameArg + 1] : '*';
      const baseNode = getNode(cwd);
      const results = [];
      const search = (node, path) => {
        if (!node?.children) return;
        Object.entries(node.children).forEach(([name, child]) => {
          const fullPath = path + '/' + name;
          const glob = pattern.replace('*', '.*').replace('?', '.');
          if (new RegExp('^' + glob + '$').test(name)) results.push('.' + fullPath.replace(cwd, ''));
          if (child.type === 'dir') search(child, fullPath);
        });
      };
      search(baseNode, cwd);
      results.forEach(r => printOut(r));
      if (!results.length) printOut('');
    },
    tree() {
      const node = getNode(cwd);
      const name = displayPath().split('/').pop() || '~';
      const lines = buildTree(node, '', name, []);
      const div = document.createElement('div'); div.className = 't-line'; div.innerHTML = lines.join('\n'); div.style.whiteSpace = 'pre'; out.appendChild(div); out.scrollTop = out.scrollHeight;
    },
    history() {
      if (!cmdHistory.length) { printOut('(no history)'); return; }
      cmdHistory.forEach((c, i) => print(`<span style="color:#555">${String(i + 1).padStart(4, '  ')}  </span><span class="t-out-str">${esc(c)}</span>`));
    },
    clear() { out.innerHTML = ''; },
    whoami() { printOut('student'); },
    date() { printOut(new Date().toString()); },
    uname(args) {
      if (args.includes('-a')) printOut('Linux linux-env 5.15.0-88-generic #98-Ubuntu SMP x86_64 x86_64 x86_64 GNU/Linux');
      else printOut('Linux');
    },
    hostname() { printOut('linux-env'); },
    exit() {
      const modal = document.getElementById('terminal-modal');
      if (modal && modal.classList.contains('open')) closeModal('terminal-modal');
      else window.close();
    },
    help() {
      const table = `<span style="color:#00D4AA">Available Commands:</span>
<span style="color:#555">── Files ──────</span>  ls   cd   pwd  mkdir touch rm   cp   mv   cat  echo
<span style="color:#555">── Search ─────</span>  grep find
<span style="color:#555">── System ─────</span>  chmod whoami date  uname hostname clear history tree
<span style="color:#555">── Other ──────</span>  help  exit`;
      const d = document.createElement('div'); d.className = 't-line'; d.innerHTML = table; d.style.whiteSpace = 'pre'; out.appendChild(d); out.scrollTop = out.scrollHeight;
    }
  };

  function execute(raw) {
    const line = raw.trim();
    if (!line) return;
    cmdHistory.push(line);
    histIdx = cmdHistory.length;
    printPrompt(line);
    const parts = line.match(/(?:[^\s"']+|"[^"]*"|'[^']*')+/g) || [];
    const cmd = parts[0];
    const args = parts.slice(1).map(a => a.replace(/^['"]|['"]$/g, ''));
    if (cmds[cmd]) cmds[cmd](args);
    else printErr(`bash: ${cmd}: command not found`);
  }

  // Welcome message
  print('<span style="color:#00D4AA">Linux Terminal Simulator v2.0 — Practice Environment</span>');
  print('<span style="color:#555">Type \'help\' for available commands. Use ↑↓ for history, Tab for completion.</span>');
  print('');
  updatePrompt();

  inp.addEventListener('keydown', e => {
    if (e.key === 'Enter') { const v = inp.value; inp.value = ''; execute(v); histIdx = cmdHistory.length; }
    else if (e.key === 'ArrowUp') { e.preventDefault(); if (histIdx > 0) { histIdx--; inp.value = cmdHistory[histIdx] || ''; } }
    else if (e.key === 'ArrowDown') { e.preventDefault(); if (histIdx < cmdHistory.length - 1) { histIdx++; inp.value = cmdHistory[histIdx] || ''; } else { histIdx = cmdHistory.length; inp.value = ''; } }
    else if (e.key === 'l' && e.ctrlKey) { e.preventDefault(); out.innerHTML = ''; }
    else if (e.key === 'Tab') { e.preventDefault(); const val = inp.value; const parts = val.split(' '); const last = parts[parts.length - 1]; if (!last) return; const node = getNode(cwd); const matches = Object.keys(node?.children || {}).filter(k => k.startsWith(last)); if (matches.length === 1) { parts[parts.length - 1] = matches[0]; inp.value = parts.join(' '); } else if (matches.length > 1) { printPrompt(val); printOut(matches.join('  ')); } }
  });

  // Click anywhere in terminal focuses input
  document.getElementById('terminal-modal')?.addEventListener('click', () => inp?.focus());
}

/* ── Python Search ──────────────────────────────────────────── */
const FN_DB = {
  print: {
    title: 'print()', desc: 'Outputs data to the console. Accepts multiple arguments separated by commas. The sep parameter sets the separator (default space), end sets the line ending (default newline).', code: `print("Hello, World!")
print("Name:", "Alice", "Age:", 25)
print(f"2 + 2 = {2+2}")
print("A","B","C", sep="-")  # A-B-C`, output: `Hello, World!\nName: Alice Age: 25\n2 + 2 = 4\nA-B-C`
  },
  len: {
    title: 'len()', desc: 'Returns the number of items in an object — strings, lists, tuples, dicts, sets. Essential for iteration and validation.', code: `print(len("Hello"))        # 5
print(len([1,2,3,4,5]))    # 5
print(len({"a":1,"b":2}))  # 2
print(len((10,20,30)))     # 3`, output: `5\n5\n2\n3`
  },
  range: {
    title: 'range()', desc: 'Generates a sequence of integers. range(stop), range(start,stop), or range(start,stop,step). Returns a lazy range object — use list() to see values.', code: `for i in range(5): print(i,end=" ")
for i in range(2,10,2): print(i,end=" ")
nums = list(range(1,6))
print(nums)`, output: `0 1 2 3 4 \n2 4 6 8 \n[1, 2, 3, 4, 5]`
  },
  input: {
    title: 'input()', desc: 'Reads a line of text from the user. Always returns a string — convert with int() or float() as needed.', code: `name = input("Enter name: ")
age  = int(input("Enter age: "))
print(f"Hello {name}, you are {age}")`, output: `Enter name: Alice\nEnter age: 25\nHello Alice, you are 25`
  },
  type: {
    title: 'type()', desc: 'Returns the type (class) of any object. Useful for debugging and runtime type checking.', code: `print(type(42))       # int
print(type(3.14))     # float
print(type("hi"))     # str
print(type([1,2]))    # list
print(type(True))     # bool`, output: `<class 'int'>\n<class 'float'>\n<class 'str'>\n<class 'list'>\n<class 'bool'>`
  },
  append: {
    title: '.append()', desc: 'Adds a single element to the end of a list. Modifies the list in-place and returns None.', code: `fruits = ["apple","banana"]
fruits.append("cherry")
print(fruits)
nums = []
for i in range(5): nums.append(i**2)
print(nums)`, output: `['apple', 'banana', 'cherry']\n[0, 1, 4, 9, 16]`
  },
  split: {
    title: '.split()', desc: 'Splits a string into a list of substrings. Default splits on any whitespace. Pass a delimiter to split on a specific character.', code: `"Hello World Python".split()
"a,b,c,d".split(",")
"/home/user/docs".split("/")`, output: `['Hello', 'World', 'Python']\n['a', 'b', 'c', 'd']\n['', 'home', 'user', 'docs']`
  },
  join: {
    title: '.join()', desc: 'Joins elements of an iterable into one string, using the string as separator. The iterable elements must be strings.', code: `words = ["hello","world","python"]
print(" ".join(words))
print(",".join(["a","b","c"]))
print("/".join(["home","user"]))`, output: `hello world python\na,b,c\nhome/user`
  },
  format: {
    title: 'f-strings', desc: 'f-strings (formatted string literals) let you embed expressions inside strings using curly braces {}. Fastest and most readable way to format strings in Python 3.6+.', code: `name="Alice"; score=95.5
print(f"Name: {name}")
print(f"Score: {score:.1f}%")
print(f"Double: {score*2}")
print(f"{'PASS' if score>=60 else 'FAIL'}")`, output: `Name: Alice\nScore: 95.5%\nDouble: 191.0\nPASS`
  },
  sorted: {
    title: 'sorted()', desc: 'Returns a new sorted list from any iterable. Use reverse=True for descending. Use key= parameter for custom sort logic.', code: `nums=[3,1,4,1,5,9,2,6]
print(sorted(nums))
print(sorted(nums,reverse=True))
words=["banana","apple","cherry"]
print(sorted(words,key=len))`, output: `[1, 1, 2, 3, 4, 5, 6, 9]\n[9, 6, 5, 4, 3, 2, 1, 1]\n['apple', 'banana', 'cherry']`
  }
};

function initPySearch() {
  const inp = document.getElementById('py-search');
  if (!inp) return;
  inp.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(inp.value); });
  document.getElementById('py-search-btn')?.addEventListener('click', () => doSearch(inp.value));
}

function doSearch(q) {
  const key = q.trim().toLowerCase().replace(/[().]/g, '');
  const match = Object.keys(FN_DB).find(k => k.toLowerCase().includes(key));
  if (!match) { showToast(`No results for "${q}". Try: print, len, range, append…`, 'info', 4000); return; }
  const fn = FN_DB[match];
  const b = document.getElementById('fn-modal-body');
  if (b) b.innerHTML = `<p style="color:var(--text-secondary);font-size:14px;line-height:1.8;margin-bottom:18px">${fn.desc}</p>
    <div class="section-label">Code Example</div>
    <div class="code-block"><button class="copy-btn" onclick="copyCode(this)">Copy</button><pre style="margin:0;white-space:pre-wrap">${esc(fn.code)}</pre></div>
    <div class="section-label" style="margin-top:16px">Output</div>
    <div style="background:#0c0c0c;border:1px solid rgba(255,255,255,0.06);border-radius:8px;padding:14px;font-family:var(--font-code);font-size:13px;color:#4CAF50;white-space:pre-wrap">${esc(fn.output)}</div>`;
  document.getElementById('fn-modal-title').textContent = fn.title;
  document.querySelectorAll('#fn-modal .copy-btn').forEach(b => b.addEventListener('click', () => { }));
  openModal('fn-modal');
  initCopyBtns();
}

window.copyCode = function (btn) {
  const code = btn.nextSibling?.textContent || '';
  navigator.clipboard.writeText(code).then(() => { btn.textContent = '✓ Copied'; setTimeout(() => btn.textContent = 'Copy', 2000); });
};

/* ── Linux Command Search ───────────────────────────────────── */
function initLinuxSearch() {
  const inp = document.getElementById('lx-search');
  if (!inp) return;
  inp.addEventListener('input', () => {
    const q = inp.value.toLowerCase();
    document.querySelectorAll('.cmd-card').forEach(c => {
      const visible = (c.dataset.cmd || '').includes(q) || (c.querySelector('.cmd-card-desc')?.textContent || '').toLowerCase().includes(q);
      c.style.opacity = visible ? '' : '0'; c.style.pointerEvents = visible ? '' : 'none'; c.style.transform = visible ? '' : 'scale(0.95)';
    });
  });
}

/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.main')?.classList.add('page-enter');
  initReveal();
  initCounters();
  initProgressBars();
  initRings();
  initRipples();
  initModals();
  initCopyBtns();
  initAccordions();
  initTabs();
  initTasks();
  initInterpreter();
  initTerminal();
  initPySearch();
  initLinuxSearch();
  initPageTransitions();
  refreshTaskStats();
  // Stats with countup for dashboard rings
  setTimeout(initRings, 100);
});
