import firebase from '../../firebase'

export const newPost = async post => {
    return await firebase.firestore().collection("posts").add({
        userId: post.userId,
        username: post.userName,
        photo: post.userFoto,
        text: post.text,
        useremail: post.useremail,
    })
}

export const getPosts = async () => {
    let querySnapshot = await firebase.firestore().collection("posts").get()
    let posts = []
    await querySnapshot.forEach(doc => {
        posts.push(doc.data())
    })
    return posts
}