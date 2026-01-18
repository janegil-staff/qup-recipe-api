import app from "./app.js";
import job from "./config/cron.js";
import { ENV } from "./config/env.js";

const PORT = ENV.PORT || 5001;

if (ENV.NODE_ENV === "production") job.start();

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
