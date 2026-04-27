import { spawnSync } from "node:child_process";

const shouldSkipReactSnap =
  process.env.SKIP_REACT_SNAP === "1" || process.env.VERCEL === "1";

if (shouldSkipReactSnap) {
  console.log("Skipping react-snap postbuild step in this environment.");
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
