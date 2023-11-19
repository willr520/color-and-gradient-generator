//https://www.section.io/engineering-education/rendering-html-pages-as-a-http-server-response-using-node-js/


import express from 'express';
//import { generateColor, generateSecondaryColor } from "@marko19907/string-to-color";
import { generateColor, generateGradient } from "@marko19907/string-to-color";
import path from 'path'

const app = express();
const port = process.env.PORT || 3000;

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'index.html');
    res.sendFile(indexPath);
});

app.get('/generateColor', (req, res) => {
    const word = req.query.generateColor;
    //const word = data.generateColor;
    const gradient = generateGradient(word);
    const color = generateColor(word);
    //const secondColor = generateSecondaryColor(word);
    //res.json(gradient);
    const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>

    

                body {
                    background: ${gradient};
                    margin: 0;
                    width:100vw;
                    height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-family: 'Helvetica';
                    color: ${color};
                    font-size: 5vw;
                    flex-direction:column;
                    overflow-x: hidden;
                    
                }
                h1{
                    word-break: break-all;
                    overflow-wrap: break-word;
                }

                h1:hover {
                    color:white;
                }

                h2 {
                    font-size: 20px;
                    color: white;
                    margin-top: 10px;
                }
                
                a{
                    text-decoration:none;
                    color:${color};
                }

                a:hover {
                    color:white;
                }
                
            </style>
            <title>Gradient Page</title>
        </head>
        <body>
        <h1>
        ${word}
        </h1>
        <h2>
        ${color}
        </h2>
        <h2>
        ${gradient}
        </h2>
        <h2>
        <a href="/">go back</a>
       </h2>
        </body>
        </html>
    `;

    res.send(html);
});



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  
});
