import https from "https";
import fs from "fs";

const CLOUD_NAME = "dchefilwo";
const API_KEY = "542991698561342";
const API_SECRET = process.env.CLOUDINARY_API_SECRET;

const auth = Buffer.from(`${API_KEY}:${API_SECRET}`).toString("base64");

const res = await new Promise((resolve) => {
  let data = "";
  https.get(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/resources/image/upload?max_results=500`,
    { headers: { Authorization: `Basic ${auth}` } },
    (r) => { r.on("data", c => data += c); r.on("end", () => resolve(JSON.parse(data))); }
  ).end();
});

// Group by asset_folder
const grouped = {};
for (const r of res.resources) {
  const folder = r.asset_folder || "Other";
  if (!grouped[folder]) grouped[folder] = [];
  grouped[folder].push(`https://res.cloudinary.com/${CLOUD_NAME}/image/upload/w_800,q_auto,f_auto/${r.public_id}`);
}

fs.mkdirSync("src/data", { recursive: true });
fs.writeFileSync(
  "src/data/photos.ts",
  `export const cityPhotos: Record<string, string[]> = ${JSON.stringify(grouped, null, 2)};`
);

console.log("Folders found:", Object.keys(grouped));
console.log("Done!");