const Notification = () => {
    const handleNotify = () => {
        localStorage.setItem('notification', JSON.stringify(true));
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <button type="button" onClick={() => handleNotify()}
                    className="bg-indigo-600 hover:bg-blue-800  text-white text-sm font-medium py-2 px-6 rounded-lg">
                    Notify
                </button> 
            </div>
        </>
    );
}
export default Notification;