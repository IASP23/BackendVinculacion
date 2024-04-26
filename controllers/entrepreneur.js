import { Entrepreneur } from "../models/entrepreneur.js";


export const getEntrepreneurs = async (req, res) => {
  try {
    const entrepreneurs = await Entrepreneur.findAll();
    res.json(entrepreneurs);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getEntrepreneur = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Entrepreneur.findByPk(id);
    res.send(student);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createEntrepreneur = async (req, res) => {
  try {
    const newEntrepreneur = await Entrepreneur.create(req.body);
    console.log(newEntrepreneur);
    res.send(newEntrepreneur);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateEntrepreneur = async (req, res) => {
  try {
    const { id } = req.params;
    const estrepenaurUpdate = await Entrepreneur.findByPk(id);
    estrepenaurUpdate.set(req.body);
    await estrepenaurUpdate.save();
    res.status(200).send(estrepenaurUpdate);
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message });
  }
};
export const deleteEntrepreneur = async (req, res) => {
  try {
    const { id } = req.params;
    await Entrepreneur.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
