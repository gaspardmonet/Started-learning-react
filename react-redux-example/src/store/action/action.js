import ActionTypes from "../constant/constant";
import history from "../../History";
// import createBrowserHistory from 'history/createBrowserHistory'
import firebase from "firebase";
// import createBrowserHistory from 'history/createBrowserHistory';
// const history = createBrowserHistory()

// const hsitory = createBrowserHistory()

const firebaseConfig = {
  apiKey: "AIzaSyA5H4Sg02omY2TcAP6jGhJvr5Q0MUTx1F8",
  authDomain: "test1-grljrh.firebaseapp.com",
  databaseURL: "https://test1-grljrh.firebaseio.com",
  projectId: "test1-grljrh",
  storageBucket: "test1-grljrh.appspot.com",
  messagingSenderId: "332714943511",
  appId: "1:332714943511:web:e6509071b9d6b6680f2852"
};
firebase.initializeApp(firebaseConfig);

export function changeUserName() {
  return dispatch => {
    dispatch({ type: ActionTypes.USERNAME, payload: "Ali" });
  };
}


export function signupAction(user) {
  return dispatch => {
    console.log("user", user);
    // history.push('/signin');

    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(createdUser => {
        console.log("signed up successfully", createdUser.uid);
        delete user.password;
        user.uid = createdUser.uid;
        firebase
          .database()
          .ref("users/" + createdUser.uid + "/")
          .set(user)
          .then(() => {
            firebase
              .database()
              .ref("users/")
              .once("value")
              .then(userData => {
                let allUsers = userData.val();
                let currentUserUid = firebase.auth().currentUser.uid;
                dispatch({ type: ActionTypes.ALLUSERS, payload: allUsers });
                dispatch({
                  type: ActionTypes.CURRENTUSER,
                  payload: currentUserUid
                });
                firebase
                  .database()
                  .ref("message/")
                  .once("value")
                  .then(messagesData => {
                    let messages = messagesData.val();
                    console.log(messages);
                    dispatch({ type: ActionTypes.MESSAGES, payload: messages });
                    history.push("/chat");
                  });
              });
          });
      });
  };
}

export function signinAction(user) {
  return dispatch => {
    console.log("user in signin", user);
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(signedinUser => {
        firebase
          .database()
          .ref("users/")
          .once("value")
          .then(userData => {
            let allUsers = userData.val();
            let currentUserUid = firebase.auth().currentUser.uid;
            let allUsersArr = [];
            for (var key in allUsers) {
              allUsersArr.push(allUsers[key]);
            }
            console.log(allUsersArr);
            dispatch({ type: ActionTypes.ALLUSERS, payload: allUsersArr });
            dispatch({
              type: ActionTypes.CURRENTUSER,
              payload: currentUserUid
            });
            firebase
              .database()
              .ref("message/")
              .once("value")
              .then(messagesData => {
                let messages = messagesData.val();
                console.log(messages);

                dispatch({ type: ActionTypes.MESSAGES, payload: messages });
                history.push("/chat");
              });
          });
      });
  };
}

export function changeRecipientUID(recpUID) {
  return dispatch => {
    dispatch({ type: ActionTypes.CHANGERECPUID, payload: recpUID });
  };
}

export function sendMessage(message) {
  return dispatch => {
    firebase
      .database()
      .ref("message/")
      .push(message)
      .then(() => {
        console.log("message sent");
      });
  };
}
