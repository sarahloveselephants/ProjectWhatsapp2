import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";
import fileUpload from "express-fileupload";
import path from "path";
import { fileURLToPath } from "url";
import mime from "mime-types";
import express from 'express';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function registerRoutes(app: Express): Server {
  // Add file upload middleware
  app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max file size
  }));

  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);

      const existing = await storage.getWaitlistSignupByEmail(data.email);
      if (existing) {
        return res.status(400).json({ message: "Email already registered" });
      }

      const signup = await storage.createWaitlistSignup(data);
      res.status(201).json(signup);
    } catch (error) {
      res.status(400).json({ message: error instanceof Error ? error.message : "Invalid request" });
    }
  });

  // File upload endpoint
  app.post("/api/upload", async (req, res) => {
    try {
      if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).json({ message: "No files were uploaded." });
      }

      const file = req.files.file as fileUpload.UploadedFile;
      const extension = path.extname(file.name).toLowerCase();

      // Check file type
      const allowedExtensions = ['.pdf', '.jpg', '.jpeg', '.png'];
      if (!allowedExtensions.includes(extension)) {
        return res.status(400).json({ 
          message: "Invalid file type. Only PDF and image files are allowed." 
        });
      }

      const fileName = await storage.saveUploadedFile(file);
      res.status(201).json({ fileName });
    } catch (error) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Error uploading file" 
      });
    }
  });

  // Get all uploaded files
  app.get("/api/files", async (_req, res) => {
    try {
      const files = await storage.getAllUploadedFiles();
      res.json(files);
    } catch (error) {
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Error retrieving files" 
      });
    }
  });

  // Serve uploaded files
  app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

  const httpServer = createServer(app);
  return httpServer;
}