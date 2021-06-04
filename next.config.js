const withTM = require("next-transpile-modules")([
  "@react-three/xr",
  "three/examples/jsm/loaders/GLTFLoader.js",
  "@webxr-input-profiles/motion-controllers",
]);

module.exports = withTM({
  future: {
    webpack5: true,
  },
});
