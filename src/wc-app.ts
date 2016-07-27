import './wc-app.html!'
import 'src/pgs-slide-list'
import 'bower_components/pgs-md-ed/pgs-md-ed.html!'
import 'bower_components/paper-toolbar/paper-toolbar.html!'
import 'bower_components/paper-drawer-panel/paper-drawer-panel.html!'
import 'bower_components/paper-toggle-button/paper-toggle-button.html!'

@component('wc-app')
class WcApp extends polymer.Base {

    @property()
    slides: Array;

    @property()
    showEditor: true;

}

WcApp.register();