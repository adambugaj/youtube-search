
const searchResult = ({
  data = [],
} = {}
) => ({
  type: "SEARCH_VALUE",
  value: {
    data,
  }
});

export { searchResult };






// //SET_USER FROM FIREBASE
// const setUser = (userData) => {
//   return {
//     type: 'SET_USER',
//     userData
//   }
// }
//
// //DOWNLOAD DATA FROM FIREBASE
// const fetchSetUser = () => {
//   return (dispatch) => {
//     return database.ref('user').once('value').then((snapshot) => {
//       const userData = [];
//       snapshot.forEach((childSnapshot) => {
//         userData.push({
//           id: childSnapshot.key,
//           ...childSnapshot.val()
//         });
//       });
//      return dispatch(setUser(userData));
//     });
//   };
// };
