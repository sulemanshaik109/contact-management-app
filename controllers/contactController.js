const Contact = require("../models/Contact");

exports.getAllContacts = async (req, res) => {
    try {
        const { name, email } = req.query;
        let filter = {};
        if (name) {
        filter.name = { $regex: name, $options: "i" };
        }
        if (email) {
        filter.email = { $regex: email, $options: "i" };
        }
        const contacts = await Contact.find(filter);
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json("Server error");
    }
}

exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (!contact) return res.status(404).json({message: "Contact not found"});
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
};

exports.createContact = async (req, res) => {
    try {
        const { name, email, phone, address } = req.body;
        const existingContact = await Contact.findOne({ email });
        if (existingContact) {
        return res.status(400).json({ error: "Email already exists" });
        }
        const newContact = new Contact({ name, email, phone, address });
        await newContact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
};

exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (!contact) return res.status(404).json({message: "Contact not found"});
        res.status(200).json(contact);
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) return res.status(404).json({message: "Contact not found"});
        res.status(200).json({message: "Contact deleted successfully"});
    } catch (error) {
        res.status(500).json({message: "Server error"});
    }
};