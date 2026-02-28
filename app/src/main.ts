import './style.css'

const strings = ['a software developer', 'a software engineer', 'a coder']

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms))
}

async function runTypewriter(el: HTMLElement) {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = strings[0] ?? ''
    return
  }

  const typingDelayMs = 90
  const deletingDelayMs = 45
  const pauseAfterTypedMs = 1000
  const pauseAfterDeletedMs = 350

  let strIndex = 0

  while (true) {
    const full = strings[strIndex] ?? ''

    for (let i = 1; i <= full.length; i++) {
      el.textContent = full.slice(0, i)
      await sleep(typingDelayMs)
    }

    await sleep(pauseAfterTypedMs)

    for (let i = full.length; i >= 0; i--) {
      el.textContent = full.slice(0, i)
      await sleep(deletingDelayMs)
    }

    await sleep(pauseAfterDeletedMs)
    strIndex = (strIndex + 1) % strings.length
  }
}

const typewriterEl = document.getElementById('typewriter')
if (typewriterEl) {
  void runTypewriter(typewriterEl)
}
