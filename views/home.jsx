const React = require('react')
const Def = require('./default')

function home() {
    return (
        <Def>
            <main className='my-2'>
                <h1>REST-Rant</h1>
                <div>
                    <img
                        className='rest-main img-fluid img-center'
                        src='/images/homepage_pic.jpg'
                        alt='Homepage Picture'
                    />
                    <div>
                        <p className='photoCred'>
                            Photo by <a href='https://unsplash.com/@louishansel'>Louis Hansel</a> on <a href='https://unsplash.com/'> Unsplash </a>
                        </p>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home