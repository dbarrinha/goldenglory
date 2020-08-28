import firebase from '../../firebase'

export const signIn = async ({ email, password }) => {
    let user = {}
    try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
        user = firebase.auth().currentUser;
        console.log(user)
    } catch (error) {
        return ({
            success: false,
            response: {}
        })
    }
    return ({
        success: true,
        response: user
    })
}

export const signUp = async ({ email, password, displayName, photoURL }) => {
    let user = {}
    try {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
        user = firebase.auth().currentUser;
        await user.updateProfile({
            displayName: displayName,
            photoURL: photoURL
        })
        console.log(user)
    } catch (error) {
        return ({
            success: false,
            response: {}
        })
    }
    return ({
        success: true,
        response: user
    })
}

export const signOut = async () => {
    let user = {}
    try {
        await firebase.auth().signOut()
        localStorage.removeItem("User@testeferacode")
    } catch (error) {
        return error
    }
    return user;
}


export const uploadImage = async file => {
    var storageRef = firebase.storage().ref(`profilePic/${file.file.name}`);
    let response = {}
    try {
        await storageRef.put(file.file)
        response = await storageRef.getDownloadURL();
    } catch (error) {
        return error
    }
    return response
}

export const uploadImageCover = async file => {
    var storageRef = firebase.storage().ref(`coverPic/${file.file.name}`);
    let response = {}
    try {
        await storageRef.put(file.file)
        response = await storageRef.getDownloadURL();
    } catch (error) {
        return error
    }
    return response
}
