const React = require('react')

function Def(html) {
    return (
        <html>
            <head>
                <title>REST-rant</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
                <link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Righteous&family=Signika:wght@300&display=swap" rel="stylesheet" />
                <link rel='stylesheet' href='/css/style.css' />
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/places'>Places</a>
                        </li>
                        <li>
                            <a href='/places/new'>Add Place</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
            <div id='footer'>
                <p id='footer_text'>
                    Created by: Patrick Bowes {' '}
                    <a target='_blank' rel='noopener noreferrer' href='https://github.com/bowespa'>
                        <img id='github' alt='GitHub' src='../images/github.png' />
                    </a>
                </p>
            </div>
        </html>
    )
}

module.exports = Def