/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // neo4j-driver uses Node.js internals that can't be bundled by webpack.
  // Tell Next.js to treat it as an external (loaded natively at runtime).
  serverExternalPackages: ["neo4j-driver", "react-force-graph-2d"],
}

export default nextConfig
