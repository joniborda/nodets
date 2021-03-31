import { Response, Request } from 'express';

const getUsers = async (req: Request, res: Response) => {
    return res.send({
        id: 1
    });
}

export default getUsers
