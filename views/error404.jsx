const React = require('react')
const Def = require('./default')

function error404() {
    return (
        <Def>
            <main>
                <div className='my-2'>
                    <h1>404: PAGE NOT FOUND</h1>
                    <p>Oops, sorry, we can't find this page!</p>
                    <div className='py2'>
                        <img src='/images/sad-otter.jpg' alt='Otter with its hands over its eyes' />
                        <div className='py-2'>
                            Photo by <a href='https://unsplash.com/@victoriabcphotographer'>Christina Victoria Craft</a> on <a href='https://unsplash.com/'> Unsplash </a>
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = error404