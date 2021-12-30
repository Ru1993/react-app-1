import profileReducer, { deletePost, newProfile } from './profileReducer';

let state = {
    post: [
        { id: 1, message: "Hello", like: 2 },
        { id: 2, message: 'Cool', like: 4 }
    ]
}

test('test profile post',()=>{
    let action = newProfile('newPostText');
    let newPosts = profileReducer(state, action );

    expect(newPosts.post.length).toBe(3);
})

test('test profile delete post',()=>{
    let action = deletePost(1);
    let newPosts = profileReducer(state, action );

    expect(newPosts.post.length).toBe(1);
})

test('test 1000 delete post',()=>{
    let action = deletePost(1000);
    let newPosts = profileReducer(state, action );

    expect(newPosts.post.length).toBe(2);
})

