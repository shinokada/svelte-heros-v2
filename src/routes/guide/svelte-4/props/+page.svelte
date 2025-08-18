<script lang="ts">
  import { HighlightCompo, Code, H2, H3 } from 'runes-webkit';

  const modules = import.meta.glob('./md/*.md', {
    query: '?raw',
    import: 'default',
    eager: true
  });
</script>

<h1>Props - Svelte Heros v2 v1</h1>

<H2>Prop</H2>

<HighlightCompo codeLang="ts" code={modules['./md/props.md'] as string} clipboardClass="top-2" />

<H2>Variation</H2>

<p>
  The default variation value is outline. Use the <Code>variation</Code> prop to change it to solid,
  mini or micro.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/variation.md'] as string} clipboardClass="top-2" />

<H2>Size</H2>

<p>
  To change the size of an icon, use the <Code>size</Code> prop and specify the desired size. For example:
</p>

<HighlightCompo codeLang="ts" code={modules['./md/size.md'] as string} clipboardClass="top-2" />

<p>
  If you want to override the preconfigured size, you can add a custom size using Tailwind CSS by
  including the desired classes in the <Code>class</Code> prop. For example:
</p>

<HighlightCompo codeLang="ts" code={modules['./md/size-2.md'] as string} clipboardClass="top-2" />

<H2>CSS HEX Color</H2>

<p>
  Use the color attribute to change colors with HEX color code for Filled and Outlined components.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/css-hex-color.md'] as string} clipboardClass="top-2" />

<H2>Stroke width</H2>
<p>Use the <Code>strokeWidth</Code> prop to change the SVG <Code>stroke-width</Code>.</p>

<HighlightCompo codeLang="ts" code={modules['./md/stroke-width.md'] as string} clipboardClass="top-2" />

<H2>CSS framework</H2>

<p>
  You can apply CSS framework color and other attributes directly to the icon component or its
  parent tag using the <Code>class</Code> prop.
</p>

<H3>Tailwind CSS</H3>

<HighlightCompo codeLang="ts" code={modules['./md/tailwind-css.md'] as string} clipboardClass="top-2" />

<H3>Bootstrap</H3>

<HighlightCompo codeLang="ts" code={modules['./md/bootstrap.md'] as string} clipboardClass="top-2" />

<H2>A11y</H2>

<p>
  All icons have aria-label. For example <Code>AcademicCap</Code> has <Code
    >aria-label="academic cap"</Code
  >. Use <Code>ariaLabel</Code> prop to modify the <Code>aria-label</Code> value.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/aria-label.md'] as string} clipboardClass="top-2" />

<p>
  Use <Code>title</Code>, <Code>desc</Code>, and <Code>ariaLabel</Code> props to make your icons accessible.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/a11y-2.md'] as string} clipboardClass="top-2" />

<H2>Dark mode</H2>

<p>
  If you are using the dark mode on your website with Tailwind CSS, add your dark mode class to the <Code
    >class</Code
  > prop.
</p>

<p>Let's use <Code>dark</Code> for the dark mode class as an example.</p>

<HighlightCompo codeLang="ts" code={modules['./md/dark-mode.md'] as string} clipboardClass="top-2" />

<H2>withEvents</H2>

<p>
  As default all icons are unfocusable. However you can add <Code>withEvents</Code> prop to make your
  icons focusable.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/withevents.md'] as string} clipboardClass="top-2" />

<p>
  It is possible to add <Code>tabindex="0"</Code>, but it is not recommended for A11y. If you want
  to use it add <Code>withEvents</Code> props.
</p>

<HighlightCompo codeLang="ts" code={modules['./md/withevents-2.md'] as string} clipboardClass="top-2" />

<H2>Events</H2>

<p>All icons have the following events:</p>

<HighlightCompo codeLang="ts" code={modules['./md/events.md'] as string} clipboardClass="top-2" />

<H2>Passing down other attributes</H2>

<p>Since all icons have <Code>...$$restProps</Code>, you can pass other attibutes as well.</p>

<HighlightCompo codeLang="ts" code={modules['./md/passing-down-other-attributes.md'] as string} clipboardClass="top-2" />

<H2>Dynamically change the variation</H2>

<HighlightCompo codeLang="ts" code={modules['./md/dynamically-change-variation.md'] as string} clipboardClass="top-2" />
