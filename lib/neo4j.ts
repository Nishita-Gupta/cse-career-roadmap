import neo4j, { Driver, Session } from "neo4j-driver"

declare global {
  // eslint-disable-next-line no-var
  var _neo4jDriver: Driver | undefined
}

function createDriver(): Driver {
  const uri = process.env.NEO4J_URI
  // AuraDB exports NEO4J_USERNAME; fallback to NEO4J_USER for local dev
  const user = process.env.NEO4J_USERNAME ?? process.env.NEO4J_USER
  const password = process.env.NEO4J_PASSWORD

  if (!uri || !user || !password) {
    throw new Error(
      "Missing Neo4j env vars. Set NEO4J_URI, NEO4J_USERNAME (or NEO4J_USER), and NEO4J_PASSWORD."
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

// Create a session, using NEO4J_DATABASE if provided (required by AuraDB)
export function getSession(driver: Driver): Session {
  const database = process.env.NEO4J_DATABASE
  return driver.session(database ? { database } : undefined)
}
