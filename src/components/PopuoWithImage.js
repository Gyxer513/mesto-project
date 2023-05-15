import { Popup } from "./Popup";
export  class PopuoWithImage extends Popup {
    constructor (popup) {
        super(popup);
        this._image = this._popup.querySelector('.zoom__image');
        this._signature = this._popup.querySelector('.zoom__signature');
    }
open(name, link) {
    this._image.src = link;
    this._signature = name;
    super.open();
}
}