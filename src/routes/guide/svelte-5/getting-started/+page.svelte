<script lang="ts">
  import { HighlightCompo, Code, H2 } from 'runes-webkit';
  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Getting Started - Svelte Heros v2 v2</h1>

<div class="my-8 flex gap-2">
  <a href="https://github.com/sponsors/shinokada" target="_blank" aria-label="Sponsor @shinokada"
    ><img
      src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub&color=%23fe8e86"
      alt="sponsor"
    /></a
  >
  <a
    href="https://www.npmjs.com/package/svelte-heros-v2"
    rel="nofollow"
    target="_blank"
    aria-label="npm svelte-heros-v2"
    ><img src="https://img.shields.io/npm/v/svelte-heros-v2/next" alt="npm" /></a
  >
  <a
    href="https://opensource.org/licenses/MIT"
    rel="nofollow"
    target="_blank"
    aria-label="MIT License"
    ><img src="https://img.shields.io/github/license/shinokada/svelte-heros-v2" alt="License" /></a
  >
  <a
    href="https://www.npmjs.com/package/svelte-heros-v2"
    rel="nofollow"
    target="_blank"
    aria-label="npm svelte-heros-v2"
    ><img src="https://img.shields.io/npm/dw/svelte-heros-v2.svg" alt="npm" /></a
  >
</div>

<H2>Requirements</H2>

<HighlightCompo codeLang="ts" code={modules['./md/requirement.md'] as string} />

<H2>Installation</H2>

<HighlightCompo codeLang="ts" code={modules['./md/installation.md'] as string} />

<H2>Basic Usage</H2>

<p>In a svelte file:</p>

<HighlightCompo codeLang="ts" code={modules['./md/basic-usage.md'] as string} />

<H2>IDE support</H2>

<p>
  If you are using an LSP-compatible editor, such as VSCode, Atom, Sublime Text, or Neovim, hovering
  over a component name will display a documentation link, features, props, events, etc.
</p>

<H2>Asscessible SVGs</H2>

<p>
  A11y props, <Code>title</Code>, <Code>desc</Code>, and <Code>ariaLabel</Code> are used for accessible
  SVG icons.
</p>

<H2>Faster compiling</H2>

<p>
  If you need only a few icons from this library in your Svelte app, import them directly. This can
  optimize compilation speed and improve performance by reducing the amount of code processed during
  compilation.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/faster-compiling.md'] as string} />

<H2>Passing down other attributes</H2>

<p>Since all icons have <Code>...restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} />

<H2>Using svelte:component</H2>

<HighlightCompo codeLang="ts" code={modules['./md/using-svelte-component.md'] as string} />

<H2>Import all</H2>

<p>Use `import * as Icon from 'svelte-heros-v2`.</p>

<HighlightCompo codeLang="ts" code={modules['./md/import-all.md'] as string} />
