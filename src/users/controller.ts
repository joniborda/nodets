import { Response, Request } from 'express';

const getUsers = async (req: Request, res: Response) => {
    console.log('asf')
    return res.send({
        id: 1
    });
}

export default getUsers
