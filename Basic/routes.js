const fs = require('fs')

const handleRoute = (req, res) => {
    console.log(`request url ${req.url} \n req method ${ req.method} \n headder ${req.headers}`);
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        
        res.setHeader('Content-Type', 'text/html');
        res.write('<html> <head><title>My First page</title></head>');
        res.write('<body><h1>Welcome to my first Assignment</h1>');
        res.write('<form action="/create-user" method="POST"><input type="text" name="username"> <button type="Submit"> Send</button></input> </form>')
        res.write('</body></html>');
        return res.end();
    }
    if (url === '/users' ) {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html> <head><title>My First page</title></head>');
        res.write('<body><h1>Following user regiestred:</h1>');
        res.write('<ul><li>Max (Professor)</li> <li>Manuraj (Student)</li></ul>')
        res.write('</body></html>');
        return res.end(); 
    }
    if (url === '/create-user'){
        const body =[];
        const username = ''
        req.on('data', (chunk) => {
            body.push(chunk);

        });
        return req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
            const username = parseBody.split('=')[1]
            console.log('Username provide by user is : ', username);
            res.setHeader('Content-Type', 'text/html');
            res.write('<html> <head><title>Username page</title></head>');
            res.write('<body><h1>New user name is ');
            res.write(username);
            res.write(  '</h1></body>');
            res.write('</html>');
            res.end();
        
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html> <head><title>My First page</title></head>');
    res.write('<body><h1>Hello from Node js </h1></body>');
    res.write('</html>');
    res.end();
}

module.exports = handleRoute;