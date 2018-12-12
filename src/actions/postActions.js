export const deletePost = (id) => {
    return {
        type: 'DELETE_POST',
        id: id //ou apenas id pq sao props iguais
    }
}