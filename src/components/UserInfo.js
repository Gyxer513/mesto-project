export default class UserInfo {
    constructor(userName, userAbout) {
        this._userName = userName;
        this._userAbout = userAbout;
        this._avatarUser = document.querySelector('.profile__photo-image');
    }
getUserInfo() {
        return {
          name : this._userName.textContent,
          about: this._userAbout.textContent,
        }
      }
    
setUserInfo(data) {
        this._userName.textContent = data.name;
        this._userAbout.textContent = data.about;
      }
setAvatar(data) {
  this._avatarUser.src = data.avatar;
}
}