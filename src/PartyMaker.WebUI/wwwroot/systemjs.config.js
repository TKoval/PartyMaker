(() => {
    System.config({
        map: {
            app: "app",
            "@angular/core": "lib/@angular/core.umd.js",
            "@angular/common": "lib/@angular/common.umd.js",
            "@angular/compiler": "lib/@angular/compiler.umd.js",
            "@angular/forms": "lib/@angular/forms.umd.js",
            "@angular/http": "lib/@angular/http.umd.js",
            "@angular/platform-browser": "lib/@angular/platform-browser.umd.js",
            "@angular/platform-browser-dynamic": "lib/@angular/platform-browser-dynamic.umd.js",
            "@angular/router": "lib/@angular/router.umd.js",
            rxjs: "https://unpkg.com/rxjs"
        },
        packages: {
            app: {
                main: "main.js",
                defaultExtensions: "js"
            },
            rxjs: {
                defaultExtensions: "js"
            }
        }
    });
})();
