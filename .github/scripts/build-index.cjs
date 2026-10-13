// Usage: node scripts/build-index.js <docs-folder> <output.json>
// Example: node scripts/build-index.js ai-for-service /tmp/out/ai-for-service.json
const fs = require('fs');
const path = require('path');

const [root, outFile] = process.argv.slice(2);
if (!root || !outFile) {
  console.error('Usage: node build-index.js <docs-folder> <output.json>');
  process.exit(1);
}

const MAX_SECTION_CHARS = 2000;

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) return e.name.startsWith('.') ? [] : walk(p);
    return /\.mdx?$/.test(e.name) ? [p] : [];
  });
}

function parseFrontmatter(src) {
  const m = src.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) return { meta: {}, body: src };
  const meta = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (kv) meta[kv[1]] = kv[2].replace(/^["']|["']$/g, '');
  }
  return { meta, body: src.slice(m[0].length) };
}

function clean(text) {
  return text
    .replace(/```[\s\S]*?```/g, ' ') // fenced code blocks
    .replace(/^\s*(import|export)\s.*$/gm, ' ') // MDX imports/exports
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, ' ') // MDX comments
    .replace(/<\/?[A-Za-z][^>]*>/g, ' ') // JSX/HTML tags, keep inner text
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ') // images
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1') // links -> text
    .replace(/[*_`>|#]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const slug = (h) =>
  h.toLowerCase().replace(/[^\w\s-]/g, '').trim().replace(/\s+/g, '-');

const records = [];

for (const file of walk(root)) {
  const { meta, body } = parseFrontmatter(fs.readFileSync(file, 'utf8'));
  let url = '/' + file.split(path.sep).join('/').replace(/\.mdx?$/, '');
  url = url.replace(/\/index$/, '') || '/';
  const pageTitle = meta.title || path.basename(file).replace(/\.mdx?$/, '');

  // Split into sections at ## / ### headings (ignoring headings inside code fences)
  const lines = body.replace(/```[\s\S]*?```/g, (b) => b.replace(/^#/gm, '')).split(/\r?\n/);
  let heading = '';
  let buf = [];
  const flush = () => {
    const text = clean(buf.join('\n')).slice(0, MAX_SECTION_CHARS);
    if (text || !heading) {
      records.push({
        id: records.length,
        title: pageTitle,
        heading: clean(heading),
        url: url + (heading ? '#' + slug(clean(heading)) : ''),
        text: (heading ? '' : (meta.description ? meta.description + ' ' : '')) + text,
      });
    }
    buf = [];
  };
  for (const line of lines) {
    const h = line.match(/^#{2,3}\s+(.*)$/);
    if (h) {
      flush();
      heading = h[1];
    } else {
      buf.push(line);
    }
  }
  flush();
}

const useful = records.filter((r) => r.text || r.heading);
fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(useful));
console.log(`Indexed ${useful.length} sections -> ${outFile}`);
