/**
 * DO NOT USE import someModule from '...';
 *
 * @issue-url https://github.com/Jonghakseo/chrome-extension-boilerplate-react-vite/issues/160
 *
 * Chrome extensions don't support modules in content scripts.
 * If you want to use other modules in content scripts, you need to import them via these files.
 *
 */
if (window.self === window.top) {
  import('@pages/content/ui');
}

import('@pages/content/injected');

console.log(
  'content loaded',
  window.self === window.top ? 'TOP FRAME' : 'IFRAME',
  window.location.hostname,
);
