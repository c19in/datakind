if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"6a1117f49807738c4699dc4858e537eb","url":"404.html"},{"revision":"ba8001421d1fa507c45e9ce8848c185c","url":"c6edc24bbe9cad910c39.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"6a1117f49807738c4699dc4858e537eb","url":"index.html"},{"revision":"0f451eaa34102d0646cd42434affd8a0","url":"static/css/19.bded3b46.chunk.css"},{"revision":"cb9615687ee710b9cf130a8998e9faea","url":"static/css/2.6c493df4.chunk.css"},{"revision":"af5d5eca98c8633059b4836595f94888","url":"static/css/20.371c3fc8.chunk.css"},{"revision":"41ab11cd4a003ea89f3fa4f22f06f1dd","url":"static/js/0.4e146b0d.chunk.js"},{"revision":"7fd16805969dcebdd3621ae8be18e665","url":"static/js/1.e9b80d11.chunk.js"},{"revision":"1680e2196b2ba9304ea525d79d87cbd2","url":"static/js/11.dc3abded.chunk.js"},{"revision":"a3c2031193a1c399c54736681d4ca58c","url":"static/js/12.5b4f4f8d.chunk.js"},{"revision":"32389657b189fade63fcf23f6496aafc","url":"static/js/13.deb046ce.chunk.js"},{"revision":"ca698e5dec972a8969a8b6adb4aa44cb","url":"static/js/14.24b3dde1.chunk.js"},{"revision":"ee8ed6595d704a209674ab3164059597","url":"static/js/15.bd260481.chunk.js"},{"revision":"97e4c814b31b23fbd557747cd8a59d69","url":"static/js/16.56fa0808.chunk.js"},{"revision":"5441462cb7a3206455ce70fdf8e09218","url":"static/js/17.8ac8fa18.chunk.js"},{"revision":"da3798bb6eb0ba00e95c5528689cc1d9","url":"static/js/18.686bf69c.chunk.js"},{"revision":"6bb5efc5dc68404f1875cac73ac189b7","url":"static/js/19.106e19e7.chunk.js"},{"revision":"363f6c867ac2d01e732ab5d4cde5697c","url":"static/js/2.0d208ca6.chunk.js"},{"revision":"0fce0145567681d33d97289290d3c511","url":"static/js/20.8e005608.chunk.js"},{"revision":"6484d0f14f421a42f5f9d642ec6db674","url":"static/js/21.8a1ee311.chunk.js"},{"revision":"cd92f53c49611f95042f75dafbc2bcaf","url":"static/js/22.52728b0f.chunk.js"},{"revision":"b842e1e8bf173a5a0ea1bce390862f1d","url":"static/js/23.c88023d4.chunk.js"},{"revision":"2316a69abc0d357a6f4de103b8c5f28b","url":"static/js/24.115f5a5d.chunk.js"},{"revision":"435f840c28260c5a2b3e48e7663a96ee","url":"static/js/25.cd83008b.chunk.js"},{"revision":"d716d77ce4fc9e4aed2336bfdc0abb00","url":"static/js/26.28163902.chunk.js"},{"revision":"8dabee60f4c6902075b003da48da2718","url":"static/js/27.1189ecd2.chunk.js"},{"revision":"52f56cc5afca3a0a3f2c931d8f9f04d8","url":"static/js/28.4e312252.chunk.js"},{"revision":"91faa8a552ed9047bac8b3d4bf789aaa","url":"static/js/29.795118bd.chunk.js"},{"revision":"18eefc0a90b18db3c622edb8aa859fcb","url":"static/js/3.ed825bfc.chunk.js"},{"revision":"73de2f82e44ba193321a0221db767e04","url":"static/js/30.e1e86618.chunk.js"},{"revision":"c51080a2c5971dfb63b1d9d983c0d99f","url":"static/js/31.4c3e4248.chunk.js"},{"revision":"4a9bf548722c89a13d8748d386924223","url":"static/js/32.98cf0421.chunk.js"},{"revision":"0b8d8331df867b634b17b8dd89788069","url":"static/js/33.354efee2.chunk.js"},{"revision":"a32f27873ef5cac35f66d02fcedcc4d8","url":"static/js/34.797f4824.chunk.js"},{"revision":"79de11303fabe692036af60b29fce9b9","url":"static/js/35.3f6d319f.chunk.js"},{"revision":"7272bc8db7b84969b41f670932899608","url":"static/js/36.0feb40a6.chunk.js"},{"revision":"bb2d0035a117d12d261d9568e5afe6bd","url":"static/js/37.b42ec5c7.chunk.js"},{"revision":"6adf393de06f5825dbbc578a0eb28380","url":"static/js/38.cd40c129.chunk.js"},{"revision":"448346db7ee749003be0ea78a4133362","url":"static/js/39.ada7181c.chunk.js"},{"revision":"cc72eb636642c3334b98adb951da01f7","url":"static/js/4.92f70140.chunk.js"},{"revision":"fc79c2a7ee652b95e301a1ab6ce6902c","url":"static/js/40.e755cc6a.chunk.js"},{"revision":"ff98ab02822f6e6ee40b0d7d5b2d652e","url":"static/js/41.62dce8de.chunk.js"},{"revision":"fb18984b80e7bc116f83ade8a2539cae","url":"static/js/42.119a5ecb.chunk.js"},{"revision":"79969f332051fcffb56074de357e21e6","url":"static/js/43.92543f7b.chunk.js"},{"revision":"eceead0a164c54fa6784b34c75c94850","url":"static/js/44.ec01b0f1.chunk.js"},{"revision":"82b88767b73552be6eece61548e214af","url":"static/js/5.7d409947.chunk.js"},{"revision":"7d461f65742208eb5f7de1b3584b6e3c","url":"static/js/6.44248e9d.chunk.js"},{"revision":"0bb6e8637baf03c9d2079b299d36cb97","url":"static/js/7.00fe063b.chunk.js"},{"revision":"857751414706b3753ed8c1b552afd2dd","url":"static/js/8.095a7393.chunk.js"},{"revision":"ca5d3a2235cb9b6a790b3f306a645e85","url":"static/js/main.97ebbca1.chunk.js"},{"revision":"7dc713e785cdbc1b377f80b8feefb3fb","url":"static/js/runtime-main.b7f0ebc4.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19bharat\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
