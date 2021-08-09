
export const fetchProducts = () => {
    return fetch('data.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => data)
        .catch((e) => alert('error: ' + e))
}