/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Forces pure static HTML export
  images: {
    unoptimized: true, // Required for static export to avoid image optimization server
  },
  sassOptions: {
    quietDeps: true,
    silenceDeprecations: [
      "mixed-decls",
      "legacy-js-api",
      "import",
      "slash-div",
      "global-builtin",
    ],
  },
};

module.exports = nextConfig;
