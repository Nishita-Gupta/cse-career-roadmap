import neo4j, { Driver } from "neo4j-driver"

declare global {
  // eslint-disable-next-line no-var
  var _neo4jDriver: Driver | undefined
}

function createDriver(): Driver {
  const uri = process.env.NEO4J_URI
  const user = process.env.NEO4J_USER
  const password = process.env.NEO4J_PASSWORD

  if (!uri || !user || !password) {
    throw new Error(
      "Missing Neo4j environment variables. Please set NEO4J_URI, NEO4J_USER, and NEO4J_PASSWORD in .env.local"
    )
  }

  return neo4j.driver(uri, neo4j.auth.basic(user, password))
}

// Singleton — reuse in dev (hot-reload safe)
export function getDriver(): Driver {
  if (process.env.NODE_ENV === "development") {
    if (!global._neo4jDriver) {
      global._neo4jDriver = createDriver()
    }
    return global._neo4jDriver
  }
  return createDriver()
}
