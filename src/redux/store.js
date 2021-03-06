/*
import profileReducer from "./profile_reducer";
import dialogReducer from "./dialogs_reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hello!',
                    likesCount: 1005,
                    dislikesCount: 105,
                    url: 'https://pixy.org/src/480/thumbs190/4800648.jpg'
                },
                {
                    id: 2,
                    message: 'How"re you?',
                    likesCount: 100500,
                    dislikesCount: 1050,
                    url: 'https://cache.desktopnexus.com/thumbseg/1753/1753481-bigthumbnail.jpg'
                },
                {
                    id: 3,
                    message: 'How"s your life?',
                    likesCount: 1050,
                    dislikesCount: 150,
                    url: 'https://hdwallsbox.com/wallpapers/m/12/nature-flowers-macro-m11645.jpg'
                },
                {
                    id: 4,
                    message: 'How"s your day?',
                    likesCount: 150,
                    dislikesCount: 15,
                    url: 'https://avatars.mds.yandex.net/get-pdb/1590269/e908d30d-87d8-47e8-9c56-c5d92fd9ff79/s375'
                },
            ],
            newPostText: 'Default Post Text',
            likesCountDefault: 10,
            dislikesCountDefault: 1,
            urlDefault: 'https://www.akibanation.com/wp-content/uploads/2016/07/Kon.BLEACH.full_.170410-150x150.jpg',
        },
        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Peppa Pig',
                    photoUrl: 'https://sun9-28.userapi.com/c847021/v847021528/44667/lMWp94wS5jQ.jpg'
                },
                {
                    id: 2,
                    name: 'George',
                    photoUrl: 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/81/81dfb27a31316221ac10f3b1f9b6a3a55899d0af_medium.jpg'
                },
                {
                    id: 3,
                    name: 'Daddy Pig',
                    photoUrl: 'https://img.kp40.ru/avatars/30569.jpg?i=1'
                },
                {
                    id: 4,
                    name: 'Mummy Pig',
                    photoUrl: 'https://slovnet.ru/wp-content/uploads/2018/12/18-10-150x150.png'
                },
                {
                    id: 5,
                    name: 'April O`Neil',
                    photoUrl: 'http://localhost:3000/pic/avatars/April/April.png'
                },
                {
                    id: 6,
                    name: 'Bibop',
                    photoUrl: 'http://localhost:3000/pic/avatars/Bibop/Bibop.jpg'
                },
                {
                    id: 7,
                    name: 'Casey',
                    photoUrl: 'http://localhost:3000/pic/avatars/Casey/Casey.jpg'
                },
                {
                    id: 8,
                    name: 'Don',
                    photoUrl: 'http://localhost:3000/pic/avatars/Don/Don.jpg'
                },
                {
                    id: 9,
                    name: 'Karai',
                    photoUrl: 'http://localhost:3000/pic/avatars/Karai/Karai.jpg'
                },
                {
                    id: 10,
                    name: 'Krang',
                    photoUrl: 'http://localhost:3000/pic/avatars/Krang/Krang.jpg'
                },
                {
                    id: 11,
                    name: 'Leo',
                    photoUrl: 'http://localhost:3000/pic/avatars/Leo/Leo.jpg'
                },
                {
                    id: 12,
                    name: 'Mikey',
                    photoUrl: 'http://localhost:3000/pic/avatars/Mikey/Mikey.jpg'
                },
                {
                    id: 13,
                    name: 'Raph',
                    photoUrl: 'http://localhost:3000/pic/avatars/Raph/Raph.jpg'
                },
                {
                    id: 14,
                    name: 'Rockstady',
                    photoUrl: 'http://localhost:3000/pic/avatars/Rockstady/Rockstady.jpg'
                },
                {
                    id: 15,
                    name: 'Shredder',
                    photoUrl: 'http://localhost:3000/pic/avatars/Shredder/Shredder.png'
                },
                {
                    id: 16,
                    name: 'Splinter',
                    photoUrl: 'http://localhost:3000/pic/avatars/Splinter/Splinter.jpg'
                },
                {
                    id: 17,
                    name: 'Foot Ninja',
                    photoUrl: 'http://localhost:3000/pic/avatars/FootClan/Foot-Ninja.jpg'
                },
                {
                    id: 18,
                    name: 'Elite Foot Ninja',
                    photoUrl: 'http://localhost:3000/pic/avatars/FootClan/Elite-Foot-Ninja.jpg'
                },
            ],
            messagesIn: [
                {id: 1, message: 'Message_in_1'},
                {id: 2, message: 'Message_in_2'},
                {id: 3, message: 'Message_in_3'},
                {id: 4, message: 'Message_in_4'},
                {id: 5, message: 'Message_in_5'},
                {id: 6, message: 'Message_in_6'},
                {id: 7, message: 'Message_in_7'},
                {id: 8, message: 'Message_in_8'},
                {id: 9, message: 'Message_in_9'},
                {id: 10, message: 'Message_in_10'},
            ],
            messagesOut: [
                {id: 1, message: 'Message_out_1'},
                {id: 2, message: 'Message_out_2'},
                {id: 3, message: 'Message_out_3'},
                {id: 4, message: 'Message_out_4'},
                {id: 5, message: 'Message_out_5'},
                {id: 6, message: 'Message_out_6'},
                {id: 7, message: 'Message_out_7'},
                {id: 8, message: 'Message_out_8'},
                {id: 9, message: 'Message_out_9'},
                {id: 10, message: 'Message_out_10'},
            ],
            newMessageText: 'Default Message Text',
        },
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer; //observer
    },

    _callSubscriber() {
        console.log(this._state);
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);

    },
}

export default store;

*/
