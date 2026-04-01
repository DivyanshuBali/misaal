import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { config } from "dotenv";
import {
  cert,
  getApps,
  initializeApp,
  type ServiceAccount,
} from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

config({ path: resolve(__dirname, "../.env.local") });

const [jsonPath, collection] = process.argv.slice(2);

if (!jsonPath || !collection) {
  console.error("Usage: yarn seed <path-to-json> <collection-name>");
  process.exit(1);
}

const raw = process.env.FIREBASE_SERVICE_ACCOUNT_KEY;
if (!raw) {
  console.error("Missing FIREBASE_SERVICE_ACCOUNT_KEY in .env.local");
  process.exit(1);
}

const serviceAccount = JSON.parse(raw) as ServiceAccount;
const app = getApps().length
  ? getApps()[0]
  : initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore(app);

const data: Record<string, unknown>[] = JSON.parse(
  readFileSync(resolve(jsonPath), "utf-8"),
);

if (!Array.isArray(data)) {
  console.error("JSON file must contain an array of objects.");
  process.exit(1);
}

console.log(`Seeding ${data.length} documents into "${collection}"…`);

async function seed() {
  const batch = db.batch();

  for (const item of data) {
    const ref = db.collection(collection).doc();
    batch.set(ref, item);
  }

  await batch.commit();
  console.log("Done.");
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
