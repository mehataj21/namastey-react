const Contact=()=>{
    return(

        <div>
            <h1 className="font-bold text-3xl p-4 m-4">contact us page</h1>
            <form>
                <input type="text" 
                className="border border-black p-2 mx-5"
                placeholder="name"
                />
                <input type="text" 
                className="border border-black p-2 mx-5"
                placeholder="message"
                />
                <button
                className="bg-black text-white py-3 px-8"
                >Submit</button>
            </form>
        </div>
    )
}
export default Contact;