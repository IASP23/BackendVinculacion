import { Student } from "../models/student.js";

export const getStudents = async (req, res) => {
  try {
    const students = await Student.findAll();
    res.json(students);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const getStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await Student.findByPk(id);
    res.send(student);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);
    console.log(newStudent);
    res.send(newStudent);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
export const updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const studentUpdate = await Student.findByPk(id);
    studentUpdate.set(req.body);
    await studentUpdate.save();
    res.status(200).send(studentUpdate);
  } catch (error) {
    return res.sendStatus(500).json({ message: error.message });
  }
};
export const deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;
    await Student.destroy({
      where: { id },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
