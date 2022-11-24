import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <main>
                <h1>Contact Us</h1>
                <form>
                    <div>
                        <label htmlFor="">Name:</label>
                        <input type="text" required placeholder='Enter name..' />
                    </div>
                    <div>
                        <label htmlFor="">Email:</label>
                        <input type="email" required placeholder='xyz@abc.com' />
                    </div>
                    <div>
                        <label htmlFor="">Message:</label>
                        <input type="text" required placeholder='Tell us about about your query..' />
                    </div>
                    <button type='submit'>Send</button>



                </form>
            </main>

        </div>
    )
}

export default Contact
