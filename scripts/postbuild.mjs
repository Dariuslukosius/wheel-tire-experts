import { spawnSync } from "node:child_process";

const isVercel = process.env.VERCEL === "1";

if (isVercel) {
  console.log("Skipping react-snap on Vercel build environment.");
  process.exit(0);
}

const command = process.platform === "win32" ? "npx.cmd" : "npx";
const result = spawnSync(command, ["react-snap"], {
  stdio: "inherit",
  env: process.env,
});

if (result.error) {
  throw result.error;
}

process.exit(result.status ?? 0);
