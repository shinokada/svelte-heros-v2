export async function load() {
  const files = import.meta.glob('/src/lib/**/*');

  return {
    fileCount: Object.keys(files).length - 3, // exclude index.ts, types.ts and Icon.svelte
    files: Object.keys(files)
  };
}
