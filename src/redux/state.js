let store = {
  _state: {
    profilePage: {
      postData: [
        { id: 0, message: "post1", likesCount: 111 },
        { id: 1, message: "post2", likesCount: 222 },
        { id: 2, message: "post2", likesCount: 333 },
      ],
      newPostText: "",
    },
    messagesPages: {
      dialogsData: [
        { id: 1, name: "dymich" },
        { id: 2, name: "Andrsew1" },
        { id: 4, name: "Andrew2" },
        { id: 5, name: "Andrew3" },
        { id: 6, name: "Andrew4" },
      ],
      messagesData: [
        { id: 1, message: "messageymich" },
        { id: 2, message: "messageAndrew1" },
        { id: 4, message: "messageAndrew2" },
        { id: 5, message: "messageAndrew3" },
        { id: 6, message: "messageAndrew4" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },

  addPost(postMessage) {
    debugger;
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.postData.push(newPost);
    console.log(this._state.profilePage.postData);
  },
  updateNewPostText(newText) {
    debugger;
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },
  /*Колл бек функции rerenderEntireTree*/
  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

/*Экспортируем store*/
export default store;
/*Теперь можно обратится к сторе через консоль браузера*/
window.store = store;
/*Есть интересная задача про FooBar.
    Суть её заключается в том, что дан массив чисел, допустим от 1 до 100.
Нужно сделать так, что бы числа, делящиеся на 3 без остатка принимали значения Foo, а числа, делящиеся на 5 принимали значение Bar, а числа делящиеся на 3 и на 5 принимали значение Foobar.
    И всё вроде бы ничего, и моих скудных знаний хватило, что бы решить данную задачу. Однако, чувство, что я написал 100 срок кода, вместо 5 заставило меня обратиться к вам.
    Друзья, подскажите, как можно было решить данную задачу покороче. Спасибо!
    Собственно мой код,*/

let clear = () => {
  console.clear();
};
setTimeout(clear, 1000);
