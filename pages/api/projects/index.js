import { projects } from '../../../data/projects.js';

export default function handler(req, res) {

    res.status(200).json(projects);
 
}


