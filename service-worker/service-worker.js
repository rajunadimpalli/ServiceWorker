self.addEventListener('install', function (e) {
  console.log('Install Event:', e);
});
self.addEventListener('active', function (e) {
  console.log('Activate Event:', e);
});
