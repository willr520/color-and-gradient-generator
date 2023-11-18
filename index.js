//https://www.section.io/engineering-education/rendering-html-pages-as-a-http-server-response-using-node-js/


import express from 'express';
//import { generateColor, generateSecondaryColor } from "@marko19907/string-to-color";
import { generateColor, generateGradient } from "@marko19907/string-to-color";

const app = express();
const port = process.env.PORT || 3000;


app.get('/:generateColor', (req, res) => {
    const data = req.params;
    const word = data.generateColor;
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

                h2 {
                    font-size: 20px;
                    color: white;
                    margin-top: 10px;
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
        </body>
        </html>
    `;

    res.send(html);
});



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  
});

