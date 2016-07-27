import './pgs-slide-list.html!'
import 'bower_components/paper-listbox/paper-listbox.html!'
import 'bower_components/paper-item/paper-item.html!'
import 'bower_components/iron-ajax/iron-ajax.html!'

@component('pgs-slide-list')
class PgsSlideList extends polymer.Base {

    @property({ type: Array })
    slides:Array;

    @property({ readOnly: true })
    currentSlideUrl:Object;

    @property({ readOnly: true, notify: true })
    currentSlideContent:String;

    ready() {
        this.$.list.selectIndex(0);
    }

    slideSelected(e) {
        var model = this.$.slides.modelForElement(e.detail.value);

        if (model) {
            this._setCurrentSlideUrl(model.slide.url);
        }
    }

    slideLoaded(e) {
        this._setCurrentSlideContent(e.detail.value);
    }
}

PgsSlideList.register();