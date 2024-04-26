import { Entrepreneurship } from "../models/entrepreneurship.js";


export const getEntrepreneurshipes = async (req, res) => {
  try {
    const entrepreneurship = await Entrepreneurship.findAll();
    res.json(entrepreneurship);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getEntrepreneurship = async (req, res) => {
  try {
    const { id } = req.params;
    const entrepreneurship = await Entrepreneurship.findByPk(id);
    res.send(entrepreneurship);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createEntrepreneurship = async (req, res) => {
  try {
    const newEntrepreneur = await Entrepreneurship.create(req.body);
    console.log(newEntrepreneur);
    res.send(newEntrepreneur);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateEntrepreneurship = async (req, res) => {
  try {
    const { id } = req.params;
    const entrepreneurshipUpdate = await Entrepreneurship.findByPk(id);
    entrepreneurshipUpdate.set(req.body);
    await entrepreneurshipUpdate.save();
    res.status(200).send(entrepreneurshipUpdate);
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message });
  }
};
export const deleteEntrepreneurship = async (req, res) => {
  try {
    const { id } = req.params;
    await Entrepreneurship.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
