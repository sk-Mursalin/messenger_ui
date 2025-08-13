const isLocalhost = window.location.hostname === "localhost";

export const BASE_URL = isLocalhost
  ? "http://localhost:7000"
  : "/messenger";