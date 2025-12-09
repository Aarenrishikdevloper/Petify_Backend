import { Medical } from "../models/medicalschema";
import { UserPetsModel } from "../models/userpetmodel";
import { medicalRequest } from "../types/type";
import { Request, Response } from "express";

export const addMedical = async (
  req: Request<{ id: string }, any, medicalRequest>,
  res: Response,
) => {
  try {
    const petId = req.params.id;
    console.log("endpoint hit");
    const { date, medication, isNotified, isNewMedical, status, notes } =
      req.body;
    if (!petId) {
      return res.status(400).send({ message: "Please Include a pet id" });
    }

    const newMedical = await Medical.create({
      date: date,
      pet: petId,
      medication: medication,
      notes: notes,
      status: status,
      isNotified: isNotified,
      isNewMedical: isNewMedical,
    });

    return res
      .status(200)
      .json({ message: "Sucessfully Created meical record", data: newMedical });
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};
export const getMedicalNotification = async (
  req: Request<{ id: string }, any, {}>,
  res: Response,
) => {
  try {
    const petid = req.params.id;
    if (!petid) {
      return res.status(400).json({ message: "Petid is required" });
    }

    const medicalRecords = await Medical.find({ pet: petid }).populate("pet");
    return res.status(200).json({ data: medicalRecords });
  } catch (error: unknown) {
    console.error(error);
    return res.status(500).json({ message: "Something Went Wrong" });
  }
};
