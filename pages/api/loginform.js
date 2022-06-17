export default function handler(req, res) {
    const myUser = process.env.USERNAME;
    const myKey = process.env.PASSWORD;

    // Get data submitted in request's body.
    const body = req.body
  
    // Optional logging to see the responses
    // in the command line where next.js app is running.
    console.log('body: ', body)
  
    // Guard clause checks for first and last name,
    // and returns early if they are not found
    if (!body.username || !body.password) {
      // Sends a HTTP bad request error code
      return res.status(400).json({ data: 'username or password not found' })
    }
  
    // Found the name.
    // Sends a HTTP success code
    // res.status(200).json({ data: `${body.username} ${body.password}` })
    if (body.username === myUser && body.password === myKey) {
        const authenticated = true;
        res.status(200).json({data: body, 'authenticated': authenticated})
        // return authenticated;
    } else {
        const authenticated = false;
        res.status(203).json({data: body, 'authenticated': authenticated})
        // return authenticated
    }
    
    // res.status(200).json({data: body, 'authenticated': authenticated})
}