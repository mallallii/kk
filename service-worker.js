self.addEventListener('install', event => {
  console.log('Service Worker 安装成功');
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  console.log('Service Worker 激活成功');
});

self.addEventListener('fetch', event => {
  // 空函数即可
});
