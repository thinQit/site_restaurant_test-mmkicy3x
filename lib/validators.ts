import { z } from "zod";

export const contactTopicEnum = z.enum([
  "General Question",
  "Private Dining",
  "Catering",
  "Press",
  "Feedback",
]);

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("A valid email is required"),
  phone: z
    .string()
    .trim()
    .max(30, "Phone is too long")
    .optional()
    .or(z.literal("")),
  topic: contactTopicEnum,
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

export const reservationTimeEnum = z.enum([
  "5:00 PM",
  "5:30 PM",
  "6:00 PM",
  "6:30 PM",
  "7:00 PM",
  "7:30 PM",
  "8:00 PM",
  "8:30 PM",
  "9:00 PM",
]);

export const reservationPartySizeEnum = z.enum(["1", "2", "3", "4", "5", "6", "7", "8+"]);
export const reservationSeatingEnum = z.enum(["No preference", "Dining room", "Heated patio"]);
export const reservationOccasionEnum = z.enum([
  "None",
  "Birthday",
  "Anniversary",
  "Date night",
  "Business dinner",
  "Other",
]);

export const reservationSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("A valid email is required"),
  phone: z.string().trim().min(7, "Phone is required").max(30, "Phone is too long"),
  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  time: reservationTimeEnum,
  partySize: reservationPartySizeEnum,
  seating: reservationSeatingEnum,
  occasion: reservationOccasionEnum.optional().or(z.literal("")),
  notes: z.string().trim().max(2000, "Notes are too long").optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
export type ReservationInput = z.infer<typeof reservationSchema>;
