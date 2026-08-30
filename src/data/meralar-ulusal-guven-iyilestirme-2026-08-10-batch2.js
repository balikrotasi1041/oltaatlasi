// Compatibility aggregation layer. The original 2026-08-10 research snapshot is kept
// byte-for-byte in *-legacy.js; later evidence patches are merged here so the existing
// meralar-tumu import path stays stable.
import { ulusalGuvenIyilestirmeleri20260810Batch2 as legacyResearch } from "./meralar-ulusal-guven-iyilestirme-2026-08-10-batch2-legacy.js";
import { dailyQualityResearch20260830 } from "./meralar-daily-quality-2026-08-30-stage2.js";

export const ulusalGuvenIyilestirmeleri20260810Batch2={
  ...legacyResearch,
  ...dailyQualityResearch20260830,
};
