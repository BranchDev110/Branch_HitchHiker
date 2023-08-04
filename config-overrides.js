module.exports = {
  configureWebpack: (config) => {
    config.devServer = {
      headers: {
        "X-Frame-Options": "SAMEORIGIN",
        "X-XSS-Protection": 0,
        "X-Content-Type-Options": "nosniff",
        "X-Permitted-Cross-Domain-Policies": "none",
        "Strict-Transport-Security": "max-age=15552000; includeSubDomains",
        "Content-Security-Policy":
          "default-src 'none'; connect-src 'self';font-src 'self' data: https:; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' data: https:; script-src 'self' data: https:; manifest-src 'self'",
        "Referrer-Policy": "no-referrer",
        "Feature-Policy": "microphone none;camera none;geolocation none;",
        "Expect-Ct": "max-age=0",
      },
    };
  },
};
