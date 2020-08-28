import firebase from '../../firebase'

export const newCoverPic = async (user, file) => {
    let url = ""

    var storageRef = firebase.storage().ref(`coverPic/${file.name}`);
    await storageRef.put(file)
    url = await storageRef.getDownloadURL();

    let cover = {
        coverpic: url,
    }
    await firebase.firestore().collection('coverPic').doc(user.uid).set(cover)
    return url;
}

export const getCoverPic = async (userId) => {
    let querySnapshot = await firebase.firestore().collection('coverPic').doc(userId).get();
    return await querySnapshot.data()
}


export const deleteCoverPicFile = async (child) => {
    var storageRef = firebase.storage.ref()
    var desertRef = storageRef.child('coverPic/' + child);
    desertRef.delete().then(function () {
        // File deleted successfully
    }).catch(function (error) {
        // Uh-oh, an error occurred!
    });
}