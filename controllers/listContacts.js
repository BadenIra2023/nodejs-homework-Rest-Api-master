
import Contact from "../models/Contact.js";


export const listContacts = async (req, res) => {
    const { _id: owner } = req.user;
    console.log(req.query)
    const { page = 1, limit = 10 } = req.query;
    const skip = (page-1)*limit;
    const data = await Contact.find({ owner }, "-createdAt -updatedAt", { skip, limit}).populate("owner", "email username" );
 res.status(200).json(data);
};
