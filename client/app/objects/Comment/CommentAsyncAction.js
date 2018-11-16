import asteroid from '../../common/asteroid';


export function callAddComment(data) { // data = textComment, authorId
    return asteroid.call('addComment', data)
}

export function callDeleteComment(data) { // data = textComment, authorId
    return asteroid.call('deleteComment', data)
}