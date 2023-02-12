export const notify = (val, action) => {
    if (action === 'get' && val === null){
        return JSON.parse(localStorage.getItem('notification'))
    }
    else{
        localStorage.setItem('notification', JSON.stringify(val));
    }
}